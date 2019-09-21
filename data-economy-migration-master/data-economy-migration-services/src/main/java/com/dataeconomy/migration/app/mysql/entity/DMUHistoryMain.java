package com.dataeconomy.migration.app.mysql.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DMU_HISTORY_MAIN")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DMUHistoryMain {

	@Id
	@Column(name = "REQUEST_NO", length = 100, nullable = false)
	private String requestNo;

	@Column(name = "USER_ID", length = 100, nullable = false)
	private String userId;

	@Column(name = "REQUESTED_TIME", length = 500, nullable = true)
	@CreationTimestamp
	private LocalDateTime requestedTime;

	@Column(name = "STATUS", length = 100, nullable = true)
	private String status;

	@Column(name = "REQUEST_TYPE", length = 100, nullable = true)
	private String requestType;

	@Column(name = "SCRIPT_GEN_CMPLT_TIME", nullable = true)
	@CreationTimestamp
	private LocalDateTime scriptGenCmpltTime;

	@Column(name = "EXCTN_CMPLT_TIME", nullable = true)
	@CreationTimestamp
	private LocalDateTime exctnCmpltTime;

	@Column(name = "TKNZTN_ENABLED", length = 1, nullable = true)
	private String tknztnEnabled;

	@Column(name = "TKNZTN_FILE_PATH", length = 1000, nullable = true)
	private String tknztnFilePath;

}
