// Print the shortest path (in terms of weight) to the destination from the src node
let parent = [];
let distanceArr = [];
let minHeap = [];

function extendedDijkstra(src) {
  let answer = [];
  minHeap.add({ distance: 0, node: src });
  distance[src] = 0;

  while (minHeap.length) {
    let { distance, node } = minHeap.shift();
    for (let { neighbour, weight } of graph[node]) {
      if (distance + weight < distanceArr[neighbour]) {
        distanceArr[neighbour] = distance + weight;
        minHeap.add({ distance: distanceArr[neighbour], node: neighbour });
        parent[neighbour] = node;
      }
    }
  }
  let node = destination;
  while (node !== parent[node]) {
    answer.push(node);
    node = parent[node];
  }
  answer.push(src);
  return answer.reverse();
}
