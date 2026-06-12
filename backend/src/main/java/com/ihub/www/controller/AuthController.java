package com.ihub.www.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.service.AuthService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth/api")
public class AuthController 
{
	@Autowired
	private AuthService authService;
	
	@PostMapping("/login")
	public boolean login(@RequestBody Map<String,String> data)
	{
		return authService.login(data.get("username"), data.get("password"));
	}
}









