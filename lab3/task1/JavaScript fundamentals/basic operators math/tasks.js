// task1.What are the final values of all variables a, b, c and d after the code below?
let a1 = 1, b1 = 1;
let c = ++a1; // c=2
let d = b1++; // d=1

// task2.What are the values of a and x after the code below?
let a2 = 2;
let x = 1 + (a2 *= 2);  // a=4, x=5

// task3.What are results of these expressions?
"" + 1 + 0 //="10" 
"" - 1 + 0 // =-1 
true + false // =1
6 / "3" // =2
"2" * "3" //=6
4 + 5 + "px" //="9px"
"$" + 4 + 5 //="$45"
"4" - 2 //=2
"4px" - 2 //=NaN
"  -9  " + 5 //="  -9  5"
"  -9  " - 5 //=-14 
null + 1 //=1 
undefined + 1 //=NaN 
" \t \n" - 2 //=-2 

// task4.Why? Fix it. The result should be 3.
let a4 = +prompt("First number?", 1);
let b4 = +prompt("Second number?", 2);
alert(a4 + b4);
