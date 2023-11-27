# solution 1
SELECT
    s.student_id,
    s.student_name,
    sub.subject_name,
    (
        SELECT COUNT(*) FROM examinations AS e
        WHERE e.student_id = s.student_id 
        AND e.subject_name = sub.subject_name
    ) AS attended_exams
FROM Students AS s
JOIN Subjects AS sub
ORDER BY s.student_id, sub.subject_name;

# solution 2
SELECT
    s.student_id,
    s.student_name,
    sub.subject_name,
    COUNT(e.subject_name) AS attended_exams
FROM Students AS s
JOIN Subjects AS sub
LEFT JOIN Examinations AS e
ON e.subject_name = sub.subject_name 
AND e.student_id = s.student_id
GROUP BY s.student_id, sub.subject_name
ORDER BY s.student_id, sub.subject_name;
