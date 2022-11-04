'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 1) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map(); // this is a built in HashTable
  }

  /**
   * Adds a new Vertex to the Graph Adjacency list
   * @param {any} value
   */
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }

  /**
   * Adds a new edge between vertices
   * @param {Vertex} startVertex
   * @param {Vertex} edgeVertex
   */
  addEdge(startVertex, endVertex) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex));
    }

  }

  /**
   * Returns a list of all neighboring Vertices of the input Vertex
   * @param {Vertex} Vertex
   */
  getNeighbors(Vertex) {

  }

  /**
   * Return all Nodes that are listed in the adjacency list
   */
  getNodes() {

  }

  /**
   * Returns the total number of nodes in the graph.
   */
  size() {

  }
}

module.exports = Graph;
