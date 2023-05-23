package quebec.stranger.artGallery.controllers.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quebec.stranger.artGallery.models.User;
import quebec.stranger.artGallery.services.UserService;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api/user")
public class UserController {


    @GetMapping("/login")
    public User Login(String email,String password){



        return null;
    }

    @GetMapping("/signup")
    public String Signup(){
        return "fuck off";
    }

    @GetMapping("/forgot")
    public String ForgotPassword(){
        return "stupid ass hole";
    }

}
