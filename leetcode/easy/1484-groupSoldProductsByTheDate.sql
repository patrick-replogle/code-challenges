# first pass solution
SELECT 
    a1.sell_date,
    COUNT(DISTINCT(product)) AS num_sold,
    (
        SELECT GROUP_CONCAT(DISTINCT(a2.product))
        FROM Activities AS a2
        WHERE a2.sell_date = a1.sell_date
        ORDER BY a2.product ASC
    ) AS products 
FROM Activities AS a1
GROUP BY a1.sell_date
ORDER BY a1.sell_date ASC;

# second pass solution
SELECT 
    sell_date,
    COUNT(DISTINCT(product)) AS num_sold,
    GROUP_CONCAT(DISTINCT(product) ORDER BY product ASC) AS products 
FROM Activities 
GROUP BY sell_date
ORDER BY sell_date ASC;
