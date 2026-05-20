const {vdt} = require('./validator')

exports.multiply = (num1,num2)=>{
  if(vdt.isNumber(num1, num2)){
    return num1*num2;
  } else{
    const desc = {
      error:vdt.description.message, value: 
      vdt.description.returnValue
    }
    return desc
  }
};

exports.divide = (num1, num2)=>{
  return num1/num2;
};

exports.sum = (num1, num2)=>{
  if(num1 && num2 && typeof num1 !== "number" && typeof num2 !== "number"){
    const err = new Error("parameter must be a number")
    throw err
  }
  return num1+num2;
};

exports.substract = (num1, num2)=>{
  return num1-num2;
}

exports.modulo = (num1, num2)=>{
  return num1%num2;
};