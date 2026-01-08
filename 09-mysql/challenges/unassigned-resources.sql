-- show databases;

-- use sqlchallenges;

select e.id,
		e.name,
        e.department
from employees e
LEFT JOIN ASSIGNMENTS a
ON e.id = a.employee_id
where a.employee_id = NULL;