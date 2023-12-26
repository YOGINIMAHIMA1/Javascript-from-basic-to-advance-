function Array( arr1)
{
  arr1[2]=10;
}

var Arr=[45,33,23];
console.log(Arr);// [45,33,23]
console.log(Arr[2]);//23
Array(Arr);
console.log(Arr);//[45, 33, 10]
console.log(Arr[2]);//10
