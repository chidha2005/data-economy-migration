package com.dataeconomy.migration.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.ConnectionDto;
import com.dataeconomy.migration.app.service.AuthenticationService;

@RestController
@RequestMapping("/datamigration/authentication")
public class DMUAuthenticationController {

	@Autowired
	private AuthenticationService authenticationService;

	@GetMapping("/all")
	public List<ConnectionDto> getAllAuthenticationDetails() {
		return authenticationService.getAllAuthenticationDetails();
	}

}
