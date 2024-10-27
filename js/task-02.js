// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

const makeProduct = (name, price, callback) => {
  const product = {
    name,
    price,
    id: Math.random(),
  };
  callback(product);
};

const showProduct = (product) => {
  console.log(product);
};

makeProduct("apple", 100, showProduct);
