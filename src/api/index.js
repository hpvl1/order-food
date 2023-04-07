export async function getProducts() {
  const response = await fetch('https://dev-su.eda1.ru/test_task/products.php', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const products = await response.json();
  return products.products;
}