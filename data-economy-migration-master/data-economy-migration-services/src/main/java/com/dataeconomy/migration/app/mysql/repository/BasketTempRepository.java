package com.dataeconomy.migration.app.mysql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dataeconomy.migration.app.mysql.entity.DMUBasketTemp;

@Repository
public interface BasketTempRepository extends JpaRepository<DMUBasketTemp, Long> {

	@Query(" SELECT dmu FROM DMUBasketTemp dmu where dmu.userId = :userId ORDER BY userId.srNo, userId.labelName")
	public List<DMUBasketTemp> getBasketDetailsByUserId(@Param("userId") String userId);

	@Query("DELETE FROM DMUBasketTemp dmu where dmu.userId = :userId")
	public void deleteById(@Param("userId") String userId);

}
