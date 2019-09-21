package com.dataeconomy.migration.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.TGTFormatPropDto;
import com.dataeconomy.migration.app.service.TGTFormatPropService;

@RestController
@RequestMapping("/datamigration/tgtformatprop")
public class TGTFormatPropController {

	@Autowired
	private TGTFormatPropService tgtFormatPropService;

	@GetMapping("/all")
	public List<TGTFormatPropDto> getAllTGTFormatProp() {
		return tgtFormatPropService.getAllTGTFormatProp();
	}

	@GetMapping("/all/{requestNumber}")
	public TGTFormatPropDto getAllTGTFormatProp(@PathParam("requestNumber") String requestNumber) {
		return tgtFormatPropService.getAllTGTFormatProp(requestNumber);
	}
}
