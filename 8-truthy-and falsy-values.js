// truthy values
if(true || "abcde" || 1 || -1) {
    console.log("truthy");
}


// falsy values
if(false || "" || null || undefined || 0) {
    console.log("truthy");
} else {
    console.log("falsy");
}



/*
The 8 FALSY Values
false       -	The boolean keyword itself
0           -	The number zero
-0          -	Negative zero
0n          -	BigInt zero
"", '', ``  -	Any empty string
null        -	The absence of any value
undefined   -	A variable that has not been assigned a value
NaN	        -"Not-a-Number," usually the result of an invalid math operation


These are TRUTHY
"0"     -	A string containing a zero is truthy because it is not empty
"false" -	The string "false" is truthy
[]      - 	An empty array is truthy
{}      -	An empty object is truthy
*/