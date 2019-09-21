/*
 * package com.dataeconomy.migration.app.hs2.entity;
 * 
 * import java.sql.Connection; import java.sql.DriverManager; import
 * java.sql.ResultSet; import java.sql.SQLException; import java.sql.Statement;
 * 
 * public class Runner { private static String driverName =
 * "org.apache.hive.jdbc.HiveDriver";
 * 
 * public static void main(String[] args) throws SQLException {
 * 
 * try { Class.forName(driverName); } catch (ClassNotFoundException ex) {
 * ex.printStackTrace(); }
 * 
 * // get connection System.out.println("before trying to connect"); Connection
 * con =
 * DriverManager.getConnection("jdbc:hive2://18.216.202.239:10000/retaildb",
 * "root", ""); System.out.println("connected");
 * 
 * // create statement Statement stmt = con.createStatement();
 * 
 * // execute statement ResultSet rs = stmt.executeQuery("SHOW DATABASES");
 * while (rs.next()) { System.out.println(rs.getString(1)); }
 * 
 * con.close(); } }
 */