// Find Duplicate in Array
let arr = [5, 1, 2, 3, 2, 3, 5]

var duplicateArr = []
function findDupliacteInArray() {
    
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) {
                duplicateArr.push(arr[j])
            }
        }
    }
}
findDupliacteInArray()
console.log(duplicateArr);
