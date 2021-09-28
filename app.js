const size = [];
size[0] =  document.querySelector("#s");
size[1] =  document.querySelector("#m");
size[2] =  document.querySelector("#l");
size[3] =  document.querySelector("#xl");
var sizevalue ="";
const inputs = [];

inputs[0] = document.querySelector("#design");
 inputs[1] = document.querySelector("#material");
 inputs[2] = document.querySelector("#colour");
 inputs[3] = document.querySelector("#type");
 inputs[4] = document.querySelector("#location");
 inputs[5] = document.querySelector("#size");
 inputs[6] = document.querySelector("#tagline");
 inputs[7] = document.querySelector("#quntity");
 inputs[8] = document.querySelector("#description");
 inputs[9]= document.querySelector("#name");
 inputs[10] = document.querySelector("#email");
 inputs[11] = document.querySelector("#mob");
 inputs[12] = document.querySelector("#city");
 inputs[13] = document.querySelector("#code");
 inputs[14]= document.querySelector("#Address");
const submit = document.querySelector(".btn");
const designDiv = document.querySelector(".design");
const personDiv = document.querySelector(".personalinfo");
const recipt = document.querySelector(".recipt");
const customer = document.querySelector("#custinfo");
const design = document.querySelector("#designinfo");
const heading = document.querySelector(".heading");

function printRecipt(){
    var newWindow = window.open('', '', 'height=500, width=500');
    newWindow.document.write('<html>');
    newWindow.document.write('<body>');
    let date = new Date()
    newWindow.document.write(`<div id="newinfo">
    <table align="center" border="1" style="border-collapse:collapse;">
        <th colspan="4"><h1 align=center>I2R Custon T-shirt</h1></th>
        <tr>
            <td>Name : ${inputs[9].value} </td>
            <td>E-mail : ${inputs[10].value} </td>
            <td>Mobile no : ${inputs[11].value} </td>
            <td>Date : ${date.getDay()}/ ${date.getMonth()}/ ${date.getUTCFullYear()} </td>
        </tr>
        <tr>
            <td>City : ${inputs[12].value}</td>   
            <td>Pin-code : ${inputs[13].value}</td>
            <td colspan="2">Address : ${inputs[14].value}</td>
        </tr>
        <th colspan="4">Design Information</th>
        <tr>
            <td>Design : ${inputs[0].value}</td>
            <td>Material : ${inputs[1].value}</td>
            <td>Color : ${inputs[2].value}</td>
            <td>Size :${sizevalue}</td>
        </tr>
        <tr>
            <td>Print-type : ${inputs[3].value}</td>
            <td>Print location : ${inputs[4].value}</td>
            <td>Print size : ${inputs[5].value}</td>
            <td>Tag-line : ${inputs[6].value}</td>
        </tr>
        <tr>
            <td>Quantity : ${inputs[7].value}</td>
            <td colspan="3">Additional descrption : ${inputs[8].value}</td>
        </tr>
    </table>
</div>
<div align=center>${date}</div>
<style>
    td{
        text-align: center;
    }
</style>`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
}

function createRecipt(){
    designDiv.style.display = "none";
    personDiv.style.display = "none";
    heading.style.display = "none";
    submit.style.display = "none";
    recipt.appendChild(customer);
    recipt.appendChild(design);
    var printbtn = document.createElement("button");
    printbtn.className = "printbtn";
    printbtn.innerHTML = "Print";
    printbtn.addEventListener("click",printRecipt);
    recipt.appendChild(printbtn);
    recipt.style.display = "block"; 
}

function validateForm(){
    var isvalid = true;
    for(let i = 0;i < 15 ; i++){
        if(i==8){
            continue;
        }
        if(inputs[i].value == "select"){
            alert("Enter "+inputs[i].name)
            isvalid = false;
        }
        else if(inputs[i].value == ""){
            alert("Enter "+inputs[i].name)
            isvalid = false;
        }
        else if(parseInt(inputs[i].value) <= 0 ){
            alert("Quantity Can't be 0 or less than 0");
            isvalid = false;
        }
    }

    if(isvalid){
        for(let j=0 ;j<4;j++){
            isvalid = false;
            if(size[j].checked){
                isvalid = true;
                sizevalue =  size[j].value;
                break;
            }
        }
        if(isvalid){
            createRecipt()
        }
    }
    
}

submit.addEventListener("click",validateForm);







