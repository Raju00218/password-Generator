const genratePasswordbtn = document.getElementById("generate-btn");
const password1 = document.getElementById("p1");
const password02 = document.getElementById("p2");
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const inputEl = document.getElementById("input-el")
const toggle = document.getElementById("toggle")



const characters =["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
    "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?",
"/"];
  
let toggleState = 0
  const numbers =[]
  const alphabets =[]
 let passwordLength = [] ;
let selectedCharacters1 = []
let selectedCharacters2= []

genratePasswordbtn.addEventListener("click", ()=>{
          
       passwordLength.push(inputEl.value)
       console.log(passwordLength)

       pickRandomindex()        
    //    handleClick()
       passwordLength=[]
       selectedCharacters1=[]
       selectedCharacters2= []

})

//   function handleClick(){
//           toggleState +=1
//           numbers.length = 0
//           alphabets.length = 0;
//         console.log(" toggle state",toggleState)
//     for(let i = 0; i < characters.length; i++){
//         const allElements = characters[i]
//         if(!isNaN(allElements) && allElements.trim() !==''){
//             numbers.push(allElements)
           
//         }else{
//             alphabets.push(allElements)
            
//         }

//     }
      
//     // console.log("numbers :", numbers )
//     // console.log("alphabets:", alphabets)
//     pickRandomindex()
//  }
//  toggle.addEventListener("click", handleClick);
 
 

function pickRandomindex(){
    // selectedCharacters1.length = 0;
    // selectedCharacters2.length = 0;
    //    if( toggleState === 1){
    //     for(let i =0; i < numbers.length; i++){
    //         let password01 = Math.floor(Math.random()*numbers.length)
    //         let  randomIdx2 = Math.floor(Math.random()*numbers.length)
    //           selectedCharacters1.push(characters[password01])
    //           selectedCharacters2.push(characters[randomIdx2])
    //       }
        
    //       const newPossord1 = selectedCharacters1;
    //        const newStringPassword = newPossord1.join('')
        
    //        const newPossord2 = selectedCharacters2;
    //        const newStringPassword2 = newPossord2.join('')
        
    //        console.log(newStringPassword)
    //        console.log(newStringPassword2)
        
    //        password1.textContent = newStringPassword
    //        password02.textContent = newStringPassword2
    //         console.log("numbers")
    //    } else if(toggleState === 2){

    //     for(let i =0; i <alphabets.length; i++){
    //         let password01 = Math.floor(Math.random()*alphabets.length)
    //         let  randomIdx2 = Math.floor(Math.random()*alphabets.length)
    //           selectedCharacters1.push(characters[password01])
    //           selectedCharacters2.push(characters[randomIdx2])
    //       }
        
    //       const newPossord1 = selectedCharacters1;
    //        const newStringPassword = newPossord1.join('')
        
    //        const newPossord2 = selectedCharacters2;
    //        const newStringPassword2 = newPossord2.join('')
        
    //        console.log(newStringPassword)
    //        console.log(newStringPassword2)
        
    //        password1.textContent = newStringPassword
    //        password02.textContent = newStringPassword2
    //     console.log("alphabest")
    //    } else{
        for(let i =0; i < passwordLength; i++){
            let password01 = Math.floor(Math.random()*characters.length)
            let  randomIdx2 = Math.floor(Math.random()*characters.length)
              selectedCharacters1.push(characters[password01])
              selectedCharacters2.push(characters[randomIdx2])
          }
        
          const newPossord1 = selectedCharacters1;
           const newStringPassword = newPossord1.join('')
        
           const newPossord2 = selectedCharacters2;
           const newStringPassword2 = newPossord2.join('')
        
           console.log(newStringPassword)
           console.log(newStringPassword2)
        
           password1.textContent = newStringPassword
           password02.textContent = newStringPassword2
        
       }


// }

div1.addEventListener("dblclick", function(event) {
    const copiedText = this.textContent;
    navigator.clipboard.writeText(copiedText).then(function() { 
        console.log("Copied the text: " + copiedText); 

    }).catch(function(error) {
         console.error("Failed to copy text: ", error);
         });

    console.log("clicked")
});

div2.addEventListener("dblclick", function(event) {
   
    const copiedText = this.textContent;
    navigator.clipboard.writeText(copiedText).then(function() { 
        console.log("Copied the text: " + copiedText); 

    }).catch(function(error) {
         console.error("Failed to copy text: ", error);
         });

    console.log("clicked")
  
});



// for(let i =0; i < passwordLength; i++){
//     let password01 = Math.floor(Math.random()*characters.length)
//     let  randomIdx2 = Math.floor(Math.random()*characters.length)
//       selectedCharacters1.push(characters[password01])
//       selectedCharacters2.push(characters[randomIdx2])
//   }

//   const newPossord1 = selectedCharacters1;
//    const newStringPassword = newPossord1.join('')

//    const newPossord2 = selectedCharacters2;
//    const newStringPassword2 = newPossord2.join('')

//    console.log(newStringPassword)
//    console.log(newStringPassword2)

//    password1.textContent = newStringPassword
//    password02.textContent = newStringPassword2
  

