let cookiesBtn = document.getElementById("btn-cookies");
let cookiesCard = document.getElementById("cookies");
let temperaturaNumero = document.querySelectorAll(".temperatura-numero");

cookiesBtn.addEventListener("click", () => {
    cookiesCard.style.display = "none";
});

function selectTemp () {
    let temp = document.getElementById("temp");
    let temperatura = temp.value;
    if(temperatura == "c"){
        for(let i = 0; i < temperaturaNumero.length; i++){
            let tempActual = Number(temperaturaNumero[i].textContent);
            let tempNueva = farAc(tempActual);
            
            temperaturaNumero[i].innerText = `${tempNueva}`
        }
    }
    if(temperatura == "f"){
        for(let i = 0; i < temperaturaNumero.length; i++){
            let tempActual = Number(temperaturaNumero[i].textContent);
            let tempNueva = celsiusAf(tempActual);
            
            temperaturaNumero[i].innerText = `${tempNueva}`
        }
    };
};

function celsiusAf (c){
    let temp = ((c*1.8)+32).toFixed(1);
    return temp;
};

function farAc (f) {
    let temp = ((f-32)*0.5556).toFixed(0);
    return temp;
}