const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

function slove(grid){
    let count=0
    for(let i=0;i<grid.length;i++){
        let end=grid[i].length-1
        while(end>=0){
            if(grid[i][end]<0){
                count++
            }
            else{
                break
            }
            end--
        }
    }
    return count
}
function optimalWay(grid){
    debugger
    let m=grid.length
    let n=grid[0].length
    let row=0
    let col=n-1
    let count=0
    while(row<m && col >=0 ){
        if(grid[row][col]<0){
            count+=1
            col-=1
        }
        else{
            row++
        }
    }
    return count
}

console.log(slove(grid))
console.log(optimalWay(grid))