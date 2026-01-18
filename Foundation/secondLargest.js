let arr=[4,5,2,8,1]
let largest= -Infinity
let secondLargest= -Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest=largest
        largest=arr[i]
    }
    else if(arr[i]<largest && arr[i]>secondLargest){
        secondLargest=arr[i]
    }
}
console.log(secondLargest)