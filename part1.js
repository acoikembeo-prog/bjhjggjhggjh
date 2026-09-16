
window.COIK = {};

COIK.clubs = [
  "Real Madrid",
  "Barcelona",
  "Manchester City",
  "Liverpool",
  "Arsenal",
  "Bayern Munich",
  "PSG",
  "Inter",
  "AC Milan",
  "Juventus"
];

COIK.nations = [
  "Brazil",
  "Argentina",
  "France",
  "England",
  "Spain",
  "Portugal",
  "Germany",
  "Italy",
  "Netherlands",
  "Belgium",
  "Croatia",
  "Japan"
];

COIK.seasons = [
  "BASE",
  "TOTY 2026",
  "TOTS 2026",
  "ICON",
  "HERO",
  "SPECIAL",
  "RETRO"
];

COIK.players = [
  {
    id:"mbappe",
    name:"Kylian Mbappé",
    club:"Real Madrid",
    nation:"France",
    pos:"ST",
    ovr:92,
    pace:97,
    shooting:94,
    passing:85,
    dribbling:96,
    defending:40,
    physical:82
  },

  {
    id:"vinicius",
    name:"Vinícius Jr",
    club:"Real Madrid",
    nation:"Brazil",
    pos:"LW",
    ovr:91,
    pace:99,
    shooting:88,
    passing:83,
    dribbling:97,
    defending:35,
    physical:76
  },

  {
    id:"bellingham",
    name:"Jude Bellingham",
    club:"Real Madrid",
    nation:"England",
    pos:"CAM",
    ovr:91,
    pace:88,
    shooting:86,
    passing:91,
    dribbling:90,
    defending:78,
    physical:88
  },

  {
    id:"zidane",
    name:"Zinedine Zidane",
    club:"Real Madrid",
    nation:"France",
    pos:"CAM",
    ovr:95,
    pace:85,
    shooting:94,
    passing:98,
    dribbling:97,
    defending:50,
    physical:82
  },

  {
    id:"vandijk",
    name:"Virgil van Dijk",
    club:"Liverpool",
    nation:"Netherlands",
    pos:"CB",
    ovr:90,
    pace:82,
    shooting:55,
    passing:78,
    dribbling:70,
    defending:96,
    physical:95
  },

  {
    id:"neuer",
    name:"Manuel Neuer",
    club:"Bayern Munich",
    nation:"Germany",
    pos:"GK",
    ovr:90,
    pace:55,
    shooting:40,
    passing:88,
    dribbling:50,
    defending:94,
    physical:80
  },

  {
    id:"theo",
    name:"Theo Hernández",
    club:"AC Milan",
    nation:"France",
    pos:"LB",
    ovr:88,
    pace:96,
    shooting:72,
    passing:82,
    dribbling:86,
    defending:76,
    physical:89
  },

  {
    id:"saliba",
    name:"William Saliba",
    club:"Arsenal",
    nation:"France",
    pos:"CB",
    ovr:88,
    pace:88,
    shooting:40,
    passing:75,
    dribbling:65,
    defending:92,
    physical:91
  },

  {
    id:"vieira",
    name:"Patrick Vieira",
    club:"Juventus",
    nation:"France",
    pos:"CDM",
    ovr:93,
    pace:82,
    shooting:74,
    passing:90,
    dribbling:82,
    defending:94,
    physical:97
  },

  {
    id:"dembele",
    name:"Ousmane Dembélé",
    club:"PSG",
    nation:"France",
    pos:"RW",
    ovr:90,
    pace:98,
    shooting:84,
    passing:86,
    dribbling:97,
    defending:30,
    physical:68
  },

  {
    id:"olise",
    name:"Michael Olise",
    club:"Bayern Munich",
    nation:"France",
    pos:"RW",
    ovr:87,
    pace:87,
    shooting:82,
    passing:91,
    dribbling:92,
    defending:40,
    physical:70
  },

  {
    id:"kounde",
    name:"Jules Koundé",
club:"Barcelona",
    nation:"France",
    pos:"RB",
    ovr:87,
    pace:90,
    shooting:35,
    passing:78,
    dribbling:75,
    defending:91,
    physical:83
  }
];

COIK.getPlayer = function(id){
  return COIK.players.find(p => p.id === id);
};

COIK.teamColor = function(players){
  const count = players.length;

  if(count >= 10) return 8;
  if(count >= 6) return 6;
  if(count >= 3) return 3;

  return 0;
};

COIK.createCard = function(player, season, upgrade = 0){

  const card = {
    ...player,
    season,
    upgrade
  };

  card.ovr += upgrade;

  card.pace += upgrade;
  card.shooting += upgrade;
  card.passing += upgrade;
  card.dribbling += upgrade;
  card.defending += upgrade;
  card.physical += upgrade;

  return card;
};

COIK.state = {
  user:null,
  club:null,
  nation:null,

  owned:[],

  coins:0,
  tickets:0,

  formation:"4-1-2-3",

  rank:1000,
  matches:0,
  wins:0,

  upgrade:{}
};
