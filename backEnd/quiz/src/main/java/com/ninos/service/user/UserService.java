package com.ninos.service.user;

import com.ninos.entity.User;

public interface UserService {

    User createUser(User user);
    Boolean userExistEmail(String email);

    User login(User user);
}
