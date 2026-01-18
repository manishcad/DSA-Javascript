let prices=[7,1,5,3,6,4]

function slove(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        let first=arr[i]
        for(let j=i+1;j<arr.length;j++){
            let val=arr[j]-first
            max=Math.max(max,val)
        }
    }
    return max
}

console.log(slove(prices))