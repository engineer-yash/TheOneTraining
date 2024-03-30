use [Yash Gohel]
--Day 5
--(1) Write down SQL query to Select Customer Name, Count of orders,total order AMOUNT
select FirstName +' '+ LastName AS CustomerName,
COUNT(o.CustomerId) AS OrderCount,
SUM(o.Amount) AS TotalOrderAmount FROM Customer c
LEFT JOIN Orders o ON c.CustomerId = o.CustomerId
GROUP BY FirstName +' '+ LastName ORDER BY COUNT(o.CustomerId) DESC;

--(2) Write down SQL query to Select Employee name, And no of order assigned to him/her NOTE: Select the Only Employee having more than 3 order
Select FirstName +' '+ LastName AS EmployeeName,
COUNT(o.EmployeeId) AS AssignedOrders FROM Employee e
LEFT JOIN Orders o ON e.EmployeeId = o.EmployeeId
GROUP BY FirstName +' '+ LastName,o.EmployeeId

--(3) Write down SQL query to Select retrieve all Employee list which are having 0 Order.
SELECT e.*
FROM Employee e
LEFT JOIN Orders o ON e.EmployeeId = o.EmployeeId
WHERE o.EmployeeId is NULL

--(4) Write down SQL query to Select Customer Name, Employee Name,orderno(id),orderdate,Amount.
Select e.FirstName +' '+ e.LastName AS EmployeeName,
c.FirstName +' '+ c.LastName AS CustomerName,
o.OrderId AS OrderNo,
o.OrderDate AS OrderDate, 
o.Amount AS OrderAmount
FROM Employee e, Customer c, Orders o
WHERE e.EmployeeId = o.EmployeeId AND c.CustomerId = o.OrderId
GROUP BY e.FirstName +' '+ e.LastName,c.FirstName +' '+ c.LastName,o.OrderId,o.Amount,o.OrderDate

SELECT 
EP.FirstName +' '+ EP.LastName AS EmployeeName,
CS.FirstName +' '+ CS.LastName AS CustomerName,
o.OrderId AS OrderNo,
o.OrderDate AS OrderDate, 
o.Amount AS OrderAmount
FROM Orders O
INNER JOIN Employee EP ON O.EmployeeId = EP.EmployeeId
INNER JOIN Customer CS ON O.CustomerId = CS.CustomerId

--(5) Write down SQL query to Select only Orders within last 7 days, last month, Custom Dates(note : create diff Query for All three Criteria)
--Within last 7 days
SELECT * FROM Orders WHERE OrderDate >= DATEADD(DAY,-7,GETDATE());
--Last Month
SELECT * FROM Orders WHERE OrderDate >= DATEADD(MONTH,-1,GETDATE());
--Custom Dates
SELECT * FROM Orders WHERE OrderDate BETWEEN '1950-01-01' AND '2024-12-30';

--(6) Write down SQL query to Select employee who has max order
SELECT TOP 1 e.*
FROM Employee e
JOIN Orders o ON e.EmployeeId = o.EmployeeId
GROUP BY e.EmployeeId,e.FirstName,e.LastName,e.MobileNo,e.BirthDate,e.UserName,e.UserEmailAddress,e.Password,e.HomeAddress,e.City,e.State,e.ZipCode, e.InsertedDate
ORDER BY COUNT(o.OrderId) DESC;

--(7) Write down SQL query to Select customerOrders which order date is less than 10 days
SELECT o.OrderId,o.CustomerId,o.OrderDate,o.RequiredDate,o.ShippingDate,o.Amount FROM Orders o
JOIN Customer c ON o.CustomerId = c.CustomerId
WHERE OrderDate >= DATEADD(DAY,-10,GETDATE());

--(8) Write down SQL query to Select the Customer name, Employee name, order no, order Date which have min 2 items.
SELECT c.FirstName+' '+c.LastName AS CustomerName,
e.FirstName+' '+e.LastName AS EmployeeName,
o.OrderId,o.OrderDate FROM Orders o
JOIN Customer c ON o.CustomerId = c.CustomerId
JOIN Employee e ON o.EmployeeId = e.EmployeeId
JOIN OrderDetails od ON o.OrderId = od.OrderId
GROUP BY c.FirstName, c.LastName,e.FirstName, e.LastName,o.OrderId,o.OrderDate
HAVING COUNT(od.OrderId) >= 2

--(9) Write down SQL query to Select Employee Vise Average order amount. Here Column should display like Employee name & Average Order Amount
SELECT e.FirstName+' '+e.LastName AS EmployeeName, AVG(o.Amount) AS [Average Order] FROM Employee e
JOIN Orders o ON e.EmployeeId = o.EmployeeId
GROUP BY e.FirstName,e.LastName

--(10) Write down SQL query to Select orders which not have any discounts on items.
SELECT o.OrderId,o.CustomerId,o.EmployeeId,o.OrderDate,o.RequiredDate,o.ShippingDate,o.Amount FROM Orders o
JOIN OrderDetails od ON o.OrderId = od.OrderId
WHERE od.DiscountRate = 0;

Select * from Employee
Select * from Customer
Select * from Orders
Select * from OrderDetails