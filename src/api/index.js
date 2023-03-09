let apiUrl;
const headers = {
  // 'Content-Type': 'application/json',
  // 'Accept': 'application/json',
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

// GET request
export const getData = async (url) => {
  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// POST request
export const postData = async (body) => {
  try {
    const response = await fetch(apiUrl, { method: 'POST', headers, body: JSON.stringify(body) });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// PUT request
export const putData = async (id, body) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// DELETE request
export const deleteData = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE', headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
