package com.dataeconomy.migration.app.mysql.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DMU_S3")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DMUS3 {

	@Id
	@Column(name = "SR_NO", length = 11, nullable = false)
	private Long srNo;

	@Column(name = "CREDENTIAL_STRG_TYPE", length = 10, nullable = false)
	private String credentialStrgType;

	@Column(name = "AWS_ACCESS_ID_LC", length = 200, nullable = true)
	private String awsAccessIdLc;

	@Column(name = "AWS_SECRET_KEY_LC", length = 1000, nullable = true)
	private String awsSecretKeyLc;

	@Column(name = "AWS_ACCESS_ID_SC", length = 200, nullable = true)
	private String awsAccessIdSc;

	@Column(name = "AWS_SECRET_KEY_SC", length = 1000, nullable = true)
	private String awsSecretKeySc;

	@Column(name = "ROLE_ARN", length = 2048, nullable = true)
	private String roleArn;

	@Column(name = "PRINCIPAL_ARN", length = 2048, nullable = true)
	private String principalArn;

	@Column(name = "SAML_PROVIDER_ARN", length = 2048, nullable = true)
	private String samlProviderArn;

	@Column(name = "ROLE_SESN_NAME", length = 64, nullable = true)
	private String roleSesnName;

	@Column(name = "POLICY_ARN_MEMBERS", nullable = true)
	@Type(type = "text")
	private String policyArnMembers;

	@Column(name = "EXTERNAL_ID", length = 1224, nullable = true)
	private String externalId;

	@Column(name = "FDRTD_USER_NAME", length = 32, nullable = true)
	private String fdrtdUserName;

	@Column(name = "INLINE_SESN_POLICY", length = 2048, nullable = true)
	private String inlineSesnPolicy;

	@Column(name = "DURATION", length = 11, nullable = true)
	private Long duration;

	@Column(name = "LDAP_USER_NAME", length = 100, nullable = true)
	private String ldapUserName;

	@Column(name = "LDAP_USER_PASSW", length = 1000, nullable = true)
	private String ldapUserPassw;

	@Column(name = "LDAP_DOMAIN", length = 300, nullable = true)
	private String ldapDomain;

	@Column(name = "SC_CRDNTL_ACCESS_TYPE", length = 50, nullable = true)
	private String scCrdntlAccessType;

}
