Create table Students(
id int primary key,
name varchar(70) not null,
age int check (Age>0 AND Age<=100),
CGPA Decimal(5,4) check (CGPA >= 0 AND CGPA <= 4.0)
);