// // chp 38-42(FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS)
// //1
// function powerCalc(b, e) {
//     r = 1;
//     while (e != 0) {
//         r = r * b;
//         --e;
//     }
//     alert(r)
// }
// powerCalc(3, 3)

// //2
// function leapYear(ipYear) {
//     r = ipYear % 4
//     if (r == 0) {
//         alert(ipYear + " is a leap year")
//     }
//     else {
//         alert(ipYear + " is not a leap year")
//     }
// }
// leapYear(prompt("Enter the year to check if the year is leap year or not"))

// //3
// function calcS(a, b, c) {
//     var S = (a + b + c) / 2
//     return S;
// }
// function areaOfTriangle(a, b, c) {
//     S = calcS(a, b, c);
//     area = S * (S - a) * (S - b) * (S - c);
//     alert(area)
// }
// areaOfTriangle(12, 12, 12);

// //4
// function average(mm, em, um){
//     console.log("avg func" + mm,em,um)
//     averageMarks = (mm + em + um)/3;
//     console.log(averageMarks)
//     return averageMarks
// }
// function percentage(mm, em, um){
//     var totMarks = 300;
//     var obtMarks = mm + em + um
//     var percentage = ( obtMarks / totMarks ) * 100
//     return percentage;
// }
// function main(mm, em, um){
//     avM = average(mm, em, um)
//     document.write("Average Marks: " + averageMarks + "<br>")
//     document.write("Percentage: " + percent + "%<br>")
// }
// main((+prompt("Enter student's maths marks from 100")),(+prompt("Enter student's english marks from 100")),(+prompt("Enter student's urdu marks from 100")));

// //5
// function searchWord(input){
//     inpFinal = input.toLowerCase();
//     para = "A quick brown fox jumps over the lazy dog"
//     paraArr = para.split(" ")
//     index = paraArr.indexOf(inpFinal)
//     alert("The index of your particular word is: " + index)
// }
// searchWord((prompt("Enter the word you want to find in these lines:\n A quick brown fox jumps over the lazy dog")));

// //6
// function deltVowels() {
//     sentence = "A quick brown fox jumps over the lazy dog";
//     document.write("The sentence is: " + sentence + "<br>")
//     sentence = sentence.toLowerCase();
//     sentence = sentence.replace(/a/g, "")
//     sentence = sentence.replace(/e/g, "")
//     sentence = sentence.replace(/i/g, "")
//     sentence = sentence.replace(/o/g, "")
//     sentence = sentence.replace(/u/g, "")
//     document.write("Without vowels: " + sentence)
// }
// deltVowels()

//7
sentence = "Pleases read this application and give me gratuity";
sentence = sentence.split("")
console.log(sentence)

switch (sentence) {
    case "ae":
}


// //8
// function meters(disInKm) {
//     r = disInKm * 1000;
//     document.write("Distance in meters : " + r + "m")
// }
// function feet(disInKm) {
//     r = disInKm * 3281;
//     document.write("<br> Distance in feet : " + r + "feet")
// }
// function inches(disInKm) {
//     r = disInKm * 39370;
//     document.write("<br> Distance in inches : " + r + "in")
// }
// function centimeters(disInKm) {
//     r = disInKm * 100000;
//     document.write("<br> Distance in centimeters : " + r + "cm")
// }
// function distanceCalc(disInKm) {
//     meters(disInKm)
//     feet(disInKm)
//     inches(disInKm)
//     centimeters(disInKm)
// }
// distanceCalc(+prompt("Enter the distance between two cities"))

// //9
// salary = +prompt("Enter salary of employee")
// extraHours = +prompt("Enter the extra working hours of employee")
// if (extraHours > 40){
//     overtimePay = extraHours * 12;
//     alert(overtimePay + "Rs included salary")
// }
// else{
//     alert("Sorry! No pay for employee who worked less than 40 hours extra")
// }

// //10
// amountWithdraw = +prompt("Enter amount to withdraw")
// hNotes = amountWithdraw / 100;
// hNotes = Math.trunc(hNotes)
// leftAmt = amountWithdraw % 100;
// fNotes = leftAmt / 50;
// fNotes = Math.trunc(fNotes)
// leftAmt = leftAmt % 50;
// tNotes = leftAmt / 10;
// tNotes = Math.trunc(tNotes)
// document.write("You have " + hNotes + " hundred notes, " + fNotes + " fifty notes, and " + tNotes + " ten notes.")


// // chp 43-48(EVENTS)
// //1
// function function1(){
//     alert("Show an alert box when clicking on a link")
// }

// //2
// function function2(){
//     alert("Thanks for purchasing a phone from us")
// }

// //3
// function function3(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }

// //5
// var inc = 0;
// var countHeading = document.getElementById("count");
// var interval;
// i = document.getElementById("incBtn");
// d = document.getElementById("decBtn");
// function timer() {
//     inc++;
//     countHeading.innerHTML = inc;
// }
// function incc() {
//     interval = setInterval(timer, 0);
//     d.disabled = false;
//     i.disabled = true;
// }
// function timer2() {
//     inc--;
//     countHeading.innerHTML = inc;
// }
// function dec() {
//     interval = setInterval(timer2, 0);
//     i.disabled = false;
//     d.disabled = true;
// }


// // chp 49-52(EVENTS)
// //1
// function submitt() {
//     name = document.getElementById("firstname").value;
//     lastName = document.getElementById("lastname").value;
//     email = document.getElementById("email").value;
//     mobileno = document.getElementById("mobileno").value;
//     gender = document.getElementById("gender").value;
//     address = document.getElementById("address").value;
//     city = document.getElementById("city").value;
//     country = document.getElementById("country").value;
//     document.write("<h1> Your submitted Information </h1> Fist Name: " + name + "<br> Last Name:" + lastName + "<br> Email: " + email + "<br> Mobile No: " + mobileno + "<br> Gender: " + gender + "<br> Address: " + address + "<br> City: " + city + "<br>Country: " + country);
// }

// //2
// function readMore() {
//     var fullText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam similique ducimus nisi in fugit. Impedit officia est neque sint dolores quod, deleniti ipsum voluptatum nulla ipsa, sapiente natus officiis.';
//     var para = document.getElementById("para");
//     para.innerHTML = fullText;
// }

//3



