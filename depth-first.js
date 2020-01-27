class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    depthFirstSearch(array) {
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        if (child.children) {
            child.depthFirstSearch(array);
        }
      }

      return array;
    }
  }

  // Time: O(v + e) - depending on the number of the verticies and edges a tree has
  // Space: O(v) - the number of verticies bc each verticie will call the function again
