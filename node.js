class Node {
    constructor(id, status) {
        this.id = id;
        this.boxX = 0;
        this.boxY = 0;
        this.boxZ = 0;


        this.status = status;
        this.weight = 0;

        this.path = null;
        this.previousNode = null;

        this.direction = null;

        this.distance = Infinity;
        this.previousDistance = null;
        this.totalDistance = Infinity;



    }
}

export { Node };