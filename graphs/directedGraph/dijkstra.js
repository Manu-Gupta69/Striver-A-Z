// Let suppose MIN HEAP exist as there's no prebuilt heap ds
let minHeap = [];
let distanceArr = [];

function dijkstra(src) {
  minHeap.add({ distance: 0, node: src.node });
  distanceArr[src.node] = 0;

  while (minHeap.length) {
    let { distance, node } = minHeap.shift();
    for (let { neighbour, weight } of node) {
      if (distance + weight < distanceArr[neighbour]) {
        distance[neighbour] = distance + weight;
        minHeap.add({ distance: distance[neighbour], node: neighbour });
      }
    }
  }
}
