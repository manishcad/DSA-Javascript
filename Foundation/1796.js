function slove(s){
    debugger
    let largest=-Infinity
    let secondLargest=-Infinity
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            
            if(Number(s[i])>largest){
                secondLargest=largest               
                largest=Number(s[i])
             

            }
            else if(Number(s[i])<largest && Number(s[i])>secondLargest){
                secondLargest=Number(s[i])
            }
        }
    }
    if(secondLargest===-Infinity){
        return -1
    }
    return secondLargest
}


const s="dfa928afd"
console.log(slove(s))