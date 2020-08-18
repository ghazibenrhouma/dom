




let plus1 = document.getElementById('plus1');
let qty1 = document.getElementById('qty1');
let plus2 = document.getElementById('plus2');
let qty2 = document.getElementById('qty2');
let prix = document.getElementsByClassName('prix');

plus1.addEventListener("click", () => {
    qty1.value++;
    if(qty1.value > 1){
        prix[0].textContent = 1200 * qty1.value;
    }
})
plus2.addEventListener("click", () => {
    qty2.value++;
    if(qty2.value > 1){
        prix[1].textContent = 2200 * qty2.value;
    }
})


minus1.addEventListener("click", () => {
    if(qty1.value>1){
    qty1.value--;
    prix[0].textContent = 1200 * qty1.value;
    }
    
})
minus2.addEventListener("click", () => {
    if(qty2.value>1){
        qty2.value--;
        prix[1].textContent = 2200 * qty2.value;
        }
})




let updatecart = document.getElementById('updatecart');
let totalprix = document.getElementById('totalprix');


updatecart.addEventListener("click", ()=>{
    let tab=document.getElementsByClassName('row')
    let item= document.getElementsByTagName('span')
    
    totalprix.textContent = Array.from(item).reduce((c,v)=>c+parseInt(v.innerHTML),0);
})

let coupon = document.getElementById('coupon');
let couponCode = document.getElementById('coupon-code');

let valide = document.getElementById('valide');
let invalide = document.getElementById('invalide');

coupon.addEventListener('click', () => {
    if(couponCode.value === "ghazi"){
    valide.style.display = 'block';
    invalide.style.display = 'none';
    totalprix.textContent = parseInt(totalprix.textContent) - 100;
}else {
    invalide.style.display = 'block';
    valide.style.display = 'none';
} 
})


function delet(id_prix,id_row) {
    let prix=document.getElementById(id_prix)
    let row=document.getElementById(id_row)
    row.style.display = "none";
    let x = parseInt(prix.textContent);
    let y = parseInt(totalprix.textContent);
    if(y>=x){
    totalprix.textContent=totalprix.textContent-parseInt(prix.textContent);
}
}


let heart1 = document.getElementById('heart1');

function changed(heart_id) {
    let heart = document.getElementById(heart_id);
    if(heart.className === 'fa fa-heart-o'){
    heart.className = 'fa fa-heart';
}else{
    heart.className = 'fa fa-heart-o';
}
   }