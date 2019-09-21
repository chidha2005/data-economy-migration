package com.dataeconomy.migration.app.mysql.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DMU_AUTHENTICATION")
public class DMUAuthentication {

	@Id
	@GeneratedValue
	@Column(name = "SR_NO", length = 11, nullable = false)
	private Long srNo;

	@Column(name = "AUTHENTICATION_TYPE", length = 10, nullable = false)
	private String authenticationType;

	@Column(name = "LDAP_CNCTN_FLAG", length = 1, nullable = true)
	private String ldapCnctnFlag;

	@Column(name = "LDAP_USER_NAME", length = 200, nullable = true)
	private String ldapUserName;

	@Column(name = "LDAP_PASSWORD", length = 1000, nullable = true)
	private String ldapPassword;

	@Column(name = "LDAP_DOMAIN_NAME", length = 200, nullable = true)
	private String ldapDomainName;

	@Column(name = "LDAP_DOMAIN_NAME", length = 200, nullable = true)
	private String kerberosCnctnFlag;

	@Column(name = "KERBEROS_HOST_REALM", length = 1, nullable = true)
	private String kerberosHostRealm;

	@Column(name = "KERBEROS_HOST_FQDN", length = 200, nullable = true)
	private String kerberosHostFqdn;

	@Column(name = "KERBEROS_SERVICE_NAME", length = 200, nullable = true)
	private String kerberosServiceName;

	@Column(name = "SSL_KEYSTORE_PATH", length = 200, nullable = true)
	private String sslKeystorePath;

}
