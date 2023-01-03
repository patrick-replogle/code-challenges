SELECT name FROM SalesPerson 
    WHERE sales_id NOT IN 
        (
            SELECT sales_id FROM Orders AS O
            JOIN Company AS C
            ON C.com_id = O.com_id
            WHERE C.name = "RED"
        )
    ORDER BY name ASC;
