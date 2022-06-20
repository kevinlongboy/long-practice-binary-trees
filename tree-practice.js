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
  while (queue.length > 0) {
    let value = queue.shift()
    if (min > value.val) {
      min = value.val
    }
    if (value.left) {
      queue.push(value.left)
    }
    if (value.right) {
      queue.push(value.right)
    }

  }
  return min
}

function findMaxBT(rootNode) {
  let max = rootNode.val
  const queue = []
  queue.push(rootNode)
  while (queue.length > 0) {
    let value = queue.shift()
    if (max < value.val) {
      max = value.val
    }
    if (value.left) {
      queue.push(value.left)
    }
    if (value.right) {
      queue.push(value.right)
    }

  }
  return max
}

function getHeight(rootNode) {
  const queue = []
  queue.push(rootNode)
  let height = -1
  while (queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < lengtch; i++) {
      let value = queue.shift()
      if (value.left) {
        queue.push(value.left)
      }
      if (value.right) {
        queue.push(value.right)
      }
    }
    height++

  }
  return height
}

function countNodes(rootNode) {
  const queue = []
  queue.push(rootNode)
  let count = 1
  while (queue.length > 0) {
    let value = queue.shift()
    if (value.left) {
      queue.push(value.left)
      count++
    }
    if (value.right) {
      queue.push(value.right)
      count++
    }
  }
  return count
}

function balancedTree(rootNode) {

  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);

  // let minNodes = [1, 1, 2, ]
  // go through each level
  // check if that level has the minimum amount of nodes to qualify as balanced
  // if so, move to next level
  // if not, immediately return false
  // when there are no more levels return


  // let rightCount = 0;
  // let leftCount = 0;

  // let curLeft = rootNode;
  // let curRight = rootNode;

  // while (curLeft) {
  //   if (curLeft.left) {
  //     curLeft = curLeft.next;
  //     leftCount++;
  //   }
  // }

  // while (curRight) {
  //   if (curRight.right) {
  //     curRight = curRight.next;
  //     rightCount++;
  //   }
  // }

  // if ((rightCount - leftCount === 1 || 0) || (leftCount - rightCount === 1 || 0)) return true;
  // else return false
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null

  const stack = [rootNode]

  while(stack.length){
    const current = stack.pop()

      if(( current.left && current.left.val || current.right && current.right.val) === target){
        return current
      }

    if(current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)

  }
  return undefined
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
