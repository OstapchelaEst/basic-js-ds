const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.tree = null;
   }
   root() {
      return this.tree;
   }

   add(data) {
      this.tree = addData(this.tree, data);
      function addData(node, data) {
         if (!node) {
            return new Node(data);
         }
         if (node.data === data) {
            return node;
         }
         if (data < node.data) {
            node.left = addData(node.left, data);
         } else {
            node.right = addData(node.right, data);
         }
         return node;
      }
   }

   has(data) {
      return searchData(this.tree, data);
      function searchData(node, data) {
         if (!node) {
            return false;
         }
         if (node.data === data) {
            return true;
         }
         return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
      }
   }

   find(data) {
      return findData(this.tree, data);
      function findData(node, data) {
         if (!node) {
            return null;
         }
         if (node.data === data) {
            return node;
         }
         return data < node.data ? findData(node.left, data) : findData(node.right, data);
      }
   }

   remove(data) {
      this.root = removeData(this.tree, data);
      function removeData(node, data) {
         if (!node) {
            return null;
         }
         if (data < node.data) {
            node.left = removeData(node.left, data);
            return node;
         } else if (data > node.data) {
            node.right = removeData(node.right, data);
            return node;
         } else {
            if (!node.left && !node.right) {
               return null;
            }
            if (!node.left) {
               node = node.right;
               return node;
            }
            if (!node.right) {
               node = node.left;
               return node;
            }
            let minRight = node.right;
            while (minRight.left) {
               minRight = minRight.left;
            }
            node.data = minRight.data;
            node.right = removeData(node.right, minRight.data);
            return node;
         }
      }
   }

   min() {
      if (!this.tree) {
         return null;
      }
      let node = this.tree;
      while (node.left) {
         node = node.left;
      }
      return node.data;
   }

   max() {
      if (!this.tree) {
         return null;
      }
      let node = this.tree;
      while (node.right) {
         node = node.right;
      }
      return node.data;
   }
}

module.exports = {
   BinarySearchTree
};