package quebec.stranger.artGallery.dao;



import quebec.stranger.artGallery.models.Artist;
import quebec.stranger.artGallery.models.Order;
import quebec.stranger.artGallery.models.Poster;
import quebec.stranger.artGallery.models.User;

import java.util.List;

public interface DAO {

    void saveArtist(Artist theArtist);
    void saveOrder(Order theOrder);
    void savePoster(Poster thePoster);
    void saveUser(User theUser);

    Artist findArtist(int id);
    Order findOrder(int id);
    Poster findPoster(int id);
    User findUser(int id);

    void updateArtist(Artist theArtist);
    void updateOrder(Order theOrder);
    void updatePoster(Poster thePoster);
    void updateUser(User theUser);

    void deleteArtist(int id);
    void deleteOrder(int id);
    void deletePoster(int id);
    void deleteUser(int id);

    List<Artist> getAllArtists();
    List<Order> getAllOrders();
    List<Poster> getAllPosters();
    List<User> getAllUsers();
}