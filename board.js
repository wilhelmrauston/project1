import { Node } from './node.js';


class Board {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.start = null;
        this.target = null;

        this.boardArray = [];
        this.nodes = {};
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
    
    for (var r = 0; r < 20; r++) {
        let currRow = document.createElement("tr");
        currRow.id = "row" + r;

        newGrid.appendChild(currRow);
        let rowW = document.getElementById("row" + r);

        for (var c = 0; c < 50; c++) {
            let block = document.createElement("td");
            block.id = r + "-" + c;

            if (r == 0 && c == 0) {
                block.className = "start";
                this.start = `${block.id}`;
            } else if (r === 1 && c === 1) {
                block.className = "target";
                this.target = `${block.id}`;
            } else {
                block.className = "unvisited";
            }
            rowW.appendChild(block);
            let newNode = new Node(block.id, block.className);
            this.nodes[block.id] = newNode;
            console.log(newNode)

        }
    }
};

let newBoard = new Board();
newBoard.initialize();
