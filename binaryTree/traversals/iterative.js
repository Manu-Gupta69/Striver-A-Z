// ITERATIVE Traversal PRE->IN->POST ORDER

// Class {
//   node : node
//   traversal : traversal -> 1 -> preOrder , 2 -> inOrder , 3 -> postOrder
//}

class NewNode {
  constructor(node, traversal) {
    this.node = node;
    this.traversal = traversal;
  }
}

function singleTraversal(root) {
  let stack = [];
  let preOrder = [];
  let inOrder = [];
  let postOrder = [];
  stack.push(new NewNode(root, 1));
  while (stack.length) {
    let newNode = stack[stack.length - 1];
    if (newNode.traversal == 1) {
      if (newNode.node.left) {
        stack.push(new NewNode(newNode.node.left, 1));
      }
      preOrder.push(newNode.node.val);
      newNode.traversal += 1;
    } else if (newNode.traversal == 2) {
      inOrder.push(newNode.node.val);
      if (newNode.node.right) {
        stack.push(new NewNode(newNode.node.right, 1));
      }
      newNode.traversal += 1;
    } else {
      postOrder.push(newNode.node.val);
      stack.pop();
    }
  }
  return { preOrder, inOrder, postOrder };
}
let { preOrder, inOrder, postOrder } = singleTraversal(root);
console.log(preOrder, inOrder, postOrder);
