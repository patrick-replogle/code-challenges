SELECT p.product_name, SUM(o.unit) as unit
FROM Products AS p
JOIN Orders AS o
ON o.product_id = p.product_id
WHERE YEAR(o.order_date) = '2020' 
AND MONTH(o.order_date) = '02'
GROUP BY o.product_id
HAVING SUM(o.unit) >= 100;
