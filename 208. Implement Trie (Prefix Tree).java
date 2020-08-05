/*

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/

class Trie {

    
    TrieNode root;
    /** Initialize your data structure here. */
    public Trie() {
        this.root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        
        TrieNode temp = root;
        
        for(int i=0;i<word.length();i++) {
             int j= word.charAt(i)-'a';
            if(temp.child[j]==null) {
                temp.child[j] = new TrieNode();
            }
            
            temp = temp.child[j];
        }
        
        temp.isLeaf = true;
        
        
       
        
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        
        TrieNode temp = root;
        
        return findWords(0,word,temp);
        
        
    }
    
    private boolean findWords(int index,String word,TrieNode node) {
        
        if(index==word.length()) {
            return node.isLeaf;
        }
        
        int j = word.charAt(index)-'a';
        
        TrieNode tempNode = node.child[j];
        
        return tempNode!=null && findWords(index+1,word,tempNode);
        
        
        
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        
        TrieNode tempNode = root;
        
        for(char c: prefix.toCharArray()) {
            if(tempNode.child[c-'a']==null) {
                return false;
            }
            tempNode = tempNode.child[c-'a'];
        }
        
        return true;
        
        
        
    }
}

class TrieNode {
    boolean isLeaf;
    TrieNode[] child;
    
    public TrieNode () {
        this.isLeaf = false;
        
        this.child = new TrieNode[26];
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
