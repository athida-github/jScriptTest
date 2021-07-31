/**
 * Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.
Sample Data
Input:
Array: [NaN, 0, 15, false, -22, '',undefined, 47, null,94]
Output:
[15, -22, 47, 94]
 */

const arrayList = [NaN, 0, 15, false, -22, '',undefined, 47, null,94];
const arraryResult = [];

for(let i= 0; i< arrayList.length; i++){

    if(Number.isInteger(arrayList[i]) == true && arrayList[i]!=0){
        
       console.log(arrayList[i]);       
        
    }
     
} 

