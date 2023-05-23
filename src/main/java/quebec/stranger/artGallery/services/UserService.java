package quebec.stranger.artGallery.services;

import quebec.stranger.artGallery.models.User;

public interface UserService {

    public User findUser(String email, String pwd);

}
