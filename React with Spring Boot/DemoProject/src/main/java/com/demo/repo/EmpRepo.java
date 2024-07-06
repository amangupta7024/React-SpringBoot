package com.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Emp;

@Repository
public interface EmpRepo extends JpaRepository<Emp, String> {

}
