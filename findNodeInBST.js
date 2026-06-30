class TreeNode{
    constructor(val){
        this.val=val;
        this.right=null;
        this.left=null;
        
    }
}
class Solution{
    findNodeBST(root,val){
        let current=root;
        while (current!==null) {
            if (current.val===val) {
                return current
            }
            if (val<current.val) {
                current=current.left;
            }
            else{
                current=current.right;
            }
        }
            return null;
    }
}
