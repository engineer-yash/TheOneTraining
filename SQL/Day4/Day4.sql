use [Yash Gohel]
--Day 4
--(1) write down SQL query to Select Customer Name, Employee Name,orderno(id),orderdate,Amount.
SELECT (SELECT c.FirstName+' '+c.LastName FROM Customer c WHERE c.CustomerId = o.CustomerId) AS CustomerName,
(SELECT e.FirstName+' '+e.LastName FROM Employee e WHERE e.EmployeeId = o.EmployeeId)AS EmployeeName,
OrderId, OrderDate , Amount
FROM Orders o

--(2) write down SQL query to Select customer Name, Count of orders,total order AMOUNT
--SUBQUERY
SELECT c.FirstName+' '+c.LastName AS CustomerName,
(SELECT COUNT(*) FROM Orders o WHERE o.CustomerId = c.CustomerId) AS OrderCount,
(SELECT SUM(Amount) FROM Orders o WHERE o.CustomerId = c.CustomerId) AS TotalOrderAmount
FROM Customer c

--JOIN
SELECT CONCAT(c.FirstName,+' '+c.LastName) AS CustomerName, COUNT(OrderId) AS OrderCount, SUM(Amount) AS TotalAmount FROM Customer c LEFT JOIN Orders o ON c.CustomerId = o.CustomerId GROUP BY c.FirstName, c.LastName;


--(3) write down SQL query to Select Employee name, And no of order assigned to him/her NOTE: Select the Only Employee having more than 3 order
CREATE VIEW [View Orders] AS 
SELECT e.FirstName +' '+e.LastName AS EmployeeName, COUNT(o.OrderId) AS OrderCount
FROM Employee e, Orders o WHERE e.EmployeeId = o.EmployeeId GROUP BY e.FirstName +' '+e.LastName
HAVING COUNT(o.OrderId) > 3;

SELECT * FROM [View Orders]

--(4) write down SQL query to Select the Customer and employee in desc order to Name
SELECT c.FirstName +' '+c.LastName AS [Name] from Customer c
UNION
SELECT e.FirstName +' '+e.LastName AS [Name] from Employee e
ORDER BY [Name] DESC;
 
--(5) write down SQL query to Select TOP 5 Orders which have high discount rate.
--MAIN
SELECT TOP 5 * FROM Orders o, OrderDetails od WHERE o.OrderId = od.OrderId ORDER BY od.DiscountRate DESC;

--JOIN
SELECT TOP 5 * FROM Orders o INNER JOIN OrderDetails od ON o.OrderId = od.OrderId
ORDER BY od.DiscountRate DESC;


--(6) write down SQL query to Select only Orders within last 7 days, last month, Custom Dates(note : create diff Query for All three Criteria )
 SELECT * FROM Orders WHERE OrderDate >= DATEADD(DAY,-7,GETDATE());

 SELECT * FROM Orders WHERE OrderDate >= DATEADD(MONTH,-1,GETDATE());

 SELECT * FROM Orders WHERE OrderDate BETWEEN '1950-01-01' AND '2024-12-30';

--(7) write down SQL query to Select employee who has max order
	SELECT * FROM Employee
	WHERE EmployeeId = (SELECT TOP 1 EmployeeId FROM Orders GROUP BY EmployeeId ORDER BY COUNT(OrderId) DESC);

--(8) write down SQL query to Select customer-orders which order date is less than 10 days
select *
from Orders o
JOIN Customer c ON c.CustomerId = o.CustomerId
WHERE o.OrderDate>=DATEADD(DAY,-10,GETDATE());

SELECT * FROM Orders o,Customer c WHERE o.CustomerId = c.CustomerId AND o.OrderDate>=DATEADD(DAY,-10,GETDATE());

--(9) write down SQL query to Select the Customer name, Employee name, order no, order Date which have min 2 items.
--SUBQUERY
select(select c.FirstName +' '+c.LastName FROM Customer c Where c.CustomerId = o.CustomerId) AS CustomerName,
(select e.FirstName+' '+e.LastName FROM Employee e Where e.EmployeeId = o.EmployeeId) AS EmployeeName,
o.OrderId, o.OrderDate
from Orders o
WHERE OrderId IN (SELECT OrderId FROM OrderDetails GROUP BY OrderId HAVING COUNT(*) >=2);

--JOIN
SELECT c.FirstName +' '+c.LastName AS c,
e.FirstName+' '+e.LastName AS EmployeeName,
o.OrderId,o.OrderDate From Orders o
JOIN Employee e ON o.EmployeeId = e.EmployeeId
JOIN Customer c ON o.CustomerId = c.CustomerId
WHERE OrderId IN (SELECT OrderId FROM Orderdetails GROUP BY OrderId HAVING COUNT(*) >=2);


--(10)write down SQL query to Select Employee vise Average order amount. Here Column should display like Employee name & Average Order Amount
select FirstName +' '+LastName AS [EmployeeName],(select AVG(o.Amount) From Orders o WHERE e.EmployeeId = o.EmployeeId)AS AverageAmount from Employee e

--NULL -> 0
select FirstName +' '+LastName AS [EmployeeName],(select ISNULL(AVG(o.Amount),0) From Orders o WHERE e.EmployeeId = o.EmployeeId)AS AverageAmount from Employee e


Select * from Employee
Select * from Customer
Select * from Orders
Select * from OrderDetails
