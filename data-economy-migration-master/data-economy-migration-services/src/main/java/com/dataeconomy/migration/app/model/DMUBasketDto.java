package com.dataeconomy.migration.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DMUBasketDto {

	private Long srNo;

	private String userId;

	private String schemaName;

	private String tableName;

	private String filterCondition;

	private String targetS3Bucket;

	private String inccrementalFlag;

	private String incrementalClmn;

	private String labelName;

}
