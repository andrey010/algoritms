function binarySearch(arr, item) {
    let low = 0
    let hight = arr.length -1;    

    while(low <= hight) { 
        
        const halfDistance = Math.floor(hight / 2)
        
        const mid = low + halfDistance;
        //console.log(mid)
        const guess = arr[mid];
        
        if(guess === item) {
            //console.log(mid)            
            return mid
        }
        if(guess > item) {
            hight = mid -1            
        }
        else {
            low = mid + 1            
        }        
    }

    return false
}

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var result = binarySearch(arr, 4)

console.log(result) //3


