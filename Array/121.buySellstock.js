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

function optimalWay(arr){
    let max=0
    let buy=0
    let sell=1
    while(sell<arr.length){
        if(arr[sell]<arr[buy]){
            buy=sell
        }
        let profit=arr[sell]-arr[buy]
        max=Math.max(max,profit)
        sell+=1
    }
    return max
}

console.log(slove(prices))
console.log(optimalWay(prices))