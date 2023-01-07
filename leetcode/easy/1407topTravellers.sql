# first pass solution
SELECT 
    u.name,
    (
        SELECT COALESCE(SUM(r2.distance), 0)
        FROM Rides AS r2
        WHERE r2.user_id = r1.user_id
    ) AS travelled_distance
FROM Users AS u
LEFT JOIN Rides AS r1 ON u.id = r1.user_id
GROUP BY u.id
ORDER BY travelled_distance DESC, u.name ASC;

# second pass solution

SELECT 
    u.name,
    COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM Users AS u
LEFT JOIN Rides AS r ON u.id = r.user_id
GROUP BY u.id
ORDER BY travelled_distance DESC, u.name ASC;
