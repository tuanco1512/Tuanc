IF EXISTS (SELECT * FROM sys.databases	WHERE Name LIKE 'SmallProject1')
	DROP DATABASE SmallProject1

GO
CREATE DATABASE SmallProject1

GO
USE SmallProject1

go
create table Order_(
	Order_ID int primary key,
	Customer_ID int identity(3761,1),
	Order_Date date,
	Status varchar(50)
	constraint fk foreign key (Customer_ID) references Customer(Cus_ID)
)

go
insert Order_(Order_ID,Order_Date,Status) values(123,'11-18-2009','Shipping')
insert Order_(Order_ID,Order_Date,Status) values(124,'3-6-2015','Odering')
insert Order_(Order_ID,Order_Date,Status) values(125,'12-15-2020','Receiving')

go
create table Customer(
	Cus_ID int primary key identity(3761,1),
	Name nvarchar(30),
	Address nvarchar(50),
	Tell int,
	Status varchar(50)
)

go
insert Customer(Name,Address,Tell,Status) Values(N'Hằng',N'abcxyz123 Hà Nội',0123456789,'Selecting')
insert Customer(Name,Address,Tell,Status) Values(N'Trang',N'abcxyz456 Lào Cai',0987654321,'ordering')
insert Customer(Name,Address,Tell,Status) Values(N'Tuấn',N'deftuv123 Hà Nội',0135798642,'ordering')

go
create table Product(
	Product_ID int primary key identity(1201,1),
	Product_Name nvarchar(30),
	pro_Description nvarchar(50),
	Unit nvarchar(30),
	Price int, /*Giá bán sản phẩm tại thời điểm hiện tại*/
	Qty int, /*Số lượng sản phẩm hiện tại ở kho*/
	Status varchar(50)
)

go
insert Product(Product_Name,pro_Description,Unit,Price,Qty,Status) values(N'Máy Tính T450',N'Máy Nhập Mới',N'Chiếc',1000,50,'Stocking')
insert Product(Product_Name,pro_Description,Unit,Price,Qty,Status) values(N'Điện Thoại Nokia5670',N'Điện Thoại Đang HOT',N'Chiếc',200,100,'Stocking')
insert Product(Product_Name,pro_Description,Unit,Price,Qty,Status) values(N'Máy In SamSung 450',N'Máy In Đang Ế',N'Chiếc',100,80,'Stocking')
insert Product(Product_Name,pro_Description,Unit,Price,Qty,Status) values(N'Màn Hình HP 1080',N'Màn Hình Đang HOT',N'Chiếc',500,100,'Stocking')

go
create table Order_Detail(
	Order_ID int,
	Product_ID int,
	Price int, /*Giá bán sản phẩm tại thời điểm bán*/
	Qty int /*Số lượng sản phẩm khách hàng đã mua*/
	constraint fk1 foreign key (Order_ID) references Order_(Order_ID),
	constraint fk2 foreign key (Product_ID) references Product(Product_ID),
	constraint pk primary key (Order_ID, Product_ID)
)

go
insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(123,1201,1000,1)
insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(123,1202,200,2)
insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(123,1203,100,1)

insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(124,1201,1000,1)
insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(124,1202,200,3)

insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(125,1202,200,1)
insert Order_Detail(Order_ID,Product_ID,Price,Qty) values(125,1203,100,3)

go
select*from Customer
	order by Name

go
select*from Order_

go
select*from Order_Detail
	where Order_ID = 123;

go
select*from Product
	order by Price desc
