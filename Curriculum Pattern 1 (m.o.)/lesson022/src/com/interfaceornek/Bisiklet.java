package com.interfaceornek;
// NOT: Interface'ler için: 1'den fazla interface implement edebiliriz.
// Inheritance için: tek bir sınıftan extend edebiliriz.

// NOT: Bir interface bir interface'i ancak extend edebilir,
//      ama implement edemez.
public class Bisiklet extends Arac implements IBinilebilir {  // Birden fazla interface implement ettik.

	@Override
	public void ilerle() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void dur() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void bin() {
		// TODO Auto-generated method stub
		
	}

	
	
}
