class RotateArray{
    constructor(arr,k){
        this.arr=arr
        this.k=k
    }
    solution(){
        this.rev(this.arr,0,k-1)
        this.rev(this.arr,k,this.arr.length-1)
        this.rev(this.arr,0,this.arr.length-1)
       //console.log(part1)
       
       return this.arr
    }
    rev(arr,start,end){
        
       
        while(start<end){
            let temp=arr[start]
            arr[start]=arr[end]
            arr[end]=temp
            start+=1
            end -=1
        }
        return arr

    }
}
const arr=[1,2,3,4,5]
const k=3
const rotateArray=new RotateArray(arr,k)
console.log(rotateArray.solution())