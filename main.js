

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