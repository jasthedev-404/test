let opened = false;
let isTyping = false;

const card = document.getElementById("card");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

const text = `Happy Monthsary ❤️

Yeheyyyyyy 18 months najud ta together or 1 year and 6 months yeyyyeyyyyyy. Ganahan lng nako iingon bheee na happpy kaaayo ko everyyydayyyyy kayyy ikaw akong nauyab po, imo jud kung ge pili sa tanan² lake na naka ila nimo, online man or real life ehehe, swerte kayo ko nimo naka jackpot jud ko og diamond ayyy.

Bitaw bheee dijud ko ka tuo na kita japun after many months, wako nag expect na maabtan ta aning 18 months sag sige ta og away² wala jud ta ni buwag sa usag-usa^^ unta sa mo abot na years inani japun ta^^ healthy with bastos gamay hehehe gamay lng kay ldr paman hehe, katong mga days na nag vcs ta iloveeittt so muchhhh samot natong virtual suh nimo ako dih og ge lulu nimooo ma feel jud nako bheeee, unta soon mabuhat nato nato huhuhu dina ko ka huwattt:<.

Shock ka nohh nganong inani ako pag greetHAHAHAHAH (basin wala diay to na shock huhuhuhu ulawa), yessss akoy nag himo ani bheee ehehehe pero nag pa help ko ni chatgpt po, master kayo siya gudHAHAHAHA, pero yess nahimo raman nakoHAHAHAH nindot ra ata oii ganahan unta ko ipa nindot pajud pero ma guba ang code T-T, soon mag himo ko lain mas nindot pa ani hehehe tas mag add pako daghan pics nato^^, karun imo pics lng sa kay wala ko naka edit nato together hehe.

Anyways babyy, Every day with you feels special thank you for being my safe place thank you for every smile, every laugh, and every moment we've shared, no matter how many months pass... I'll always choose you.

I love you more than words can explain.

Char englishhh daw ohhHAHAHAHA
sticker ni babyy:

Happy 18th monthsary babyy, I hope you like it ra^^ I did my best raba ani hehehe

ILOVEEEYOUUUUSOOMUCHHHHHH MOMMMY, BABYYYY, BABEEEE, BHEEEEE, WIFEYYYYYY, ASAWAAAA KOOOOO, LOVEEEEE, MAHALLLLLLL ILOVEEEEYOUUUUUALWAYSSSSS❤️

ikaw rajud akong ge love inani og ikaw ra akong e love permi^^, akoa raka babyyy ha, iloveeeyouuuuualwaysss po.`;

heart.onclick = () => {

    if (opened) return;

    opened = true;

    card.classList.add("open");

    setTimeout(() => {
        typeWriter();
    },700);

}

function typeWriter(){

    if (isTyping) return;

    isTyping = true;

    message.textContent = "";

    let i = 0;

    function type(){

        if(i >= text.length){
            return;
        }

        message.textContent += text.charAt(i);

        // Auto-scroll while typing
        message.scrollTop = message.scrollHeight;

        let speed = 28;

        const current = text.charAt(i);

        if(current === ",") speed = 180;
        else if(current === ".") speed = 350;
        else if(current === "!") speed = 350;
        else if(current === "?") speed = 350;
        else if(current === "\n") speed = 220;

        i++;

        setTimeout(type, speed);

    }

    type();

}

typing();

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.animationDuration=4+Math.random()*4+"s";

document.getElementById("floating-hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,800);