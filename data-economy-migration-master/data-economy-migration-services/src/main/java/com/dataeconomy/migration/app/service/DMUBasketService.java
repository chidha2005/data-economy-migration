package com.dataeconomy.migration.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.DMUBasketDto;
import com.dataeconomy.migration.app.mysql.entity.DMUBasketTemp;
import com.dataeconomy.migration.app.mysql.repository.BasketTempRepository;

@Service
public class DMUBasketService {

	@Autowired
	private BasketTempRepository basketTempRepository;

	public List<DMUBasketDto> getAllBasketDetails() {
		try {
			return Optional.ofNullable(basketTempRepository.findAll()).orElse(new ArrayList<>()).stream()
					.map(basketObj -> {
						return DMUBasketDto.builder().srNo(basketObj.getSrNo()).userId(basketObj.getUserId())
								.schemaName(basketObj.getSchemaName()).tableName(basketObj.getTableName())
								.filterCondition(basketObj.getFilterCondition())
								.targetS3Bucket(basketObj.getTargetS3Bucket())
								.inccrementalFlag(basketObj.getInccrementalFlag())
								.incrementalClmn(basketObj.getIncrementalClmn()).labelName(basketObj.getLabelName())
								.build();
					}).collect(Collectors.toList());
		} catch (Exception exception) {
			return Collections.emptyList();
		}

	}

	public DMUBasketDto saveBasketDetails(DMUBasketDto dmuBasketDto) {
		try {
			DMUBasketTemp dmuBasketTempEntity = DMUBasketTemp.builder().srNo(dmuBasketDto.getSrNo())
					.userId(dmuBasketDto.getUserId()).schemaName(dmuBasketDto.getSchemaName())
					.tableName(dmuBasketDto.getTableName()).filterCondition(dmuBasketDto.getFilterCondition())
					.targetS3Bucket(dmuBasketDto.getTargetS3Bucket())
					.inccrementalFlag(dmuBasketDto.getInccrementalFlag())
					.incrementalClmn(dmuBasketDto.getIncrementalClmn()).labelName(dmuBasketDto.getLabelName()).build();
			basketTempRepository.save(dmuBasketTempEntity);
			return dmuBasketDto;
		} catch (Exception e) {
			return dmuBasketDto;
		}
	}

	public List<DMUBasketDto> getBasketDetailsByUserId(String userId) {
		try {
			return Optional.ofNullable(basketTempRepository.findAll()).orElse(new ArrayList<>()).stream()
					.map(basketObj -> {
						return DMUBasketDto.builder().srNo(basketObj.getSrNo()).userId(basketObj.getUserId())
								.schemaName(basketObj.getSchemaName()).tableName(basketObj.getTableName())
								.filterCondition(basketObj.getFilterCondition())
								.targetS3Bucket(basketObj.getTargetS3Bucket())
								.inccrementalFlag(basketObj.getInccrementalFlag())
								.incrementalClmn(basketObj.getIncrementalClmn()).labelName(basketObj.getLabelName())
								.build();
					}).collect(Collectors.toList());
		} catch (Exception exception) {
			return Collections.emptyList();
		}
	}

	public boolean purgeBasketDetailsByUserId(String userId) {
		try {
			basketTempRepository.deleteById(userId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
