package com.dataeconomy.migration.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.HistoryMainDto;
import com.dataeconomy.migration.app.mysql.entity.DMUHistoryMain;
import com.dataeconomy.migration.app.mysql.repository.HistoryMainRepsitory;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class HistoryMainService {

	@Autowired
	private HistoryMainRepsitory historyMainRepository;

	public List<HistoryMainDto> getAllHistoryMainDetails() {

		log.info(" HistoryMainService :: getAllHistoryMainDetails ");

		try {
			List<DMUHistoryMain> dmuHistoryDetailOpt = historyMainRepository.findAll();
			return Optional.ofNullable(dmuHistoryDetailOpt).orElse(new ArrayList<>()).stream()
					.map(dmuHistoryDetailObj -> {
						return HistoryMainDto.builder().requestNo(dmuHistoryDetailObj.getRequestNo())
								.userId(dmuHistoryDetailObj.getUserId())
								.requestedTime(dmuHistoryDetailObj.getRequestedTime())
								.status(dmuHistoryDetailObj.getStatus())
								.requestType(dmuHistoryDetailObj.getRequestType())
								.scriptGenCmpltTime(dmuHistoryDetailObj.getScriptGenCmpltTime())
								.exctnCmpltTime(dmuHistoryDetailObj.getExctnCmpltTime())
								.tknztnEnabled(dmuHistoryDetailObj.getTknztnEnabled())
								.tknztnFilePath(dmuHistoryDetailObj.getTknztnFilePath()).build();
					}).collect(Collectors.toList());
		} catch (Exception exception) {
			log.info(" Exception occured at HistoryDetailService :: getAllHistoryDetailsByReq {} ",
					ExceptionUtils.getStackTrace(exception));
			return Collections.emptyList();
		}
	}

}
