// https://leetcode.com/problems/all-paths-from-source-to-target/

const allPathsSourceTarget = (graph) => {
    const res = [];

    findRoutes([0], 0, graph, res);

    return res;
}

function findRoutes(temp, route, graph, res) {
    if (route === graph.length - 1) {
        res.push(temp.slice(0));
        return;
    }

    for (let i = 0; i < graph[route].length; i++) {
        let currRoute = graph[route][i];
        temp.push(currRoute);
        findRoutes(temp, currRoute, graph, res);
        temp.pop();
    }
}

// console.log(findRoute([0], [1, 2], { 0: [1, 2], 1: [3], 2: [3]}, 3))
const test1 = [[1, 2], [3], [3], []];

console.log(allPathsSourceTarget(test1))
