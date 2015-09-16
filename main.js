var currentIndex = '0';

function setValue(val, field){
    document.getElementById(field).value = val;
    hideMarker();
}

function calculate(){
    var height = document.getElementById('height').value / 100;
    var weight = document.getElementById('weight').value;

    var index = weight / (height * height);

    console.log(index);

    if (index < 18.5) {
        currentIndex = 'res1';
        setMessage(index);
        showMarker();
    }
    if (index >= 18.5 && index < 25) {
        currentIndex = 'res2';
        setMessage(index);
        showMarker();
    }
    if (index >= 25 && index < 30) {
        currentIndex = 'res3';
        setMessage(index);
        showMarker();
    }
    if (index >= 30 && index < 35) {
        currentIndex = 'res4';
        setMessage(index);
        showMarker();
    }
    if (index >= 35 && index < 40) {
        currentIndex = 'res5';
        setMessage(index);
        showMarker();
    }
    if (index >= 40){
        currentIndex = 'res6';
        setMessage(index);
        showMarker();
    }
}

function setMessage(index){
    document.getElementById(currentIndex).innerHTML = "Ваш результат " + index.toFixed(2) + " :";
}

function showMarker(){
    document.getElementById(currentIndex).style.visibility = "visible";
}

function hideMarker(){
    if (currentIndex !== '0'){
        document.getElementById(currentIndex).style.visibility = "hidden";
        currentIndex = '0';
    }
}

function showInfo(){
    var infoBlock = document.getElementById("info");
    infoBlock.style.visibility = "visible";
    infoBlock.style.left = Math.round((window.innerWidth - 500) / 2) + "px";
    console.log(Math.round((window.innerWidth - 500) / 2));
    document.getElementById("close").addEventListener("click", function(){
        document.getElementById("info").style.visibility = "hidden";
    })
}

