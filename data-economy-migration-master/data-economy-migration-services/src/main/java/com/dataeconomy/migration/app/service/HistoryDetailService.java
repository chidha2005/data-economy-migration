package com.dataeconomy.migration.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.HistoryDetailDto;
import com.dataeconomy.migration.app.mysql.entity.DMUHIstoryDetailPK;
import com.dataeconomy.migration.app.mysql.entity.DMUHistoryDetail;
import com.dataeconomy.migration.app.mysql.repository.HistoryDetailRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class HistoryDetailService {

	@Autowired
	private HistoryDetailRepository historyDetailRepository;

	public HistoryDetailDto getAllHistoryDetailsByReq(String requestNumber) {
		log.info(" HistoryDetailService :: getAllHistoryDetailsByReq {} ",
				Objects.toString(requestNumber, "Invlaid requestNumber  "));
		try {
			Optional<DMUHistoryDetail> dmuHistoryDetailOpt = historyDetailRepository
					.findById(DMUHIstoryDetailPK.builder().requestNo(requestNumber).srNo(1L).build());
			if (dmuHistoryDetailOpt.isPresent()) {
				DMUHistoryDetail dmuHistoryDetailObj = dmuHistoryDetailOpt.get();
				return HistoryDetailDto.builder().schemaName(dmuHistoryDetailObj.getSchemaName())
						.tableName(dmuHistoryDetailObj.getTableName())
						.filterCondition(dmuHistoryDetailObj.getFilterCondition())
						.targetS3Bucket(dmuHistoryDetailObj.getTargetS3Bucket())
						.incrementalClmn(dmuHistoryDetailObj.getIncrementalFlag())
						.incrementalClmn(dmuHistoryDetailObj.getIncrementalClmn())
						.status(dmuHistoryDetailObj.getStatus()).build();
			}
		} catch (Exception exception) {
			log.info(" Exception occured at HistoryDetailService :: getAllHistoryDetailsByReq {} ",
					ExceptionUtils.getStackTrace(exception));
		}
		return HistoryDetailDto.builder().build();
	}

	public List<HistoryDetailDto> getAllHistoryDetails() {
		log.info(" ConnectionService :: getAllHistoryDetails ");
		try {
			List<DMUHistoryDetail> detailsList = historyDetailRepository.findAll();
			return Optional.ofNullable(detailsList).orElse(new ArrayList<>()).stream().map(dmuHistoryDetailObj -> {
				return HistoryDetailDto.builder().schemaName(dmuHistoryDetailObj.getSchemaName())
						.tableName(dmuHistoryDetailObj.getTableName())
						.filterCondition(dmuHistoryDetailObj.getFilterCondition())
						.targetS3Bucket(dmuHistoryDetailObj.getTargetS3Bucket())
						.incrementalClmn(dmuHistoryDetailObj.getIncrementalFlag())
						.incrementalClmn(dmuHistoryDetailObj.getIncrementalClmn())
						.status(dmuHistoryDetailObj.getStatus()).build();
			}).collect(Collectors.toList());
		} catch (Exception exception) {
			log.info(" Exception occured at HistoryDetailService :: getAllHistoryDetailsByReq {} ",
					ExceptionUtils.getStackTrace(exception));
			return Collections.emptyList();
		}
	}
}
