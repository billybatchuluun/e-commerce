const fs= require("fs");

const readNode=()=>{
    const json=fs.readFileSync("products.json", "utf-8");

    const data =JSON.parse(json);
    return data;
};

const createNode=(node)=>{
    const json=fs.readFileSync("products.json", "utf-8");
    const previousData=JSON.parse(json);
    previousData.push(node);

    fs.writeFileSync("products.json", JSON.stringify(previousData));
}
const updateNode=(id,node)=>{
    const json=fs.readFileSync("products.json", "utf-8");
    const previousData=JSON.parse(json);

    const nodeToUpdate=previousData.find(element=>element.id ===id);

    previousData=previousData.filter(element=>element.id !== id);

    previousData.push({...nodeToUpdate, ...node});

    fs.writeFileSync("products.json", JSON.stringify(previousData));
}

module.exports={readNode, createNode, updateNode};
