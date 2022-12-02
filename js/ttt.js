const xbutton = document.querySelector("#xbutton")
const obutton = document.querySelector("#obutton")
const rbutton = document.querySelector("#rbutton")
const nbutton = document.querySelector("#nbutton")
const tbutton = document.querySelector("#tbutton")

const xbuttonClone = xbutton
const obuttonClone = obutton
const rbuttonClone = rbutton

const statusbar = document.querySelector("#statusbar")
statusbar.innerHTML = 'X goes first'

let player = null
let npc = null

let clickCounter = 0;
let table = [];
for (let i = 1; i < 10; i++) {
    let cell = document.querySelector("#cell" + i)
    cell.addEventListener("pointerdown", e => {
        if (clickCounter % 2) {
            if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                statusbar.innerHTML = '"O" turn. <br/> Filled already. Pick a diffrent cell.'
            } else {
                cell.innerHTML = "O"
                statusbar.innerHTML = '"X" turn'
                clickCounter++
            }
        } else {
            if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                statusbar.innerHTML = '"X" turn. <br/> Filled already. Pick a diffrent cell.'
            } else {
                cell.innerHTML = "X"
                statusbar.innerHTML = '"O" turn'
                clickCounter++
            }
        }
    })
    table.push(cell)
}

xbutton.addEventListener("pointerdown", e => {
    xbutton.remove()
    obutton.remove()
    rbutton.remove()

    player = "X"
    npc = "O"
})

obutton.addEventListener("pointerdown", e => {
    xbutton.remove()
    obutton.remove()
    rbutton.remove()

    player = "O"
    npc = "X"
})

//Random role button
rbutton.addEventListener("pointerdown", e => {
    xbutton.remove()
    obutton.remove()
    rbutton.remove()

    const roles = "XO";

    function assignRole(length) {
        let result = "";
        const rolesLength = roles.length;
        for (let i = 0; i < length; i++) {
            result += roles.charAt(Math.floor(Math.random() * rolesLength));
        }
        return result;
    }
    player = assignRole(1)

    if (player === "X") {
        npc = "O"
    } else {
        npc = "X"
    }
})

//Reset button
nbutton.addEventListener("pointerdown", e => {
    xbutton.remove()
    obutton.remove()
    rbutton.remove()

    player = "O"
    npc = "X"

    let parentDiv = nbutton.parentNode
    parentDiv.insertBefore(xbuttonClone, nbutton)
    parentDiv.insertBefore(obuttonClone, nbutton)
    parentDiv.insertBefore(rbuttonClone, nbutton)

    table.forEach(element => {
        if (element.innerHTML == "&nbsp;") {
            {
                //Do nothing
            }
        } else {
            element.innerHTML = "&nbsp;"
        }
    });
    statusbar.innerHTML = 'X goes first'
    clickCounter = 0
})

//Table checking button
tbutton.addEventListener("pointerdown", e => {
    table.forEach(element => {
        if (element.innerHTML == "&nbsp;") {
            {
                console.log(1)
            }
        } else {
            console.log(element.innerHTML)
        }
    });
})