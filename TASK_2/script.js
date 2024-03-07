// array of values


var numbers = [10, 20, 30, 40, 50];

// for loop
console.log("Printing array using for loop:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// do-while loop
console.log("\nPrinting array using do-while loop:");
var j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j < numbers.length);

// while loop
console.log("\nPrinting array using while loop:");
var k = 0;
while (k < numbers.length) {
    console.log(numbers[k]);
    k++;
}


try {
    // array of values
    var numbers = [10, 20, 30, 40, 50];

    // Variables for calculation
    var sum = 0;
    var largest = numbers[0];
    var smallest = numbers[0];

    // largest, and smallest
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (numbers[i] > largest) {
            largest = numbers[i];
        }

        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    // average
    var average = sum / numbers.length;

    console.log("\nSum:", sum);
    console.log("Average:", average);
    console.log("Largest Number:", largest);
    console.log("Smallest Number:", smallest);
} catch (error) {
    console.log("An error occurred:", error.message);
}
