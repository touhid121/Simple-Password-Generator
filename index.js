const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btnEl = document.getElementById("btn-el")
let boxElOne = document.getElementById("password1");
let boxelTwo = document.getElementById("password2");

 function generatePassword(){
   let password ="";
   let passwordLength= 15;
   for( let i = 0; i < passwordLength ; i++){
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
   }
   return password;
   
  
}

btnEl.addEventListener("click" , function() {
    
    let password1 = generatePassword();
    let password2 = generatePassword()

     boxElOne.innerHTML = `
                        <span>  </span>  `
                
     boxelTwo.innerHTML =   `<span> </span>`
     
     boxElOne.querySelector('span').textContent = password1;
    boxelTwo.querySelector('span').textContent = password2;
})


