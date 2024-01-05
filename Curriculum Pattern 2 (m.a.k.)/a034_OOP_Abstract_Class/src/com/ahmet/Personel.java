package com.ahmet;

// abstract: ne interface, ne sınıf. her ikisi de.

public abstract class Personel {
	
	public String ad;
	public String id;
	public double maas;
	
	
/*
 * 'static' ve 'constructor' yapısının ayağa kalkma sırasında çalışma
 * sıralaması nedir? Yani hangi yapı ilk ayağa kalkar ve adreslenir? 
 * aşağıdaki kullanımları araştırınız.
 */
	public static int sayi=4;
	
	static {
		System.out.println("Burası neresi?");
	}
	public Personel() {
		System.out.println("Burası sanırım constructor");
	}
	{
		System.out.println("Böyle bir kullanım varmış??");
	}
	
	
	public void maasHesapla() {
		// metodun gövdesini boş bırakabiliriz, veya doldurabiliriz de.
		
	}
	
	void izin(int gun) {
		
	}
	
	
	
}
