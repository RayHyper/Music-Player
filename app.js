//https://youtu.be/RTAMSz1qyLk  not working

//https://www.youtube.com/embed/RTAMSz1qyLk  working

const input = document.getElementById("input");
const button = document.getElementById("button");
const container = document.getElementById("container");

const clear = document.getElementById("clear");


button.addEventListener("click",()=>{

        //copy and paste yt link here
    let link = input.value;

        //converts it to usable link with js
    let code = "https://youtube.com/embed/" + link.slice(17)

    container.innerHTML = "<iframe width='420' height='315' src='"+ code +"'> </iframe>"
})


clear.addEventListener("click",()=>{
    input.value = "";
})



