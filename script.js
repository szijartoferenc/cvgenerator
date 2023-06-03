function addNewWEField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Bevitel ide");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Bevitel ide");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb )

}

function generateCV(){

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("phoneT").innerHTML =  document.getElementById("phoneField").value;
    document.getElementById("emailT").innerHTML =  document.getElementById("emailField").value;

    //address
    document.getElementById("addressT").innerHTML =  document.getElementById("addressField").value;

    //Media
    document.getElementById("fbT").innerHTML = document.getElementById("facebookField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instagramField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;

    //Célkitűzés
    document.getElementById("objectiveT").innerHTML =  document.getElementById("objectiveField").value;

    //munkatapasztalat
    let wes = document.getElementsByClassName('weField');

    let str= "";

    for(let e  of wes){
        str = str + `<li> ${e.value} </li>`;    
    }

    document.getElementById("weT").innerHTML = str;

    //iskolai végzettség

    let aqs = document.getElementsByClassName('eqField');

    let str1= "";

    for(let e  of aqs){
        str1 += `<li> ${e.value} </li>`;    
    }

    document.getElementById("aqT").innerHTML = str1;

    //kép feltöltése
    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //Fénykép beállítása a template-ben
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

//generate CV
function printCV(){
    window.print();
}