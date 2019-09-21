package com.dataeconomy.migration.app.mysql.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dataeconomy.migration.app.mysql.entity.DMUUsers;

@Repository
public interface UserRepository extends JpaRepository<DMUUsers, String> {

}
