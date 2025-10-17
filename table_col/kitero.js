console.warn("Work-Rihanna");
let num = 1;

/**
 * @type {string}
 */
let abc = "abcdefg";
console.log(abc);


/**
 * @type {string[]}
 */
const block = ["Józsi", "Béla", "Feri"]
console.log(block);
console.log("-----");
for(let i = 0; i < block.length; i++){
    console.log(block[i])
}
console.log("-----");
for (const a of block) {
    console.log(a)
}
console.log("-----");
for (const key in block){
    console.log(`${key}:${block[key]}`);
}
console.log("-----");
/**
 * @type {{nev:string,age:int}}
 */
const a = {
    nev : `Benji`,
    age : 17  
};
console.log(a);




/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. század',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'Reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]


const table = document.createElement('table')
document.body.appendChild(table)


const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

const th = document.createElement('th')
th.innerText = "Fizika terület"
tr.appendChild(th)

const th2 = document.createElement('th')
th2.innerText = "Időszak"
tr.appendChild(th2)

const th3 = document.createElement('th')
th3.innerText = "Képviselők"
th3.colSpan = 2
tr.appendChild(th3)





const tbody = document.createElement('tbody')
table.appendChild(tbody)


for (const a of arr) {
    const trRow = document.createElement('tr')
    tbody.appendChild(trRow)

    const td1 = document.createElement('td')
    td1.innerText = a.theme
    trRow.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = a.time
    trRow.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = a.scientist1
    trRow.appendChild(td3)

    if (a.scientist2 !== undefined) {
        const td4 = document.createElement('td')
        td4.innerText = a.scientist2
        trRow.appendChild(td4)
    } else {
        td3.colSpan = 2
    }
}

/**
 * @param {string} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} cellRow 
 */

function createCellElement(cellType, cellContent, cellRow){
    const type = document.createElement(cellType)
    type.innerText = cellContent
    cellType.appendChild(cellRow)
}
