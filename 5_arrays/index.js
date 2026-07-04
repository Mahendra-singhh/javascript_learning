// let aee=["Hello",89,90]
// aee[1]="nahi"
// console.log(aee)
// console.log(aee.length)
// console.log(aee[2])
// // type of array is objects
// console.log(typeof[aee])
// // to string methods
// console.log(aee.toString()) 
// //join method - used to join evry elment of array using any word
// console.log(aee.join(" and "))
// //pop - removes lasat element of array and returns it
// console.log(aee.pop())
// //push inserts element at the end - returns array length
// console.log(aee.push("Mahi"))
// console.log(aee)
// //shift-removes  first element of array 
// console.log(aee.shift())
// //unshift - add element in the first index of array , and returns its index
// console.log(aee.unshift("JUI"))
// //delete - it  deletes the elment of given index -but the index remains and it shows as  undefined
// console.log(delete aee[2])
// console.log(aee)
// //map

// let nw=[2,4,5,6,8,6]
// let sq=nw.map(e=>{
//     return e**2
// })
// console.log(sq)

//que2 
let prices = [250,645,300,900,50]
for (let price of prices) {
    let discount=(price*10)/100;
    let discountedPrice=price-discount
    console.log(`Discounted prices ${discountedPrice}`)
    
}

// //push
// prices.push(234);
// console.log(prices);
// console.log(prices.pop());
// console.log(prices)
// console.log(prices.shift())
// console.log(prices)

let arr =["microsoft","google","uber","Bloomberg","IBM","Netflix"]
for (const el of arr) {
    console.log(el)
    
}
arr.splice(2,1,"Ola")
for (const el of arr) {
    console.log(el)
    
}

