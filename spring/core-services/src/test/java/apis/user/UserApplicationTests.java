package apis.user;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class UserApplicationTests {

    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;

    @Test
    public void createUserTest() {
        User user1 = new User();
        user1.setId(1);
        user1.setDob("00/00/0000");
        user1.setPassword("password");
        user1.setEmail("email");
        user1.setLastName("lname");
        user1.setFirstName("fname");
        user1.setRole("role");

        Mockito.when(this.userService.createUser(user1)).thenReturn(user1);

        assertThat(this.userController.createUser(user1).getBody()).isEqualTo(user1);
        assertThat(this.userController.createUser(user1).getStatusCodeValue()).isEqualTo(201);
    }

    @Test
    public void getUserByIdTest() {
        User user1 = new User();
        user1.setId(1);
        user1.setDob("00/00/0000");
        user1.setPassword("password");
        user1.setEmail("email");
        user1.setLastName("lname");
        user1.setFirstName("fname");
        user1.setRole("role");

        Mockito.when(this.userService.getUserbyId(1)).thenReturn(java.util.Optional.of(user1));

        assertThat(this.userController.getUserById(1).getBody()).isEqualTo(user1);
        assertThat(this.userController.getUserById(1).getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    public void getAllUsersTest() {
        User user1 = new User();
        user1.setId(1);
        user1.setDob("00/00/0000");
        user1.setPassword("password");
        user1.setEmail("email");
        user1.setLastName("lname");
        user1.setFirstName("fname");
        user1.setRole("role");

        User user2 = new User();
        user2.setId(2);
        user2.setDob("22/22/22");
        user2.setPassword("2password");
        user2.setEmail("2email");
        user2.setLastName("2lname");
        user2.setFirstName("2fname");
        user2.setRole("2role");

        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);

        Mockito.when(this.userService.getAllUsers()).thenReturn(users);

        assertThat(this.userController.getAllUsers().getBody()).isEqualTo(users);
        assertThat(this.userController.getAllUsers().getStatusCodeValue()).isEqualTo(200);

    }

    @Test
    public void updateUserTest() {
        User user1 = new User();
        user1.setId(1);
        user1.setDob("00/00/0000");
        user1.setPassword("password");
        user1.setEmail("email");
        user1.setLastName("lname");
        user1.setFirstName("fname");
        user1.setRole("role");

        Mockito.when(this.userService.updateUser(1, user1)).thenReturn(java.util.Optional.of(user1));

        assertThat(this.userController.updateUser(1, user1).getBody()).isEqualTo(java.util.Optional.of(user1));
        assertThat(this.userController.updateUser(1, user1).getStatusCodeValue()).isEqualTo(202);

    }

    @Test
    public void deleteUserTest(){
        User user1 = new User();
        user1.setId(1);
        user1.setDob("00/00/0000");
        user1.setPassword("password");
        user1.setEmail("email");
        user1.setLastName("lname");
        user1.setFirstName("fname");
        user1.setRole("role");

        Mockito.when(this.userService.deleteUser(1)).thenReturn(user1.getId());

        assertThat(this.userController.deleteUser(1).getBody()).isEqualTo(java.util.Optional.of(user1.getId()));
        assertThat(this.userController.deleteUser(1).getStatusCodeValue()).isEqualTo(200);
    }
}
