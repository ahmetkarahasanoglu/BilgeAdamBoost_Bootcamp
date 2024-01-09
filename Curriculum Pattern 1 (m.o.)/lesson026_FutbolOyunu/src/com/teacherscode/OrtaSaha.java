package com.teacherscode;

import java.util.Random;

public class OrtaSaha extends AktifFutbolcu {

	private int uzunTop;
	private int ilkDokunus;
	private int topSurme;
	private int uretkenlik;
	private int ozelYetenek;

	public OrtaSaha(String adSoyad, int formaNo) {

		super(adSoyad, formaNo);
		this.uzunTop = rastgeleYetenekPuanıAta();
		this.ilkDokunus = rastgeleYetenekPuanıAta();
		this.topSurme = rastgeleYetenekPuanıAta();
		this.uretkenlik = rastgeleYetenekPuanıAta();
		this.ozelYetenek = rastgeleYetenekPuanıAta();
	}

	@Override
	public int rastgeleYetenekPuanıAta() {
		Random random = new Random();
		return random.nextInt(60, 101);
	}

	public int getUzunTop() {
		return uzunTop;
	}

	public int getIlkDokunus() {
		return ilkDokunus;
	}

	public int getTopSurme() {
		return topSurme;
	}

	public int getUretkenlik() {
		return uretkenlik;
	}

	public int getOzelYetenek() {
		return ozelYetenek;
	}

	public void setUzunTop(int uzunTop) {
		this.uzunTop = uzunTop;
	}

	public void setIlkDokunus(int ilkDokunus) {
		this.ilkDokunus = ilkDokunus;
	}

	public void setTopSurme(int topSurme) {
		this.topSurme = topSurme;
	}

	public void setUretkenlik(int uretkenlik) {
		this.uretkenlik = uretkenlik;
	}

	public void setOzelYetenek(int ozelYetenek) {
		this.ozelYetenek = ozelYetenek;
	}

	@Override
	public String toString() {
		return "OrtaSaha [uzunTop=" + uzunTop + ", ilkDokunus=" + ilkDokunus + ", topSurme=" + topSurme
				+ ", uretkenlik=" + uretkenlik + ", ozelYetenek=" + ozelYetenek + ", getAdSoyad()=" + getAdSoyad()
				+ ", getFormaNo()=" + getFormaNo() + ", getDayaniklilik()=" + getDayaniklilik() + ", getHiz()="
				+ getHiz() + ", getPas()=" + getPas() + ", getSut()=" + getSut() + ", getYetenek()=" + getYetenek()
				+ ", getKararlilik()=" + getKararlilik() + ", getDogalForm()=" + getDogalForm() + ", getSans()="
				+ getSans() + "]";
	}

	@Override
	public int pasSkor() {
		Random random = new Random();
		/*
		 * Bonus= 1 ile 8 arasında rastgele bir sayıdır.
		 * pas*0.2+yetenek*0.2+ozelYetenek*0.2+dayaniklilik*0.1+dogalForm*0.1+sans*0.1+
		 * bonus
		 * 
		 */
		int bonus = random.nextInt(1, 8);
		return (int) (getPas() * 0.2 + getYetenek() * 0.2 + ozelYetenek * 0.2 + getDayaniklilik() * 0.1
				+ getDogalForm() * 0.1 + getSans() * 0.1 + bonus);
	}

	@Override
	public int golSkor(int kurtaris) {
		/*
		 * 
		 * Bonus= 1 ile 6 arasında rastgele bir sayı * dogalForm*0.075 Kurtarış=karşı
		 * takım kalecisinden gelen kurtarış skor değeri.
		 * yetenek*0.2+ozelYetenek*0.2+sut*0.2+ilkDokunus*0.1+kararlilik*0.1+sans*0.1+
		 * dogalForm*0.1+bonus-kurtarış
		 * 
		 * 
		 * 
		 */
		Random random = new Random();
		double bonus = (random.nextDouble(1, 6) * getDogalForm() * 0.075);

		return (int) (getYetenek() * 0.2 + ozelYetenek * 0.2 + getSut() * 0.2 + +ilkDokunus * 0.1
				+ getKararlilik() * 0.1 + getSans() * 0.1 + getDogalForm() * 0.1 + bonus - kurtaris);
	}

}
