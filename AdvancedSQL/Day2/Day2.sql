use [Yash Gohel]
-------------------------------------------------Task1-----------------------------------------------------------------------
--You are tasked with generating a report that lists all departments along with the employee having the highest salary in each department. If a department has no employees, the report should still include that department with a null value for the employee information.
--Use a Cross Apply to find the employee with the highest salary in each department.
CREATE TABLE aSQL2_Department(
DepartmentID int IDENTITY(1,1) PRIMARY KEY,
DepartmentName VARCHAR(100),
)
CREATE TABLE aSQL2_Employees
(
EmployeeID int IDENTITY(1,1) PRIMARY KEY,
EmployeeName VARCHAR(100),
DepartmentID int FOREIGN KEY(DepartmentID) REFERENCES aSQL2_Department (DepartmentID),
Salary int
)
INSERT INTO aSQL2_Department (DepartmentName) VALUES ('CLERK'), ('SALESMAN'), ('MANAGER'), ('ANALYST'), ('PRESIDENT'), ('HR')    
INSERT INTO aSQL2_Employees (EmployeeName, DepartmentID, Salary) VALUES
('SMITH', 1, 25000), ('ALLEN', 2, 55000), ('WARD', 5, 90000),
('JONES', 4, 20000), ('BLAKE', 3, 65000), ('SCOTT', 2, 44000),
('JAMES', 1, 33000), ('MILLER', 4, 41000), ('FORD', 3, 39000),
('MARTIN', 3, 31000)

select * from aSQL2_Employees
select * from aSQL2_Department

--Use a Cross Apply to find the employee with the highest salary in each department.
SELECT d.DepartmentID, d.DepartmentName, e.EmployeeName, e.Salary
FROM aSQL2_Department d
CROSS APPLY (
    SELECT TOP 1 EmployeeName, Salary
    FROM aSQL2_Employees
    WHERE DepartmentID = d.DepartmentID
    ORDER BY Salary DESC
) e
--Use an Outer Apply to include departments with no employees.
SELECT d.DepartmentName, e.EmployeeName, e.Salary
FROM aSQL2_Department d
OUTER APPLY (
    SELECT TOP 1 EmployeeName, Salary
    FROM aSQL2_Employees
    WHERE DepartmentID = d.DepartmentID
    ORDER BY Salary DESC
) e
------------------------------------------------- Task 2 -----------------------------------------------------------------------
--You need to generate a report that displays the top two orders (based on the total amount) for each customer. If a customer has fewer than two orders, the report should still include that customer with the available order information.

CREATE TABLE aSQL2_Customer(
CustomerID BIGINT IDENTITY(1,1) PRIMARY KEY,
CustomerName VARCHAR(100)
)
CREATE TABLE aSQL2_Order(
OrderID BIGINT IDENTITY(1,1) PRIMARY KEY,
CustomerID BIGINT FOREIGN KEY (CustomerID) REFERENCES aSQL2_Customer(CustomerID),
OrderDate DATE,
TotalAmount INT
)
INSERT INTO aSQL2_Customer (CustomerName) VALUES
('Johnson'), ('Ashley'), ('Marjorie'), ('Jerome'), ('Robert'), ('Susan')

INSERT INTO aSQL2_Order (CustomerID, OrderDate, TotalAmount)VALUES
(1, '2019/10/19', 1212),
(1, '2017/07/16', 4234),
(1, '2020/09/16', 6753),
(2, '2023/04/10', 5647),
(2, '2021/08/10', 2333),
(2, '2019/08/10', 2333),
(3, '2019/08/10', 3087),
(3, '2017/08/10', 7045),
(3, '2023/08/10', 4732),
(4, '2017/08/10', 9540),
(4, '2023/08/10', 1202),
(4, '2017/08/05', 8911),
(4, '2017/08/10', 7045),
(5, '2017/08/10', 9540)

select * from aSQL2_Customer
select * from aSQL2_Order
--Use a Cross Apply to find the top two orders for each customer.
SELECT * FROM aSQL2_Customer c
CROSS APPLY(
Select TOP 2 * FROM aSQL2_Order o
WHERE o.CustomerID = c.CustomerID
ORDER BY o.TotalAmount DESC
)o;

--Use an Outer Apply to include customers with fewer than two orders.
SELECT * FROM aSQL2_Customer c
OUTER APPLY(
Select TOP 2 * FROM aSQL2_Order o
WHERE o.CustomerID = c.CustomerID
ORDER BY o.TotalAmount DESC
)o;
------------------------------------------------- Task 3 -----------------------------------------------------------------------
--You are tasked with generating a report that combines the records of students, teachers, and administrative staff, listing their names, departments, and relevant information based on their roles. However, you need to distinguish between the roles in the output.
CREATE TABLE Students
(StudentID int IDENTITY(1,1) PRIMARY KEY,
StudentName VARCHAR(100),
Department VARCHAR(100),
GPA int
)
CREATE TABLE Teachers
(TeacherID int IDENTITY(1,1) PRIMARY KEY,
TeacherName VARCHAR(100),
Department VARCHAR(100),
Salary int
)
CREATE TABLE AdministrativeStaff(
StaffID int IDENTITY(1,1) PRIMARY KEY,
StaffName VARCHAR(100),
Department VARCHAR(100),
Position VARCHAR(100),
)
INSERT INTO Students (StudentName, Department, GPA) VALUES
('John Smith', 'Computer Science', 3.8),
('Emily Johnson', 'Mathematics', 3.9),
('Michael Williams', 'Physics', 3.5),
('Jessica Brown', 'Biology', 3.7),
('David Jones', 'Chemistry', 3.6),
('David Jones','Chemistry',3.5),
('Sarah Davis', 'Computer Science', 3.4),
('James Wilson', 'Mathematics', 3.8),
('Emma Martinez', 'Physics', 3.2),
('Daniel Taylor', 'Biology', 3.9),
('Olivia Anderson', 'Chemistry', 3.3);

INSERT INTO Teachers (TeacherName, Department, Salary) VALUES
('Robert Moore', 'Computer Science', 60000),
('Jennifer Taylor', 'Mathematics', 65000),
('William Clark', 'Physics', 62000),
('Mary Harris', 'Biology', 63000),
('Mary Harris','Biology',25000),
('Christopher Lewis', 'Chemistry', 61000),
('Patricia King', 'Computer Science', 58000),
('Richard Lee', 'Mathematics', 66000),
('Linda Wright', 'Physics', 63000),
('George Hall', 'Biology', 64000),
('Susan Green', 'Chemistry', 59000);

INSERT INTO AdministrativeStaff (StaffName, Department, Position) VALUES
('Thomas Adams', 'Computer Science', 'Administrator'),
('Barbara Baker', 'Mathematics', 'Secretary'),
('Edward Carter', 'Physics', 'Clerk'),
('Karen Evans', 'Biology', 'Manager'),
('Karen Evans', 'Biology', 'Clerk'),
('Anthony Garcia', 'Chemistry', 'Coordinator'),
('Margaret Hill', 'Computer Science', 'Administrator'),
('Paul Jackson', 'Mathematics', 'Secretary'),
('Ruth Kelly', 'Physics', 'Clerk'),
('Steven Lopez', 'Biology', 'Manager'),
('Deborah Martin', 'Chemistry', 'Coordinator');

--using UNION
SELECT 'Student' AS Role, StudentName, Department
FROM Students
UNION
SELECT 'Teacher' AS Role, TeacherName, Department
FROM Teachers
UNION
SELECT 'Administrative Staff' AS Role, StaffName, Department
FROM AdministrativeStaff
ORDER BY Role;

--using UNION ALL
SELECT 'Student' AS Role, StudentName, Department
FROM Students
UNION ALL
SELECT 'Teacher' AS Role, TeacherName, Department
FROM Teachers
UNION ALL
SELECT 'Administrative Staff' AS Role, StaffName, Department
FROM AdministrativeStaff
ORDER BY Role;