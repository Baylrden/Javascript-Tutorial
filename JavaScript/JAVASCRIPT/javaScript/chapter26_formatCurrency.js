//toLocaleString() = returns a string with a language
//sensitive representation of this number

//number.toLocaleString(locale,{options});

//'locale' = specify that language(undefined=default)
//'options' = object with formatting options

let myNum = 1;

//myNum = myNum.toLocaleString("en-US",{style:"currency", currency: "USD"}); //US English



//myNum = myNum.toLocaleString(undefined,{style: "percent"});


myNum=myNum.toLocaleString(undefined,{style: "unit", unit: "celsius"});

console.log(myNum);