package com.app.booking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.Temporal;
//import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity

public class CustomerUser {
	@Id
    private String name;
    private int mobilenumber;
    @JsonFormat(pattern = "HH-mm-ss", shape = Shape.STRING)
    @Column(name="time")
    private String time;
    @JsonFormat(pattern = "yyyy-MM-dd", shape = Shape.STRING)
    @Column (name= "date")
    private String date;
    
    
	public CustomerUser(String name, int mobilenumber, String time, String date) {
		super();
		this.name = name;
		this.mobilenumber = mobilenumber;
		this.time = time;
		this.date= date;
	}
	
	public CustomerUser() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(int mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	
	
	
}
