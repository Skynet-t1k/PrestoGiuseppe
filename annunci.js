

fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
console.log(data);

cardWrapper = document.querySelector('#cardWrapper');
categorieWrapper = document.querySelector('#categorieWrapper');

function mostrAnnunci(array){
    cardWrapper.innerHTML = '';
    array.forEach((element, i) => {
        div = document.createElement('div');
        div.classList.add('card', 'card-annunci','m-2', 'text-center', 'shadow');
        div.innerHTML = `
        <img src="https://picsum.photos/200/${200+i}" class="card-img-top shadow" alt="random image" />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.category}</p>
          <p class="lead">${element.price}</p>
        </div>
      </div>
        `;
        cardWrapper.appendChild(div);
        
    });
}

mostrAnnunci(data);

function creaCategFiltri(array){
    array.forEach((element)=>{
        div = document.createElement('div');
        div.classList.add("form-check");
        div.innerHTML = `
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          ${element}
        </label>
        `
        categorieWrapper.appendChild(div);
    

    });
};

let categories = data.map((element)=> element.category);
let uniqueCategories = Array.from(new Set(categories));
creaCategFiltri(uniqueCategories);








});