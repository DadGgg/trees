import express from "express";
import Tree from "./Tree";

const app = express();

const x: Tree = new Tree(10, "green");
const y: Tree = new Tree(9, "green");
console.log(x, y);
