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
@Table(name = "DMU_USERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DMUUsers {

	@Id
	@Column(name = "USER_ID", length = 20, nullable = false)
	private String userId;

	@Column(name = "USER_ROLE", length = 50, nullable = false)
	private String userRole;

	@Column(name = "EMAIL_ID", length = 100, nullable = true)
	private String emailId;

	@Column(name = "PASSWORD", length = 20, nullable = false)
	private String password;

	@Column(name = "SR_NO", length = 11, nullable = true)
	private String srNo;
}
