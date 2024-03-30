--Day 3
CREATE TABLE Employees(
Id BIGINT PRIMARY KEY,
Name VARCHAR(50),
Age SMALLINT,
Salary MONEY,
Department VARCHAR(100),
);

INSERT INTO Employees VALUES (101,'Yash Gohel','21','60000','Simple-Tix');
INSERT INTO Employees VALUES (102,'Parth Kanzariya','21','60000','Simple-Tix');
INSERT INTO Employees VALUES (103,'Pratham Rao','24','80000','Leader');
INSERT INTO Employees VALUES (104,'Priyank Bhai','25','70000','Backend Developer');
INSERT INTO Employees VALUES (105,'Jenil Bhai','23','65000','All Rounder');
INSERT INTO Employees VALUES (106,'Mayur HR','32','100000','Human Resorces');
INSERT INTO Employees VALUES (107,'Hulk','35','0','Green Giant');
INSERT INTO Employees VALUES (108,'Yash Oberoy','35','1000000','Sales');
INSERT INTO Employees VALUES (109,'Chakli ','22','600000','Sales');
INSERT INTO Employees VALUES (110,'Kashyap Sardhara ','22','60000','Marketing');
UPDATE Employees SET Name = 'Yash Gohel' WHERE Id = 108

--(1)
SELECT * FROM Employees;

--(2)
SELECT Name,Salary FROM Employees;

--(3)
SELECT Name FROM Employees WHERE Age > 30;

--(4)
SELECT Name,Salary FROM Employees WHERE Department = 'Sales';

--(5)
ALTER TABLE Employees
ALTER COLUMN Salary VARCHAR(50);
UPDATE Employees
SET Salary = CONCAT('$',Salary);
--Main Query
SELECT Name, Salary FROM Employees WHERE Salary > '$50000' AND Department = 'Marketing';

--(RND)
ALTER TABLE Employees
ADD Date DATETIME;

INSERT INTO Employees VALUES (11,'Kashyap Sardhara ','22','60000','Marketing','2003-04-04 18:00:45:00');

DELETE FROM Employees WHERE Id = 11;

--If we want to delete entire column
ALTER TABLE Employees
DROP COLUMN Date;

--(6)
ALTER TABLE Employees
ALTER COLUMN Salary MONEY;
SELECT AVG(Salary) FROM Employees;

--(7)
SELECT SUM(Salary) FROM Employees;

--(8)
SELECT MAX(Salary) FROM Employees;

--(9)
SELECT TOP 5 Name,Salary FROM Employees
ORDER BY Salary DESC