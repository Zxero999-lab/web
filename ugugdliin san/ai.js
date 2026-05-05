function generateCustomers(count) {
  const customers = [];

  for (let i = 1; i <= count; i++) {
    customers.push({
      id: i,
      name: "Customer_" + i,
      pensionBalance: Math.floor(Math.random() * 10000000)
    });
  }

  return customers;
}

function bubbleSort(arr) {

  let n = arr.length;

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - i - 1; j++) {

      if (arr[j].pensionBalance < arr[j + 1].pensionBalance) {

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

      }

    }

  }

  return arr;
}

const customers = generateCustomers(10);

console.log("Before sorting:");
console.log(customers);

const sorted = bubbleSort(customers);

console.log("After sorting:");
console.log(sorted);