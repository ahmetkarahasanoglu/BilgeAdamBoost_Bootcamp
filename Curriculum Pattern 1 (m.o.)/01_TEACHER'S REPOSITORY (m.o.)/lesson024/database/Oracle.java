package com.bilgeadam.lesson024.database;

public class Oracle extends Databse {

	@Override
	public void ekle() {
		System.out.println("Oracle veritabanına  Veri eklendi");

	}

	@Override
	public void sil() {
		System.out.println("Oracle veritabanından Veri silindi");

	}

	@Override
	public void guncelle() {
		System.out.println("Oracle veritabanında Veri güncellendi");

	}

	@Override
	public void verileriGetir() {
		System.out.println("Oracle veritabanından Veriler getiriliyor");

	}

	@Override
	public void login() {
		System.out.println("Oracle veritabanına bağlanıldı");

	}

}
