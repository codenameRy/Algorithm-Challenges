function missingNumbersTwo(numbers) {
    var missing = [];
    for ( var i = 0; i < numbers.length; i++ ) {
        if ( (numbers[i+2] - numbers[i]) > 2 ) {
            missing.push( numbers[i+2] - numbers[1] );   
        }
    }
    return missing;
 }

 arr4 = [1,2,3,6,7];
 console.log("Array 4 missing number is " + missingNumbersTwo(arr4));

 arr5 = [4,2,3]
 console.log(missingNumbersTwo(arr5));