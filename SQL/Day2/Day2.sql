--Task 1
--(a)Customer Table Creation
CREATE TABLE Customer(
CustomerId BIGINT NOT NULL PRIMARY KEY,
FirstName NVARCHAR(200),
LastName NVARCHAR(200),
MobileNo NVARCHAR(12),
BirthDate DATETIME,
UserName NVARCHAR(100),
UserEmailAddress NVARCHAR(200),
Password NVARCHAR(200),
HomeAddress NVARCHAR(1000),
City NVARCHAR(100),
State NVARCHAR(100),
ZipCode NVARCHAR(10),
InsertedDate DATETIME
);

INSERT INTO Customer VALUES('3','Yash','Gohel','9409447069',GETDATE(),
'yash.gohel','gohelyash11@gmail.com','yash@123','Annpurna Street, Jamkandorna',
'Rajkot','Gujarat','360405',GETDATE());
select * FROM Customer
UPDATE Customer SET BirthDate = '2003-04-19 18:26:01.670';

--(b)Employee Table Creation
CREATE TABLE Employee(
EmployeeId BIGINT NOT NULL PRIMARY KEY,
FirstName NVARCHAR(200),
LastName NVARCHAR(200),
MobileNo NVARCHAR(12),
BirthDate DATETIME,
UserName NVARCHAR(100),
UserEmailAddress NVARCHAR(200),
Password NVARCHAR(200),
HomeAddress NVARCHAR(1000),
City NVARCHAR(100),
State NVARCHAR(100),
ZipCode NVARCHAR(10),
InsertedDate DATETIME
);
INSERT INTO Employee VALUES('1','Yash','Gohel','9409447069',GETDATE(),
'yash.gohel','gohelyash11@gmail.com','yash@123','Annpurna Street, Jamkandorna',
'Rajkot','Gujarat','360405',GETDATE());
select * FROM Employee
UPDATE Employee SET BirthDate = '2003-04-19 18:26:01.670';

--(c)Orders Table Creation
CREATE TABLE Orders(
OrderId BIGINT NOT NULL PRIMARY KEY,
CustomerId BIGINT FOREIGN KEY REFERENCES Customer(CustomerId),
EmployeeId BIGINT FOREIGN KEY REFERENCES Employee(EmployeeId),
OrderDate DATETIME,
RequiredDate DATETIME,
ShippingDate DATETIME,
Amount DECIMAL(18,4));

INSERT INTO Orders VALUES('1','2','3',GETDATE(),'2003-04-19 21:00:12:452','2003-02-19 12:08:12:475','18');
UPDATE Orders SET Amount = '15'
SELECT * FROM Orders;

--(d)OrderDetails Table Creation
CREATE TABLE OrderDetails(
OrderDetailsId BIGINT PRIMARY KEY,
OrderId BIGINT FOREIGN KEY REFERENCES Orders(OrderId),
ItemName NVARCHAR(500),
UnitPrice DECIMAL(18,4),
Qty INT,
TotalAmount DECIMAL(18,4),
DiscountRate DECIMAL(18,2),
DiscountAmount DECIMAL(18,4),
FinalAmount DECIMAL(18,4),
InsertedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
IsDeleted BIT DEFAULT 0
);

INSERT INTO OrderDetails VALUES('15661','1','Nike Shoes','599.5217','5','1000.000','10','100','900','','');
select * from OrderDetails


--TASK 2
--Altering All DATETIME to DEFAULT GETDATE() Function Using DEFAULT CONSTRAINT
--Customer
ALTER TABLE Customer
ADD CONSTRAINT Customer_BDATE
DEFAULT GETDATE() FOR BirthDate;
--Checking DEFAULT
SELECT * FROM Customer
UPDATE Customer SET BirthDate = '';
UPDATE Customer SET BirthDate = '2003-04-19 12:00:45:864' WHERE CustomerId = 1;

ALTER TABLE Customer
ADD CONSTRAINT C_Inserted_Date
DEFAULT GETDATE() FOR InsertedDate;
--Checking DEFAULT
UPDATE Customer SET InsertedDate = '2000-03-07 18:26:01.670' WHERE CustomerId = 2;
SELECT * FROM Customer;

--Employee
ALTER TABLE Employee
ADD CONSTRAINT constraint_name
DEFAULT GETDATE() FOR BirthDate;
--Checking DEFAULT
SELECT * FROM Employee
UPDATE Employee SET BirthDate = '';

ALTER TABLE Employee
ADD CONSTRAINT Any_Name
DEFAULT GETDATE() FOR InsertedDate;
--Checking DEFAULT
UPDATE Employee SET InsertedDate = '';
SELECT * FROM Employee;

--Order
ALTER TABLE Orders
ADD CONSTRAINT OrderDateDEFAULT
DEFAULT GETDATE() FOR OrderDate;

ALTER TABLE Orders
ADD CONSTRAINT RequiredDateDEFAULT
DEFAULT GETDATE() FOR RequiredDate;

ALTER TABLE Orders
ADD CONSTRAINT ShippingDateDEFAULT
DEFAULT GETDATE() FOR ShippingDate;
--Checking DEFAULT
UPDATE Orders SET OrderDate = '';
SELECT * FROM Orders;





