package com.dataeconomy.migration.app.mysql.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DMU_ROLES")
public class DMURoles {
	
	@Id
	@Column(name = "ROLE_ID", length = 50, nullable = false)
	private String roleId;

	@Column(name = "ROLE_NAME", length = 100, nullable = false)
	private Long roleName;
}
