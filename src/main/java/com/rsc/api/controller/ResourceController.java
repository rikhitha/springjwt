package com.rsc.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rsc.api.model.Country;
import com.rsc.api.service.CountryService;

// @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
// @CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ResourceController extends BaseController {
	
	@Autowired
	private CountryService service;
	
	// @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/hellouser")
	public String getUser()
	{
		return "Hello User";
	}
	
	// @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/helloadmin", method = RequestMethod.GET)
	public String getAdmin()
	{
		return "Hello Admin";
	}
	
	// @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/countries")
	public List<Country> getCountries()
	{
		System.out.println(this.getUserContext());
		return service.getCountries();
	}
	
	
}
