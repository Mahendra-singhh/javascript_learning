//strings are immutable objects - all operation done here create a new string -

let bn="mahendra "
console.log(bn)
// Array indexing
console.log(bn[4])
// template literals 
console.log(`hello my name is ${bn}`)
// escape sequence characters 
console.log("hello this is printed to show escape \"sequence characters\" \nnow this line will be shown as a next line \t there's a space just before this para")
// Converting string to uppercase
let newf=bn.toUpperCase()
console.log(newf)
// slicing a string - using this function we can take charcters of an array 
// using its indexing
console.log(bn.slice(1,5))
// replacing characters of string using .replace() - its replaces only first occurance
console.log(bn.replace("mah","sat"))
// concating different strings
console.log(bn.concat(newf," this is concatanation"))
// using trim  function we can trim out all mepty spaces in a string
console.log(bn.trim())