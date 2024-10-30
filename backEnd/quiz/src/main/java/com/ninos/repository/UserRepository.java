package com.ninos.repository;

import com.ninos.entity.User;
import com.ninos.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByRole(UserRole userRole);

    Boolean existsByEmail(String email);
}
