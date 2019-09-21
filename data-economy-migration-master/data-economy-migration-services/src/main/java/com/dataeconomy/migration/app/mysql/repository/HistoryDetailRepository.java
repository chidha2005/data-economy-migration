package com.dataeconomy.migration.app.mysql.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dataeconomy.migration.app.mysql.entity.DMUHistoryDetail;
import com.dataeconomy.migration.app.mysql.entity.DMUHIstoryDetailPK;

@Repository
public interface HistoryDetailRepository extends JpaRepository<DMUHistoryDetail, DMUHIstoryDetailPK> {

}
