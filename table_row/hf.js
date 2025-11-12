/**
 * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}}
 */

const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const a = ['Nemzetiség', 'Szerző', 'Mű'];
for(let i of a) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = i;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target;
        a.classList.add("marked");
    })
    tr2_td1.addEventListener("", function(e){
        const a = e.target;
        a.classList.add("unmarked");
    })
    tr2_td1.innerText = a.nationality;
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = a.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = a.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != undefined && a.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}



const formElement = document.getElementById("htmlform")

formElement.addEventListener("submit", function(e){
    e.preventDefault(); //Megakadályozza a form alapvető működésés
    /**
     * @type {HTMLFormElement}
     */
    const a = e.target;
    /**@type {HTMLInputElement}*/
    const nemzet = a.querySelector('#nemzetiseg');//Lekéri a nemzetiség id elemét
    /**@type {HTMLInputElement}*/
    const szerzo1 = a.querySelector('#szerzo1');//Lekéri a szerző1 id elemét
    /**@type {HTMLInputElement}*/
    const szerzo2 = a.querySelector('#szerzo2');//Lekéri a szerző2 id elemét
    /**@type {HTMLInputElement}*/
    const mu1 = a.querySelector('#mu1');//Lekéri a mű1 id elemét
    /**@type {HTMLInputElement}*/
    const mu2 = a.querySelector('#mu2');//Lekéri a mű2 id elemét

    /**@type {string}*/
    const nemzet_value = nemzet.value;
    /**@type {string}*/
    const szerzo1_value = szerzo1.value;
    /**@type {string}*/
    const szerzo2_value = szerzo2.value;
    /**@type {string}*/
    const mu1_value = mu1.value;
    /**@type {string}*/
    const mu2_value = mu2.value;

    /**@type {nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}*/
    const obj = {}

    obj.nationality = nemzet_value;
    obj.author1 = szerzo1_value;
    obj.author2 = szerzo2_value;
    obj.literarypiece1 = mu1_value;
    obj.literarypiece2 = mu2_value;


    const tbodyID = document.getElementById("tbodyID");

    
    const tr2 = document.createElement('tr');
    tbodyID.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = obj.nationality;
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = obj.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = obj.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (obj.author2 && obj.literarypiece2) {
        const tr3 = document.createElement('tr');
        tbodyID.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = obj.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = obj.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
})



//===FORM IMPLEMENTING===

/**
 * @param {form} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form, id, labelContent){
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelContent;
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    form.appendChild(input); 
}

const newForm = document.createElement("form");
document.body.appendChild(newForm);

createFormElement(newForm,"nemzetiseg","nemzetiseg");
createFormElement(newForm,"szerzo1","szerzo1");
createFormElement(newForm,"mu1","mu1");
createFormElement(newForm,"szerzo2","szerzo2");
createFormElement(newForm,"mu2","mu2");

const button = document.createElement("button");
button.innerText = "Hozzáadás";
newForm.appendChild(button);