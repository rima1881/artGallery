package quebec.stranger.artGallery.services;

import quebec.stranger.artGallery.models.Artist;

import java.util.List;

public interface ArtistService {

    public List<Artist> getAll();
    public void saveArtist(Artist theArtist);
    public Artist findArtist(int id);
}
