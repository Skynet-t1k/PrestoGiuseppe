

fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
data.sort((a, b)=> a.price - b.price);

cardWrapper = document.querySelector('#cardWrapper');
categorieWrapper = document.querySelector('#categorieWrapper');

function longTitle(stringa){
  if (stringa.length >= 15){
    return stringa.split(' ')[0] + '...';
  }else{
    return stringa;
  };
};

function mostrAnnunci(array){
  cardWrapper.innerHTML = '';
  array.forEach((element, i) => {
    let div = document.createElement('div');
      div.classList.add('card', 'card-annunci','m-2', 'text-center', 'shadow');
      div.innerHTML = `
      <img src="https://picsum.photos/200/${200+i}" class="card-img-top samedim shadow img-fluid" alt="random image" />
      <div class="card-body">
        <h5 class="card-title" title="${element.name}">${longTitle(element.name)}</h5>
        <p class="card-text">${element.category}</p>
        <p class="lead">${element.price}</p>
      </div>
      </div>
      `;
      cardWrapper.appendChild(div);
  });
};

function creaCategFiltri(array){
  array.forEach((element)=>{
   let div = document.createElement('div');
    div.classList.add("form-check");
    div.innerHTML = `
    <input
    class="form-check-input"
    type="radio"
    name="flexRadioDefault"
    id="${element}"
    />
    <label class="form-check-label" for="${element}">
    ${element}
    </label>
    `
    categorieWrapper.appendChild(div);
  });
};


function filtraPerCateg(array){
  let element = Array.from(allbuttons).find((e)=> e.checked).id;
  if (element != 'all'){
  let filtered = array.filter((dato)=> dato.category == element);
   return filtered;
  }else{
    return data;
  }
};

function filtraPerPrezzo(array){
  let filtered = array.filter((dato)=> +dato.price <= +inputPrezzo.value);
  return filtered;
};

function filtraPerParola(array){
  let filtered = array.filter((dato)=> dato.name.toLowerCase().includes(inputParola.value.toLowerCase()));
   return filtered;
};

function globalFilter(){
let primoFiltro =  filtraPerCateg(data);
let secondoFiltro = filtraPerPrezzo(primoFiltro);
let finaleFiltro = filtraPerParola(secondoFiltro);
mostrAnnunci(finaleFiltro);
};

mostrAnnunci(data);
let categories = data.map((element)=> element.category);
let uniqueCategories = Array.from(new Set(categories));
creaCategFiltri(uniqueCategories);


// filtri radio buttons
let allbuttons = document.querySelectorAll('.form-check-input');
  allbuttons.forEach((button)=> button.addEventListener('click', ()=>{
    setPrice();
    globalFilter();
}));

// filtro prezzo
let inputPrezzo = document.querySelector('#inputPrezzo');
let displayPrice = document.querySelector('#displayPrice');
displayPrice.innerHTML = inputPrezzo.value;
inputPrezzo.addEventListener('input', ()=>{
  displayPrice.innerHTML = inputPrezzo.value;
  globalFilter();
});

//set max price
function setPrice(){
let prezzi = filtraPerCateg(data).map((dato)=> +dato.price);
prezzi.sort((a, b)=> a - b);
let maxPrice = Math.ceil(prezzi.pop());
inputPrezzo.max = maxPrice;
inputPrezzo.value = maxPrice;
displayPrice.innerHTML = maxPrice;
};
setPrice();

// filtro parola chiave
let inputParola = document.querySelector('#inputParola');
inputParola.addEventListener('input', ()=>{
  globalFilter();
});
let allCateg = document.querySelector('#all');
let reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
  allCateg.checked = true;
  inputParola.value = '';
  setPrice();
  mostrAnnunci(data);
});
});