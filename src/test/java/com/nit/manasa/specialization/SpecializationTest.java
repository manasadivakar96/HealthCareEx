package com.nit.manasa.specialization;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.List;

import org.junit.jupiter.api.ClassOrderer.OrderAnnotation;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.nit.manasa.entity.Specialization;
import com.nit.manasa.repo.SpecializationRepository;

@DataJpaTest(showSql=true)

@AutoConfigureTestDatabase(replace=Replace.NONE)
@Rollback(false)
public class SpecializationTest {
     @Autowired
	
 private SpecializationRepository repo;
      
     @Test
     @Order(1)
     public void testSpecCreate() {
    	 Specialization spec = new Specialization(null,"CRDLS","Cardiologist","They are expert in heart");
    	 spec = repo.save(spec);
    	 assertNotNull(spec.getId(),"spec is not created!");
     }
    @Test
    @Order(2)
    public void testSpecFetchAll() {
    	List<Specialization> list = repo.findAll();
    	assertNotNull(list);
    	if(list.isEmpty()) {
    		fail("No data exist in Database");
    	}
    }
     
     
}
