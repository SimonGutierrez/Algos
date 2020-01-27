class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      return this;
    }
  }

  const test = new BST(100)
    .insert(5)
    .insert(15)
    .insert(5)
    .insert(2)
    .insert(1)
    .insert(22)
    .insert(1)
    .insert(1)
    .insert(3)
    .insert(1)
    .insert(1)
    .insert(502)
    .insert(55000)
    .insert(204)
    .insert(205)
    .insert(207)
    .insert(206)
    .insert(208)
    .insert(203)
    .insert(-51)
    .insert(-403)
    .insert(1001)
    .insert(57)
    .insert(60)
    .insert(4500);


function helper(tree, target, closest = Infinity) {
	if (!tree) {
		return closest;
    }

	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}

	 if (tree.value > target) {
			return helper(tree.left, target, closest);
		} else if (tree.value < target) {
			return helper(tree.right, target, closest);
		} else {
			return closest;
		}
}

function findClosestValueInBst(tree, target) {
	return helper(tree, target, Infinity)
}

console.log(findClosestValueInBst(test, 100)) // 100;
console.log(findClosestValueInBst(test, -70)) // -50;
console.log(findClosestValueInBst(test, 4501)) // 4500;
console.log(findClosestValueInBst(test, 2000)) // 1001;
console.log(findClosestValueInBst(test, 6)) // 5;

