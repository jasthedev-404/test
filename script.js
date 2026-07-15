const btn = document.getElementById("letterBtn");

btn.onclick = () => {

    document.body.classList.add("fade");

    setTimeout(() => {

        window.location = "letter.html";

    },1000);

};

const photos = [
    "images/love.jpg",
    "images/01.jpg",
    "images/02.jpg",
    "images/03.jpg",
    "images/04.jpg",
    "images/05.jpg",
    "images/06.jpg"
];

let currentPhoto = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
    slideshow.style.opacity = "0";

    setTimeout(() => {
        currentPhoto = (currentPhoto + 1) % photos.length;
        slideshow.src = photos[currentPhoto];
        slideshow.style.opacity = "1";
    }, 300);

}, 2000);

const photo = document.getElementById("slideshow");
const secretMessage = document.getElementById("secretMessage");

let photoClicks = 0;

photo.addEventListener("click", () => {

    photoClicks++;

    if(photoClicks === 5){

        secretMessage.classList.add("show");

        setTimeout(() => {
            secretMessage.classList.remove("show");
        },4000);

        photoClicks = 0;
    }

});

// ===== Easter Egg #1 - Konami Code =====

const secretCode = [
    "i",
    "y",
    "o",
    "t"
];

let userCode = [];

document.addEventListener("keydown", (e) => {

    userCode.push(e.key);

    if (userCode.length > secretCode.length) {
        userCode.shift();
    }

    if (JSON.stringify(userCode) === JSON.stringify(secretCode)) {
        activateSecret();
    }

});

function activateSecret() {

    alert("💖 wowwww galing ng babyy ko, iyot ta soon ha^^ 💖");

    document.body.style.transition = "0.8s";
    document.body.style.background =
        "linear-gradient(135deg,#ffd6e7,#ffeef6,#ffd1dc)";

    for(let i=0;i<80;i++){
        createHeart();
    }

}

// ===== Easter Egg #3 - Night Mode =====

const nightMessage = document.getElementById("nightMessage");

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()=="n"){

        document.body.classList.toggle("night");

        nightMessage.classList.add("show");

        setTimeout(()=>{
            nightMessage.classList.remove("show");
        },3000);

    }

});

// ===== Easter Egg #4 - ILOVEYOU =====

const loveWord = "iloveyoubhe";

let typed = "";

const lovePopup = document.getElementById("lovePopup");

document.addEventListener("keydown",(e)=>{

    typed += e.key.toLowerCase();

    if(typed.length > loveWord.length){
        typed = typed.slice(-loveWord.length);
    }

    if (typed === loveWord) {

    // Restart the animation every time
    lovePopup.classList.remove("show");

    void lovePopup.offsetWidth; // Force browser reflow

    lovePopup.classList.add("show");

    for (let i = 0; i < 80; i++) {
        setTimeout(createHeart, i * 40);
    }

    setTimeout(() => {
        lovePopup.classList.remove("show");
    }, 3500);

    typed = "";
    } 

});

// ===== Easter Egg #5 - Heart Explosion =====

const secretHeart = document.getElementById("secretHeart");
const heartPopup = document.getElementById("heartPopup");

let heartClicks = 0;

secretHeart.addEventListener("click",()=>{

    heartClicks++;

    if(heartClicks>=5){

        heartClicks=0;

        secretHeart.classList.remove("boom");
        void secretHeart.offsetWidth;
        secretHeart.classList.add("boom");

        heartPopup.classList.remove("show");
        void heartPopup.offsetWidth;
        heartPopup.classList.add("show");

        for(let i=0;i<200;i++){

            setTimeout(createHeart,i*15);

        }

    }

});

// ===== Easter Egg #6 - Love Meter =====

const meter = document.getElementById("loveMeter");
const fill = document.getElementById("meterFill");
const meterText = document.getElementById("meterText");
const infiniteLove = document.getElementById("infiniteLove");
console.log(infiniteLove);

let love = 0;
let finished = false;

meter.onclick = () => {
    if (finished) return;

    love += 10;

    fill.style.width = Math.min(love, 100) + "%";
    meterText.innerHTML = love + "%";

    if (love >= 100) {
        finished = true;

        let fake = 100;

        const over = setInterval(() => {

            fake += Math.floor(Math.random() * 300) + 100;

            meterText.innerHTML = fake + "%";

            if (fake >= 5000) {
                clearInterval(over);

                meterText.innerHTML = "∞";

                setTimeout(() => {
                    infiniteLove.classList.add("show");
                    // Hide after 5 seconds
        setTimeout(() => {
            infiniteLove.classList.remove("show");

            love = 0;
            finished = false;
            fill.style.width = "0%";
            meterText.innerHTML = "0%";
        }, 5000);

          }, 1000);

            }

        }, 60);
    }
};

const secretButton = document.getElementById("secretButton");
const secretQuiz = document.getElementById("secretQuiz");
const secretSurprise = document.getElementById("secretSurprise");
const loveSong = document.getElementById("loveSong");

const monthsaryInput = document.getElementById("monthsaryInput");
const unlockBtn = document.getElementById("unlockBtn");
const quizMessage = document.getElementById("quizMessage");
const closeSurprise = document.getElementById("closeSurprise");
const closeQuiz = document.getElementById("closeQuiz");

secretButton.onclick = () => {
    secretQuiz.classList.add("show");
};

unlockBtn.onclick = () => {

    if(monthsaryInput.value === "2025-01-30"){

        quizMessage.innerHTML = "❤️ Unlocking your surprise...";

        setTimeout(()=>{
            showSecretSurprise();
        },1200);

    }else{

        quizMessage.innerHTML = "❌ Wrong answer.";

    }

};

function showSecretSurprise(){

    secretQuiz.classList.remove("show");

    setTimeout(()=>{

        secretSurprise.classList.add("show");

        loveSong.currentTime = 0;
        loveSong.play();

    },600);

function resetSecret(){

    monthsaryInput.value = "";
    quizMessage.innerHTML = "";

}

    closeSurprise.onclick = () => {

    secretSurprise.classList.remove("show");

    loveSong.pause();
    loveSong.currentTime = 0;

    resetSecret();

};

}

closeQuiz.onclick = () => {

    secretQuiz.classList.remove("show");

    monthsaryInput.value = "";
    quizMessage.innerHTML = "";

};