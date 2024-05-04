CREATE TABLE aSQL3_Customers (
CustomerID INT PRIMARY KEY,
CustomerName NVARCHAR(100),
City NVARCHAR(100),
Country NVARCHAR(100)
);

INSERT INTO aSQL3_Customers (CustomerID, CustomerName, City, Country)
VALUES
(1, 'John Doe', 'New York', 'USA'),
(2, 'Jane Smith', 'Los Angeles', 'USA'),
(3, 'Michael Johnson', 'London', 'UK'),
(4, 'Anna Lee', 'Tokyo', 'Japan');

CREATE TABLE aSQL3_Orders (
OrderID INT PRIMARY KEY,
OrderDate DATE,
CustomerID INT,
FOREIGN KEY (CustomerID) REFERENCES aSQL3_Customers(CustomerID)
);

INSERT INTO aSQL3_Orders (OrderID, OrderDate, CustomerID)
VALUES
(101, '2024-01-15', 1),
(102, '2024-02-20', 2),
(103, '2024-03-10', 3),
(104, '2024-04-05', 1),
(105, '2024-04-18', 4);

CREATE TABLE aSQL3_Products (
ProductID INT PRIMARY KEY,
ProductName NVARCHAR(100),
Category NVARCHAR(100),
UnitPrice DECIMAL(10, 2)
);

INSERT INTO aSQL3_Products (ProductID, ProductName, Category, UnitPrice)
VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Desk', 'Furniture', 300.00),
(4, 'Chair', 'Furniture', 100.00),
(5, 'Printer', 'Electronics', 250.00);

CREATE TABLE aSQL3_OrderDetails (
OrderDetailID INT PRIMARY KEY,
OrderID INT,
ProductID INT,
Quantity INT,
UnitPrice DECIMAL(10, 2),
FOREIGN KEY (OrderID) REFERENCES aSQL3_Orders(OrderID),
FOREIGN KEY (ProductID) REFERENCES aSQL3_Products(ProductID)
);

INSERT INTO aSQL3_OrderDetails (OrderDetailID, OrderID, ProductID, Quantity, UnitPrice)
VALUES
(1001, 101, 1, 2, 1200.00),
(1002, 101, 3, 1, 300.00),
(1003, 102, 2, 3, 800.00),
(1004, 103, 4, 2, 100.00),
(1005, 104, 1, 1, 1200.00),
(1006, 105, 5, 1, 250.00);

update aSQL3_OrderDetails
SET Quantity = 1
where OrderDetailID = 1002


select * from aSQL3_Customers
select * from aSQL3_Orders
select * from aSQL3_OrderDetails
select * from aSQL3_Products

--1)Create a temporary table to store the total purchases of each customer.
CREATE TABLE #temp_TotalPurchases(
CustomerName NVARCHAR(100),
TotalPurchase DECIMAL(10,2)
)

--2)Use different types of joins to join the tables and retrieve the required information.
INSERT INTO #temp_TotalPurchases(CustomerName,TotalPurchase)
SELECT CustomerName, SUM(Quantity * UnitPrice) AS TotalPurchases
FROM aSQL3_OrderDetails od
JOIN aSQL3_Orders o ON od.OrderID = o.OrderID
JOIN aSQL3_Customers c ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName

--QUERY TO VIEW
SELECT * FROM #temp_TotalPurchases

--3) Use a User Defined Table Type to store the favorite product information for each customer.
CREATE TYPE FavoriteProductType AS TABLE (
    CustomerID INT,
	CustomerName VARCHAR(50),
    ProductID INT,
    FavProductName VARCHAR(50),
    TotalQuantityOrdered INT
)
--declaring variable and storing table type into it
DECLARE @FavoriteProducts FavoriteProductType
--inserting into variable with parameters
INSERT INTO @FavoriteProducts (CustomerID,CustomerName, ProductID, FavProductName, TotalQuantityOrdered)
--Select query
SELECT CustomerID, CustomerName, ProductID, FavProductName, TotalQuantityOrdered
FROM (
    SELECT
        c.CustomerID,
		c.CustomerName,
        p.ProductID,
        p.ProductName as FavProductName,
        od.Quantity AS TotalQuantityOrdered,
		--this function returns 1,2,3... rows and partitioned by customerID with quantity on top and selecting only one row(rn=1)
        ROW_NUMBER() OVER (PARTITION BY c.CustomerID ORDER BY od.Quantity DESC) AS rn
    FROM aSQL3_Customers c
    JOIN aSQL3_Orders o ON c.CustomerID = o.CustomerID
    JOIN aSQL3_OrderDetails od ON o.OrderID = od.OrderID
    JOIN aSQL3_Products p ON od.ProductID = p.ProductID
) AS SubQuery -- alias for subquery
WHERE rn = 1


