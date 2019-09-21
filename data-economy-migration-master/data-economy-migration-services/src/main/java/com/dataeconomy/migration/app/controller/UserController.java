package com.dataeconomy.migration.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dataeconomy.migration.app.model.UserDto;
import com.dataeconomy.migration.app.service.UserService;

@RestController
@RequestMapping("/datamigration/users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/all")
	public List<UserDto> getUsers() {
		return userService.getUsers();
	}

	@GetMapping("/{userId}")
	public UserDto getUsers(@PathParam("userId") String userId) {
		return userService.getUser(userId);
	}

	@PostMapping("/save")
	public UserDto saveUser(@RequestBody UserDto userDto) {
		return userService.saveUser(userDto);
	}

	@PostMapping("/edit")
	public boolean editUser(@RequestBody UserDto userDto) {
		return userService.editUser(userDto);
	}

	@DeleteMapping("/delete")
	public boolean purgeUsers(@PathParam("userId") String userId) {
		return userService.purgeUsers(userId);
	}
}
