var numbers = [5,86,7,66,32,2342,11]

for (var i = 0; i < numbers.length; i++){
        for(var j = 0; j < numbers.length -1; j++)

if (numbers[j] > numbers[j + 1]) {
    var temp = numbers[j];         
    numbers[j] = numbers[j + 1];      
    numbers[j + 1] = temp }
}
console.log(numbers)
document.write(numbers)