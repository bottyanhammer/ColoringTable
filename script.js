const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    //Template literal Altgr+7 - ${változó}
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}
//NodeList-ként megkapjuk a .box-okat:
const boxes = document.querySelectorAll(".box");
//Végig megyünk az egyes div-eken, és rájuk akasztunk egy-egy eseményfigyelőt:
boxes.forEach(element => {
    //Az eseményfigyelő a click eseményre indul be:
    element.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "#ff0000";
    })
})
