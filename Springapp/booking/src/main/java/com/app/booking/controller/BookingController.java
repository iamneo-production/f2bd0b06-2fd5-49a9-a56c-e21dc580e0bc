package com.app.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.booking.model.CustomerUser;
import com.app.booking.service.BookingService;

@RestController
@CrossOrigin(origins = "")
public class BookingController {
	@Autowired
	private BookingService service;
	@PostMapping("/customeruser")
	public CustomerUser bookingcustomer(@RequestBody CustomerUser customeruser) {
		
		CustomerUser customeruserobj = null;
		customeruserobj = service.saveCustomerUser(customeruser);
		return customeruserobj;
	}

}
