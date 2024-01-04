package com.okulyonetimsistemi;

import java.util.ArrayList;

public class Okul {

	private String isim;
	private String adres;
	private ArrayList<Ogrenci> ogrenciListesi;
	private ArrayList<Ogretmen> ogretmenListesi;
	private ArrayList<Memur> memurListesi;
	
	
	// CONSTRUCTOR:
	public Okul(String isim, String adres) {
		super();
		this.isim = isim;
		this.adres = adres;
		this.ogrenciListesi = new ArrayList<>();
		this.ogretmenListesi = new ArrayList<>();
		this.memurListesi = new ArrayList<>();		
	}

	// --- GETTERS AND SETTERS: ---
	public String getIsim() {
		return isim;
	}


	public void setIsim(String isim) {
		this.isim = isim;
	}


	public String getAdres() {
		return adres;
	}


	public void setAdres(String adres) {
		this.adres = adres;
	}


	public ArrayList<Ogrenci> getOgrenciListesi() {
		return ogrenciListesi;
	}


	public void setOgrenciListesi(ArrayList<Ogrenci> ogrenciListesi) {
		this.ogrenciListesi = ogrenciListesi;
	}


	public ArrayList<Ogretmen> getOgretmenListesi() {
		return ogretmenListesi;
	}


	public void setOgretmenListesi(ArrayList<Ogretmen> ogretmenListesi) {
		this.ogretmenListesi = ogretmenListesi;
	}


	public ArrayList<Memur> getMemurListesi() {
		return memurListesi;
	}


	public void setMemurListesi(ArrayList<Memur> memurListesi) {
		this.memurListesi = memurListesi;
	}
	
	
	
}
