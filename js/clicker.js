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
    checkTable()

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


let htmlTable = document.querySelector("#table-inner")

let totalRowCount = htmlTable.rows.length
let scoreArr = [0] //easier to compare
for (let i = 0; i < totalRowCount; i++) {
    if (i == 0) {
        continue //skip first row
    }
    let row = htmlTable.rows[i].cells
    let name = row[1].innerHTML
    let score = parseInt(row[2].innerHTML)
    scoreArr.push(score)
}

let trackingIndex = scoreArr.length - 1
let trackingScore = parseInt(htmlTable.rows[trackingIndex].cells[2].innerHTML)

function checkTable() {
    // console.log("Tracking index: " + trackingIndex + " Tracking score: " + trackingScore + " Total clicks: " + clickCounter)
    if (trackingScore < clickCounter) {
        // console.log(trackingIndex, trackingScore)

        let oldName = htmlTable.rows[trackingIndex].cells[1].innerHTML
        let oldScore = htmlTable.rows[trackingIndex].cells[2].innerHTML

        if (trackingIndex != 10) {
            htmlTable.rows[trackingIndex].cells[1].innerHTML = "You"
            htmlTable.rows[trackingIndex].cells[2].innerHTML = clickCounter

            htmlTable.rows[trackingIndex + 1].cells[1].innerHTML = oldName
            htmlTable.rows[trackingIndex + 1].cells[2].innerHTML = oldScore
        }

        trackingIndex = scoreArr.indexOf(trackingScore) - 1
        trackingScore = parseInt(htmlTable.rows[trackingIndex].cells[2].innerHTML)

        // console.log(trackingIndex, trackingScore)


    }
}

function swapPositions() {}