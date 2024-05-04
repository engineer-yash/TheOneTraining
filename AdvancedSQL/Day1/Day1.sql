--Task 1: Apply the Clustered Index 
CREATE TABLE tb_Index(
Id INT PRIMARY KEY,
Name VARCHAR(100),
)
INSERT INTO tb_Index(Id,Name)VALUES(1,'Yashlo'),(2,'Dhulo'),(3,'Pathu'),(4,'Chaddi Gang')
DELETE FROM tb_Index WHERE Id = 1
--Non-Clustered Index on the table.
CREATE NONCLUSTERED INDEX Demon
ON tb_Index(Name ASC)

SELECT * FROM tb_Index

--Task 2: Apply Custom Clustered Index.
CREATE CLUSTERED INDEX DemonSlayer
ON tb_Index(Name DESC)

--Task 3: Create Scalar Function
--Create a function which returns a single value (Full name from First Name and Last Name or Average of marks).
--Full name from First Name and Last Name
CREATE FUNCTION Full_Name(@FirstName varchar(100),@LastName varchar(100))
RETURNS VARCHAR(200)
AS
BEGIN
DECLARE @FullName VARCHAR(200) = @FirstName +' '+ @LastName
RETURN @FullName
END

SELECT dbo.Full_Name('Yash','Gohel') AS FullName FROM tb_Index

-- Write an SQL Function to Check whether the Number is Odd or Even.

--Average of marks
CREATE FUNCTION AverageMarks(@value1 int, @value2 int, @value3 int, @value4 int)
RETURNS float
AS
BEGIN
DECLARE @Result float = (@value1 + @value2 + @value3 + @value4) / 4.0
RETURN @Result
END

SELECT dbo.AverageMarks(34,25,48,44)


-- Write an SQL Function to Check whether the Number is Odd or Even.
CREATE FUNCTION OddEven(@inputValue as int)
RETURNS VARCHAR(10)
AS
BEGIN
DECLARE @CheckNumber Varchar(10)

IF @inputValue % 2 = 0
BEGIN
	SET @CheckNumber = 'Even'
END
ELSE
BEGIN
	SET @CheckNumber = 'Odd'
END
RETURN @CheckNumber
END

SELECT dbo.OddEven(25) AS OddEven

-- Task 4: Create Table-Valued Function
-- Create a function that returns a table value (Separate string in the table or Student records who have marks greater than input values).
CREATE TABLE tb_StudentRecords(
ID int PRIMARY KEY,
Name Varchar(100),
Subject Varchar(100),
Marks int
)
INSERT INTO tb_StudentRecords (ID,Name,Subject,Marks) VALUES (1,'Yash','English',90),(2,'Dhruv','Maths',90),(3,'Parth','Maths',88),(4,'Yash','Maths',84),(5,'Parth','English',56),(6,'Dhruv','Big Data Analysis',70)

select * from tb_StudentRecords

--Table Function
CREATE FUNCTION MarksSeperator(@inputValue as int)
RETURNS TABLE
AS
RETURN(
SELECT * FROM tb_StudentRecords WHERE Marks >= @inputValue
)

SELECT * FROM dbo.MarksSeperator(87)