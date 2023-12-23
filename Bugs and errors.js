//Bug-------->when bug happen in js code the code runs but not in a way we want
function addNumbers(a,b)
{
  console.log(a+b);
}
addNumbers("1",2);// "12"
console.log("still running");// "still running"
/* "12" -string concatenation the result is string but we want sum of 1+2=3 it does not happen as we pass "1" as string and 2 as number so result in string 
concatenation. so this is bug as we does not get what we want but program is still running */




//  errors------- when error happen program stop running
console.log(a+c)
console.log('above code does not run')
/*Uncaught ReferenceError: a is not defined
    <anonymous> debugger eval code:3
    the 3rd line also not run due to refrence error in 2 line */
