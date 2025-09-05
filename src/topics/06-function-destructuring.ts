interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia 1A",
  price: 150,
};

const tablet: Product = {
  description: "S6 SAMSUNG",
  price: 550,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
//const tax = 0.15;

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Total", total);
console.log("Tax", tax);

export {};
