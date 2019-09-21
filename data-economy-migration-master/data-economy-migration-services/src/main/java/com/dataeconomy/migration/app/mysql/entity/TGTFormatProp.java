package com.dataeconomy.migration.app.mysql.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "TGT_FORMAT_PROP")
public class TGTFormatProp {

	@Id
	@Column(name = "SR_NO", length = 11, nullable = true)
	private Long srNo;

	@Column(name = "TEXT_FORMAT_FLAG", length = 1, nullable = false)
	private String textFormatFlag;

	@Column(name = "SRC_FORMAT_FLAG", length = 1, nullable = true)
	private String srcFormatFlag;

	@Column(name = "FIELD_DELIMITER", length = 1, nullable = true)
	private String fieldDelimiter;

	@Column(name = "SQNC_FORMAT_FLAG", length = 1, nullable = true)
	private String sqncFormatFlag;

	@Column(name = "RC_FORMAT_FLAG", length = 1, nullable = true)
	private String rcFormatFlag;

	@Column(name = "AVRO_FORMAT_FLAG", length = 1, nullable = true)
	private String avroFormatFlag;

	@Column(name = "ORC_FORMAT_FLAG", length = 1, nullable = true)
	private String orcFormatFlag;

	@Column(name = "PARQUET_FORMAT_FLAG", length = 1, nullable = true)
	private String parquetFormatFlag;

	@Column(name = "SRC_CMPRSN_FLAG", length = 1, nullable = true)
	private String srcCmprsnFlag;

	@Column(name = "UNCMPRSN_FLAG", length = 1, nullable = true)
	private String uncmprsnFlag;

	@Column(name = "GZIP_CMPRSN_FLAG", length = 1, nullable = true)
	private String gzipCmprsnFlag;

}
