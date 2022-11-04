'use strict';

const Graph = require('./Graph.js');

let graph = new Graph();

let vertexA = graph.addVertex('A');
let vertexB = graph.addVertex('B');

graph.addEdge(vertexA, vertexB);

console.log(graph.adjacencies);
