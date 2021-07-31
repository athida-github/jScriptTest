/**Q5. Write a JavaScript function to find the difference of two arrays.
Sample Data
Input:
arr1=[1, 2, 3]; arr2=[100, 2, 1, 10]
Output:
[3, 100, 10] */



const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const diff = (arrFirst, arrSecond) => {
    const result = [];
    for(let i = 0; i < arrFirst.length; i++){
       if(arrSecond.indexOf(arrFirst[i]) === -1){
        result.push(arrFirst[i]);
       }
    };
    for(let j = 0; j < arrSecond.length; j++){
       if(arrFirst.indexOf(arrSecond[j]) === -1){
        result.push(arrSecond[j]);
       };
    };
    return result;
 };
 console.log(diff(arr1, arr2));