/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		let sum = 0;
		if (this.root === null) return 0;
		function dive(node) {
			if (!node) return 1;
			sum += node.val;
			if (node.children) {
				for (let child of node.children) {
					dive(child);
				}
			}
			return sum;
		}
		return dive(this.root);
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		let sum = 0;
		if (this.root === null) return 0;
		function dive(node) {
			if (!node) return 0;
			if (node.val % 2 === 0) sum++;
			if (node.children) {
				for (let child of node.children) {
					dive(child);
				}
			}
			return sum;
		}
		return dive(this.root);
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound) {
		let sum = 0;
		if (this.root === null) return 0;
		function dive(node) {
			if (!node) return 1;
			if (node.val > lowerBound) sum++;
			if (node.children) {
				for (let child of node.children) {
					dive(child);
				}
			}
			return sum;
		}
		return dive(this.root);
	}
}

module.exports = { Tree, TreeNode };
