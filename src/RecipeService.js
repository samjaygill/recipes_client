const baseURL = "https://server-sgar.fly.dev/api/recipes";

export const getRecipes = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getRecipe = (id) => {
  return fetch(`${baseURL}/${id}`).then((res) => res.json());
};

export const getKitchenTips = async () => {
  try {
    const response = await fetch('https://server-sgar.fly.dev/api/tips'); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching kitchen tips:', error);
    return [];
  }
};

export const getKitchenTip = async (id) => {
  try {
    const response = await fetch(`https://server-sgar.fly.dev/api/tips/${id}`); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching kitchen tips:', error);
    return [];
  }
};

export const getRecipesForCountry = (country) => {
  return fetch(`${baseURL}/country/${country}`).then((res) => res.json());
};

export const updateRecipe = (recipe) => {
  console.log("update recipe", recipe);
  let updatedRecipe = { ...recipe };
  delete updatedRecipe._id;

  return fetch(baseURL + "/" + recipe._id, {
    method: "PUT",
    body: JSON.stringify(updatedRecipe),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};


export const postRecipe = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type' : 'application/json'}
  })
  .then((res) => {
    return res.json()
  })
}

export const updateShoppingBag = (recipe) => {
  console.log("update recipe", recipe);
  let updatedShopBag = { ...recipe };
  delete updatedShopBag._id;

  return fetch(baseURL + "/" + recipe._id, {
    method: "PUT",
    body: JSON.stringify(updatedShopBag),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error updating shopping bag:", error);
    });
};
