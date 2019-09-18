// Checks input
document.getElementById('inputButton').addEventListener('click', generateMadLib);

function generateMadLib() {
    // Gets words from user input
    let wordOne = document.getElementById('wordOne').value;
    let wordTwo = document.getElementById('wordTwo').value;
    let wordThree = document.getElementById('wordThree').value;
    let wordFour = document.getElementById('wordFour').value;
    let wordFive = document.getElementById('wordFive').value;

    // Outputs mad lib
    document.getElementById('madLib').innerHTML = '“There are too many  ' + wordOne + " " + wordTwo + " on this " + wordThree + " " + " airplane!”, I screamed.  “Somebody has to " + wordFour + " on the " +  wordFive + " to solve this problem!”";
    document.getElementById('madLib').style.border= '3px solid maroon';
}
