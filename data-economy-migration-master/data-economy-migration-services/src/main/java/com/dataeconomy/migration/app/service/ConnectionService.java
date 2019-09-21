package com.dataeconomy.migration.app.service;

import java.sql.Connection;
import java.text.MessageFormat;
import java.util.Objects;
import java.util.Optional;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.ConnectionDto;
import com.dataeconomy.migration.app.model.TGTOtherPropDto;
import com.dataeconomy.migration.app.mysql.entity.DMUAuthentication;
import com.dataeconomy.migration.app.mysql.entity.DMUHdfs;
import com.dataeconomy.migration.app.mysql.entity.DMUS3;
import com.dataeconomy.migration.app.mysql.entity.TGTFormatProp;
import com.dataeconomy.migration.app.mysql.entity.TGTOtherProp;
import com.dataeconomy.migration.app.mysql.repository.AuthenticationRepository;
import com.dataeconomy.migration.app.mysql.repository.DMUS3Repository;
import com.dataeconomy.migration.app.mysql.repository.HDFSRepository;
import com.dataeconomy.migration.app.mysql.repository.TGTFormatPropRepository;
import com.dataeconomy.migration.app.mysql.repository.TGTOtherPropRepository;
import com.dataeconomy.migration.app.util.Constants;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ConnectionService {

	@Value("${hs2.datasource.driver-class-name: com.cloudera.hive.jdbc41.HS2Driver}")
	public String hs2Driver;

	@Value("${hs2.validate.url}")
	public String hs2DriverUrl;

	@Autowired
	private HDFSRepository hdfsRepository;

	@Autowired
	private DMUS3Repository dmuS3Repository;

	@Autowired
	private AuthenticationRepository authenticationRepository;

	@Autowired
	private TGTFormatPropRepository tgtFormatPropRepository;

	@Autowired
	private TGTOtherPropRepository tgtOtherPropRepository;

	public boolean validateConnection(ConnectionDto connectionDto) {
		log.info(" ConnectionService :: validateConnection {} ",
				Objects.toString(connectionDto, "Invlaid Connection parameters to test "));
		Connection conn = null;
		try {
			String url = MessageFormat.format(hs2DriverUrl, connectionDto.getHiveHostName(),
					connectionDto.getHivePortNmbr());
			Class.forName(hs2Driver);
			conn = java.sql.DriverManager.getConnection(url, "", "");
			return conn.isValid(10);
		} catch (Exception exception) {
			log.info(" Exception occured at ConnectionService :: validateConnection {} ",
					ExceptionUtils.getStackTrace(exception));
		} finally {
			DbUtils.closeQuietly(conn);
		}
		return false;
	}

	public boolean saveConnectionDetails(String requestParam, String awsRequestParam, ConnectionDto connectionDto) {
		log.info(" ConnectionService :: saveConnectionDetails :: requestParam : {} :: connection details {} ",
				requestParam, Objects.toString(connectionDto, "Invlaid Connection parameters to test "));
		try {
			if (StringUtils.equalsIgnoreCase(awsRequestParam, Constants.PROVIDE)) {
				persistConnectionDetailsForAws(connectionDto);
			} else if (StringUtils.equalsIgnoreCase(requestParam, Constants.HIVE)) {
				persistConnectionDetailsForHive(connectionDto);
			} else if (StringUtils.equalsIgnoreCase(requestParam, Constants.IMPALA)) {
				persistConnectionDetailsForImpala(connectionDto);
			}
		} catch (Exception exception) {
			log.info(" Exception occured at ConnectionService :: saveConnectionDetails {} ",
					ExceptionUtils.getStackTrace(exception));
		}
		return false;
	}

	public ConnectionDto getConnectionDetails() {
		ConnectionDto connectionDto = ConnectionDto.builder().build();
		try {
			Optional<DMUHdfs> dmuHdfs = hdfsRepository.findById(1L);
			Optional<DMUS3> dmuS3 = dmuS3Repository.findById(1L);
			Optional<DMUAuthentication> dmuAuthentication = authenticationRepository.findById(1L);
			Optional<TGTFormatProp> tgtFormatProp = tgtFormatPropRepository.findById(1L);
			Optional<TGTOtherProp> tgtOtherProp = tgtOtherPropRepository.findById(1L);

			if (dmuHdfs.isPresent()) {
				DMUHdfs dmuHdfsObj = dmuHdfs.get();
				connectionDto.setHiveCnctnFlag(dmuHdfsObj.getHiveCnctnFlag());
				connectionDto.setImpalaCnctnFlag(dmuHdfsObj.getImpalaCnctnFlag());
				connectionDto.setSparkCnctnFlag(String.valueOf(dmuHdfsObj.getSparkCnctnFlag()));
			}

			if (dmuS3.isPresent()) {
				DMUS3 dmuS3Obj = dmuS3.get();
				connectionDto.setCredentialStrgType(dmuS3Obj.getCredentialStrgType());
				connectionDto.setAwsAccessIdLc(dmuS3Obj.getAwsAccessIdLc());
				connectionDto.setAwsSecretKeyLc(dmuS3Obj.getAwsSecretKeyLc());
				connectionDto.setScCrdntlAccessType(dmuS3Obj.getScCrdntlAccessType());
			}

			if (dmuAuthentication.isPresent()) {
				DMUAuthentication dmuAuthenticationObj = dmuAuthentication.get();
				connectionDto.setAuthenticationType(dmuAuthenticationObj.getAuthenticationType());
				connectionDto.setLdapCnctnFlag(dmuAuthenticationObj.getLdapCnctnFlag());
				connectionDto.setKerberosCnctnFlag("Y");
			}

			if (tgtFormatProp.isPresent()) {
				TGTFormatProp tgtFormatPropObj = tgtFormatProp.get();
				connectionDto.setTextFormatFlag(tgtFormatPropObj.getTextFormatFlag());
			}

			if (tgtOtherProp.isPresent()) {
				TGTOtherProp tgtOtherPropObj = tgtOtherProp.get();
				connectionDto
						.setTgtOtherPropDto(TGTOtherPropDto.builder().parallelJobs(tgtOtherPropObj.getParallelJobs())
								.parallelUsrRqst(tgtOtherPropObj.getParallelUsrRqst()).build());
			}

		} catch (Exception exception) {
			log.info(" Exception occured at ConnectionService :: getConnectionDetails {} ",
					ExceptionUtils.getStackTrace(exception));
		}
		return connectionDto;
	}

	private void persistConnectionDetailsForAws(ConnectionDto connectionDto) {
		dmuS3Repository.saveAndFlush(DMUS3.builder().awsAccessIdLc(connectionDto.getAwsAccessIdLc())
				.awsSecretKeyLc(connectionDto.getAwsSecretKeyLc()).srNo(1L).build());
	}

	private void persistConnectionDetailsForImpala(ConnectionDto connectionDto) {
		hdfsRepository.saveAndFlush(DMUHdfs.builder().hiveCnctnFlag("Y").hiveHostName(connectionDto.getHiveHostName())
				.hivePortNmbr(Long.valueOf(connectionDto.getHivePortNmbr())).srNo(1L).build());
	}

	private void persistConnectionDetailsForHive(ConnectionDto connectionDto) {
		hdfsRepository
				.saveAndFlush(DMUHdfs.builder().impalaCnctnFlag("Y").impalaHostName(connectionDto.getImpalaHostName())
						.impalaPortNmbr(Long.valueOf(connectionDto.getImpalaPortNmbr())).srNo(1L).build());
	}
}
