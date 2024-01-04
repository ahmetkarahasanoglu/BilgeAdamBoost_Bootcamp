package com.okulyonetimsistemi;

public class Memur extends Calisan implements IOgrenciIsleri {

	
	// CONSTRUCTOR 1:
	public Memur(String isim, String soyisim) {
		super(isim, soyisim);		
	}
	
	// CONSTRUCTOR 2:
	public Memur(String isim, String soyisim, double maas, int calismaSaati) {
		super(isim, soyisim, maas, calismaSaati);
	}

	
	// --- METHODS: ---
	@Override
	public Ogrenci ogrenciKaydi() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean ogrenciKaydiSil(String ogrenciNo) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void bilgilendirmeYap(Ogrenci ogrenci) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean dersKaydiOnayla(Ders ders, Ogrenci ogrenci) {
		// TODO Auto-generated method stub
		return false;
	}

	

	
	
	
	
		
	
}
