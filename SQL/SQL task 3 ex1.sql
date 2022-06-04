IF EXISTS (SELECT * FROM sys.databases	WHERE Name LIKE 'Example5')
	DROP DATABASE Example5

GO
CREATE DATABASE Example5

GO
USE Example5

GO
CREATE TABLE LopHoc(
	MaLopHoc INT PRIMARY KEY IDENTITY,
	TenLopHoc VARCHAR(10)
)

GO
INSERT INTO LopHoc(TenLopHoc) VALUES ('T2201M')
INSERT INTO LopHoc(TenLopHoc) VALUES ('T2202M')
INSERT INTO LopHoc(TenLopHoc) VALUES ('T2203M')
INSERT INTO LopHoc(TenLopHoc) VALUES ('T2204M')
SELECT*FROM LopHoc

GO
CREATE TABLE SinhVien(
	MaSV INT PRIMARY KEY,
	TenSV VARCHAR(40),
	MaLopHoc INT,
	CONSTRAINT fk FOREIGN KEY (MaLopHoc) REFERENCES LopHoc(MaLopHoc)
)

GO
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (1,'Alpha',1)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (2,'Alpha1',1)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (3,'Beta',2)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (4,'Beta1',2)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (5,'Charlie',3)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (6,'Charlie1',3)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (7,'Delta',4)
INSERT INTO SinhVien(MaSV,TenSV,MaLopHoc) VALUES (8,'Delta1',4)
SELECT*FROM SinhVien

go
create table SanPham(
	MaSP int not null,
	TenSP varchar(40) null
)

go
select*from SanPham

go
create table StoreProduct(
	ProductID int not null,
	Name varchar(40) not null,
	Price money not null default(100)
)

go
insert into StoreProduct (ProductID, Name) values (111, 'Rivets',100)
select*from StoreProduct

go
create table ContactPhone(
	Person_ID int identity(500,1) not null,
	MobileNumber bigint not null,
)

go
insert ContactPhone(MobileNumber) values (123456)
insert ContactPhone(MobileNumber) values (456789)
select*from ContactPhone

go
create table CellularPhone(
	Person_ID uniqueidentifier default newid() not null,
	personName varchar(60) not null,
)

go
insert into CellularPhone(personName) values('Cong Tuan')
select*from CellularPhone

go
create table ContactPhone1(
	Person_ID int primary key,
	MobileNumber bigint unique,
	ServiceProvider varchar(30),
	LandlineNumber bigint unique 
)

go
insert into	ContactPhone1 values (103, 123456780, 'Tuan3',15)
insert into	ContactPhone1 values (102, 012345678, 'Hang', 12)
select*from ContactPhone1

go
create table PhoneExpenses(
	Expense_ID int primary key,
	MobileNumber bigint foreign key references ContactPhone1 (MobileNumber),
	Amount bigint check (Amount>0)
)

go
insert PhoneExpenses values (2, 123456789, 1)
select*from PhoneExpenses

go
alter table ContactPhone1
	alter column ServiceProvider varchar(5)

go
alter table ContactPhone1
	drop column ServiceProvider

go
alter table ContactPhone1
	add constraint CHK_RC check (RentalCharges>0)

go
alter table ContactPhone1
	drop constraint CHK_RC



