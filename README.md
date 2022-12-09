# Tek Sayfa Uygulamalar Sprint Challenge

**Talimatları dikkatlice okuyun. Sprint Challenge'a başlamadan neler istendiğini tam olarak anladığınıza emin olun.**
**SORU SORMADAN ÖNCE LÜTFEN TÜM TALİMATLARI OKUYUN!!**
(soracağınız soruların büyük bir kısmı SSS kısmında cevaplanmıştır)

Bu challenge, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprintte **tek sayfa uygulamalarını** keşfettiniz. Sprint boyunca,  **routing, formlar, ve cypress testlerini** öğrendiniz. Bu sprint challenge'ında, aç yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesi olan **Teknolojik Yemekler**'i oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu tek başınıza yapmanız gereken bir uygulamadır. Tüm işi tek başınıza yapacaksınız. Challenge skorunuz, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yapabilme yeteneğinizin bir ölçüsüdür. Önceki günlerde tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

## Talimatlar

Bu challengeda `Teknolojik Yemekler` anasayfası üzerine çalışacaksınız. Kullanıcının, malzemelerini isteğe göre seçebileceği bir pizza formu oluşturacaksınız.

Sitenizi tasarlarken aşağıdaki wireframe(çerçeve)'leri kılavuz olarak kullanabilirsiniz, ancak bunu yapmanız zorunlu değildir.

[Form](./Assets/Form.png)

[Home Page](./Assets/Homepage.png)

[Confirmation](./Assets/Confirmation.png)

## Giriş

### Görev 1: Proje Kurulumu

- [ ] Forklayarak bir kopya oluşturun
- [ ] Forku klonlayın
- [ ] Main branch üzerinde çalışın
- [ ] Comitinizi pushlayın: `git push origin main`

### Görev 2: Proje Gereklilikleri

Bitmiş proje aşağıdaki gereklilikleri içermelidir:

- [ ] Route u "/" olan ve forma linklenen bir anasayfa (button, nav bar, ya da  herhangi bir link kabul edilebilir ama id'si "order-pizza" olmalı)
- [ ] Route u  "/pizza" olan bir sipariş formu
- [ ] Id'si "pizza-form" olan bir form
- [ ] Id'si "name-input" olan bir isim inputu 
- [ ] İsim için bir doğrulama(validation) ve hata mesajı (İsim en az 2 karakter olmalıdır) (Testlerin geçtiğinden emin olmak için tam olarak bu hata mesajını kullanın) ::: BU HATA MESAJINI KULLANMAK ÇOK ÖNEMLİ (testlere dahil!)
- [ ] Pizza boyutunun seçilebileceği "size-dropdown" id'li bir dropdown 
- [ ] Malzemeler için bir checklist(checkbox) - en az 4 adet (ipucu: name attributeları farklı olsun!)
- [ ] Özel seçimler için bir text input "special-text" id'li
- [ ] "order-button" id'li bir "Siparişlere Ekle" butonu. Bu buton tıklandığında form gönderilerek girilen bilgileri içerecek bir veritabanı kaydı oluşturulacak

Veri şu şekilde olmalı
```
{
    isim: string,
    boyut: string,
    malzeme1: bool,
    malzeme2: bool,
    özel: string,
}
```
Not - payload yukarıdaki verilere benzer görünmelidir

#### MVP'yi test etme

Cypress'le şu testleri ekleyin:

- [ ] inputa bir metin giren test
- [ ] birden fazla malzeme seçilebilen bir test
- [ ] formu gönderen bir test

Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir. Organizasyon ve kod yapısına göre skorunuz belirlenecek. 
Çalışmanızı gözden geçirmek, iyileştirmek ve değerlendirmek için zaman planlayın ve çalışmanız üzerinde yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere temel profesyonel düzeltmeler yapın. MVP'yi karşılayan bir challenge göndermek, çok fazla kompleksleştirilmiş ama çalışmayan bir proje göndermekten daha iyidir.

Cypress kurulumu için `npm install cypress --save-dev` komutunu girin ve  `npx cypress open` yazın. Bu, "Cypress 10'a Hoş Geldiniz!" başlığı ve altında "Cypress 10'a Devam Et" yazan buton içeren bir diyalog açacaktır. Bu butona tıklayın, ardından bir sonraki ekranın en altına gidin ve arka arkaya üç geçiş butonuna tıklayın (birini tıkladıktan sonra sonraki bölüm genişleyecek ve bir sonraki geçiş seçimini tıklamanıza izin verecektir). Bir sonraki ekranda 'e2e' seçeneğini seçin ve bir sonraki ekranda 'Scaffold Example Specs' seçeneğini seçin, ardından istediğiniz bir tarayıcı seçin ve 'E2E Testini Başlat' düğmesine tıklayın.

Oradan, VSCode'da yeni oluşturduğunuz cypress klasöründe, e2e klasörüne gidin ve `pizza.cy.js` adlı yeni bir dosya oluşturun. Artık testlerinizi yazmaya hazırsınız! (Dosya isminde ".cy" olduğundan emin olun, aksi takdirde Cypress testlerinizi bulamaz!)


### Görev 3: Esnek Görevler

Gerekli öğelerinizi bitirdikten sonra çalışmanızı daha da ileri götürebilirsiniz. Bu hedefler, bu modülde öğrendiğiniz şeyler olabilir veya olmayabilir, ancak az önce incelediğiniz materyal üzerine inşa edilecekler. Zaman tanıyın, sınırlarınızı zorlayın ve aşağıdaki isteğe bağlı hedeflere ulaşıp ulaşamayacağınıza bakın:

- [ ] Form öğesi bölümlerini iç içe routelara dönüştürün
- [ ] Cypressle daha çok test yazın
- [ ] Sipariş POST edilirken bir ağ hatası olasılığı için kullanıcı arabirimi oluşturun (örnek: İnternet'e bağlanılamadı)
- [ ] Sipariş butonuna `Tebrikler! Pizza'nız yola çıktı` mesajını gösterecek ve veritabanına eklenen siparişi gösterecek bir işlevsellik ekleyin

## Esnek Mülakat Soruları

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. 1-2 cümle ile, React'ın `useRouteMatch` hookunun ne için kullanıdığını açıklayın.
2. Daha önce hiç programlama yapmamış birine form validationı(doğrulama) nasıl açıklarsınız?
3. 1-2 cümle ile, uç uca testlerin ne işe yaradığını açıklayın.

## SSS

**Siparişin veritabanı kaydını nasıl döndürürüm??**

Hedeflerinizden biri, siparişin bir veritabanı kaydını döndürmektir - bunun için bir post request yazmanız gerekir. Detaylı adımlar aşağıda:

1. Yeni bir state değişkeni ve hook oluşturun
2. `axios` ile [reqres](https://reqres.in/) sayfasına post request atın (adım 4'teki linke)
3. veriyi konsola yazdırın
4. Kullanacağınız URL şudur: `https://reqres.in/api/orders`. Testler bu URL'de.
