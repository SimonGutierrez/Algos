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
        } else {
            array.push(this.name);
        }
      }
      return array;
    }
  }
