export function djikstras (grid, startNode, targetNode){
    const visitedNodesInOrder = [];
    if (!startNode || !targetNode || startNode === targetNode){
        return false;
    }
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while(!!unvisitedNodes.length) {

        sortByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();

        if (closestNode.status === "wall") {
            continue;
        }
        
        if (closestNode.distance === Infinity){
            return visitedNodesInOrder;
        }

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if (closestNode === finishNode){ 
            return visitedNodesInOrder;
        }

        updateUnvisitedNeighbors(closestNode, grid);
      }
}

function getAllNodes(grid){

}