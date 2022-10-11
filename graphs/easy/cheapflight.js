//Cheapest flight with k stops

let graph = {
  0: [
    { neighbour: 1, weight: 5 },
    { neighbour: 3, weight: 2 },
  ],
  1: [
    { neighbour: 2, weight: 5 },
    { neighbour: 4, weight: 1 },
  ],
  3: [{ neighbour: 1, weight: 2 }],
  4: [{ neighbour: 2, weight: 1 }],
  2: [],
};

function cheapestFlight(k, src) {
  let q = [];
  let distanceArr = new Array(Object.keys(graph).length).fill(
    Number.MAX_SAFE_INTEGER
  );
  q.push({ node: src, distance: 0, stops: 0 });
  while (q.length) {
    let { node, distance, stops } = q.shift();

    if (stops > k) {
      continue;
    }

    for (let { weight, neighbour } of graph[node]) {
      if (weight + distance < distanceArr[neighbour] && stops <= k) {
        distanceArr[neighbour] = weight + distance;
        q.push({
          node: neighbour,
          distance: weight + distance,
          stops: stops + 1,
        });
      }
    }
    console.log(q);
  }
  return distanceArr;
}

console.log(cheapestFlight(2, 0));
