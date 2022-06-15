// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode = this.root) {
    if(!this.root){
      return this.root = new TreeNode(val)
    }
    if (val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = new TreeNode(val)
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if(!currentNode.right){
        currentNode.right = new TreeNode(val)
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }

  search(val, currentNode = this.root) {
    // if (!this.root){
    //   return false
    // }
    let curr = this.root

    while (curr){
      if (curr.val === val) return true
      else if (val > curr.val) curr = curr.right
      else curr = curr.left
    }
    return false
    // if (!currentNode) return false
    // if (currentNode.val === val) return true
    // if (val < currentNode.val) return this.search(val, currentNode.left)
    // if (val > currentNode.val) return this.search(val, currentNode.right)
  }


  preOrderTraversal(currentNode = this.root) {
    if(!currentNode) return 
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    if(!currentNode) return
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    if(!currentNode) return
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = []
    let curr = this.root
    queue.push(curr)
    while(queue.length){
      let value = queue.shift()
      if(value){
      console.log(value.val)
      queue.push(value.left)
      queue.push(value.right)
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(currentNode = this.root) {
    // let stack = []
    // let curr = this.root
    // stack.push(curr)
    // while(stack.length){
    //   let value = stack.pop()
    //   if(value){
    //   console.log(value.val)
    //   stack.push(value.left)
    //   stack.push(value.right)
    //   }
    // }
    if (!currentNode) return 
    console.log(currentNode.val)
    this.depthFirstTraversal(currentNode.right)
    this.depthFirstTraversal(currentNode.left)
}
}

module.exports = { BinarySearchTree, TreeNode };
