package com.dataeconomy.migration.app.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(Include.NON_NULL)
public class ConnectionDto {

	private Long srNo;

	private TGTOtherPropDto tgtOtherPropDto;

	private String hiveCnctnFlag;

	private String hiveHostName;

	private Long hivePortNmbr;

	private String impalaCnctnFlag;

	private String impalaHostName;

	private Long impalaPortNmbr;

	private String sparkCnctnFlag;

	private String sqlWhDir;

	private String hiveMsUri;

	private String credentialStrgType;

	private String awsAccessIdLc;

	private String awsSecretKeyLc;

	private String awsAccessIdSc;

	private String awsSecretKeySc;

	private String roleArn;

	private String principalArn;

	private String samlProviderArn;

	private String roleSesnName;

	private String policyArnMembers;

	private String externalId;

	private String fdrtdUserName;

	private String inlineSesnPolicy;

	private Long duration;

	private String ldapUserName;

	private String ldapUserPassw;

	private String ldapDomain;

	private String scCrdntlAccessType;

	private String authenticationType;

	private String ldapCnctnFlag;

	private String kerberosHostRealm;

	private String kerberosHostFqdn;

	private String kerberosCnctnFlag;

	private String textFormatFlag;

	private String kerberosServiceName;

	private String sslKeystorePath;

}
