package com.dataeconomy.migration.app.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

//@Configuration
public class DataEconomyMigrationPersistenceConfig {

	@Bean(name = "hiveJdbcDataSource")
	@ConfigurationProperties(prefix = "hs2.datasource")
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}

	@Bean(name = "hiveJdbcTemplate")
	public JdbcTemplate hiveJdbcTemplate(@Qualifier("hiveJdbcDataSource") DataSource dataSource) {
		return new JdbcTemplate(dataSource);
	}
}
