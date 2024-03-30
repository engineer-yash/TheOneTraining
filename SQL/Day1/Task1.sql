CREATE TABLE Student(
StudentId TINYINT,
StudentEnrollment BIGINT,
StudentPhoneNumber INT,
StudentName VARCHAR(100),
StudentEmail NVARCHAR(max),
StudentAge SMALLINT,
Semester DECIMAL,
CurrentSemPercentage FLOAT,
BirthDate DATE,
RegistrationTime DATETIME,
IsAdult BIT,
Hobby CHAR,
FeesPaid SMALLMONEY,
);
INSERT INTO Student(
StudentId,
StudentEnrollment,
StudentPhoneNumber,
StudentName,
StudentEmail,
StudentAge,
Semester, 
CurrentSemPercentage,
BirthDate, 
RegistrationTime,
IsAdult,
Hobby,
FeesPaid)
VALUES 
('101',
'211020107506',
'94094470',
'Yash Gohel',
'gohelyash11@gmail.com',
'21',
'8',
'92.78',
GETUTCDATE(),
GETUTCDATE(),
'1',
'K',
'60000');


SELECT  GETUTCDATE()