package com.ahmet.repository.criteriaquery;

import com.ahmet.repository.entity.ICrud;
import com.ahmet.repository.entity.Name;
import com.ahmet.repository.utility.HibernateUtility;
import com.ahmet.repository.entity.User;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Optional;

/**
 * - findAll fonksiyonu yazalım (CriteriaQuery ile)
 */
public class UserRepository implements ICrud<User> {

    private EntityManager entityManager;
    private CriteriaBuilder criteriaBuilder;

    // CONSTRUCTOR:
    public UserRepository() {
        entityManager = HibernateUtility.getSessionFactory().createEntityManager();
        criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    // METHODS: ----
    public List<User> findAll() {
        CriteriaQuery<User> criteria = criteriaBuilder.createQuery(User.class);
        Root<User> root = criteria.from(User.class);
        criteria.select(root);
        List<User> userList = entityManager.createQuery(criteria).getResultList();
        return userList;
    }

    public Optional<User> findById(Long id) {
        CriteriaQuery<User> criteria = criteriaBuilder.createQuery(User.class);
        Root<User> root = criteria.from(User.class);
        criteria.select(root).where(criteriaBuilder.equal(root.get("id"), id));
//        criteria.where(criteriaBuilder.equal(root.get("id"), id)); // bu satırı üst satırda select sorgusuyla birleştirerek yazdık.
        User user = null;
        try {
            user = entityManager.createQuery(criteria).getSingleResult();
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
        return Optional.ofNullable(user);
    }

    public List<String> selectOneColumn_findAllFirstName() { // 'Name' is a class, it has fields.
        CriteriaQuery<String> criteria = criteriaBuilder.createQuery(String.class); // We're specifying what kind of data we want to retrieve from the database; we want to receive a list of 'Strings'. || 'String.class' -> sorgumuz bize bir string array'i getireceği için burada 'String.class' kullandık. Yani aşağıdaki 'getResultList()' bize bir string array'i getireceğinden dolayı.
        Root<User> root = criteria.from(User.class);
        criteria.select(root.get("name").get("firstname")); // 'name' objesinin içindeki 'firstname' alanlarını getir diyoruz.
        List<String> firstNameList = entityManager.createQuery(criteria).getResultList();
        return firstNameList;
    }


}
