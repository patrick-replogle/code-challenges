SELECT author_id AS id
FROM Views
WHERE viewer_id = author_id
GROUP BY author_id
ORDER BY author_id ASC;
