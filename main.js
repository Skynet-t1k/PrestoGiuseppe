

let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let thirdNumber = document.querySelector("#thirdNumber");
let waitObserve = true;

function createInterval(n, elemento, time){
    let counter = 0;
    let interval = setInterval(() => {
        if(counter <= n){
            elemento.innerHTML = counter;
            counter++;
        }else{
            clearInterval(interval)
        }
        }, time);
    setTimeout(() => {
        waitObserve=true;
    }, 13000);
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && waitObserve){
            createInterval(100, firstNumber, 80);
            createInterval(200, secondNumber, 40);
            createInterval(300, thirdNumber,  20);
            waitObserve=false;
        };
    });
});

observer.observe(firstNumber);

let recensioni =[
    {user: 'Zephyroth', description: "Ever wonder what a pop-up book looks like in digital form? Visit this website! It's like whack-a-mole but with ads. Highly entertaining when you're bored!", rank: 5},
    {user: 'Vraxor', description: "If you enjoy a good treasure hunt, you'll love this site. The actual content is the treasure, and it's buried under layers of ads. X marks the spot, but good luck finding it!", rank: 1},
    {user: 'Skorblaze', description: "This site must be where ads go to retire. It's a full-time job just navigating through them, but hey, it's more structured than my actual job.", rank: 3},
    {user: 'Malumis', description: "I clicked on an ad and it took me to another ad. Is this inception? Am I dreaming? Either way, it's a wild ride. Buckle up!", rank: 4},
    {user: 'Tyrfing', description: "Perfect for practicing your 'close tab' skills. I came, I saw, I closed. A thrilling thirty-second adventure.", rank: 2},
    {user: 'Seraphyx', description: "If you miss the days of dial-up Internet and waiting ages for a site to load, you'll love the nostalgic experience this ad-heavy site offers. Slow and steady wins the race, right?", rank: 4},
    {user: 'Iridessa', description: "Visited this site and all I got was this lousy pop-up... and another pop-up... and oh, look, another pop-up! It's the gift that keeps on giving.", rank: 1},
    {user: 'Lunaflame', description: "Great place to play 'spot the content' among the ads. It's like Where's Waldo, but for adults who love a challenge. Highly recommend for puzzle enthusiasts!", rank: 5},
    {user: 'Vexelle', description: "This website is like that one friend who can't stop talking about themselves. But instead of anecdotes, it's ads. So many ads.", rank: 2},
    {user: 'Pyraxia', description: "For an ad website, it's impressively committed to its theme. It's like attending a costume party where everyone dressed as an advertisement. Full marks for dedication!", rank: 3},
]

const swiperWrapper = document.querySelector('.swiper-wrapper');
recensioni.forEach((recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide')
    div.innerHTML = ` <div class="recensioni">
    <p class="text-center lead">${recensione.description}</p>
    <p class="h4 text-center">${recensione.user}</p>
    <div class="star text-center text-y"></div>
    </div>`
    swiperWrapper.appendChild(div);
});
// <i class="fa-solid fa-star"></i>
let stars = document.querySelectorAll('.star');
stars.forEach((star, index)=>{
    for (let i=1; i <= recensioni[index].rank; i++){
        let icona = document.createElement('i');
        icona.classList.add('fa-solid', 'fa-star');
        star.appendChild(icona);
    };
    let difference = 5 - recensioni[index].rank;
    for (let i=1; i <= difference; i++){
        let icona = document.createElement('i');
        icona.classList.add('fa-regular', 'fa-star');
        star.appendChild(icona);
    };




});

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});