package com.dataeconomy.migration.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.DMUBasketDto;
import com.dataeconomy.migration.app.service.DMUBasketService;

@RestController
@RequestMapping("/datamigration/basket")
public class DMUBasketController {

	@Autowired
	DMUBasketService dmuBasketService;

	@GetMapping("/all")
	public List<DMUBasketDto> getConnectionDetails() {
		return dmuBasketService.getAllBasketDetails();
	}

	@PostMapping("/save")
	public DMUBasketDto saveBasketDetails(DMUBasketDto dmuBasketDto) {
		return dmuBasketService.saveBasketDetails(dmuBasketDto);
	}

	@GetMapping("/all/{userId}")
	public List<DMUBasketDto> saveBasketDetails(@PathParam("userId") String userId) {
		return dmuBasketService.getBasketDetailsByUserId(userId);
	}

	@DeleteMapping("/delete/{userId}")
	public boolean purgeBasketDetails(@PathParam("userId") String userId) {
		return dmuBasketService.purgeBasketDetailsByUserId(userId);
	}
}
