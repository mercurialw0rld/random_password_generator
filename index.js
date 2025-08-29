const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("generated-password-1");
let password2El = document.getElementById("generated-password-2");

function getRandomPassword(passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function generatePassword(passwordLength) {
    if (passwordLength < 8 || passwordLength > 20) {
        window.alert("Password length must be between 8 and 20 characters.");
        return;
    }
    password1El.textContent = getRandomPassword(passwordLength);
    password2El.textContent = getRandomPassword(passwordLength);
}

function copyToClipboard(passwordId) {
    const passwordElement = document.getElementById(passwordId);
    const password = passwordElement.textContent;
    if (password === ""){
        window.alert("Please generate a password first.");
        return;
    }
    navigator.clipboard.writeText(password);
    window.alert("Password copied to clipboard!");
}
