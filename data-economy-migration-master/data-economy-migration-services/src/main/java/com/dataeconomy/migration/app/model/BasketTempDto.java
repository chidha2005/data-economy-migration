package com.dataeconomy.migration.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasketTempDto {

	private Long sno;

	private String schema;

	private String schemaName;

	private String tableName;

	private String s3bucket;

	private String filter;

	private String incremental;

	private String incrementcolumn;

	private String labelname;

	public Long getSno() {
		return sno;
	}

	public void setSno(Long sno) {
		this.sno = sno;
	}

	public String getSchema() {
		return schema;
	}

	public void setSchema(String schema) {
		this.schema = schema;
	}

	public String getSchemaName() {
		return schemaName;
	}

	public void setSchemaName(String schemaName) {
		this.schemaName = schemaName;
	}

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public String getS3bucket() {
		return s3bucket;
	}

	public void setS3bucket(String s3bucket) {
		this.s3bucket = s3bucket;
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public String getIncremental() {
		return incremental;
	}

	public void setIncremental(String incremental) {
		this.incremental = incremental;
	}

	public String getIncrementcolumn() {
		return incrementcolumn;
	}

	public void setIncrementcolumn(String incrementcolumn) {
		this.incrementcolumn = incrementcolumn;
	}

	public String getLabelname() {
		return labelname;
	}

	public void setLabelname(String labelname) {
		this.labelname = labelname;
	}

}
