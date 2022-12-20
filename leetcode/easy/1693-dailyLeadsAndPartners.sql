SELECT
    ds1.date_id,
    ds1.make_name,
    (
        SELECT COUNT(DISTINCT(ds2.lead_id)) 
        FROM DailySales AS ds2 
        WHERE ds1.date_id = ds2.date_id 
        AND ds1.make_name = ds2.make_name
    ) AS unique_leads,
    (
        SELECT COUNT(DISTINCT(ds3.partner_id)) 
        FROM DailySales AS ds3 
        WHERE ds1.date_id = ds3.date_id 
        AND ds1.make_name = ds3.make_name
    ) AS unique_partners
FROM DailySales AS ds1
GROUP BY ds1.date_id, ds1.make_name
ORDER BY ds1.date_id;
