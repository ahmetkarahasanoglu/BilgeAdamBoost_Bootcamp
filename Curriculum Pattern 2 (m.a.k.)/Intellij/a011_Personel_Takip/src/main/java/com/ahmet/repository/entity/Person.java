package com.ahmet.repository.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tblperson")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

}
