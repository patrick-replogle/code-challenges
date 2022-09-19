import java.time.LocalDate;   
import java.time.format.DateTimeFormatter;

class Solution {
    public int countDaysTogether(String arriveAlice, 
                                 String leaveAlice, 
                                 String arriveBob, 
                                 String leaveBob) {
        LocalDate aliceArriveDate = LocalDate.parse("2001-" + arriveAlice);
        LocalDate aliceLeaveDate = LocalDate.parse("2001-" + leaveAlice);
        LocalDate bobArriveDate = LocalDate.parse("2001-" + arriveBob);
        LocalDate bobLeaveDate = LocalDate.parse("2001-" + leaveBob);
        Set<String> aliceDateSet = new HashSet<>();
        int output = 0;
        
        while (!aliceArriveDate.isAfter(aliceLeaveDate)) {
            String currDateStr = aliceArriveDate.format(DateTimeFormatter.ofPattern("dd-MMM-yy"));
            aliceDateSet.add(currDateStr);
            aliceArriveDate = aliceArriveDate.plusDays(1);
        }
        
        while(!bobArriveDate.isAfter(bobLeaveDate)) {
            String currDateStr = bobArriveDate.format(DateTimeFormatter.ofPattern("dd-MMM-yy"));
            if (aliceDateSet.contains(currDateStr)) {
                output++;
            }
            bobArriveDate = bobArriveDate.plusDays(1);
        }
        
        return output;
    }
}
