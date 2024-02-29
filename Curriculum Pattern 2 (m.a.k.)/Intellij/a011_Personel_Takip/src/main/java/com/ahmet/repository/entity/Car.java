package com.ahmet.repository.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tblcar")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

}
