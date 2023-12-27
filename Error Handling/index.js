//syntax error
object..create()
// refrence error as we have not declared variable with any var, const ,let
"use strict";
variable=22;
// type error
"use strict"
const name="kylie" // type error
name="kendal"
// try catch block
try
{
  const name="xoxo"                      
{
  const name="xoxo"
  name="jiangly"
}
catch(err)
{
  console.log(err);  //TypeError: Assignment to constant variable
                                    //at <anonymous>:4:7
}    
// console.error in try catch block
try
{
  const  name="xoxo"
  name="jiangly"
}
catch(err)
{
  console.error(err);
}
//    console.table in try catch block

"use strict";
const makeError= () =>
{
try
{
  const  name="xoxo"
  name="jiangly"
}
catch(err)
{
  console.table(err);
  console.error(err.name);
}
};
makeError();
