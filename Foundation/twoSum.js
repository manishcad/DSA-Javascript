class TwoSum{
    constructor(arr,value){
        this.arr=arr
        this.value=value
    }

    bruteForce(){
        
        for(let i=0;i<this.arr.length;i++){
            for(let j=i+1;j<this.arr.length;j++){
                if(this.arr[i]+this.arr[j]===this.value){
                    return [i,j]
                }
            }
        }
        return -1

    }
    optimalWay(){
        
        let set=new Map()
        for(let i=0;i<this.arr.length;i++){
            let target=this.value-this.arr[i]
            if(set.has(target)){
                return [set.get(target),i]
            }

            set.set(this.arr[i],i)
            
        }
        return -1
    }
    sortedWay(){
        debugger
        this.arr.sort((a,b)=>a-b)
        console.log(this.arr)
        let start=0
        let end=this.arr.length-1
        while(start<end){
            let target=this.arr[start]+this.arr[end]
            if(target===this.value){
                return [start,end]
            }
            else if(target>this.value){
                end--
            }
            else{
                start++
            }
        }
        return -1
    }

}
let arr=[7,5,4,3,2]
let value=6
let twoSum=new TwoSum(arr,value)

console.log(twoSum.bruteForce())
console.log(twoSum.optimalWay())
console.log(twoSum.sortedWay())