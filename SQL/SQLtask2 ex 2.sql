create database EXAMPLE3
use EXAMPLE3

create table Contacts
(MailID varchar(20),
 Name ntext,
 TelephoneNumber int)

alter table Contacts add Address nvarchar(50)

insert into Contacts values ('abc@yahoo.com',N'Nguyễn Văn A',123456789,N'Hà Nội')
insert into Contacts values ('abcd@yahoo.com',N'Nguyễn Văn A',123456789,N'Hà Nội')
insert into Contacts values ('abce@yahoo.com',N'Nguyễn Văn A',123456789,N'Hà Nội')
insert into Contacts values ('abcf@yahoo.com',N'Nguyễn Văn A',123456789,N'Hà Nội')

select * from Contacts

delete from Contacts where MailID='abc@yahoo.com'

update Contacts set Name=N'Trương Công Tuấn' where MailID='abcf@yahoo.com'

create login example3 with password='123456'
create user example3 from login example3