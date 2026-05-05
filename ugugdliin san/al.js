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

const customers = generateCustomers(100000);

// шалгахын тулд эхний 5 хэрэглэгчийг хэвлэнэ
console.log(customers.slice(0,100000));