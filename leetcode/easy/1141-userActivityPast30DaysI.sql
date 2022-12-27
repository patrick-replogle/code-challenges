SELECT 
    a1.activity_date AS day,
    (
        SELECT COUNT(DISTINCT(A2.user_id)) 
        FROM Activity AS a2 
        WHERE a2.activity_date = a1.activity_date
    ) AS active_users
FROM Activity AS a1
    WHERE activity_date <= "2019-07-27"
    AND activity_date > "2019-06-27"
    GROUP BY a1.activity_date;
