package com.ahmet.service;

import com.ahmet.repository.UserProfileRepository;
import com.ahmet.repository.entity.UserProfile;
import com.ahmet.repository.view.VwUserProfile;
import com.ahmet.utility.MyFactoryService;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class UserProfileService extends MyFactoryService<UserProfileRepository, UserProfile, Long> {

    public UserProfileService() {
        super(new UserProfileRepository());

    }

    public boolean existByUsername(String username) {
        return getRepository().existByUsername(username);
    }

    public boolean doLogin(String username, String password) {
        return getRepository().doLogin(username, password);
    }

    public Optional<UserProfile> findByUsername(String username) {
        return getRepository().findByUsername(username);
    }

    /**
     * Kullanıcı listesini bir hashMap içinde (Userid,View) şeklinde
     * saklayacak; bir kullanıcıya ulaşılmak istenildiğinde buradan
     * bilgiler çekilebilecektir.
     * @return
     */
    public Map<Long, VwUserProfile> findAllVwUserList() {
        Map<Long, VwUserProfile> result = new HashMap<>(); // HashMap kullanıyoruz, arama yapması çok hızlı olduğu için.
        findAll().forEach(x -> {
//            if(result.containsKey(x.getId())) { // UserId key olarak map list'in içinde var ise
//            }
            result.put(x.getId(), VwUserProfile.builder()
                            .name(x.getName() + " " + x.getSurname())
                            .username(x.getUsername())
                            .userimg(x.getProfileimg())
                    .build());
        });
        return result;
    }
}
