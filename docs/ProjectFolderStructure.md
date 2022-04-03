Selamlar. Bu dökümanda React projesindeki klasör yapısını ele alacağım.

React folder düzeni için geliştiricileri özgür kılmıştır. Yani tek düze bir düzen yok.
İnternette de araştırırsanız bir çok değişik klasör düzeni bulabilirsiniz.

Bu proje yapısını bende kendimi geliştirdikçe oluşturuyorum. Şuanlık bu proje düzenini kullanıyor olacağız.
___

## Proje Klasör Yapısı

__Components:__ Bu Klasör içerisinde projede yer alan tüm bileşenler yer alacaktır. Örneğin; UI elementleri (Button, Card, Modal vs), Sidebar, Navbar, Headers gibi. Bileşen olarak düşündüğünüz her şeyi buraya ekleyebilirsiniz. Adlandırılma kuralı yoktur.

__Pages:__ Bu klasör içerisinde tüm sayfalar yer alacaktır. Örneğin; HomePage gibi. Oluşturduğunuz her componentin sonuna __Page__ gelmek zorundadır.

__Assets:__ Bu klasör içerisinde tüm image, style, font, icon gibi static verileri tutuyoruz.

__Layouts:__ Site içerisinde sayfa düzenini belirtir. Örneğin; Üstte navbar, solda sidebar, ortada page gibi. Burada önemli olan şu; Layout olarak belirlediğiniz sayfaların hepsinde navbar ve sidebar gözekecektir.

__services:__ Site içerisinde kullanacağımız tüm servisleri burada tanımlıyoruz. Burada asla React kodu yazmıyoruz. Service ler proje içerisindeki neredeyse hiçbir şeye bağımlı değildirler. Çoğunlukla API dan gelen veriler için servis yazıyoruz. Ama sadece API değil, LocalStorageService, CookieService gibi servislerde mevcuttur. Adlandırılma olarak her servisin sonuna __Service__ gelmek zorundadır. Örneğin; AuthService

__Utils:__ Projede kullanılacak tüm 3. araçları içeririr. Genelde custom işler burada yer alır. 

__Store:__ Projede State Management olarak Redux kullanacağız. Redux işlerin hepsini store klasörü altında yapıyoruz.

__Routes:__ Projede yer alan tüm linkleri burada tanımlayacağız. Klasör altında rollere göre route dosyları oluşturulabilir. (AdminRouter, UserRouter gibi)

__HOC:__ Açılımı High Order Component dir. Bir komponenti saran yani parent olan componentleri burada tanımlıyoruz. Hoc ların amacı child olarak gelen componenti belirlediğimiz kurallardan geçirmesidir. Örneğin, ProtectedRoute, ThemeProvider, LanguageProvider.

__Docs:__ Projede kullanılan yapıları kendimizce açıklayacağımız kısım. İleride döküman oluşturma araçları kullanılarak düzenleyebiliriz.