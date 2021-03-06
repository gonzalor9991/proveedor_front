import axios from 'axios';

const URL = 'https://proveedor-api.herokuapp.com/api/v1/stock';
//const URL = 'http://127.0.0.1:8000/api/v1/stock';

const index = async () => {
  return await axios.get(`${URL}/products`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

const store = async (product) => {
  let price = new Intl.NumberFormat().format(product.price);
  let body = {
    "name": `${product.name}`,
    "slug": `p-${product.name}`,
    "description": "Producto enviado desde Proveedor",
    "price": price,
    "quantity": product.count,
    "subcategory_id": "5"
  }
  return axios.post(`${URL}/products`,body)
    .then(res => res)
    .catch(err => err)
}



export default {
  index,
  store
}
