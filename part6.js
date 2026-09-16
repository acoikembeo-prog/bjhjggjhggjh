
https://hanoimoi.vn/soi-noi-giai-chay-bao-hanoimoi-phuong-khuong-dinh-1756257.html?utm_source=chatgpt.com
Mẹ
COIK.load();

function renderLogin(){

  document.getElementById("app").innerHTML = `

    <div class="lobby">

      <div class="panel">

        <h1>COIKEMFC</h1>

        <h2>Tạo tài khoản</h2>

        <input
          id="username"
          placeholder="Tên tài khoản"
        >

        <br><br>

        <input
          id="password"
          type="password"
          placeholder="Mật khẩu"
        >

        <br><br>

        <button onclick="createAccount()">
          Tạo tài khoản
        </button>

      </div>

    </div>
  `;
}


function createAccount(){

  const username =
    document.getElementById(
      "username"
    ).value.trim();

  const password =
    document.getElementById(
      "password"
    ).value;

  if(!username || !password){

    alert("Nhập đủ tài khoản và mật khẩu");

    return;
  }

  COIK.state.user={
    username,
    password
  };

  COIK.state.coins=0;

  COIK.save();

  renderLobby();
}


function renderLobby(){

  document.getElementById("app").innerHTML = `

    <div class="lobby">

      <div class="panel">

        <h1>SẢNH CHỜ</h1>

        <p>
          Xin chào:
          <b>${COIK.state.user.username}</b>
        </p>

        <p>
          Coins:
          ${COIK.state.coins}
        </p>

      </div>

      <div class="menu">

        <button onclick="chooseClub()">
          Chọn CLB
        </button>

        <button onclick="chooseNation()">
          Chọn ĐTQG
        </button>

        <button onclick="showSquad()">
          Đội hình
        </button>

        <button onclick="startMatch()">
          Trận đấu
        </button>

        <button onclick="showEvents()">
          Sự kiện
        </button>

      </div>

    </div>
  `;
}


function chooseClub(){

  const list =
    COIK.clubs
      .map(c =>
        `<button onclick="setClub('${c}')">
          ${c}
        </button>`
      )
      .join("");

  document.getElementById("app").innerHTML=`

    <div class="lobby">

      <div class="panel">

        <h2>Chọn CLB</h2>

        ${list}

      </div>

    </div>
  `;
}


function setClub(club){

  COIK.state.club=club;

  COIK.save();

  renderLobby();
}


function chooseNation(){

  const list =
    COIK.nations
      .map(n =>
        `<button onclick="setNation('${n}')">
          ${n}
        </button>`
      )
      .join("");

  document.getElementById("app").innerHTML=`

    <div class="lobby">

      <div class="panel">

        <h2>Chọn ĐTQG</h2>

        ${list}

      </div>

    </div>
  `;
}


function setNation(nation){

  COIK.state.nation=nation;

  COIK.save();

  renderLobby();
}


function showSquad(){

  const cards =
    COIK.players
      .map(p => `

        <div class="player-card">

          <h3>${p.name}</h3>

          <p>${p.pos}</p>

          <b>OVR ${p.ovr}</b>

          <p>
            PAC ${p.pace}<br>
            SHO ${p.shooting}<br>
            PAS ${p.passing}<br>
DRI ${p.dribbling}<br>
            DEF ${p.defending}<br>
            PHY ${p.physical}
          </p>

        </div>

      `)
      .join("");

  document.getElementById("app").innerHTML=`

    <div class="lobby">

      <div class="panel">

        <h2>Đội hình</h2>

        ${cards}

        <br>

        <button onclick="renderLobby()">
          Quay lại
        </button>

      </div>

    </div>
  `;
}


function startMatch(){

  document.getElementById("app").innerHTML=`

    <div>

      <canvas
        id="gameCanvas"
        width="1920"
        height="1080"
        style="
          width:100%;
          max-height:100vh;
          background:#16833a;
        "
      ></canvas>

    </div>
  `;

  COIK.startGame();
}


function showEvents(){

  document.getElementById("app").innerHTML=`

    <div class="lobby">

      <div class="panel">

        <h2>Sự kiện</h2>

        <p>⚽ Sự kiện tuần</p>
        <p>🏆 Rank</p>
        <p>🎴 Mở thẻ</p>
        <p>💰 TTCN</p>

        <button onclick="renderLobby()">
          Quay lại
        </button>

      </div>

    </div>
  `;
}


if(COIK.state.user)
  renderLobby();
else
  renderLogin();
