const countTotalSalary = function (employees) {
  const salaryValues = Object.values(employees);
  let total = 0;


  //первый вариант решения
  
 /*  for (let i = 0; i < salaryValues.length; i += 1) {
    total += salaryValues[i];
  };
  return total; */


//второй вариант
  
  for (const value of salaryValues) {
    total += value;
  };
   return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400