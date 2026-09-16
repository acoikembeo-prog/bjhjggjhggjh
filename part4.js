COIK.graphics = {

  quality:"4K",

  pixelRatio(){
    return Math.min(
      window.devicePixelRatio || 1,
      2
    );
  },

  resizeCanvas(canvas){

    const rect =
      canvas.getBoundingClientRect();

    const ratio =
      this.pixelRatio();

    canvas.width =
      Math.floor(
        rect.width * ratio
      );

    canvas.height =
      Math.floor(
        rect.height * ratio
      );
  }
};


COIK.save = function(){

  localStorage.setItem(
    "COIKEMFC_SAVE",
    JSON.stringify(
      COIK.state
    )
  );
};


COIK.load = function(){

  const data =
    localStorage.getItem(
      "COIKEMFC_SAVE"
    );

  if(data){

    COIK.state =
      Object.assign(
        COIK.state,
        JSON.parse(data)
      );
  }
};


COIK.reset = function(){

  localStorage.removeItem(
    "COIKEMFC_SAVE"
  );

  location.reload();
};


COIK.startGame = function(){

  const canvas =
    document.getElementById(
      "gameCanvas"
    );

  if(!canvas)
    return;

  COIK.graphics
    .resizeCanvas(canvas);

  window.currentGame =
    new FootballGame(canvas);
};
