SELECT * FROM Users
WHERE mail LIKE '%@leetcode.com'
AND REGEXP_LIKE(LEFT(mail, 1), '^[a-zA-Z]')
AND REGEXP_LIKE(REPLACE(mail, '@leetcode.com', ''), '^[a-zA-Z0-9_.\-]+$');
