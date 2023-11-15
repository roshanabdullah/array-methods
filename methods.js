// Array Methods

// Symbol Iterator method

const arr = ["a", "b", "c"]

const i = arr[Symbol.iterator]()

for(const alphabet of i) {
    console.log('Symbol Iterator Method: ', alphabet)
}
//Symbol Iterator Method:  a
//Symbol Iterator Method:  b
// Iterator Method:  c

//At array method

const returnSingle = arr.at(0)
console.log('At method: ', returnSingle)

//At method:  a

// concat method
const arr1 = ["a", "b", "c"]
const arr2 = ["d"]
const newArr = arr1.concat(arr2)
console.log(newArr)

//[ 'a', 'b', 'c', 'd' ]


//toString
const arrString = ["Hello", "World"]
const newString = arrString.toString()
console.log(newString)


//unshift
const n1 = [1, 2, 3]
n1.unshift(5, 4)
console.log(n1)

//[ 5, 4, 1, 2, 3 ]

// reverse
const n2 = [1, 2, 3]
n2.reverse()
console.log(n2)

///[ 3, 2, 1 ]

//filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length < 6)
console.log(result)

//[ 'spray', 'elite' ]

// find

//returns first element that satisfies the condition
const findNumbers = [2, 4, 3, 5]
const findNumberResult = findNumbers.find((number) => number % 2 === 0)
console.log(findNumberResult)

// 2

// shift 
// removes the first element
const shiftElement = [1, 2, 3]
const shiftResult = shiftElement.shift()
console.log(shiftElement)

/// [2, 3]

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const slicedAnimals = animals.slice(2, 3)
console.log(slicedAnimals)

// [ 'camel' ]

// some
// tests wether one elements passes the test
const someNumbers = [1, 2 ,3]
const even = (element) => element % 2 === 0 // testing even number
const someResult = someNumbers.some(even)
console.log(someResult)

// true

/// splice

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, "Feb") // at index 1, with 0 replacement add Feb
console.log(months)
// [ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, "July") // at index 4 replace June with July
console.log(months) 
// [ 'Jan', 'Feb', 'March', 'April', 'July' ]


// reduce
const reduceArray = [1, 2, 3 , 4]
const initialValue = 5
const sumWithInitial = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

// 5 + 1 + 2 + 3 + 4
console.log(sumWithInitial)
// 15


// reduce right
const reducedRightArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const reducedRight = reducedRightArray.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))

console.log(reducedRight)

// [ 4, 5, 2, 3, 0, 1 ]

// map 
const arrayForMapping = [1, 2, 3]
const newArrayForMapping = arrayForMapping.map((x) => x * 2)
console.log(newArrayForMapping)

// [ 2, 4, 6 ]

// join 
const joinArray = ["Apple", "Orange", "Grapes"]
const newJoinArray = joinArray.join('')
const dashedJoinedArray = joinArray.join('-')
console.log(newJoinArray)
console.log(dashedJoinedArray)

// AppleOrangeGrapes
// Apple-Orange-Grapes

// isArray ( determined if its an array of numbers )
const isArray1 = [1, 2, 3]
const emptyArray = '[]'
console.log(Array.isArray(isArray1))
console.log(Array.isArray(emptyArray))

// true
// false

// forEach
const forEachArray = [1, 2, 3]
forEachArray.forEach((number) => console.log(number))
// runs for each once
// 1
// 2
// 3

// indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'))

// 1

// flat 
// flattens the array
const flattenArray = [0, 1, 2, [3, 4]];

console.log(flattenArray.flat());
// [ 0, 1, 2, 3, 4 ]

// includes
const includedArray = [1, 2, 3];

console.log(includedArray.includes(2));
