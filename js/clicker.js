const table = document.querySelector("#main-table");
const newClick = document.querySelector("#click-surface");
const playerName = document.querySelector("#player-name");
const playerContainer = document.querySelector("#player-name-button");
const playerTable = document.querySelector("#second-table");
const audio = new Audio("../sounds/click2.mp3");
audio.playbackRate = 16;
// audio.volume = 0.5;

const modal = document.querySelector("#staticBackdrop");


let activePlayer = null;
let playerList = ["Bella", "Magnus", "Lila", "Somky", "Pipo", "Tatu", "Zet", "Rob", "Ross", "Angela", "Honduras", "Punjabi", "Tank", "UNIT", "ABSOLUTE", "Big Fudge", "Undertaker", "Kakshi", "KFC", "Ballon"];
let clickCounter = 0;
let players = createPlayers(playerList);
createHTMLTable(players);

function createPlayers(somePlayerList) {
    let players = []
    //somePlayerList.length
    //or custom size
    for (let i = 0; i < 10; i++) {
        let score = 1 + Math.floor(Math.random() * 30) //Score size
        let player = { name: somePlayerList[i], score: score }
        players.push(player)
    }
    players.sort((a, b) => b.score - a.score)
    return players
};

function createHTMLTable(somePlayerList) {

    for (let i = 0; i < somePlayerList.length; i++) {
        const row = document.createElement("tr")
        const positionCell = document.createElement("td")
        const playerCell = document.createElement("td")
        const scoreCell = document.createElement("td")

        positionCell.innerText = i + 1; //Skip 0 position
        playerCell.innerText = somePlayerList[i].name
        scoreCell.innerText = somePlayerList[i].score

        // positionCell.style.width = "1%";
        // playerCell.style.width = "30px";
        playerCell.classList.add("player-cell");

        row.append(positionCell, playerCell, scoreCell)
        table.append(row)
    }
};

let playerContainerStatus = false;
playerContainer.addEventListener("pointerdown", e => {

    if (playerContainerStatus == true) {

        //Update local players list
        activePlayer.name = playerName.value;
        let position = players.indexOf(activePlayer) + 1;

        //Update HTML table for the new player
        table.rows[position].cells[1].innerText = playerName.value;

        //Update HTML player container for the new player
        let newPlayerName = playerTable.rows[0].cells[1]; //Inner text can't be stored as a variable
        newPlayerName.innerText = playerName.value;

        return;
    }

    activePlayer = { name: playerName.value, score: clickCounter };
    players.push(activePlayer);

    createPlayerCointainer();
    playerContainerStatus = true;
});

function createPlayerCointainer() {
    const row = document.createElement("tr");
    const positionCell = document.createElement("td");
    const playerCell = document.createElement("td");
    const scoreCell = document.createElement("td");

    positionCell.innerText = players.length;
    playerCell.innerText = activePlayer.name;
    scoreCell.innerText = activePlayer.score;

    positionCell.style.width = "80px";
    playerCell.classList.add("player-cell");
    scoreCell.style.width = "100px";

    row.append(positionCell, playerCell, scoreCell);
    playerTable.append(row);
};

function updatePlayers() {

    activePlayer.score = clickCounter;
    let position = players.indexOf(activePlayer);

    playerTable.rows[0].cells[2].innerText = clickCounter;

    if (table.rows[position].cells[2].innerText == "Score") {
        table.rows[position + 1].cells[2].innerText = clickCounter;
        return;
    }

    // Only change positions from player until person with less score
    for (let i = position; i > 0; i--) {

        let playerAbove = players[i - 1];

        if (activePlayer.score > playerAbove.score) {

            players[i - 1] = activePlayer;
            players[i] = playerAbove;

            //Update position for player container below leaderboard
            playerTable.rows[0].cells[0].innerText = i;
            updateHTMLTable(i, activePlayer, i + 1, playerAbove);
        }
    }

    //If player didn't move, just update the score, if in the table
    if (players.indexOf(activePlayer) + 1 < players.length) {
        table.rows[players.indexOf(activePlayer) + 1].cells[2].innerText = clickCounter;
    }
    // console.table(players);
};


function updateHTMLTable(upPos, activePlayer, downPos, playerAbove) {

    let upperRowPosition = table.rows[upPos].cells[0];
    let upperRowName = table.rows[upPos].cells[1];
    let upperRowScore = table.rows[upPos].cells[2];

    //If player reaches the top, stop. Don't go into the table head
    if (upperRowPosition.innerText == "#") { return; }

    upperRowPosition.innerText = upPos;
    upperRowName.innerText = activePlayer.name;
    upperRowScore.innerText = activePlayer.score;

    upperRowPosition.style.color = "var(--text-border)";
    upperRowName.style.color = "var(--text-border)";
    upperRowScore.style.color = "var(--text-border)";

    //If player is kicking the bottom person, exclude them from the leaderboard
    //but outside of table rows so skip with return
    if (downPos == players.length) { return; }

    let downRowPosition = table.rows[downPos].cells[0];
    let downRowName = table.rows[downPos].cells[1];
    let downRowScore = table.rows[downPos].cells[2];

    downRowPosition.innerText = downPos;
    downRowName.innerText = playerAbove.name;
    downRowScore.innerText = playerAbove.score;

    downRowPosition.style.color = "var(--text-faded)";
    downRowName.style.color = "var(--text-faded)";
    downRowScore.style.color = "var(--text-faded)";
};

// const response = fetch("https://reqbin.com/echo/post/json", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: `{
//                 "Id": 78912,
//                 "Customer": "Jason Sweet",
//                 "Quantity": 1,
//                 "Price": 18.00
//                 }`,
//         });

newClick.addEventListener("pointerdown", e => {
    if (e.target.tagName != "BUTTON") {

        clickCounter++;
        audio.play();

        updatePlayers();

        const dot = document.createElement("div");
        const dot2 = document.createElement("div");
        dot.id = e.pointerId;
        dot.classList.add("dot1");
        dot2.classList.add("dot2");
        const container = document.createElement("div");
        container.setAttribute("id", "circle-container");

        clickPosition(e, container);

        container.append(dot);
        container.append(dot2);
        document.body.append(container);

        setTimeout(() => {
            dot.remove();
            dot2.remove();
            container.remove()
        }, 2000);
    }
});

function clickPosition(e, dot) {
    // dot.style.width = `${e.width * 20}px`
    // dot.style.height = `${e.height * 20}px`
    dot.style.width = `${20}px`;
    dot.style.height = `${20}px`;
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
};

//dnone = display none, to hide the leaderboard
//but need tableContainer for the outer container borders as well
let dnone = false;
const tableContainer = document.querySelector("#table-container");
const showLeaderboard = document.querySelector("#show-leaderboard");
showLeaderboard.addEventListener("pointerdown", e => {
    if (dnone == false) {
        showLeaderboard.innerText = "Show Leaderboard";

        // document.body.style.height = "100%";
        table.classList.add("d-none");
        tableContainer.classList.add("d-none");
        dnone = true;

        newClick.classList.add("vh-100");
    } else {
        showLeaderboard.innerText = "Hide Leaderboard";

        newClick.classList.remove("vh-100");
        // document.body.style.height = "100vh";
        table.classList.remove("d-none");
        tableContainer.classList.remove("d-none");
        dnone = false;
    }
});

const navbar = document.querySelector(".navbar");

const sunIcon = document.querySelector(".bi.bi-sun");
sunIcon.addEventListener("pointerdown", e => {

    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");

    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");

    document.body.classList.toggle("light-theme")
})

const moonIcon = document.querySelector(".bi.bi-moon");
moonIcon.addEventListener("pointerdown", e => {

    sunIcon.classList.remove("d-none");
    moonIcon.classList.add("d-none");

    navbar.classList.add("navbar-dark");
    navbar.classList.remove("navbar-light");

    document.body.classList.toggle("light-theme")
})