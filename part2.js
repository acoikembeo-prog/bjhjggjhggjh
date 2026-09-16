
https://hanoimoi.vn/soi-noi-giai-chay-bao-hanoimoi-phuong-khuong-dinh-1756257.html?utm_source=chatgpt.com
Mẹ
this.ball.vel.y =
      dy/length*force;

    this.power = 0;
  }


  pass(){

    const p = this.players[0];

    const target =
      this.players[1];

    const dx =
      target.pos.x-p.pos.x;

    const dy =
      target.pos.y-p.pos.y;

    const len =
      Math.hypot(dx,dy)||1;

    this.ball.vel.x =
      dx/len*650;

    this.ball.vel.y =
      dy/len*650;
  }


  cross(){

    const p = this.players[0];

    this.ball.vel.x = 800;

    this.ball.vel.y =
      (this.canvas.height/2-p.pos.y)
      * 2;
  }


  ai(){

    for(let i=11;i<22;i++){

      const p =
        this.players[i];

      const dx =
        this.ball.pos.x-p.pos.x;

      const dy =
        this.ball.pos.y-p.pos.y;

      const len =
        Math.hypot(dx,dy)||1;

      p.dir.x = dx/len;
      p.dir.y = dy/len;
    }
  }


  update(dt){

    this.controlPlayer();

    this.ai();

    for(const p of this.players)
      p.update(dt);

    this.ball.update(dt);

    this.keepInside();
  }


  keepInside(){

    const w=this.canvas.width;
    const h=this.canvas.height;

    for(const p of this.players){

      p.pos.x =
        Math.max(
          30,
          Math.min(w-30,p.pos.x)
        );

      p.pos.y =
        Math.max(
          30,
          Math.min(h-30,p.pos.y)
        );
    }

    this.ball.pos.x =
      Math.max(
        20,
        Math.min(
          w-20,
          this.ball.pos.x
        )
      );

    this.ball.pos.y =
      Math.max(
        20,
        Math.min(
          h-20,
          this.ball.pos.y
        )
      );
  }


  draw(){

    const ctx=this.ctx;

    const w=this.canvas.width;
    const h=this.canvas.height;

    ctx.clearRect(0,0,w,h);

    ctx.fillStyle="#16833a";
    ctx.fillRect(0,0,w,h);

    ctx.strokeStyle="#ffffff";
    ctx.lineWidth=4;

    ctx.strokeRect(
      20,20,
      w-40,
      h-40
    );

    ctx.beginPath();

    ctx.moveTo(w/2,20);
    ctx.lineTo(w/2,h-20);

    ctx.stroke();

    for(const p of this.players){

      ctx.beginPath();

      ctx.arc(
        p.pos.x,
        p.pos.y,
        p.radius,
        0,
        Math.PI*2
      );

      ctx.fillStyle =
        p.team==="home"
          ? "#1976ff"
          : "#e53935";

      ctx.fill();
    }

    ctx.beginPath();

    ctx.arc(
      this.ball.pos.x,
      this.ball.pos.y,
      this.ball.radius,
      0,
      Math.PI*2
    );

    ctx.fillStyle="#fff";
    ctx.fill();

    ctx.fillStyle="#fff";

    ctx.font="30px Arial";

    ctx.fillText(
      `${this.scoreHome} - ${this.scoreAway}`,
      w/2-40,
      45
    );

    ctx.fillText(
      `POWER ${Math.round(this.power*100)}%`,
      30,
      h-30
    );
  }


  loop(){

    const now=performance.now();

    if(!this.last)
      this.last=now;

    const dt =
      Math.min(
        (now-this.last)/1000,
        0.05
      );

    this.last=now;

    this.update(dt);

    this.draw();

    requestAnimationFrame(
      this.loop.bind(this)
    );
  }
}
class Vec2 {

  constructor(x=0,y=0){
    this.x=x;
    this.y=y;
  }

  add(v){
    this.x += v.x;
    this.y += v.y;
  }

  distance(v){
    return Math.hypot(
      this.x-v.x,
      this.y-v.y
    );
  }
}


class Ball {

  constructor(x,y){

    this.pos = new Vec2(x,y);

    this.vel = new Vec2(0,0);

    this.radius = 8;
  }

  update(dt){

    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;

    this.vel.x *= 0.985;
    this.vel.y *= 0.985;
  }
}


class FootballPlayer {

  constructor(x,y,team){

    this.pos = new Vec2(x,y);

    this.team = team;

    this.speed = 180;

    this.radius = 14;

    this.dir = new Vec2(0,0);
  }

  update(dt){

    this.pos.x +=
      this.dir.x *
      this.speed *
      dt;

    this.pos.y +=
      this.dir.y *
      this.speed *
      dt;
  }
}


class FootballGame {

  constructor(canvas){

    this.canvas = canvas;

    this.ctx =
      canvas.getContext("2d");

    this.players = [];

    this.ball =
      new Ball(
        canvas.width/2,
        canvas.height/2
      );

    this.scoreHome = 0;
    this.scoreAway = 0;

    this.time = 0;

    this.power = 0;

    this.charging = false;

    this.keys = {};

    this.createTeams();

    this.bindKeys();

    requestAnimationFrame(
      this.loop.bind(this)
    );
  }


  createTeams(){

    for(let i=0;i<11;i++){

      this.players.push(
        new FootballPlayer(
          150,
          80+i*45,
          "home"
        )
      );
    }

    for(let i=0;i<11;i++){

      this.players.push(
        new FootballPlayer(
          1000,
          80+i*45,
          "away"
        )
      );
    }
  }


  bindKeys(){

    window.addEventListener(
      "keydown",
      e => {

        this.keys[e.key.toLowerCase()] = true;

        if(e.key.toLowerCase()==="d"){
          this.charging = true;
        }

      }
    );

    window.addEventListener(
      "keyup",
      e => {

        this.keys[e.key.toLowerCase()] = false;

        if(e.key.toLowerCase()==="d"){
          this.shoot(false);
        }

      }
    );
  }


  controlPlayer(){

    const p = this.players[0];

    p.dir.x = 0;
    p.dir.y = 0;

    if(this.keys["arrowup"])
      p.dir.y = -1;

    if(this.keys["arrowdown"])
      p.dir.y = 1;

    if(this.keys["arrowleft"])
      p.dir.x = -1;

    if(this.keys["arrowright"])
      p.dir.x = 1;

    if(this.keys["w"]){
      this.pass();
      this.keys["w"] = false;
    }

    if(this.keys["a"]){
      this.cross();
      this.keys["a"] = false;
    }

    if(this.charging){

      this.power += 0.025;

      if(this.power > 1)
        this.power = 1;
    }
  }


  shoot(low){

    const p = this.players[0];

    const dx =
      this.canvas.width -
      p.pos.x;

    const dy =
      this.canvas.height/2 -
      p.pos.y;

    const length =
      Math.hypot(dx,dy) || 1;

    let force =
      500 + this.power*1000;

    if(low)
      force *= 0.75;

    this.ball.vel.x =
      dx/length*force;
