const openBtn = document.getElementById("openBtn");
const leftDoor = document.getElementById("leftDoor");
const rightDoor = document.getElementById("rightDoor");
const hero = document.querySelector(".hero");
const invitation = document.getElementById("invitation");
const timer = document.getElementById("timer");

openBtn.addEventListener("click", () => {

    leftDoor.style.transform = "perspective(1200px) rotateY(-105deg)";
    rightDoor.style.transform = "perspective(1200px) rotateY(105deg)";

    openBtn.disabled = true;

  setTimeout(() => {

    hero.style.opacity = "0";

    hero.style.transition = "1.5s";

    setTimeout(() => {
        hero.style.display = "none";
    },1500);

    invitation.style.display = "block";

    invitation.style.animation = "fadeIn 1.5s";

    startCountdown();

},2500);

});

function startCountdown(){

    const target = new Date("2026-09-06T19:00:00").getTime();

    function update(){

        const now = new Date().getTime();

        const diff = target - now;

        const day = Math.floor(diff/1000/60/60/24);

        const hour = Math.floor(diff%(1000*60*60*24)/(1000*60*60));

        const min = Math.floor(diff%(1000*60*60)/(1000*60));

        const sec = Math.floor(diff%(1000*60)/1000);

        timer.innerHTML =
        `${day} kun ${hour} soat ${min} daqiqa ${sec} soniya`;

    }

    update();

    setInterval(update,1000);

}
/* ===== PREMIUM OPEN EFFECT ===== */

openBtn.addEventListener("click",()=>{

document.querySelector(".sunlight").animate([
{
opacity:0.4,
transform:"translateX(-50%) scale(.8)"
},
{
opacity:1,
transform:"translateX(-50%) scale(1.4)"
}
],{
duration:1800,
fill:"forwards"
});

document.querySelector(".leftFlowers").animate([
{
transform:"translateX(0)"
},
{
transform:"translateX(-20px)"
},
{
transform:"translateX(0)"
}
],{
duration:2500
});

document.querySelector(".rightFlowers").animate([
{
transform:"translateX(0)"
},
{
transform:"translateX(20px)"
},
{
transform:"translateX(0)"
}
],{
duration:2500
});

hero.animate([
{
transform:"scale(1)"
},
{
transform:"scale(1.08)"
}
],{
duration:1800,
fill:"forwards"
});

});