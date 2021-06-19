let number = function(num){
  if(typeof num==="number"){
    return num*3;
  }else if(typeof num === "string"){
    return "ARRR!";
  }else{
    return num;
  }
}

console.log(number(3));
console.log(number("tea"));
console.log(number(true));
