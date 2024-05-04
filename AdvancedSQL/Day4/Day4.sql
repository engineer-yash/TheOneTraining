--Task 1:
/*
Certainly! Here's a challenging task involving Common Table Expressions (CTEs), joins,
functions, and logical operations. We'll define a scenario, create table structures,
populate them with sample data, and then present the task.
Scenario: Suppose you are developing an e-commerce platform where customers can
place orders for products. You need to generate a report that lists the top-selling
products for each category based on the total quantity sold.
*/
--1. Create table structures for Products, Orders, and OrderDetails.
CREATE TABLE aSQL4_Products (
ProductID INT PRIMARY KEY,
ProductName NVARCHAR(100),
Category NVARCHAR(100)
);
CREATE TABLE aSQL4_Orders (
OrderID INT PRIMARY KEY,
OrderDate DATE
);
CREATE TABLE aSQL4_OrderDetails (
OrderDetailID INT PRIMARY KEY,
OrderID INT,
ProductID INT,
Quantity INT,
FOREIGN KEY (OrderID) REFERENCES aSQL4_Orders(OrderID),
FOREIGN KEY (ProductID) REFERENCES aSQL4_Products(ProductID)
);
--2. Populate the tables with sample data.
INSERT INTO aSQL4_Products (ProductID, ProductName, Category)
VALUES
(1, 'Laptop', 'Electronics'),
(2, 'Smartphone', 'Electronics'),
(3, 'Desk', 'Furniture'),
(4, 'Chair', 'Furniture'),
(5, 'Printer', 'Electronics');

INSERT INTO aSQL4_Orders (OrderID, OrderDate)
VALUES
(101, '2024-01-15'),
(102, '2024-02-20'),
(103, '2024-03-10');

INSERT INTO aSQL4_OrderDetails (OrderDetailID, OrderID, ProductID, Quantity)
VALUES
(1001, 101, 1, 2),
(1002, 101, 3, 1),
(1003, 102, 2, 3),
(1004, 103, 4, 2),
(1005, 103, 5, 1),
(1006, 103, 1, 3);

select * from aSQL4_Products
select * from aSQL4_Orders
select * from aSQL4_OrderDetails

--3. Write a SQL query using a CTE, joins, and functions to generate the report.
--4. The report should display the top-selling product for each category, along with the total quantity sold.
WITH report(Category, TopSellingProduct, Quantity) AS 
	(
		SELECT P.Category,P.ProductName,OD.Quantity FROM aSQL4_Products P
		INNER JOIN aSQL4_OrderDetails OD ON P.ProductID = OD.ProductID
		GROUP BY P.ProductName, P.Category, OD.Quantity
	)
SELECT Category, TopSellingProduct, Quantity FROM
	(
		SELECT *,ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Quantity DESC) AS rn FROM report
	)AS Subquery
WHERE rn = 1

/*Scenario: You are working for a car rental company that operates in multiple cities. You
need to generate a report that identifies the average rental duration for each car model
in each city.

Instructions:
1. Design a table structure to store rental transactions, including the rental start
date, rental end date, car model, and city.
2. Populate the table with sample rental data.
3. Write a SQL query to calculate the average rental duration for each car model in
each city.
4. Ensure that the query handles cases where a rental transaction spans across
multiple days.

Requirements: Write a SQL query to generate a report that displays the average rental
duration for each car model in each city.
*/

CREATE TABLE aSQL4_RentalTransactions (
TransactionID INT PRIMARY KEY,
RentalStartDate DATETIME,
RentalEndDate DATETIME,
CarModel NVARCHAR(100),
City NVARCHAR(100)
);

INSERT INTO aSQL4_RentalTransactions (TransactionID, RentalStartDate, RentalEndDate,
CarModel, City)
VALUES
(1, '2024-01-01 08:00:00', '2024-01-01 18:00:00', 'Toyota Camry', 'New York'),
(2, '2024-01-02 10:00:00', '2024-01-02 15:00:00', 'Honda Civic', 'Los Angeles'),
(3, '2024-01-03 09:00:00', '2024-01-04 11:00:00', 'Toyota Camry', 'New York'),
(4, '2024-01-05 12:00:00', '2024-01-06 10:00:00', 'Ford Mustang', 'Chicago'),
(5, '2024-01-05 14:00:00', '2024-01-07 16:00:00', 'Honda Civic', 'Los Angeles'),
(6, '2024-01-06 09:00:00', '2024-01-07 09:00:00', 'Toyota Camry', 'New York');

select * FROM aSQL4_RentalTransactions

select RT.CarModel,RT.City,AVG(DATEDIFF(HOUR, RentalStartDate, RentalEndDate)) AS TotalRentalDuration FROM aSQL4_RentalTransactions RT
GROUP BY RT.CarModel, RT.City

--Task 3:
--We want to this data to show the total sales amount for each Product By date.
CREATE TABLE aSQL4_SalesData (
ProductName NVARCHAR(50),
SalesDate DATE,
SalesAmount DECIMAL(10, 2)
);
INSERT INTO aSQL4_SalesData (ProductName, SalesDate, SalesAmount) VALUES
('Product A', '2024-04-04', 400.00),
('Product B', '2024-04-04', 450.00),
('Product A', '2024-04-05', 500.00),
('Product B', '2024-04-05', 550.00),
('Product A', '2024-04-06', 600.00),
('Product B', '2024-04-06', 650.00),
('Product A', '2024-04-07', 700.00),
('Product B', '2024-04-07', 750.00),
('Product A', '2024-04-08', 800.00),
('Product B', '2024-04-08', 850.00),
('Product A', '2024-04-09', 900.00),
('Product B', '2024-04-09', 950.00),
('Product A', '2024-04-10', 1000.00),
('Product B', '2024-04-10', 1050.00),
('Product A', '2024-04-11', 1100.00),
('Product B', '2024-04-11', 1150.00),
('Product A', '2024-04-12', 1200.00),
('Product B', '2024-04-12', 1250.00),
('Product A', '2024-04-13', 1300.00),
('Product B', '2024-04-13', 1350.00),
('Product A', '2024-04-14', 1400.00),
('Product B', '2024-04-14', 1450.00),
('Product A', '2024-04-15', 1500.00),
('Product B', '2024-04-15', 1550.00),
('Product A', '2024-04-16', 1600.00),
('Product B', '2024-04-16', 1650.00),
('Product A', '2024-04-17', 1700.00),
('Product B', '2024-04-17', 1750.00),
('Product A', '2024-04-18', 1800.00),
('Product B', '2024-04-18', 1850.00),
('Product A', '2024-04-19', 1900.00),
('Product B', '2024-04-19', 1950.00),
('Product A', '2024-04-20', 2000.00),
('Product B', '2024-04-20', 2050.00),
('Product A', '2024-04-21', 2100.00),
('Product B', '2024-04-21', 2150.00),
('Product A', '2024-04-22', 2200.00),
('Product B', '2024-04-22', 2250.00),
('Product A', '2024-04-23', 2300.00),
('Product B', '2024-04-23', 2350.00),
('Product A', '2024-04-24', 2400.00),
('Product B', '2024-04-24', 2450.00),
('Product A', '2024-04-25', 2500.00),
('Product B', '2024-04-25', 2550.00);

--QUERY
SELECT ProductName, SalesDate, SUM(SalesAmount) AS TotalSalesAmount
FROM aSQL4_SalesData
GROUP BY ProductName, SalesDate
ORDER BY ProductName

