// first pass solution
public class NestedIterator implements Iterator<Integer> {
    private List<Integer> list;
    private int i;

    public NestedIterator(List<NestedInteger> nestedList) {
        list = new ArrayList<>();
        i = 0;
        flatten(nestedList); // covert nestedInteger list into list of integers
    }

    @Override
    public Integer next() {
        if (hasNext()) {
            int output = list.get(i);
            i++;
            return output;
        }
        return -1;
    }

    @Override
    public boolean hasNext() {
        return i < list.size();
    }
    
    public void flatten(List<NestedInteger> nestedList) {
        for (NestedInteger num : nestedList) {
            if (num.isInteger()) {
                list.add(num.getInteger());
            } else {
                flatten(num.getList());
            }
        }
    }
}
