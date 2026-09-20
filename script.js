function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function go(page){
    window.location.href = page;
}

function calculateGrade(){
    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);
    let m4 = parseInt(document.getElementById("m4").value);
    let m5 = parseInt(document.getElementById("m5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let avg = total / 5;

    let grade;

    if(avg >= 90) grade = "A";
    else if(avg >= 75) grade = "B";
    else if(avg >= 60) grade = "C";
    else grade = "D";

    document.getElementById("gradeResult").innerHTML = 
    "Average: " + avg + " | Grade: " + grade;
}
function resetGrade(){
   document.getElementById("studentName").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";
    document.getElementById("m5").value = "";
    document.getElementById("gradeResult").innerHTML = "";
}

function checkPalindrome(){
    let word = document.getElementById("palindromeInput").value.toLowerCase();
    let reversed = word.split("").reverse().join("");

    if(word === reversed)
        document.getElementById("palindromeResult").innerHTML = "It is a Palindrome";
    else
        document.getElementById("palindromeResult").innerHTML = "Not a Palindrome";
}

function resetPalindrome(){
    document.getElementById("palindromeInput").value = "";
    document.getElementById("palindromeResult").innerHTML = "";
}

function analyzeNumber(){
    let num = parseInt(document.getElementById("numberInput").value);
    let result = "";

    if(num % 2 === 0)
        result += "Even ";
    else
        result += "Odd ";

    if(num > 0)
        result += "| Positive";
    else if(num < 0)
        result += "| Negative";
    else
        result += "| Zero";

    document.getElementById("numberResult").innerHTML = result;
}

function resetNumber(){
    document.getElementById("numberInput").value = "";
    document.getElementById("numberResult").innerHTML = "";
}

function validateLogin(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234")
        document.getElementById("loginResult").innerHTML = "Login Successful";
    else
        document.getElementById("loginResult").innerHTML = "Invalid Credentials";
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}
function toggleContent(id){
    let content = document.getElementById(id);

    if(content.style.display === "block"){
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}