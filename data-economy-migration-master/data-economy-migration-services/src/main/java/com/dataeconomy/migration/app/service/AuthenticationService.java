package com.dataeconomy.migration.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.ConnectionDto;
import com.dataeconomy.migration.app.mysql.entity.DMUAuthentication;
import com.dataeconomy.migration.app.mysql.repository.AuthenticationRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AuthenticationService {

	@Autowired
	private AuthenticationRepository authenticationRepository;

	public List<ConnectionDto> getAllAuthenticationDetails() {
		log.info(" AuthenticationService :: getAllAuthenticationDetails ");
		try {
			List<DMUAuthentication> authDetailsList = authenticationRepository.findAll();
			return Optional.ofNullable(authDetailsList).orElse(new ArrayList<>()).stream().map(authenticationEntity -> {
				return ConnectionDto.builder().srNo(authenticationEntity.getSrNo())
						.authenticationType(authenticationEntity.getAuthenticationType())
						.ldapCnctnFlag(authenticationEntity.getLdapCnctnFlag())
						.ldapUserName(authenticationEntity.getLdapUserName())
						.ldapUserPassw(authenticationEntity.getLdapPassword())
						.ldapDomain(authenticationEntity.getLdapDomainName())
						.kerberosCnctnFlag(authenticationEntity.getKerberosCnctnFlag())
						.kerberosHostRealm(authenticationEntity.getKerberosHostRealm())
						.kerberosHostFqdn(authenticationEntity.getKerberosHostFqdn())
						.kerberosServiceName(authenticationEntity.getKerberosServiceName())
						.sslKeystorePath(authenticationEntity.getSslKeystorePath()).build();
			}).collect(Collectors.toList());
		} catch (Exception exception) {
			log.info(" Exception occured at AuthenticationService :: getAllAuthenticationDetails {} ",
					ExceptionUtils.getStackTrace(exception));
			return Collections.emptyList();
		}
	}

}
