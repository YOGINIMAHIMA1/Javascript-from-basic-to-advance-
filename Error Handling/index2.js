const makeError= () =>{
  try{
    throw new customError('this is a custom error');
  } catch(err)
  {
    console.log(err.name);
    console.log(err);
  } }
  makeError();
  function customError(message)
    {
      this.message= message;
      this.name=name;
    
    }
/*customError {message: 'this is a custom error', name: ''}
message
: 
"this is a custom error"
name
: 
"" */
// throw 
const makeError = () => {
try  {
    throw new Error('This is a error!");
                    }catch(err){
      console.log(err.name);
      console.log(err.message);
     console.log(err.stack);
}
};
makeError();
