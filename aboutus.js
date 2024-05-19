let dragon = document.querySelector('.dragon');
let f_dragon = document.querySelector('.f-dragon');
let cerchiointerno = document.querySelector('.cerchiointerno');
let cerchio = document.querySelector('.cerchio');
const mediaQuery = window.matchMedia('(min-width: 1025px)');

let draghi = [
    {nome: 'Gaiadros', descrizione: `Un drago robusto e possente, le sue scaglie ricordano la roccia e il muschio della terra.`, url: './media/terra.webp'},
    {nome: 'Zephyrus', descrizione: `Un drago agile e slanciato, le sue scaglie scintillano come il cielo e le sue corna si curvano come il vento.`, url: './media/vento.webp'},
    {nome: 'Aqualon', descrizione: `Un drago elegante e fluente, le sue scaglie iridescenti riflettono le sfumature dell'acqua e le sue corna ondeggiano come le onde del mare.`, url: './media/acqua.webp'},
    {nome: 'Pyraxius', descrizione: `Un drago fiero e ardente, le sue scaglie vibranti e le sue corna affilate emanano un calore intenso come le fiamme del fuoco.`, url: './media/fuoco.webp'},
];

draghi.forEach((drago)=>{
    let div = document.createElement('div');
    div.classList.add('fotocerchio');
    div.innerHTML = `
    <img src="${drago.url}" class="img-fluid round-img" alt=""/>`
    cerchio.appendChild(div);
});


let flip_card = document.querySelector('.flip-card');
let faceflip = document.querySelector('.faceflip');
let fotocerchi = document.querySelectorAll('.fotocerchio');
let check=true;
cerchiointerno.addEventListener('click', ()=>{
    dragon.classList.toggle('d-none');
    f_dragon.classList.toggle('d-none');
    if(check){
        fotocerchi.forEach((cerchio, i)=>{
        let angle = (360*i)/fotocerchi.length;
            if (mediaQuery.matches){
            cerchio.style.transform = `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`;
            }else{
            cerchio.style.transform = `rotate(${angle}deg) translate(125px) rotate(-${angle}deg)`;
            }
        });
        check=false;
    }else{
        fotocerchi.forEach((cerchio)=>{
        cerchio.style.transform = ``;
        flip_card.classList.add('d-none');
        check=true;
        });
    };
});


let nomedrago = document.querySelector('#nomedrago');
let descdrago = document.querySelector('#descdrago');


fotocerchi.forEach((cerchio, i)=>{
    cerchio.addEventListener('click', ()=>{
    flip_card.classList.remove('d-none')
    let drago = draghi[i];
    faceflip.style.backgroundImage = `url(${drago.url})`;
    nomedrago.innerHTML = drago.nome;
    descdrago.innerHTML = drago.descrizione;
});

});