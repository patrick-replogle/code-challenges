SELECT * FROM Patients
WHERE conditions LIKE 'DIAB1%'
OR conditions LIKE '% DIAB1%'
ORDER BY patient_id ASC;
