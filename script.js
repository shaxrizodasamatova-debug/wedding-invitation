const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.background =
    "linear-gradient(180deg,#ffffff,#efe3cf)";

    openBtn.innerHTML = "❤️ Taklifnoma ochildi";

    openBtn.style.background = "#b68a35";

    setTimeout(() => {

        alert(
`💍 SHAXRIZODA 🤍 OZODBEK

📅 6-sentyabr 2026
🕖 19:00

📍 Buxoro shahar
Shox Saroy restorani

Sizni ushbu unutilmas kunda kutib qolamiz! ❤️`
        );

    },700);

});