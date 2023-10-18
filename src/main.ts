import express from "express";
import Tree from "./Tree";

const app = express();
app.listen(3000, () => {
    console.log("gotcha")
})
const x: Tree = new Tree(10, "green", "AK-47");
const y: Tree = new Tree(9, "green", "BBG");
const z: Tree = new Tree(11, "green", "JJ")
console.log(x, y, z);

app.get("/", (request, response) => {
    x.grow(3, 3);
    y.grow(7,4);
    z.grow(2500, 2500);
    response.send([x, y, z]);
})