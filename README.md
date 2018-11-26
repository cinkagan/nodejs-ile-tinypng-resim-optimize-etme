# nodejs-ile-tinypng-resim-optimize-etme
Nodejs kullanarak tinypng kütüphanesiyle resimleri optimize etme

Avantajları
Belirtilen klasör içerisindeki resimleri, belirtilen başka bir klasöre optimize ederek çıkartır.
Resim sayısının bir sınırı yoktur(TinyPNG API dan satın aldığınız kadar)
İşlem sırasında hangi resmin optimize edildiğini anlık görebilirsiniz.

Öncelikle 
```
npm install
```
diyerek paketlerimizi yükleyelim.

Ardından optimize etmek istediğimiz resimleri resimler klasörüne ekleyelim.
(İsterseniz server.js dosyasından kaynak ve çıktı klasörlerini değiştirebilirsiniz)

Son olarak uygulamanın olduğu klasörde konsol u açıp 
```
node server.js 
```
diyerek programı çalıştırabilirsiz.
