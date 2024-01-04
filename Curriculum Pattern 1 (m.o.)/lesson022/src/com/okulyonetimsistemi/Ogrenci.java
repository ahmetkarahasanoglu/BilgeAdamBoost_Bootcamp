package com.okulyonetimsistemi;

import java.util.ArrayList;

public class Ogrenci extends Kisi {

	private String okulNo;
	double notOrt;
	ArrayList<Ders> dersListesi;
	
	
	// CONSTRUCTOR 1:
	public Ogrenci(String isim, String soyisim) {
		super(isim, soyisim);
		this.dersListesi = new ArrayList<>(); // Ogrenci class'ından nesne oluşur oluşmaz bu ArrayList'i oluşturmuş oluruz bu yöntemle.
	}
	
	// CONSTRUCTOR 2:
	public Ogrenci(String isim, String soyisim, String adres) {
		super(isim, soyisim, adres);
		this.dersListesi = new ArrayList<>();
	}

	
	// --- GETTERS AND SETTERS: ---
	public String getOkulNo() {
		return okulNo;
	}

	public void setOkulNo(String okulNo) {
		this.okulNo = okulNo;
	}

	public double getNotOrt() {
		return notOrt;
	}

	public void setNotOrt(double notOrt) {
		this.notOrt = notOrt;
	}

	public ArrayList<Ders> getDersListesi() {
		return dersListesi;
	}

	public void setDersListesi(ArrayList<Ders> dersListesi) {
		this.dersListesi = dersListesi;
	}
	
	
	
	
	
	
	
	
	
}
