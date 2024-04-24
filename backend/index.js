const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

//i define route /authenticate for post method 
app.post("/authenticate", async (req,res) =>{
    const {username} = req.body;

    try {
        //i use axios to fetch chatengine.io
        const r = await axios.put(
            //put is for GET OR CREATE USER
            "https://api.chatengine.io/users/",
            {username: username,secret: username, first_name:username},
            {headers: {"private-key": "0799ec54-195e-4931-9b85-ab928bdf5c01"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
    return res.json({ username:username, secret:"sha123"})
})

app.listen(3001);