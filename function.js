function getFirstElement (arr){
    //ide írd kódod
    for (let i = 0; i < arr.length; i++){
        return arr[i];
    }
}
    const numbers = [1, 2, 3];
    const words = ["apple", "banana", "cherry"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);