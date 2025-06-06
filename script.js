let html = ''

for (let i = 1; i <= 25; i++) {
    html += `<li>
                <a href="./img/img (${i}).jpg" target="_blank">
                    <img src="./img/img (${i}).jpg" alt="Foto">
                </a>
            </li>`
}

html += "<li></li>";

document.getElementById("galerija").innerHTML = html;