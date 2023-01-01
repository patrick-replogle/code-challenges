SELECT 
    S1.product_id, 
    P.product_name 
FROM Product AS P
JOIN Sales AS S1 ON P.product_id = S1.product_id
WHERE S1.product_id NOT IN (
    SELECT S2.product_id
    FROM Sales AS S2
    WHERE S2.sale_date < "2019-01-01"
    OR S2.sale_date > "2019-03-31"
)
GROUP BY P.product_id
ORDER BY P.product_id;
