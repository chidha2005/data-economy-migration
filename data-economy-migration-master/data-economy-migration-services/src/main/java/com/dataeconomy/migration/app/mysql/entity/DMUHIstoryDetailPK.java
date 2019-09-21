package com.dataeconomy.migration.app.mysql.entity;

import java.io.Serializable;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DMUHIstoryDetailPK implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "REQUEST_NO", length = 100, nullable = false)
	private String requestNo;

	@Column(name = "SR_NO", length = 11, nullable = false)
	private Long srNo;
}
