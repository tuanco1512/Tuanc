select SUM(standardcost) from Production.ProductCostHistory
select avg(standardcost) from Production.ProductCostHistory
select max(standardcost) from Production.ProductCostHistory
select count(*) from Production.ProductPhoto
select * from Production.ProductPhoto
select GETDATE()
select DATEPART(hh,GETDATE()) 
select CONVERT(varchar(50),GETDATE(),103)
select DB_ID('adventureworks2019')
select ABS(-43)
select DATENAME(dw,'6/3/2022')
/*more at SQL 3 youtube*/