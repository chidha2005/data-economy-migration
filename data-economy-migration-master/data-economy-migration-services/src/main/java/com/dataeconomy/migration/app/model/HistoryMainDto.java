package com.dataeconomy.migration.app.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HistoryMainDto {

	private String requestNo;

	private String userId;

	private LocalDateTime requestedTime;

	private String status;

	private String requestType;

	private LocalDateTime scriptGenCmpltTime;

	private LocalDateTime exctnCmpltTime;

	private String tknztnEnabled;

	private String tknztnFilePath;
}
