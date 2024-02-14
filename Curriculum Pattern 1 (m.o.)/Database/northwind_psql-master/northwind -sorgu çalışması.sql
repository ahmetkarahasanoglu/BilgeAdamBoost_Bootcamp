-- çalışanlarda(employees) 'title_of_couresty' alanı 'Dr.' olanların isim ve soy 
-- ismini getirelim; kolon isimleri 'ad' diğeri de 'soyad' olsun
select first_name as ad, last_name as soyad 
from employees
where title_of_courtesy='Dr.'

select * from employees