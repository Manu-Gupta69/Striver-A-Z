//Create a bst from preorder

function bstPreorder(arr) {
  let idx = 0;
  function build(upperBound) {
    if (idx >= arr.length || arr[idx] > upperBound) return null;

    let root = new TreeNode(arr[idx++]);

    root.left = build(root.val);
    root.right = build(upperBound);
    return root;
  }
  return build(Number.MAX_SAFE_INTEGER);
}
bstPreorder(preorder);
