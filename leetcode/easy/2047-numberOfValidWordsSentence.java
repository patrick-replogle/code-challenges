class Solution {
    public int countValidWords(String sentence) {
        String[] arr = sentence.split(" ");
        int output = 0;
        Set<Character> punctuation = Stream.of('!', '.', ',').collect(Collectors.toUnmodifiableSet());

        for (String s: arr) {
            if (s.replaceAll("\\s", "").length() == 0) continue;

            int hyphens = 0; 
            boolean validToken = true;
            
            for (int i = 0; i < s.length(); i++) {
                char c = s.charAt(i);

                if (c == '-') {
                    hyphens++;

                    if (hyphens > 1) validToken = false;
                    if (i == 0 || i == s.length() - 1) {
                        validToken = false;
                    } else if (!Character.isLetter(s.charAt(i-1)) || !Character.isLetter(s.charAt(i+1))) {
                        validToken = false;  
                    }
                } else {
                    if (punctuation.contains(c) && i != s.length() - 1) validToken = false;
                    if (Character.isDigit(c)) validToken = false;
                    if (!Character.isLetter(c) && !punctuation.contains(c)) validToken = false;
                    if (!validToken) break;
                }
            }

            if (validToken) output++;
        }

        return output;
    }
}
