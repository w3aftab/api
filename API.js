const API = {
  products: "https://w3aftab.github.io/api/products/products.json",
  products2: "https://w3aftab.github.io/json-api/products.json",
  users: "https://w3aftab.github.io/json-api/users.json",
};

async function getAPI(api, displayData) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    displayData(data);
  } catch (err) {
    document.body.innerHTML = err.message;
    console.log(err.message);
  }
}

export { API, getAPI };

/** 
 fetch("https://w3aftab.github.io/api/products/products.json")
	 .then((res) => res.json())
	 .then((data) => displayData(data))
	 .catch((err) => err.message);
 */
