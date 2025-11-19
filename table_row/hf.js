// Ez az objektum tartalmazza a fejleceket es a form mezoket.
const adatok_obj = {
    fejlec: ['Nemzetiseg', 'Szerzo', 'Mu'],
    mezok: [
        { id: 'nemzetiseg', label: 'Nemzetiseg:' },
        { id: 'szerzo1', label: 'Szerzo:' },
        { id: 'mu1', label: 'Mu:' },
        { id: 'szerzo2', label: 'Masik szerzo:' },
        { id: 'mu2', label: 'Mu:' }
    ]
};

// Uzleti adattomb. A tablazat ebből dolgozik.
const adatlista = [
    { nationality:'Orosz', author1:'Gogol', literarypiece1:'A kopenyeg', author2:'Csehov', literarypiece2:'A csinovnyik halala' },
    { nationality:'Cseh', author1:'Franz Kafka', literarypiece1:'Az atvaltozas' },
    { nationality:'Magyar', author1:'Oerkeny Istvan', literarypiece1:'Egyperces Novellak', author2:'Jozsef Attila', literarypiece2:'Klarisok' },
    { nationality:'Svajc', author1:'Friedrich Durrenmatt', literarypiece1:'A fizikusok' }
];

// Tabla letrehozasa
const tbody = tabla_letrehoz(adatok_obj.fejlec, 'tbody_id');

// Kezdo adatok kirajzolasa
tabla_ujrarajzol(tbody, adatlista);

// HTML-ben levo form (ha letezik)
const htmlform = document.getElementById('htmlform');
if (htmlform) {
    htmlform.addEventListener('submit', form_submit);
}

// JS altal general form
const jsform = form_letrehoz('jsform', adatok_obj.mezok);
document.body.appendChild(jsform);
jsform.addEventListener('submit', form_submit);

// 4 globalis valtozo:
// adatok_obj, adatlista, htmlform, jsform
