var go          = document.getElementById("go");
var person1     = document.getElementById("person1");
var person2     = document.getElementById("person2");


go.onclick = function(){

    if(document.getElementById("score")){
        document.body.removeChild(document.getElementById("score"));
    }

    if(person1.value.length === 0 || person2.value.length === 0){
        alert('Pas de champs vides');
        return 0;
    }
    if(isNotValid(person1.value) || isNotValid(person2.value)){
        alert('Des lettres uniquement');
        return 0;
    }
    var person1Val = calcUtf16(person1.value);
    var person2Val = calcUtf16(person2.value);
    var score = 100 * Math.min(person1Val, person2Val) / Math.max(person1Val, person2Val);

    var p = document.createElement("P");
    p.id = "score";

    if(score < 10){
        p.appendChild(document.createTextNode(score + " ça va être compliqué"));
    }
    if(score < 50 && score > 10){
        p.appendChild(document.createTextNode(score + " il va falloir t'accrocher"));
    }
    if(score < 90 && score > 50){
        p.appendChild(document.createTextNode(score + " ça semble bien parti"));
    }
    if(score <= 100 && score > 90){
        p.appendChild(document.createTextNode(score + " fonce !"));
    }

    document.body.appendChild(p);
}


function calcUtf16(str){
    var result = 0;
    for(i = 0; i < str.length; i ++){
        result += str.charCodeAt(i);
    }
    return result;
}

function isNotValid(str){
    return /[^a-zA-Z]/.test(str);
}
