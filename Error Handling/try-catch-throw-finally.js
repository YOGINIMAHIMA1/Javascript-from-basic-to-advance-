// Reference Error
console.log(a+b);
console.log('the line is never executed');
// try catch block
try{
  console.log(a+b);
}catch(err)
{
  console.log(err)
  console.log(' the error  wa saved in the error log');
  console.log(err.stack);
}
console.log(' My program does not stop');
try{
  throw new  RefrenceError();
}catch(err)
{
  console.log('there was a Refrence Error')
}
console.log('my program does not stop');
