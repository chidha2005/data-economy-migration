package com.dataeconomy.migration.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.ConnectionDto;
import com.dataeconomy.migration.app.service.ConnectionService;

@RestController
@RequestMapping("/datamigration/connection")
public class ConnectionController {

	@Autowired
	private ConnectionService connectionService;

	@RequestMapping("/validate")
	public boolean validateConnection(@RequestBody ConnectionDto connectionDto) {
		return connectionService.validateConnection(connectionDto);
	}

	@RequestMapping("/save")
	public boolean saveConnectionDetails(@RequestParam("hdfs") String requestParam,
			@RequestParam("aws") String awsRequestParam, @RequestBody ConnectionDto connectionDto) {
		return connectionService.saveConnectionDetails(requestParam, awsRequestParam, connectionDto);
	}

	@RequestMapping("/get")
	public ConnectionDto getConnectionDetails() {
		return connectionService.getConnectionDetails();
	}

}
