package com.ahmet.controller;

import com.ahmet.repository.entity.Tweet;
import com.ahmet.repository.entity.UserProfile;
import com.ahmet.repository.view.VwTweet;
import com.ahmet.service.*;
import jdk.swing.interop.SwingInterOpUtils;

import java.util.Scanner;

public class TweetController {
    private Scanner scanner;
    private UserProfile userProfile;
    private TweetService tweetService;
    private LikeListService likeListService;
    private FollowService followService;
    private CommentService commentService;
    private UserProfileService userProfileService;

    public TweetController() {
        this.commentService = new CommentService();
        this.followService = new FollowService();
        this.tweetService = new TweetService();
        this.likeListService = new LikeListService();
        this.userProfileService = new UserProfileService();
    }

    private int secim() {
        this.scanner = new Scanner(System.in);
        return scanner.nextInt();
    }

    private String ifade() {
        this.scanner = new Scanner(System.in);
        return scanner.nextLine();
    }
    /**
     * Bir kullanıcının akışı şeklinde yapıyoruz. Login olan
     * kullanıcının id'si üzerinden işlem yapacağız.
     * @param username
     */
    public void userPage(String username) {
        this.userProfile = userProfileService.findByUsername(username).get();
        System.out.println("*******************************");
        System.out.println("********** USER PAGE **********");
        System.out.println("*******************************");
        int secim;
        do {
            System.out.println();
            System.out.println("1- Tweet Oluştur");
            System.out.println("2- Tüm tweet'leri gör");
            System.out.println("3- Profil düzenle");
            System.out.println("0- <<<< Geri Dön");
            System.out.print("Seçim yapınız: ");
            secim = Integer.parseInt(ifade());
            switch(secim) {
                case 1: createTweet(username); break;
                case 2: listTweet(); break;
                case 3: break;
            }
        }while(secim!=0);
    }

    private void createTweet(String username) {
        System.out.println("********************************");
        System.out.println("********* TWEET OLUSTUR ********");
        System.out.println();
        System.out.println("Resim.........: ");
        String resim = ifade();
        System.out.println("Tweet.........: ");
        String tweetContent = ifade();
        Tweet tweet = Tweet.builder()
                .userid(userProfile.getId())
                .sharedate(System.currentTimeMillis())
                .image(resim)
                .content(tweetContent)
                .build();
        tweetService.save(tweet);
    }

    private void listTweet() {
        System.out.println("***********************************");
        System.out.println("******* AKTİF TWEET LİSTESİ *******");
        System.out.println("***********************************");
        System.out.println();
        tweetService.findAllViewTweet().forEach(t -> {
            System.out.println("-----------------------------------");
            System.out.println(t.getNickName() + " -> " + t.getUsername());
            System.out.println();
            System.out.println(t.getContent());
            System.out.println("...................");
            System.out.println(".                 .");
            System.out.println(".                 .");
            System.out.println(".     Picture     .");
            System.out.println(".                 .");
            System.out.println(".                 .");
            System.out.println("...................");
            System.out.printf("Comment[%s]  Retweet[%s]  Like[%s]  NumOfView[%s]  \n",
                    t.getTweetcomment(), t.getRetweet(), t.getTweetlike(), t.getTweetview());
            System.out.println("-----------------------------------");
            System.out.println();
        });
        int secim = secim();
        do{
            System.out.println("1- Görüntle");
            System.out.println("0- <<<< Geri");
            if(secim == 1) {
                System.out.print("Hangi tweet'i görüntülemek sistersiniz?: ");
                int id = secim();
            }

        }while(secim != 0);
    }

    public void tweetDetail(long tweetId) {
        VwTweet tweet = tweetService.findVwTweetById(tweetId).get();
        System.out.println("-----------------------------------");
        System.out.println("tweetid.........:" + tweet.getId());
        System.out.println(tweet.getNickName() + " -> " + tweet.getUsername());
        System.out.println();
        System.out.println(tweet.getContent());
        System.out.println("...................");
        System.out.println(".                 .");
        System.out.println(".                 .");
        System.out.println(".     Picture     .");
        System.out.println(".                 .");
        System.out.println(".                 .");
        System.out.println("...................");
        System.out.printf("Comment[%s]  Retweet[%s]  Like[%s]  NumOfView[%s]  \n",
                tweet.getTweetcomment(), tweet.getRetweet(), tweet.getTweetlike(), tweet.getTweetview());
        System.out.println("-----------------------------------");
        System.out.println();
        System.out.println("YORUMLAR:");
        commentService.findByTweetId(tweetId).forEach(c -> {

        });
    }
}
