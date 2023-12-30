function payment(rupees)
{
  console.log(rupees + 10);
}
payment(40);     // 50  
                 // undefined



function payment(rupees)
{
  console.log(rupees +10);
} 
payment('10'); // 1010 it will resturn string concatenation as you have passed string as a parameter



function addTouristSurcharge(payment){
/*
Task:
    1. Add a try block.
    2. Inside the try block, check if 'payment' is a number. 
       If it's not a number, throw a reference error stating 
       'payment is not a number'. 
       If it is a number, perform the calculation and log out 
       the result.
    3. Add a catch block to log out the error.
*/
  try 
  {
    if(typeof(payment)!= 'number')
    {
      throw new RefrenceError("  Payment it's not  a number");
    }
    else
    {
      console.log(payment + 10)
  }
  catch(err)
  {
    console.log('Error : ' + err);
  }
}

addTouristSurcharge('60')
