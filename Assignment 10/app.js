////////////////ASSIGNMENT 5///////////////////////////////
// // Chapter No 1 (Assignment 1-JavaScript)
// // 1
function c1task1() {
    alert("Welcome to My Website");
}

// // 2
function c1task2() {
    alert("Error! Please enter a valid password");
}

// // 3
function c1task3() {
    alert("Welcome to JS Land...\n Happy Coding!");
}

// // 4
function c1task4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding!");
}

// //5(run in console)
// alert("Hello! I can run JS through web my browser's console");

// // Chapter No 2 (Assignment 2-JavaScript)
// 1
function c2task1() {
    var username;
}

// 2
function c2task2() {
    var myName = "BariraNashal";
}

// 3
function c2task3() {
    var message;
    message = "Hello World";
    alert(message);
}

// 4
function c2task4() {
    var noOfStds = prompt("Enter Number of students");
    for (b = 1; b <= noOfStds; b++) {
        c = prompt("Student Name?");
        d = prompt("Student's age?");
        e = prompt("Student's field?");
        alert(c);
        alert(d);
        alert(e);
    }
}

// 5
function c2task5() {
    alert("PIZZA \nPIZZ \nPIZ \nPI \nP");
}

//6
function c2task6() {
    var email = "barirakhan1@gmail.com";
    alert("My email address is " + email);
}

//7
function c2task7() {
    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from a book " + book);
}

//8
function c2task8() {
    document.write("Yah ! I can write HTML content through JavaScript");
}

//9
function c2task9() {
    var f = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(f);
}

// Chapter No 3 (Assignment 3-JavaScript)
//1
function c3task1() {
    var age = 23;
    alert("I am " + age + " years old");
}

// 2
function c3task2() {
    var g = 14;
    alert("You have visited this site " + g + " times");
}

//3
function c3task3() {
    var birthYear = 1997;
    document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");
}

//4
function c3task4() {
    var visitorsName, productTitle, quantity;
    visitorsName = "John";
    productTitle = "T-Shirts";
    quantity = 5;
    document.write(visitorsName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store");
}

// Chapter No 4 (Assignment 4-JavaScript)
//1
function c4task1() {
    var h, i, j;
}

//2
function c4task2() {
    // var 1stnumber, +listen, -number two, thisis#than ;
    var $hello, _user2, my$work, i_info;
}

//3
function c4task3() {
    document.write("<h1>Rules for naming JS variables</h1> <br> Variable names can only contain letters, $, _ and numbers. For example: $my_1stVariable <br> Variables must begin with a letter, _ or $. For example $name, _name or name. <br> Variable names are case sensitive. <br> Variable names should not be JS keywords");
}

// Chapter No 5 (Assignment 5-JavaScript)
//1
function c5task1() {
    k = 3;
    l = 5;
    m = k + l;
    document.write("sum of " + k + " and " + l + " is " + m);
}

//2
function c5task2() {
    n = 3;
    o = 5;
    p = n * o;
    q = n - o;
    r = n / o;
    s = n % o;
    document.write("multiplication of " + n + " and " + o + " is " + p + "<br> Subtraction of " + n + " and " + o + " is " + q + "<br> Division of " + n + " and " + o + " is " + r + "<br> Modulus of " + n + " and " + o + " is " + s);
}

//3
function c5task3() {
    // a
    var t;
    // b
    document.write("Value after only variable declaration is: " + t);
    //c
    t = 5
    //d
    document.write("<br> Intial Value: " + t);
    //e
    t++;
    //f
    document.write("<br> Value after increment is: " + t);
    // g
    t = t + 7;
    //h
    document.write("<br> Value after addition is : " + t);
    //i
    t = t - 1;
    //j
    document.write("<br> Value after deccrement is: " + t);
    //k
    document.write("<br> The remainder is : " + t % 3);
}

//4
function c5task4() {
    var u = 600;
    u = u * 5;
    document.write("Total cost to buy 5 tickets to a movie is : " + u + " PKR");
}

//5
function c5task5() {
    var tablenumber = 4;
    document.write("<h2>Table of 4 </h2>");
    for (var multiplicationFactor = 1; multiplicationFactor <= 10; multiplicationFactor++) {
        result = tablenumber * multiplicationFactor;
        document.write("<br>" + tablenumber + " * " + multiplicationFactor + " = " + result);
    }
}

//6
function c5task6() {
    //a
    var celciusTemp = 25;
    //b
    var celciusToFarenheit = (celciusTemp * 9 / 5) + 32;
    document.write(celciusTemp + "oC is " + celciusToFarenheit + "oF <br>");
    //c
    var farenheitTemp = 70;
    //d
    var fahrenheitToCelcius = (farenheitTemp - 32) * 5 / 9;
    document.write(farenheitTemp + "oF is " + fahrenheitToCelcius + "oC");
}

//7
function c5task7() {
    priceOfItem1 = 650;
    priceOfItem2 = 100;
    orderedQuantityOfItem1 = 3;
    orderedQuantityOfItem2 = 7;
    shippingCharges = 100;
    finalpriceOfItem1 = priceOfItem1 * orderedQuantityOfItem1;
    finalpriceOfItem2 = priceOfItem2 * orderedQuantityOfItem2;
    totalCost = finalpriceOfItem1 + finalpriceOfItem2 + shippingCharges;
    document.write("Price of item 1 is " + priceOfItem1 + "<br> Qunatity of item 1 is " + orderedQuantityOfItem1 + "<br> Price of item 2 is " + priceOfItem2 + "<br> Qunatity of item 2 is " + orderedQuantityOfItem2 + "<br> Shipping Charges is " + shippingCharges + "<br> <br> Total cost of your order is " + totalCost);
}

//8
function c5task8() {
    totalMarks = 750;
    obtainedMarks = 620;
    percentage = (obtainedMarks / totalMarks) * 100;
    document.write("Total Marks: " + totalMarks + "<br> Marks Obtained: " + obtainedMarks + "<br> Percentage: " + percentage + "%");
}

//9
function c5task9() {
    usDollar = 10;
    saudiRiyal = 25;
    currencyinPKR = (usDollar * 104.80) + (saudiRiyal * 28);
    document.write("Total Currency in PKR: " + currencyinPKR)
}

//10
function c5task10() {
    var v = (2 + 5 * 10) / 2;
    document.write(v);
}

//11
function c5task11() {
    document.write("<h2> Age Calculator </h2>")
    currentYear = 2020;
    birthYear = 1997;
    age = currentYear - birthYear;
    document.write("Current Year: " + currentYear + "<br> Birth Year: " + birthYear + "<br> Your age is : " + age);
}

//12
function c5task12() {
    document.write("<h2> The Geometrizer </h2>");
    radius = 20;
    circumference = 2 * 3.14 * radius;
    areaOfCircle = 3.14 * (radius * radius);
    document.write("Radius of a Circle: " + radius + "<br> The circumference is: " + circumference + "<br> The area is: " + areaOfCircle);
}

// 13
function c5task13() {
    var snackName = "chocolate chip";
    currentAge = 23;
    maxAge = 65;
    quantitySnackPerDay = 3;
    totalSnackYouEat = (maxAge - currentAge) * quantitySnackPerDay;
    document.write("You will need " + totalSnackYouEat + " to last you untill the ripe old age of " + maxAge);
}

// Chapter No 6-9 (Assignment 6-9-JavaScript)
//1
function c6task1() {
    w = prompt("Enter the number");
    document.write("The value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of ++a is: " + ++w);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of a++ is: " + w++);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of --a is: " + --w);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");

    document.write("<br> The value of a-- is: " + w--);
    document.write("<br> Now the value of a is: " + w + "<br> ------------------------------------- <br>");
}

// 2
function c6task2() {
    var a = 2, b = 1;
    document.write("Expression is: --a  -  --b  +  ++b  +  b-- ");
    document.write("<br> at stage 1 --a : " + --a);
    // 2-1 = 1, a=1
    document.write("<br> at stage 2 --a  -  --b: " + (a - --b));
    //1   -   1-1 = 1 - 0 = 1, b=0 
    document.write("<br> at stage 3 --a - --b + ++b: " + (a - b + ++b));
    //1    +  0+1=1, b=1 , a=1
    // = 1 +    1  =  2
    document.write("<br> at stage 4 --a - --b + ++b + b--: " + (a - b + ++b + --b));
    // 2   + 1
    //3 , b=0 , a= 1
    var a = 2, b = 1;
    resultMathExp = --a - --b + ++b + b--;
    document.write("<br> Result is: " + resultMathExp);
}

//3
function c6task3() {
    goodName = prompt("Your Good Name Please?");
    document.write("Welcome " + goodName + " to our Website ");
}

//5
function c6task5() {
    inputTablenumber = prompt("Enter the number of table you want to print", 5);
    document.write("Table of " + inputTablenumber + "<br>");
    for (var factorMultiplication = 1; factorMultiplication <= 10; factorMultiplication++) {
        tableResult = inputTablenumber * factorMultiplication;
        document.write("<br>" + inputTablenumber + " * " + factorMultiplication + " = " + tableResult);
    }
}

//6
function c6task6() {
    subject1 = prompt("Enter Subject1 Name");
    subject2 = prompt("Enter Subject 2 Name");
    subject3 = prompt("Enter Subject 3 Name");
    totalMarksOfEachSbj = 100;
    subject1Marks = prompt("Enter Subject 1 marks");
    subject2Marks = prompt("Enter Subject 2 marks");
    subject3Marks = prompt("Enter Subject 3 marks");
    totalMarksOfAllSbj = totalMarksOfEachSbj * 3;
    obtainedMarksOfAllSbj = subject1Marks + subject2Marks + subject3Marks;
    subject1Percent = (subject1Marks / totalMarksOfEachSbj) * 100;
    subject2Percent = (subject2Marks / totalMarksOfEachSbj) * 100;
    subject3Percent = (subject3Marks / totalMarksOfEachSbj) * 100;
    totalPercent6 = (subject1Percent + subject2Percent + subject3Percent) / 3;
    document.write(" <b> Subject  &emsp;   Total Marks  &emsp;   Obtained Marks   &emsp;   Percentage </b>");
    document.write("<br>" + subject1 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject1Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject1Percent);
    document.write("<br>" + subject2 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject2Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject2Percent);
    document.write("<br>" + subject3 + '&emsp;&emsp;&emsp;' + totalMarksOfEachSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + subject3Marks + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + subject3Percent);
    document.write("<br>" + '&emsp;&emsp;&emsp;&emsp;&emsp;' + "<b>" + totalMarksOfAllSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + obtainedMarksOfAllSbj + '&emsp;&emsp;&emsp;&emsp;&emsp;' + totalPercent6 + "</b>");
}

// Chapter No 9-11 (Assignment 9-11-JavaScript)
//1
function c9task1() {
    var cityName9 = prompt("Enter name of the city");
    if (cityName9 === "karachi" || "Karachi") {
        alert("Welcome to the city of lights");
    }
}

//2
function c9task2() {
    var gender9 = prompt("Enter Your Gender");
    if (gender9 == "male") {
        alert("Good Morning, Sir");
    }
    else if (gender9 == "female") {
        alert("Good Morning, Maam");
    }
}

//3
function c9task3() {
    var colrOfTrafficSignal = prompt("Enter the input color of traffic signal");
    if (colrOfTrafficSignal == "red" || colrOfTrafficSignal == "Red") {
        alert("Must stop");
    }
    else if (colrOfTrafficSignal == "yellow" || colrOfTrafficSignal == "Yellow") {
        alert("Ready to move");
    }
    else if (colrOfTrafficSignal == "green" || colrOfTrafficSignal == "Green") {
        alert("Move now");
    }
}

//4
function c9task4() {
    fuelInLitres = +(prompt("Enter remaning fuel in your car in litres"));
    if (fuelInLitres < 0.25) {
        alert("Please refill the fuel in your car");
    }
    else {
        alert("Your car fuel is ok");
    }
}

//5
function c9task5() {
    //a
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    } //true

    //b
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    } //false

    //c
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }  //true
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }  //true

    //d
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    } //true

    //e
    if (true) {
        alert("True");
    }  //true
    if (false) {
        alert("False");
    }

    //f
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

//6
function c9task6() {
    document.write("<h2> MarkSheet </h2>");
    marks1 = +prompt("Enter Marks of 1st Subject");
    marks2 = +prompt("Enter Marks of 2nd Subject");
    marks3 = +prompt("Enter Marks of 3rd Subject");
    oneSubjectMarks = +prompt("Total Marks per subject");
    totalObtainedMarks6 = marks1 + marks2 + marks3;
    totalMarksOfAllSbjs6 = oneSubjectMarks * 3;
    percentage6 = (totalObtainedMarks6 / totalMarksOfAllSbjs6) * 100;
    document.write("Total Marks: " + totalMarksOfAllSbjs6 + "<br>Marks Obtained: " + totalObtainedMarks6 + "<br>Percentage: " + percentage6 + "% <br>");
    if (percentage6 >= 80) {
        document.write("Grade: A-One <br> Remarks: Excellent")
    }
    else if (percentage6 >= 70) {
        document.write("Grade: A <br> Remarks: Good")
    }
    else if (percentage6 >= 60) {
        document.write("Grade: B <br> Remarks: You need to improve")
    }
    else if (percentage6 < 60) {
        document.write("Grade: Fail <br> Remarks: Sorry")
    }
}

//7
function c9task7() {
    secretNumber = 4;
    userGuessNumber = +prompt("Guess the secret number");
    if (userGuessNumber === 4) {
        alert("Bingo! Correct answer")
    }
    else if (userGuessNumber++ === 5) {
        alert("Close enough to the correct answer”.")
    }
}

//8
function c9task8() {
    userCheckDivisibleNumber = +prompt("Enter the number you want to check wheather divisble by 3 or not");
    remainder = userCheckDivisibleNumber % 3;
    if (remainder === 0) {
        alert("Number is divisible by 3");
    }
    else {
        alert("Number is not divisible by 3");
    }
}

//9
function c9task9() {
    userCheckEvenOdd = +prompt("Enter the number you want to check wheather even number or odd number")
    remainder9 = userCheckEvenOdd % 2;
    if (remainder9 === 0) {
        alert("Number is Even");
    }
    else if (remainder9 === 1) {
        alert("Number is Odd");
    }
}

//10
function c9task10() {
    tempt10 = +prompt("Enter the temperature.");
    if (tempt10 >= 40) {
        alert("Its too hot outside.");
    }
    else if (tempt10 >= 30) {
        alert("The weather today is normal.");
    }
    else if (tempt10 >= 20) {
        alert("Today's weather is cool.");
    }
    else if (tempt10 >= 10) {
        alert("OMG! Today's weather is so cool.");
    }
}

//11
function c9task11() {
    firstNumber = +prompt("Enter first nunber");
    secondNumber = +prompt("Enter second number");
    operator11 = prompt("Enter Operator");
    if (operator11 == '+') {
        result = firstNumber + secondNumber;
        alert(firstNumber + " + " + secondNumber + " = " + result);
    }
    else if (operator11 == '-') {
        result = firstNumber - secondNumber;
        alert(firstNumber + " - " + secondNumber + " = " + result);
    }
    else if (operator11 == '*') {
        result = firstNumber * secondNumber;
        alert(firstNumber + " * " + secondNumber + " = " + result);
    }
    else if (operator11 == '/') {
        result = firstNumber / secondNumber;
        alert(firstNumber + " / " + secondNumber + " = " + result);
    }
    else if (operator11 == '%') {
        result = firstNumber % secondNumber;
        alert(firstNumber + " % " + secondNumber + " = " + result);
    }
}

// Chapter No 12-13 (Assignment 12-13-JavaScript)
//1
function c12task1() {
    var userStringOrVar = prompt("Enter Number/Character you want to check Uppercase/Lowercase/number");
    if (userStringOrVar >= 65 && userStringOrVar <= 90) {
        alert("Given letter is capital letter");
    }
}

//2
function c12task2() {
    firstInt = +prompt("Enter first Int");
    secondInt = +prompt("Enter second Int");
    if (firstInt > secondInt) {
        alert(firstInt + " is larger than " + secondInt);
    }
    else if (secondInt > firstInt) {
        alert(secondInt + " is larger than " + firstInt);
    }
    else if (firstInt === secondInt) {
        alert("Both Integars are equal");
    }
}

//3
function c12task3() {
    userNumber = +prompt("Enter the number you want to check is positive, negative or zero");
    if (userNumber > 0) {
        alert(userNumber + " is positive number");
    }
    else if (userNumber < 0) {
        alert(userNumber + " is negative number");
    }
    else if (userNumber === 0) {
        alert(userNumber + " is equal to zero");
    }
}

//4
function c12task4() {
    checkVowelOrCons = prompt("Enter character you want to check");
    if (checkVowelOrCons === 'a' || checkVowelOrCons === 'e' || checkVowelOrCons === 'i' || checkVowelOrCons === 'o' || checkVowelOrCons === 'u') {
        alert(checkVowelOrCons + " is a vowel.");
    }
    else {
        alert(checkVowelOrCons + " is a consonant.")
    }
}

//5
function c12task5() {
    correctPassword = "tryagain";
    userPassowrd = prompt("Enter your password")
    if (userPassowrd == "") {
        alert("Enter password");
    }
    else if (userPassowrd === correctPassword) {
        alert("Correct! The password you entered matches the original password")
    }
    else {
        alert("Incorrect password")
    }
}

//6
function c12task6() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting);
    }
    else {
        greeting = "Good evening";
        alert(greeting);
    }
}

//7
function c12task7() {
    userInputTime = +prompt("Enter time in 24 hours clock format");
    if (userInputTime >= 0000 && userInputTime < 1200) {
        alert("Good Morning");
    }
    else if (userInputTime >= 1200 && userInputTime < 1700) {
        alert("Good Afternoon");
    }
    else if (userInputTime >= 1700 && userInputTime < 2100) {
        alert("Good Evening");
    }
    else if (userInputTime >= 2100 && userInputTime <= 2359) {
        alert("Good Night");
    }
}


// Chapter No 14-16 (Assignment 14-16-JavaScript)
//1
function c14task1() {
    var students = [];
}

//2 
function c14task2() {
    var students2 = {};
}

//3
function c14task3() {
    var stringArr = ["a", "b", "c"];
}

//4
function c14task4() {
    var numArr = [1, 2, 3];
}

//5
function c14task5() {
    var booleanArr = [true, false, false, true];
}

//6
function c14task6() {
    var mixedArr = ["she1", "bia2", 12];
}

//7
function c14task7() {
    availableEduPak = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.Phil.", "PhD"];
    document.write("<h2> Qualifications </h2> <br> 1) " + availableEduPak[0] + "<br> 2) " + availableEduPak[1] + "<br> 3) " + availableEduPak[2] + "<br> 4) " + availableEduPak[3] + "<br> 5) " + availableEduPak[4] + "<br> 6) " + availableEduPak[5] + "<br> 7) " + availableEduPak[6] + "<br> 8) " + availableEduPak[7]);
}

//8
function c14task8() {
    stdNames = ["std1", "std2", "std3"];
    scroreOfStds = [320, 230, 480];
    totalMarksForEachStd = 500;
    for (x = 0; x <= scroreOfStds.length - 1; x++) {
        var percentageOfStds = (scroreOfStds[x] / totalMarksForEachStd) * 100;
        document.write("Score of " + stdNames[x] + " is " + scroreOfStds[x] + ". Percentage: " + percentageOfStds + "% <br>");
    }
}

//9
function c14task9() {
    colrNames = ["Red", "Green", "Blue"];
    document.write("<b> Main Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        console.log(colrNames[x] + "<br>");
        document.write(colrNames[x] + "<br>");
    }
    //a
    userAddedColr = prompt("Enter the colour you want to add at the beginning of the list");
    colrNames.unshift(userAddedColr);
    document.write("<b> Beginning Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        console.log(colrNames[x] + "<br>");
        document.write(colrNames[x] + "<br>");
    }
    //b
    userAddedColr2 = prompt("Enter the colour you want to add at the last of the list");
    colrNames.push(userAddedColr2);
    document.write("<b> Last Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //c
    var userAddedColr3 = [];
    quantityOfColrAddBeginning = +prompt("How many colours you want to add at the beginning?");
    for (y = 0; y < quantityOfColrAddBeginning; y++) {
        userAddedColr3[y] = prompt("Enter the " + (y + 1) + " colour you want to add at the beginning of the list");
        colrNames.splice(y, 0, userAddedColr3[y]);
    }
    console.log(userAddedColr3);
    console.log(colrNames);
    document.write("<b> More than one Beginning Added Colors </b> <br>")
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //d
    colrNames.shift();
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //e
    colrNames.pop();
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
    //f
    indexNumberDesiredToAddMoreThanOneInBetwenArr = [];
    userAddedColr4 = [];
    quantityOfColrAddBetweenArr = +prompt("How many colours you want to add?");
    if (quantityOfColrAddBetweenArr > 1) {
        for (aa = 0; aa < quantityOfColrAddBetweenArr; aa++) {
            indexNumberDesiredToAddMoreThanOneInBetwenArr[aa] = +prompt("At what index number you want to add " + (aa + 1) + " element")
            userAddedColr4[aa] = prompt("Enter the colour you want to add at index number " + (aa + 1));
            colrNames.splice(indexNumberDesiredToAddMoreThanOneInBetwenArr[aa], 0, userAddedColr4[aa])
        }
        console.log(userAddedColr4);
        console.log(colrNames);
        for (x = 0; x < colrNames.length; x++) {
            document.write(colrNames[x] + "<br>");
        }
    }
    else {
        userDesiredIndex = +prompt("At what index number (starting from 0), you want to add a color?");
        userAddedColr4 = prompt("Enter the colour you want to add");
        for (z = 0; z < quantityOfColrAddBetweenArr; z++) {
            colrNames.splice(userDesiredIndex, 0, userAddedColr4[z]);
        }
        console.log(userAddedColr4);
        console.log(colrNames);
        for (x = 0; x < colrNames.length; x++) {
            document.write(colrNames[x] + "<br>");
        }
    }
    //g
    quantityOfDeletedColors = +prompt("How many colors you want to delete?");
    indexNumsOfDeletedColors = prompt("Enter the index number (starting from 0), you want to delete");
    colrNames.splice(indexNumsOfDeletedColors, quantityOfDeletedColors)
    for (x = 0; x < colrNames.length; x++) {
        document.write(colrNames[x] + "<br>");
    }
}

//10
function c14task10() {
    stdsScoreUnsorted = [];
    noOfStds = +prompt("Enter the number of students");
    //storing input from user and displaying unsorted array
    document.write("<b> Unsorted Array </b> <br>");
    for (bb = 0; bb < noOfStds; bb++) {
        stdsScoreUnsorted[bb] = +prompt("Enter the score of " + (bb + 1) + " Student");
        console.log("Std" + (bb + 1) + " score is " + stdsScoreUnsorted[bb] + "\n");
        document.write("Std " + (bb + 1) + " score is: " + stdsScoreUnsorted[bb] + "<br>");
    }
    console.log(stdsScoreUnsorted)
    for (cc = 0; cc < noOfStds; cc++) {
        for (dd = (cc + 1); dd < noOfStds; dd++) {
            if (stdsScoreUnsorted[cc] > stdsScoreUnsorted[dd]) {
                temp10 = stdsScoreUnsorted[cc];
                stdsScoreUnsorted[cc] = stdsScoreUnsorted[dd];
                stdsScoreUnsorted[dd] = temp10;
            }
        }
    }
    console.log(stdsScoreUnsorted);
    document.write("<b> Sorted Array </b> <br>")
    for (ee = 0; ee < noOfStds; ee++) {
        document.write("Std " + (ee + 1) + " score is: " + stdsScoreUnsorted[ee] + "<br>");
    }
}

//11
function c14task11() {
    cityNames = [];
    quantityOfCityNames = +prompt("How many cities you want to add");
    document.write("<b> Full Array </b> <br> ");
    for (ff = 0; ff < quantityOfCityNames; ff++) {
        cityNames[ff] = prompt("Enter the " + (ff + 1) + " city name");
        console.log(cityNames[ff])
        document.write(ff + ") " + cityNames[ff] + "<br>");
    }
    console.log(cityNames);
    StartCityIndexNos = +prompt("From where you want to copy elements to new array? Write index no(Starting from 0)");
    console.log(StartCityIndexNos);
    EndCityIndexNos = +prompt("To where you want to copy elements to new array? Write index no(Starting from 0)");
    console.log(EndCityIndexNos);
    EndCityIndexNos++;
    copiedCityNames = cityNames.slice(StartCityIndexNos, EndCityIndexNos);
    console.log(copiedCityNames);
    document.write("<br> <b> Copied Elements from array </b> <br> ")
    for (ff = 0; ff < EndCityIndexNos - 1; ff++) {
        document.write(ff + ") " + copiedCityNames[ff] + "<br>");
    }
}

//12
function c14task12() {
    var arr12 = ["This", "is", "my", "cat"];
    document.write("<b> Array </b> <br>");
    for (gg = 0; gg < arr12.length; gg++) {
        document.write(arr12[gg] + ",")
    }
    document.write(" <br> <b> String </b> <br>");
    for (gg = 0; gg < arr12.length; gg++) {
        document.write(arr12[gg] + " ")
    }
}

//13
function c14task13() {
    arr14 = [];
    var arr13 = ["Keyboard", "Mouse", "Printer", "Monitor"];
    document.write("<b> Devices: </b> <br>");
    for (hh = 0; hh < arr13.length; hh++) {
        document.write(arr13[hh] + ",")
    }
    for (hh = 1; hh <= arr13.length; hh++) {
        for (ii = 0; ii < hh; ii++) {
            arr14[hh] = arr13.slice(ii, hh);
        }
        document.write("<br> <b> Out: </b>");
        console.log(arr14[hh])
        document.write("<br>" + arr14[hh])
    }
}

// //13 Other method
// function c14task13() {
// arr16 = [];
// arr15 = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<b> Devices: </b> <br>");
// for (hh = 0; hh < arr15.length; hh++) {
//     document.write(arr15[hh] + ",")
// }
// console.log(arr15.length);
// console.log(arr15)
// for (hh = 0; hh <= arr15.length; hh++) {
//     arr16[hh] = arr15.shift();
//     console.log(arr15);
//     document.write("<br> <b> Out: </b>");
//     document.write("<br>" + arr16[hh])
//     console.log(arr16);
// }
// }

//14
function c14task14() {
    arr16 = [];
    arr15 = ["Keyboard", "Mouse", "Printer", "Monitor"];
    document.write("<b> Devices: </b> <br>");
    for (hh = 0; hh < arr15.length; hh++) {
        document.write(arr15[hh] + ",")
    }
    console.log(arr15.length);
    console.log(arr15)
    for (hh = 0; hh <= arr15.length; hh++) {
        arr16[hh] = arr15.pop();
        console.log(arr15);
        document.write("<br> <b> Out: </b>");
        document.write("<br>" + arr16[hh])
        console.log(arr16);
    }
}

//15
function c14task15() {
    arr17 = ["Apple", "Samsung", "Motrolla", "Sony", "Haier"];
    console.log(arr17);
    document.write(`<select> <option>${arr17[0]}</option> <option>${arr17[1]}</option> <option>${arr17[2]}</option> <option>${arr17[3]}</option> <option>${arr17[4]}</option> </select>`);
}

// Chapter No 17-20 (Assignment 17-20-JavaScript)
//1
function c17task1() {
    var arr = new Array(3);
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = new Array(3);
    }
    console.log(arr);
}

//2
function c17task2() {
    arr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
    for (kk = 0; kk < arr2.length; kk++) {
        document.write(arr2[kk] + "<br>")
    }
}

//3
function c17task3() {
    for (kk = 1; kk <= 10; kk++) {
        document.write(kk + "<br>")
    }
}

//4
function c17task4() {
    tableNo4 = +prompt("Enter the table number you want to print");
    tableCount4 = +prompt("Enter the number to where you want to print the table of " + tableNo4 + "<br>");
    document.write("Table of " + tableNo4 + " till " + tableCount4);
    for (ll = 1; ll <= tableCount4; ll++) {
        multiplyFactor4 = tableNo4 * ll;
        document.write("<br>" + tableNo4 + " * " + ll + " = " + multiplyFactor4);
    }
}

//5
function c17task5() {
    fruitNames = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
    for (mm = 0; mm < fruitNames.length; mm++) {
        document.write(fruitNames[mm] + "<br>")
    }
    document.write("<br>")
    for (mm = 0; mm < fruitNames.length; mm++) {
        document.write("Element at index " + mm + " is " + fruitNames[mm] + "<br>")
    }
}

//6
function c17task6() {
    document.write("<b>Counting:</b>");
    for (kk = 1; kk <= 15; kk++) {
        document.write(" " + kk + " ")
    }
    document.write("<br> <b>Reverse Counting:</b>");
    for (kk = 10; kk >= 1; kk--) {
        document.write(" " + kk + " ")
    }
    document.write("<br> <b>Even:</b>");
    for (kk = 0; kk <= 20; kk++) {
        temp = kk % 2;
        if (temp === 0) {
            document.write(" " + kk + " ")
        }
    }
    document.write("<br> <b>Odd:</b>");
    for (kk = 0; kk <= 20; kk++) {
        temp = kk % 2;
        if (temp === 1) {
            document.write(" " + kk + " ")
        }
    }
    document.write("<br> <b>Series:</b>");
    for (kk = 2; kk <= 20; kk = kk + 2) {
        document.write(" " + kk + "k" + " ")
    }
}

//7
function c17task7() {
    arr7 = ["cake", "apple pie", "cookie", "chips", "patties"];
    searchItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
    searchItem2 = searchItem.toLowerCase();
    elementIndex = arr7.indexOf(searchItem2);
    for (ll = 0; ll < arr7.length; ll++) {
        if (searchItem2 === arr7[ll]) {
            alert(searchItem + " is available at index " + elementIndex + " in our bakery");
        }
    }
    if (elementIndex === (-1)) {
        alert("We are sorry! " + searchItem + " is not available in our bakery");
    }
}

//8
function c17task8() {
    mm = 0
    arr8 = [24, 53, 91, 78, 12];
    document.write("Array items: " + arr8);
    if (arr8[mm] > arr8[mm + 1] && arr8[mm] > arr8[mm + 2] && arr8[mm] > arr8[mm + 3] && arr8[mm] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm]);
    }
    else if (arr8[mm + 1] > arr8[mm] && arr8[mm + 1] > arr8[mm + 2] && arr8[mm + 1] > arr8[mm + 3]) {
        document.write("<br> The largest number is: " + arr8[mm + 1]);
    }
    else if (arr8[mm + 2] > arr8[mm] && arr8[mm + 2] > arr8[mm + 1] && arr8[mm + 2] > arr8[mm + 3] && arr8[mm + 2] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm + 2]);
    }
    else if (arr8[mm + 3] > arr8[mm] && arr8[mm + 3] > arr8[mm + 1] && arr8[mm + 3] > arr8[mm + 2] && arr8[mm + 3] > arr8[mm + 4]) {
        document.write("<br> The largest number is: " + arr8[mm + 3]);
    }
    else if (arr8[mm + 4] > arr8[mm] && arr8[mm + 4] > arr8[mm + 1] && arr8[mm + 4] > arr8[mm + 2] && arr8[mm + 4] > arr8[mm + 3]) {
        document.write("<br> The largest number is: " + arr8[mm + 4]);
    }
}

//9
function c17task9() {
    mm = 0
    arr8 = [24, 53, 78, 91, 12];
    document.write("Array items: " + arr8);
    if (arr8[mm] < arr8[mm + 1] && arr8[mm] < arr8[mm + 2] && arr8[mm] < arr8[mm + 3] && arr8[mm] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm]);
    }
    else if (arr8[mm + 1] < arr8[mm] && arr8[mm + 1] < arr8[mm + 2] && arr8[mm + 1] < arr8[mm + 3]) {
        document.write("<br> The smallest number is: " + arr8[mm + 1]);
    }
    else if (arr8[mm + 2] < arr8[mm] && arr8[mm + 2] < arr8[mm + 1] && arr8[mm + 2] < arr8[mm + 3] && arr8[mm + 2] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm + 2]);
    }
    else if (arr8[mm + 3] < arr8[mm] && arr8[mm + 3] < arr8[mm + 1] && arr8[mm + 3] < arr8[mm + 2] && arr8[mm + 3] < arr8[mm + 4]) {
        document.write("<br> The smallest number is: " + arr8[mm + 3]);
    }
    else if (arr8[mm + 4] < arr8[mm] && arr8[mm + 4] < arr8[mm + 1] && arr8[mm + 4] < arr8[mm + 2] && arr8[mm + 4] < arr8[mm + 3]) {
        document.write("<br> The smallest number is: " + arr8[mm + 4]);
    }
}

//10
function c17task10() {
    for (kk = 1; kk <= 100; kk++) {
        temp = kk % 5;
        if (temp === 0) {
            document.write(" " + kk + " ")
        }
    }
}

////////////////ASSIGNMENT 6///////////////////////////////
// Chp # 21-25 (STRING METHODS)

// 1
function c21task1() {
    firstName = [prompt("Enter your first name")];
    lastName = [prompt("Enter your last name")];
    fullName = [];
    for (i = 0; i < firstName.length; i++) {
        for (var j = 0; j < lastName.length; j++) {
            fullName.push(firstName[i] + " " + lastName[j]);
        }
    }
    alert(fullName);
}

//2
function c21task2() {
    favtPhone = prompt("Your favt mobile phone model?");
    document.write("My favorite phone is " + favtPhone);
    lengthOfString = favtPhone.length;
    document.write(" <br> Length of string: " + lengthOfString);
}

//3
function c21task3() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndex = prompt("Enter the particular alphabet you want to find from a word");
    document.write("<br> Index of " + "'" + particularIndex + "': " + string.indexOf(particularIndex));
}

// 4
function c21task4() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndex = prompt("Enter the particular alphabet you want to find from a word");
    document.write("<br> Last index of " + "'" + particularIndex + "': " + string.lastIndexOf(particularIndex));
}

//5
function c21task5() {
    string = prompt("Enter the word");
    document.write("String: " + string);
    particularIndexChar = +prompt("Enter the particular index of alphabet from a word you want to print");
    document.write("<br> Character at index " + particularIndexChar + ": " + string.charAt(particularIndexChar));
}

//6
function c21task6() {
    firstName = prompt("Enter first name");
    lastName = prompt("Enter last name");
    alert(firstName + " " + lastName);
}

// 7
function c21task7() {
    firstWord = "Hyderabad";
    lastWord = "Islam";
    firstWordLast = firstWord.slice(5);
    document.write("City: " + firstWord);
    document.write("<br> After replacement: " + lastWord + firstWordLast);
}

//8
function c21task8() {
    message = "Ali and Sami are best friends. They play cricket and football together.";
    newMessage = message.replace(/and/g, "&");
    document.write("Original message: " + message);
    document.write("<br> Replaced message: " + newMessage);
}

//9
function c21task9() {
    number = prompt("Enter the string value you want to convert into a number", 472);
    convertedNumber = Number(number);
    document.write("Value: " + number + "<br> Type: " + typeof number + "<br> Value: " + convertedNumber + "<br> Type: " + typeof convertedNumber);
}

//10
function c21task10() {
    word = prompt("Enter the word you want to capitalize");
    wordCapital = word.toUpperCase();
    document.write("User Input: " + word);
    document.write("<br> Upper Case: " + wordCapital);
}

//11
function c21task11() {
    word = prompt("Enter the word in which you want to capitalize the first letter of");
    wordStart = word.slice(0, 1);
    wordStart = wordStart.toUpperCase();
    wordEnd = word.slice(1);
    wordEnd = wordEnd.toLowerCase();
    document.write("User Input: " + word);
    document.write("<br> Title Case: " + wordStart + wordEnd);
}

//12
function c21task12() {
    num = 35.36;
    num = num.toString();
    newNum = num.split('.').join("");
    document.write("Number: " + num);
    document.write("<br>");
    document.write("Result: " + newNum);
}

//13
function c21task13() {
    userNameCodes = [];
    userName = prompt("Enter your name");
    specialSymbol = ["@", ".", ",", "!"];
    for (i = 0; i < userName.length; i++) {
        userNameCodes[i] = userName[i].charCodeAt();
        if (userNameCodes[i] === 64 || userNameCodes[i] === 33 || userNameCodes[i] === 44 || userNameCodes[i] === 46) {
            alert("invalid username");
            break;
        }
    }
}
// //13 other method
// userName = prompt("Enter your name");
// specialSymbol = ["@", ".", ",", "!"];
// for (i = 0; i < userName.length; i++) {
//     for (j = 0; j < specialSymbol.length; j++) {
//         if (userName[i] === specialSymbol[j]) {
//             alert("please enter a valid username")
//             break;
//         }
//     }
// }

//14
function c21task14() {
    a = ["cake", "apple pie", "cookie", "chips", "patties"];
    order = prompt("Welcome to ABC bakery, What do you want to order sir/maam?");
    order = order.toLowerCase();
    findOrder = a.indexOf(order);
    if (findOrder == -1) {
        alert("We are sorry, " + order + " is not available in our bakery");
    }
    else {
        alert(order + " is available at index " + findOrder + " in our bakery");
    }
}

//15
function c21task15() {
    passwordCodes = [];
    password = prompt("Enter password");
    for (i = 0; i < password.length; i++) {
        passwordCodes[i] = password[i].charCodeAt();
    }
    if (passwordCodes[0] >= 48 && passwordCodes[0] <= 57) {
        alert("First letter should be an alphabet");
    }
    else if (password.length < 6) {
        alert("Password must be atleast 6 characters long");
    }
    console.log(passwordCodes);
    for (j = 0; j < password.length; j++) {
        if (passwordCodes[j] < 48 || (passwordCodes[j] > 57 && passwordCodes[j] < 65) || (passwordCodes[j] > 90 && passwordCodes[j] < 97) || passwordCodes[j] > 122) {
            alert("Password can only contain letters and numbers");
            break;
        }
    }
}

//16
function c21task16() {
    res = [];
    university = "University of Karachi ";
    res = university.split("");
    for (i = 0; i < res.length; i++) {
        document.write(res[i] + "<br>")
    }
}

//17
function c21task17() {
    userInput = prompt("Enter the word", "pakistan");
    lastChar = userInput.charAt(userInput.length - 1);
    document.write("User input: " + userInput + "<br> Last character of input: " + lastChar);
}

//18
function c21task18() {
    text = "The quick brown fox jumps over the lazy dog."
    text1 = text.toLowerCase();
    count = text1.split("the").length - 1
    document.write("Text: " + text);
    document.write("<br> There are " + count + " occurance(s) of the word 'the'. ")
}


// Chp # 26-30 (MATH METHODS)

//1
function c26task1() {
    integar = +prompt("Please enter a positive integar")
    if (integar < 0) {
        alert("please enter a positive number")
    }
    document.write("Number: " + integar)
    document.write("<br> Round off value: " + Math.round(integar))
    document.write("<br> Floor value: " + Math.floor(integar))
    document.write("<br> Ceil value: " + Math.ceil(integar))
}

//2
function c26task2() {
    integar = +prompt("Please enter a negative integar")
    if (integar > 0) {
        alert("please enter a negative number")
    }
    document.write("Number: " + integar)
    document.write("<br> Round off value: " + Math.round(integar))
    document.write("<br> Floor value: " + Math.floor(integar))
    document.write("<br> Ceil value: " + Math.ceil(integar))
}

//3
function c26task3() {
    number = +prompt("Please enter a number to take its absolute value");
    absValue = Math.abs(number);
    document.write("The absolute value of " + number + " is " + absValue);
}

//4
function c26task4() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 6) + 1);
    alert("Random dice value is " + randomNumber2)
}

//5
function c26task5() {
    randomNumber = Math.random();
    coinValue = Math.floor((randomNumber * 2) + 1)
    if (coinValue === 2) {
        alert(coinValue + " \n Random coin Value: Heads")
    }
    else if (coinValue === 1) {
        alert(coinValue + " \n Random coin Value: Tails")
    }
}

//6
function c26task6() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 100) + 1)
    alert("Random number between 1 and 100:\n" + randomNumber2)
}

//7

//8
function c26task8() {
    randomNumber = Math.random();
    randomNumber2 = Math.floor((randomNumber * 10) + 1)
    userInput = +prompt("Enter the number between 1 to 100 to match from a stored random number")
    console.log(randomNumber2)
    if (userInput === randomNumber2) {
        alert("Congo! your number is matched from a secret number")
    }
    else if (userInput != randomNumber2) {
        alert("Try again!")
    }
}


// Chp # 31-34 (DATE METHODS)

//1
function c31task1() {
    rightNow = new Date()
    document.write(rightNow);
}

//2
function c31task2() {
    monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    now = new Date();
    theMonth = now.getMonth();
    nameOfMonth = monthNames[theMonth];
    document.write("Current Month: " + nameOfMonth);
}

//3
function c31task3() {
    rightNow = new Date()
    console.log(rightNow);
    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    theDay = rightNow.getDay();
    nameOfToday = dayNames[theDay]
    alert("Today is " + nameOfToday)
}

//4
function c31task4() {
    rightNow = new Date()
    console.log(rightNow);
    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    theDay = rightNow.getDay();
    nameOfToday = dayNames[theDay];
    if (theDay === 0 || theDay === 6) {
        alert("Today is funday!")
    }
    else {
        alert("Today is not a funday")
    }
}

//5
function c31task5() {
    rightNow = new Date()
    console.log(rightNow);
    days = rightNow.getDate();
    if (days < 16) {
        alert("First fifteen days of the month");
    }
    else {
        alert("Last days of the month")
    }
}

//6
function c31task6() {
    rightNow = new Date();
    document.write("Current Date: " + rightNow)
    time = rightNow.getTime();
    document.write("<br> Eclapse Millisecond since january 1,1970: " + time);
    timeInMinutes = (time / 1000) / 60
    document.write("<br> Eclapsed minutes since january 1,1970: " + timeInMinutes)
}

//7
function c31task7() {
    rightNow = new Date();
    console.log(rightNow)
    time = rightNow.getHours();
    console.log(time)
    if (time >= 6 && time >= 18) {
        alert("It's PM")
    }
    else {
        alert("It's AM")
    }
}

//8
function c31task8() {
    rightNow = new Date();
    document.write("Right Now: " + rightNow)
    rightNow.setMonth(11);
    rightNow.setDate(31);
    rightNow.setHours(00)
    laterDate = rightNow
    document.write("<br> Later Date: " + laterDate)
}

//9
function c31task9() {
    rightNow = new Date()
    date = new Date("April 25, 2020")
    msRightNow = rightNow.getTime();
    msDate = date.getTime();
    diff = msRightNow - msDate;
    dDiff = diff / (1000 * 60 * 60 * 24);
    dDiff = Math.floor(dDiff);
    document.write("1st Ramadan is on " + date)
    document.write("<br> " + dDiff + " days have passed since 1st Ramadan " + date.getFullYear())
}

//10
function c31task10() {
    rightNow = new Date()
    date = new Date("January 1, 2020")
    msRightNow = rightNow.getTime()
    msDate = date.getTime()
    diff = msRightNow - msDate
    dDiff = diff / 1000;
    dDiff = Math.floor(dDiff);
    document.write("Our reference date: " + rightNow)
    document.write("<br> " + dDiff + " seconds has been passed since the beginning of the year 2020")
}

//11
function c31task11() {
    rightNow = new Date()
    document.write("Current Date: " + rightNow)
    a = rightNow.getHours();
    rightNow.setHours(a - 1)
    document.write("<br> One hour ago, it was " + rightNow)
}

//12
function c31task12() {
    rightNow = new Date()
    document.write("Current Date: " + rightNow)
    a = rightNow.getFullYear();
    console.log(a)
    rightNow.setFullYear(a - 100)
    document.write("<br> Hundred years back, it was " + rightNow)
}

//13
function c31task13() {
    userAge = +prompt("Enter your age", 21)
    rightNow = new Date()
    a = rightNow.getFullYear()
    console.log(a)
    birthYear = a - userAge
    document.write("Your age is " + userAge)
    document.write("<br> Your birth year is " + birthYear)
}

//14
function c31task14() {
    document.write("<h1> <b> K.Electric Bill </b> </h1>")
    userName = prompt("Your good name please?")
    document.write("Customer's Name: " + userName)
    rightNow = new Date()
    currentMonth = rightNow.getMonth()
    console.log(currentMonth)
    monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    nameOfMonth = monthNames[currentMonth];
    document.write("<br> Current Month: " + nameOfMonth);
    noOfUnits = 410
    document.write("<br> Number of units: " + noOfUnits)
    chargesPerUnit = 16
    document.write("<br> Charges per unit: " + chargesPerUnit)
    netAmountPayable = noOfUnits * chargesPerUnit
    document.write("<br> Net Amount Payable(within Due Date): " + netAmountPayable)
    latePaymentSurcharge = 350
    document.write("<br> Late Payment Surcharge: " + latePaymentSurcharge)
    grossAmountPayable = netAmountPayable + latePaymentSurcharge
    document.write("<br> Gross Amount Payable(after Due Date): " + grossAmountPayable)
}


// Chp # 35-38 (FUNCTION)

//1
function c35task1() {
    function rightNow() {
        rightNow = new Date()
        document.write(rightNow)
    }
    rightNow()
}

//2
function c35task2() {
    function name(a, b) {
        a = prompt("Enter your first name?")
        b = prompt("Enter your last name?")
        alert("Welcome to my website " + a + " " + b)
    }
    name()
}

//3
function c35task3() {
    function add(a, b) {
        c = a + b
        return c
    }
    result = add((+prompt("Enter your first number?")), (+prompt("Enter your second number?")))
    alert(result)
}

//4
function c35task4() {
    function calculator(num1, operator, num2) {
        if (operator === '+') {
            c = num1 + num2
        }
        else if (operator === '-') {
            c = num1 - num2
        }
        else if (operator === '/') {
            c = num1 / num2
        }
        else if (operator === '*') {
            c = num1 * num2
        }
        return c;
    }
    result = calculator((+prompt("Enter your first number?")), (prompt("Enter operator?")), (+prompt("Enter your second number?")))
    alert(result)
}

//5
function c35task5() {
    function square(num) {
        num2 = num * num
        alert("your square argument is: " + num2)
    }
    square(+prompt("Enter the number you want to take square of"))
}

//6
function c35task6() {
    function factorial(num) {
        fact = 1
        for (i = 1; i <= num; i++) {
            fact = fact * i;
        }
        alert("Factorial of a given number is: " + fact)
    }
    factorial(+prompt("Enter the number you want to get factorial of"))
}

//7
function c35task7() {
    function counting(a, b) {
        for (i = a; i <= b; i++) {
            document.write(i + "<br>")
        }
    }
    counting((+prompt("Enter number from where you want to begin counting")), (+prompt("Enter number to where you want to print counting")))
}

//8
function c35task8() {
    function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(num) {
            squareOfNum = num * num
            return squareOfNum
        }
        baseSquare = calculateSquare(base)
        perpendicularSquare = calculateSquare(perpendicular)
        hypotenuseSquare = baseSquare + perpendicularSquare
        hypotenuse = Math.sqrt(hypotenuseSquare)
        hypotenuse = hypotenuse.toFixed(2)
        alert("Hypotenuse of the given base and perpendicular of right triangle is: " + hypotenuse)
    }
    calculateHypotenuse((+prompt("Enter base of righttriangle")), (+prompt("Enter perpendicular of righttriangle")))
}

//9
function c35task9() {
    function areaOfRectangle(width, height) {
        a = width * height
        alert("Area of rectangle is: " + a)
    }
    areaOfRectangle((+prompt("Enter width of rectangle")), (+prompt("Enter height of rectangle")))
}

//10
function c35task10() {
    function checkPalindrome(word) {
        check = "";
        for (i = word.length - 1; i >= 0; i--) {
            check += word[i];
        }
        if (check === word) {
            alert(word + " is palindrome word");
        }
        else {
            alert(word + " is not a palindrome word")
        }
    }
    checkPalindrome(prompt("Enter the word you want to check either palindrome or not"))
}

//11
function c35task11() {
    function titleCase(string) {
        wordStart = []
        wordEnd = []
        splitString = string.split(" ")
        for (i = 0; i < splitString.length; i++) {
            wordStart[i] = splitString[i].slice(0, 1);
            wordStart[i] = wordStart[i].toUpperCase();
            wordEnd[i] = splitString[i].slice(1);
            wordEnd[i] = wordEnd[i].toLowerCase();
        }
        document.write("User Input: " + string + "<br>" + "Title Case: ");
        for (j = 0; j < splitString.length; j++) {
            document.write(wordStart[j] + wordEnd[j] + " ");
        }
    }
    titleCase(prompt("Enter the string you want to make title case"))
}

// //12 wrong
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//     alert(strSplit[i])
//     alert(longestWord)
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function longestElement(string) {
//     j = 1
//     splitString = string.split(" ")
//     for (i = 0; i < splitString.length; i++) {
//         if (splitString[i].length > splitString[j].length) {
//             alert("The element at index " + i + " is of greates")
//         }
//         else if (splitString[j].length > splitString[i].length) {
//             alert("The element at index " + j + " is of greates")
//         }
//     }
// }
// longestElement(prompt("Enter the text in which you want to find the longest word"))


//13
function c35task13() {
    function checkLetterCount(string, letter) {
        text1 = string.toLowerCase();
        count = text1.split(letter).length - 1
        alert("There are " + count + " occurance(s) of the word " + letter)
    }
    checkLetterCount((prompt("Enter the text from where you want to count a letter occurances")), (prompt("Enter which letter occurance you want to count")))
}

//14
function c35task14() {
    radius = +prompt("Enter the radius of circle to calculate the circumference and area of circle")
    function calcCircumference(radius) {
        circumference = 2 * 3.12 * radius
        alert("The circumference is: " + circumference)
    }
    function calcArea(radius) {
        area = 3.12 * radius * radius
        alert("The area is: " + area)
    }
    calcCircumference(radius)
    calcArea(radius)
}

////////////////ASSIGNMENT 9///////////////////////////////
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