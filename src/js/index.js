let key =
  "https://api.worldofwarships.com/wows/account/list/?application_id=fde297950d8345d873843e777c3650f4&search=StabbyShpee";
let key2 =
  "https://api.worldofwarships.com/wows/account/info/?application_id=fde297950d8345d873843e777c3650f4&account_id=1033734436";
const playerName = document.getElementById("playerName");
const playerID = document.getElementById("playerID");
const userInputBox = document.getElementById("userInputBox");
const submitBtn = document.getElementById("submitBtn");
const playerBattles = document.getElementById("playerBattles");
const playerKills = document.getElementById("playerKills");
const damageDealt = document.getElementById("damageDealt");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const draws = document.getElementById("draws");

console.log(key);
console.log(key2);

function fetchData(e) {
  e.preventDefault();
  userInputBox.textContent;
  console.log(userInputBox.value);
  let key = `https://api.worldofwarships.com/wows/account/list/?application_id=fde297950d8345d873843e777c3650f4&search=${userInputBox.value}`;
  console.log(key);
  apiInformation(key);
}

submitBtn.addEventListener("click", fetchData);

const apiInformation = async function (key) {
  try {
    const response = await fetch(key);
    const data = await response.json();
    console.log(data.data[0]);
    const specifiedID = data.data[0]["account_id"];
    console.log(specifiedID);
    let key2 = `https://api.worldofwarships.com/wows/account/info/?application_id=fde297950d8345d873843e777c3650f4&account_id=${specifiedID}`;
    console.log(key2);
    const response2 = await fetch(key2);
    const data2 = await response2.json();
    console.log(specifiedID);
    const stats = data2["data"][specifiedID]["statistics"]["pvp"];
    console.log(stats);
    function displayInfo() {
      playerName.innerText = data.data[0]["nickname"];
      playerID.innerText = specifiedID;
      playerBattles.innerText = stats.battles;
      playerKills.innerText = stats.frags;
      damageDealt.innerText = stats.damage_dealt;
      wins.innerText = stats.wins;
      losses.innerText = stats.losses;
      draws.innerText = stats.draws;
    }
    displayInfo();
  } catch (error) {
    console.log(error);
    userInputBox.value = "This User Does Not Exist";
  }
};
