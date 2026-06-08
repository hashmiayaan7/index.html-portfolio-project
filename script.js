const text =
"Frontend Developer | Web Designer | CSBS Student";

let i = 0;

const subtitle =
document.querySelector(".home-subtitle");

subtitle.innerHTML = "";

function typeWriter(){

    if(i < text.length){

        subtitle.innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typeWriter,80);
    }
}

window.onload = () => {

    setTimeout(() => {

        typeWriter();

    },1000);

};
