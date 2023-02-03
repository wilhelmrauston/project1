class Node {
    constructor(id, status) {
        this.id = id;
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
