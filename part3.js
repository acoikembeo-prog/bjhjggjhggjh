*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:#071018;
  color:#fff;
  font-family:Arial,sans-serif;
}

button{
  border:0;
  border-radius:10px;
  padding:12px 18px;
  background:#1677ff;
  color:white;
  font-weight:bold;
  cursor:pointer;
}

button:hover{
  filter:brightness(1.15);
}

#app{
  min-height:100vh;
}

.lobby{
  min-height:100vh;
  padding:25px;
}

.menu{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(150px,1fr));
  gap:12px;
}

.panel{
  background:#101c29;
  border:1px solid #26384b;
  border-radius:16px;
  padding:20px;
  margin-bottom:15px;
}

.player-card{
  display:inline-block;
  width:170px;
  margin:8px;
  padding:15px;
  border-radius:16px;
  background:
    linear-gradient(
      145deg,
      #24344a,
      #0c1520
    );
}

#gameCanvas{
  width:100%;
  height:auto;
  display:block;
}

@media(max-width:700px){

  .lobby{
    padding:10px;
  }

  .menu{
    grid-template-columns:
      repeat(2,1fr);
  }

  .player-card{
    width:145px;
  }
}
