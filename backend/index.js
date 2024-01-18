const express= require ("express");
const { readNode } = require("./utils");
const { createNode } = require("./utils");
const PORT=8080

const app= express();

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.get("/products", (req, res)=>{
    const products=readNode()
    res.send(products)
})

app.post("/products", (req, res)=>{
    const product=req.body;
    createNode();

    res.send(201).send("Succesfully created")
})

app.put("/products/:id", (req, res)=>{
    const id=req.params.is;

    const updateNode=req.body;

    updateNode(id, updateNode)

    res.send("Successfully updated")
})
app.listen(PORT, ()=>{
    console.log("Application running at http://localhost:" + PORT);
})