package com.example.oblig2;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class FilmController {

    public final ArrayList<billett> alleBilletter = new ArrayList<>();

    @GetMapping("/lagre")
    public void lagreBillett(billett innBillett){
        alleBilletter.add(innBillett);
    }
    @GetMapping("/hentAlle")
    public ArrayList<billett> hentAlle(){
        return alleBilletter;
    }
    @GetMapping("/slett")
    public void slettBillett(){
     alleBilletter.clear();
    }
}
