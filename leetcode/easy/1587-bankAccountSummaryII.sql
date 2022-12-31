SELECT 
    U.name AS NAME,
    SUM(T.amount) AS BALANCE
FROM Users AS U
JOIN Transactions AS T ON U.account = T.account
GROUP BY NAME
HAVING BALANCE > 10000;
