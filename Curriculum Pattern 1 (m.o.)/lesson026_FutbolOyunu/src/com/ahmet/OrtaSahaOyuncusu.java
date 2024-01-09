package com.ahmet;

public class OrtaSahaOyuncusu extends Futbolcu {
	private int uzunTop;
	private int ilkDokunus;
	private int topSurme;
	private int uretkenlik;
	private int ozelYetenek;
	
	
	// CONSTRUCTOR:
	public OrtaSahaOyuncusu() {
		super();
		this.uzunTop = StaticValues.generateRandomValue(60, 100);
		this.ilkDokunus = StaticValues.generateRandomValue(60, 100);
		this.topSurme = StaticValues.generateRandomValue(60, 100);
		this.uretkenlik = StaticValues.generateRandomValue(60, 100);
		this.ozelYetenek = StaticValues.generateRandomValue(60, 100);
		this.setAdSoyad("ortasaha" + StaticValues.generateSeqNumOrtaSaha());
		this.setFormaNo(StaticValues.generateFormaNoOrtaSaha());
	}
	
	
	// GETTERS AND SETTERS:
	public int getUzunTop() {
		return uzunTop;
	}
	public void setUzunTop(int uzunTop) {
		this.uzunTop = uzunTop;
	}
	public int getIlkDokunus() {
		return ilkDokunus;
	}
	public void setIlkDokunus(int ilkDokunus) {
		this.ilkDokunus = ilkDokunus;
	}
	public int getTopSurme() {
		return topSurme;
	}
	public void setTopSurme(int topSurme) {
		this.topSurme = topSurme;
	}
	public int getUretkenlik() {
		return uretkenlik;
	}
	public void setUretkenlik(int uretkenlik) {
		this.uretkenlik = uretkenlik;
	}
	public int getOzelYetenek() {
		return ozelYetenek;
	}
	public void setOzelYetenek(int ozelYetenek) {
		this.ozelYetenek = ozelYetenek;
	}


	// METHODS: ---------
	@Override
	public String toString() {
		return "OrtaSahaOyuncusu [uzunTop=" + uzunTop + ", ilkDokunus=" + ilkDokunus + ", topSurme=" + topSurme
				+ ", uretkenlik=" + uretkenlik + ", ozelYetenek=" + ozelYetenek + ", getAdSoyad()=" + getAdSoyad()
				+ ", getFormaNo()=" + getFormaNo() + ", getDayaniklilik()=" + getDayaniklilik() + ", getHiz()="
				+ getHiz() + ", getPas()=" + getPas() + ", getSut()=" + getSut() + ", getYetenek()=" + getYetenek()
				+ ", getKararlilik()=" + getKararlilik() + ", getDogalForm()=" + getDogalForm() + ", getSans()="
				+ getSans() + "]";
	}

	

}
