//for

for(let i=0; i<=10; i++){
    const element = i;
    if(element == 5){
       // console.log("5 is the best number")
    }
    //console.log(element)
}


for(let i =0; i<=10; i++){
    //console.log(`Outer loop value: ${i}`)
    for(let j =0; j<=10; j++){
//console.log(`inner loo value: ${j} and inner loop ${i}`)
//console.log(i + '*' + j + ' = ' +i*j);
    }
}


//let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
//for(let i =0; i<myArray.length; i++){
    //const element = myArray[i];
    //console.log(element);
//}



for(let i = 0; i<=20; i++){
    if(i===5){
       // console.log(`detected 5`)
        //break;
        continue;
    }
   // console.log(`value of i is: ${i}`)
}


// ++++++++++ while loop ++++++++++

let i =0;
while(i<=10){
    //console.log(`value of index is ${i}`)
    i = i+2
}

//loops in array

let myArray = ["flash", "batman", "superman"]
let arr =0;
while(arr<myArray.length){
    console.log(`value is: ${myArray[arr]}`);
    arr = arr+1
}
