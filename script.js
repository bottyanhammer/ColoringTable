const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    //Template literal Altgr+7 - ${változó}
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}
//NodeList-ként megkapjuk a .box-okat:
const boxes = document.querySelectorAll(".box");
//Végig megyünk az egyes div-eken, és rájuk akasztunk egy-egy eseményfigyelőt:

boxes.forEach(element => {
    // Az eseményfigyelő a click eseményre indul be.
    // Az eseményfigyelő a click eseményre meghívja a noname eljárást, amely színezi annak az elemnek a hátterét, amelyen az esemény bekövetkezett. Az eljárást itt most csak deklarálom, és nem meghívom!
    
    element.addEventListener("click", (event) => {
        console.log(event);
        let currentElement = event.target;
        if(currentElement.style.backgroundColor === ""){
            currentElement.style.backgroundColor = "#ff0000";
            currentElement.textContent = currentElement.id;
        }else{
            currentElement.style.backgroundColor = "";
            currentElement.textContent = ""; //null
        }        
        //currentElement.style.backgroundColor = "#ff0000";
        currentElement.style.textAlign = "center";
        
    })
    

    //A fenti tömör leírása szétbontva itt van. A hatterSzinez egy nevesített eljárás referenciája. Az eljárást majd az eseményfigyelő hívja meg a click esemény bekövetkezésekor. A hatterSzinez egy callback eljárás (függvény), ezért nincs mögötte a körzárójel.
    /********************************** 
    element.addEventListener("click", hatterSzinez);
    function hatterSzinez(event){
        event.target.style.backgroundColor = "#ff0000";
    }
     *************************************/
});