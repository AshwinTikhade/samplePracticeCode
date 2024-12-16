let arr = [1, 2 , 5, 3]    // Find missing number in array

function findMissingInArray() {
    arr.sort((a,b) => (a-b))
    console.log(arr)
    let missingNum;
    for(let i=0; i<arr.length; i++) {
        
        if(arr[i] !== i + 1) {
            return i + 1
        }
        
    }
    return null
}

console.log("Missing Number:-", findMissingInArray())

