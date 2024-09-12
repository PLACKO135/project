function getFirstElement (arr){
    //ide írd kódod
    for (let i = 0; i < arr.length; i++){
        return arr[i];
    }
}
    if(arr.length === 0){
        return null;
    }
    else{
    return arr[0];
    }
    
    const numbers = [1, 2, 3];
    const words = ["apple", "banana", "cherry"];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);

    export function factorial(n) {
        //ide írd a kódod
        if (n === 0 || n === 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
    }
        
        console.log(`Factorial of 5: ${factorial(5)}`);
        