package com.ahmet.repository;

import java.util.List;
import java.util.Optional;

public interface ICrud<T> {

    void save(T t);
    void update(T t);
    void delete(Long id);
    List<T> findAll();
    Optional<T> findById(Long id);

}
