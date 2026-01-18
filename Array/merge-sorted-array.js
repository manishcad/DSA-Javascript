let nums1=[1,2,3,0,0,0]
let nums2=[2,5,6]
let m=3
let n=3

function slove(nums1,nums2,m,n){
    let k=nums1.length-1
    let i=m-1
    let j=n-1
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            k--
            i--

        }
        else{
            nums1[k]=nums2[j]
            k--
            j--
        }
    }
    while(j>=0){
        nums1[k]=nums2[j]
        k--
        j--
    }

    return nums1

}

console.log(slove(nums1,nums2,m,n))