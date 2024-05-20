// // Write a program that can find the length the total length of a string, use a function.
// function stringLength(str){
//     const str1=str.length;
//     return str1
// }
// console.log(stringLength('I am learning core javascript'))


 
// // Write a program that can covert a string, use a function.
// function convertString(str){
//     string2=str.toUpperCase();
//     return string2;
    
// }
// console.log(convertString('farah'))


// // Write a program that can print from 10 to 1 numbers.
// for(i=10; i>=1; i--){
//     console.log(i)
// }
// //Write a program that can print even numbers from 1 to 100
// let i;
// let y=100;
// for(i=0; i<=y; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// // Write a program that can sum an array elements . Array elements are (2, 5, 7, 8)

// function sumOfArray(b){
//     let sum=0;
//     for(let x of b)
//         sum+=x;
//     return sum
// }
// console.log(sumOfArray([2,5,7,8]))
// // // Split a string into an array of substrings based on a separator. Use a function.
// function stringSplit(str){
//     let str3=str.split('')
//     return str3
// }
// console.log(stringSplit("Today is tweenth of May"));
// // Replace a substring with another substring in a string. Use a function.

// function replaceString(str1, str2){
//     let strR="I am wearing blue";
//     let str4=strR.replace('blue', 'red')
//     return str4
// }
// console.log(replaceString('blue', 'red'))
// //Write a function to find the maximum number in an array.[3, 5, 7, 2, 8] 
// function findMax(arr){
//     let max=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max){
//         max=arr[i]
//     }
      
//     }
//     return max; 
// } console.log(findMax([3, 5, 7, 2, 8] ));
// // Write a function to reverse an array.[1, 2, 3, 4, 5]; 
// function reverseArray(arr){
//     let reverseArr=[];
//     for (let index =array.length-1; index >=0; index--) {
//        reverseArr.push(array[index]);

        
//     }
//     console.log(reverseArray([1, 2, 3, 4, 5]));
// }
//Write a function to find the sum of all elements in an array.[1, 2, 3, 4, 5]; 
function sumOfArray(array){
    let sum=0;
    for (let x of array){
        sum+=x
        
    }
    return sum
   
} console.log(sumOfArray([1, 2, 3, 4, 5]))