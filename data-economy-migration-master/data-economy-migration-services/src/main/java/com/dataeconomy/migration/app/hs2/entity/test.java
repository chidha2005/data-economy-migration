/*
 * package com.dataeconomy.migration.app.hs2.entity;
 * 
 * import java.sql.Connection; import java.sql.DriverManager; import
 * java.sql.ResultSet; import java.sql.SQLException; import java.sql.Statement;
 * 
 * public class test {
 * 
 * public static void main(String[] args) throws SQLException,
 * ClassNotFoundException { Class.forName("com.cloudera.hive.jdbc41.HS2Driver");
 * Connection con =
 * DriverManager.getConnection("jdbc:hive2://18.216.202.239:10000/retaildb", "",
 * ""); Statement stmt = con.createStatement(); ResultSet rs =
 * stmt.executeQuery("select * from DMU_S3"); while (rs.next())
 * System.out.println(rs.getString(1)); con.close(); }
 * 
 * }
 */