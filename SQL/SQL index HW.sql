create table Student (
	StudentNo int primary key,
	StudentName varchar(50),
	StudentAddress varchar(100),
	PhoneNo int,
)

create table Assignment(
	AssignmentNo int primary key,
	[Description] varchar(100)
)

create table Works_assign(
	JobID int primary key,
	StudentNo int
	constraint fkS foreign key (StudentNo) references Student(StudentNo),
	AssignmentNo int
	constraint fkA foreign key (AssignmentNo) references Assignment(AssignmentNo),
	TotalHours int,
	JobDetails xml
)

create table Department(
	DeptNo int primary key,
	deptName varchar(50),
	ManagerName char(30)
)
sp_rename 'Student.PK__Student__32C4C02A6CD362B8','IX_Student','index'
create clustered index IX_Student on Student(StudentNo)

alter index IX_Student on Student rebuild 

create nonclustered index IX_Dept on Department(DeptName,ManagerName)