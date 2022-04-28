package com.app.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.booking.model.CustomerUser;

public interface BookingRepository extends JpaRepository<CustomerUser, Integer> {

}
