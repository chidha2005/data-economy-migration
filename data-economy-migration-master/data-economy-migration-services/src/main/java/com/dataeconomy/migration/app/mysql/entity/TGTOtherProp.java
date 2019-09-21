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
@Table(name = "TGT_OTHER_PROP")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TGTOtherProp {

	@Id
	@Column(name = "SR_NO", length = 11, nullable = true)
	private Long srNo;

	@Column(name = "PARALLEL_JOBS", length = 11, nullable = false)
	private Long parallelJobs;

	@Column(name = "PARALLEL_USR_RQST", length = 11, nullable = false)
	private Long parallelUsrRqst;

}
