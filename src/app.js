console.log("Merhaba Musty")

//JS TYPE SAFE DEĞİLDİR.
let dolarDun=9.20
let dolarBugun=9.30

{
 let dolarBugun=9.10
}

let dolarYarin
console.log(dolarBugun)
console.log(dolarYarin)

const euroDun=10.5//Sabit (değiştirilemez) 

//array
let konutKredileri=["Emlak Konut Kredisi","Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"</li>")  
}
console.log("</ul>")

