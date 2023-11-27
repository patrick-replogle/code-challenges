# solution 1
SELECT 
  q1.query_name,
  ROUND(SUM(q1.rating / q1.position) / COUNT(q1.query_name), 2) AS quality,
  ROUND(   
    (
      SELECT COUNT(*) FROM queries AS q2
      WHERE q2.query_name = q1.query_name 
      AND q2.rating < 3
    ) 
    / COUNT(q1.query_name) * 100, 2) AS poor_query_percentage
FROM Queries q1
GROUP BY q1.query_name;

# solution 2
SELECT 
  q1.query_name,
  ROUND(SUM(q1.rating / q1.position) / COUNT(q1.query_name), 2) AS quality,
  ROUND(SUM(IF(RATING < 3, 1, 0))/ COUNT(q1.query_name) * 100, 2) AS poor_query_percentage
FROM Queries q1
GROUP BY q1.query_name;
