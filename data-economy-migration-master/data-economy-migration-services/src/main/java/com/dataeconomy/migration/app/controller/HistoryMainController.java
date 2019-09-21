package com.dataeconomy.migration.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.HistoryMainDto;
import com.dataeconomy.migration.app.service.HistoryMainService;

@RestController
@RequestMapping("/datamigration/history/main")
public class HistoryMainController {

	@Autowired
	private HistoryMainService historyMainService;

	@GetMapping("/all")
	public List<HistoryMainDto> getAllHistoryDetails() {
		return historyMainService.getAllHistoryMainDetails();
	}
}
