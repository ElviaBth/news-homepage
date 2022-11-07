function createMenu(){
    let menu =document.getElementById('myMenu');
    if (menu.style.display==="flex"){
        menu.style.display= "none";
    }else{
        menu.style.display= "flex";
    }
}