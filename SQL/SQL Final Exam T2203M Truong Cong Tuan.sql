CREATE DATABASE AZBank

GO
USE AZBank

GO
CREATE TABLE Customer(
	CustomerId INT PRIMARY KEY,
	[Name] NVARCHAR(50),
	City NVARCHAR(50),
	Country NVARCHAR(50),
	Phone NVARCHAR(15),
	Email NVARCHAR(50),
)

GO
INSERT Customer VALUES (120500,N'Trương Công Tuấn',N'Hà Nội',N'Việt Nam','0345351512','CongTuan@gmail.com')
INSERT Customer VALUES (120501,N'Phùng Mai Lam',N'Hà Nội',N'Việt Nam','0345352306','PhungLam@gmail.com')
INSERT Customer VALUES (120502,N'Ngô Thu Trang',N'Lào Cai',N'Việt Nam','0345352510','ThuTrang@gmail.com')
INSERT Customer VALUES (120503,N'Nguyễn Hà Vi',N'Hải Phòng',N'Việt Nam','0345354528','HaVi@gmail.com')
INSERT Customer VALUES (120504,N'Nguyễn Thủy Tiên',N'Hòa Bình',N'Việt Nam','0345357893','ThuyTien@gmail.com')

GO
CREATE TABLE UserAccount(
	AccountNumber CHAR(9) PRIMARY KEY,
	CustomerId INT CONSTRAINT CId_fk FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId),
	Balance MONEY NOT NULL,
	MinAccount MONEY
)

GO
INSERT UserAccount VALUES ('TC1512',120500,1250,1200)
INSERT UserAccount VALUES ('PL2306',120501,1360,1300)
INSERT UserAccount VALUES ('TT2510',120502,1520,1500)
INSERT UserAccount VALUES ('HV4528',120503,1450,1400)
INSERT UserAccount VALUES ('TT7893',120504,1540,1520)

GO
CREATE TABLE CustomerTransaction(
	TransactonId INT PRIMARY KEY,
	AccountNumber CHAR(9) CONSTRAINT AN_fk FOREIGN KEY (AccountNumber) REFERENCES UserAccount(AccountNumber),
	TransactionDate SMALLDATETIME,
	Amount MONEY,
	DepositorWithdraw BIT --Depositor = 0 Withdraw = 1--
)

GO
INSERT CustomerTransaction VALUES (105060,'TC1512','06/08/2022',151220,1)
INSERT CustomerTransaction VALUES (105061,'PL2306','05/09/2021',150000,0)
INSERT CustomerTransaction VALUES (105062,'TT2510','12/25/2020',1400,0)
INSERT CustomerTransaction VALUES (105063,'HV4528','02/14/2021',300000,1)
INSERT CustomerTransaction VALUES (105064,'TT7893','03/14/2022',750000,0)

--Write a query to get all customers from Customer table who libe in 'Hanoi'--
GO
SELECT * FROM Customer
WHERE City = N'Hà Nội'

--Write a query to get account information of the customers (Name, Phone, Email, AccountNumber, Balance)--
GO
SELECT C.[Name], C.Phone, C.Email, UA.AccountNumber, UA.Balance 
FROM Customer AS C
JOIN UserAccount AS UA
ON C.CustomerId = UA.CustomerId

--Create a CHECK constraint on Amount column of CustomerTransaction table to check that each transaction amount is greater than 0 and less than or equal $1000000--
GO
ALTER TABLE CustomerTransaction
ADD CONSTRAINT Check_Amount CHECK (0 < Amount AND Amount <= 1000000)

--Create a view named vCustomerTransactions that display Name, AccountNumber, TransactionDate, Amount, and DepositorWithdraw from Customer, CustomerAccount and CustomerTransaction tables--
GO
CREATE VIEW vCustomerTransactions AS
SELECT C.[Name], UA.AccountNumber, CT.TransactionDate, CT.Amount, CT.DepositorWithdraw
FROM Customer AS C
JOIN UserAccount AS UA
ON C.CustomerId = UA.CustomerId
JOIN CustomerTransaction AS CT
ON UA.AccountNumber = CT.AccountNumber

GO
SELECT * FROM vCustomerTransactions