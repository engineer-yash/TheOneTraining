use [Yash Gohel]
CREATE TABLE Company(
CompanyId INT IDENTITY(1,1) PRIMARY KEY,
[Name] NVARCHAR(50),
Symbol NVARCHAR(50),
Exchange NVARCHAR(50),
Industry NVARCHAR(50),
Sector NVARCHAR(50)
);
CREATE TABLE Stock(
StockId INT IDENTITY(1,1) PRIMARY KEY,
CompanyId INT FOREIGN KEY REFERENCES Company(CompanyId),
[Date] DATE
);
CREATE TABLE [Transaction](
TransactionId INT IDENTITY(1,1),
StockId INT FOREIGN KEY REFERENCES Stock(StockId),
TransactionType NVARCHAR(50),
Quantity INT,
Price DECIMAL,
[Date] DATE
);
CREATE TABLE [User](
UserId INT IDENTITY(1,1) PRIMARY KEY,
[Name] VARCHAR(50),
[Email] VARCHAR(50),
[Password] VARCHAR(50)
);
CREATE TABLE Watchlist(
WatchlistId INT IDENTITY(1,1) PRIMARY KEY,
[UserId] INT FOREIGN KEY REFERENCES [User](UserId),
CompanyId INT FOREIGN KEY REFERENCES Company(CompanyId)
);
INSERT INTO Company ([Name],Symbol,Exchange,Industry,Sector) VALUES
('Apple Inc.','AAPL','NASDAQ','Consumer Electronics','Technology'),
('Microsoft Corp.','MSFT','NASDAQ','Software','Technology'),
('Alphabet Inc.','GOOGL','NASDAQ','Online Services','Technology'),
('Amazon.com,Inc.','AMZN','NASDAQ','E-Commerce','Consumer Discretionary'),
('Facebook, Inc.','FB','NASDAQ','Social Networking','Communication Services'),
('Johnson & Johnson','JNJ','NYSE','Pharmaceuticals','Health Care'),
('Visa Inc.','V','NYSE','Payment Services','Financials'),
('Procter & Gamble','PG','NYSE','Consumer Goods','Consumer Staples'),
('Coca-Coca Co','KO','NYSE','Beverages - Soft','Consumer Staples'),
('Verizon Comm.Inc','VZ','NYSE','Telecom - Domestic','Communication Services')
-- Insert Records into Users Table
INSERT INTO [User] ([Name],Email,Password) VALUES
('John Smith','john.smith@example.com','p@ssw0rd1'),
('Jane Doe','jane.doe@example.com','p@ssw0rd1'),
('Bob Johnson','bob.johnson@example.com','mysecurepassword'),
('Emily Chen','emily.chen@example.com','password123'),
('Michael Rodriguez','michael.rodriguez@example.com','secretpassword')
-- Insert Records into Stocks Table
INSERT INTO Stock (CompanyId,[Date]) Values
(1,'2024-01-01'),
(2,'2024-01-25'),
(3,'2024-02-02'),
(4,'2024-02-09'),
(5,'2024-02-15'),
(6,'2024-01-21'),
(7,'2024-01-18'),
(8,'2024-02-28'),
(9,'2024-01-01'),
(10,'2024-03-01'),
(2,'2024-03-01'),
(3,'2023-12-01'),
(5,'2023-01-01'),
(6,'2023-02-01'),
(8,'2023-09-15'),
(1,'2022-03-14'),
(10,'2022-03-11'),
(3,'2024-02-06'),
(4,'2024-02-06'),
(7,'2024-01-17'),
(9,'2024-03-12'),
(3,'2024-02-25'),
(2,'2024-01-10'),
(7,'2024-03-01'),
(3,'2024-02-25')
-- Insert Records into Transaction Table
INSERT INTO [Transaction](StockId,TransactionType,Quantity,Price,[Date]) VALUES
(1,'Cash Trades',10,5000,'2024-01-01'),
(2,'Spot Trades',5,10000,'2024-01-25'),
(3,'Tom Trades',15,15000,'2024-02-02'),
(4,'Swaps',20,7000,'2024-02-09'),
(5,'Forward Transactions',50,5000,'2024-02-15'),
(6,'Swaps',25,8750,'2024-01-21'),
(7,'Cash Trades',20,10000,'2024-01-18'),
(8,'Tom Trades',5,5000,'2024-02-28'),
(9,'Spot Trades',8,16000,'2024-01-01'),
(10,'Forward Transactions',100,10000,'2024-03-01'),
(11,'Spot Trades',15,30000,'2024-03-01'),
(12,'Forward Transactions',28,2800,'2023-12-01'),
(13,'Cash Trades',30,15000,'2023-01-01'),
(14,'Swaps',200,70000,'2023-02-01'),
(15,'Spot Trades',115,230000,'2023-09-15'),
(16,'Cash Trades',10,8000,'2022-03-14'),
(17,'Swaps',200,7500,'2022-03-11'),
(18,'Cash Trades',102,50000,'2024-02-06'),
(19,'Tom Trades',225,250000,'2024-02-06'),
(20,'Tom Trades',80,89000,'2024-01-17'),
(21,'Cash Trades',62,65000,'2024-03-12'),
(22,'Forward Transactions',150,300000,'2024-02-25'),
(23,'Swaps',47,147000,'2024-01-10'),
(24,'Forward Transactions',95,195000,'2024-03-01'),
(25,'Tom Trades',300,600000,'2024-02-25')
-- Insert Records Into WatchList
INSERT INTO WatchList (UserId,CompanyId) VALUES
(1,5),
(4,10),
(5,6),
(2,3),
(3,7),
(1,2),
(2,9),
(3,4),
(5,8),
(4,1),
(3,8),
(1,4),
(5,7),
(2,10),
(1,9),
(2,7),
(5,5),
(1,1),
(2,2),
(3,3),
(4,4),
(3,5),
(5,1),
(4,3)

select * from Company
select * from Stock
select * from [User]
select * from Watchlist
select * from [Transaction]

--(1) Transaction History Report: This report shows all transactions for a given user within a specified date range. It includes the transaction type, stock symbol, quantity, price, and total value.

--Using JOIN
SELECT u.UserId,u.[Name],t.TransactionType, c.Symbol AS StockSymbol, t.Quantity, t.Price, (t.Quantity * t.Price) AS TotalValue
FROM [Transaction] t
JOIN Stock s ON t.StockId = s.StockId
JOIN Company c ON s.CompanyId = c.CompanyId
JOIN Watchlist w ON c.CompanyId = w.CompanyId
JOIN [User] u ON u.UserId = w.UserId
WHERE w.UserId = 2 AND t.[Date] BETWEEN '2024-01-01' AND '2024-02-28'

--Using SP
CREATE OR ALTER PROCEDURE TransactionHistory(@ID INT ,@StartDate VARCHAR(10) ,@EndDate VARCHAR(10))
AS
BEGIN
SELECT u.UserId,u.[Name],t.TransactionType, c.Symbol AS StockSymbol, t.Quantity, t.Price, (t.Quantity * t.Price) AS TotalValue
FROM [Transaction] t
JOIN Stock s ON t.StockId = s.StockId
JOIN Company c ON s.CompanyId = c.CompanyId
JOIN Watchlist w ON c.CompanyId = w.CompanyId
JOIN [User] u ON u.UserId = w.UserId
WHERE w.UserId = @ID AND t.[Date] BETWEEN @StartDate AND @EndDate
END
GO

EXEC TransactionHistory @ID=3, @StartDate='2022-02-05', @EndDate='2024-03-01'



INSERT INTO [User] VALUES ('Jethalal','jethalal@official.gmail.com','nathikevo123');

--(2) Watchlist Report: This report shows the current prices of all stocks on a user's watchlist. It includes the stock symbol, current price, and percentage change from the previous day.
SELECT 
  c.Symbol, 
  s.[Date], 
  t.price AS PreviousDayPrice, 
  (t.Price + 100) AS CurrentPrice, 
  CONVERT(
    VARCHAR, 
    cast(
      (
        (
          (
            (t.Price + 100) * 100
          ) / t.Price
        ) - 100
      ) AS DECIMAL (10, 2)
    )
  )+ ' %' AS PercentageChange 
FROM 
  Watchlist w 
  JOIN [User] u ON w.UserId = u.UserId 
  JOIN Company c ON w.CompanyId = c.CompanyId 
  JOIN Stock s ON c.CompanyId = s.CompanyId 
  JOIN [Transaction] t ON s.StockId = t.StockId 
WHERE 
  u.UserId = 2 
  AND s.[Date] = CONVERT(DATE,DATEADD(DD,-1,GETDATE()))
  ORDER BY PercentageChange DESC

--INSERT DATA TO PREVIOUS DAY
DECLARE @PreviousDate AS DATE = DATEADD(DD,-1,GETDATE())
BEGIN TRANSACTION
Insert into Stock Values (3,@PreviousDate),(4,@PreviousDate),(7,@PreviousDate),(2,@PreviousDate);
GO
--CHANGE THE STOCK ID
DECLARE @PreviousDate AS DATE = DATEADD(DD,-1,GETDATE())
BEGIN TRANSACTION
Insert into [Transaction] Values (38,'Card',20,120000,@PreviousDate),(39,'Cash',50,1200,@PreviousDate),(40,'Bitcoin',5,150000,@PreviousDate),(41,'Card',40,4000,@PreviousDate)
GO
ROLLBACK TRANSACTION

--(3) Top Gainers and Losers Report: This report shows the top 5 gainers and top 5 losers for a given exchange, ranked by percentage change from the previous day. It includes the stock symbol, current price, and percentage change.

--CTE For TOP 5 Gainers
WITH Gainers AS(
SELECT TOP 5
  c.Symbol, 
  t.price AS PreviousDayPrice, 
  (t.Price + 100) AS CurrentPrice, 
  CONVERT(
    VARCHAR, 
    cast(
      (
        (
          (
            (t.Price + 100) * 100
          ) / t.Price
        ) -100
      ) AS DECIMAL (10, 2)
    )
  )+ ' %' AS PercentageChange 
FROM 
  Watchlist w 
  JOIN [User] u ON w.UserId = u.UserId 
  JOIN Company c ON w.CompanyId = c.CompanyId 
  JOIN Stock s ON c.CompanyId = s.CompanyId 
  JOIN [Transaction] t ON s.StockId = t.StockId
  WHERE c.Exchange = 'NASDAQ'--'NYSE'
  GROUP BY c.Symbol,t.Price
  ORDER BY PercentageChange DESC
  ),
  --CTE For TOP 5 Losers
  Losers AS(
SELECT TOP 5
  c.Symbol, 
  t.price AS PreviousDayPrice, 
  (t.Price - 50) AS CurrentPrice, 
  CONVERT(
    VARCHAR, 
    cast(
      (
        (
          (
            (t.Price - 50) * 100
          ) / t.Price
        ) -100
      ) AS DECIMAL (10, 2)
    )
  )+ ' %' AS PercentageChange 
FROM 
  Watchlist w 
  JOIN [User] u ON w.UserId = u.UserId 
  JOIN Company c ON w.CompanyId = c.CompanyId 
  JOIN Stock s ON c.CompanyId = s.CompanyId 
  JOIN [Transaction] t ON s.StockId = t.StockId
  WHERE c.Exchange = 'NASDAQ'--'NYSE'
  GROUP BY s.StockId,c.Symbol,t.Price
  ORDER BY PercentageChange DESC
  )
  SELECT * FROM Gainers
  UNION ALL
  SELECT * FROM Losers


  --Trying Rollback
  BEGIN Transaction
  update [Transaction]
  SET Price = 1200
  Where TransactionId = 35
  go
  --ROLLBACK TRANSACTION