if exists (select*from sys.databases where name like 'Example6')
	drop database Example6

go
create database Example6

go
use Example6

go
create table Student(
	Name nvarchar(30),
	Ages int,
	Date_of_Birth date,
	Class_ID int,
	constraint fk foreign key (Class_ID) references Class(Class_ID)
)

go
insert Student values(N'Tuấn',22,'12-15-2000',2)
update Student set Name='Patrick' where Name=N'Tuấn'
delete from Student where Date_of_Birth='12-15-2000'

go
alter table Student
	add Student_ID int primary key identity(1000000,1)

go
create table Class(
	Class_ID int primary key identity,
	Class_Name varchar(30)
)

go
insert Class(Class_Name) values ('T2201M')
insert Class(Class_Name) values ('T2202M')

go
select*from Student