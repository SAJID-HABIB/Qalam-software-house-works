import axios from "axios";
const contactApi = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json"
  },
});

const createContact = async (contactData) => {
    console.log("DATA SENDING TO BACKEND:", contactData);
  const response = await contactApi.post("/contact",contactData);
  return response.data
}

export default createContact;