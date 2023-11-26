SELECT 
  p.product_id, 
  IFNULL(ROUND((SUM(p.price * us.units) / SUM(us.units)), 2), 0) AS average_price
FROM Prices AS p
LEFT JOIN UnitsSold AS us ON p.product_id = us.product_id
WHERE us.purchase_date >= p.start_date AND us.purchase_date <= p.end_date
OR us.product_id IS NULL
GROUP BY p.product_id;
