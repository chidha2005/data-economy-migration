package com.dataeconomy.migration.app.mysql.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DMU_HISTORY_DTL")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DMUHistoryDetail {

	@EmbeddedId
	private DMUHIstoryDetailPK dmuHIstoryDetailPK;

	@Column(name = "SCHEMA_NAME", length = 100, nullable = false)
	private String schemaName;

	@Column(name = "TABLE_NAME", length = 100, nullable = false)
	private String tableName;

	@Column(name = "FILTER_CONDITION", length = 500, nullable = true)
	private String filterCondition;

	@Column(name = "TARGET_S3_BUCKET", length = 500, nullable = true)
	private String targetS3Bucket;

	@Column(name = "INCREMENTAL_FLAG", length = 1, nullable = true)
	private String incrementalFlag;

	@Column(name = "INCREMENTAL_CLMN", length = 100, nullable = true)
	private String incrementalClmn;

	@Column(name = "STATUS", length = 100, nullable = true)
	private String status;

}
