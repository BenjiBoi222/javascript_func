

/*
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]


const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)


const t = ["Harc megnevezése","Szembenálló felek","Haderő"]

for (const i of t) {
    const th = document.createElement("th")
    th.innerText = i
    tr.appendChild(th)
}


const tbody = document.createElement("tbody")
table.appendChild(tbody)


for (const a of arr)
{
    const tr2 = document.createElement("tr")
    tbody.appendChild(tr2)

    const td1 = document.createElement("td")
    td1.innerText = a.war
    tr2.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText = a.team1
    tr2.appendChild(td2)

    const td3 = document.createElement("td")
    td3.innerText = a.team1Size
    tr2.appendChild(td3)
    if(a.team2 && a.team2Size){
        td1.rowSpan = 2;
        const tr2_2 = document.createElement("tr")
        tbody.appendChild(tr2_2)

        const td4 = document.createElement("td")
        td4.innerText = a.team2
        tr2_2.appendChild(td4)

        const td5 = document.createElement("td")
        td5.innerText = a.team2Size
        tr2_2.appendChild(td5)
    }
}*/


const arr = [
    {
        theme: 'Optika',
        time: 'XI. század',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
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
        theme: 'Relativitáselmélet',
        time: 'XX. század',
        scientist1: 'Albert Einstein',
        scientist2: 'Niels Bohr'
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)
const trHead = document.createElement("tr")
thead.appendChild(trHead)

const th1 = document.createElement("th")
th1.innerText = "Téma"
trHead.appendChild(th1)
const th2 = document.createElement("th")
th2.innerText = "Korszak"
trHead.appendChild(th2)
const th3 = document.createElement("th")
th3.innerText = "Tudós"
trHead.appendChild(th3)

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)
    
    const td1 = document.createElement("td")
    td1.innerText = i.theme
    tr.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText = i.time
    tr.appendChild(td2)

    const td3 = document.createElement("td")
    td3.innerText = i.scientist1
    tr.appendChild(td3)

    if(i.scientist2 !== undefined){
        const td4 = document.createElement('td')
        td4.innerText = i.scientist2
        tr.appendChild(td4)
    }else{
        td3.colSpan = 2
    }
}
