let doc=document.getElementById("cards");
let alerts=document.getElementById("alerts");
doc.style.display="none";
alerts.style.display="none";
document.getElementById("enterValue").addEventListener('input',(e)=>
{
    if(e.target.value<=0)
    {
        alerts.style.display="block";
        setTimeout(() => {
            alerts.style.display="none";
            e.target.value="";
        }, 1500);
    }
    else
    {
     doc.style.display="block";
    console.log("something entered succesfully");
    let value=e.target.value;
    document.getElementById("grams").innerHTML=`Grams: ${value/0.0022046} gms.`;
    document.getElementById("kgs").innerHTML=`Kg: ${value*0.45359237} kgs.`;
    document.getElementById("tan").innerHTML=`tonne: ${value*0.00045359237} ts.`;
    }
})
