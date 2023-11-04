
const dataDisplay = document.getElementById("dataDisplay")
const heading = document.getElementById("heading")

document.addEventListener('keydown',(e) =>{
    const keyname = e.which
    const keycode = e.key.toUpperCase();
        heading.innerHTML =`You have Pressed<span class='displaylarge'> ${keycode} </span>`
        dataDisplay.classList.add('dataDisplay')
        dataDisplay.innerHTML = keyname
});

