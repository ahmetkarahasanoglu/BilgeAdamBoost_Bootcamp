package com.ahmet.repository.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tbldepartment")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

}
