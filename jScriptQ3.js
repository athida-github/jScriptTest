/**
 * Q3. Write a JavaScript code to divide a given array of positive integers into two parts.
First element goes to first part, second element goes to second part, and third element
goes to first part and so on.
Now compute the sum of two parts and store into an array of size two.
Sample Data
Input:
Array: [1, 3, 6, 2, 5, 10]
Output:
[12, 15]
 * 
 */

const arrayList = [1, 3, 6, 2, 5, 10];
let firstGroup = 0;
let secondGroup = 0;
let arrResult=[];
for(let i = 0; i < arrayList.length; i++){
    
    if((i+2)%2 == 0){
        
         firstGroup = arrayList[i] + firstGroup;
        
    }
    else{
         secondGroup = arrayList[i] + secondGroup;
    }

} console.log(arrResult = [firstGroup, secondGroup]);
