const key =
  "https://api.worldofwarships.com/wows/account/list/?application_id=fde297950d8345d873843e777c3650f4&search=StabbyShpee";
const playerName = document.getElementById("playerName");
const playerID = document.getElementById("playerID");
const userInputBox = document.getElementById("userInputBox");
const submitBtn = document.getElementById("submitBtn");

console.log(key);

submitBtn.addEventListener("click", configureInput);

function configureInput(e) {
  e.preventDefault();
  console.log(userInputBox.value);
  let userInput = userInputBox.value;
}

console.log(userInputBox.type);

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
