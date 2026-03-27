const questions = [
  { question: "İletişim en genel anlamıyla nedir?", options: ["Yalnızca yazılı metin üretme süreci", "Mesajların bir kaynaktan alıcıya aktarılması süreci", "Sadece yüz yüze konuşma etkinliği", "Bireyin kendi kendine düşünmesi"], answer: 1 },
  { question: "Sunumdaki anlatıma göre insanı diğer canlılardan ayıran temel özelliklerden biri hangisidir?", options: ["Sadece refleks göstermesi", "Konuşma yoluyla dili kullanabilmesi", "Geceleri uyuması", "Yalnız yaşaması"], answer: 1 },
  { question: "Dil, iletişim ve konuşma ilişkisi için en doğru ifade hangisidir?", options: ["Dil ve konuşma aynı şeydir", "İletişim, dil ve konuşmayı kapsayan daha geniş bir alandır", "Konuşma dili oluşturur", "İletişim yalnızca konuşmadan oluşur"], answer: 1 },
  { question: "Dilbilimin temel işi aşağıdakilerden hangisidir?", options: ["Sadece şiir incelemek", "Yalnızca yabancı dil öğretmek", "Dili oluşturan birimleri ve ilişkilerini bilimsel olarak incelemek", "Konuşma kusurlarını tedavi etmek"], answer: 2 },
  { question: "Konuşma dilinin toplum içindeki kritik rollerinden biri değildir?", options: ["Bireyler arası iletişim", "Düşüncenin desteklenmesi", "Grup kimliği oluşturma", "Yer çekimini ortadan kaldırma"], answer: 3 },
  { question: "Bireyler arası iletişim öncelikle nasıl bir nitelik taşır?", options: ["Toplumsal", "Kimyasal", "Rastlantısal", "Sessiz"], answer: 0 },
  { question: "Sunuma göre düşünce hangi süreçlerle biçimlenir?", options: ["Tekrarlanan yaşantılar ve anlam çıkarma süreçleriyle", "Sadece kalıtımla", "Yalnızca okul kitaplarıyla", "Sadece oyun oynayarak"], answer: 0 },
  { question: "Düşünce ile dil ilişkisi hangi durumda güçlenir?", options: ["Çevrede kullanılan dil yaşantı sürecine katıldığında", "Çocuk hiç konuşma duymadığında", "Yalnızca yazı yazdığında", "Hiç sosyal etkileşim olmadığında"], answer: 0 },
  { question: "Konuşma dili grup kimliği açısından ne işe yarar?", options: ["Kimlikleri tamamen ortadan kaldırır", "Bireyleri yalnızlaştırır", "Topluluklara ait olma duygusunu destekler", "Sadece okul başarısını etkiler"], answer: 2 },
  { question: "Kültürel aktarım açısından konuşma dilinin işlevi nedir?", options: ["Nesilden nesle bilgi ve yaşam tarzı aktarmak", "Yalnızca oyun kurmak", "Sadece duyguları bastırmak", "Kültürü durdurmak"], answer: 0 },
  { question: "Dil yapısının ilk bileşeni olan ses bilgisi hangi alanı ifade eder?", options: ["Fonoloji", "Morfoloji", "Sentaks", "Pragmatik"], answer: 0 },
  { question: "Fonoloji temel olarak neyi inceler?", options: ["Kelimelerin anlamlarını", "Seslerin diziliş ve kullanım kurallarını", "Cümlelerin toplumsal etkisini", "Kitap okuma alışkanlığını"], answer: 1 },
  { question: "Biçim bilgisi yani morfoloji neyi inceler?", options: ["Yeni kelime türetme ve kelime biçimlenme kurallarını", "Yalnızca vurgu ve tonlamayı", "Sadece kelime sıklığını", "Resimli kitap seçimlerini"], answer: 0 },
  { question: "Söz dizimi, aşağıdakilerden hangisiyle ilgilidir?", options: ["Ses tellerinin yapısı", "Kelimelerin cümle içinde dizilişi", "Nesnelerin rengi", "Yalnızca jestler"], answer: 1 },
  { question: "Anlam bilgisi yani semantik hangi soruya odaklanır?", options: ["Kelimeler ve cümleler ne anlama gelir?", "Hangi organla konuşulur?", "İlk diş ne zaman çıkar?", "Hangi kalem daha uzundur?"], answer: 0 },
  { question: "Pragmatik bilgi en çok hangisiyle ilgilidir?", options: ["Konuşmanın bağlama uygun kullanımıyla", "Sadece harflerin yazımıyla", "Yalnızca dil kaslarıyla", "Sadece kelime ezberlemeyle"], answer: 0 },
  { question: "Pragmatik beceriye örnek olarak hangisi verilebilir?", options: ["Ne zaman konuşacağını ve ne zaman sessiz kalacağını bilmek", "Sadece harfleri sırayla saymak", "Kalemi doğru tutmak", "Yalnız odaya bakmak"], answer: 0 },
  { question: "Dilin temel bileşenlerinden hangisi kelimelerin anlamları arasındaki ilişkiye odaklanır?", options: ["Semantik", "Fonoloji", "Nöroloji", "Solunum"], answer: 0 },
  { question: "Aşağıdakilerden hangisi dilin yapısal bileşenlerinden biri değildir?", options: ["Fonoloji", "Morfoloji", "Pragmatik", "Fotosentez"], answer: 3 },
  { question: "Konuşmayı başlatma, sürdürme ve sonlandırma becerisi en çok hangi dil alanıyla ilişkilidir?", options: ["Pragmatik", "Semantik", "Fonoloji", "Morfoloji"], answer: 0 },
  { question: "Davranışçı yaklaşıma göre dil nasıl öğrenilir?", options: ["Pekiştirme ve taklit yoluyla", "Sadece biyolojik olgunlaşmayla", "Hiç çevresel etki olmadan", "Yalnız kitap okuyarak"], answer: 0 },
  { question: "Davranışçı görüşle en çok ilişkilendirilen isim hangisidir?", options: ["Skinner", "Chomsky", "Piaget", "Vygotsky"], answer: 0 },
  { question: "Sosyal öğrenme yaklaşımı dil gelişiminde neyi öne çıkarır?", options: ["Model alma ve gözlem yoluyla öğrenmeyi", "Sadece içgüdüyü", "Yalnızca genetik mirası", "Sadece refleksleri"], answer: 0 },
  { question: "Doğuştancı psikodilbilimsel yaklaşımın en bilinen kuramcısı kimdir?", options: ["Chomsky", "Skinner", "Watson", "Pavlov"], answer: 0 },
  { question: "Chomsky'nin yaklaşımına göre çocuk dili öğrenirken hangi düşünce öne çıkar?", options: ["İnsanın doğuştan dil öğrenmeye yatkın olması", "Dil yalnız cezayla öğrenilir", "Dil yalnız ezberdir", "Dil gelişimi rastlantısaldır"], answer: 0 },
  { question: "Bilişsel yaklaşım dil gelişimini en çok neyle ilişkilendirir?", options: ["Bilişsel olgunlaşma ve kavram gelişimiyle", "Sadece işitme duyusuyla", "Yalnızca kas gücüyle", "Sadece takvim yaşıyla"], answer: 0 },
  { question: "Etkileşimci yaklaşımın temel savı hangisidir?", options: ["Dil gelişimi çocuk ile çevrenin karşılıklı etkileşimiyle ilerler", "Dil sadece anne tarafından öğretilir", "Dil yalnız kalıtımla açıklanır", "Dil gelişimi eğitimden bağımsızdır"], answer: 0 },
  { question: "Etkileşimci yaklaşıma göre çocuk dil öğrenirken nasıl bir rol üstlenir?", options: ["Aktif bir öğrenen olur", "Tamamen pasif kalır", "Sadece dinler, hiç üretim yapmaz", "Yalnızca tekrar eder"], answer: 0 },
  { question: "Aşağıdakilerden hangisi dil gelişimi kuramlarından biri değildir?", options: ["Davranışçı", "Doğuştancı", "Etkileşimci", "Jeolojik"], answer: 3 },
  { question: "Dil gelişimini yalnız tek bir etmenle açıklamayan yaklaşım hangisidir?", options: ["Etkileşimci yaklaşım", "Davranışçılık", "Sadece taklit görüşü", "Tek etken görüşü"], answer: 0 },
  { question: "Wernicke alanı en çok hangi işleve katkı sağlar?", options: ["Dil anlama", "Yürüme", "Görme", "Denge kurma"], answer: 0 },
  { question: "Broca alanı en çok hangisiyle ilişkilidir?", options: ["Konuşma üretimi", "İşitme keskinliği", "Tat alma", "Yutkunma refleksi"], answer: 0 },
  { question: "Broca ve Wernicke alanlarını bağlayan yapı hangisidir?", options: ["Fasciculus arcuatus", "Omurilik", "Diyafram", "Beyincik"], answer: 0 },
  { question: "Sunumdaki bilgiye göre Wernicke alanı beynin hangi bölümünde yer alır?", options: ["Sol temporal lob", "Sağ oksipital lob", "Beyincik", "Omurilik soğanı"], answer: 0 },
  { question: "Dilin nörolojik temelleri incelenirken aşağıdakilerden hangisi önemlidir?", options: ["Beyindeki dil alanları", "Yalnızca el kasları", "Ayak tabanı", "Tırnak yapısı"], answer: 0 },
  { question: "Dilin fizyolojik temelleri aşağıdakilerden hangisiyle daha çok ilgilidir?", options: ["Konuşma organları ve hayati işlevlerle", "Sadece yazı yazmakla", "Yalnızca resim çizmekle", "Sadece dinleme alışkanlığıyla"], answer: 0 },
  { question: "Dil hangi işlevlerin gerçekleşmesinde kritik rol oynar?", options: ["Konuşma, yutma, solunum ve çiğneme", "Sadece koşma", "Sadece uyuma", "Yalnızca göz kırpma"], answer: 0 },
  { question: "Konuşma seslerinin üretilmesi için aşağıdakilerden hangisi gerekir?", options: ["Dil ve ilgili konuşma organlarının koordinasyonu", "Sadece ayak hareketi", "Sadece el çırpma", "Yalnız karanlık ortam"], answer: 0 },
  { question: "Aşağıdakilerden hangisi nörolojik temellerle fizyolojik temeller arasındaki farkı doğru verir?", options: ["Nörolojik temel beyin alanlarıyla, fizyolojik temel konuşma organlarıyla ilgilidir", "İkisi tamamen aynıdır", "Fizyolojik temel sadece yazıyı kapsar", "Nörolojik temel yalnız kulağı kapsar"], answer: 0 },
  { question: "Dilin beyindeki işlenişinde tek bir merkez yerine ağ yapısının önem kazanması en çok hangi gerçeği gösterir?", options: ["Dil karmaşık ve çok bileşenli bir süreçtir", "Dil sadece doğuştan gelir", "Dil çevreden etkilenmez", "Dil gelişimi durur"], answer: 0 },
  { question: "0-2 ay dönemindeki ses üretimleri için kullanılan ifade hangisidir?", options: ["Refleksif vokalizasyonlar", "Telegrafik konuşma", "Holofrazlar", "Akademik dil"], answer: 0 },
  { question: "Ağlama, öksürme ve hıçkırma erken dönemde nasıl değerlendirilir?", options: ["Bebeğin fiziksel durumundan kaynaklanan refleksif sesler olarak", "İleri düzey cümle kurma biçimi olarak", "Bilinçli hikâye anlatımı olarak", "Okuma becerisi olarak"], answer: 0 },
  { question: "Doğumdan sonraki ilk ağlama sunumda nasıl açıklanır?", options: ["Nefes alma gereksinimine bağlı fizyolojik bir olay olarak", "İlk kelime denemesi olarak", "Pragmatik beceri olarak", "Yazılı dil örneği olarak"], answer: 0 },
  { question: "Gığıldama ve benzeri rahatlık sesleri en çok hangi erken dönemle ilişkilidir?", options: ["Gığıldama dönemi", "Okul dönemi", "Telegrafik dönem", "Yazı dönemi"], answer: 0 },
  { question: "Vokal oyun dönemi genel olarak hangi özelliği taşır?", options: ["Bebeğin seslerle deneme yapması", "Uzun yazılar yazması", "Kurallı paragraf kurması", "Sadece sessiz kalması"], answer: 0 },
  { question: "Babıldama dönemi dil gelişiminde neden önemlidir?", options: ["Konuşma seslerine benzeyen tekrarların artması nedeniyle", "Çocuk bu dönemde yazı yazdığı için", "Yalnızca diş çıkarma ile ilgili olduğu için", "Kelime sayısı azaldığı için"], answer: 0 },
  { question: "Hece tekrarlarına dayalı babıldama için hangi örnek uygundur?", options: ["Ba-ba-ba", "Okula gittim", "Yarın geleceğim", "Niçin böyle oldu"], answer: 0 },
  { question: "Çeşitlenmiş babıldamada ne görülür?", options: ["Ses dizilerinde çeşitlenme", "Yalnızca ağlama", "Hiç ses çıkmaması", "Sadece yazılı semboller"], answer: 0 },
  { question: "Jargon benzeri konuşmaların görüldüğü dönemde bebek ne yapar?", options: ["Yetişkin konuşmasına benzeyen tonlama üretir", "Roman yazar", "Matematik problemi çözer", "Sadece uyur"], answer: 0 },
  { question: "9-12 ay döneminde bebeklerin jest ve işaret kullanmaya başlaması neyi gösterir?", options: ["İletişimsel niyetin güçlendiğini", "Dil gelişiminin durduğunu", "Sadece motor gerilik olduğunu", "İşitmenin kaybolduğunu"], answer: 0 },
  { question: "Ses sözcükler döneminde bebek oyuncağı istemek için ne yapabilir?", options: ["İşaret edip iletişim sinyali kullanabilir", "Sadece ağlayıp bakmayı bırakır", "Uzun paragraf kurar", "Yazı yazar"], answer: 0 },
  { question: "Sunumdaki sıraya göre dil gelişimi evreleri nasıl bir yapı gösterir?", options: ["Öngörülebilir ve evrensel bir sıra izler", "Tamamen rastlantısaldır", "Her çocukta ters sırayla olur", "Sadece okulda başlar"], answer: 0 },
  { question: "İlk sözcükler ve tek sözcüklü cümlecikler yaklaşık hangi dönemde görülür?", options: ["12-18 ay", "0-2 ay", "24-60 ay", "7-10 yaş"], answer: 0 },
  { question: "Holofraz nedir?", options: ["Tek bir sözcükle geniş bir anlam ifade edilmesi", "İki sayfalık hikâye anlatımı", "Yalnız ses tekrarları", "Yazı dili kuralı"], answer: 0 },
  { question: "Bebeklerin ilk sözcükleri genellikle nasıl olur?", options: ["Bir ya da iki heceli", "Beş altı heceli", "Sadece yabancı dilde", "Yalnız bağlaç biçiminde"], answer: 0 },
  { question: "İlk sözcüklerin anlaşılması, üretilmesinden genellikle nasıl farklıdır?", options: ["Bebekler önce anlar, sonra kullanır", "Önce yazar, sonra anlar", "Önce uzun cümle kurar", "Önce okur, sonra duyar"], answer: 0 },
  { question: "Anlam genişlemesine örnek hangisidir?", options: ["Araba sözcüğünü otobüs ve kamyon için de kullanmak", "Sadece kendi oyuncağına ayı demek", "Kalemi hiç kullanmamak", "Sessiz kalmak"], answer: 0 },
  { question: "Anlam daralmasına örnek hangisidir?", options: ["Ayı sözcüğünü yalnız evdeki oyuncak ayı için kullanmak", "Kuş sözcüğünü tüm hayvanlar için kullanmak", "Araba sözcüğünü tüm taşıtlar için kullanmak", "Su sözcüğünü tüm içecekler için kullanmak"], answer: 0 },
  { question: "Bebeklerin hayvan seslerini taklit ederek kelime üretmesi neye örnektir?", options: ["Duyduğu seslerden yola çıkarak sözcük uydurmaya", "Dil gelişiminin sona ermesine", "Akademik dile", "Yazılı anlatıma"], answer: 0 },
  { question: "İki sözcüklü birleşimler dönemi yaklaşık hangi yaş aralığıdır?", options: ["18-24 ay", "0-2 ay", "24-60 ay", "10-12 yaş"], answer: 0 },
  { question: "Telegrafik konuşmanın ayırt edici özelliği hangisidir?", options: ["Edat, zamir ve yardımcı fiillerin sık atlanması", "Yalnız ses oyunları içermesi", "Sadece ağlamadan oluşması", "Tamamen yazılı olması"], answer: 0 },
  { question: "Telegrafik konuşmada daha çok hangi tür sözcükler korunur?", options: ["İsim, fiil ve sıfat gibi anlam taşıyan sözcükler", "Sadece ünlemler", "Yalnız bağlaçlar", "Sadece zamirler"], answer: 0 },
  { question: "İki yaşına yaklaşan çocuklarda kelime patlaması neyi ifade eder?", options: ["Her gün çok sayıda yeni kelime öğrenilmesini", "Kelime unutmanın artmasını", "Hiç konuşmamayı", "Yalnızca tek ses üretmeyi"], answer: 0 },
  { question: "Sunuma göre iki yaşına doğru çocuk günde ortalama kaç yeni sözcük öğrenebilir?", options: ["9", "1", "25", "40"], answer: 0 },
  { question: "İki yaş civarında çocuk yaklaşık kaç sözcükle konuşabilir?", options: ["200", "20", "2000", "10000"], answer: 0 },
  { question: "İlk 50 kelimenin büyük bölümünün hangi türden oluştuğu belirtilmiştir?", options: ["İsimler", "Bağlaçlar", "Zamirler", "Edatlar"], answer: 0 },
  { question: "Türkçe gibi sözcük sırası daha esnek diller için hangi ifade sunumda yer alır?", options: ["Bebekler daha erken yaşta yetişkinlere benzer kısa cümleler kurabilir", "Çocuklar hiç telegrafik konuşma göstermez", "Dil gelişimi daha geç başlar", "Sadece yazı dili gelişir"], answer: 0 },
  { question: "24-60 ay aralığı genel olarak hangi dönemi ifade eder?", options: ["Dil bilgisi kurallarına göre konuşma dönemi", "Refleksif ses dönemi", "Yalnız ağlama dönemi", "Üniversite dönemi"], answer: 0 },
  { question: "Üç yaşındaki çocuk için sunumda yaklaşık kaç sözcükten söz edilir?", options: ["1000", "50", "200", "5000"], answer: 0 },
  { question: "Üç yaşındaki çocukların kurmaya başladığı cümleler genellikle nasıldır?", options: ["5-6 kelimelik", "Yalnız tek kelimelik", "Sadece yazılı", "Hiç fiil içermeyen"], answer: 0 },
  { question: "Dört yaş civarında çocukların yaklaşık kaç kelimeyle konuşabildiği belirtilir?", options: ["1500", "150", "50", "5000"], answer: 0 },
  { question: "Dört yaşındaki çocuklar cümle kurma bakımından hangi özelliği gösterebilir?", options: ["Yetişkine benzer daha karmaşık cümleler kurabilirler", "Sadece ağlayarak iletişim kurarlar", "Hiç sıfat kullanamazlar", "Sadece tek hece söylerler"], answer: 0 },
  { question: "Beş yaşındaki çocuk için verilen yaklaşık sözcük sayısı hangisidir?", options: ["2000", "200", "500", "10000"], answer: 0 },
  { question: "Beş yaş civarında çocukların hangi zaman ifadelerini anlayabildiği belirtilir?", options: ["Dün, bugün, yarın", "Sadece şimdi", "Hiçbir zaman ifadesi", "Sadece saat adları"], answer: 0 },
  { question: "Anaokulu yıllarında kelime öğrenimini kolaylaştıran yetişkin davranışı hangisidir?", options: ["Nesneyi işaret edip onun hakkında konuşmak", "Çocuğu tamamen yalnız bırakmak", "Hiç geri bildirim vermemek", "Sadece yazılı sınav yapmak"], answer: 0 },
  { question: "Sunuma göre 24-60 ay döneminde çocukların dil gelişimi nasıldır?", options: ["Olağanüstü bir hızla ilerler", "Tamamen durur", "Sadece ses düzeyinde kalır", "Geriler"], answer: 0 },
  { question: "İlkokul yıllarında çocuklar bağlaçları kullanarak neyi daha iyi ifade edebilir?", options: ["Neden-sonuç ilişkilerini", "Sadece renkleri", "Yalnız sayıları", "Sadece duygusuz cümleleri"], answer: 0 },
  { question: "İlkokul yıllarında gelişen sosyal bakış açısı alma becerisi neyi destekler?", options: ["Başkalarının bakış açısını anlayıp dili ikna amacıyla kullanmayı", "Sadece sessiz kalmayı", "Yazı yazmayı bırakmayı", "Hiç soru sormamayı"], answer: 0 },
  { question: "İlkokul döneminde çocukların ana dillerine ilişkin hangi farkındalığı gelişir?", options: ["Seslerin alfabetik bir temsilinin olduğunu kavrama", "Harflerin gereksiz olduğunu düşünme", "Sadece büyük harfleri tanıma", "Yazının dilden bağımsız olduğunu sanma"], answer: 0 },
  { question: "İlkokul çağında sözcükler arasındaki ilişkiyi kurma becerisi neyi artırır?", options: ["Anlam ağının ve kelime bilgisinin gelişmesini", "Dil gelişiminin yavaşlamasını", "Yalnız motor beceriyi", "Sadece oyun süresini"], answer: 0 },
  { question: "Birinci sınıfa gelen çocuğun ortalama konuşma sözcük dağarcığı yaklaşık kaçtır?", options: ["2600", "260", "6000", "14000"], answer: 0 },
  { question: "Birinci sınıf döneminde çocuğun anlayabildiği sözcük sayısı yaklaşık kaç olabilir?", options: ["14000", "140", "2000", "500"], answer: 0 },
  { question: "İlkokul yıllarının sonunda alıcı dil sözcük dağarcığı için hangi genel durum beklenir?", options: ["Okulun da etkisiyle belirgin artış gösterir", "Tamamen sabit kalır", "Konuşma dilinden bağımsızdır", "Azalır"], answer: 0 },
  { question: "Dil gelişimini etkileyen faktörler arasında aşağıdakilerden hangisi yer almaz?", options: ["Biyolojik", "Çevresel", "Bilişsel", "Gezegenin halkaları"], answer: 3 },
  { question: "Bilişsel faktörler dil gelişiminde en çok hangi alanı destekler?", options: ["Zihinsel temsillerin oluşması ve dil bilgisinin işlenmesi", "Sadece boy uzamasını", "Yalnızca iştahı", "Sadece refleksleri"], answer: 0 },
  { question: "Problem çözme ve eleştirel düşünme becerileri dil gelişimiyle nasıl ilişkilidir?", options: ["Dil öğrenme ve kullanımını destekler", "Dil gelişimini engeller", "Sadece yazı yazmayı etkiler", "Hiç ilişkili değildir"], answer: 0 },
  { question: "Cinsiyet konusunda sunumda öne çıkan görüşlerden biri hangisidir?", options: ["Kız çocuklarında dil gelişimi erken dönemde daha hızlı başlayabilir", "Erkek çocukları her zaman daha erken konuşur", "Cinsiyetin hiç etkisi yoktur", "Sadece yetişkinlerde fark oluşur"], answer: 0 },
  { question: "Kız çocuklarıyla sembolik oyunun daha sık kullanılması hangi sonucu destekleyebilir?", options: ["Dilin daha erken başlaması ve daha hızlı ilerlemesi", "Dil gelişiminin durması", "Kelime sayısının azalması", "İşitme kaybı oluşması"], answer: 0 },
  { question: "Erken dönemde kız çocuklarının sözel uyaranlara daha fazla tepki vermesi neyle ilişkilendirilir?", options: ["Kelime sayısının erkeklere göre daha erken artabilmesiyle", "Hiç konuşmamalarıyla", "Yalnızca motor gelişimle", "Yalnızca fiziksel büyümeyle"], answer: 0 },
  { question: "Biyolojik cinsiyet farklarının başlangıcı sunumda hangi süreçle ilişkilendirilir?", options: ["Gebelikte kromozomların belirlenmesiyle", "İlkokula başlama ile", "Kitap okumaya başlama ile", "Diş çıkarma ile"], answer: 0 },
  { question: "Aile ortamı dil gelişimini en çok nasıl etkiler?", options: ["Sunulan etkileşim, model olma ve konuşma fırsatlarıyla", "Sadece çocuğun boyunu uzatarak", "Yalnız uyku saatini belirleyerek", "Hiç etkisi yoktur"], answer: 0 },
  { question: "Kitaplarla erken karşılaşma dil gelişimine nasıl katkı sağlar?", options: ["Sözcük dağarcığını ve anlama becerisini artırır", "Dil gelişimini yavaşlatır", "Sadece motor beceriyi geliştirir", "Yalnız çizim becerisini etkiler"], answer: 0 },
  { question: "İki dillilik dil gelişimi bağlamında nasıl ele alınır?", options: ["Dil gelişimini etkileyen çevresel faktörlerden biri olarak", "Sadece biyolojik bir sorun olarak", "Dil gelişimiyle ilgisiz bir durum olarak", "Yalnız okul başarısı olarak"], answer: 0 },
  { question: "Çocuğun çevresindeki konuşma miktarı ve niteliği neden önemlidir?", options: ["Dil girdisi ne kadar zenginse gelişim o kadar desteklenir", "Hiç fark yaratmaz", "Sadece ses şiddeti önemlidir", "Yalnız televizyon sesi yeterlidir"], answer: 0 },
  { question: "Dil gelişiminin evrensel bir sıra izlemesi hangi sonucu düşündürür?", options: ["Bazı biyolojik ve gelişimsel ortaklıkların bulunduğunu", "Çevrenin tamamen önemsiz olduğunu", "Bütün çocukların aynı gün konuşacağını", "Okul öncesi dönemin gereksiz olduğunu"], answer: 0 },
  { question: "Aşağıdakilerden hangisi dil gelişimini destekleyen yetişkin tutumlarından biridir?", options: ["Çocukla etkileşimli konuşmak ve geri bildirim vermek", "Çocuğu uzun süre sessiz bırakmak", "Hiç soru sormamak", "Sadece emir vermek"], answer: 0 },
  { question: "Kelime patlamasının yaşandığı dönemde en etkili desteklerden biri hangisidir?", options: ["Sık tekrar ve anlamlı etkileşim", "Tamamen sessizlik", "Yalnız televizyon açık bırakmak", "Sadece ceza vermek"], answer: 0 },
  { question: "Dilin toplumsal işlevi düşünüldüğünde aşağıdakilerden hangisi beklenir?", options: ["İlişki kurma ve sürdürmeyi kolaylaştırması", "Bireyleri tümüyle koparması", "Sadece yazılı sınavlarda işe yaraması", "Düşünceyi engellemesi"], answer: 0 },
  { question: "Bir çocuk 'büyük, kocaman ve devasa' sözcükleri arasındaki yakınlığı fark etmeye başladığında hangi becerisi gelişmektedir?", options: ["Anlamsal ilişki kurma becerisi", "Yalnız motor koordinasyon", "Sadece refleksif ses üretimi", "Yutma becerisi"], answer: 0 },
  { question: "Sunuma göre konuşma dili aynı zamanda neyin taşıyıcısıdır?", options: ["Toplumun dünya görüşü ve yaşam tarzının", "Sadece sayıların", "Yalnız görsel hafızanın", "Sadece bireysel suskunluğun"], answer: 0 },
];

const state = { currentIndex: 0, score: 0, locked: false, answers: Array(questions.length).fill(null) };

const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");
const restartBtnBottom = document.getElementById("restartBtnBottom");
const questionNav = document.getElementById("questionNav");
let nextButton = null;

const balancedQuestions = questions.map((question, questionIndex) => {
  const targetAnswerIndex = questionIndex % question.options.length;
  const shift = (question.answer - targetAnswerIndex + question.options.length) % question.options.length;

  return {
    question: question.question,
    options: question.options.map((_, index) => question.options[(index + shift) % question.options.length]),
    answer: targetAnswerIndex,
  };
});

function updateHeader() {
  questionCounter.textContent = `${Math.min(state.currentIndex + 1, questions.length)} / ${questions.length}`;
  scoreCounter.textContent = String(state.score);
  progressBar.style.width = `${(state.currentIndex / questions.length) * 100}%`;
  renderNavigator();
}

function renderNavigator() {
  questionNav.innerHTML = "";

  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-btn";
    button.textContent = String(index + 1);

    if (index === state.currentIndex) {
      button.classList.add("current");
    }

    if (state.answers[index] === true) {
      button.classList.add("correct");
    }

    if (state.answers[index] === false) {
      button.classList.add("wrong");
    }

    button.addEventListener("click", () => jumpToQuestion(index));
    questionNav.appendChild(button);
  });
}

function showQuestion() {
  updateHeader();
  feedback.textContent = "";
  feedback.className = "feedback";
  answers.innerHTML = "";
  if (nextButton) {
    nextButton.remove();
    nextButton = null;
  }

  const currentQuestion = balancedQuestions[state.currentIndex];
  questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    answers.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (state.locked) return;
  state.locked = true;

  const currentQuestion = balancedQuestions[state.currentIndex];
  const answerButtons = [...document.querySelectorAll(".answer-btn")];
  const correctIndex = currentQuestion.answer;

  answerButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && index !== correctIndex) button.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) {
    state.score += 1;
    state.answers[state.currentIndex] = true;
    scoreCounter.textContent = String(state.score);
    feedback.textContent = "Doğru cevap";
    feedback.classList.add("correct");
  } else {
    state.answers[state.currentIndex] = false;
    feedback.textContent = "Yanlış cevap";
    feedback.classList.add("wrong");
  }

  renderNavigator();
  renderNextButton();
}

function renderNextButton() {
  nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "primary-btn";
  nextButton.textContent = state.currentIndex === questions.length - 1 ? "Sonucu Gör" : "Sıradaki Soru";
  nextButton.addEventListener("click", goToNextQuestion);
  feedback.insertAdjacentElement("afterend", nextButton);
}

function goToNextQuestion() {
  state.currentIndex += 1;
  state.locked = false;

  if (state.currentIndex >= questions.length) {
    showResults();
    return;
  }

  showQuestion();
}

function showResults() {
  updateHeader();
  progressBar.style.width = "100%";
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultText.textContent = `${questions.length} sorunun ${state.score} tanesini doğru yaptın. İstersen testi baştan çözebilirsin.`;
}

function restartQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.locked = false;
  state.answers = Array(questions.length).fill(null);
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

function jumpToQuestion(index) {
  state.currentIndex = index;
  state.locked = false;
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

restartBtn.addEventListener("click", restartQuiz);
restartBtnBottom.addEventListener("click", restartQuiz);

showQuestion();
