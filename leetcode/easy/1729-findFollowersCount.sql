SELECT 
    f1.user_id, 
    (SELECT COUNT(*) FROM Followers AS f2 WHERE f2.user_id = f1.user_id) AS followers_count
From Followers AS f1 
GROUP BY f1.user_id
ORDER BY f1.user_id ASC;
