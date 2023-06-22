//https://youtu.be/RTAMSz1qyLk  not working

//https://www.youtube.com/embed/RTAMSz1qyLk  working

const input = document.getElementById("input");
const button = document.getElementById("button");
const container = document.getElementById("container");

const clear = document.getElementById("clear");
const list = document.getElementById("list");
const remove = document.getElementsByClassName("remove");



button.addEventListener("click",()=>{


    if(input.value !== ""){
                //copy and paste yt link here
    let link = input.value;

    //converts it to usable link with js
let code = "https://youtube.com/embed/" + link.slice(17);


container.innerHTML = "<iframe  width='420' height='315' src='"+ code +"' > </iframe>"


list.innerHTML += "<li><a href='"+ code +"'>"+code+"</a><button class='play'>Play</button> <button class='remove'>Remove</button> </li> ";

    }




  
    
})


list.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.parentNode.remove();
    }
});

list.addEventListener("click", (event) => {
    if (event.target.classList.contains("play")) {

        const link = event.target.previousElementSibling.href;
    console.log(link);

    container.innerHTML = "<iframe width='420' height='315' src='"+ link +"'> </iframe>"
      
    }
});


clear.addEventListener("click",()=>{
    input.value = "";
})



