package apis.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(@Autowired UserRepository userRepository) { this.userRepository = userRepository; }

    public User createUser(User user) {
        userRepository.save(user);
        return user;
    }

    public Optional<User> getUserbyId(Integer id) {
        return this.userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return (List<User>) this.userRepository.findAll();
    }

    public Optional<User> updateUser(Integer id, User newData) {
        return this.userRepository.findById(id).map(user -> {
            user.setDob(newData.getDob());
            user.setEmail(newData.getEmail());
            user.setFirstName(newData.getFirstName());
            user.setLastName(newData.getLastName());
            user.setRole(newData.getRole());
            user.setPassword(newData.getPassword());
            return this.userRepository.save(user);
        });
    }

    public Integer deleteUser(Integer id) {
        this.userRepository.deleteById(id);
        return id;
    }

    public UserRepository getUserRepository() {
        return userRepository;
    }

    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
