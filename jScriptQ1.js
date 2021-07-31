/**
 * Q1. Write a JavaScript program to find the longest string from a given array.
Sample Data
Input:
Array: ['asdf', 'sd', 'something','right','position']
Output:
"Longest String in array : something "
 */

const arrayList = ['asdf', 'sd', 'something','right','position'];

for (let i = 0; i< arrayList.length; i++){
    
    for(let j= i+1; j< arrayList.length; j++){

        if( arrayList[i].length > arrayList[j].length){

            let temp = arrayList[i];
            arrayList[i] = arrayList[j];
            arrayList[j] = temp;
        }
    }
            
    }
    console.log("Longest String in array : "+arrayList[arrayList.length-1]);
