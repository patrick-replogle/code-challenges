SELECT 
    DISTINCT(e1.event_day) AS day,
    e1.emp_id,
    (SELECT SUM(e2.out_time - e2.in_time)
    FROM Employees AS e2
        WHERE e1.emp_id = e2.emp_id 
        AND e1.event_day = e2.event_day) AS total_time
FROM Employees AS e1
ORDER BY day;
