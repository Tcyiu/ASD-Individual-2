// ! Custom class
class MyClass {
  constructor(id, name, age, salary, isActive) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.salary = salary;
      this.isActive = isActive;
  }
}

// ! Random number between args generator
const getRandomNumber = (arg1, arg2) => {
  if (arg1 > arg2) {
      [arg1, arg2] = [arg2, arg1];
  }
  return Math.floor(Math.random() * (arg2 - arg1 + 1)) + arg1;
}

// ! Unique id generator
const getUniqueId = () => {
  return Math.random().toString().substr(2, 3);
}

// ! Array with 50 instances of MyClass
const objectsArray = [];
for (let i = 0; i < 50; i++) {
    const obj = new MyClass(getUniqueId(), `Name ${i}`, getRandomNumber(18, 65), getRandomNumber(500, 5000), i % 2 === 0);
    objectsArray.push(obj);
}

const bubbleSort = (arr) => {
  const temp = [...arr];
  const n = temp.length;
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          comparisons++;
          if (temp[j].id > temp[j + 1].id) {
              swaps++;
              // ! Swap elements
              [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
          }
      }
  }

  return { comparisons, swaps };
}

// ? Theoretical complexity estimation: O(n^2)
// ? Number of comparisons: In the worst and average case - O(n^2), in the best case - O(n)
// ? Number of swaps: In the worst and average case - O(n^2), in the best case - 0
// ? Execution time: Compared to other algorithms, bubble sort is inefficient. The execution time is high, especially on large datasets.

console.group('Bubble sort:')
console.time('Time')
console.log('Result:', bubbleSort(objectsArray));
console.timeEnd('Time')
console.groupEnd();

const insertionSort = (arr) => {
  const temp = [...arr];
  const n = temp.length;
  let comparisons = 0;
  let swaps = 0;

  for (let i = 1; i < n; i++) {
    const key = temp[i];
    let j = i - 1;
    
    comparisons++;
    while (j >= 0 && temp[j].id > key.id) {
        comparisons++;
        swaps++;
        temp[j + 1] = temp[j];
        j = j - 1;
    }
    
    temp[j + 1] = key;
  }

  return { comparisons, swaps };
}

// ? Theoretical complexity estimation: O(n^2) in the worst case, O(n) in the best case
// ? Number of comparisons: In the worst and average case - O(n^2), in the best case - O(n)
// ? Number of swaps: In the worst and average case - O(n^2), in the best case - 0
// ? Execution time: Efficient for small arrays.

console.group('Insertion sort:')
console.time('Time')
console.log('Result:', insertionSort(objectsArray));
console.timeEnd('Time')
console.groupEnd();

function selectionSort(arr) {
  const temp = [...arr];
  const n = temp.length;
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
        comparisons++;
        if (temp[j].id < temp[minIndex].id) {
            minIndex = j;
        }
    }

    swaps++;
    [temp[i], temp[minIndex]] = [temp[minIndex], temp[i]];
  }
  return { comparisons, swaps };
}

// ? Theoretical complexity estimation: O(n^2)
// ? Number of comparisons: Always O(n^2)
// ? Number of swaps: Always O(n)
// ? Execution time: Inefficient for large datasets.

console.group('Selection sort:')
console.time('Time')
console.log('Result:', selectionSort(objectsArray));
console.timeEnd('Time')
console.groupEnd();