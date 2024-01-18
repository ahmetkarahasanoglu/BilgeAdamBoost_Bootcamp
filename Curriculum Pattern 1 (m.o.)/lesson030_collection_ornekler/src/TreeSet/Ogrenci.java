package TreeSet;

public class Ogrenci implements Comparable<Ogrenci> {

	int id;

	// CONSTRUCTOR:
	public Ogrenci(int id) {		
		this.id = id;
	}

	
	@Override
	public int compareTo(Ogrenci o) {
		if(o.id < this.id) { // o -> 'other' diye düşünebiliriz. Bir setin içinde sıralama yaparken, yeni eklenen elemanı, set'te bulunan diğer elemanla karşılaştırarak sıralama yapar.
			return 1;
		}else if(o.id > this.id) {
			return -1;
		}else {
			return 0;
		}		
	}


	@Override
	public String toString() {
		return "Ogrenci [id=" + id + "]";
	}	
	
	
	
	
}
