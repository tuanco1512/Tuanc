--Bai 1--
create database Lab11
go
use Lab11

create view ProductList as
select ProductID, [Name] from AdventureWorks2019.Production.Product

select * from ProductList

--Bai 2--
create view SalesOrderDetail as
	select pr.ProductID, pr.[Name], od.UnitPrice, od.OrderQty,
od.UnitPrice*od.OrderQty as [Total Price]
	from AdventureWorks2019.Sales.SalesOrderDetail as od
	join AdventureWorks2019.Production.Product as pr
	on od.ProductID = pr.ProductID

select * from SalesOrderDetail

--Bai tap tu lam--
create table Customer(
	CustomerID int primary key,
	CustomerName nvarchar(50),
	Address nvarchar(100),
	Phone varchar(12)
)
drop table Customer

create table Books(
	BookCode int primary key,
	Category nvarchar(50),
	Author nvarchar(50),
	Publisher nvarchar(50),
	Title nvarchar(100),
	Price int,
	Instore int
)

drop table Books

create table BookSold(
	BookSoldID int primary key,
	CustomerID int
	constraint fkCus foreign key (CustomerID) references Customer(CustomerID),
	BookCode int
	constraint fkBkC foreign key (BookCode) references Books(BookCode),
	[Date] datetime,
	Price int,
	Amount int
)

drop table BookSold

insert Books values(121530,N'Văn học',N'Nguyễn Văn A',N'NXB Kim Đồng',N'Giết con chim nhại',120000,120)
insert Books values(121531,N'Văn học',N'Trần Công B',N'NXB Trẻ',N'Tuổi thơ dữ dội',80000,80)
insert Books values(121532,N'Văn học',N'Trương Thanh C',N'NXB giáo dục',N'Tiếng chim hót trong bụi mận gai',100000,100)
insert Books values(121533,N'Văn học',N'Ngô Xuân D',N'NXB lao động',N'Không gia đình',145000,145)
insert Books values(121534,N'Văn học',N'Thái Thu E',N'NXB Tổng hợp',N'Hoàng tử bé',138000,140)

insert BookSold values(100580,101230,121530,'03/14/2022',120000,5)
insert BookSold values(100581,101231,121532,'03/15/2022',100000,10)
insert BookSold values(100582,101232,121534,'03/15/2022',138000,8)
insert BookSold values(100583,101233,121531,'03/15/2022',80000,6)
insert BookSold values(100584,101234,121530,'03/19/2022',120000,7)
insert BookSold values(100585,101235,121530,'04/20/2022',120000,15)
insert BookSold values(100586,101236,121534,'04/21/2022',138000,28)
insert BookSold values(100587,101237,121533,'04/25/2022',145000,32)
insert BookSold values(100588,101238,121532,'05/05/2022',80000,14)
insert BookSold values(100589,101239,121534,'05/10/2022',138000,22)

insert Customer values (101230,N'Nguyễn Thế A','123abc','0124576')
insert Customer values (101231,N'Phùng Mai B','345bgf','0124577')
insert Customer values (101232,N'Nguyễn Trọng C','567lkj','0124578')
insert Customer values (101233,N'Nguyễn Tấn D','122hjk','0124579')
insert Customer values (101234,N'Nguyễn Phi E','658lmn','0124581')
insert Customer values (101235,N'Trương Công G','890htn','0124572')
insert Customer values (101236,N'Ngô Xuân H','256opn','0124574')
insert Customer values (101237,N'Nguyễn Thanh L','540inl','0124576')
insert Customer values (101238,N'Trần Vũ M','854klv','0124578')
insert Customer values (101239,N'Vũ Trung N','470mgj','0124595')

create view BookSolded as
	select B.BookCode, B.Title,B.Price, sum(BS.Amount) as TotalAmount
	from Books as B
	join BookSold as BS
	on B.BookCode = BS.BookCode
	group by B.BookCode, B.Title,B.Price

select * from BookSolded

drop view BookSolded

create view BuyerList as
	select C.CustomerID, C.CustomerName, C.[Address], BS.Amount
	from Customer as C 
	join BookSold as BS 
	on C.CustomerID = BS.CustomerID

select * from BuyerList

create view BuyerList

create view BuyerList_inMay as
	select C.CustomerID, C.CustomerName, C.[Address], B.Title
	from Customer as C 
	join BooKSold as BS
	on C.CustomerID = BS.CustomerID 
	join Books as B
	on B.BookCode = BS.BookCode
	where (Month(getdate()) - Month(BS.Date) = 1)

select * from BuyerList_inMay

create view CustomerSpending as
	select C.CustomerID, C.CustomerName, C.[Address], BS.Price*BS.Amount as TotalSpending
	from Customer as C
	join BookSold as BS
	on C.CustomerID = BS.CustomerID

select * from CustomerSpending

--Bai tap ve nha--
create table Class(
	Classcode varchar(10) primary key,
	HeadTeacher nvarchar(30),
	Room varchar(30),
	TimeSlot char,
	CloseDate datetime
)

create table Student(
	RollNo varchar(10) primary key,
	ClassCode varchar(10)
	constraint Ccodefk foreign key (ClassCode) references Class(ClassCode),
	FullName varchar(30),
	Male bit,
	BirthDate datetime,
	Address varchar(30),
	Provice char(2),
	Email varchar(30)
)

create table [Subject](
	SubjectCode varchar(10) primary key,
	SubjectName varchar(40),
	Wmark bit,
	Pmark bit,
	WTest_per int,
	PTest_per int
)

create table Mark 



