package com.app.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.booking.model.CustomerUser;
import com.app.booking.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository repo;
	
	public CustomerUser saveCustomerUser(CustomerUser customeruser) {
	return	repo.save(customeruser);
		
	}

}
