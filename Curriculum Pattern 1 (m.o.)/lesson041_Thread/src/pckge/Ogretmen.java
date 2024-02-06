package pckge;
/*
 * Ogretmen sınıfını thread yapalım.
 * run metodu yazalım, run metodunda 10 kere dönsün, çıktı
 * olarak da:
 * ogretmen ismi --> "1'nci öğrencinin notlarını okudu
 * ogretmen ismi --> "2'nci öğrencinin notlarını okudu
 *  
 * OgretmenTest sınıfı oluşturalım, burda test edecez, 2 tane
 * öğretmen oluşturalım. 
 * -----
 * 
 * Öğretmenler aynı dosya üzerinde (ogrencilerin verilerinin
 * olduğu txt dosyasından) okuma yapıp okudukları 
 * verileri kendi sınıfları içerisinde tuttukları öğrenci 
 * listesine ekleyecekler. Bunu bir thread yapısı üzerinden
 * kuracağız.
 * 
 * ogretmenTest sınıfında 2 tane ogretmenimiz olacak, bu 
 * thread'ler çalıştıracağız. En sonunda da, kaç tane 
 * öğrencinin notunu okumuşlar onu göstereceğiz.
 */
public class Ogretmen extends Thread {

	String name;

	public Ogretmen(String name) {
		super();
		this.name = name;
	}
	
	@Override
		public void run() {			
			for(int i=0; i<10; i++) {
				System.out.println(name + " --> " + (i+1) + ". öğrencinin notlarını okudu.");
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	
}
