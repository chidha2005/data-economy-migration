package com.dataeconomy.migration.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dataeconomy.migration.app.model.UserDto;
import com.dataeconomy.migration.app.mysql.entity.DMUUsers;
import com.dataeconomy.migration.app.mysql.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<UserDto> getUsers() {
		log.info(" UserService : getUsers() ");
		try {
			List<DMUUsers> usersList = userRepository.findAll();
			return Optional.ofNullable(usersList).orElse(new ArrayList<>()).stream().filter(Objects::nonNull)
					.map(user -> UserDto.builder().emailId(user.getEmailId()).userId(user.getUserId())
							.srNo(user.getSrNo()).userRole(user.getUserRole()).build())
					.collect(Collectors.toList());

		} catch (Exception exception) {
			return Collections.emptyList();
		}
	}

	public UserDto getUser(String userName) {
		log.info(" UserService : getUser() ");
		try {
			Optional<DMUUsers> dmuUsersOptional = userRepository.findById(userName);
			if (dmuUsersOptional.isPresent()) {
				DMUUsers dmuUser = dmuUsersOptional.get();
				return UserDto.builder().emailId(dmuUser.getEmailId()).userId(dmuUser.getUserId())
						.srNo(dmuUser.getSrNo()).userRole(dmuUser.getUserRole()).build();
			}
			return UserDto.builder().build();
		} catch (Exception exception) {
			return UserDto.builder().build();
		}
	}

	public UserDto saveUser(UserDto userDto) {
		log.info(" UserService : saveUser() ");
		try {
			DMUUsers dmuUser = userRepository.save(DMUUsers.builder().emailId(userDto.getEmailId())
					.userId(userDto.getUserId()).srNo(userDto.getSrNo()).userRole(userDto.getUserRole()).build());
			return UserDto.builder().emailId(dmuUser.getEmailId()).userId(dmuUser.getUserId()).srNo(dmuUser.getSrNo())
					.userRole(dmuUser.getUserRole()).build();
		} catch (Exception exception) {
			return UserDto.builder().build();
		}
	}

	public boolean purgeUsers(String userId) {
		try {
			userRepository.deleteById(userId);
			return true;
		} catch (Exception exception) {
			return false;
		}
	}

	public boolean editUser(UserDto userDto) {
		try {
			Optional<DMUUsers> dmuUsersOpt = userRepository.findById(userDto.getUserId());
			if (dmuUsersOpt.isPresent()) {
				DMUUsers dmuUsers = dmuUsersOpt.get();
				dmuUsers.setEmailId(userDto.getEmailId());
				dmuUsers.setPassword(userDto.getPassword());
				dmuUsers.setUserRole(userDto.getUserRole()); 
				dmuUsers.setSrNo(userDto.getSrNo());
				userRepository.save(dmuUsers);
				return true;
			}
			return false;
		} catch (Exception exception) {
			return false;
		}
	}
}
