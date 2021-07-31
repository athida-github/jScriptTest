/**
 * Q4. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
Sample Data
Input 1:
arr1 = [1,2,3];
arr2 = [3,4,5];
Output 1:
True
Input 2:
arr1 = [1,2,3];
arr2 = [4,5,6];
Output 2:
False

 */
const arr1 = [1,2,3];
const arr2 = [3,4,5];
//const arr2 = [4,5,6];
let result;

for(let i=0; i<arr1.length; i++){

    for(let j=0; j<arr2.length; j++){

        if(arr1[i]==arr2[j]){

            result = true;
        }
        else{result = false;}
    }
}console.log(result);