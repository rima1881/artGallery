package quebec.stranger.artGallery.controllers.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quebec.stranger.artGallery.models.Artist;
import quebec.stranger.artGallery.models.Poster;
import quebec.stranger.artGallery.services.PosterService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PosterController {

    private PosterService posterService;

    @Autowired
    PosterController(PosterService thePosterService){
        posterService = thePosterService;
    }

    @GetMapping("/posters")
    public List<Poster> GetAll() {
        return posterService.getAll();
    }

}
