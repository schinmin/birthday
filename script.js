const birthday = document.getElementById("birthday");

const btn = document.getElementById("loginBtn");

const error = document.getElementById("error");

// ပြောင်းပါ
const correctDate = "2026-08-15";

btn.onclick = () => {

    if(birthday.value===correctDate){

        window.location="welcome.html";

    }

    else{

        error.innerHTML="❤️ Wrong Birthday ❤️";

    }

}