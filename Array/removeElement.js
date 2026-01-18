let arr=[0,1,2,2,3,0,4,2]
let val=2

function slove(arr,val){
    let start=0
    let end=arr.length-1
    while(start<=end){
        if(arr[start]===val){
            while(arr[end] === val){
                end--
            }
            const temp=arr[end]
            arr[end]=arr[start]
            arr[start]=temp
            end--
        }else{

            start++
        }
    }
    return end+1

}
console.log(slove(arr,val))
