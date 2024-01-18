package com.ahmet;

import java.util.List;
import java.util.stream.Stream;

public class Runner {

	public static void main(String[] args) {
/*
 *    Kullanıcılardan almış olduğumuz datalar, bir şekilde kayıt
 * altına alınmalı ve gerekli olduğu zaman tekrar çağrılarak
 * kullanılmalıdır. 
 *    Dataların kalıcı olarak kayıt edildiği uygulamalara DataBase
 * adı verilir. Bu uygulamalar ile datalar uzun süreli saklanır
 * ve yedeklenirler.
 *    Dataların ihtiyaca göre işlenmeye ihtiyacı vardır. Bu
 * nedenle gerekli olduğunda farklı sorgularla çağrılmalıdırlar.
 * Örneğin:
 *    - bir kişiye ait sepet bilgisini görmek isiyoruz.
 *    - bir kullanıcıının son 3 ayda yaptığı alışverişlerin
 * toplam tutarının tüm müşteriler içindeki oranını görmek
 * istiyoruz.
 *   Bu işlemlerin Database üzerinden yapılması, çok fazla istek
 * atmaya ve sistemi yavaşlatmaya neden olabilir.
 *   ** Veritabanından gerekli olan bilgiler tek seferde alınarak,
 * Listelerin içerisine konulur.
 * Dikkat: Ben daha çok listeler ile çalışmalıyım ki daha 
 * performanslı kodlar yazabileyim. Ancak burada dikkat edilmesi
 * gereken durum, listeleri mükemmel bir şekilde kullanabiliyor
 * olmam gerekli.
 *     Stream Api, bizim ihtiyacımız olan listelerin aranması, 
 * yönetilmesi için gerekli özelleştirilmiş bir sınıftır. * 
 */
		// count = 0;
		Stream<String> bosStream = Stream.empty();
		// count = 1;
		Stream<String> tekilStream = Stream.of("Pazartesi");
		// count = 4;
		Stream<Double> sayilar = Stream.of(22d, 1d, 11d, 2.5d);
		List<String> gunler = List.of("pzt.", "sa.", "çar.", "per.", "cu.", "ctes.", "paz.");
		
		/*
		 * Tüm listelerde stream miras olarak alınmaktadır. Bu
		 * nedenler tüm listeler stream'e döndürülebilir.
		 * örn: gunler.stream()
		 */
		
		/*
		 * List -> Stream 'e çevirelim ve içindeki parametreleri
		 * dönelim:
		 */
		Stream<String> gunlerStream = gunler.stream();  // List'i Stream'e çevirdik.
//		gunlerStream.forEach(System.out::println);
//		gunlerStream.forEach(g->System.out.println(g)); // Tek satır kod çalıştırabiliyoruz burda.
		gunlerStream.forEach(g->{
			System.out.println("Önce yapılacaklar");
			System.out.println(g);
			System.out.println("ek işlemleri");
		});
		
	}

}
