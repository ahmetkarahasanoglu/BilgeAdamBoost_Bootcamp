package com.ahmet.repository.hql;

import com.ahmet.repository.entity.ICrud;
import com.ahmet.repository.entity.Name;
import com.ahmet.repository.entity.User;
import com.ahmet.repository.utility.HibernateUtility;
import org.hibernate.Session;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

/**
 * UserDao --> hql sorgularımız için (UserDao ya da UserDto) eski
 *    bir yazım şekli(UserRepository yerine kullanılıyo).
 *    'Data object' anlamında.
 */
public class UserDao implements ICrud {

    @Override
    public Optional findById(Long id) {
        String hql = "select u from User as u where id=" + id;
        Session session = HibernateUtility.getSessionFactory().openSession();
        TypedQuery<User> typedQuery = session.createQuery(hql, User.class);
        User user = null;
        try{
            user = typedQuery.getSingleResult();
        }catch(Exception e) {
            System.out.println(e.getMessage());
        }
        return Optional.ofNullable(user);
    }

    public Optional<User> findById2(Long id) { // Farklı bir yöntemle findById metodu (null check yapılıyor if ile)
        User user = null;
        try{
            Session session = HibernateUtility.getSessionFactory().openSession();
            user = session.find(User.class, id); // session'ın 'find' metodu parametre olarak bir entity class, ve bir primary key alır.
            if(user==null) {
                System.out.println("Kullanıcı bulunamadı.");
                return Optional.empty();
            }
        }catch(Exception e) {
            System.out.println(e.getMessage());
        }
        return Optional.ofNullable(user);
    }

    @Override
    public List<User> findAll() {
        String hql = "select u from User as u"; // User: 'User' sınıfımızı(entity'mizi) belirtiyoruz.
        Session session = HibernateUtility.getSessionFactory().openSession();
        TypedQuery<User> typedQuery = session.createQuery(hql, User.class);
        List<User> userList = typedQuery.getResultList();
        return userList;
    }

    public void findAllNameObjectOfUser() {
        String hql = "select name from User";
        Session session = HibernateUtility.getSessionFactory().openSession();
        TypedQuery<Name> typedQuery = session.createQuery(hql, Name.class);
        List<Name> userList = typedQuery.getResultList();
        userList.forEach(System.out::println);
    }

    public void findAllUserFirstName() {
        String hql = "select name.firstname from User";
        Session session = HibernateUtility.getSessionFactory().openSession();
        TypedQuery<String> typedQuery = session.createQuery(hql, String.class);
        List<String> firstNameList = typedQuery.getResultList();
        firstNameList.forEach(System.out::println);
    }

    public void findAllUserUsername() {
        String hql = "select username from User";
        Session session = HibernateUtility.getSessionFactory().openSession();
        TypedQuery<String> typedQuery = session.createQuery(hql, String.class);
        List<String> usernameList = typedQuery.getResultList();
        usernameList.forEach(System.out::println);
    }
}
