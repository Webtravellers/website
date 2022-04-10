# Dashboard System

Dashboard: Kullanıcıların üye olması, giriş yaptıktan sonra nerelere erişebileceği, rollere göre link yasağı gibi konuları kapsıyor.

<br>

Bizim projemizde 2 kullanıcı rol tipi bulunmaktadır. Bunlar; Admin ve user

<br>

Her iki kullanıcının da erişebileceği ve erişim yasağı olacağı linkler olacaktır. Örneğin bir kullanıcı tüm kullanıcı istatistiği veya yeni lokasyon ekleme gibi işlemleri yapmamalıdır.

<br>

Projede route(link yönlendirme) işlemlerini yapabilmek için __react-router__ kütüphanesini kullanıyoruz. 

<br>

Bu işlemler için 2 ana klasörümüz bulunmaktadır. Bunlar; __routes ve layout__ klasörleridir.
<br>
__Routes__ klasörü içerisinde, Projede yer alan tüm linkleri barındıran ve link-component yapısını tuttuğumuz kısımdır. Linkleri tek bir dosyaya yazmak yerine kullanıcı rol tipine göre parçalıyoruz. <br>
__Router.js:__ Ana route girdimiz burasıdır. Public (yani üye olan ve olmayan herkesin erişimi olduğu linkler) linklerin yer aldığı ve rol bazlı route işlemlerini gerçekleştirdiğimiz kısımdır. <br>
__AdminRouter:__ Admin rolüne sahip kullanıcıların erişebileceği linkleri tanımladığımız kısımdır. <br>
__UserRouter:__ User rolüne sahip kullanıcıların erişebileceği linkleri tanımladığımız kısımdır. <br>

<br>

__Layout__ klasörü içerisinde sayfanın düzenlerini belirtiyoruz. Örneğin, giriş yapmamış kullanıcılar için sayfa düzeni; Header, page, footer şeklindedir. Ama admin dashboard kısmında header ve footer componentlerine ihtiyaç yoktur. İşte bunları sağladığımız ve sayfa düzenini oluşturduğumuz kısım layout kısımdır.
<br>
Layout klasöründe kendi içerisinde parçalıyoruz. Rol veya tasarım bazlı yapılabilir.
