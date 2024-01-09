package com.ahmet;

public class DefansOyuncusu extends Futbolcu {
	private int pozisyonAlma;
	private int kafa;
	private int sicrama;
	
	
	// CONSTRUCTOR
	public DefansOyuncusu() {
		super();
		this.pozisyonAlma = StaticValues.generateRandomValue(60, 90);
		this.kafa = StaticValues.generateRandomValue(60, 90);
		this.sicrama = StaticValues.generateRandomValue(60, 90);
		this.setAdSoyad("defans" + StaticValues.generateSeqNumDefans());
		this.setFormaNo(StaticValues.generateFormaNoDefans());
	}
	
	
	// GETTERS AND SETTERS:
	public int getPozisyonAlma() {
		return pozisyonAlma;
	}
	public void setPozisyonAlma(int pozisyonAlma) {
		this.pozisyonAlma = pozisyonAlma;
	}
	public int getKafa() {
		return kafa;
	}
	public void setKafa(int kafa) {
		this.kafa = kafa;
	}
	public int getSicrama() {
		return sicrama;
	}
	public void setSicrama(int sicrama) {
		this.sicrama = sicrama;
	}

	
	// METHODS: ----------
	@Override
	public String toString() {
		return "DefansOyuncusu [pozisyonAlma=" + pozisyonAlma + ", kafa=" + kafa + ", sicrama=" + sicrama
				+ ", getAdSoyad()=" + getAdSoyad() + ", getFormaNo()=" + getFormaNo() + ", getDayaniklilik()="
				+ getDayaniklilik() + ", getHiz()=" + getHiz() + ", getPas()=" + getPas() + ", getSut()=" + getSut()
				+ ", getYetenek()=" + getYetenek() + ", getKararlilik()=" + getKararlilik() + ", getDogalForm()="
				+ getDogalForm() + ", getSans()=" + getSans() + "]";
	}


	
}
