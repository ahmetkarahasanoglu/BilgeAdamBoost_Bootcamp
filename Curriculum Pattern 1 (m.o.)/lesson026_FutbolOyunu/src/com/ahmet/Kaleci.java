package com.ahmet;

public class Kaleci extends Futbolcu {
	
	private int kurtaris;

	
	
	// CONSTRUCTOR:
	public Kaleci() {
		super();
		this.kurtaris = StaticValues.generateRandomValue(65, 100);
		this.setAdSoyad("kaleci");
		this.setFormaNo(1);
	}

	// GETTERS AND SETTERS:
	public int getKurtaris() {
		return kurtaris;
	}

	public void setKurtaris(int kurtaris) {
		this.kurtaris = kurtaris;
	}

	
	// METHODS: ---------
	@Override
	public String toString() {
		return "Kaleci [kurtaris=" + kurtaris + ", getAdSoyad()=" + getAdSoyad() + ", getFormaNo()=" + getFormaNo()
				+ ", getDayaniklilik()=" + getDayaniklilik() + ", getHiz()=" + getHiz() + ", getPas()=" + getPas()
				+ ", getSut()=" + getSut() + ", getYetenek()=" + getYetenek() + ", getKararlilik()=" + getKararlilik()
				+ ", getDogalForm()=" + getDogalForm() + ", getSans()=" + getSans() + "]";
	}


	
}
