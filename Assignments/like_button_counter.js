function joinClass() {
    var classCounter = document.querySelector("#class-counter");

    classCounter.innerHTML++ ;
    
    buttonToHide.style.display = 'none';
}

function like(id) {
    var element = document.querySelector(id)
    element.innerHTML++;
}

function imageChangeOn(element) {
    element.src = ""
}
function imageChangeOff(element) {
    element.src = ""
}