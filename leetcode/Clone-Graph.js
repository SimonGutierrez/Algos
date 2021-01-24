// https://leetcode.com/problems/clone-graph/

class Node  {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

const cloneGraph = (graph) => {
    let memo = {};

    function traverse(node) {
        // if the node doesn't exist return the node
        if (!node) return node;
        // if we havent seen the node yet add it to our memo and traverse its neighbors doing the same check
        if (!memo[node.val]) {
            memo[node.val] = new Node(node.val);
            // recursively call our funct on each neighbor
            memo[node.val].neighbors = node.neighbors.map(traverse);
        }

        return memo[node.val];
    }

    return traverse(graph);
};
