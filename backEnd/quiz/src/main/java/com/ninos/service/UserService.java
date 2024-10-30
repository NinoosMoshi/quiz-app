package com.ninos.service;

import com.ninos.entity.User;

public interface UserService {

    User createUser(User user);
    Boolean userExistEmail(String email);
}
