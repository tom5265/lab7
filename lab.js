/**
 * README - LAB 6
 * Each function's use is described below.
 * Manipulate the arrays and objects below to achieve the desired results.
 * ONLY manipulate the array and object within each function
 * */
//DO NOT ALTER THESE VARIABLES
var arr = [25, 54, 36, 76, 8],
    copyArr = [25, 54, 36, 76, 8],
    nestArr = [[25, 54], [36, 76, 8]],
    obj = {
        one: 25,
        two: 54,
        three: 36,
        four: 76,
        five: 8
    },
    copyObj = {
        one: 25,
        two: 54,
        three: 36,
        four: 76,
        five: 8
    },
    accumulator = 0;
//
/**
 * write iterator function here--this iterator function will be passed into the reduce function
 * Objective: iterator function should take in an array and an accumulator, and then it should sum
 * up each item in the array and return the total value as the accumulator
 */
function iterator(item, accumulator) {
    accumulator += item;
    return accumulator;
}
var lab = {
    //Array functions
    /**
     * the identity method should return the argument that is passed in
     * Objective: return the passed in array
     */
    identity: function (arg) {
        return arg;
    },
    /**
     * the foreach method should iterate over the array and perform a function on all of the
     * array items
     * Objective: multiply each number in the array by 2 and return the modified array
     */
    foreach: function (arg) {
        for (var i = 0; i < arg.length; i++) {
            arg[i] = arg[i] * 2;
        }
        return arg;
    },
    /**
     * the map method should iterate over the array and perform a function on all the array items
     * and then return a new array with the modified values
     * Objective: multiple each number in the array by 2 and return the new array
     */
    map: function (arg) {
        var results = [];
        for (var i = 0; i < arg.length; i++) {
            results.push(arg[i] * 2);
        }
        return results;
    },
    /**
     * the filter method should iterate over the array and perform a test on each value in the array
     * and then return an array of only the values that pass the test
     * Objective: return array of values that are > min
     */
    filter: function (arg, min) {
        var results = [];
        for (var i = 0; i < arg.length; i++) {
            if (arg[i] > min) {
                results.push(arg[i]);
            }
        }
        return results;
    },
    /**
     * the concatAll method should take in a nested array and then return a new array that has been flattened
     * this means the array does not contain any items within it that themselves an array
     */
    concatAll: function (arg) {
        var results = [];
        arg.forEach(function (subArray) {
            subArray.forEach(function (item) {
                results.push(item);
            });
        });
        return results;
    },
    /**
     * the reduce method should take in an array, an iterator function (created above), and an accumulator--for our
     * purposes the accumulator is set at 0.
     * the iterator function will be how the array is reduced i.e. all the items in the array are added together,
     * multipled, concatenated, etc
     * Objective: return the sum of all items in the array
     */
    reduce: function (list, iterator, accumulator) {
        for (var i = 0; i < list.length; i++) {
            accumulator = iterator(list[i], accumulator);
        }
        return accumulator;
    
    
},

    //Object functions
    /**
     * the hasownproperty method should take in an object and the property you want to check for
     * the function will iterate over the properties of the object and check whether the 'propertyChecked'
     * property is existent on the object
     * Objective: iterate over the object and return true if the property: 'propertyChecked' is on the object
     */
    hasOwnProperty: function (arg, propertyChecked) {
        for (property in arg) {
            if (property === propertyChecked) {
                return true;
            }
        }
        return false;
    },
    /**
     *the objkeys method should take in an object, iterate over the properties, and return an array
     *of the properties
     */
    objKeys: function (arg) {
        var results = [];
        for (property in arg) {
            results.push(property);
        }
        return results;
    },
    /**
     * the forinobj method should take in an object, iterate over it, and multiply all the values
     * in the object by 2, and then return the modified obj
     */
    forInObj: function (arg) {
        for (property in arg) {
            arg[property] = arg[property] * 2;
        }
        return arg;
    },
    /**
     * the remove method should take in an obj and a min number. It should iterate over the object
     * and return only values that pass the test.
     * Objective: iterate over arg and return, in a new object, only the property values that are
     * greater than min
     */
    remove: function (arg, min) {
        var results = {};
        for (property in arg) {
            if (arg[property] > min) {
                results[property] = arg[property];
            }
        }
        return results;
    }
}


//FOR TESTING PURPOSES, DO NOT CHANGE
function test() {
    var correctCount = 0;
    (function () {
        var result = lab.identity(arr);
        if (result === arr) {
            console.log('Identity Function: Correct');
            correctCount++;
        } else {
            console.log('Identity Function: Incorrect');
        }
    })();
    (function () {
        var solution = [50, 108, 72, 152, 16];
        var result = lab.foreach(copyArr);
        var resultValue = (function () {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== solution[i]) {
                    return false;
                }
                return true;
            }
        })();
        if (resultValue) {
            console.log('ForEach Function: Correct');
            correctCount++;
        } else {
            console.log('ForEach Function: Incorrect');
        }
    })();
    (function () {
        var solution = [50, 108, 72, 152, 16];
        var result = lab.map(arr);
        var resultValue = (function () {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== solution[i]) {
                    return false;
                }
                return true;
            }
        })();
        if (resultValue) {
            console.log('Map Function: Correct');
            correctCount++;
        } else {
            console.log('Map Function: Incorrect');
        }
    })();
    (function () {
        var solution = [54, 36, 76];
        var result = lab.filter(arr, 30);
        var resultValue = (function () {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== solution[i]) {
                    return false;
                }
                return true;
            }
        })();
        if (resultValue) {
            console.log('Filter Function: Correct');
            correctCount++;
        } else {
            console.log('Filter Function: Incorrect');
        }
    })();
    (function () {
        var solution = [25, 54, 36, 76, 8];
        var result = lab.concatAll(nestArr);
        var resultValue = (function () {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== solution[i]) {
                    return false;
                }
                return true;
            }
        })();
        if (resultValue) {
            console.log('ConcatAll Function: Correct');
            correctCount++;
        } else {
            console.log('ConcatAll Function: Incorrect');
        }
    })();
    (function () {
        var solution = 199;
        var result = lab.reduce(arr, iterator, accumulator);
        if (result === solution) {
            console.log('Reduce Function: Correct');
            correctCount++;
        } else {
            console.log('Reduce Function: Incorrect');
        }
    })();
    (function () {
        var result = lab.hasOwnProperty(obj, 'three');
        if (result) {
            console.log('HasOwnProperty Function: Correct');
            correctCount++;
        } else {
            console.log('HasOwnProperty Function: Incorrect');
        }
    })();
    (function () {
        var solution = ['one', 'two', 'three', 'four', 'five'];
        var result = lab.objKeys(obj);
        var resultValue = (function () {
            for (var i = 0; i < result.length; i++) {
                if (result[i] !== solution[i]) {
                    return false;
                }
                return true;
            }
        })();
        if (resultValue) {
            console.log('ObjKeys Function: Correct');
            correctCount++;
        } else {
            console.log('ObjKeys Function: InCorrect');
        }
    })();
    (function () {
        var solution = {
            one: 50,
            two: 108,
            three: 72,
            four: 152,
            five: 16
        }
        var result = lab.forInObj(copyObj);
        if (JSON.stringify(solution) === JSON.stringify(result)) {
            console.log('ForInObj Function: Correct');
            correctCount++;
        } else {
            console.log('ForInObj Function: InCorrect');
        }
    })();
    (function () {
        var solution = {
            two: 54,
            three: 36,
            four: 76
        }
        var result = lab.remove(obj, 30);
        if (JSON.stringify(solution) === JSON.stringify(result)) {
            console.log('Remove Function: Correct');
            correctCount++;
        } else {
            console.log('Remove Function: Incorrect');
        }
    })();
    console.log('# of test\s complete: ' + correctCount + '/10');
}



