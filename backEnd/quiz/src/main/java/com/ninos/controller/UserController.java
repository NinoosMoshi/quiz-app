package com.ninos.controller;

import com.ninos.entity.User;
import com.ninos.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("api/auth")
@CrossOrigin("*")
public class UserController {


    private final UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signupUser(@RequestBody User user) {
        if(userService.userExistEmail(user.getEmail())) {
            return new ResponseEntity<>("user already exists",HttpStatus.NOT_ACCEPTABLE);
        }

        User createdUser = userService.createUser(user);
        if(createdUser == null) {
            return new ResponseEntity<>("User creation failed", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User dbUser = userService.login(user);
        if(dbUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(dbUser, HttpStatus.OK);
    }


}
