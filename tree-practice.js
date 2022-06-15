const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode = this.root) {
  if (!rootNode.left) return rootNode.val;

  return findMinBST(rootNode.left)
}

function findMaxBST(rootNode) {
  if (!rootNode.right) return rootNode.val

  return findMaxBST(rootNode.right)
}

function findMinBT(rootNode) {
  let min = rootNode.val
  const queue = []
  queue.push(rootNode)
  while(queue.length > 0){
    let value = queue.shift()
    if (min > value.val){
      min = value.val
    }
    if(value.left){
    queue.push(value.left)
    }
    if(value.right){
    queue.push(value.right)
    }
    
  }
  return min
}

function findMaxBT(rootNode) {
  // Your code here
}

function getHeight(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function balancedTree(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
