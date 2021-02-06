function checkInputText(){
    var txt = document.getElementById("user").value;
    document.getElementById("span1").innerHTML = txt;
}

function checkInputPassw(){
    var txt = document.getElementById("passw").value;
    document.getElementById("span2").innerHTML = txt;
}

function checkInputRadio(){
    var foodArray = document.getElementsByName("food");
    for(var i=0, length=foodArray.length; i<length; i++){
        if(foodArray[i].checked){
            document.getElementById("span3").innerHTML = foodArray[i].value;
            break;
        }
    }
}

function checkInputCheckBox(){
    var vehicleArray = document.getElementsByName("vehicle");
    var txt = "";
    for(var i=0, length=vehicleArray.length; i<length; i++){
        if(vehicleArray[i].checked){
            txt += vehicleArray[i].value + "|";
        }
    }
    txt = txt.substring(0,(txt.length-1));
    document.getElementById("span4").innerHTML = txt;

    var resultArray = txt.split("|");
    document.getElementById("span4").innerHTML = txt + ":" + resultArray[0];

}

function checkInputColor(){
    var colorHex = document.getElementById("color").value;
    document.getElementById("span5").innerHTML = colorHex;
    document.getElementById("title").style.color = colorHex;
}

function checkInputTime(){
    var time = document.getElementById("time").value;
    document.getElementById("span6").innerHTML = time;
}

function checkInputDateTimeLocal(){
    var time = document.getElementById("birthdaytime").value;
    document.getElementById("span7").innerHTML = time;
    var resArray = time.split("T");
    alert(resArray[0]);
    resArray = resArray[0].split("-");
    alert(resArray[2]);
}