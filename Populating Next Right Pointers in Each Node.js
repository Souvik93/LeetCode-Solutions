/*


You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 4096.
-1000 <= node.val <= 1000






*/

// JS Solution

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// First Approch
var connect = function(root) {
    
    if(!root) {
        return root;
    }
    
    /* let q = [];
    q.push(root);
    
    while(q.length!=0) {
        let temp = [];
        while(q.length!=0) {
            
            
            let node = q.shift();
            
            node.next=q[0] || null;
            
            if(node.left != null) {
                temp.push(node.left);
            }
            
        if(node.right != null) {
                temp.push(node.right);
            }
            
            
        }
        
        q = temp;
    }
    
    */
    
    preorder(root);
    
    return root;
    
};

var preorder = function(root) {
    
    if(!root) {
        return;
    }
    
    if(root.left != null) {
        
    
        
        root.left.next = root.right;
    }
    
    if(root.right!=null) {
        root.right.next = root.next ? root.next.left : null ;
    }
    
    preorder(root.left);
    
    preorder(root.right);
    
}

// 2nd Appr
var connect = function(root) {
    
    if(!root) {
        return root;
    }
    
    let level = root;
    
    while(level.left) {
        let head = level;
        
        while(head != null) {
            head.left.next = head.right;
            if(head.next) {
               ``` head.right.next = head.next.left;```
            }
            head = head.next;
        }
        level = level.left;
    }
    
    return root;
    
    
    
};
