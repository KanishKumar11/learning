// Math Date
var input = document.getElementsByTagName("input")[0]
const randomNumber=Math.floor(Math.random()*100)
console.log(randomNumber)
const handleGame=(e)=>{
    e.preventDefault()
    console.log(typeof input.value)
   const INT= parseInt(input.value)
    if(INT===randomNumber){
        alert("You won!")
    }
    else if(input.value>randomNumber){
        alert("Try again a lower number")
    }
    else{
        alert("Try again a higher number")
    }
}
console.log(input)

const submitBtn = document.getElementById("submitBtn")
console.log(submitBtn)
submitBtn.addEventListener("click", handleGame)

date=new Date()
console.log(date)
console.log(date.toLocaleDateString('en-IN'));
