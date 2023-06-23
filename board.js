import { Node } from './node.js';
import { djikstras } from './algorithms/dijkstras.js';


class Board {
    constructor() {

        this.start = null;
        this.target = null;

        this.nodes = [];
        this.nodesAnimate = [];

        this.nodesPathAnimate = [];
        this.wallsAnimate = [];
    }
}



Board.prototype.initialize = function() {
    this.createGrid();
};

Board.prototype.createGrid = function() {
    let newGrid = document.getElementById("grid");
    let startIndex, targetIndex;
    
    for (var r = 0; r < 20; r++) {
        let currRow = document.createElement("tr");
        currRow.id = "row" + r;

        newGrid.appendChild(currRow);
        let rowW = document.getElementById("row" + r);

        for (var c = 0; c < 50; c++) {
            let block = document.createElement("td");
            block.id = r + "-" + c;

            if (r == 10 && c == 5) {
                block.className = "start";
                this.start = `${block.id}`;
                let startIndex = this.nodes.length - 1;
            } else if (r === 10 && c === 35) {
                block.className = "target";
                this.target = `${block.id}`;
                let targetIndex = this.nodes.length - 1;
            } else {
                block.className = "unvisited";
            }
            rowW.appendChild(block);
            let newNode = new Node(block.id, block.className);
            this.nodes[block.id] = newNode;


        }
    }
    console.log(this.nodes)

    djikstras(grid, this.nodes[startIndex], this.nodes[targetIndex]);
};

let grid = new Board();
grid.initialize();
