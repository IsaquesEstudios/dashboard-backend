import axios from "axios";

const MercadoPagoApi = axios.create({
  baseURL: "https://api.mercadopago.com",
  headers: {
    'Authorization': "Bearer APP_USR-6224878114061378-071003-98d48a2185ebf86cf3f9bd60a4a2fc02-513614546",
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
})


export { MercadoPagoApi }