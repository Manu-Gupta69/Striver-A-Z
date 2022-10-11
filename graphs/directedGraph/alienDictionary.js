let arr = ["baa", "abcd", "abca", "cab", "cad"];
let k = 4;
let graph = {};

for (let i = 0; i < arr.length - 1; i++) {
  let s1 = arr[i];
  let s2 = arr[i + 1];
  for (let j = 0; j < s1.length; j++) {
    if (s1[j] !== s2[j]) {
      let parentNode = s1[j].charCodeAt(0) - "a".charCodeAt(0);
      let childNode = s2[j].charCodeAt(0) - "a".charCodeAt(0);
      if (!graph.hasOwnProperty(parentNode)) {
        graph[parentNode] = [];
      }
      if (!graph.hasOwnProperty(childNode)) {
        graph[childNode] = [];
      }
      graph[parentNode].push(childNode);
      break;
    }
  }
}
console.log(graph);
let topoStack = topoSort(Object.keys(graph)).map((item) => {
  return String.fromCharCode(97 + item);
});
console.log(topoStack);
function topoSort(graph1) {
  let allNodeIndegree = {};
  let q = [];
  let topoStack = [];

  for (let node = 0; node < graph1.length; node++) {
    if (!allNodeIndegree.hasOwnProperty(node)) {
      allNodeIndegree[node] = 0;
    }

    for (let neighbour of graph[node]) {
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
    topoStack.push(parseInt(node));
    for (let neighbour of graph[node]) {
      allNodeIndegree[neighbour] -= 1;
      if (allNodeIndegree[neighbour] == 0) {
        q.push(neighbour);
      }
    }
  }
  return topoStack;
}
