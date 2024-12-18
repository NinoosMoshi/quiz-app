package com.ninos.service.user;

import com.ninos.entity.User;
import com.ninos.enums.UserRole;
import com.ninos.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void createAdminUser() {
        User optionalUser = userRepository.findByRole(UserRole.ADMIN);
        if (optionalUser == null) {
            User user = new User();
            user.setRole(UserRole.ADMIN);
            user.setName("Admin");
            user.setPassword("admin");
            user.setEmail("admin@gmail.com");
            userRepository.save(user);
        }
    }


    public Boolean userExistEmail(String email) {
        return userRepository.existsByEmail(email);
    }


    public User createUser(User user) {
        user.setRole(UserRole.USER);
        return userRepository.save(user);
    }

    @Override
    public User login(User user) {
        Optional<User> optionalUser = userRepository.findByEmail(user.getEmail());
        if (optionalUser.isPresent() && user.getPassword().equals(optionalUser.get().getPassword())) {
            return optionalUser.get();
        }
        return null;
    }





}
