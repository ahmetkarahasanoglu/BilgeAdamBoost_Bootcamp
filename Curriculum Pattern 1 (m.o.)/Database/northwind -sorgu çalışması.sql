-- Çalışanlarda(employees) 'title_of_couresty' alanı 'Dr.' olanların isim ve soy 
-- ismini getirelim; kolon isimleri 'ad' diğeri de 'soyad' olsun
select first_name as ad, last_name as soyad 
from employees
where title_of_courtesy='Dr.'

select * from employees

-- Territories sayısını bulalım
select count(*) from territories

-- Çalışan sayısını bulalım
select count(*) from employees

-- Çalışan erkek sayısı
select count(*) from employees
where title_of_courtesy='Mr.'

-- Çalışan kadın sayısı
select count(*) from employees
where title_of_courtesy='Mrs.' or title_of_courtesy='Ms.' -- or:
-- or, by using 'in':
select count(*) from employees
where title_of_courtesy in ('Mrs.', 'Ms.')

-- 'Region'ı 'Eastern' olan territories'lerin sayisini bulunuz:
select count(*) from territories where region_id=(
	select region_id from region where region_description='Eastern'
)
   -- or, by using 'inner join':
select count(*) from territories 
inner join region on territories.region_id=region.region_id
where region.region_description='Eastern'

-- Çalışanların doğum tarihi 1960-05-05'ten büyük olanları bulunuz
select * from employees where birth_date>'1960-05-05'

-- Çalışanların yaş ortalamasını bulunuz.
SELECT AVG(EXTRACT(YEAR FROM age(now(), birth_date))) AS average_age
FROM employees;

SELECT AVG(now()::date - birth_date)/365 AS average_age 
FROM employees 

-- Çalışanların en yaşlı ve en genç olanını bulalım:
select * from employees
order by (EXTRACT(YEAR FROM age(now(), birth_date))) ASC
LIMIT 1

select * from employees
order by (EXTRACT(YEAR FROM age(now(), birth_date))) DESC
LIMIT 1

   -- or,
select (now()::date-birth_date)/365 as "en yasli" from employees 
order by employees.birth_date asc limit 1

-- Employees tablosunda kaç farklı title-of-courtesy olduğunu bulunuz.
select count(distinct title_of_courtesy) from employees
-- Employees tablosunda, çalışanlar kaç farklı şehirde çalışıyorlar?
select count(distinct city) from employees

-- Çalışanların soy isim uzunluğu 6'dan küçük olanların isimlerini küçük, soy isimlerini büyük ve ilk 3 harfini yazdıran sorgu.
SELECT LOWER(first_name) AS first_name_lower, 
       UPPER(SUBSTRING(last_name, 1, 3)) AS last_name_upper
FROM employees
WHERE LENGTH(last_name) < 6;

select left(last_name, 3) from employees

-- Products tablosundan kdv dahil ve kdv hariç fiyatları ile beraber ürünlerin
--   isimlerini getiriniz; kolon isimleri kdv dahil ve kdv hariç olsun(%18)
select product_name, unit_price as "kdv hariç fiyat", unit_price*118/100 as "kdv dahil fiyat" 
from products
-- kdv(%18) miktarı 10 liranın altında olanları getirin
select * from products
where unit_price*18/100 < 10