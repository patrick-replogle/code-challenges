// first pass solution
class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}

class WordDictionary {
    TrieNode root = new TrieNode();

    public WordDictionary() {
        
    }
    
    public void addWord(String word) {
        TrieNode node = root;
        
        for (char c : word.toCharArray()) {
            int index = (int) c - 'a';
            
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }
    
    public boolean search(String word) {

        return search(root, word, 0);
    }
    
    public boolean search(TrieNode root, String word, int index) {
        if (index == word.length()) return root.isEnd;
        
        if (word.charAt(index) == '.') {
            for (int i = 0; i < 26; i++) {
                if (root.children[i] != null) {
                    boolean res = search(root.children[i], word, index + 1);
                    if (res) return true;
                }
            }
            
        } else {
            int i = (int) word.charAt(index) - 'a';
            if (root.children[i] == null) return false;
            root = root.children[i];
            return search(root, word, index + 1);
        }
        return false;
    }
}
