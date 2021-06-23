/*
You recently started working at a promising new startup. Now that you're at the end of the first week, you're surprised the product is still 
working at all: there are bugs in almost every one of its components!

Information about all bugs is stored in a table Bug, and information about components is stored in a Component table. Since some bugs may be 
present in several components and vice versa, the additional BugComponent table contains rows representing connections between bugs and components. 
In the database the tables are stored as follows:

Bug:
num: unique bug number
title: bug title
Component:
id: unique component id
title: component title
BugComponent:
bug_num: foreign key referencing Bug.num
component_id: foreign key referencing Component.id
There are so many bugs that you don't know what to begin with. To help yourself decide, you want to find all bugs that affect more than one 
component, and find these components' names. Since it's difficult to test too buggy components, you also want to know how many bugs each such 
component has. Write a select statement which returns the following columns:

bug_title: bug title
component_title: title of the component to which this bug belongs
bugs_in_component: total number of bugs in this component
The results should be sorted by the number of bugs in the component in the descending order. In case of a tie, the component with the smallest 
id should go first. In case it's not enough to break a tie, bug_num should be a tie-breaker: the bug with the smallest num should go first.

Example

For the following tables Bug

num	title
1	Quotes don't work
2	Highlighting looks weird
3	Posts are not automatically updated
4	Author link doesn't work
, Component
id	title
1	Forum
2	Code editor
and BugComponent
bug_num	component_id
1	1
2	1
2	2
3	1
4	2
4	1
the resulting table should be
bug_title	component_title	bugs_in_component
Highlighting looks weird	Forum	4
Author link doesn't work	Forum	4
Highlighting looks weird	Code editor	2
Author link doesn't work	Code editor	2
*/

CREATE PROCEDURE bugsInComponent()
BEGIN
    SELECT 
        b.title AS bug_title, 
        c.title as component_title,
        (SELECT COUNT(*) FROM BugComponent 
          WHERE component_id = c.id
        ) AS bugs_in_component
    FROM Bug AS b
    JOIN BugComponent AS bc
    ON b.num = bc.bug_num
    JOIN Component AS c
    ON bc.component_id = c.id
    WHERE bc.bug_num IN     
        (SELECT bug_num FROM BugComponent
        GROUP BY bug_num
        HAVING (COUNT(*) > 1))
    ORDER BY bugs_in_component DESC, c.id ASC;
END
