package com.dataeconomy.migration.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TGTFormatPropDto {

	private Long srNo;

	private String textFormatFlag;

	private String srcFormatFlag;

	private String fieldDelimiter;

	private String sqncFormatFlag;

	private String rcFormatFlag;

	private String avroFormatFlag;

	private String orcFormatFlag;

	private String parquetFormatFlag;

	private String srcCmprsnFlag;

	private String uncmprsnFlag;

	private String gzipCmprsnFlag;

}
