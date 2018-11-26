// Author: S. Kağan Cin
// kaannc7@gmail.com
// kagancin.com

var tinify = require("tinify");
const fs = require('fs');

tinify.key = "TINYPNG DEN ALDIĞIMIZ KEY";

// Resim kaynak klasörü
const imageFolder = './resimler/';
// Resim Çıktı klasörü
const resultsFolder = './ciktilar/';

// kaynak klasör altındaki resimlerin listesi
fs.readdir(imageFolder, (err, files) => {
    if(files.length>0){
        console.log("Toplam Dosya Sayısı : "+files.length);
        files.forEach(file => {
            // Resim Optimize İşlemi Başladı
            console.log(file + " Dosyası Optimize Ediliyor...")
            var resim = tinify.fromFile(imageFolder + file);
            resim.toFile(resultsFolder + file);
            // gelen parametlerden biri Promise çıktısı veriyor
            resim._url.then(function(cevap){
                // İşlem tamamlanmışsa ekrana bittiğini bildir
                console.log(file + " Dosyası Optimize Edildi...")
            }).catch(error =>{
                /// Hata varsa ekrana hatayı yazdır
                console.log(error)
            })
        });
    }else{
        console.log("Kaynak klasörde resim bulunamadı");
    }

});
