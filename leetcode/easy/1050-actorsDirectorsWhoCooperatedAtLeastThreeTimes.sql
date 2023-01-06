SELECT ad1.actor_id, ad1.director_id
FROM ActorDirector AS ad1
WHERE (
    SELECT COUNT(*) FROM ActorDirector AS ad2
    WHERE ad1.actor_id = ad2.actor_id
    AND ad1.director_id = ad2.director_id
) >= 3
GROUP BY ad1.actor_id, ad1.director_id
