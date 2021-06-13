
function tipcalculator(){
    let amount = document.getElementById("billamt").value;
    let service = document.getElementById("serviceQual").value;
    let people = document.getElementById("peopleamt").value;
    
    //calculate tip
    let total = (amount*service)/people;
    //rounding the amt
    total = Math.round(total*100)/100;
    //display only two digi decimal
    total = total.toFixed(2);
    //display tip
    document.getElementById("tip").innerHTML = total;
    
}
//hide
document.getElementById("calculate").onclick=function(){
    tipcalculator();
};

