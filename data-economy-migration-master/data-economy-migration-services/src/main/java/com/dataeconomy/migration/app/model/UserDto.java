package com.dataeconomy.migration.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {

	private String srNo;
	private String userId;
	private String userRole;
	private String emailId;
	private String password;

}
