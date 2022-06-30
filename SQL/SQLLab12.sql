create database Lab12
use Lab12
drop database Lab12

go
create table Employee(
	EmployeeID int primary key,
	[Name] varchar(100),
	Tel char(11),
	Email varchar(30)
)

insert Employee values(800100,'Patrick',01648754683,'Patrick@gmail.com')
insert Employee values(800101,'Steve',01648754684,'Steve@gmail.com')
insert Employee values(800102,'John',01648754685,'John@gmail.com')
insert Employee values(800103,'Spark',01648754686,'Spark@gmail.com')
insert Employee values(800104,'Evelyn',01648754687,'Evelyn@gmail.com')
insert Employee values(800105,'Finney',01648754688,'Finney@gmail.com')
insert Employee values(800106,'Taylor',01648754689,'Taylor@gmail.com')
insert Employee values(800107,'Billy',01648754680,'Billy@gmail.com')
insert Employee values(800108,'Alex',01648754681,'Alex@gmail.com')
insert Employee values(800109,'Kate',01648754682,'Kate@gmail.com')

delete from Employee

--Hien thi thong tin cua tat ca nhan vien--
select * from Employee
drop table Employee

go
create table [Group](
	GroupID int primary key,
	GroupName varchar(30),
	LeaderID int
	constraint LIDfk foreign key (LeaderID) references Employee(EmployeeID),
	ProjectID int
	constraint PIDfk foreign key (ProjectID) references Project(ProjectID)
)

insert [Group] values(120001,'PSJ',800101,1500)
insert [Group] values(120002,'SEF',800103,1501)
insert [Group] values(120003,'TBAK',800106,1502)

delete from [Group]

select * from [Group]
drop table [Group]

go
create table Project(
	ProjectID int primary key,
	ProjectName varchar(30),
	StartDate datetime,
	EndDate datetime,
	[Period] int,
	Cost money
)

insert Project values(1500,'Sea Energy Management','6/1/2022','9/1/2022',3,$500)
insert Project values(1501,'E-Government','8/10/2022','12/10/2022',4,$850)
insert Project values(1502,'Black Box','4/20/2022','9/20/2022',5,$600)

delete from Project

select * from Project
Drop table Project

go
create table GroupDetail(
	GroupID int
	constraint GIDfk foreign key (GroupID) references [Group](GroupID),
	EmployeeID int
	constraint EIDfk foreign key (EmployeeID) references Employee(EmployeeID),
	constraint GDpk primary key (GroupID, EmployeeID),
	[Status] char(20)
)

insert GroupDetail values(120001,800100,'Working')
insert GroupDetail values(120001,800101,'Working')
insert GroupDetail values(120001,800102,'Working')
insert GroupDetail values(120002,800103,'Preparing')
insert GroupDetail values(120002,800104,'Preparing')
insert GroupDetail values(120002,800105,'Preparing')
insert GroupDetail values(120003,800106,'Finishing')
insert GroupDetail values(120003,800107,'Finishing')
insert GroupDetail values(120003,800108,'Finishing')
insert GroupDetail values(120003,800109,'Finishing')

delete from GroupDetail

select * from GroupDetail
drop table GroupDetail

--Liet ke danh sach nhan vien dang lam an du an "E-Goverment"--
go
select P.ProjectID, P.ProjectName, G.GroupID, G.GroupName, 
		E.EmployeeID, E.[Name], E.Tel, E.Email
from Project as P
join [Group] as G
on P.ProjectID = G.ProjectID
join GroupDetail as GD
on GD.GroupID = G.GroupID
join Employee as E
on E.EmployeeID = GD.EmployeeID
where GD.GroupID = 120002

--Thong ke so luong nhan vien dang lam viec tai moi nhom--
go
select GD.GroupID, count(E.EmployeeID) as TotalMember 
from GroupDetail as GD
join Employee as E
on GD.EmployeeID = E.EmployeeID
group by GD.GroupID

--Liet ke thong tin ca nhan cua cac truong nhom
go
select G.LeaderID, E.[Name], E.Tel, E.Email, G.GroupID, G.GroupName
from [Group] as G
join Employee as E
on G.LeaderID = E.EmployeeID

--Liet ke tat ca nhan vien dang lam cac du an co ngay bat dau truoc ngay 12/10/2010
select GD.GroupID, GD.EmployeeID, E.[Name], E.Tel, E.Email, P.StartDate
from GroupDetail as GD
join Employee as E
on GD.EmployeeID = E.EmployeeID
join [Group] as G
on GD.GroupID = G.GroupID
join Project as P
on G.ProjectID = P.ProjectID
where P.startDate < '12/10/2022'

--Liet ke tat ca nhan vien du kien se duoc phan vao cac nhom lam viec--
select GD.EmployeeID, E.[Name], E.Tel, E.Email
from GroupDetail as GD
join Employee as E
on GD.EmployeeID = E.EmployeeID
where not exists (select * from GroupDetail as G
		where GD.GroupID = G.GroupID)

--Liet ke tat ca thong tin ve nhan vien, nhom lam viec, du an cua nhung du an da hoan thanh--
select GD.GroupID, G.GroupName, GD.EmployeeID, E.[Name], 
		E.Tel, E.Email, P.ProjectName, GD.[Status]
from GroupDetail as GD
join Employee as E
on GD.EmployeeID = E.EmployeeID
join [Group] as G
on GD.GroupID = G.GroupID
join Project as P
on G.ProjectID = P.ProjectID
where GD.[Status] = 'Finishing'

--Ngay hoan thanh du an phai sau ngay bat dau du an--
alter table Project
add constraint Check_Date check(StartDate < EndDate)

--Truong ten nhan vien khong duoc null--
alter table Employee
alter column [Name] varchar(100) not null

--Truong Trang thai lam viec chi nhan 1 trong 3 gia tri inprogress, pending, done--
alter table GroupDetail
add constraint Check_Status check (Status IN('Working','Preparing','Finishing'))

--Truong gia tri du an phai lon hon 1000--
alter table Project
add constraint Check_Cost check (Cost > 450)

--Truong dien thoai cua nhan vien chi duoc nhap so va phai bat dau bang so 0--
alter table Employee
add constraint Valid_Tel check (Tel like '^1\d{9}|\d{10}$')