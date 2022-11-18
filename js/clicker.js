const newClick = document.querySelector("#clicker")

let clickCounter = 0;
newClick.addEventListener("pointerdown", e => {
    clickCounter++

    const dot = document.createElement("div")
    const dot2 = document.createElement("div")
    const container = document.createElement("div")

    dot.classList.add("dot1")
    dot2.classList.add("dot2")
    dot.id = e.pointerId
    container.setAttribute("id", "circle-container")

    clickPosition(e, container)

    container.appendChild(dot)
    container.appendChild(dot2)
    document.body.append(container)

    let ele = document.getElementById('your-score')
    ele.innerHTML = 'Your score: ' + clickCounter

    setTimeout(() => {
        dot.remove();
        dot2.remove();
        container.remove()
            // console.log('Dot removed')
    }, 2000)
})

function clickPosition(e, dot) {
    dot.style.width = `${e.width * 20}px`
    dot.style.height = `${e.height * 20}px`
    dot.style.left = `${e.pageX}px`
    dot.style.top = `${e.pageY}px`
}


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

/*
 { "Name": "Magnus", "Score": 10 },
    { "Name": "Jacob", "Score": 9 },
    { "Name": "Sonya", "Score": 8 },
    { "Name": "Fin", "Score": 8 },
    { "Name": "Jay", "Score": 7 },
    { "Name": "Mark", "Score": 7 },
    { "Name": "Mahooney", "Score": 7 },
    { "Name": "Guy", "Score": 6 },
    { "Name": "Sim", "Score": 3 },
    { "Name": "Mark", "Score": 2 },
    { "Name": "Magnus", "Score": 20 },
    { "Name": "Jacob", "Score": 2 },
    { "Name": "Sonya", "Score": 1 },
    { "Name": "Fin", "Score": 8 },
    { "Name": "Jay", "Score": 7 },
    { "Name": "Mark", "Score": 7 },
    { "Name": "Mahooney", "Score": 7 },
    { "Name": "Guy", "Score": 5 },
    { "Name": "Sim", "Score": 8 },
    { "Name": "Mark", "Score": 7 },
*/

let mountains = [
    { "#": 1, "Name": "Magnus", "Score": 10 },
    { "#": 2, "Name": "Jacob", "Score": 9 },
    { "#": 3, "Name": "Sonya", "Score": 8 },
    { "#": 4, "Name": "Fin", "Score": 8 },
    { "#": 5, "Name": "Jay", "Score": 7 },
    { "#": 6, "Name": "Mark", "Score": 7 },
    { "#": 7, "Name": "Mahooney", "Score": 7 },
    { "#": 8, "Name": "Guy", "Score": 6 },
    { "#": 9, "Name": "Sim", "Score": 3 },
    { "#": 10, "Name": "Mark", "Score": 2 },
    // { "#": 11, "Name": "Magnus", "Score": 20 },
    // { "#": 12, "Name": "Jacob", "Score": 2 },
    // { "#": 13, "Name": "Sonya", "Score": 1 },
    // { "#": 14, "Name": "Fin", "Score": 8 },
    // { "#": 15, "Name": "Jay", "Score": 7 },
    // { "#": 16, "Name": "Mark", "Score": 7 },
    // { "#": 17, "Name": "Mahooney", "Score": 7 },
    // { "#": 18, "Name": "Guy", "Score": 5 },
    // { "#": 19, "Name": "Sim", "Score": 8 },
    // { "#": 20, "Name": "Mark", "Score": 7 },
];


// console.log(mountains);
// const mapSort1 = new Map([...mountains.entries()].sort((a, b) => b[1].Score - a[1].Score));
// console.table(mapSort1)

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}


let table = document.querySelector("#table-inner");
// let data = Object.keys(mountains[0]);
generateTable(table, mountains);
generateTableHead(table, ['#', 'Name', 'Score']);





// let totalRowCount = htmlTable.rows.length
// let scoreArr = [0] //easier to compare
// for (let i = 0; i < totalRowCount; i++) {
//     if (i == 0) {
//         continue //skip first row
//     }
//     let row = htmlTable.rows[i].cells
//     let name = row[1].innerHTML
//     let score = parseInt(row[2].innerHTML)
//     scoreArr.push(score)
// }

// let trackingIndex = scoreArr.length - 1
// let trackingScore = parseInt(htmlTable.rows[trackingIndex].cells[2].innerHTML)

// function checkTable() {
//     // console.log("Tracking index: " + trackingIndex + " Tracking score: " + trackingScore + " Total clicks: " + clickCounter)

//     if (trackingScore < clickCounter) {
//         // console.log(trackingIndex, trackingScore)
//         // arr.splice(2, 0, "Lene");

//         let oldName = htmlTable.rows[trackingIndex].cells[1].innerHTML
//         let oldScore = htmlTable.rows[trackingIndex].cells[2].innerHTML

//         htmlTable.rows[trackingIndex].cells[1].innerHTML = "You"
//         htmlTable.rows[trackingIndex].cells[2].innerHTML = clickCounter

//         if (trackingIndex != 10) {
//             htmlTable.rows[trackingIndex + 1].cells[1].innerHTML = oldName
//             htmlTable.rows[trackingIndex + 1].cells[2].innerHTML = oldScore
//         }

//         trackingIndex = scoreArr.indexOf(trackingScore) - 1
//         trackingScore = parseInt(htmlTable.rows[trackingIndex].cells[2].innerHTML)

//         // console.log(trackingIndex, trackingScore)
//     }
//     if (trackingIndex < 10) {
//         htmlTable.rows[trackingIndex].cells[2].innerHTML = clickCounter
//     }
// }