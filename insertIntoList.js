class Solution {
    insertIntoList(head, pos, val) {
       if (pos>=head.length) {
           head.push(val)
       }
        else{
            head.splice(pos,0,val)
        }
        return head;
    }
}
