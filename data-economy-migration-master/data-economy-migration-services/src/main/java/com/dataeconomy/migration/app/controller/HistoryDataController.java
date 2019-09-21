package com.dataeconomy.migration.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.HistoryDetailDto;
import com.dataeconomy.migration.app.service.HistoryDetailService;

@RestController
@RequestMapping("/datamigration/history")
public class HistoryDataController {

	@Autowired
	private HistoryDetailService historyDetailService;

	@GetMapping("/all")
	public List<HistoryDetailDto> getAllHistoryDetails() {
		return historyDetailService.getAllHistoryDetails();
	}

	@GetMapping("/all/{requestNumber}")
	public HistoryDetailDto getAllHistoryDetails(@PathParam("requestNumber") String requestNumber) {
		return historyDetailService.getAllHistoryDetailsByReq(requestNumber);
	}

}
