// first pass solution
    public static void bonAppetit(List<Integer> bill, int k, int b) {
        int sum = 0;
        
        for (int i = 0; i < bill.size(); i++) {
            if (i == k) continue;
            sum += bill.get(i);
        }
        int amount = b - (sum / 2);
        
        if (amount == 0) {
            System.out.println("Bon Appetit");
        } else {
            System.out.println(amount);
        }
    }
}
