package com.dataeconomy.migration.app.mysql.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dataeconomy.migration.app.mysql.entity.DMUAuthentication;

@Repository
public interface AuthenticationRepository extends JpaRepository<DMUAuthentication, Long> {

}
