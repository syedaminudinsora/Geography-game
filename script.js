let stateInfo = {};
let stateInfo2 = {};
let score = 100;
let timer = "";
let clickCount = 0;
let startInterval = null;
let fadeOut = 0;
let fadeIn = 0;
let minutes = 0;
let seconds = 0;
let stateInfoLength;
let stateInfoLength2;
let audio1 = new Audio("./audio/game-play.mp3");
let audio2 = new Audio("./audio/claps3.mp3");
let audio3 = new Audio("./audio/applause10.mp3");
let audio4 = new Audio("./audio/boo3.mp3");
let audio5 = new Audio("./audio/scala-milan.wav");

let usaInfo = {HI:"Hawaii",AK:"Alaska",FL:"Florida",SC:"South Carolina",GA:"Georgia",AL:"Alabama",NC:"North Carolina",
TN:"Tennessee",RI:"Rhode Island",CT:"Connecticut",MA:"Massachusetts",ME:"Maine",NH:"New Hampshire",VT:"Vermont",
NY:"New York",NJ:"New Jersey",PA:"Pennsylvania",DE:"Delaware",MD:"Maryland",WV:"West Virginia",KY:"Kentucky",
OH:"Ohio",MI:"Michigan",WY:"Wyoming",MT:"Montana",ID:"Idaho",WA:"Washington",TX:"Texas",CA:"California",AZ:"Arizona",
NV:"Nevada",UT:"Utah",CO:"Colorado",NM:"New Mexico",OR:"Oregon",ND:"North Dakota",SD:"South Dakota",NE:"Nebraska",
IA:"Iowa",MS:"Mississippi",IN:"Indiana",IL:"Illinois",MN:"Minnesota",WI:"Wisconsin",MO:"Missouri",AR:"Arkansas",
OK:"Oklahoma",KS:"Kansas",LA:"Louisiana",VA:"Virginia"};

let africaInfo = {BF:"Burkina Faso",DJ:"Djibouti",BI:"Burundi",BJ:"Benin",ZA:"South Africa",BW:"Botswana",DZ:"Algeria",
ET:"Ethiopia",RW:"Rwanda",TZ:"Tanzania",GQ:"Equatorial Guinea",NA:"Namibia",NGE:"Niger",NG:"Nigeria",TUN:"Tunisia",
LR:"Liberia",LS:"Lesotho",ZW:"Zimbabwe",TG:"Togo",TD:"Chad",ER:"Eritrea",LY:"Libya",GW:"Guinea-Bissau",ZM:"Zambia",
CI:"Côte d'Ivoire",EH:"Western Sahara",CM:"Cameroon",EG:"Egypt",SL:"Sierra Leone",CG:"Congo",CF:"Central African Republic",
AO:"Angola",CD:"Democratic Republic of Congo",GAB:"Gabon",GN:"Guinea",XS:"Somaliland",GH:"Ghana",SZ:"Swaziland",
MG:"Madagascar",MAR:"Morocco",KE:"Kenya",SS:"South Sudan",ML:"Mali",MW:"Malawi",SO:"Somalia",SN:"Senegal",MR:"Mauritania",
UG:"Uganda",SUD:"Sudan",MZ:"Mozambique"};

let europeInfo = {BE:"Belgium",FR:"France",BG:"Bulgaria",DK:"Denmark",HR:"Croatia",DER:"Germany",BA:"Bosnia and Herzegovina",
HU:"Hungary",FI:"Finland",BY:"Belarus",GR:"Greece",RU:"Russia",NL:"Netherlands",PT:"Portugal",NO:"Norway",LV:"Latvia",
LT:"Lithuania",LU:"Luxembourg",PL:"Poland",XK:"Kosovo",CH:"Switzerland",EE:"Estonia",IS:"Iceland",ALB:"Albania",IT:"Italy",
CZ:"Czech Republic",GB:"United Kingdom",IE:"Ireland",ES:"Spain",MEO:"Montenegro",MLD:"Moldova",RO:"Romania",RS:"Serbia",
MK:"Macedonia",SK:"Slovakia",SI:"Slovenia",UA:"Ukraine",SE:"Sweden",AT:"Austria"};

let southAmericaInfo = {PY:"Paraguay",COL:"Colombia",VE:"Venezuela",CL:"Chile",SR:"Suriname",BO:"Bolivia",EC:"Ecuador",
ARG:"Argentina",GY:"Guyana",BR:"Brazil",PE:"Peru",UY:"Uruguay",FK:"Falkland Islands"};

let asiaInfo = {BD:"Bangladesh",MON:"Mongolia",BT:"Bhutan",JO:"Jordan",PS:"Palestine",LB:"Lebanon",LAS:"Laos",TW:"Taiwan",
TR:"Turkey",LK:"Sri Lanka",TL:"Timor-Leste",TM:"Turkmenistan",TJ:"Tajikistan",TH:"Thailand",NP:"Nepal",PK:"Pakistan",
PH:"Philippines",AE:"United Arab Emirates",CN:"China",AF:"Afghanistan",IQ:"Iraq",JP:"Japan",IR:"Iran",AM:"Armenia",SY:"Syria",
VN:"Vietnam",GE:"Georgia",ISL:"Israel",IND:"India",AZB:"Azerbaijan",IDO:"Indonesia",OM:"Oman",KG:"Kyrgyzstan",UZ:"Uzbekistan",
MM:"Myanmar",KH:"Cambodia",CY:"Cyprus",QA:"Qatar",KR:"South Korea",KP:"North Korea",KW:"Kuwait",KZ:"Kazakhstan",SA:"Saudi Arabia",
MY:"Malaysia",YE:"Yemen"};

let canadaInfo = {CANT:"Northwest Territories",CANU:"Nunavut",CANS:"Nova Scotia",CABC:"British Columbia",CASK:"Saskatchewan",
CAQC:"Québec",CAPE:"Prince Edward Island",CAMB:"Manitoba",CAYT:"Yukon",CANB:"New Brunswick",CANL:"Newfoundland and Labrador",
CAON:"Ontario",CAAB:"Alberta"};

let centralAmericaInfo = {CAMPR:"Puerto Rico",CAMDO:"Dominican Republic",CAMNI:"Nicaragua",CAMPA:"Panama",CAMSV:"El Salvador",
CAMHT:"Haiti",CAMTT:"Trinidad and Tobago",CAMJM:"Jamaica",CAMGT:"Guatemala",CAMHN:"Honduras",CAMBZ:"Belize",CAMBS:"Bahamas",
CAMCR:"Costa Rica",CAMMX:"Mexico",CAMCU:"Cuba"};

let australiaInfo = {AUACT:"Australian Capital Territory",AUWA:"Western Australia",AUTAS:"Tasmania",AUVIC:"Victoria",
AUNT:"Northern Territory",AUQLD:"Queensland",AUSA:"South Australia",AUNSW:"New South Wales"};

//hide all maps on load and call all game functions
$( window ).on( "load", function() {
  $("#usa-map,#africa-map,#europe-map,#south-america-map").hide();
  $("#asia-map,#canada-map,#central-america-map,#australia-map").hide();
  $("#click-start,#start-game,#state-id,#score").hide();
  gameStartBinding();
  gameRestartBinding();
  usaMapBinding();
  africaMapBinding();
  europeMapBinding();
  southAmericaMapBinding();
  asiaMapBinding();
  canadaMapBinding();
  centralAmericaMapBinding();
  australiaMapBinding();
});

// show USA map and hide thw world flag map image and unbind click on maps and images befor start
function usaMapBinding() {
$("#hide-usa").click(function(e) {
  $("#world-flag-map,#select-map").hide();
  $("#usa-map,#click-start,#start-game").show();
  $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
  $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
  stateInfo = JSON.parse(JSON.stringify(usaInfo));
  stateInfo2 = JSON.parse(JSON.stringify(usaInfo));
  timer = "3:00";
  info();
})};

// show Africa map and hide thw world flag map image and unbind click on maps and images befor start
function africaMapBinding() {
$("#hide-africa").click(function(e) {
  $("#world-flag-map,#select-map").hide();
  $("#africa-map,#click-start,#start-game").show();
  $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
  $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
  stateInfo = JSON.parse(JSON.stringify(africaInfo));
  stateInfo2 = JSON.parse(JSON.stringify(africaInfo));
  timer = "3:00";
  info();
})};

// show Europe map and hide thw world flag map image and unbind click on maps and images befor start
function europeMapBinding() {
$("#hide-europe").click(function(e) {
  $("#world-flag-map,#select-map").hide();
  $("#europe-map,#click-start,#start-game").show();
  $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
  $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
  stateInfo = JSON.parse(JSON.stringify(europeInfo));
  stateInfo2 = JSON.parse(JSON.stringify(europeInfo));
  timer = "3:00";
  info();
})};

// show South America map and hide thw world flag map image and unbind click on maps and images befor start
function southAmericaMapBinding() {
$("#hide-south-america").click(function(e) {
  $("#world-flag-map,#select-map").hide();
  $("#south-america-map,#click-start,#start-game").show();
  $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
  $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
  // console.log("DEBUG ====", stateInfo, southAmericaInfo);
  stateInfo = JSON.parse(JSON.stringify(southAmericaInfo));
  stateInfo2 = JSON.parse(JSON.stringify(southAmericaInfo));
  timer = "1:00";
  $("#timer").text("01m 00s");
  info();
})};

// show Canada map and hide thw world flag map image and unbind click on maps and images befor start
function canadaMapBinding() {
  $("#hide-canada").click(function(e) {
    $("#world-flag-map,#select-map").hide();
    $("#canada-map,#click-start,#start-game").show();
    $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
    $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
    stateInfo = JSON.parse(JSON.stringify(canadaInfo));
    stateInfo2 = JSON.parse(JSON.stringify(canadaInfo));
    timer = "1:00";
    $("#timer").text("01m 00s");
    info();
})};

// show Asia map and hide thw world flag map image and unbind click on maps and images befor start
function asiaMapBinding() {
  $("#hide-asia").click(function(e) {
    $("#world-flag-map,#select-map").hide();
    $("#asia-map,#click-start,#start-game").show();
    $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
    $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
    stateInfo = JSON.parse(JSON.stringify(asiaInfo));
    stateInfo2 = JSON.parse(JSON.stringify(asiaInfo));
    timer = "3:00";
    info();
})};

// show Central America map and hide thw world flag map image and unbind click on maps and images befor start
function centralAmericaMapBinding() {
  $("#hide-central-america").click(function(e) {
    $("#world-flag-map,#select-map").hide();
    $("#central-america-map,#click-start,#start-game").show();
    $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
    $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
    stateInfo = JSON.parse(JSON.stringify(centralAmericaInfo));
    stateInfo2 = JSON.parse(JSON.stringify(centralAmericaInfo));
    timer = "1:00";
    $("#timer").text("01m 00s");
    info();
})};

// show Australia map and hide thw world flag map image and unbind click on maps and images befor start
function australiaMapBinding() {
  $("#hide-australia").click(function(e) {
    $("#world-flag-map,#select-map").hide();
    $("#australia-map,#click-start,#start-game").show();
    $("#hide-usa,#hide-africa,#hide-europe,#hide-south-america").off();
    $("#hide-asia,#hide-canada,#hide-central-america,#hide-australia").off();
    stateInfo = JSON.parse(JSON.stringify(australiaInfo));
    stateInfo2 = JSON.parse(JSON.stringify(australiaInfo));
    timer = "0:30";
    $("#timer").text("00m 30s");
    info();
})};

// show pop-up info for each country or state when click
function showInfo() {
  $("path").click(function(e) {
    $("#info-box").css("display","block");
    $("#info-box").html($(this).data("name")).delay(50).fadeOut();
  });
  $(document).click(function(e) {
    $("#info-box").css("top",e.pageY-$("#info-box").height()-20);
    $("#info-box").css("left",e.pageX-($("#info-box").width())/2);
  });
};

// get country or state info from thier objects
function info() {
  stateInfoLength = Object.keys(stateInfo).length;
  stateInfoLength2 = Object.keys(stateInfo2).length;
};

// start the game by setting up variables and calling functions
function gameStartBinding(){
  $("#start-game").click(function(e) {
    fadeOut = 500;
    fadeIn = 500;
    clickCount = 0;
    $("#start-game").hide();
    $("#score").show();
    $("#click-start").find("#start-game-text").addClass("fadeIn-color");
    $("#score").find("#score-number").addClass("score-color");
    $("#score").find("#percentage").addClass("score-color");
    selectName();
    showInfo();
    checkMatch();
    // set a timer
    let interval = setInterval(function() {
      audio1.play();
      let timer2 = timer.split(":");
      //by parsing integer, avoid all extra string processing
      let minutes = parseInt(timer2[0], 10);
      let seconds = parseInt(timer2[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      $("#timer").text(minutes + "m " + seconds + "s");
      //check if minutes less than 0
      if (minutes < 0) clearInterval(interval);
      //check if both minutes and seconds are 0
      if (((seconds <= 0) && (minutes <= 0)) || (stateInfoLength === 0)){
        clearInterval(interval);
        gameOver()
      }
      if ((seconds <= 10) && (minutes == 0)){
        $("#score").find("#timer").addClass("animated infinite flash flash-color");
      }
        timer = minutes + ":" + seconds;
    }, 1000);
})};

// select random country or state name for the user
function selectName() {
  let key = Object.keys(stateInfo);
  let randomIndex = Math.floor(Math.random() * key.length);
  randomKey = key[randomIndex];
  randomValue = stateInfo[randomKey]
  $("#start-game-text").text(randomValue);
  $("#state-id").text(randomKey);
  return randomValue;
}

// match rendom name with guessed name and return score based on number of click count
function checkMatch() {
  $("path").bind("click", function(e) {
    let guessedName = $(e.target).data("name");
    let newName = $("#start-game-text").text();
    let newId = $("#state-id").text();
    clickCount++;
    // console.log("Current count: "+ clickCount)
    // console.log("Guessed name: " + guessedName);
    // console.log("New name: " + newName);
    if (guessedName === newName && clickCount === 1){
      // console.log("Correct1!");
      $(e.target).addClass("first-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      $("#score-number").text(score);
      clickCount = 0;
      selectName();
    }
    else if (guessedName === newName && clickCount === 2){
      // console.log("Correct2!");
      $(e.target).addClass("second-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      score -= Math.round((100/stateInfoLength2)/2);
      $("#score-number").text(score);
      clickCount = 0;
      selectName();
    }
    else if (guessedName === newName && clickCount > 2) {
      // console.log("Wrong guessing!");
      $(e.target).addClass("third-click");
      delete stateInfo[newId];
      stateInfoLength = Object.keys(stateInfo).length;
      score -= Math.round(100/stateInfoLength2);
      $("#score-number").text(score);
      clickCount = 0;
      clearInterval(startInterval);
      selectName();
    }
    else if (clickCount === 2) {
      startInterval = setInterval(blinker, 1500);
    }
})};

// make random selected country or state blink for hint
function blinker() {
  let newId = $("#state-id").text();
  $("#" + newId).fadeOut(fadeOut);
  $("#" + newId).fadeIn(fadeIn);
};

// declare score with different categories based on the user answers
function gameOver() {
  fadeOut = 0;
  fadeIn = 0;
  audio1.pause();
  audio1.currentTime = 0;
  clearInterval(startInterval);
  $("#click-start,#score").hide();
  $("#myModal").modal({backdrop: "static"});
  $("path").removeClass("first-click second-click third-click");
  if (stateInfoLength === 0){
    // console.log("You are done!");
    $("#result-header").text("You are done!");
    $("#result-header").addClass("ec ec-clap emoji");
    $("#final-score").text("Your score: " + score + "%");
    switch (true) {
      case (score >= 85):
      audio2.play();
      $("#comment").text("Excellent job!");
      $("#final-score").addClass("ec ec-muscle emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 85 && score >= 70):
      audio3.play();
      $("#comment").text("Good job!");
      $("#final-score").addClass("ec ec-plus1 emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 70 && score >= 55):
      audio3.play();
      $("#comment").text("You could be better!");
      $("#final-score").addClass("ec ec-slightly-smiling-face emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
      case (score < 55):
      audio4.play();
      $("#comment").text("You should study geography!");
      $("#final-score").addClass("ec ec-thinking emoji");
      $("#comment").addClass("ec ec-loudspeaker emoji-comment");
      break;
    }
  }
  else if ((seconds <= 0) && (minutes <= 0) && (stateInfoLength === stateInfoLength2)){
    // console.log("Game over!");
    audio5.play();
    $("#result-header").text("Game over!");
    $("#result-header").addClass("ec ec-lock emoji");
    $("#final-score").text("Time is up!");
    $("#final-score").addClass("ec ec-stopwatch emoji");
    $("#comment").text("You have " + (stateInfoLength2 - stateInfoLength) + 
    " answers out of " + stateInfoLength2 + "!");
    $("#comment").addClass("ec ec-loudspeaker emoji-comment");
  }
  else if ((seconds <= 0) && (minutes <= 0)){
    // console.log("Game over!");
    audio5.play();
    $("#result-header").text("Game over!");
    $("#result-header").addClass("ec ec-lock emoji");
    $("#final-score").text("Time is up!");
    $("#final-score").addClass("ec ec-stopwatch emoji");
    $("#comment").text("You have " + (stateInfoLength2 - stateInfoLength) + 
    " answers out of " + stateInfoLength2 + "!");
    $("#comment").addClass("ec ec-loudspeaker emoji-comment");
  }
}

// restart the game and reset all variable and classes added and call all functions again
function gameRestartBinding() {
  $("#close").click(function(e) {
    // console.log("Game restart!");
    score = 100;
    clickCount = 0;
    $("path").off();
    $("#world-flag-map,#select-map").show();
    $("#select-map").show();
    $("#usa-map,#africa-map,#europe-map,#south-america-map").hide();    
    $("#asia-map,#canada-map,#central-america-map,#australia-map").hide();
    $("#click-start,#start-game,#state-id,#score").hide();        
    $("#start-game-text").text("start button to start the game");
    $("#score-number").text("0");
    $("path").removeClass("first-click second-click third-click");
    $("#score").find("#timer").removeClass("animated infinite flash flash-color");
    $("#score").find("#score-number").removeClass("score-color");
    $("#score").find("#percentage").removeClass("score-color");
    $("#click-start").find("#start-game-text").removeClass("fadeIn-color");
    $("#result-header").removeClass("ec ec-lock ec-clap emoji");
    $("#final-score").removeClass("ec ec-stopwatch ec-muscle ec-plus1 ec-thinking ec-slightly-smiling-face emoji");
    $("#comment").removeClass("ec ec-loudspeaker");
    clearInterval(startInterval);
    info();
    usaMapBinding();
    africaMapBinding();
    europeMapBinding();
    southAmericaMapBinding();
    asiaMapBinding();
    canadaMapBinding();
    centralAmericaMapBinding();
    australiaMapBinding();    
  })
}