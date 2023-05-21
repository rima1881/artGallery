package quebec.stranger.artGallery.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quebec.stranger.artGallery.dao.DAO;
import quebec.stranger.artGallery.models.Artist;

import java.util.List;

@Service
public class ArtistServiceImpl implements ArtistService {

    private DAO dao;

    @Autowired
    public ArtistServiceImpl(DAO thedao){
        dao = thedao;
    }


    @Override
    public List<Artist> getAll() {
        return null;
    }

    @Override
    public void saveArtist(Artist theArtist) {
        dao.saveArtist(theArtist);
    }

    @Override
    public Artist findArtist(int id) {
        return dao.findArtist(id);
    }
}
