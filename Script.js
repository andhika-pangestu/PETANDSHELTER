const sentences = [
    { text: "Bersama, kita bisa membuat perubahan.", color: "#F1B703" },
    { text: "Satu tindakan kecil dapat membuat perbedaan besar.", color: "#56A69D" },
    { text: "Setiap hewan membutuhkan kasih sayang.", color: "#F06765" },
    { text: "Mari bersama menjaga kesejahteraan hewan.", color: "#F1B703" }
];
let index = 0;

function changeText() {
    const heroText = document.getElementById('heroText');
    heroText.style.color = sentences[index].color;
    heroText.textContent = sentences[index].text;
    index = (index + 1) % sentences.length;
}

setInterval(changeText, 4000);


