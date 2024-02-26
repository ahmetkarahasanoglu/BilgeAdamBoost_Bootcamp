package com.ahmet.controller;

import com.ahmet.repository.criteriaquery.UserRepository;
import com.ahmet.repository.entity.*;
import com.ahmet.repository.entity.*;
import com.ahmet.repository.hql.UserDao;
import com.ahmet.repository.utility.HibernateUtility;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.persistence.Tuple;
import java.util.*;

/**
 * UserDao --> hql sorgularımız için (UserDao ya da UserDto) eski
 *    bir yazım şekli(UserRepository yerine kullanılıyo).
 *    'Data object' anlamında.
 */
public class UserController {

    public static void main(String[] args) {

//        createUser();
        UserDao userDao = new UserDao(); // also we will try it by using 'userDao'
        UserRepository userRepository = new UserRepository();
//        List<User> userList = userRepository.findAll();
//        List<User> userList = userDao.findAll();
//        userList.forEach(System.out::println);
//        userList.forEach(x -> {
//            System.out.println(x.getUsername());
//        });
//        List<String> firstNameList = userRepository.selectOneColumn_findAllFirstName(); // 'Name' is a class, it has fields.
//        firstNameList.forEach(System.out::println);

//        userDao.findAllNameObjectOfUser();
//        userDao.findAllUserFirstName();
//        userDao.findAllUserUsername();

//        Optional<User> user = userRepository.findById(30L);
//        System.out.println(user);

//        Optional<User> user = userDao.findById(30L);
//        System.out.println(user);

//        Optional<User> user2 = userDao.findById2(20L);
//        System.out.println(user2);


    }//MAIN ENDS HERE ----

    public static void createUser() {
        Session session = HibernateUtility.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();

//        Name myName = new Name();
//        myName.setMiddleName("McGyver");

        List<String> list1 = Arrays.asList("Astroloji", "Sinema", "Dans", "Müzik");

        Map<AddressType, Address> myMap1 = new HashMap<>();
        myMap1.put(AddressType.HOME, Address.builder().sokak("Fatih Sk.").sehir("İstanbul").ulke("Türkiye").build());
        myMap1.put(AddressType.BUSINESS, Address.builder().sokak("Ata Sk.").sehir("Ankara").ulke("Türkiye").build());
        myMap1.put(AddressType.OTHER, Address.builder().sokak("Ata Sk.").sehir("Konya").ulke("Türkiye").build());

        Map<AddressType, Address> myMap2 = new HashMap<>();
        myMap2.put(AddressType.HOME, Address.builder().sokak("Fatih Sk.").sehir("İzmir").ulke("Türkiye").build());
        myMap2.put(AddressType.BUSINESS, Address.builder().sokak("Ata Sk.").sehir("Manisa").ulke("Türkiye").build());

        User user = User.builder()
                .name(Name.builder().firstname("Şevket").middlename("").surname("Güçlü").build()) // embedded sınıf kullanımı.
//                .name("Ahmet")
//                .surname("Kara")
                .password("5678")
                .username("101")
                .gender(EGender.MAN)
                .ilgi_alanlari(Arrays.asList("yüzme", "bisiklet", "doğa sporları"))
//                .ilgi_alanlari(Arrays.asList(list1.get(0), list1.get(1)))
                .adres(myMap1)
                .postCount(20)
                .build();
        User user2 = User.builder()
                .name(Name.builder().firstname("Zeliha").middlename("Öznur").surname("Ünlü").build()) // embedded sınıf kullanımı.
                .username("201")
                .password("9876")
                .gender(EGender.WOMAN)
                .ilgi_alanlari(Arrays.asList("dağcılık", "koşu", "paraşüt"))
//                .ilgi_alanlari(Arrays.asList(list1.get(2), list1.get(3)))
                .adres(myMap2)
                .postCount(10)
                .build();
        User user3 = User.builder()
                .name(Name.builder().firstname("Merve").surname("Bir").build()) // embedded sınıf kullanımı.
                .username("mervo")
                .password("12345")
                .gender(EGender.WOMAN)
                .ilgi_alanlari(Arrays.asList("dağcılık", "koşu", "paraşüt"))
//                .ilgi_alanlari(Arrays.asList(list1.get(2), list1.get(3)))
                .adres(myMap2)
                .postCount(5)
                .build();
        User user4 = User.builder()
                .name(Name.builder().firstname("Gokhan").surname("Kaya").build()) // embedded sınıf kullanımı.
                .username("göko")
                .password("12345")
                .gender(EGender.MAN)
                .ilgi_alanlari(Arrays.asList("dağcılık", "koşu", "paraşüt"))
//                .ilgi_alanlari(Arrays.asList(list1.get(2), list1.get(3)))
                .adres(myMap2)
                .postCount(4)
                .build();
        User user5 = User.builder()
                .name(Name.builder().firstname("Mert").surname("Gürel").build()) // embedded sınıf kullanımı.
                .username("merdo")
                .password("12345")
                .gender(EGender.MAN)
                .ilgi_alanlari(Arrays.asList("dağcılık", "koşu", "paraşüt"))
//                .ilgi_alanlari(Arrays.asList(list1.get(2), list1.get(3)))
                .adres(myMap2)
                .postCount(7)
                .build();

        session.save(user);
        session.save(user2);
        session.save(user3);
        session.save(user4);
        session.save(user5);

        transaction.commit();
        session.close();
    }

}
