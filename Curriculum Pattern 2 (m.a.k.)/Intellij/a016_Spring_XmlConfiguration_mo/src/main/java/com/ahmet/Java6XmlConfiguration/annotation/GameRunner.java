package com.ahmet.Java6XmlConfiguration.annotation;

import org.springframework.stereotype.Component;

@Component // 'Spring tarafından yönetilen sınıf'.  (Repository, Service, Controller -> bunlar Component'in alt kırılımlarıdır)
public class GameRunner {

//    MarioGame marioGame;
//    Pacman pacman;
    IGameConsole game; // Polimorfizm ile kod sayısını azaltıyoruz.

    public GameRunner(IGameConsole gameSelected) {
//        this.marioGame = new MarioGame();
//        this.pacman = new Pacman();
        this.game = gameSelected;
    }

    public void run() {
//        System.out.println("Oyun çalışıyor: " + marioGame.getClass().getName());
//        marioGame.up();
//        marioGame.down();
//        marioGame.left();
//        marioGame.right();
//        System.out.println("Oyun çalışıyor: " + pacman.getClass().getName());
//        pacman.up();
//        pacman.down();
//        pacman.left();
//        pacman.right();
        System.out.println("Oyun çalışıyor: " + game.getClass().getSimpleName());
        System.out.println("Hash code: " + game.hashCode());
        game.up();
        game.down();
        game.left();
        game.right();
    }
}
