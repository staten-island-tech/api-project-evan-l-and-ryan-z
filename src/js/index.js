const key =
  "https://api.worldofwarships.com/wows/account/list/?application_id=fde297950d8345d873843e777c3650f4&search=stabbyshpee";
const playerName = document.getElementById("playerName");
const playerID = document.getElementById("playerID");

console.log(key);
const apiInformation = async function () {
  try {
    const retrieve = await fetch(key);
    const data = await retrieve.json();
    console.log(data.data[0]);
    function displayInfo() {
      playerName.innerText = data.data[0].nickname;
      playerID.innerText = data.data[0].account_id;
    }
    displayInfo();
  } catch (error) {
    console.log(error);
  }
};

apiInformation();
