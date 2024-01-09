package com.ahmet;

public class Futbolcu {
	private String adSoyad;
	private int formaNo;
	private int dayaniklilik;
	private int hiz;
	private int pas;
	private int sut;
	private int yetenek;
	private int kararlilik;
	private int dogalForm;
	private int sans;
	
	
	// CONSTRUCTOR
	public Futbolcu() {
		super();
//		this.adSoyad = 
//		this.formaNo = 
		this.dayaniklilik = StaticValues.generateRandomValue(50, 100);
		this.hiz = StaticValues.generateRandomValue(50, 100);
		this.pas = StaticValues.generateRandomValue(50, 100);
		this.sut = StaticValues.generateRandomValue(50, 100);
		this.yetenek = StaticValues.generateRandomValue(50, 100);
		this.kararlilik = StaticValues.generateRandomValue(50, 100);
		this.dogalForm = StaticValues.generateRandomValue(50, 100);
		this.sans = StaticValues.generateRandomValue(50, 100);
	}
	
	
	// GETTERS AND SETTERS
	public String getAdSoyad() {
		return adSoyad;
	}
	public void setAdSoyad(String adSoyad) {
		this.adSoyad = adSoyad;
	}
	public int getFormaNo() {
		return formaNo;
	}
	public void setFormaNo(int formaNo) {
		this.formaNo = formaNo;
	}
	public int getDayaniklilik() {
		return dayaniklilik;
	}
	public void setDayaniklilik(int dayaniklilik) {
		this.dayaniklilik = dayaniklilik;
	}
	public int getHiz() {
		return hiz;
	}
	public void setHiz(int hiz) {
		this.hiz = hiz;
	}
	public int getPas() {
		return pas;
	}
	public void setPas(int pas) {
		this.pas = pas;
	}
	public int getSut() {
		return sut;
	}
	public void setSut(int sut) {
		this.sut = sut;
	}
	public int getYetenek() {
		return yetenek;
	}
	public void setYetenek(int yetenek) {
		this.yetenek = yetenek;
	}
	public int getKararlilik() {
		return kararlilik;
	}
	public void setKararlilik(int kararlilik) {
		this.kararlilik = kararlilik;
	}
	public int getDogalForm() {
		return dogalForm;
	}
	public void setDogalForm(int dogalForm) {
		this.dogalForm = dogalForm;
	}
	public int getSans() {
		return sans;
	}
	public void setSans(int sans) {
		this.sans = sans;
	}


	// METHODS: -----------	
	
	
}
