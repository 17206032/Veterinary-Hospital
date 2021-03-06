package com.backend.springboothospital.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;

//登录功能 后端链接数据库 并获得数据
@Entity
//对于booking数据库
@Table(name = "booking")
@JsonIgnoreProperties({"handler","hibernateLazyInitializer"})
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @ManyToOne
    @JoinColumn(name="petid")
    private Pet pet;

    int urgency;
    int hospital;
    String time;
    String symptom;
    Date needtime;
    int distribution;
    Date releasetime;
    int ratedis;
    int ratevalue;
    String ratecontent;

    public int getRatedis() {
        return ratedis;
    }

    public void setRatedis(int ratedis) {
        this.ratedis = ratedis;
    }

    public int getRatevalue() {
        return ratevalue;
    }

    public void setRatevalue(int ratevalue) {
        this.ratevalue = ratevalue;
    }

    public String getRatecontent() {
        return ratecontent;
    }

    public void setRatecontent(String ratecontent) {
        this.ratecontent = ratecontent;
    }

    public Date getReleasetime() {
        return releasetime;
    }

    public void setReleasetime(Date releasetime) {
        this.releasetime = releasetime;
    }

    public Date getNeedtime() {
        return needtime;
    }

    public void setNeedtime(Date needtime) {
        this.needtime = needtime;
    }

    public Pet getPet(){
        return pet;
    }

    public void setPet(Pet pet){
        this.pet = pet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUrgency() {
        return urgency;
    }

    public void setUrgency(int urgency) {
        this.urgency = urgency;
    }

    public int getHospital() {
        return hospital;
    }

    public void setHospital(int hospital) {
        this.hospital = hospital;
    }


    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSymptom() {
        return symptom;
    }

    public void setSymptom(String symptom) {
        this.symptom = symptom;
    }

    public int getDistribution() {
        return distribution;
    }

    public void setDistribution(int distribution) {
        this.distribution = distribution;
    }
}