import express from "express"

const app = express()

const PORT = 8080

fetch('/api/login', {
  username, email
})

app.post((req, res) => {
  const {email, password} = req.body

  if (!email || !password) return;

  
})

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
}, PORT)