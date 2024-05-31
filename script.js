const pg=document.querySelector("#pg");
const generate=document.querySelector("#generate");

const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small ="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%&";

const password=capital+small+number+symbol;



function generatePassword(){
    let randomPassword="";
    let randomnumber=Math.floor(Math.random()*capital.length);
    randomPassword=randomPassword+capital[randomnumber]
    
    randomnumber=Math.floor(Math.random()*small.length);
    randomPassword=randomPassword+small[randomnumber]
    
    randomnumber=Math.floor(Math.random()*number.length);
    randomPassword=randomPassword+number[randomnumber]
    
    randomnumber=Math.floor(Math.random()*symbol.length);
    randomPassword=randomPassword+symbol[randomnumber]
    
    
    
    for(let i=0;i<4;i++){
        randomnumber=Math.floor(Math.random()*password.length);
    randomPassword=randomPassword+password[randomnumber]
    }
    
    // console.log(randomPassword);
    pg.value=randomPassword;
    pg.select();
    document.execCommand("copy");
    showCopyMessage();
}

function showCopyMessage() {
    copyMsg.classList.remove("hidden");
    setTimeout(() => {
        copyMsg.classList.add("hidden");
    }, 2000);
}




generate.addEventListener('click',generatePassword);