const arr=[0,0,1,1,1,2,2,3,3,4]

function slove(arr){
    //console.log(arr.length)
    if(arr.length===0) return arr

    let k=1
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]===arr[i]){
            continue
        }
        arr[k]=arr[i]
        k++
    }
    return arr


}

console.log(slove(arr))