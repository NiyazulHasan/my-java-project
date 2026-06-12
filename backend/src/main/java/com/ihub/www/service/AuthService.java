package com.ihub.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ihub.www.entity.User;
import com.ihub.www.repo.UserRepository;

@Service
public class AuthService 
{
	@Autowired
	private UserRepository userRepository;
	
	public boolean login(String username,String password)
	{
		User user = userRepository.findByUsername(username);
		if(user==null) return false;
		
		return user.getPassword().equals(password);
	}
}
