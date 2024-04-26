create database studentDetails;

use studentDetails;

create table Details (
   StudentId int,
   StudentName varchar(50),
   StudentEmail varchar(50),
   StudentPhoneNo int,
   StudentAddress varchar(100)
);

alter table Details add PanName varchar(50);

alter table Details change column StudentAddress  CommunicatonAddress varchar(100);

show tables;

select * from Details;

alter table Details add column StudentRegNo int After StudentName;

insert into Details (StudentId,StudentName,StudentRegNo,StudentEmail,StudentPhoneNo,CommunicatonAddress,PanName) values (1,'Dharsan',25,'dharsan@gmail.com',96556031,'3/134-1 murugan kovil street','Dharsan S');
select * from Details;

truncate table Details;

DELETE FROM Details
WHERE PanName IS NULL ;

insert into Details (StudentId,StudentName,StudentRegNo,StudentEmail,StudentPhoneNo,CommunicatonAddress,PanName) values 
(1,'Dharsan',25,'dharsan@gmail.com',96556031,'3/134-1 murugan kovil street','Dharsan S'), 
(2,'santhosh',31,'santhosh@gmail.com',455667,'coimabtore','Santhosh'),
(3,'swathi',36,'swaathi@gmail.com',67890,'coimbatore','swathi '),
(4,'sathya',56,'sthiya@gmail.com',845363,'coimabtore','sathya'),
(5,'rohith',45,'rohith@gmail.com',45677,'pollachi','rohith')
;

use Assignment;
create table Programmer(name varchar(8) not null,DateofBirth date not null, DateofJoining date not null,sex varchar(1) not null,Prof1 varchar(8),Prof2 varchar(8),Salary int not null );

create table Software(name varchar(8) not null,title varchar(20) not null,dev_in varchar(8) not null, scost decimal(7,2),dcost int, sold int);

create table Studies(name varchar(8) not null,splace varchar(9) not null,course varchar(5) not null, ccost varchar(5) not null);
use Assignment;

INSERT INTO Programmer (name, DateofBirth, DateofJoining, sex, Prof1, Prof2, Salary)
VALUES ('somdutt', STR_TO_DATE('21-Apr-66', '%d-%b-%y'), STR_TO_DATE('21-Apr-92', '%d-%b-%y'), 'm', 'pascal', 'basic', 3200);

insert into Software (name,title,dev_in,scost,dcost,sold) values ('somdutt','parachutes','basic',399.95,6000,43);

insert into Studies (name, splace, course, ccost) values ('somdutt','sabhari','pgdca',4500) , ('devdutt','bdps','dcs',5000);

SELECT AVG(sold) AS AverageSellingCost FROM Software WHERE dev_in = 'pascal';

SELECT name, TIMESTAMPDIFF(YEAR, CURDATE(), DateofBirth) AS age FROM Programmer;

SELECT p.name,TIMESTAMPDIFF(YEAR, p.DateofBirth, CURDATE()) AS age FROM Programmer p JOIN Studies s ON p.name = s.name WHERE s.course = 'dcs';

SELECT MAX(sold) AS MaxCopiesSold FROM Software;
use Assignment;

SELECT name, DateofBirth FROM Programmer WHERE MONTH(DateofBirth) = 1;

SELECT MIN(ccost) AS lowest_course_fee FROM Studies;

SELECT COUNT(*) AS pgdca_count FROM Studies WHERE course = 'pgdca';

SELECT SUM(sold * scost) AS revenue FROM Software WHERE dev_in = 'C';

use Assignment;

SELECT * FROM Software WHERE name = 'Ramesh';

SELECT COUNT(*) AS number_Programmer FROM Studies WHERE splace = 'SABHARI';

SELECT * FROM Software WHERE sold > 20000;

SELECT title, CEIL(dcost/scost) AS copies_to_sell FROM Software;

SELECT MAX(dcost) AS costliest_software FROM Software WHERE dev_in = 'BASIC';

SELECT * FROM Software WHERE sold * scost >= dcost;

SELECT COUNT(*) AS num_packages FROM Software WHERE dev_in = 'dbase';

SELECT COUNT(*) AS num_programmers FROM Studies WHERE splace = 'paragathi';

SELECT COUNT(*) AS num_programmers FROM Studies WHERE ccost BETWEEN 5000 AND 10000;

SELECT AVG(ccost) AS average_course_fee FROM Studies;

SELECT * FROM Programmer WHERE Prof1 = 'C' OR Prof2 = 'C';

SELECT COUNT(*) AS num_programmers FROM Programmer WHERE Prof1 = 'Cobol' OR Prof2 = 'Cobol' OR Prof1 = 'Pascal' OR Prof2 = 'Pascal';

SELECT COUNT(*) AS num_programmers FROM Programmer WHERE Prof1 NOT IN ('Pascal', 'C') AND Prof2 NOT IN ('Pascal', 'C');

SELECT DATEDIFF(CURRENT_DATE, DateofBirth) AS oldest_age FROM Programmer WHERE sex = 'm' ORDER BY DateofBirth ASC LIMIT 1;

SELECT AVG(DATEDIFF(CURRENT_DATE, DateofBirth)) AS average_age FROM Programmer WHERE sex = 'f';

SELECT name, DATEDIFF(CURRENT_DATE, DateofJoining)/365 AS experience_years FROM Programmer ORDER BY experience_years DESC;

SELECT name FROM Programmer WHERE MONTH(DateofBirth) = MONTH(CURRENT_DATE);

SELECT COUNT(*) AS num_female_programmers FROM Programmer WHERE sex = 'f';

SELECT DISTINCT Prof1, Prof2 FROM Programmer WHERE sex = 'm';

SELECT AVG(Salary) AS average_salary FROM Programmer;

SELECT COUNT(*) AS num_people FROM Programmer WHERE Salary BETWEEN 2000 AND 4000;

SELECT * FROM Programmer WHERE Prof1 NOT IN ('Clipper', 'Cobol', 'Pascal') AND Prof2 NOT IN ('Clipper', 'Cobol', 'Pascal');

SELECT COUNT(*) AS num_female_programmers FROM Programmer WHERE sex = 'f' AND Prof1 = 'C' AND DATEDIFF(CURRENT_DATE, DateofBirth) > 24;

SELECT name FROM Programmer WHERE DAYOFYEAR(DateofBirth) BETWEEN DAYOFYEAR(CURRENT_DATE) AND DAYOFYEAR(DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY));

SELECT * FROM Programmer WHERE DATEDIFF(CURRENT_DATE, DateofJoining) < 365;

SELECT * FROM Programmer WHERE DATEDIFF(DateofJoining, DATE_SUB(CURRENT_DATE, INTERVAL 2 YEAR)) <= 0;

SELECT title, (dcost - (sold * scost)) AS amount_to_recover FROM Software WHERE sold * scost < dcost;

SELECT title FROM Software WHERE sold = 0;

SELECT scost FROM Software WHERE name = 'Mary';

SELECT DISTINCT splace FROM Studies;

SELECT COUNT(DISTINCT course) AS num_courses FROM Studies;

SELECT name FROM Programmer WHERE name LIKE '%a%a%';

SELECT name FROM Programmer WHERE LENGTH(name) <= 5;

SELECT COUNT(*) AS num_female_programmers FROM Programmer WHERE sex = 'f' AND Prof1 = 'COBOL' AND DATEDIFF(CURRENT_DATE, DateofJoining) > 730;

SELECT MIN(LENGTH(name)) AS shortest_name_length FROM Programmer;

SELECT AVG(dcost) AS average_cobol_package_cost FROM Software WHERE dev_in = 'COBOL';

SELECT name, sex, DATE_FORMAT(DateofBirth, '%d/%m/%y') AS dob, DATE_FORMAT(DateofJoining, '%d/%m/%y') AS doj FROM Programmer;

SELECT name FROM Programmer WHERE DAY(LAST_DAY(DateofBirth)) = DAY(DateofBirth);

SELECT SUM(Salary) AS total_salary_paid FROM Programmer WHERE sex = 'm' AND (Prof1 != 'Cobol' AND Prof2 != 'Cobol');

SELECT title, scost, dcost, (scost - dcost) AS difference FROM Software ORDER BY difference DESC;

SELECT name, DateofBirth, DateofJoining FROM Programmer WHERE MONTH(DateofBirth) = MONTH(DateofJoining);

SELECT title FROM Software WHERE title LIKE '% %';

SELECT dev_in AS language, COUNT(*) AS num_packages FROM Software GROUP BY dev_in;

SELECT name, COUNT(*) AS num_packages_developed FROM Software GROUP BY name;

SELECT sex, COUNT(*) AS num_programmers FROM Programmer GROUP BY sex;

SELECT dev_in AS language, MAX(dcost) AS costliest_package, MAX(sold) AS highest_selling_package FROM Software GROUP BY dev_in;

SELECT YEAR(DateofBirth) AS birth_year, COUNT(*) AS num_people_born FROM Programmer GROUP BY birth_year;

SELECT YEAR(DateofJoining) AS joining_year, COUNT(*) AS num_people_joined FROM Programmer GROUP BY joining_year;

SELECT MONTH(DateofBirth) AS birth_month, COUNT(*) AS num_people_born FROM Programmer GROUP BY birth_month;

SELECT MONTH(DateofJoining) AS joining_month, COUNT(*) AS num_people_joined FROM Programmer GROUP BY joining_month;

SELECT Prof1 AS language, COUNT(*) AS count_prof1 FROM Programmer GROUP BY Prof1;

SELECT Prof2 AS language, COUNT(*) AS count_prof2 FROM Programmer GROUP BY Prof2;

SELECT CASE 
    WHEN Salary >= 2000 AND Salary < 3000 THEN '2000-2999'
    WHEN Salary >= 3000 AND Salary < 4000 THEN '3000-3999'
    WHEN Salary >= 4000 AND Salary < 5000 THEN '4000-4999'
    -- Add more salary ranges as needed
    ELSE 'Others' 
  END AS salary_group, COUNT(*) AS num_people FROM Programmer GROUP BY salary_group;

SELECT splace AS institute, COUNT(*) AS num_people FROM Studies GROUP BY splace;

SELECT course, COUNT(*) AS num_people FROM Studies GROUP BY course;

SELECT dev_in AS language, SUM(dcost) AS total_development_cost FROM Software GROUP BY dev_in;

SELECT dev_in AS language, SUM(scost) AS total_selling_cost FROM Software GROUP BY dev_in;

SELECT name, SUM(dcost) AS total_development_cost FROM Software GROUP BY name;

SELECT name, SUM(sold) AS total_sales FROM Software GROUP BY name;

SELECT name, COUNT(*) AS num_packages_developed FROM Software GROUP BY name;

SELECT name, dev_in AS language, SUM(scost) AS total_selling_cost FROM Software GROUP BY name, language;

SELECT name,MAX(dcost) AS costliest_package,MIN(dcost) AS cheapest_package FROM Software GROUP BY name;

use Assignment;

SELECT dev_in AS language,AVG(dcost) AS avg_development_cost,AVG(scost) AS avg_cost,AVG(sold) AS avg_selling_cost,AVG(scost / sold) AS avg_price_per_copy FROM Software GROUP BY language;

SELECT splace AS institute_name, COUNT(course) AS num_courses,AVG(ccost) AS avg_cost_per_course FROM Studies GROUP BY institute_name;

SELECT splace AS institute_name,COUNT(*) AS num_students FROM Studies GROUP BY institute_name;

SELECT name, sex FROM Programmer;

SELECT p.name AS programmer_name,s.title AS package_name FROM Programmer p JOIN Software s ON p.name = s.name;

SELECT dev_in AS language, COUNT(*) AS num_packages FROM Software GROUP BY language;

SELECT dev_in AS language, COUNT(*) AS num_packages FROM Software WHERE dcost < 1000 GROUP BY language;

SELECT dev_in AS language, AVG(scost - dcost) AS avg_difference FROM Software GROUP BY language;

SELECT s.name AS programmer_name, SUM(s.scost) AS total_scost,SUM(s.dcost) AS total_dcost,SUM(s.scost - s.dcost) AS amount_to_be_recovered FROM Software s JOIN Programmer p ON s.name = p.name GROUP BY s.name HAVING total_dcost > total_scost;

SELECT MAX(Salary) AS highest_salary,MIN(Salary) AS lowest_salary,AVG(Salary) AS average_salary FROM Programmer WHERE Salary > 2000;

SELECT name FROM Programmer WHERE Prof1 = 'C' OR Prof2 = 'C' ORDER BY Salary DESC LIMIT 1;

SELECT name FROM Programmer WHERE sex = 'f' AND (Prof1 = 'COBOL' OR Prof2 = 'COBOL') ORDER BY Salary DESC LIMIT 1;

SELECT p.Prof1 AS language, p.name FROM Programmer p JOIN (SELECT Prof1, MAX(Salary) AS max_salary FROM Programmer GROUP BY Prof1) max_salaries ON p.Prof1 = max_salaries.Prof1 AND p.Salary = max_salaries.max_salary;

SELECT name FROM Programmer ORDER BY DateofJoining ASC LIMIT 1;

SELECT name FROM Programmer ORDER BY DateofJoining DESC LIMIT 1;

SELECT Prof1 AS language FROM Programmer GROUP BY Prof1 HAVING COUNT(*) = 1;

SELECT name FROM Programmer WHERE Prof1 = 'DBASE' OR Prof2 = 'DBASE' ORDER BY DateofBirth DESC LIMIT 1;

SELECT splace AS institute_name, COUNT(*) AS num_students FROM Studies GROUP BY splace ORDER BY num_students DESC LIMIT 1;

SELECT name FROM Programmer WHERE sex = 'f' AND Salary > 3000 AND NOT (Prof1 IN ('C', 'C++', 'Oracle', 'DBASE') OR Prof2 IN ('C', 'C++', 'Oracle', 'DBASE'));

SELECT course FROM Studies ORDER BY ccost DESC LIMIT 1;

SELECT course FROM Studies GROUP BY course ORDER BY COUNT(*) DESC LIMIT 1;

SELECT splace AS institute, course FROM Studies GROUP BY splace, course HAVING AVG(ccost) < (SELECT AVG(ccost) FROM Studies);

SELECT splace AS institute FROM Studies WHERE ccost = (SELECT MAX(ccost) FROM Studies);

SELECT course FROM Studies GROUP BY course HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT course, COUNT(*) AS num_students FROM Studies GROUP BY course) AS course_counts);

SELECT splace AS institute FROM Studies WHERE course IN (SELECT course FROM Studies GROUP BY course HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT course, COUNT(*) AS num_students FROM Studies GROUP BY course) AS course_counts));

SELECT course FROM Studies GROUP BY course HAVING AVG(ccost) BETWEEN (SELECT AVG(ccost) - 1000 FROM Studies) AND (SELECT AVG(ccost) + 1000 FROM Studies);

SELECT title FROM Software ORDER BY dcost DESC LIMIT 1;

SELECT title FROM Software ORDER BY scost ASC LIMIT 1;

SELECT name FROM Software WHERE sold = (SELECT MIN(sold) FROM Software) LIMIT 1;

SELECT dev_in FROM Software WHERE sold = (SELECT MAX(sold) FROM Software);

SELECT sold FROM Software WHERE (scost - dcost) = (SELECT MIN(scost - dcost) FROM Software) LIMIT 1;

SELECT title FROM Software WHERE dev_in = 'Pascal' ORDER BY dcost DESC LIMIT 1;

SELECT dev_in FROM Software GROUP BY dev_in ORDER BY COUNT(*) DESC LIMIT 1;

SELECT name FROM Programmer WHERE name IN (SELECT name FROM Software GROUP BY name HAVING COUNT(*) = (SELECT MAX(package_count) FROM (SELECT COUNT(*) AS package_count FROM Software GROUP BY name) AS package_counts)) LIMIT 1;

SELECT p.name FROM Programmer p JOIN Software s ON p.name = s.name ORDER BY s.dcost DESC LIMIT 1;

SELECT title FROM Software WHERE sold < (SELECT AVG(sold) FROM Software);

SELECT name FROM Programmer WHERE sex = 'f' AND Salary > (SELECT MAX(Salary) FROM Programmer WHERE sex = 'm');

SELECT Prof1 FROM Programmer GROUP BY Prof1 ORDER BY COUNT(*) DESC LIMIT 1;

SELECT name FROM Programmer WHERE name IN (SELECT name FROM Software GROUP BY name HAVING SUM(sold * scost) > 2 * SUM(dcost));

SELECT p.name, s.dev_in, MIN(s.dcost) AS cheapest_package_cost FROM Programmer p JOIN Software s ON p.name = s.name GROUP BY p.name, s.dev_in;

SELECT name FROM Programmer WHERE sex = 'm' AND YEAR(DateofBirth) = 1965 ORDER BY DateofBirth DESC LIMIT 1;

SELECT p.name, MAX(CASE WHEN s1.sold = max_sold THEN s1.dev_in END) AS language_highest_selling,MIN(CASE WHEN s2.sold = min_sold THEN s2.dev_in END) AS language_lowest_selling FROM Programmer p JOIN Software s1 ON p.name = s1.name JOIN Software s2 ON p.name = s2.name CROSS JOIN (SELECT MAX(sold) AS max_sold, MIN(sold) AS min_sold FROM Software) AS sold_counts GROUP BY p.name;

SELECT name FROM Programmer WHERE sex = 'f' AND YEAR(DateofJoining) = 1992 ORDER BY DateofBirth ASC LIMIT 1;

SELECT YEAR(DateofBirth) AS birth_year, COUNT(*) AS num_programmers FROM Programmer GROUP BY birth_year ORDER BY num_programmers DESC LIMIT 1;

SELECT MONTH(DateofJoining) AS joining_month, COUNT(*) AS num_programmers FROM Programmer GROUP BY joining_month ORDER BY num_programmers DESC LIMIT 1;

SELECT Prof1 AS language, COUNT(*) AS num_programmers FROM Programmer GROUP BY language ORDER BY num_programmers DESC LIMIT 1;

SELECT name FROM Programmer WHERE sex = 'm' AND Salary < (SELECT AVG(Salary) FROM Programmer WHERE sex = 'f');

SELECT * FROM Programmer WHERE Salary IN (SELECT Salary FROM Programmer GROUP BY Salary HAVING COUNT(*) > 1);

SELECT * FROM Software WHERE name IN (SELECT name FROM Programmer WHERE sex = 'm' AND Salary > 3000);

SELECT * FROM Software WHERE dev_in = 'Pascal' AND name IN (SELECT name FROM Programmer WHERE sex = 'f');

SELECT * FROM Programmer WHERE YEAR(DateofJoining) < 1990;

SELECT * FROM Software WHERE dev_in = 'C' AND name IN (SELECT name FROM Programmer WHERE sex = 'f' AND name = 'PRAGATHI');

SELECT p.name, p.name AS programmer_name, COUNT(s.title) AS num_packages, SUM(s.sold) AS total_copies_sold, SUM(s.sold * s.scost) AS total_sales_value FROM Programmer p JOIN Software s ON p.name = s.name GROUP BY  p.name;

SELECT * FROM Software WHERE dev_in = 'DBASE' AND name IN (SELECT name FROM Programmer WHERE sex = 'm' AND name = (SELECT name FROM Programmer GROUP BY name ORDER BY COUNT(*) DESC LIMIT 1));

SELECT * FROM Software WHERE name IN (SELECT name FROM Programmer WHERE sex = 'm' AND YEAR(DateofBirth) < 1965) OR name IN (SELECT name FROM Programmer WHERE sex = 'f' AND YEAR(DateofBirth) > 1975);

SELECT * FROM Software WHERE dev_in NOT IN (SELECT Prof1 FROM Programmer);

SELECT * FROM Software WHERE dev_in NOT IN (SELECT Prof1 FROM Programmer) AND dev_in NOT IN (SELECT Prof2 FROM Programmer);

SELECT * FROM Software WHERE name IN (SELECT name FROM Programmer WHERE sex = 'm' AND name = 'SABHARI');

SELECT name FROM Programmer WHERE name NOT IN (SELECT DISTINCT name FROM Software);

SELECT SUM(dcost) FROM Software WHERE name IN (SELECT name FROM Programmer WHERE name LIKE '%APPLE%');

SELECT name FROM Programmer WHERE DateofJoining IN (SELECT DateofJoining FROM Programmer GROUP BY DateofJoining HAVING COUNT(*) > 1);

SELECT name FROM Programmer WHERE Prof2 IN (SELECT Prof2 FROM Programmer GROUP BY Prof2 HAVING COUNT(*) > 1);

SELECT p.name AS institute, SUM(s.sold * s.scost) AS total_sales_value FROM Programmer p JOIN Software s ON p.name = s.name GROUP BY p.name;

SELECT p.name FROM Programmer p JOIN Software s ON p.name = s.name WHERE s.dcost = (SELECT MAX(dcost) FROM Software);

SELECT language FROM (SELECT Prof1 AS language FROM Programmer UNION SELECT Prof2 AS language FROM Programmer) AS languages WHERE language NOT IN (SELECT dev_in FROM Software);

SELECT p.name, p.Salary, s.title, s.sold FROM Programmer p JOIN Software s ON p.name = s.name WHERE s.sold = (SELECT MAX(sold) FROM Software);

SELECT title, dcost FROM Software WHERE name IN (SELECT name FROM Programmer WHERE DATEDIFF(CURDATE(), DateofJoining) < 3*365) ORDER BY dcost DESC LIMIT 1;

SELECT AVG(Salary) AS average_salary FROM Programmer WHERE name IN (SELECT name FROM Software GROUP BY name HAVING SUM(sold * scost) > 50000);

SELECT COUNT(*) AS num_packages FROM Software WHERE name IN (SELECT name FROM Programmer WHERE name IN (SELECT name FROM Studies GROUP BY name ORDER BY ccost ASC LIMIT 1));

SELECT COUNT(*) AS num_packages, name AS institute FROM Software WHERE name = (SELECT name FROM Software ORDER BY dcost ASC LIMIT 1)GROUP BY name;

SELECT COUNT(*) AS num_packages FROM Software WHERE name IN (SELECT name FROM Programmer WHERE sex = 'f' AND Salary > (SELECT MAX(Salary) FROM Programmer WHERE sex = 'm'));

use Assignment;





