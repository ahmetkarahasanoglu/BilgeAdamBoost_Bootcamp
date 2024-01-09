package com.ahmet;

import java.util.ArrayList;

public class Takim {
	
	String isim;
	ArrayList<Futbolcu> futbolcular;
	
	
	// CONSTRUCTOR:
	public Takim() {		
		futbolcular = new ArrayList<Futbolcu>();
		for(int i=0; i<4; i++) {
			DefansOyuncusu defansOyuncusu = new DefansOyuncusu();
			futbolcular.add(defansOyuncusu);
		}
		for(int i=0; i<4; i++) {
			OrtaSahaOyuncusu ortaSahaOyuncusu = new OrtaSahaOyuncusu();
			futbolcular.add(ortaSahaOyuncusu);
		}
		for(int i=0; i<2; i++) {
			ForvetOyuncusu forvetOyuncusu = new ForvetOyuncusu();
			futbolcular.add(forvetOyuncusu);
		}
		Kaleci kaleci = new Kaleci();
		futbolcular.add(kaleci);
	}
	
	
	
	
}
