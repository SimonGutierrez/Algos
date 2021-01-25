// https://leetcode.com/problems/course-schedule/

let visiting;   // is being explored
let visited;  // is already explored
let graph;

const canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();

    for (let [visit, preReq] of prerequisites){
        if (graph.has(visit)){
            let edges = graph.get(visit);
            edges.push(preReq);
            graph.set(visit, edges);
        } else {
            graph.set(visit, [preReq]);
        }
    }

    for (const [v, e] of graph){
        if (DFS(v)){
            return false; //if cyclic it will not finish so it is false
        }
    }

    return true;
}

const DFS = function(v){
    visiting.add(v);
    let edges = graph.get(v);   // get all the edges to explore

    if (edges){
        //console.log(edges)
       for (let e of edges){
            if (visited.has(e)){ //skip if it is explored already
                continue;
            }

            if (visiting.has(e)){ //found e is being explored
                return true;
            }

            if (DFS(e)){ // DFS deeper if this e is cyclic
                return true;
            }
        }
    }

    visiting.delete(v); // remove from visiting set when all decedant v are visited
    visited.add(v);
    return false;
}
