var btn_plus=document.querySelectorAll(".plus")

for (let i = 0; i < btn_plus.length; i++) {

    btn_plus[i].addEventListener('click',inc)
}

function inc(e) {
    var cible=e.target
    var par=cible.parentElement
    var parP=par.querySelector('p')
    var counter=Number(parP.innerHTML)

    counter++
    parP.innerHTML=counter
    var tr=par.parentElement.parentElement
    var pu=Number(tr.querySelector(".unitPrice").innerHTML)
    var total=counter*pu
    tr.querySelector(".price").innerHTML=total
}

var btn_minus=document.querySelectorAll(".minus")

for (let j = 0; j < btn_minus.length; j++) {
    btn_minus[j].addEventListener('click',tnk)

}

function tnk(s) {
   
    var cible=s.target
    var par=cible.parentElement
    var parP=par.querySelector('p')  
    var counter=Number(parP.innerHTML)
    counter--
     
    if(counter>=0){
        parP.innerHTML=counter
        var tr=par.parentElement.parentElement
        var pu=Number(tr.querySelector(".unitPrice").innerHTML)
        var total=counter*pu
        tr.querySelector(".price").innerHTML=total
    }
  

}
