package com.ahmet;

public class ForvetOyuncusu extends Futbolcu {
	int bitiricilik;
	int ilkDokunus;
	int kafa;
	int özelYetenek;
	
	
	// CONSTRUCTOR:
	public ForvetOyuncusu() {
		super();
		this.bitiricilik = StaticValues.generateRandomValue(70, 100);
		this.ilkDokunus = StaticValues.generateRandomValue(70, 100);
		this.kafa = StaticValues.generateRandomValue(70, 100);
		this.özelYetenek = StaticValues.generateRandomValue(70, 100);
		this.setAdSoyad("forvet" + StaticValues.generateSeqNumForvet());
		this.setFormaNo(StaticValues.generateFormaNoForvet());
	}

	// GETTERS AND SETTERS:
	public int getBitiricilik() {
		return bitiricilik;
	}

	public void setBitiricilik(int bitiricilik) {
		this.bitiricilik = bitiricilik;
	}

	public int getIlkDokunus() {
		return ilkDokunus;
	}

	public void setIlkDokunus(int ilkDokunus) {
		this.ilkDokunus = ilkDokunus;
	}

	public int getKafa() {
		return kafa;
	}

	public void setKafa(int kafa) {
		this.kafa = kafa;
	}

	public int getÖzelYetenek() {
		return özelYetenek;
	}

	public void setÖzelYetenek(int özelYetenek) {
		this.özelYetenek = özelYetenek;
	}

	
	// METHODS: ----------
	@Override
	public String toString() {
		return "ForvetOyuncusu [bitiricilik=" + bitiricilik + ", ilkDokunus=" + ilkDokunus + ", kafa=" + kafa
				+ ", özelYetenek=" + özelYetenek + ", getAdSoyad()=" + getAdSoyad() + ", getFormaNo()=" + getFormaNo()
				+ ", getDayaniklilik()=" + getDayaniklilik() + ", getHiz()=" + getHiz() + ", getPas()=" + getPas()
				+ ", getSut()=" + getSut() + ", getYetenek()=" + getYetenek() + ", getKararlilik()=" + getKararlilik()
				+ ", getDogalForm()=" + getDogalForm() + ", getSans()=" + getSans() + "]";
	}


	
}
