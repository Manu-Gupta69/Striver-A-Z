//Kahn's algo for topo sort

function topoSort() {
  let allNodeIndegree = {};
  let q = [];
  let topoStack = [];

  for (let node = 0; node < graph.length; node++) {
    if (!allNodeIndegree.hasOwnProperty(node)) {
      allNodeIndegree[node] = 0;
    }
    for (let neighbour of node) {
      if (!allNodeIndegree.hasOwnProperty(neighbour))
        allNodeIndegree[neighbour] = 0;
      allNodeIndegree[neighbour] += 1;
    }
  }
  for (let node in allNodeIndegree) {
    if (allNodeIndegree[node] == 0) q.push(node);
  }

  while (q.length) {
    let node = q.shift();
    topoStack.push(node);
    for (let neighbour of graph[node]) {
      allNodeIndegree[neighbour] -= 1;
      if (allNodeIndegree[neighbour] == 0) {
        q.push(neighbour);
      }
    }
  }
  return topoStack;
}
