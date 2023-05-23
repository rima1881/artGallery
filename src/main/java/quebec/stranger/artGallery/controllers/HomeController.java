package quebec.stranger.artGallery.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/home")
public class HomeController {

    @GetMapping("")
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView("index");

        return mv;
    }

    @GetMapping("/info")
    public ModelAndView info(){
        ModelAndView mv = new ModelAndView("info");

        return mv;
    }
}
