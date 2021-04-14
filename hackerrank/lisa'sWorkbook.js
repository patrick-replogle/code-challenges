/*
Function Description

Complete the workbook function in the editor below.

workbook has the following parameter(s):

int n: the number of chapters
int k: the maximum number of problems per page
int arr[n]: the number of problems in each chapter
Returns
- int: the number of special problems in the workbook
*/

// first pass solution
function workbook(n, k, arr) {
    let special = 0;
    let page = 1;
    
    for (let problemsInChapter of arr) {
        let problemsLeft = k;
        for (let i = 1; i <= problemsInChapter; i++) {
          if (i === page) special++;
          problemsLeft--;
          if (problemsLeft === 0 || i === problemsInChapter) {
              problemsLeft = k;
              page++;
            }
        }
    }
    return special;
}
