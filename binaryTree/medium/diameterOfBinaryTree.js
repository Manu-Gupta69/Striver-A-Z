//Diameter of Binary Tree
let diameter = 0;
function diameter(node, diameter) {
  if (node == null) return 0;

  let left = diameter(node.left);
  let right = diameter(node.right);

  diameter = Math.max(diameter, left + right);

  return 1 + Math.max(left, right);
}
