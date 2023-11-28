const text = document.querySelector(".last-part");
const setText = () =>{
    setTimeout(()=>{
        text.textContent = "web development.";
    },0);
    setTimeout(()=>{
        text.textContent = "learn new stuffs.";
    },5000);
    setTimeout(()=>{
        text.textContent = "contribute to the tech community.";
    },10000);
}

setText();
setInterval(setText,15000)