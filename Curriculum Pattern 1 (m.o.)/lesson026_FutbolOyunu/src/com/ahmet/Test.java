package com.ahmet;

public class Test {

	public static void main(String[] args) {
		
		Takim takim1 = new Takim();
		
		for(Futbolcu futbolcu : takim1.futbolcular) {
			System.out.println(futbolcu.toString());
		}

	}//MAIN ENDS HERE --------

}//CLASS ENDS HERE -------
