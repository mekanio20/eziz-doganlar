export const categories = {
  TR: [
    { id: 1, name: "Konutlar" },
    { id: 2, name: "Eğitim" },
    { id: 3, name: "Sağlık" },
    { id: 4, name: "Yönetim" },
  ],
  TM: [
    { id: 1, name: "Ýaşaýyş jaýlary" },
    { id: 2, name: "Bilim" },
    { id: 3, name: "Saglyk" },
    { id: 4, name: "Dolandyryş" },
  ],
  EN: [
    { id: 1, name: "Residentials" },
    { id: 2, name: "Education" },
    { id: 3, name: "Health" },
    { id: 4, name: "Management" },
  ],
  RU: [
    { id: 1, name: "Жилые" },
    { id: 2, name: "Образование" },
    { id: 3, name: "Здравоохранение" },
    { id: 4, name: "Управление" },
  ],
};

export const news = {
  TR: [
    { id: 1, name: "Haber" },
    { id: 2, name: "Ödüller" },
    { id: 3, name: "Açılış" },
    { id: 4, name: "Finansal" },
  ],
  TM: [
    { id: 1, name: "Habarlar" },
    { id: 2, name: "Baýraklar" },
    { id: 3, name: "Açylyş" },
    { id: 4, name: "Maliýe" },
  ],
  EN: [
    { id: 1, name: "News" },
    { id: 2, name: "Awards" },
    { id: 3, name: "Opening" },
    { id: 4, name: "Financial" },
  ],
  RU: [
    { id: 1, name: "Новости" },
    { id: 2, name: "Награды" },
    { id: 3, name: "Открытие" },
    { id: 4, name: "Финансовый" },
  ],
};

export const news_contents = {
  TR: [
    {
      id: 1,
      date: "26.07.2024",
      imgs: ["/img/news-2.webp", "/img/news-2.webp", "/img/news-2-1.webp"],
      title:
        'İnşaat ve Mimarlık Bakanlığı, "Parlak Nesil" ile sözleşme yapma yetkisine sahip oldu',
      desc: `
        Türkmenistan Cumhurbaşkanı, Türkmenistan'da inşaatta fiyat oluşumuna ilişkin devlet bilgi sisteminin oluşturulması 
        ve inşaatta ulusal maliyet ölçüm tabanının geliştirilmesi ve fiyat oluşumu sisteminin iyileştirilmesine 
        yönelik Devlet Programının uygulanması amacıyla Kararı imzaladı. Belgeye göre İnşaat ve Mimarlık Bakanlığı, 
        “Parlak nesil” ile fiyatların hesaplanmasına yönelik yazılımın daha da geliştirilmesi için sözleşme yapma yetkisini verdi.
      `,
      catId: 4,
    },
    {
      id: 2,
      date: "01.09.2023",
      imgs: ["/img/news-1.webp", "/img/news-1-1.webp", "/img/news-1-2.webp"],
      title:
        "Türkmenistan Cumhurbaşkanı, Türkmen Devlet Mimarlık ve İnşaat Enstitüsü'nün yeni bina kompleksinin temel atma törenine katıldı",
      desc: `
        Bugün 1 Eylül - Eğitim ve Öğrenci Gençlik Günü, Türkmenistan Cumhuriyeti Cumhurbaşkanı Serdar Berdimuhamedov
        Türkmen Devlet Mimarlık ve İnşaat Enstitüsü bina kompleksinin temel atma töreninde yer aldı.
        <br><br>
        Bu vesileyle Türkmenistan Meclisi, ülke Hükümeti, Türkmenistan'daki diplomatik misyonlar
        ve uluslararası kuruluşların liderleri ve temsilcileri, saygıdeğer büyükler ve öğrenciler katıldı.
        <br><br>
        Ülkenin çağdaş eğitim ve bilim merkezleri olan yükseköğretim kurumlarının malzeme ve donanım altyapısı
        Kahraman Dostumuz Gurbanguly Berdimuhamedov tarafından kapsamlı bir güçlendirme başlatıldı
        ve bugün Cumhurbaşkanı Serdar Berdimuhamedov'un liderliğinde başarıya ulaşıyor
        Uygulanan bilimsel ve eğitimsel reformların önemli bir yönüdür.
        <br><br>
        Türkmen Devlet Mimarlık ve İnşaat Enstitüsü (TDBGI), Türkmenistan Cumhurbaşkanlığı Kararnamesi 
        uyarınca 25 Mayıs 2012 tarihinde kurulmuş genç, modern bir bilim ve tasarım eğitim kurumudur. 
        TDBGI'nin temel görevi mimarlık-inşaat, kamu sektörü, kimya, enerji, sanayi ve karayolu-ulaştırma 
        sektörlerine üst düzey uzman yetiştirmek ve mühendislik personeli sağlamaktır. 
        Şu anda enstitünün 7 fakültesi, 28 bölümü var ve buralarda 4 binin üzerinde öğrenci eğitim görüyor. 
        Bu yüksek öğretim kurumunda her yıl 600'den fazla uzman eğitim görmektedir.
        <br><br>
        Bu yılın 25 Ağustos'unda Cumhurbaşkanı tarafından imzalanan ilgili Karar uyarınca Aşkabat'ta Gorogly 
        Caddesi boyunca inşa edilecek bu tesisin projesi, inşaatı, bitişik alanların iyileştirilmesi, mevcut 
        mühendislik sistemlerinin modernizasyonu ve yenilerinin inşası. Türkmenistan Sanayicileri ve Girişimcileri 
        Birliği üyesi "Azayip İnşaat" özel kuruluşu.
        <br><br>
        Ayrıca belgeye göre enstitü bina kompleksinin Eylül 2026'da kullanıma hazır hale getirilmesine karar verildi.
        <br><br>
        Eğitim ve Öğrenci Gençlik Günü kutlamaları devam ediyor.
      `,
      catId: 3,
    },
    {
      id: 3,
      date: "27.07.2023",
      imgs: ["/img/news-3.webp"],
      title: "Büyük ölçekli yapılar Türkmenistan'ın ekonomik gücünün simgesi",
      desc: `
        Bakanlar Kurulu'nun 14 Temmuz'da gerçekleştirilen kapsamlı toplantısında 2023 yılının ilk 
        yarısına ilişkin sonuçlar ele alındı. Elde edilen sonuçlar, ulusal ekonominin istikrarlı 
        gelişiminin ve tüm öncelikli alanlarda sürekli ilerlemenin bir başka kanıtıdır. 
        Cumhurbaşkanı Serdar Berdimuhamedov'un önderliğinde "Devlet halk içindir!" sloganıyla ülkenin 
        sosyo-ekonomik kalkınmasına yönelik dev programların hayata geçirilmesinde inşaat sektörü 
        önemli rol oynuyor.
        <br><br>
        Hükümet toplantısında Türkmen lider, ülkede büyük ölçekli endüstriyel ve sosyal tesislerin 
        inşaatının devam ettiğini memnuniyetle kaydetti. Ülkemizin bölge, il ve ilçelerinde 1.400.000 
        metrekare alana sahip konut yapıları inşa edilerek kullanıma açılmış olup, sanayi tesisleri, 
        anaokulları, okullar ve diğer tesislerin inşaatları plana göre yürütülmektedir.
        <br><br>
        Nüfusa yüksek yaşam standardı, yaratıcı çalışma, modern eğlence ve konforlu yaşam koşulları sağlamayı 
        amaçlayan Ulusal Kırsal Programın uygulanmasına büyük önem verilmektedir. Bu programın hedeflerine 
        göre ülkenin her yerinde modern köyler inşa ediliyor ve kullanıma sunuluyor. Bu, köylerin modern 
        standartlara uygun ve kentsel olanaklar dikkate alınarak inşa edilmesine yönelik çok sorumlu bir 
        yaklaşımı göstermektedir.
        <br><br>
        Halkı ve onların refahını devlet politikasının önceliklerinden biri olarak belirleyen Türkmenistan 
        Cumhurbaşkanı Serdar Berdimuhamedov, halkın mutlu yaşamının sağlanması için büyük çaba harcıyor. 
        Kırsal ulusal program kapsamında bu yılın son altı ayında 1 milyar 400 milyon manat tutarında yatırım gerçekleştirildi.
        <br><br>
        Türkmen lideri ülkenin illerine iş ziyaretleri gerçekleştirdi ve kırsal nüfusun yaşam kalitesini 
        iyileştirmeye yönelik programatik tedbirlerin uygulanması hakkında bilgi sahibi oldu. Böylece 
        bugün sadece beyaz mermerden başkentimiz Aşkabat'ta değil, Anavatan'ın tüm bölgelerinde mimari 
        kompleksler, modern ofis binaları, her türlü konfora sahip konutlar, modern ekipman ve tekniklerle 
        donatılmış, rekabetçi ürünler üreten büyük işletmeler inşa edilmiştir. kısa bir sürede kullanıma 
        sunuluyor. Bu binaların kentsel gelişim alanında dünyanın modern deneyimini ulusal mimari geleneklerle 
        yansıttığını belirtmek gerekir. Bu, ulusal inşaat sektörünün çağın gerekliliklerine ve en iyi dünya 
        uygulamalarına dayalı olarak sürekli geliştiğini kanıtlamaktadır.
        <br><br>
        İnşaat kompleksine yapılan büyük yatırımların yanı sıra devletimizin girişimciliği desteklemeye 
        yönelik uyguladığı önlemler de kentsel gelişim politikasının başarısına katkıda bulundu. Hükümet 
        toplantısındaki raporlara göre, bu yılın ilk yarısında İnşaat ve Mimarlık Bakanlığı'nın çalışma 
        planı yüzde 109,8 oranında tamamlandı. Sanayi ve İnşaat Üretim Bakanlığı'na göre bu yılın altı 
        ayında üretim ve işlerin yürütülmesi planı yüzde 110,9'a eşitti.
      `,
      catId: 1,
    },
  ],
  TM: [
    {
      id: 1,
      date: "26.07.2024",
      imgs: ["/img/news-2.webp", "/img/news-2.webp", "/img/news-2-1.webp"],
      title:
        "Gurluşyk we binagärlik ministrligine “Parlak nesil” hojalyk jemgyýeti bilen şertnama baglaşmaga ygtyýar berildi",
      desc: `
        Türkmenistanda gurluşykda nyrh emele getirmegiň döwlet maglumat ulgamyny döretmek hem-de gurluşykda 
        milli çykdajy-ölçeg binýadyny işläp taýýarlamak we nyrh emele getirmek ulgamyny kämilleşdirmek üçin 
        Döwlet maksatnamasyny ýerine ýetirmek maksady bilen, Türkmenistanyň Prezidenti Karara gol çekdi. 
        Resminama laýyklykda, Gurluşyk we binagärlik ministrligine çenlik bahalary hasaplamakda programma 
        üpjünçiligini has-da ýokarlandyrmak üçin “Parlak nesil” hojalyk jemgyýeti bilen şertnama baglaşmaga 
        ygtyýar berildi.
      `,
      catId: 4,
    },
    {
      id: 2,
      date: "01.09.2023",
      imgs: ["/img/news-1.webp", "/img/news-1-1.webp", "/img/news-1-2.webp"],
      title:
        "Hormatly Prezidentimiz Türkmen döwlet binagärlik-gurluşyk institutynyň täze binalar toplumynyň düýbüni tutmak dabarasyna gatnaşdy",
      desc: `
        Şu gün 1-nji sentýabr - Bilim we talyp ýaşlar güni, Türkmenistan Respublikasynyň prezidenti Serdar Berdimuhamedow
        Türkmen döwlet binagärlik we gurluşyk institutynyň gurluşyk toplumynyň düýbüni tutmak dabarasyna gatnaşdy.
        <br> <br>
        Bu pursatdan peýdalanyp, Türkmenistanyň Assambleýasy, ýurduň hökümeti, Türkmenistandaky diplomatik wekilhanalary
        we halkara guramalaryň ýolbaşçylary we wekilleri, abraýly ýaşulular we talyplar.
        <br> <br>
        Modernurduň häzirki zaman bilim we ylym merkezleri bolan ýokary okuw jaýlarynyň material we enjam infrastrukturasy
        Gahryman dostumyz Gurbanguly Berdimuhamedow tarapyndan giňişleýin güýçlendirmek başlandy
        we häzirki wagtda prezident Serdar Berdimuhamedowyň ýolbaşçylygynda üstünlik gazanýar
        Geçirilen ylmy we bilim özgertmeleriniň möhüm tarapy.
        <br> <br>
        Türkmen döwlet binagärlik we gurluşyk instituty (TDBGI), Türkmenistanyň prezident karary
        2012-nji ýylyň 25-nji maýynda döredilen ýaş, häzirki zaman ylym we dizaýn okuw jaýy.
        TDBGI-iň esasy wezipesi binagärlik-gurluşyk, jemgyýetçilik pudagy, himiýa, energiýa, senagat we ýol transporty.
        Levelokary derejeli hünärmenleri taýýarlamak we pudaklary üçin in engineeringener işgärleri bilen üpjün etmek.
        Häzirki wagtda institutda 7 fakultet we 28 bölüm bar we 4 müňden gowrak talyp ol ýerde okaýar.
        Her ýyl bu ýokary okuw mekdebinde 600-den gowrak hünärmen okaýar.
        <br> <br>
        Gorogly, şu ýylyň 25-nji awgustynda Prezident tarapyndan gol çekilen degişli karara laýyklykda
        Taslama, gurluşyk, ýanaşyk ýerleri abadanlaşdyrmak, bar
        in engineeringenerçilik ulgamlaryny döwrebaplaşdyrmak we täzelerini gurmak. Türkmenistan senagatçylary we telekeçileri
        Bileleşigiň agzasy "Azayip İnşaat" hususy guramasy.
        <br> <br>
        Mundan başga-da, resminama laýyklykda institutyň gurluşyk toplumyny 2026-njy ýylyň sentýabr aýynda ulanmaga taýýarlamak kararyna gelindi.
        <br> <br>
        Bilim we talyplar ýaşlar gününi bellemek dowam edýär.
      `,
      catId: 3,
    },
    {
      id: 3,
      date: "27.07.2023",
      imgs: ["/img/news-3.webp"],
      title:
        "Giň gerimli gurluşyklar — Türkmenistanyň ykdysady kuwwatynyň nyşany",
      desc: `
        14-nji iýulda geçirilen Ministrler Kabinetiniň giňişleýin mejlisinde 2023-nji ýylyň 
        birinji ýarymynyň jemlerine garaldy. Gazanylan netijeler milli ykdysadyýetimiziň durnukly 
        ösüşiniň we onuň ileri tutulýan ähli ugurlarynda yzygiderli öňegidişlikleriň nobatdaky subutnamasydyr. 
        Hormatly Prezidentimiz Serdar Berdimuhamedowyň baştutanlygynda «Döwlet adam üçindir!» diýen şygar 
        astynda ýurdumyzyň durmuş-ykdysady taýdan ösdürilmegine gönükdirilen ägirt uly maksatnamalaryň 
        durmuşa geçirilmeginde gurluşyk pudagyna möhüm orun degişlidir.
        <br><br>
        Hökümet mejlisinde döwlet Baştutanymyz ýurdumyzda giň gerimli senagat we durmuş maksatly 
        desgalaryň gurluşygynyň dowam etdirilýändigini kanagatlanma bilen belledi. Diýarymyzyň  
        welaýatlarynda, şäherlerinde we etraplarynda meýdany 1 million 400 müň inedördül metre 
        barabar bolan ýaşaýyş jaýlary gurlup ulanmaga berildi, senagat desgalarynyň, çagalar baglarynyň, 
        mekdepleriň we beýleki desgalaryň gurluşyklary meýilnama esasynda alnyp barylýar.
        <br><br>
        Ilatyň ýokary durmuş derejesini, döredijilikli zähmet çekmegi, döwrebap dynç almagy we ýaşamagy 
        üçin amatly şertleri üpjün etmäge gönükdirilen Oba milli maksatnamasynyň durmuşa geçirilmegine 
        möhüm ähmiýet berilýär. Bu maksatnamada göz öňünde tutulan wezipelere laýyklykda, ýurdumyzyň 
        ähli künjeginde döwrebap obalar gurlup ulanmaga berilýär. Munuň özi obalaryň häzirki zaman ülňülerine 
        laýyklykda hem-de şäher amatlyklarynyň göz öňünde tutulyp gurulmagyna örän jogapkärli 
        çemeleşilýändigini görkezýär.
        <br><br>
        Adam we onuň abadan durmuşy baradaky aladany döwlet syýasatynyň ileri tutulýan ugurlarynyň biri hökmünde 
        kesgitlän hormatly Prezidentimiz Serdar Berdimuhamedow halkymyzyň bagtyýar durmuşyny üpjün etmek 
        ugrunda uly tagalla edýär. Oba milli maksatnamasyna laýyklykda, şu ýylyň geçen alty aýynda 
        1 milliard 400 million manatdan gowrak möçberde maýa goýumlar özleşdirildi.
        <br><br>
        Döwlet Baştutanymyz ýurdumyzyň welaýatlaryna iş saparlaryny amala aşyryp, sebitlerde düýpli özgertmeleri 
        durmuşa geçirmegiň çäklerinde alnyp barylýan işler, oba ilatynyň ýaşaýyş-durmuş derejesini gowulandyrmak 
        boýunça maksatnamalaýyn çäreleriň ýerine ýetirilişi bilen tanyşýar. Şeýlelikde, häzirki wagtda diňe bir 
        ak mermerli paýtagtymyz Aşgabatda däl, eýsem, Watanymyzyň ähli künjeklerinde-de gysga wagtyň içinde 
        binagärlik toplumlary, döwrebap edara binalary, ähli amatlyklary bolan ýaşaýyş jaýlary, häzirki zaman 
        enjamlary we tehnikalary bilen enjamlaşdyrylan, bäsdeşlige ukyply önümleri öndürýän iri kärhanalar gurlup 
        ulanmaga berilýär. Bu desgalarda milli binagärlik däpleri bilen şähergurluşyk babatda dünýäniň häzirki zaman 
        tejribesiniň öz beýanyny tapýandygyny bellemek gerek. Munuň özi milli gurluşyk pudagynyň döwrüň talaplary 
        we iň gowy dünýä tejribeleri esasynda yzygiderli ösdürilýändigine şaýatlyk edýär.
        <br><br>
        Gurluşyk toplumyna gönükdirilýän ägirt uly maýa goýumlar hem-de telekeçilik işini goldamak boýunça döwletimiz 
        tarapyndan durmuşa geçirilýän çäreler şähergurluşyk syýasatynyň üstünliklere beslenmegini şertlendirdi. 
        Hökümet mejlisindäki hasabatlarda beýan edilen maglumatlara görä, şu ýylyň birinji ýarymynda Gurluşyk we 
        binagärlik ministrligi boýunça işleriň meýilnamasy 109,8 göterim ýerine ýetirildi. Senagat we gurluşyk 
        önümçiligi ministrligi boýunça şu ýylyň alty aýynda önümleri öndürmegiň we işleri ýerine ýetirmegiň 
        meýilnamasy 110,9 göterime deň boldy.
      `,
      catId: 1,
    },
  ],
  EN: [
    {
      id: 1,
      date: "26.07.2024",
      imgs: ["/img/news-2.webp", "/img/news-2.webp", "/img/news-2-1.webp"],
      title:
        'The Ministry of Construction and Architecture was authorized to enter into a contract with the "Parlak Nesil"',
      desc: `
        he President of Turkmenistan signed the Resolution in order to create a state information system 
        of price formation in construction in Turkmenistan and to develop a national cost-measurement 
        base in construction and to implement the State Program for improving the price formation system. 
        According to the document, the Ministry of Construction and Architecture was authorized to enter 
        into a contract with "Parlak Nesil" to further develop software for calculating prices.
      `,
      catId: 4,
    },
    {
      id: 2,
      date: "01.09.2023",
      imgs: ["/img/news-1.webp", "/img/news-1-1.webp", "/img/news-1-2.webp"],
      title:
        "Our Honorable President took part in the ceremony of laying the foundation stone of the new complex of buildings of the Turkmen State Institute of Architecture and Construction",
      desc: `
        Today, September 1 - Education and Student Youth Day, President of the Republic of Turkmenistan Serdar Berdimuhamedov
        He took part in the foundation laying ceremony of the Turkmen State Institute of Architecture and Construction.
        <br> <br>
        Taking advantage of this opportunity, the Assembly of Turkmenistan, the country's government, diplomatic missions in Turkmenistan
        and leaders and representatives of international organizations, respected elders and students.
        <br> <br>
        Material and equipment infrastructure of higher education institutions, which are modern centers of education and science of the country
        Extensive reinforcements were initiated by our heroic friend Gurbanguly Berdimuhamedov
        and is currently succeeding under the leadership of President Serdar Berdimuhamedov
        An important aspect of the scientific and educational reforms.
        <br> <br>
        Turkmen State Institute of Architecture and Construction (TDBGI), Presidential Decree of Turkmenistan
        Established on May 25, 2012, it is a young, modern science and design institution.
        The main tasks of TDBGI are architecture-construction, public sector, chemical, energy, industry and road transport.
        To train high-level specialists and provide engineering personnel for their industries.
        Today, the institute has 7 faculties and 28 departments, and more than 4 thousand students study there.
        Every year more than 600 professionals study in this higher education institution.
        <br> <br>
        Protected, according to the relevant resolution signed by the President on August 25 of this year
        Design, construction, landscaping, available
        modernization of engineering systems and construction of new ones. Industrialists and entrepreneurs of Turkmenistan
        A member of the union is the private organization "Azayip Construction".
        <br> <br>
        In addition, according to the document, it was decided to prepare the construction complex of the institute for use in September 2026.
        <br> <br>
        Celebration of Education and Students Youth Day continues.
      `,
      catId: 3,
    },
    {
      id: 3,
      date: "27.07.2023",
      imgs: ["/img/news-3.webp"],
      title:
        "Large-scale constructions are a symbol of the economic power of Turkmenistan",
      desc: `
      2023 at the comprehensive meeting of the Cabinet of Ministers held on July 14
      the results of the first half were considered. The results achieved are stable for the national economy
      It is another proof of its development and continuous progress in all its priority areas.
      Under the leadership of President Serdar Berdimuhamedov, "The state is for people!" slogan
      huge programs aimed at the socio-economic development of the country
      the construction industry plays an important role in its implementation.
      <br><br>
      In the government meeting, the Turkmen leader has large-scale industrial and social goals in the country
      he noted with satisfaction that the construction of the facilities is ongoing. Our land
      in provinces, cities and districts the area is 1 million 400 thousand square meters
      equal residential houses were built and put into use, industrial facilities, kindergartens,
      the construction of schools and other facilities is carried out according to the plan.
      <br><br>
      High standard of living of the people, creative work, modern recreation and living
      to the implementation of the National Rural Program aimed at providing favorable conditions for
      importance is given. In accordance with the tasks envisaged in this program, our country
      modern villages are being built everywhere. This is by modern village standards
      It is very responsible for building in accordance with and taking into account urban amenities
      indicates that it is being approached.
      <br><br>
      Concern for man and his well-being as one of the priorities of state policy
      to ensure the happy life of the people, determined by the President of the Republic of Azerbaijan Serdar Berdimuhamedov
      makes great efforts towards According to the rural national program, in the last six months of this year
      More than 1 billion 400 million manats were invested.
      <br><br>
      The Turkmen leader made business visits to the regions of the country and carried out fundamental reforms in the regions
      the work being carried out within the framework of implementation, improving the living standards of the rural population
      gets acquainted with the implementation of programmatic activities. So, at the moment there is only one
      not only in Ashgabat, our white marble capital, but in all regions of the Motherland in a short time
      architectural complexes, modern office buildings, apartments with all amenities, modern
      equipped with equipment and techniques, large enterprises producing competitive products were built
      put to use. These buildings are modern in terms of urban planning with national architectural traditions
      it should be noted that his experience is reflected. This is the current requirement of the national construction industry
      and testifies that it is continuously developed based on the best global practices.
      <br><br>
      Huge investments in the construction sector and support of business activity in our state
      The measures implemented by the Ministry of Urban Development contributed to the success of the urban development policy.
      According to the reports in the government meeting, in the first half of this year Construction and
      109.8 percent of the work plan for the Ministry of Architecture was implemented. Industry and construction
      production and execution of works in the six months of this year by the Ministry of Production
      plan was equal to 110.9 percent.
      `,
      catId: 1,
    },
  ],
  RU: [
    {
      id: 1,
      date: "26.07.2024",
      imgs: ["/img/news-2.webp", "/img/news-2.webp", "/img/news-2-1.webp"],
      title:
        'Министерству строительства и архитектуры поручено заключить контракт с "Parlak Nesil"',
      desc: `
        Президент Туркменистана подписал Постановление в целях создания государственной информационной системы
        ценообразования в строительстве в Туркменистане и разработки национальной сметно-
        оценочной базы в строительстве, а также реализации Государственной программы по совершенствованию системы ценообразования.
        Согласно документу, Министерству строительства и архитектуры поручено заключить контракт с \"Parlak Nesil\" на дальнейшую разработку программного обеспечения для расчета цен.
      `,
      catId: 4,
    },
    {
      id: 2,
      date: "01.09.2023",
      imgs: ["/img/news-1.webp", "/img/news-1-1.webp", "/img/news-1-2.webp"],
      title:
        "Наш уважаемый Президент принял участие в церемонии закладки фундамента нового комплекса зданий Туркменского государственного архитектурно-строительного института",
      desc: `
        Сегодня, 1 сентября - День образования и студенческой молодежи, Президент Республики Туркменистан Сердар Бердымухамедов
        принял участие в церемонии закладки фундамента Туркменского государственного архитектурно-строительного института.
        <br> <br>
        Воспользовавшись случаем, Меджлис Туркменистана, правительство страны, дипломатические миссии в Туркменистане
        а также руководители и представители международных организаций, уважаемые старейшины и студенты.
        <br> <br>
        Материально-техническая база высших учебных заведений, являющихся современными центрами образования и науки страны
        Широкое укрепление было инициировано нашим героическим другом Гурбангулы Бердымухамедовым
        и в настоящее время успешно развивается под руководством Президента Сердара Бердымухамедова
        Важный аспект научных и образовательных реформ.
        <br> <br>
        Туркменский государственный архитектурно-строительный институт (ТГАСИ), Указ Президента Туркменистана
        Создан 25 мая 2012 года, является молодым, современным научно-проектным учреждением.
        Основными задачами ТГАСИ являются архитектура-строительство, государственный сектор, химия, энергетика, промышленность и дорожный транспорт.
        Подготовка высококвалифицированных специалистов и обеспечение инженерными кадрами своих отраслей.
        Сегодня в институте 7 факультетов и 28 кафедр, в них обучается более 4 тысяч студентов.
        Ежегодно в этом высшем учебном заведении обучается более 600 специалистов.
        <br> <br>
        Защищено, согласно соответствующему постановлению, подписанному Президентом 25 августа текущего года
        Проектирование, строительство, благоустройство, имеющиеся
        модернизация инженерных систем и строительство новых. Промышленники и предприниматели Туркменистана
        Членом союза является частная организация «Azayip Construction».
        <br> <br>
        Кроме того, согласно документу, принято решение о подготовке строительного комплекса института к эксплуатации в сентябре 2026 года.
        <br> <br>
        Продолжается празднование Дня молодежи образования и студентов.
      `,
      catId: 3,
    },
    {
      id: 3,
      date: "27.07.2023",
      imgs: ["/img/news-3.webp"],
      title: "Масштабные сооружения – символ экономической мощи Туркменистана",
      desc: `
        2023 года на комплексном заседании Кабинета Министров, состоявшемся 14 июля.
        были подведены итоги первого полугодия. Достигнутые результаты стабильны для национальной экономики.
        Это еще одно доказательство ее развития и постоянного прогресса по всем приоритетным направлениям.
        Под руководством президента Сердара Бердымухамедова: «Государство для людей!» слоган
        огромные программы, направленные на социально-экономическое развитие страны
        строительная отрасль играет важную роль в его реализации.
        <br><br>
        На заседании правительства туркменский лидер обозначил масштабные промышленные и социальные цели в стране
        Он с удовлетворением отметил, что строительство объектов продолжается. Наша земля
        в провинциях, городах и районах площадь составляет 1 миллион 400 тысяч квадратных метров.
        построены и сданы в эксплуатацию равноправные жилые дома, промышленные объекты, детские сады,
        Строительство школ и других объектов ведется согласно плану.
        <br><br>
        Высокий уровень жизни народа, творческий труд, современный отдых и проживание.
        реализации Национальной сельской программы, направленной на обеспечение благоприятных условий для
        придается значение. В соответствии с задачами, предусмотренными в этой программе, наша страна
        современные деревни строятся повсюду. Это по современным деревенским меркам
        Очень ответственно относится к строительству в соответствии и с учетом городских удобств.
        указывает на то, что к нему приближаются.
        <br><br>
        Забота о человеке и его благополучии как один из приоритетов государственной политики
        обеспечение счастливой жизни народа, определенное Президентом Азербайджанской Республики Сердаром Бердымухамедовым
        прилагает большие усилия для того, чтобы Согласно сельской национальной программе, за последние шесть месяцев этого года
        Инвестировано более 1 миллиарда 400 миллионов манатов.
        <br><br>
        Туркменский лидер совершил деловые визиты в регионы страны и провел в регионах коренные реформы
        работа, проводимая в рамках реализации, повышения уровня жизни сельского населения
        знакомится с ходом реализации программной деятельности. Итак, на данный момент существует только один
        не только в Ашхабаде, нашей беломраморной столице, но и во всех регионах Родины в короткие сроки
        архитектурные комплексы, современные офисные здания, квартиры со всеми удобствами, современные
        оснащены оборудованием и техникой, построены крупные предприятия, выпускающие конкурентоспособную продукцию
        использовать. Эти здания являются современными с точки зрения градостроительства с учетом национальных архитектурных традиций.
        следует отметить, что его опыт отражен. Это современное требование отечественной строительной отрасли.
        и свидетельствует о том, что она постоянно развивается на основе лучших мировых практик.
        <br><br>
        Огромные инвестиции в строительный сектор и поддержка деловой активности в нашем государстве
        Меры, реализованные Министерством градостроительства, способствовали успеху политики городского развития.
        По данным заседания правительства, в первом полугодии текущего года строительство и
        План работы Минархитектуры выполнен на 109,8 процента. Промышленность и строительство
        производство и выполнение работ за шесть месяцев текущего года Минпромторгом
        план был равен 110,9 процента.
      `,
      catId: 1,
    },
  ],
};

export const services = {
  TR: [
    { link: "security", name: "İş Sağlığı ve Güvenliği" },
    { link: "environment", name: "Çevre" },
    { link: "variation", name: "Çeşitlilik ve Eşitlik" },
    // { link: "reports", name: "Raporlar" },
    { link: "partners", name: "Iş Birliklerimiz ve Partnerlerimiz" },
  ],
  TM: [
    { link: "security", name: "Iş saglygy we howpsuzlyk" },
    { link: "environment", name: "Daşky gurşaw" },
    { link: "variation", name: "Dürlülik we deňlik" },
    // { link: "reports", name: "Hasabatlar" },
    { link: "partners", name: "Hyzmatdaşlyklarymyz we hyzmatdaşlarymyz" },
  ],
  EN: [
    { link: "security", name: "Occupational Health and Safety" },
    { link: "environment", name: "Environment" },
    { link: "variation", name: "Diversity and Equality" },
    // { link: "reports", name: "Reports" },
    { link: "partners", name: "Our Collaborations and Partners" },
  ],
  RU: [
    { link: "security", name: "Охрана труда и безопасность" },
    { link: "environment", name: "Окружающая среда" },
    { link: "variation", name: "Разнообразие и равенство" },
    // { link: "reports", name: "Отчеты" },
    { link: "partners", name: "Наши партнеры и сотрудничество" },
  ],
};

export const faaliyet_alanlarimiz = {
  imgs: [
    "/img/img4.webp",
    "/img/img5.webp",
    "/img/img81.webp",
    "/img/img97.webp",
    "/img/img8.webp",
    "/img/img99.webp",
  ],
  TR: [
    { title: "Konut Binaları" },
    { title: "Eğitim" },
    { title: "Yönetim" },
    { title: "Sağlık" },
    { title: "İnşaat" },
    { title: "Üretim" },
  ],
  TM: [
    { title: "Ýaşaýyş jaýlary" },
    { title: "Bilim" },
    { title: "Dolandyryş" },
    { title: "Saglyk" },
    { title: "Gurluşyk" },
    { title: "Önümçilik" },
  ],
  EN: [
    { title: "Residential Buildings" },
    { title: "Education" },
    { title: "Management" },
    { title: "Health" },
    { title: "Construction" },
    { title: "Production" },
  ],
  RU: [
    { title: "Жилые здания" },
    { title: "Образование" },
    { title: "Управление" },
    { title: "Здоровье" },
    { title: "Строительство" },
    { title: "Производство" },
  ],
};

export const hakkimizda = {
  imgs: ["/img/img93.webp", "/img/img187.webp", "/img/img44.webp"],
  TR: [
    {
      desc: `“Ajaýyp-gurluşyk” özel şirketi 20 Mart 2010 tarihinde kurulmuş olup, bugüne kadar Türkmenistan'ın çeşitli bölgelerinde inşaat işleri yapmaktadır.`,
    },
    {
      desc: `Şirketin kurucusu Matyakubow Alişer Rejepbayevich ve direktörü Berdimyrat Garlyyev Agajumayevich olup, yönetim binası Aşkabat şehrinin Berkararlyk ilçesi 2127 (G.Gulyýew) caddesi, 36 numaralı binada yer almaktadır.`,
    },
    {
      desc: `Şirketin finansal ve maddi kaynakları yeterli düzeyde olup, tüm inşaat montaj işlerini yürütebilmek için yeterli ekipman ve araçlarla donatılmıştır. Ayrıca, şirkette yüksek eğitimli, nitelikli ustalar çalışmaktadır.`,
    },
  ],
  TM: [
    {
      desc: `“Ajaýyp-gurluşyk” hususy kärhanasynyň 2010-njy ýylyň 20-nji martynda döredildi we häzirki wagta çenli Türkmenistan döwletimiziň dürli welaýatlarynda gurluşyk işlerini ýerine ýetirmek bilen meşgullanýar.`,
    },
    {
      desc: `Kärhananyň esaslandyryjysy Matýakubow Alişer Rejepbaýewiç we direktory Berdimyrat Garlyýew Agajumaýewiç bolup, dolandyryş binasy Aşgabat şäheriniň Berkararlyk etrabynyň 2127 (G.Gulyýew) köçesiniň 36-njy jaýy salgysynda ýerleşýär. `,
    },
    {
      desc: `Kärhananyň maliýe, maddy üpjünçilik serişdeleriniň talaba laýyk derejede bolup, ähli gurluşyk gurnama işlerini alyp barmak üçin ýeterlik derejede tehnikalar we enjamlar üpjün edilen. Şeýle hem, kärhanada ýokary bilimli, derejeli ussat hünärmenler zähmet çekýär. `,
    },
  ],
  EN: [
    {
      desc: `The private company “Ajaýyp-gurluşyk” was established on March 20, 2010, and up to now, it has been engaged in construction works in various regions of Turkmenistan.`,
    },
    {
      desc: `The founder of the company is Matyakubow Alisher Rejepbayevich, and the director is Berdimyrat Garlyyev Agajumayevich. The administration building is located at 36, 2127 (G. Gulyýew) Street, Berkararlyk district, Ashgabat city.`,
    },
    {
      desc: `The financial and material resources of the company are at a sufficient level, equipped with enough machinery and equipment to carry out all construction and installation works. Additionally, the company employs highly educated, skilled professionals.`,
    },
  ],
  RU: [
    {
      desc: `Частная компания “Ajaýyp-gurluşyk” была основана 20 марта 2010 года и по настоящее время занимается строительными работами в различных регионах Туркменистана.`,
    },
    {
      desc: `Основатель компании Матякубов Алишер Реджепбаевич и директор Бердымырaт Гaрлыев Агаджумаевич, административное здание находится по адресу: город Ашхабад, район Беркарарлык, улица 2127 (Г. Гулыев), дом 36.`,
    },
    {
      desc: `Финансовые и материальные ресурсы компании находятся на должном уровне, имеется достаточное количество техники и оборудования для выполнения всех строительных монтажных работ. Также в компании работают высококвалифицированные специалисты.`,
    },
  ],
};

export const hizmetler = {
  TR: [
    {
      title: "Iş sağlığı ve güvenliği",
      desc: "Planlama, tasarım ve inşaat için entegre bir yaklaşım. Tüm proje yaşam döngüsü için tek bir irtibat noktası. Başlangıçtan bitişe kadar inşaat projelerinin kapsamlı yönetimi.",
    },
    {
      title: "Altyapı ve İnşaat Hizmetleri",
      desc: "Planlama, tasarım ve inşaat için entegre bir yaklaşım. Tüm proje yaşam döngüsü için tek bir irtibat noktası.",
    },
    {
      title: "Mimari Tasarım ve Danışmanlık",
      desc: "Estetik ve işlevselliği bir araya getiren mimari tasarım hizmetleri sunuyoruz. Projeleriniz için yaratıcı ve sürdürülebilir çözümler geliştiriyoruz.",
    },
    {
      title: "Yapı Güçlendirme ve Yenileme",
      desc: "Mevcut yapılarınızı güçlendirerek ve yenileyerek uzun ömürlü kullanım sağlıyoruz. Kaliteli malzeme ve uzman ekiplerle yapılarınızı modernize ediyoruz.",
    },
  ],
  TM: [
    {
      title: "Iş saglygy we howpsuzlyk",
      desc: "Meýilnama, dizaýn we gurluşyk üçin bitewi çemeleşme. Taslamanyň ähli ömri üçin ýeke-täk aragatnaşyk nokady. Başlangyçdan soňky tapgyra çenli gurluşyk taslamalarynyň giňişleýin dolandyrylyşy.",
    },
    {
      title: "Infrastruktura we Gurluşyk Hyzmatlary",
      desc: "Meýilnama, dizaýn we gurluşyk üçin bitewi çemeleşme. Taslamanyň ähli ömri üçin ýeke-täk aragatnaşyk nokady.",
    },
    {
      title: "Arhitektura Dizaýn we Maslahat",
      desc: "Estetika we işleýşi birikdirýän arhitektur dizaýn hyzmatlaryny hödürleýäris. Taslamalaryňyz üçin döredijilikli we durnukly çözgütleri işläp düzýäris.",
    },
    {
      title: "Güýçlendirme we Täzeden dikeltme",
      desc: "Bar bolan binalaryňyzy berkitmek we täzeden dikeltmek arkaly uzak möhletli ulanylyşy üpjün edýäris. Hil taýdan materiallar we hünärmen topar bilen binalaryňyzy döwrebaplaşdyrýarys.",
    },
  ],
  EN: [
    {
      title: "Occupational Health and Safety",
      desc: "An integrated approach for planning, design, and construction. A single point of contact for the entire project lifecycle. Comprehensive management of construction projects from start to finish.",
    },
    {
      title: "Infrastructure and Construction Services",
      desc: "An integrated approach for planning, design, and construction. A single point of contact for the entire project lifecycle.",
    },
    {
      title: "Architectural Design and Consultancy",
      desc: "We offer architectural design services that combine aesthetics and functionality. Developing creative and sustainable solutions for your projects.",
    },
    {
      title: "Structural Strengthening and Renovation",
      desc: "We provide long-term use by strengthening and renovating your existing structures. Modernizing your buildings with quality materials and expert teams.",
    },
  ],
  RU: [
    {
      title: "Охрана труда и безопасность",
      desc: "Интегрированный подход к планированию, проектированию и строительству. Единая точка контакта на протяжении всего жизненного цикла проекта. Комплексное управление строительными проектами от начала до конца.",
    },
    {
      title: "Инфраструктура и строительные услуги",
      desc: "Интегрированный подход к планированию, проектированию и строительству. Единая точка контакта на протяжении всего жизненного цикла проекта.",
    },
    {
      title: "Архитектурное проектирование и консультирование",
      desc: "Мы предлагаем архитектурные услуги, сочетающие эстетику и функциональность. Разработка креативных и устойчивых решений для ваших проектов.",
    },
    {
      title: "Укрепление и реконструкция зданий",
      desc: "Обеспечиваем долговременное использование, укрепляя и реконструируя ваши существующие сооружения. Модернизируем ваши здания с использованием качественных материалов и опытных команд.",
    },
  ],
};

export const pozisyonlar = {
  TR: [
    { id: 1, type: "Sözleşme", title: "SAHA LİDERİ MAKİNE MÜHENDİSİ" },
    {
      id: 2,
      type: "Kalıcı",
      title: "Kıdemli CSA (İNŞAAT, YAPI, MİMARLIK) MÜHENDİSİ",
    },
    {
      id: 3,
      type: "Sözleşme",
      title: "Kıdemli CSA (İNŞAAT, YAPI, MİMARLIK) MÜHENDİSİ",
    },
    { id: 4, type: "Kalıcı", title: "ENSTRÜMAN PROGRAMCI" },
  ],
  TM: [
    { id: 1, type: "Şertnama", title: "SAHA LIDERI MAKINA INŽENÝERI" },
    {
      id: 2,
      type: "Hemişelik",
      title: "Senior CSA (GURLUŞYK, BINAGÄRLIK) INŽENÝERI",
    },
    {
      id: 3,
      type: "Şertnama",
      title: "Senior CSA (GURLUŞYK, BINAGÄRLIK) INŽENÝERI",
    },
    { id: 4, type: "Hemişelik", title: "ENSTRUMENT PROGRAMÇY" },
  ],
  EN: [
    { id: 1, type: "Contract", title: "FIELD LEADER MECHANICAL ENGINEER" },
    {
      id: 2,
      type: "Permanent",
      title: "Senior CSA (CONSTRUCTION, STRUCTURAL, ARCHITECTURE) ENGINEER",
    },
    {
      id: 3,
      type: "Contract",
      title: "Senior CSA (CONSTRUCTION, STRUCTURAL, ARCHITECTURE) ENGINEER",
    },
    { id: 4, type: "Permanent", title: "INSTRUMENT PROGRAMMER" },
  ],
  RU: [
    {
      id: 1,
      type: "Контракт",
      title: "РУКОВОДИТЕЛЬ ПОЛЕВОЙ МЕХАНИЧЕСКИЙ ИНЖЕНЕР",
    },
    {
      id: 2,
      type: "Постоянный",
      title: "Старший CSA (СТРОИТЕЛЬСТВО, КОНСТРУКЦИИ, АРХИТЕКТУРА) ИНЖЕНЕР",
    },
    {
      id: 3,
      type: "Контракт",
      title: "Старший CSA (СТРОИТЕЛЬСТВО, КОНСТРУКЦИИ, АРХИТЕКТУРА) ИНЖЕНЕР",
    },
    { id: 4, type: "Постоянный", title: "ПРОГРАММИСТ ПО ПРИБОРАМ" },
  ],
};

export const ekip = {
  imgs: [
    "/icon/persons.svg",
    "/icon/variation.svg",
    "/icon/development.svg",
    "/icon/work.svg",
    "/icon/benefits.svg",
    "/icon/educate.svg",
  ],
  TR: [
    {
      id: 1,
      title: "Takım",
      desc: "Çalışmayı ve eğlenmeyi seven dinamik bir ekibin parçası olmak",
    },
    {
      id: 2,
      title: "Çeşitlilik",
      desc: "Dünyanın her yerindeki işbirlikçileriyle çok çeşitli projeler üzerinde çalışmak",
    },
    {
      id: 3,
      title: "Kendini geliştirmek",
      desc: "Takımın başarısına katkıda bulunabilmek. Harika bir fikrin mi var? Bunu duymak istiyoruz!",
    },
    {
      id: 4,
      title: "Birlikte çalışmak",
      desc: "Çalışmayı ve eğlenmeyi seven dinamik bir ekibin parçası olmak",
    },
    {
      id: 5,
      title: "Faydalar",
      desc: "Rekabetçi bir ücret paketinden ve avantajlardan yararlanma",
    },
    {
      id: 6,
      title: "Eğitim Alma",
      desc: "Çalışmayı ve eğlenmeyi seven dinamik bir ekibin parçası olmak",
    },
  ],
  TM: [
    {
      id: 1,
      title: "Topar",
      desc: "Işlemek we lezzet almak üçin dinamik toparyň bir bölegi bolmak",
    },
    {
      id: 2,
      title: "Özgarmazlyk",
      desc: "Dünyanyň her ýerindäki hyzmatdaşlar bilen dürli-proýektlerde işlemek",
    },
    {
      id: 3,
      title: "Özüňi ösdürmek",
      desc: "Toparyň üstünliklerine goşant goşmak. Şaýatly bir pikirleriňiz barmy? Biz eşitmek isleýäris!",
    },
    {
      id: 4,
      title: "Birlikde işlemek",
      desc: "Işlemek we lezzet almak üçin dinamik toparyň bir bölegi bolmak",
    },
    {
      id: 5,
      title: "Faidalar",
      desc: "Baharý bir palky we peýdalyklaryndan peýdalanmak",
    },
    {
      id: 6,
      title: "Bilim Almak",
      desc: "Işlemek we lezzet almak üçin dinamik toparyň bir bölegi bolmak",
    },
  ],
  EN: [
    {
      id: 1,
      title: "Team",
      desc: "Being part of a dynamic team that loves to work and have fun",
    },
    {
      id: 2,
      title: "Diversity",
      desc: "Working on a variety of projects with collaborators from all over the world",
    },
    {
      id: 3,
      title: "Self-development",
      desc: "Contributing to the team’s success. Got a great idea? We want to hear it!",
    },
    {
      id: 4,
      title: "Collaboration",
      desc: "Being part of a dynamic team that loves to work and have fun",
    },
    {
      id: 5,
      title: "Benefits",
      desc: "Enjoying a competitive salary package and benefits",
    },
    {
      id: 6,
      title: "Education",
      desc: "Being part of a dynamic team that loves to work and have fun",
    },
  ],
  RU: [
    {
      id: 1,
      title: "Команда",
      desc: "Быть частью динамичной команды, которая любит работать и развлекаться",
    },
    {
      id: 2,
      title: "Разнообразие",
      desc: "Работать над различными проектами с коллегами со всего мира",
    },
    {
      id: 3,
      title: "Саморазвитие",
      desc: "Вносить вклад в успех команды. Есть отличная идея? Мы хотим её услышать!",
    },
    {
      id: 4,
      title: "Сотрудничество",
      desc: "Быть частью динамичной команды, которая любит работать и развлекаться",
    },
    {
      id: 5,
      title: "Преимущества",
      desc: "Получение конкурентоспособного пакета заработной платы и льгот",
    },
    {
      id: 6,
      title: "Образование",
      desc: "Быть частью динамичной команды, которая любит работать и развлекаться",
    },
  ],
};

export const uretim = {
  imgs: ["/img/alkim.jpeg", "/img/mebel.jpg", "/img/mebel2.jpeg"],
  TR: [
    { title: "Alkim", desc: "Seramik karolar için güçlü kuru inşaat harcı" },
    {
      title: "Mobilya Ürünleri",
      desc: "Yüksek kaliteli ev ve ofis mobilyaları",
    },
    {
      title: "Mobilya Ürünleri",
      desc: "Yüksek kaliteli ev ve ofis mobilyaları",
    },
  ],
  TM: [
    {
      title: "Alkim",
      desc: "Seramik plitalar üçin güýçli gury gurluşyk gatygy",
    },
    { title: "Mebeller", desc: "Öý we ofis üçin ýokary hilli mebeller" },
    { title: "Mebeller", desc: "Öý we ofis üçin ýokary hilli mebeller" },
  ],
  EN: [
    {
      title: "Alkim",
      desc: "Strong dry construction mortar for ceramic tiles",
    },
    {
      title: "Furniture Products",
      desc: "High-quality home and office furniture",
    },
    {
      title: "Furniture Products",
      desc: "High-quality home and office furniture",
    },
  ],
  RU: [
    {
      title: "Алким",
      desc: "Мощный сухой строительный раствор для керамической плитки",
    },
    {
      title: "Мебельная продукция",
      desc: "Высококачественная мебель для дома и офиса",
    },
    {
      title: "Мебельная продукция",
      desc: "Высококачественная мебель для дома и офиса",
    },
  ],
};

export const projects = {
  TR: [
    {
      id: 15,
      videos: "/video/dashoguz.m3u8",
      img: "/img/img139.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şehrinde çok amaçlı hastane",
      desc: `
      Şubat 2019 ile Mayıs 2022 tarihleri arasında inşa edilen bu proje, 49.210,75 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern mimarisi ve işlevselliği ile dikkat çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, binanın uzun ömürlü ve sağlam olmasını sağlamak için özenle seçilmiştir.
      <br><br>
      Geniş arazi alanı, peyzaj düzenlemesi ve sosyal alanlar için geniş fırsatlar sunmaktadır. Tek binanın kullanımı, sakinlere hem konforlu hem de estetik açıdan tatmin edici yaşam alanları sağlamayı hedeflemektedir. Projenin tasarımı, modern yaşamın ihtiyaçlarını karşılayacak şekilde planlanmış olup, hem estetik hem de fonksiyonel avantajlar sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Şubat 2019 - Mayıs 2022" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "49 210,75 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img139.webp", "/img/img143.webp", "/img/img141.webp"],
      buildings: [],
    },
    {
      id: 1,
      videos: "/video/binagarlik.m3u8",
      img: "/img/img5.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Türkmen Devlet Mimarlık ve İnşaat Enstitüsü",
      desc: `
            Türkmen Devlet Mimarlık ve İnşaat Enstitüsü (TDBGI), Türkmenistan
            Cumhurbaşkanlığı Kararnamesi uyarınca 25 Mayıs 2012 tarihinde kurulmuş 
            genç, modern bir bilim ve tasarım eğitim kurumudur. TDBGI'nin temel 
            görevi mimarlık-inşaat, kamu sektörü, kimya, enerji, sanayi ve 
            karayolu-ulaştırma sektörlerine üst düzey uzmanlar yetiştirmek ve 
            mühendisler yetiştirmektir. Şu anda enstitünün 7 fakültesi, 28 bölümü 
            var ve buralarda 4 binin üzerinde öğrenci eğitim görüyor. Bu yüksek 
            öğretim kurumunda her yıl 600'den fazla uzman eğitim görmektedir.
            <br><br>
            Bu yılın 25 Ağustos'unda Cumhurbaşkanı tarafından imzalanan ilgili Karar 
            uyarınca Aşkabat'ta Gorogly Caddesi boyunca inşa edilecek bu tesisin projesi, 
            inşaatı, bitişik alanların iyileştirilmesi, mevcut mühendislik sistemlerinin 
            modernizasyonu ve yenilerinin inşası. Türkmenistan Sanayicileri ve Girişimcileri 
            Birliği üyesi "Ajayyp İnşaat" özel girişimi.
            <br><br>
            Ayrıca belgeye göre enstitünün bina kompleksinin Eylül 2026'da teslim edilmesine karar verildi.
            <br><br>
            Eğitim ve Öğrenci Gençlik Günü kutlamaları devam ediyor.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "2023-2026" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "231 239 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "13" },
      ],
      galeri: [
        "/img/img5.webp",
        "/img/img50.webp",
        "/img/img52.webp",
        "/img/img54.webp",
        "/img/img56.webp",
        "/img/img57.webp",
      ],
      buildings: [
        {
          id: 1,
          img: "/img/img55.webp",
          title: "Sport toplumy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 2,
          img: "/img/img58.webp",
          title: "Naharhana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 3,
          img: "/img/img59.webp",
          title: "Sergiler merkezi",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 5,
          img: "/img/img61.webp",
          title: "Kitaphana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 6,
          img: "/img/img62.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 7,
          img: "/img/img63.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
      ],
    },
    {
      id: 2,
      img: "/img/img70.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Parahat-7 Konut Kompleksi",
      desc: `
            2023-2024 yılları arasında inşa edilen bu proje, toplam 40.596,72 m² arazi üzerinde yer almaktadır.
            Proje, modern mimari ile tasarlanmış ve iki bina içermektedir. Geniş arazi alanı,
            çevre düzenlemesi ve sosyal alanlar için ideal bir zemin sağlamaktadır. 
            <br><br>
            Proje, konforlu ve kaliteli yaşam alanları sunmayı hedeflemektedir. Yüksek standartlarla 
            inşa edilen bu yapılar, kullanıcıların ihtiyaçlarını karşılayacak şekilde tasarlanmıştır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "2023-2024" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "40 596,72 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "2" },
      ],
      galeri: [
        "/img/img65.webp",
        "/img/img66.webp",
        "/img/img67.webp",
        "/img/img68.webp",
        "/img/img69.webp",
        "/img/img70.webp",
      ],
      buildings: [],
    },
    {
      id: 3,
      img: "/img/img73.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoğuz şehrinde lise",
      desc: `
            Bu proje, Ocak 2023 ile Ağustos 2023 tarihleri arasında tamamlanmıştır ve 
            toplamda 5.272,23 m² arazi üzerinde yer almaktadır. Proje kapsamında tek 
            bir bina inşa edilmiştir ve bu bina modern mimarinin zarif unsurlarıyla 
            dikkat çekmektedir.
            <br><br>
            Projede kullanılan arazi, hem işlevsel hem de estetik açıdan en iyi şekilde 
            değerlendirilmiştir. Tek binanın geniş kullanım alanı, çevre düzenlemesiyle 
            birleştirilerek kullanıcılarına konforlu ve çağdaş bir yaşam alanı sunmayı 
            amaçlamaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2023 - Ağustos 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: [
        "/img/img71.webp",
        "/img/img72.webp",
        "/img/img73.webp",
        "/img/img74.webp",
        "/img/img75.webp",
      ],
      buildings: [],
    },
    {
      id: 4,
      img: "/img/img108.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoğuz şehrinde anaokulu",
      desc: `
          Ocak 2023 ile Ağustos 2023 tarihleri arasında tamamlanan bu proje, 5.272,23 m² arazi üzerine kurulmuştur. 
          Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern mimarisiyle öne çıkmaktadır. İnşaat 
          süreci boyunca kalite ve işçilik ön planda tutulmuştur.
          <br><br>
          Projede kullanılan arazi, hem çevre düzenlemesi hem de estetik detaylarla özenle planlanmıştır. 
          Tek binanın geniş kullanım alanı, modern yaşamın gereksinimlerini karşılayacak şekilde tasarlanmış 
          olup, sakinlerine konforlu bir yaşam alanı sunmayı hedeflemektedir.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2023 - Ağustos 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: [
        "/img/img106.webp",
        "/img/img107.webp",
        "/img/img108.webp",
        "/img/img109.webp",
        "/img/img110.webp",
        "/img/img111.webp",
      ],
      buildings: [],
    },
    {
      id: 5,
      img: "/img/img112.webp",
      catId: 2,
      location: "Türkmenistan, Mary",
      title: "Mary vilayetinde ortaokul",
      desc: `
        Ocak 2023 ile Ağustos 2023 tarihleri arasında inşa edilen bu proje, toplam 9.309,64 m² arazi üzerinde 
        yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern tasarımıyla bölgedeki 
        diğer yapılar arasında dikkat çekmektedir. İnşaat süreci boyunca yüksek kalite standartlarına uyulmuş 
        ve işçilik titizlikle gerçekleştirilmiştir.
        <br><br>
        Projenin geniş arazisi, çevre düzenlemesi ve sosyal alanlar için ideal bir ortam sağlamaktadır. 
        Tek binanın sahip olduğu geniş kullanım alanı, sakinlerine rahat ve modern bir yaşam sunmayı 
        amaçlamaktadır. Aynı zamanda, proje çevresine uyumlu bir şekilde tasarlanarak bölgenin estetik 
        değerine katkıda bulunmaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2023 - Ağustos 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "9 309,64 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img112.webp", "/img/img113.webp"],
      buildings: [],
    },
    {
      id: 6,
      img: "/img/img114.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Baherden ilçesinin Akdepe köyünde ortaokul",
      desc: `
        Eylül 2022 ile Eylül 2023 tarihleri arasında inşa edilen bu proje, toplam 9.406,48 m² arazi üzerinde 
        yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern mimarisi ve 
        fonksiyonelliğiyle öne çıkmaktadır. İnşaat sürecinde kalite ve dayanıklılık ön planda tutulmuştur, 
        bu da projeyi uzun vadeli bir yatırım haline getirmektedir.
        <br><br>
        Projede kullanılan geniş arazi, çevre düzenlemesi ve sosyal alanlar için geniş olanaklar sunmaktadır. 
        Tek binanın geniş kullanım alanı, kullanıcılarına hem konforlu hem de modern bir yaşam deneyimi sağlamayı 
        hedeflemektedir. Proje, estetik ve fonksiyonelliği bir araya getirerek bölgeye değer katmaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Eylül 2022 - Eylül 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "9 406,48 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img114.webp", "/img/img115.webp"],
      buildings: [],
    },
    {
      id: 7,
      img: "/img/img116.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Seydi şehrinde ortaokul",
      desc: `
          Ocak 2023 ile Eylül 2023 tarihleri arasında inşa edilen bu proje, 7.679,15 m² büyüklüğündeki bir arazi 
          üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiş olup, bu bina, modern mimari 
          özellikleriyle öne çıkmaktadır. İnşaat sürecinde kullanılan malzemelerin kalitesi ve yapım aşamasındaki 
          titizlik, binanın dayanıklılığı ve uzun ömürlü olması için özel olarak tasarlanmıştır.
          <br><br>
          Geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş olanaklar sunmaktadır. Bu alanlar, 
          sakinlerine hem konforlu hem de estetik açıdan tatmin edici bir yaşam alanı sunmayı amaçlamaktadır. 
          Proje, fonksiyonelliği ve estetik unsurları birleştirerek, kullanıcılarına modern yaşamın tüm 
          gereksinimlerini karşılayan bir ortam sağlamaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2023 - Eylül 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "7 679,15 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img116.webp", "/img/img117.webp"],
      buildings: [],
    },
    {
      id: 8,
      img: "/img/img118.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Farap şehrinde ortaokul",
      desc: `
        Ocak 2023 ile Eylül 2023 tarihleri arasında inşa edilen bu proje, toplam 14.633,81 m² büyüklüğündeki bir arazi 
        üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern mimari detayları ve 
        yenilikçi tasarımı ile öne çıkmaktadır. İnşaat sürecinde kullanılan malzemelerin kalitesi ve yapım aşamasındaki 
        özen, binanın uzun ömürlü ve dayanıklı olmasını sağlamak amacıyla titizlikle seçilmiştir.
        <br><br>
        Projenin geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş olanaklar sunmaktadır. Tek binanın 
        ferah kullanım alanı, sakinlerine hem konforlu hem de estetik açıdan zengin bir yaşam sunmayı amaçlamaktadır. 
        Aynı zamanda, projenin estetik ve fonksiyonel özellikleri, modern yaşamın tüm gereksinimlerini karşılayacak 
        şekilde tasarlanmıştır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2023 - Eylül 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "14 633,81 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img118.webp", "/img/img119.webp"],
      buildings: [],
    },
    {
      id: 9,
      img: "/img/img120.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Sanayi Bankası",
      desc: `
        Ağustos 2019 ile Temmuz 2023 tarihleri arasında inşa edilen bu proje, 4.396,52 m² büyüklüğündeki bir arazi 
        üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern tasarımı ve 
        işlevselliği ile dikkat çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, 
        binanın uzun ömürlü ve sağlam olmasını sağlamak için özenle seçilmiştir.
        <br><br>
        Geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş fırsatlar sunmaktadır. Tek binanın 
        kullanımı, sakinlere hem konforlu hem de estetik açıdan tatmin edici bir yaşam sunmayı hedeflemektedir. 
        Projenin tasarımı, modern yaşamın ihtiyaçlarını karşılayacak şekilde planlanmış olup, hem estetik hem de 
        fonksiyonel avantajlar sağlamaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ağustos 2019 - Temmuz 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "4 396,52 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img120.webp", "/img/img123.webp", "/img/img122.webp"],
      buildings: [],
    },
    {
      id: 10,
      img: "/img/img126.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Savcılık bina binası",
      desc: `
        Kasım 2019 ile Temmuz 2023 tarihleri arasında inşa edilen bu proje, 9.674,32 m² büyüklüğündeki bir arazi 
        üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern tasarımı ve 
        işlevselliği ile dikkat çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, 
        binanın uzun ömürlü ve sağlam olmasını sağlamak için özenle seçilmiştir.
        <br><br>
        Geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş fırsatlar sunmaktadır. Tek binanın kullanımı, 
        hem konforlu hem de estetik açıdan tatmin edici bir çalışma ortamı sağlamayı amaçlamaktadır. Projenin tasarımı, 
        modern ofis ihtiyaçlarını karşılayacak şekilde planlanmış olup, hem estetik hem de fonksiyonel avantajlar 
        sunmaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Kasım 2019 - Temmuz 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "9 674,32 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img126.webp", "/img/img125.webp", "/img/img124.webp"],
      buildings: [],
    },
    {
      id: 11,
      img: "/img/img128.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "9 katlı, 54 daireli konut binası",
      desc: `
        Ağustos 2019 ile Temmuz 2023 tarihleri arasında inşa edilen bu proje, 24.713,38 m² büyüklüğündeki bir arazi 
        üzerinde yer almaktadır. Proje kapsamında toplam iki bina inşa edilmiştir ve her iki bina da modern tasarımı 
        ile dikkat çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, binaların uzun ömürlü 
        ve sağlam olmasını sağlamak için titizlikle seçilmiştir.
        <br><br>
        Geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş fırsatlar sunmaktadır. Binaların kullanımı, 
        sakinlere konforlu ve estetik açıdan tatmin edici yaşam alanları sağlamayı amaçlamaktadır. Projenin tasarımı, 
        modern yaşamın ihtiyaçlarını karşılayacak şekilde planlanmış olup, hem estetik hem de fonksiyonel avantajlar 
        sunmaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ağustos 2019 - Temmuz 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "24 713,38 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "2" },
      ],
      galeri: ["/img/img127.webp", "/img/img129.webp", "/img/img128.webp"],
      buildings: [],
    },
    {
      id: 12,
      img: "/img/img130.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "7 katlı, 28 daireli konut binası",
      desc: `
        Ağustos 2019 ile Temmuz 2023 tarihleri arasında inşa edilen bu proje, 8.908,95 m² büyüklüğündeki bir arazi üzerinde 
        yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern tasarımı ve işlevselliği ile dikkat 
        çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, binanın uzun ömürlü ve sağlam olmasını 
        sağlamak için özenle seçilmiştir.
        <br><br>
        Geniş arazi alanı, çevre düzenlemesi ve sosyal alanlar için geniş fırsatlar sunmaktadır. Tek binanın kullanımı, 
        sakinlere konforlu ve estetik açıdan tatmin edici yaşam alanları sağlamayı amaçlamaktadır. Projenin tasarımı,
        modern yaşamın ihtiyaçlarını karşılayacak şekilde planlanmış olup, hem estetik hem de fonksiyonel avantajlar
        sunmaktadır.
      `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ağustos 2019 - Temmuz 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "8 908,95 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img130.webp", "/img/img131.webp"],
      buildings: [],
    },
    {
      id: 13,
      img: "/img/img132.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "5 katlı, 30 daireli konut binası",
      desc: `
      Kasım 2019 ile Temmuz 2023 tarihleri arasında inşa edilen bu proje, 22.272,64 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında toplam üç bina inşa edilmiştir ve her biri modern tasarımı ve işlevselliği ile dikkat çekmektedir. İnşaat sürecinde kullanılan malzemeler ve uygulanan yöntemler, binaların dayanıklılığını ve uzun ömürlülüğünü sağlamak amacıyla titizlikle seçilmiştir.
      <br><br>
      Bu geniş arazi, çevre düzenlemesi ve sosyal alanlar için geniş imkanlar sunmaktadır. Üç binanın kullanımı, sakinlere hem konforlu hem de estetik açıdan tatmin edici yaşam alanları sunmayı hedeflemektedir. Projenin tasarımı, modern yaşamın ihtiyaçlarına cevap verecek şekilde planlanmış olup, estetik ve fonksiyonel avantajlar sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Kasım 2019 - Temmuz 2023" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "22 272,64 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "3" },
      ],
      galeri: ["/img/img132.webp", "/img/img133.webp"],
      buildings: [],
    },
    {
      id: 14,
      img: "/img/img134.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Şeyh Zayed bin Sultan Al Nahyan Devletliler Köşkü",
      desc: `
      Haziran 2022 ile Aralık 2022 tarihleri arasında inşa edilen bu proje, 17.002,81 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern mimari anlayış ile inşa edilerek hem estetik hem de işlevsel özellikleriyle öne çıkmaktadır. İnşaat sürecinde kullanılan malzemeler, yüksek kalite standartlarına uygun olarak seçilmiş ve yapı, uzun ömürlü olması için titizlikle planlanmıştır.
      <br><br>
      Bu geniş arazi, peyzaj düzenlemeleri ve çeşitli sosyal alanlar için geniş imkanlar sunmaktadır. Tek binanın kullanımı, yaşam alanlarının rahat, güvenli ve modern bir şekilde organize edilmesini sağlamak için tasarlanmıştır. Projenin genel yapısı, günümüzün ihtiyaçlarına cevap verecek şekilde düşünülmüş olup, hem estetik hem de işlevsellik açısından önemli avantajlar sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Haziran 2022 - Aralık 2022" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "17 002,81 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: [
        "/img/img134.webp",
        "/img/img135.webp",
        "/img/img136.webp",
        "/img/img137.webp",
        "/img/img138.webp",
      ],
      buildings: [],
    },
    {
      id: 16,
      img: "/img/img144.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şehrinde onkoloji hastane",
      desc: `
      Şubat 2019 ile Mayıs 2022 tarihleri arasında tamamlanan bu proje, 21.637,93 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bina, modern inşaat teknikleri kullanılarak titizlikle tasarlanmıştır. Kullanılan malzemelerin kalitesi, binanın dayanıklılığı ve uzun ömürlü olmasını sağlamak için dikkatlice seçilmiştir.
      <br><br>
      Bu geniş arazi, yeşil alanlar ve sosyal olanaklar için çeşitli imkanlar sunmaktadır. Tek binanın kullanımı, sakinlerine konforlu ve işlevsel yaşam alanları sağlamak üzere planlanmıştır. Projenin genel yapısı, estetik ve işlevselliği bir araya getirerek, modern yaşamın ihtiyaçlarına cevap verecek şekilde tasarlanmıştır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Şubat 2019 - Mayıs 2022" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "21 637,93 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: [
        "/img/img144.webp",
        "/img/img145.webp",
        "/img/img146.webp",
        "/img/img147.webp",
        "/img/img148.webp",
        "/img/img149.webp",
      ],
      buildings: [],
    },
    {
      id: 17,
      img: "/img/img150.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Çocuklar için modern dinlenme parkı",
      desc: `
      Ağustos 2021 ile Haziran 2022 tarihleri arasında tamamlanan bu proje, 524,89 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiş olup, bu bina modern tasarım ve yapım teknikleriyle özenle planlanmıştır. Kullanılan malzemelerin kalitesi, hem estetik hem de işlevsellik açısından yüksek standartları karşılamak için seçilmiştir.
      <br><br>
      Bu geniş arazi, çocuklar için modern bir dinlenme parkı olarak tasarlanmış ve çeşitli oyun alanları ile sosyal aktiviteler için uygun alanlar sunmaktadır. Tek binanın yer aldığı bu proje, güvenli ve eğlenceli bir ortam sağlamak amacıyla tasarlanmış olup, hem çocuklar hem de aileler için konforlu bir deneyim sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ağustos 2021 - Haziran 2022" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "524,89 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img150.webp", "/img/img151.webp", "/img/img152.webp"],
      buildings: [],
    },
    {
      id: 18,
      img: "/img/img154.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şehrinde ortaokul",
      desc: `
      Şubat 2022 ile Eylül 2022 tarihleri arasında tamamlanan bu proje, 6.949,03 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir ve bu bina, modern inşaat standartlarına uygun olarak tasarlanmıştır. Kullanılan malzemeler, hem dayanıklılık hem de estetik açıdan yüksek kaliteyi sağlamaktadır.
      <br><br>
      Bu proje, Daşoguz şehrinde bir ortaokul olarak tasarlanmıştır. Geniş arazi, öğrencilere ve öğretmenlere uygun eğitim ve sosyal alanlar sunacak şekilde düzenlenmiştir. Tek bina, eğitim faaliyetleri için gerekli olan tüm donanım ve imkanları sağlayacak şekilde planlanmıştır, bu da hem eğitim kalitesini hem de kullanıcı konforunu artırmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Şubat 2022 - Eylül 2022" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "6 949,03 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img154.webp"],
      buildings: [],
    },
    {
      id: 19,
      videos: "/video/sport-desgalar.m3u8",
      img: "/img/img155.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Spor tesisleri, genel konut binası ve ilgili yapılar",
      desc: `
      Nisan 2018 ile Eylül 2020 tarihleri arasında tamamlanan bu proje, 57.153,12 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında dört bina inşa edilmiştir. Bu binalar, spor tesisleri, genel konut binaları ve ilgili yapılar olarak tasarlanmıştır. Her bir yapı, modern inşaat standartlarına uygun olarak planlanmış ve inşa edilmiştir.
      <br><br>
      Projenin geniş arazisi, hem spor aktiviteleri için uygun alanlar sunmakta hem de konforlu yaşam alanları sağlamaktadır. Binalar, kullanıcıların ihtiyaçlarını karşılayacak şekilde tasarlanmış olup, spor salonları, sosyal alanlar ve konut birimleri ile entegre bir yapı sunmaktadır. Bu proje, hem toplumsal yaşam hem de spor aktiviteleri açısından önemli bir katkı sağlamaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Nisan 2018 - Eylül 2020" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "57 153,12 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "4" },
      ],
      galeri: [
        "/img/img155.webp",
        "/img/img156.webp",
        "/img/img157.webp",
        "/img/img158.webp",
      ],
      buildings: [],
    },
    {
      id: 20,
      img: "/img/img159.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 katlı, 72 daireli modern konut binası",
      desc: `
      Mart 2018 ile Kasım 2020 tarihleri arasında tamamlanan bu proje, 25.336,42 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern konut standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve yapım teknikleri, yüksek kalite ve dayanıklılığı sağlamak amacıyla özenle seçilmiştir.
      <br><br>
      Bu geniş arazi, konforlu ve estetik bir yaşam alanı sunacak şekilde düzenlenmiştir. 12 katlı ve 72 daireli modern konut binası, hem fonksiyonellik hem de estetik açıdan yüksek standartlara sahiptir. Bina, sakinlerine geniş ve konforlu yaşam alanları sunarak, kaliteli bir yaşam deneyimi sağlamaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Mart 2018 - Kasım 2020" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "25 336,42 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img159.webp", "/img/img160.webp"],
      buildings: [],
    },
    {
      id: 21,
      img: "/img/img161.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 katlı, 72 daireli modern konut binası",
      desc: `
      Mart 2018 ile Kasım 2020 tarihleri arasında tamamlanan bu proje, 25.894,37 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern konut standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve uzun ömür sağlamak amacıyla seçilmiştir.
      <br><br>
      Geniş arazi, konforlu ve estetik bir yaşam alanı sunacak şekilde düzenlenmiştir. 12 katlı ve 72 daireli modern konut binası, hem fonksiyonel hem de estetik açıdan yüksek standartlara sahiptir. Bina, sakinlerine geniş ve rahat yaşam alanları sunarak, kaliteli bir yaşam deneyimi sağlamaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Mart 2018 - Kasım 2020" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "25 894,37 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img161.webp", "/img/img162.webp"],
      buildings: [],
    },
    {
      id: 22,
      img: "/img/img163.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Gökdepe ilçesinin Babarap köyünde ortaokul",
      desc: `
      Kasım 2017 ile Eylül 2021 tarihleri arasında tamamlanan bu proje, 10.096,28 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern eğitim standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, uzun ömür ve yüksek kalite sağlamak amacıyla özenle seçilmiştir.
      <br><br>
      Geniş arazi, eğitim faaliyetleri için uygun bir ortam sunacak şekilde düzenlenmiştir. Bina, hem fonksiyonel hem de estetik açıdan yüksek standartlara sahiptir ve öğrencilere geniş ve konforlu bir eğitim alanı sunmaktadır. Proje, eğitim kalitesini artırmayı ve öğrencilere modern bir öğrenme deneyimi sağlamayı hedeflemiştir.      
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Kasım 2017 - Eylül 2021" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "10 096,28 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img163.webp", "/img/img164.webp", "/img/img165.webp"],
      buildings: [],
    },
    {
      id: 23,
      img: "/img/img167.webp",
      catId: 4,
      location: "Türkmenistan, Aşgabat",
      title: "“Ajaýyp-gurluşyk” özel şirketi",
      desc: `
      Ocak 2017 ile Şubat 2018 tarihleri arasında tamamlanan bu proje, 5.112,46 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern standartlara uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılık sağlamak amacıyla seçilmiştir.
      <br><br>
      Arazinin genişliği, projenin amacına uygun olarak düzenlenmiştir. Bina, hem fonksiyonel hem de estetik açıdan yüksek standartlara sahiptir. Kullanıcılarına geniş ve konforlu bir yaşam alanı sunarak, modern ve rahat bir deneyim sağlamaktadır. Proje, yüksek kaliteli inşaat ve estetik tasarımın birleşimi ile dikkat çekmektedir.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Ocak 2017 - Şubat 2018" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "5 112,46 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: [
        "/img/img167.webp",
        "/img/img168.webp",
        "/img/img169.webp",
        "/img/img170.webp",
        "/img/img171.webp",
        "/img/img172.webp",
      ],
      buildings: [],
    },
    {
      id: 24,
      img: "/img/img173.webp",
      catId: 3,
      location: "Türkmenistan, Ahal",
      title: "Uluslararası Karantina Merkezi",
      desc: `
      Haziran 2015 ile Ekim 2016 tarihleri arasında tamamlanan bu proje, 4.150 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern standartlara uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılık sağlamak amacıyla seçilmiştir.
      <br><br>
      Arazinin büyüklüğü, projenin ihtiyaçlarına uygun olarak düzenlenmiştir. Bina, hem işlevsel hem de estetik açıdan yüksek standartlara sahiptir ve kullanıcılara geniş ve konforlu bir alan sunmaktadır. Proje, etkili bir yapı ve estetik tasarımı bir araya getirerek dikkat çekici bir özellik sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Haziran 2015 - Ekim 2016" },
        { id: 2, title: "Arazi parçasının alanı", desc: "4 150 m<sup>2</sup>" },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img173.webp", "/img/img175.webp", "/img/img176.webp"],
      buildings: [],
    },
    {
      id: 25,
      img: "/img/img177.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "3 katlı, 6 daireli konutlar",
      desc: `
      Nisan 2015 ile Aralık 2016 tarihleri arasında tamamlanan bu proje, 5.290 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında iki bina inşa edilmiştir. Bu binalar, modern inşaat standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılık sağlamak amacıyla seçilmiştir.
      <br><br>
      Arazinin genişliği, projeye uygun olarak düzenlenmiştir ve binalar, hem işlevsel hem de estetik açıdan yüksek standartlara sahiptir. Kullanıcılara geniş ve konforlu bir yaşam alanı sunan bu projede, modern tasarım ve etkili inşaat teknikleri ön plandadır. Proje, genel olarak yüksek kalite ve estetik özellikleri ile dikkat çekmektedir.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Nisan 2015 - Aralık 2016" },
        { id: 2, title: "Arazi parçasının alanı", desc: "5 290 m<sup>2</sup>" },
        { id: 3, title: "Binalar listesi", desc: "2" },
      ],
      galeri: ["/img/img177.webp", "/img/img177.webp"],
      buildings: [],
    },
    {
      id: 26,
      img: "/img/img178.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 katlı, 66 daireli modern konut",
      desc: `
      Aralık 2014 ile Ekim 2016 tarihleri arasında tamamlanan bu proje, 22.516,11 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern inşaat standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılık sağlamak amacıyla özenle seçilmiştir.
      <br><br>
      Arazinin genişliği, projenin ihtiyaçlarına uygun olarak düzenlenmiştir. Bina, hem işlevsel hem de estetik açıdan yüksek standartlara sahiptir ve kullanıcılara geniş ve konforlu bir yaşam alanı sunmaktadır. Proje, modern tasarımı ve etkili inşaat teknikleri ile dikkat çekici bir özellik sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Aralık 2014 - Ekim 2016" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "22 516,11 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img178.webp", "/img/img179.webp"],
      buildings: [],
    },
    {
      id: 27,
      img: "/img/img180.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Ruhabat ilçesinde çocuklar için kreş",
      desc: `
      Mayıs 2014 ile Ağustos 2015 tarihleri arasında tamamlanan bu proje, 4.125,5 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern inşaat standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılık sağlamak amacıyla seçilmiştir.
      <br><br>
      Arazinin genişliği, projenin ihtiyaçlarına göre düzenlenmiştir ve bina, işlevsel ve estetik açıdan yüksek standartlara sahiptir. Proje, kullanıcılarına geniş ve konforlu bir yaşam alanı sunmaktadır. Modern tasarım ve etkili inşaat teknikleri ile dikkat çekici bir özellik sunmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Mayıs 2014 - Ağustos 2015" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "4 125,5 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img180.webp", "/img/img181.webp"],
      buildings: [],
    },
    {
      id: 28,
      img: "/img/img182.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Kaka şehrinde kültür evi",
      desc: `
      Şubat 2013 ile Aralık 2014 tarihleri arasında tamamlanan bu proje, 8.857,12 m² büyüklüğündeki bir arazi üzerinde yer almaktadır. Proje kapsamında tek bir bina inşa edilmiştir. Bu bina, modern inşaat standartlarına uygun olarak tasarlanmış ve inşa edilmiştir. Kullanılan malzemeler ve inşaat yöntemleri, yüksek kalite ve dayanıklılığı sağlamak amacıyla dikkatlice seçilmiştir.
      <br><br>
      Arazinin genişliği, projenin ihtiyaçlarına uygun olarak düzenlenmiş olup, bina işlevsel ve estetik açıdan yüksek standartlara sahiptir. Proje, kullanıcılara geniş ve konforlu bir yaşam alanı sunmakta ve modern tasarımıyla öne çıkmaktadır.
          `,
      detay: [
        { id: 1, title: "Yapim yili", desc: "Şubat 2013 - Aralık 2014" },
        {
          id: 2,
          title: "Arazi parçasının alanı",
          desc: "8 857,12 m<sup>2</sup>",
        },
        { id: 3, title: "Binalar listesi", desc: "1" },
      ],
      galeri: ["/img/img183.webp", "/img/img184.webp", "/img/img185.webp"],
      buildings: [],
    },
  ],
  TM: [
    {
      id: 15,
      videos: "/video/dashoguz.m3u8",
      img: "/img/img139.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şäherinde köpugurly hassahanasy",
      desc: `
      Bu taslama, Fewral 2019 - Maý 2022 aralygynda gurlup, jemi 49 210,75 m² meýdanda ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman arhitekturasy we işleýişi bilen tapawutlanýar. Gurluşyk döwründe ulanylan materiallar we ulanylan usullar, binanyň uzak ömürli we durnukly bolmagyny üpjün etmek üçin üns bilen saýlanyldy.
      <br><br>
      Giň meýdan, abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Ýeke binanyň peýdalanyşy, ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerlerini üpjün etmegi maksat edinýär. Taslamanyň dizaýny, häzirki zaman durmuşynyň zerurlyklaryny kanagatlandyrmak üçin meýilleşdirilip, hem estetiki hem-de işleýiş peýdalary üpjün edýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Fewral 2019 - Maý 2022" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "49 210,75 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img139.webp", "/img/img143.webp", "/img/img141.webp"],
      buildings: [],
    },
    {
      id: 1,
      videos: "/video/binagarlik.m3u8",
      img: "/img/img5.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Türkmen döwlet binagärlik-gurluşyk instituty",
      desc: `
            Türkmen döwlet binagärlik-gurluşyk instituty (TDBGI) ýaş, häzirki zaman 
            ylmy we taslama bilim edarasy bolup, 2012-nji ýylyň 25-nji maýynda 
            Türkmenistanyň Prezidentiniň Permanyna laýyklykda döredildi. Ýokary 
            derejeli hünärmenleri taýýarlamak we binagärlik-gurluşyk, jemagat 
            hojalygy, himiýa, energetika, senagat we ýol-ulag pudaklaryny inžener 
            işgärleri bilen üpjün etmek TDBGI-niň esasy wezipesidir. Häzirki wagtda 
            institutda 7 fakultet, 28 kafedra hereket edýär, olardan 4 müňden gowrak 
            talyp bilim alýar. Bu ýokary okuw mekdebinde her ýyl 600-den gowrak 
            hünärmen taýýarlanylýar.
            <br><br>
            Hormatly Prezidentimiziň şu ýylyň 25-nji awgustynda gol çeken degişli 
            Kararyna laýyklykda, Aşgabat şäheriniň Görogly köçesiniň ugrunda bina 
            ediljek bu desganyň taslamasyny düzmek, ony gurmak, ýanaşyk çäkleri 
            abadanlaşdyrmak, ozal bar bolan inženerçilik ulgamlaryny döwrebaplaşdyrmak 
            we täzelerini gurmak Türkmenistanyň Senagatçylar we telekeçiler birleşmesiniň 
            agzasy “Ajaýyp gurluşyk” hususy kärhanasyna tabşyryldy. 
            <br><br>
            Şeýle-de resminama laýyklykda institutyň binalar toplumyny 2026-njy 
            ýylyň sentýabr aýynda ulanmaga doly taýýar edip tabşyrmak bellenildi.
            <br><br>
            Bilimler we talyp ýaşlar güni mynasybetli dabaralar dowam edýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "2023-2026" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "231 239 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "13" },
      ],
      galeri: [
        "/img/img5.webp",
        "/img/img50.webp",
        "/img/img52.webp",
        "/img/img54.webp",
        "/img/img56.webp",
        "/img/img57.webp",
      ],
      buildings: [
        {
          id: 1,
          img: "/img/img55.webp",
          title: "Sport toplumy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 2,
          img: "/img/img58.webp",
          title: "Naharhana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 3,
          img: "/img/img59.webp",
          title: "Sergiler merkezi",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 5,
          img: "/img/img61.webp",
          title: "Kitaphana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 6,
          img: "/img/img62.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 7,
          img: "/img/img63.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
      ],
    },
    {
      id: 2,
      img: "/img/img70.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Parahat-7 ýaşaýyş jaý toplumy",
      desc: `
            Bu taslama 2023-2024 ýyllarynda gurlup, jemi 40 596,72 m² meýdançany öz içine alýar. 
            Taslamada iki sany bina ýerleşdirilip, häzirki zaman arhitekturasyna laýyklykda dizaýn 
            edilendir. Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin amatly esas 
            üpjün edýär. Taslama, amatly we ýokary hilli ýaşaýyş ýerlerini üpjün etmegi maksat edinýär. 
            Bu binalar ýokary standartlara laýyklykda gurulyp, ulanyjylaryň zerurlyklaryny 
            kanagatlandyrmak üçin taslanypdyr.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "2023-2024" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "40 596,72 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "2" },
      ],
      galeri: [
        "/img/img65.webp",
        "/img/img66.webp",
        "/img/img67.webp",
        "/img/img68.webp",
        "/img/img69.webp",
        "/img/img70.webp",
      ],
      buildings: [],
    },
    {
      id: 3,
      img: "/img/img73.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şäherinde orta mekdep",
      desc: `
            Bu taslama Ýanwar 2023 - Awgust 2023 aralygynda tamamlandy we jemi 5 272,23 m² 
            meýdanda ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki 
            zaman arhitekturasynyň nepis elementleri bilen tapawutlanýar.
            <br><br>
            Taslama üçin ulanylan ýer, hem işjeňlik, hem-de estetika taýdan iň gowy şekilde 
            peýdalanyldy. Ýeke binanyň giň peýdalanyş meýdany daşky abadanlaşdyryş 
            bilen utgaşdyrylyp, ulanyjylara amatly we häzirki zaman ýaşaýyş ýerini 
            hödürlemegi maksat edinýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: [
        "/img/img71.webp",
        "/img/img72.webp",
        "/img/img73.webp",
        "/img/img74.webp",
        "/img/img75.webp",
      ],
      buildings: [],
    },
    {
      id: 4,
      img: "/img/img108.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şäherinde çagalar bagy",
      desc: `
          Bu taslama Ýanwar 2023 - Awgust 2023 aralygynda tamamlandy we 5 272,23 m² meýdançany öz içine alýar. 
          Taslamanyň çäginde diňe bir bina gurlup, häzirki zaman arhitekturasy bilen tapawutlanýar. 
          Gurluşyk döwründe hil we işçilik öň planda tutuldy.
          <br><br>
          Taslama üçin ulanylan ýer, daşky abadanlaşdyryş we estetiki jikme-jiklikler bilen üns bilen 
          meýilleşdirildi. Ýeke binanyň giň peýdalanyş meýdany häzirki zaman durmuşynyň talaplaryny 
          kanagatlandyrmak üçin dizaýn edilip, ýaşaýjylara amatly ýaşaýyş ýerini hödürlemegi maksat edinýär.
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: [
        "/img/img106.webp",
        "/img/img107.webp",
        "/img/img108.webp",
        "/img/img109.webp",
        "/img/img110.webp",
        "/img/img111.webp",
      ],
      buildings: [],
    },
    {
      id: 5,
      img: "/img/img112.webp",
      catId: 2,
      location: "Türkmenistan, Mary",
      title: "Mary welaýatynda orta mekdep",
      desc: `
          Ýanwar 2023 - Awgust 2023 aralygynda gurlan bu taslama, jemi 9 309,64 m² meýdanda ýerleşýär. 
          Taslamanyň çäginde diňe bir bina gurlup, bu bina sebitiň beýleki binalarynyň arasynda häzirki 
          zaman dizaýny bilen tapawutlanýar. Gurluşyk döwründe ýokary hilli standartlara laýyklykda işler 
          amala aşyrylyp, işçilik ünsli ýerine ýetirildi.
          <br><br>
          Taslamanyň giň meýdany, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin amatly şertleri üpjün edýär. 
          Ýeke binanyň giň peýdalanyş meýdany, ýaşaýjylara amatly we häzirki zaman durmuşyny hödürlemegi maksat 
          edinýär. Şol bir wagtyň özünde, taslama sebit bilen sazlaşykly görnüşde taslanyp, sebit estetikasyna 
          goşant goşýar.
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "9 309,64 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img112.webp", "/img/img113.webp"],
      buildings: [],
    },
    {
      id: 6,
      img: "/img/img114.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Bäherden etrabynyň Akdepe obasynda orta mekdep",
      desc: `
        Bu taslama, sentýabr 2022 - sentýabr 2023 aralygynda gurlup, jemi 9 406,48 m² meýdanda ýerleşýär. 
        Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman arhitekturasynyň we işleýşiniň 
        tapawudy bilen aýratynlanýar. Gurluşyk döwründe hil we durnuklylyk öň planda tutuldy, bu hem 
        taslamany uzak möhletleýin maýa goýumyna öwürýär.
        <br><br>
        Taslama üçin ulanylan giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler 
        hödürleýär. Ýeke binanyň giň peýdalanyş meýdany, ulanyjylara amatly we häzirki zaman durmuş 
        tejribesini üpjün etmegi maksat edinýär. Taslama estetika we işleýşi birleşdirip, sebite 
        goşmaça gymmatlyk goşýar.
      `,
      detay: [
        {
          id: 1,
          title: "Gurluşyk ýyly",
          desc: "Sentýabr 2022 - Sentýabr 2023",
        },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "9 406,48 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img114.webp", "/img/img115.webp"],
      buildings: [],
    },
    {
      id: 7,
      img: "/img/img116.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Seýdi şäherinde orta mekdep",
      desc: `
          Bu taslama, Ýanwar 2023 - sentýabr 2023 aralygynda gurlup, 7 679,15 m² meýdanda ýerleşýär. Taslamanyň 
          çäginde diňe bir bina gurlup, bu bina häzirki zaman arhitekturasy bilen tapawutlanýar. Gurluşyk 
          döwründe ulanylan materiallaryň hiline we işiň takyklygyna üns berildi, bu hem binanyň durnuklylygyny 
          we uzak ömrüni üpjün etmek üçin niýetlenendir.
          <br><br>
          Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. 
          Bu ýerler ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerini hödürlemegi maksat 
          edinýär. Taslama, işleýş we estetiki elementleri birleşdirip, ulanyjylara häzirki zaman durmuşynyň 
          ähli talaplaryny kanagatlandyrýan gurşawy hödürleýär.
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2023 - Sentýabr 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "7 679,15 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img116.webp", "/img/img117.webp"],
      buildings: [],
    },
    {
      id: 8,
      img: "/img/img118.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Farap şäherinde orta mekdep",
      desc: `
        Bu taslama, Ýanwar 2023 - sentýabr 2023 aralygynda gurlup, jemi 14 633,81 m² meýdanda ýerleşýär. Taslamanyň 
        çäginde diňe bir bina gurlup, bu bina häzirki zaman arhitekturasy we innowasion dizaýny bilen tapawutlanýar. 
        Gurluşyk döwründe ulanylan materiallaryň hili we işiň takyklygyna aýratyn üns berlip, binanyň uzak ömürli we 
        durnukly bolmagy üçin saýlanyldy.
        <br><br>
        Taslamanyň giň meýdançasy, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. 
        Ýeke binanyň giň peýdalanyş meýdany, ýaşaýjylara amatly we estetiki taýdan baý ýaşaýyş ýerini hödürlemegi 
        maksat edinýär. Şol bir wagtyň özünde, taslamanyň estetiki we işleýiş aýratynlyklary häzirki zaman durmuşynyň 
        ähli talaplaryny kanagatlandyrmak üçin niýetlenendir.
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2023 - Sentýabr 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "14 633,81 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img118.webp", "/img/img119.webp"],
      buildings: [],
    },
    {
      id: 9,
      img: "/img/img120.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Senagat Bank",
      desc: `
        Bu taslama, Awgust 2019 - Iýul 2023 aralygynda gurlup, jemi 4 396,52 m² meýdanda ýerleşýär. Taslamanyň çäginde 
        diňe bir bina gurlup, bu bina häzirki zaman dizaýny we işläp durmagy bilen aýratynlanýar. Gurluşyk döwründe 
        ulanylan materiallar we ulanylan usullar, binanyň uzak ömürli we durnukly bolmagyny üpjün etmek üçin aýratyn 
        saýlanyldy.
        <br><br>
        Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Ýeke binanyň 
        peýdalanyşy, ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerini hödürlemegi maksat edinýär. 
        Taslamanyň dizaýny, häzirki zaman durmuşynyň zerurlyklaryna laýyklykda meýilleşdirilip, hem estetiki, hem-de 
        işleýiş peýdalary üpjün edilýär
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "4 396,52 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img120.webp", "/img/img123.webp", "/img/img122.webp"],
      buildings: [],
    },
    {
      id: 10,
      img: "/img/img126.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Prokuraturanyň edara binasy",
      desc: `
        Bu taslama, Noýabr 2019 - Iýul 2023 aralygynda gurlup, jemi 9 674,32 m² meýdanda ýerleşýär. 
        Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman dizaýny we işleýişi bilen aýratynlanýar. 
        Gurluşyk döwründe ulanylan materiallar we ulanylan usullar, binanyň uzak ömürli we durnukly bolmagyny 
        üpjün etmek üçin aýratyn saýlanyldy.
        <br><br>
        Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Ýeke binanyň 
        peýdalanyşy, hem amatly, hem-de estetiki taýdan kanagatlandyryjy iş ortamyny üpjün etmek maksady bilen 
        meýilleşdirilendir. Taslamanyň dizaýny, häzirki zaman ofis zerurlyklaryny kanagatlandyrmak üçin meýilleşdirilip, 
        hem estetiki, hem-de işleýiş peýdalary üpjün edilýär
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Noýabr 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "9 674,32 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img126.webp", "/img/img125.webp", "/img/img124.webp"],
      buildings: [],
    },
    {
      id: 11,
      img: "/img/img128.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "9 gatly, 54 öýli ýaşaýyş jaýy",
      desc: `
        Bu taslama, Awgust 2019 - Iýul 2023 aralygynda gurlup, jemi 24 713,38 m² meýdanda ýerleşýär. Taslamanyň 
        çäginde jemi iki bina gurlup, her iki bina hem häzirki zaman dizaýny bilen tapawutlanýar. Gurluşyk döwründe 
        ulanylan materiallar we ulanylan usullar, binalaryň uzak ömürli we durnukly bolmagyny üpjün etmek üçin 
        aýratyn saýlanyldy.
        <br><br>
        Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Binalaryň 
        peýdalanyşy, ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerlerini üpjün etmek maksady 
        bilen meýilleşdirilendir. Taslamanyň dizaýny, häzirki zaman ýaşaýyş zerurlyklaryny kanagatlandyrmak üçin 
        meýilleşdirilip, hem estetiki, hem-de işleýiş peýdalary üpjün edilýär.
      `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "24 713,38 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "2" },
      ],
      galeri: ["/img/img127.webp", "/img/img129.webp", "/img/img128.webp"],
      buildings: [],
    },
    {
      id: 12,
      img: "/img/img130.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "7 gatly, 28 öýli ýaşaýyş jaýy",
      desc: `
      Bu taslama, Awgust 2019 - Iýul 2023 aralygynda gurlup, jemi 8 908,95 m² meýdanda ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman dizaýny we işläp durmagy bilen aýratynlanýar. Gurluşyk döwründe ulanylan materiallar we ulanylan usullar, binanyň uzak ömürli we durnukly bolmagyny üpjün etmek üçin aýratyn saýlanyldy.
      <br><br>
      Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Ýeke binanyň peýdalanyşy, ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerini hödürlemegi maksat edinýär. Taslamanyň dizaýny, häzirki zaman durmuşynyň zerurlyklaryna laýyklykda meýilleşdirilip, hem estetiki, hem-de işleýiş peýdalary üpjün edilýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "8 908,95 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img130.webp", "/img/img131.webp"],
      buildings: [],
    },
    {
      id: 13,
      img: "/img/img132.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "5 gatly, 30 öýli ýaşaýyş jaýy",
      desc: `
      Bu taslama, Noýabr 2019 - Iýul 2023 aralygynda gurlup, jemi 22 272,64 m² meýdanda ýerleşýär. Taslamanyň çäginde jemi üç bina gurlup, bu binalaryň her biri häzirki zaman dizaýny we işleýişi bilen tapawutlanýar. Gurluşyk döwründe ulanylan materiallar we ulanylan usullar, binalaryň uzak ömürli we durnukly bolmagyny üpjün etmek maksady bilen aýratyn saýlanyldy.
      <br><br>
      Giň meýdan, daşky abadanlaşdyryş we jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Üç binanyň peýdalanyşy, ýaşaýjylara amatly we estetiki taýdan kanagatlandyryjy ýaşaýyş ýerlerini hödürlemegi maksat edinýär. Taslamanyň dizaýny, häzirki zaman durmuşynyň zerurlyklaryna laýyklykda meýilleşdirilip, estetiki we işleýiş peýdalary üpjün edilýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Noýabr 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "22 272,64 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "3" },
      ],
      galeri: ["/img/img132.webp", "/img/img133.webp"],
      buildings: [],
    },
    {
      id: 14,
      img: "/img/img134.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Şeýh Zaid bin Sultan Al Nahaýýan adyndaky Döwletliler köşgi",
      desc: `
      Iýun 2022 - Dekabr 2022 aralygynda gurlan bu taslama, jemi 17 002,81 m² meýdanda ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman arhitekturasy bilen gurlup, estetiki we işläp durmak aýratynlyklary bilen tapawutlanýar. Gurluşyk döwründe ulanylan materiallar ýokary hilli standartlara laýyklykda saýlanyp, binanyň uzak ömürli bolmagy üçin aýratyn üns berildi.
      <br><br>
      Bu giň meýdan, abadanlaşdyryş we dürli jemgyýetçilik ýerleri üçin giň mümkinçilikler hödürleýär. Ýeke binanyň peýdalanyşy, ýaşaýyş ýerleriniň amatly, howpsuz we häzirki zaman şertlerine laýyklykda tertip edilmegini üpjün etmek üçin taslanypdy. Taslamanyň umumy gurluşy, häzirki zaman zerurlyklaryna laýyklykda oýlanylyp, hem estetiki, hem-de işleýiş nukdaýnazaryndan möhüm peýdalar hödürleýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Iýun 2022 - Dekabr 2022" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "17 002,81 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: [
        "/img/img134.webp",
        "/img/img135.webp",
        "/img/img136.webp",
        "/img/img137.webp",
        "/img/img138.webp",
      ],
      buildings: [],
    },
    {
      id: 16,
      img: "/img/img144.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şäherinde onkologiýa hassahanasy",
      desc: `
      Fewral 2019 - Maý 2022 aralygynda tamamlanan bu taslama, jemi 21 637,93 m² meýdanda ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman gurluşyk tehnikalary bilen jüpüne ýetirilip taslanypdyr. Ulanylan materiallaryň hiliniň ýokary bolmagy, binanyň uzak ömürli we durnukly bolmagyny üpjün etmek üçin üns bilen saýlanyp alyndy.
      <br><br>
      Bu giň meýdan, ýaşyl meýdanlar we jemgyýetçilik mümkinçilikleri üçin dürli şertler hödürleýär. Ýeke binanyň ulanylyşy, ýaşaýjylara amatly we işleýişe laýyk ýaşaýyş ýerlerini üpjün etmek maksady bilen taslanypdyr. Taslamanyň umumy gurluşy, estetika we funksionallygy birleşdirip, häzirki zaman durmuşynyň zerurlyklaryna laýyklykda oýlanylyp taslanypdyr.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Fewral 2019 - Maý 2022" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "21 637,93 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: [
        "/img/img144.webp",
        "/img/img145.webp",
        "/img/img146.webp",
        "/img/img147.webp",
        "/img/img148.webp",
        "/img/img149.webp",
      ],
      buildings: [],
    },
    {
      id: 17,
      img: "/img/img150.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Çagalar üçin döwrebap dynç alyş seýilgähi",
      desc: `
      Awgust 2021 - Iýun 2022 aralygynda tamamlanan bu taslama, 524,89 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman dizaýny we gurluşyk tehnikalary bilen üns bilen taslanypdyr. Ulanylan materiallaryň hiliniň ýokary bolmagy, estetika we işleýişlik taýdan ýokary standartlary üpjün etmek üçin saýlanypdyr.
      <br><br>
      Bu giň meýdan, çagalar üçin döwrebap dynç alyş seýilgähi hökmünde taslanyp, dürli oýun meýdançalary we jemgyýetçilik çäreleri üçin amatly ýerler hödürleýär. Ýeke binanyň ýerleşýän bu taslama, howpsuz we gyzykly bir gurşaw döretmek maksady bilen taslanypdyr we çagalar bilen maşgalalar üçin amatly bir tejribe hödürleýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Awgust 2021 - Iýun 2022" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "524,89 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img150.webp", "/img/img151.webp", "/img/img152.webp"],
      buildings: [],
    },
    {
      id: 18,
      img: "/img/img154.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Daşoguz şäherinde orta mekdep",
      desc: `
      Fewral 2022 - Sentýabr 2022 aralygynda tamamlanan bu taslama, 6 949,03 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlup, bu bina häzirki zaman gurluşyk standartlaryna laýyklykda taslanypdyr. Ulanylan materiallaryň hiliniň ýokary bolmagy, hem durnuklylygy, hem-de estetiki taýdan ýokary hili üpjün edýär.
      <br><br>
      Bu taslama, Daşoguz şäherinde bir orta mekdep hökmünde taslanypdyr. Giň meýdan, okuwçylara we mugallymlara amatly bilim we jemgyýetçilik ýerlerini hödürlejek bolup dizaýnlanypdy. Ýeke bina, bilim işlerini ýerine ýetirmek üçin zerur bolan ähli enjam we mümkinçilikleri üpjün etmek maksady bilen taslanypdyr, bu hem bilimleriň hilini, hem-de ulanyjylar üçin amatlylygy ýokarlandyrýar.      
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Fewral 2022 - Sentýabr 2022" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "6 949,03 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img154.webp"],
      buildings: [],
    },
    {
      id: 19,
      videos: "/video/sport-desgalar.m3u8",
      img: "/img/img155.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Sport desgalary, umumy ýaşaýyş jaýy we degişli desgalar",
      desc: `
      Aprel 2018 - Sentýabr 2020 aralygynda tamamlanan bu taslama, 57 153,12 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde dört bina gurlup, bu binalar sport desgalary, umumy ýaşaýyş jaýlary we degişli desgalar hökmünde taslanypdyr. Her bir bina häzirki zaman gurluşyk standartlaryna laýyklykda meýilnamalaşdyrylyp gurlupdyr.
      <br><br>
      Taslamanyň giň meýdany, hem sport çäreleri üçin amatly ýerleri hödürleýär, hem-de amatly ýaşaýyş ýerlerini üpjün edýär. Binalar ulanyjylaryň zerurlyklaryny kanagatlandyrmak maksady bilen taslanylypdyr we sport zallary, jemgyýetçilik ýerleri we ýaşaýyş birimleri bilen birleşdirilen gurluşy hödürleýär. Bu taslama, jemgyýetçilik durmuş we sport çäreleri babatynda möhüm goşant berýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Aprel 2018 - Sentýabr 2020" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "57 153,12 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "4" },
      ],
      galeri: [
        "/img/img155.webp",
        "/img/img156.webp",
        "/img/img157.webp",
        "/img/img158.webp",
      ],
      buildings: [],
    },
    {
      id: 20,
      img: "/img/img159.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 gatly 72 öýli döwrebap ýaşaýyş jaýy",
      desc: `
      Mart 2018 - Noýabr 2020 aralygynda tamamlanan bu taslama, 25 336,42 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman ýaşaýyş standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk tehnikalary ýokary hil we durnuklylygy üpjün etmek maksady bilen üns bilen saýlanypdyr.
      <br><br>
      Bu giň meýdan, amatly we estetiki ýaşaýyş ýerlerini hödürlemek üçin dizaýn edilipdir. 12 gatly we 72 öýli döwrebap ýaşaýyş jaýy, hem funksionallyk, hem-de estetiki taýdan ýokary standartlara eýe. Bina, ýaşaýjylara giň we amatly ýaşaýyş ýerlerini hödürlemek bilen, ýokary hilli ýaşamak tejribesini üpjün edýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Mart 2018 - Noýabr 2020" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "25 336,42 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img159.webp", "/img/img160.webp"],
      buildings: [],
    },
    {
      id: 21,
      img: "/img/img161.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 gatly 72 öýli döwrebap ýaşaýyş jaýy",
      desc: `
      Mart 2018 - Noýabr 2020 aralygynda tamamlanan bu taslama, 25 894,37 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman ýaşaýyş standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary ýokary hil we uzak möhletli hyzmat etmek maksady bilen saýlanypdyr.
      <br><br>
      Giň meýdan, amatly we estetiki ýaşaýyş ýerlerini hödürlemek üçin dizaýn edilipdir. 12 gatly we 72 öýli döwrebap ýaşaýyş jaýy, hem funksionallyk, hem-de estetiki taýdan ýokary standartlara eýedir. Bina, ýaşaýjylara giň we rahat ýaşaýyş ýerlerini hödürlemek bilen, ýokary hilli ýaşamak tejribesini üpjün edýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Mart 2018 - Noýabr 2020" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "25 894,37 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img161.webp", "/img/img162.webp"],
      buildings: [],
    },
    {
      id: 22,
      img: "/img/img163.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Gökdepe etrabynyň Babarap obasynda orta mekdep",
      desc: `
      Noýabr 2017 - Sentýabr 2021 aralygynda tamamlanan bu taslama, 10 096,28 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman okuw standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary uzak möhletli we ýokary hil üpjün etmek maksady bilen üns bilen saýlanypdyr.
      <br><br>
      Giň meýdan, okuw işleriniň geçirilmegi üçin amatly bir ýagdaýda gurulypdyr. Bina, hem funksionallyk, hem-de estetiki taýdan ýokary standartlara eýedir we okuwçylara giň we amatly okuw meýdany hödürleýär. Taslama, okuw hilini ýokarlandyrmak we okuwçylara häzirki zaman öwreniş tejribesi bermek maksadyny goýupdyr.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Noýabr 2017 - Sentýabr 2021" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "10 096,28 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img163.webp", "/img/img164.webp", "/img/img165.webp"],
      buildings: [],
    },
    {
      id: 23,
      img: "/img/img167.webp",
      catId: 4,
      location: "Türkmenistan, Aşgabat",
      title: "“Ajaýyp-gurluşyk” hususy kärhanasy",
      desc: `
      Ýanwar 2017 - Fewral 2018 aralygynda tamamlanan bu taslama, 5 112,46 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary, ýokary hil we durnuklylyk üpjün etmek maksady bilen saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslamanyň maksadyna laýyklykda gurulypdyr. Bina, hem funksionallyk, hem-de estetiki taýdan ýokary standartlara eýedir. Ulanyjylara giň we amatly ýaşaýyş meýdany hödürleýär, şeýlelikde döwrebap we rahat bir tejribe berýär. Taslama, ýokary hilli gurluşyk we estetiki dizaýnyň birleşmegi bilen dikkaty çekýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Ýanwar 2017 - Fewral 2018" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "5 112,46 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: [
        "/img/img167.webp",
        "/img/img168.webp",
        "/img/img169.webp",
        "/img/img170.webp",
        "/img/img171.webp",
        "/img/img172.webp",
      ],
      buildings: [],
    },
    {
      id: 24,
      img: "/img/img173.webp",
      catId: 3,
      location: "Türkmenistan, Ahal",
      title: "Halkara karantin merkezi",
      desc: `
      Iýun 2015 - Oktýabr 2016 aralygynda tamamlanan bu taslama, 4 150 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary ýokary hil we durnuklylyk üpjün etmek maksady bilen saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslamanyň zerurlyklaryna laýyklykda gurulypdyr. Bina, hem işjeň, hem-de estetiki taýdan ýokary standartlara eýedir we ulanyjylara giň we amatly bir meýdan hödürleýär. Taslama, täsirli gurluşyk we estetiki dizaýny birleşdirip, özüne çekiji aýratynlyklary hödürleýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Iýun 2015 - Oktýabr 2016" },
        { id: 2, title: "Gurluşyk meýdançasy", desc: "4 150 m<sup>2</sup>" },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img173.webp", "/img/img175.webp", "/img/img176.webp"],
      buildings: [],
    },
    {
      id: 25,
      img: "/img/img177.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "3 gatly, 6 öýli ýaşaýyş jaýlary",
      desc: `
      Aprel 2015 - Dekabr 2016 aralygynda tamamlanan bu taslama, 5 290 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde iki bina gurlupdyr. Bu binalar häzirki zaman gurluşyk standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary ýokary hil we durnuklylyk üpjün etmek maksady bilen saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslama laýyklykda gurulypdyr we binalar hem işjeň, hem-de estetiki taýdan ýokary standartlara eýedir. Ulanyjylara giň we amatly ýaşaýyş meýdany hödürleýän bu taslamada, döwrebap dizaýn we täsirli gurluşyk teknikleri öň plandadyr. Taslama, umumy taýdan ýokary hil we estetiki aýratynlyklary bilen dikkat çekýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Aprel 2015 - Dekabr 2016" },
        { id: 2, title: "Gurluşyk meýdançasy", desc: "5 290 m<sup>2</sup>" },
        { id: 3, title: "Binalaryň sanawy", desc: "2" },
      ],
      galeri: ["/img/img177.webp", "/img/img177.webp"],
      buildings: [],
    },
    {
      id: 26,
      img: "/img/img178.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12 gatly 66 öýli döwrebap ýaşaýyş jaýy",
      desc: `
      Dekabr 2014 - Oktýabr 2016 aralygynda tamamlanan bu taslama, 22 516,11 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman gurluşyk standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary, ýokary hil we durnuklylyk üpjün etmek maksady bilen aýratyn saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslamanyň zerurlyklaryna laýyklykda gurulypdyr. Bina, hem işjeň, hem-de estetiki taýdan ýokary standartlara eýedir we ulanyjylara giň we amatly bir ýaşaýyş meýdany hödürleýär. Taslama, döwrebap dizaýny we täsirli gurluşyk tehnologiýalary bilen aýratynlyklary hödürleýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Dekabr 2014 - Oktýabr 2016" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "22 516,11 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img178.webp", "/img/img179.webp"],
      buildings: [],
    },
    {
      id: 27,
      img: "/img/img180.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Ruhabat etrabynda çagalar bagy",
      desc: `
      Maý 2014 - Awgust 2015 aralygynda tamamlanan bu taslama, 4 125,5 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman gurluşyk standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary ýokary hil we durnuklylyk üpjün etmek maksady bilen saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslamanyň zerurlyklaryna laýyklykda gurulypdyr we bina işjeň we estetiki taýdan ýokary standartlara eýedir. Taslama ulanyjylara giň we amatly bir ýaşaýyş meýdany hödürleýär. Modern dizaýn we täsirli gurluşyk tehnologiýalary bilen aýratyn aýratynlyklary hödürleýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Maý 2014 - Awgust 2015" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "4 125,5 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img180.webp", "/img/img181.webp"],
      buildings: [],
    },
    {
      id: 28,
      img: "/img/img182.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Kaka şäherinde medeniýet öýi",
      desc: `
      Fewral 2013 - Dekabr 2014 aralygynda tamamlanan bu taslama, 8 857,12 m² meýdandaky bir ýerde ýerleşýär. Taslamanyň çäginde diňe bir bina gurlupdyr. Bu bina häzirki zaman gurluşyk standartlaryna laýyklykda taslanypdyr we gurlupdyr. Ulanylan materiallar we gurluşyk usullary ýokary hil we durnuklylyk üpjün etmek maksady bilen aýratyn saýlanypdyr.
      <br><br>
      Meýdanyň giňligi, taslamanyň zerurlyklaryna laýyklykda gurulypdyr we bina işjeň we estetiki taýdan ýokary standartlara eýedir. Taslama ulanyjylara giň we amatly bir ýaşaýyş meýdany hödürleýär, döwrebap dizaýny bilen aýratynlykda görkezilýär.
          `,
      detay: [
        { id: 1, title: "Gurluşyk ýyly", desc: "Fewral 2013 - Dekabr 2014" },
        {
          id: 2,
          title: "Gurluşyk meýdançasy",
          desc: "8 857,12 m<sup>2</sup>",
        },
        { id: 3, title: "Binalaryň sanawy", desc: "1" },
      ],
      galeri: ["/img/img183.webp", "/img/img184.webp", "/img/img185.webp"],
      buildings: [],
    },
  ],
  EN: [
    {
      id: 15,
      videos: "/video/dashoguz.m3u8",
      img: "/img/img139.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Multifunctional hospital in Daşoguz city",
      desc: `
      This project, constructed between February 2019 and May 2022, is situated on a 49,210.75 m² plot of land. A single building has been constructed as part of the project, featuring modern architecture and functionality. The materials used and the methods applied during the construction process were carefully selected to ensure the building’s durability and longevity.
      <br><br>
      The expansive land area offers ample opportunities for landscaping and social spaces. The use of a single building aims to provide residents with living spaces that are both comfortable and aesthetically pleasing. The design of the project has been planned to meet the needs of modern living, offering both aesthetic and functional benefits.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "February 2019 - May 2022",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "49 210,75 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img139.webp", "/img/img143.webp", "/img/img141.webp"],
      buildings: [],
    },
    {
      id: 1,
      videos: "/video/binagarlik.m3u8",
      img: "/img/img5.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Turkmen State Institute of Architecture and Construction",
      desc: `
            The Turkmen State Institute of Architecture and Construction (TDBGI) 
            is a young, modern scientific and design educational institution, 
            which was established on May 25, 2012 in accordance with the Decree 
            of the President of Turkmenistan. The main task of TDBGI is to train 
            high-level specialists and provide engineers in the 
            architecture-construction, public sector, chemical, energy, industry 
            and road-transport sectors. Currently, the institute has 7 faculties, 
            28 departments, more than 4 thousand students are studying in them. 
            More than 600 specialists are trained in this higher educational 
            institution every year.
            <br><br>
            In accordance with the relevant Decision signed by the President on 
            August 25 of this year, the project of this facility to be built 
            along Gorogly Street in Ashgabat, its construction, improvement 
            of adjacent areas, modernization of the existing engineering 
            systems and construction of new ones, member of the Union of 
            Industrialists and Entrepreneurs of Turkmenistan "Ajayyp construction" 
            private enterprise.
            <br><br>
            Also, according to the document, it was decided to hand over the building 
            complex of the institute in September 2026.
            <br><br>
            Celebrations on the occasion of Education and Student Youth Day continue.
          `,
      detay: [
        { id: 1, title: "Year of construction", desc: "2023-2026" },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "231 239 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "13" },
      ],
      galeri: [
        "/img/img5.webp",
        "/img/img50.webp",
        "/img/img52.webp",
        "/img/img54.webp",
        "/img/img56.webp",
        "/img/img57.webp",
      ],
      buildings: [
        {
          id: 1,
          img: "/img/img55.webp",
          title: "Sport toplumy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 2,
          img: "/img/img58.webp",
          title: "Naharhana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 3,
          img: "/img/img59.webp",
          title: "Sergiler merkezi",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 5,
          img: "/img/img61.webp",
          title: "Kitaphana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 6,
          img: "/img/img62.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 7,
          img: "/img/img63.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
      ],
    },
    {
      id: 2,
      img: "/img/img70.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Parahat-7 Residential Complex",
      desc: `
            This project, constructed between 2023 and 2024, is situated on a total land 
            area of 40,596.72 m². The project includes two buildings designed with 
            modern architecture. The expansive land provides an ideal foundation 
            for landscaping and social spaces. The project aims to offer comfortable 
            and high-quality living areas. These structures, built to high standards, 
            are designed to meet the needs of the users.
          `,
      detay: [
        { id: 1, title: "Year of construction", desc: "2023-2024" },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "40 596,72 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "2" },
      ],
      galeri: [
        "/img/img65.webp",
        "/img/img66.webp",
        "/img/img67.webp",
        "/img/img68.webp",
        "/img/img69.webp",
        "/img/img70.webp",
      ],
      buildings: [],
    },
    {
      id: 3,
      img: "/img/img73.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "High school in Dashoguz city",
      desc: `
            This project was completed between January 2023 and August 2023, occupying a total 
            land area of 5,272.23 m². A single building was constructed within the scope of 
            the project, showcasing the elegant elements of modern architecture.
            <br><br>
            The land used in the project was optimally utilized in both functional and 
            aesthetic aspects. The spacious use area of the single building, combined 
            with landscaping, aims to offer its users a comfortable and contemporary 
            living space.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2023 - August 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: [
        "/img/img71.webp",
        "/img/img72.webp",
        "/img/img73.webp",
        "/img/img74.webp",
        "/img/img75.webp",
      ],
      buildings: [],
    },
    {
      id: 4,
      img: "/img/img108.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Kindergarten in Dashoguz city",
      desc: `
          This project, completed between January 2023 and August 2023, is situated on a 5,272.23 m² plot of land. 
          The project consists of a single building, which stands out with its modern architecture. 
          Throughout the construction process, quality and craftsmanship were prioritized.
          <br><br>
          The land used in the project has been meticulously planned, incorporating landscaping and aesthetic details. 
          The spacious use area of the single building is designed to meet the needs of modern living, offering 
          residents a comfortable living space.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2023 - August 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: [
        "/img/img106.webp",
        "/img/img107.webp",
        "/img/img108.webp",
        "/img/img109.webp",
        "/img/img110.webp",
        "/img/img111.webp",
      ],
      buildings: [],
    },
    {
      id: 5,
      img: "/img/img112.webp",
      catId: 2,
      location: "Türkmenistan, Mary",
      title: "Secondary school in Mary province",
      desc: `
          This project, constructed between January 2023 and August 2023, is situated on a total land area 
          of 9,309.64 m². A single building has been constructed as part of the project, standing out among 
          the other structures in the region with its modern design. Throughout the construction process, 
          high-quality standards were adhered to, and craftsmanship was executed with precision.
          <br><br>
          The project’s expansive land provides an ideal setting for landscaping and social spaces. 
          The spacious use area of the single building aims to offer residents a comfortable and modern 
          living experience. Additionally, the project has been designed in harmony with the surrounding 
          environment, contributing to the aesthetic value of the area.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2023 - August 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "9 309,64 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img112.webp", "/img/img113.webp"],
      buildings: [],
    },
    {
      id: 6,
      img: "/img/img114.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Secondary school in Akdepe village of Baherden district",
      desc: `
        This project, constructed between September 2022 and September 2023, is located on a total land area of 
        9,406.48 m². A single building was constructed as part of the project, standing out for its modern 
        architecture and functionality. Throughout the construction process, quality and durability were
        prioritized, making this project a long-term investment.
        <br><br>
        The large plot of land utilized in the project offers ample opportunities for landscaping and social 
        spaces. The spacious use area of the single building aims to provide users with a comfortable and modern 
        living experience. By combining aesthetics and functionality, the project adds value to the region.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "September 2022 - September 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "9 406,48 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img114.webp", "/img/img115.webp"],
      buildings: [],
    },
    {
      id: 7,
      img: "/img/img116.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Secondary school in Seydi city",
      desc: `
        This project, constructed between January 2023 and September 2023, is situated on a 7,679.15 m² plot of land. 
        A single building has been constructed as part of the project, standing out for its modern architectural 
        features. The quality of materials used and the meticulousness of the construction process were prioritized 
        to ensure the durability and longevity of the building.
        <br><br>
        The large land area provides ample opportunities for landscaping and social spaces. These areas aim to 
        offer residents a living space that is both comfortable and aesthetically pleasing. By combining functionality 
        and aesthetic elements, the project provides an environment that meets all the requirements of modern living.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2023 - September 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "7 679,15 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img116.webp", "/img/img117.webp"],
      buildings: [],
    },
    {
      id: 8,
      img: "/img/img118.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Secondary school in Farap city",
      desc: `
        This project, constructed between January 2023 and September 2023, is situated on a total land area of 14,633.81 m². 
        A single building has been constructed as part of the project, standing out for its modern architectural details 
        and innovative design. The quality of the materials used and the care taken during the construction phase were 
        meticulously chosen to ensure the building's longevity and durability.
        <br><br>
        The project’s expansive land area offers ample opportunities for landscaping and social spaces. The spacious use 
        area of the single building aims to provide residents with a comfortable and aesthetically rich living experience. 
        Additionally, the project’s aesthetic and functional features have been designed to meet all the requirements of 
        modern living.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2023 - September 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "14 633,81 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img118.webp", "/img/img119.webp"],
      buildings: [],
    },
    {
      id: 9,
      img: "/img/img120.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Industry Bank",
      desc: `
        This project, constructed between August 2019 and July 2023, is located on a 4,396.52 m² plot of land. A 
        single building has been constructed as part of the project, featuring modern design and functionality. 
        The materials used and the methods applied during the construction process were carefully selected to ensure 
        the building’s durability and longevity.
        <br><br>
        The expansive land area provides ample opportunities for landscaping and social spaces. The usage of the 
        single building aims to offer residents a living experience that is both comfortable and aesthetically pleasing. 
        The design of the project has been planned to meet the needs of modern living, providing both aesthetic and 
        functional benefits.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "August 2019 - July 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "4 396,52 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img120.webp", "/img/img123.webp", "/img/img122.webp"],
      buildings: [],
    },
    {
      id: 10,
      img: "/img/img126.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Prosecutor's office building",
      desc: `
        This project, constructed between November 2019 and July 2023, is situated on a 9,674.32 m² plot of land. 
        A single building has been constructed as part of the project, featuring modern design and functionality. 
        The materials used and the methods applied during the construction process were carefully selected to ensure 
        the building’s durability and longevity.
        <br><br>
        The expansive land area offers ample opportunities for landscaping and social spaces. The use of the single 
        building aims to provide a comfortable and aesthetically pleasing work environment. The design of the project 
        has been planned to meet the needs of modern office requirements, offering both aesthetic and functional benefits.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "November 2019 - July 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "9 674,32 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img126.webp", "/img/img125.webp", "/img/img124.webp"],
      buildings: [],
    },
    {
      id: 11,
      img: "/img/img128.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "9-story, 54-apartment residential building",
      desc: `
        This project, constructed between August 2019 and July 2023, is situated on a 24,713.38 m² plot of land. 
        A total of two buildings have been constructed as part of the project, both featuring modern designs. 
        The materials used and methods applied during the construction process were carefully selected to ensure 
        the buildings’ durability and longevity.
        <br><br>
        The expansive land area provides ample opportunities for landscaping and social spaces. The buildings aim 
        to offer residents comfortable and aesthetically pleasing living environments. The design of the project 
        has been planned to meet the needs of modern living, providing both aesthetic and functional benefits.
      `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "August 2019 - July 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "24 713,38 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "2" },
      ],
      galeri: ["/img/img127.webp", "/img/img129.webp", "/img/img128.webp"],
      buildings: [],
    },
    {
      id: 12,
      img: "/img/img130.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "7-story, 28-apartment residential building",
      desc: `
      This project, constructed between August 2019 and July 2023, is situated on an 8,908.95 m² plot of land. A single building has been constructed as part of the project, featuring modern design and functionality. The materials used and the methods applied during the construction process were carefully selected to ensure the building’s durability and longevity.
      <br><br>
      The expansive land area provides ample opportunities for landscaping and social spaces. The use of the single building aims to offer residents a living experience that is both comfortable and aesthetically pleasing. The design of the project has been planned to meet the needs of modern living, providing both aesthetic and functional benefits.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "August 2019 - July 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "8 908,95 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img130.webp", "/img/img131.webp"],
      buildings: [],
    },
    {
      id: 13,
      img: "/img/img132.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "5-story, 30-apartment residential building",
      desc: `
      This project, constructed between November 2019 and July 2023, is situated on a 22,272.64 m² plot of land. A total of three buildings have been constructed as part of the project, each featuring modern design and functionality. The materials used and the methods applied during the construction process were carefully selected to ensure the buildings' durability and longevity.
      <br><br>
      The expansive land area offers ample opportunities for landscaping and social spaces. The use of three buildings aims to provide residents with living spaces that are both comfortable and aesthetically pleasing. The design of the project has been planned to meet the needs of modern living, offering both aesthetic and functional benefits.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "November 2019 - July 2023",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "22 272,64 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "3" },
      ],
      galeri: ["/img/img132.webp", "/img/img133.webp"],
      buildings: [],
    },
    {
      id: 14,
      img: "/img/img134.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Sheikh Zayed bin Sultan Al Nahyan Palace of State Officials",
      desc: `
      This project, constructed between June 2022 and December 2022, is situated on a 17,002.81 m² plot of land. A single building has been constructed as part of the project, designed with modern architectural principles, standing out with both aesthetic and functional features. The materials used during the construction were selected according to high-quality standards, ensuring the building's durability and longevity.
      <br><br>
      The expansive land area offers ample opportunities for landscaping and various social spaces. The use of a single building has been designed to organize living spaces in a comfortable, secure, and modern manner. The overall structure of the project has been thoughtfully planned to meet the needs of contemporary life, providing significant advantages in both aesthetics and functionality.      
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "June 2022 - December 2022",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "17 002,81 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: [
        "/img/img134.webp",
        "/img/img135.webp",
        "/img/img136.webp",
        "/img/img137.webp",
        "/img/img138.webp",
      ],
      buildings: [],
    },
    {
      id: 16,
      img: "/img/img144.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Oncology hospital in Daşoguz city",
      desc: `
      Completed between February 2019 and May 2022, this project is situated on a plot of land measuring 21,637.93 m². The project includes a single building that has been meticulously designed using modern construction techniques. The materials chosen were carefully selected to ensure the building's durability and longevity.
      <br><br>
      This spacious plot offers various opportunities for green areas and social amenities. The use of a single building has been planned to provide comfortable and functional living spaces for residents. The overall structure of the project combines aesthetics and functionality, tailored to meet the needs of modern living.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "February 2019 - May 2022",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "21 637,93 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: [
        "/img/img144.webp",
        "/img/img145.webp",
        "/img/img146.webp",
        "/img/img147.webp",
        "/img/img148.webp",
        "/img/img149.webp",
      ],
      buildings: [],
    },
    {
      id: 17,
      img: "/img/img150.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Modern recreation park for children",
      desc: `
      Completed between August 2021 and June 2022, this project is located on a 524.89 m² plot of land. The project includes a single building that has been meticulously planned using modern design and construction techniques. The quality of the materials used was selected to meet high standards in both aesthetics and functionality.
      <br><br>
      The spacious area has been designed as a modern recreation park for children, offering various play areas and suitable spaces for social activities. The single building in this project is intended to provide a safe and enjoyable environment, offering a comfortable experience for both children and their families.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "August 2021 - June 2022",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "524,89 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img150.webp", "/img/img151.webp", "/img/img152.webp"],
      buildings: [],
    },
    {
      id: 18,
      img: "/img/img154.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Middle school in Daşoguz city",
      desc: `
      Completed between February 2022 and September 2022, this project is situated on a plot of 6,949.03 m². The project includes a single building that has been designed according to modern construction standards. The quality of the materials used ensures both durability and high aesthetic standards.
      <br><br>
      This project has been designed as a middle school in Daşoguz city. The spacious plot has been arranged to provide suitable educational and social areas for students and teachers. The single building has been planned to include all necessary equipment and facilities for educational activities, enhancing both the quality of education and user comfort.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "February 2022 - September 2022",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "6 949,03 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img154.webp"],
      buildings: [],
    },
    {
      id: 19,
      videos: "/video/sport-desgalar.m3u8",
      img: "/img/img155.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title:
        "Sports facilities, general residential building, and related structures",
      desc: `
      Completed between April 2018 and September 2020, this project is situated on a 57,153.12 m² plot of land. The project includes four buildings, designed as sports facilities, general residential buildings, and related structures. Each building has been planned and constructed according to modern construction standards.
      <br><br>
      The extensive area of the project provides suitable spaces for both sports activities and comfortable living areas. The buildings are designed to meet user needs, offering a well-integrated structure with sports halls, social spaces, and residential units. This project makes a significant contribution to both community life and sports activities.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "April 2018 - September 2020",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "57 153,12 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "4" },
      ],
      galeri: [
        "/img/img155.webp",
        "/img/img156.webp",
        "/img/img157.webp",
        "/img/img158.webp",
      ],
      buildings: [],
    },
    {
      id: 20,
      img: "/img/img159.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-story, 72-apartment modern residential building",
      desc: `
      Completed between March 2018 and November 2020, this project is situated on a 25,336.42 m² plot of land. The project includes a single building, designed and constructed according to modern residential standards. The materials and construction techniques used have been carefully selected to ensure high quality and durability.
      <br><br>
      The spacious plot has been arranged to provide a comfortable and aesthetically pleasing living environment. The 12-story, 72-apartment modern residential building meets high standards in both functionality and aesthetics. The building offers residents spacious and comfortable living spaces, ensuring a high-quality living experience.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "March 2018 - November 2020",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "25 336,42 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img159.webp", "/img/img160.webp"],
      buildings: [],
    },
    {
      id: 21,
      img: "/img/img161.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-story, 72-apartment modern residential building",
      desc: `
      Completed between March 2018 and November 2020, this project is located on a 25,894.37 m² plot of land. The project includes a single building, designed and constructed according to modern residential standards. The materials and construction methods used have been selected to ensure high quality and long-lasting durability.
      <br><br>
      The expansive plot has been arranged to provide a comfortable and aesthetically pleasing living environment. The 12-story, 72-apartment modern residential building meets high standards in both functionality and aesthetics. The building offers residents spacious and comfortable living areas, ensuring a high-quality living experience.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "March 2018 - November 2020",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "25 894,37 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img161.webp", "/img/img162.webp"],
      buildings: [],
    },
    {
      id: 22,
      img: "/img/img163.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Middle school in Babarap village, Gökdepe district",
      desc: `
      Completed between November 2017 and September 2021, this project is situated on a 10,096.28 m² plot of land. The project includes a single building, designed and constructed according to modern educational standards. The materials and construction methods used have been carefully selected to ensure durability and high quality.
      <br><br>
      The spacious plot has been arranged to provide a suitable environment for educational activities. The building meets high standards in both functionality and aesthetics, offering students a wide and comfortable learning space. The project aims to enhance educational quality and provide students with a modern learning experience.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "November 2017 - September 2021",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "10 096,28 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img163.webp", "/img/img164.webp", "/img/img165.webp"],
      buildings: [],
    },
    {
      id: 23,
      img: "/img/img167.webp",
      catId: 4,
      location: "Türkmenistan, Aşgabat",
      title: "“Ajaýyp-gurluşyk” private enterprise",
      desc: `
      Completed between January 2017 and February 2018, this project is situated on a 5,112.46 m² plot of land. The project includes a single building, designed and constructed according to modern standards. The materials and construction methods used have been selected to ensure high quality and durability.
      <br><br>
      The plot's size has been arranged to suit the project's purpose. The building meets high standards in both functionality and aesthetics, offering users a spacious and comfortable living area. The project stands out for its combination of high-quality construction and aesthetic design, providing a modern and comfortable experience.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "January 2017 - February 2018",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "5 112,46 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: [
        "/img/img167.webp",
        "/img/img168.webp",
        "/img/img169.webp",
        "/img/img170.webp",
        "/img/img171.webp",
        "/img/img172.webp",
      ],
      buildings: [],
    },
    {
      id: 24,
      img: "/img/img173.webp",
      catId: 3,
      location: "Türkmenistan, Ahal",
      title: "International Quarantine Center",
      desc: `
      Completed between June 2015 and October 2016, this project is located on a 4,150 m² plot of land. The project includes a single building, designed and constructed to modern standards. The materials and construction methods used have been selected to ensure high quality and durability.
      <br><br>
      The size of the plot has been arranged to meet the needs of the project. The building meets high standards in both functionality and aesthetics, offering users a spacious and comfortable area. The project combines effective construction with aesthetic design, creating a notable feature.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "June 2015 - October 2016",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "4 150 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img173.webp", "/img/img175.webp", "/img/img176.webp"],
      buildings: [],
    },
    {
      id: 25,
      img: "/img/img177.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "3-story, 6-apartment residential buildings",
      desc: `
      Completed between April 2015 and December 2016, this project is situated on a 5,290 m² plot of land. The project includes two buildings, designed and constructed to modern construction standards. The materials and construction methods used have been selected to ensure high quality and durability.
      <br><br>
      The size of the plot has been arranged to suit the project, and the buildings meet high standards in both functionality and aesthetics. The project offers users a spacious and comfortable living area, with modern design and effective construction techniques. Overall, the project stands out for its high quality and aesthetic features.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "April 2015 - December 2016",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "5 290 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "2" },
      ],
      galeri: ["/img/img177.webp", "/img/img177.webp"],
      buildings: [],
    },
    {
      id: 26,
      img: "/img/img178.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-story, 66-apartment modern residential building",
      desc: `
      Completed between December 2014 and October 2016, this project is located on a 22,516.11 m² plot of land. The project includes a single building, designed and constructed to modern construction standards. The materials and construction methods used have been carefully selected to ensure high quality and durability.
      <br><br>
      The size of the plot has been arranged to meet the project's requirements. The building meets high standards in both functionality and aesthetics, providing users with a spacious and comfortable living area. The project stands out with its modern design and effective construction techniques.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "December 2014 - October 2016",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "22 516,11 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img178.webp", "/img/img179.webp"],
      buildings: [],
    },
    {
      id: 27,
      img: "/img/img180.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Kindergarten in Ruhabat district",
      desc: `
      Completed between May 2014 and August 2015, this project is located on a 4,125.5 m² plot of land. The project includes a single building, designed and constructed to modern construction standards. The materials and construction methods used have been selected to ensure high quality and durability.
      <br><br>
      The size of the plot has been arranged according to the needs of the project, and the building meets high standards in both functionality and aesthetics. The project offers users a spacious and comfortable living area, with a focus on modern design and effective construction techniques.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "May 2014 - August 2015",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "4 125,5 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img180.webp", "/img/img181.webp"],
      buildings: [],
    },
    {
      id: 28,
      img: "/img/img182.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Cultural center in Kaka city",
      desc: `
      Completed between February 2013 and December 2014, this project is located on a 8,857.12 m² plot of land. The project includes a single building, designed and constructed to modern construction standards. The materials and construction methods used have been carefully selected to ensure high quality and durability.
      <br><br>
      The size of the plot has been arranged according to the project's requirements, and the building meets high standards in both functionality and aesthetics. The project offers users a spacious and comfortable living area and stands out with its modern design.
          `,
      detay: [
        {
          id: 1,
          title: "Year of construction",
          desc: "February 2013 - December 2014",
        },
        {
          id: 2,
          title: "Area of ​​a piece of land",
          desc: "8 857,12 m<sup>2</sup>",
        },
        { id: 3, title: "List of buildings", desc: "1" },
      ],
      galeri: ["/img/img183.webp", "/img/img184.webp", "/img/img185.webp"],
      buildings: [],
    },
  ],
  RU: [
    {
      id: 15,
      videos: "/video/dashoguz.m3u8",
      img: "/img/img139.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Многопрофильная больница в городе Дашогуз",
      desc: `
      Этот проект, построенный в период с февраля 2019 года по май 2022 года, расположен на участке площадью 49 210,75 м². В рамках проекта было построено одно здание, отличающееся современным архитектурным стилем и функциональностью. Качество использованных материалов и методы строительства были тщательно выбраны для обеспечения долговечности и надежности здания.
      <br><br>
      Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. Использование одного здания направлено на создание комфортных и эстетически приятных жилых помещений для жителей. Дизайн проекта был спланирован с учетом современных требований к жизни, предлагая как эстетические, так и функциональные преимущества.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Fewral 2019 - Maý 2022" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "49 210,75 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img139.webp", "/img/img143.webp", "/img/img141.webp"],
      buildings: [],
    },
    {
      id: 1,
      videos: "/video/binagarlik.m3u8",
      img: "/img/img5.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Туркменский государственный архитектурно-строительный институт",
      desc: `
            Туркменский государственный архитектурно-строительный институт (ТДБГИ) – молодое, 
            современное научно-проектное учебное заведение, созданное 25 мая 2012 года в 
            соответствии с Указом Президента Туркменистана. Основная задача TDBGI – подготовка 
            специалистов высокого уровня и предоставление инженеров в архитектурно-строительную, 
            госсектор, химическую, энергетическую, промышленную и дорожно-транспортную отрасли. 
            В настоящее время в институте 7 факультетов, 28 кафедр, на них обучаются более 
            4 тысяч студентов. Ежегодно в этом высшем учебном заведении обучаются более 600 специалистов.
            <br><br>
            Согласно соответствующему Постановлению, подписанному Президентом 25 августа текущего года, 
            проект этого объекта будет построен по улице Гороглы в Ашхабаде, его строительство, 
            благоустройство прилегающих территорий, модернизация существующих инженерных систем и 
            строительство новых. , член Союза промышленников и предпринимателей Туркменистана, 
            частное предприятие «Ajaýyp gurluşyk».
            <br><br>
            Также согласно документу решено сдать комплекс зданий института в сентябре 2026 года.
            <br><br>
            Продолжаются торжества по случаю Дня образования и студенческой молодежи.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "2023-2026" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "231 239 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "13" },
      ],
      galeri: [
        "/img/img5.webp",
        "/img/img50.webp",
        "/img/img52.webp",
        "/img/img54.webp",
        "/img/img56.webp",
        "/img/img57.webp",
      ],
      buildings: [
        {
          id: 1,
          img: "/img/img55.webp",
          title: "Sport toplumy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 2,
          img: "/img/img58.webp",
          title: "Naharhana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 3,
          img: "/img/img59.webp",
          title: "Sergiler merkezi",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 5,
          img: "/img/img61.webp",
          title: "Kitaphana",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 6,
          img: "/img/img62.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
        {
          id: 7,
          img: "/img/img63.webp",
          title: "Umumy ýaşaýyş jaýy",
          desc: "Türkmenistan, Aşgabat",
        },
      ],
    },
    {
      id: 2,
      img: "/img/img70.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "Жилой Комплекс Парахат-7",
      desc: `
            Этот проект, построенный в 2023-2024 годах, расположен на общей площади 40 596,72 м². 
            Проект включает в себя два здания, спроектированных в современном архитектурном стиле. 
            Обширная территория обеспечивает идеальную основу для озеленения и социальных пространств. 
            Проект направлен на создание комфортных и качественных жилых зон. Эти здания, построенные 
            по высоким стандартам, предназначены для удовлетворения потребностей пользователей.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "2023-2024" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "40 596,72 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "2" },
      ],
      galeri: [
        "/img/img65.webp",
        "/img/img66.webp",
        "/img/img67.webp",
        "/img/img68.webp",
        "/img/img69.webp",
        "/img/img70.webp",
      ],
      buildings: [],
    },
    {
      id: 3,
      img: "/img/img73.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Средняя школа в городе Дашогуз",
      desc: `
            Этот проект был завершен в период с января 2023 года по август 2023 года и занимает 
            общую площадь 5272,23 м². В рамках проекта было построено одно здание, 
            отличающееся изысканными элементами современной архитектуры.
            <br><br>
            Земля, использованная в проекте, была оптимально использована как с функциональной, 
            так и с эстетической точки зрения. Просторная площадь единственного здания, 
            в сочетании с благоустройством территории, направлена на создание комфортного и 
            современного жилого пространства для пользователей.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: [
        "/img/img71.webp",
        "/img/img72.webp",
        "/img/img73.webp",
        "/img/img74.webp",
        "/img/img75.webp",
      ],
      buildings: [],
    },
    {
      id: 4,
      img: "/img/img108.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Детский сад в городе Дашогуз",
      desc: `
          Этот проект, завершенный в период с января 2023 года по август 2023 года, расположен на участке площадью 5272,23 м². 
          Проект включает в себя одно здание, которое выделяется своей современной архитектурой. 
          В процессе строительства приоритет отдавался качеству и мастерству.
          <br><br>
          Земля, использованная в проекте, была тщательно спланирована с учетом озеленения и эстетических деталей. 
          Просторная площадь единственного здания спроектирована с учетом требований современной жизни и направлена 
          на создание комфортного жилого пространства для жителей.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "5 272,23 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: [
        "/img/img106.webp",
        "/img/img107.webp",
        "/img/img108.webp",
        "/img/img109.webp",
        "/img/img110.webp",
        "/img/img111.webp",
      ],
      buildings: [],
    },
    {
      id: 5,
      img: "/img/img112.webp",
      catId: 2,
      location: "Türkmenistan, Mary",
      title: "Средняя школа в Марыйском велаяте",
      desc: `
          Этот проект, построенный в период с января 2023 года по август 2023 года, расположен на участке 
          площадью 9 309,64 м². В рамках проекта было построено одно здание, которое выделяется среди 
          других построек региона своим современным дизайном. В процессе строительства строго соблюдались 
          высокие стандарты качества, а мастерство выполнялось с особой тщательностью.
          <br><br>
          Обширная территория проекта создает идеальные условия для озеленения и социальных пространств. 
          Просторная площадь единственного здания направлена на то, чтобы предложить жителям комфортное 
          и современное проживание. Кроме того, проект был разработан в гармонии с окружающей средой, 
          что способствует эстетической ценности района.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2023 - Awgust 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "9 309,64 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img112.webp", "/img/img113.webp"],
      buildings: [],
    },
    {
      id: 6,
      img: "/img/img114.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Средняя школа в селе Акдепе Бахерденского этрапа",
      desc: `
        Этот проект, построенный в период с сентября 2022 года по сентябрь 2023 года, расположен на участке 
        площадью 9 406,48 м². В рамках проекта было построено одно здание, которое выделяется своей 
        современной архитектурой и функциональностью. В процессе строительства приоритет отдавался качеству 
        и долговечности, что делает этот проект долгосрочной инвестицией.
        <br><br>
        Обширный участок земли, использованный в проекте, предоставляет широкие возможности для озеленения 
        и социальных пространств. Просторная площадь единственного здания направлена на то, чтобы предложить 
        пользователям комфортный и современный опыт проживания. Комбинируя эстетику и функциональность, 
        проект добавляет ценность региону.
      `,
      detay: [
        {
          id: 1,
          title: "Год постройки",
          desc: "Sentýabr 2022 - Sentýabr 2023",
        },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "9 406,48 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img114.webp", "/img/img115.webp"],
      buildings: [],
    },
    {
      id: 7,
      img: "/img/img116.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Средняя школа в городе Сейди",
      desc: `
        Этот проект, построенный в период с января 2023 года по сентябрь 2023 года, расположен на участке площадью 
        7 679,15 м². В рамках проекта было построено одно здание, которое выделяется своими современными архитектурными 
        особенностями. Качество использованных материалов и тщательность процесса строительства были приоритетными 
        для обеспечения долговечности и надежности здания.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. 
        Эти пространства направлены на то, чтобы предложить жителям комфортное и эстетически приятное место для 
        жизни. Объединяя функциональность и эстетические элементы, проект создает среду, которая соответствует 
        всем требованиям современной жизни.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2023 - Sentýabr 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "7 679,15 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img116.webp", "/img/img117.webp"],
      buildings: [],
    },
    {
      id: 8,
      img: "/img/img118.webp",
      catId: 2,
      location: "Türkmenistan, Lebap",
      title: "Средняя школа в городе Фарап",
      desc: `
        Этот проект, построенный в период с января 2023 года по сентябрь 2023 года, расположен на участке площадью 
        14 633,81 м². В рамках проекта было построено одно здание, которое выделяется своими современными 
        архитектурными деталями и инновационным дизайном. Качество использованных материалов и тщательность в 
        процессе строительства были тщательно подобраны для обеспечения долговечности и надежности здания.
        <br><br>
        Обширная территория проекта предоставляет широкие возможности для озеленения и создания социальных пространств. 
        Просторная площадь единственного здания направлена на то, чтобы предложить жителям комфортное и эстетически 
        насыщенное пространство для жизни. Кроме того, эстетические и функциональные особенности проекта разработаны 
        таким образом, чтобы удовлетворять все требования современной жизни.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2023 - Sentýabr 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "14 633,81 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img118.webp", "/img/img119.webp"],
      buildings: [],
    },
    {
      id: 9,
      img: "/img/img120.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Промышленный банк",
      desc: `
        Этот проект, построенный в период с августа 2019 года по июль 2023 года, расположен на участке площадью 4 396,52 м². 
        В рамках проекта было построено одно здание, которое выделяется своим современным дизайном и функциональностью.
        Качество использованных материалов и примененные методы в процессе строительства были тщательно выбраны для обеспечения
        долговечности и надежности здания.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. 
        Использование единственного здания направлено на то, чтобы предоставить жителям комфортное и эстетически приятное 
        жилое пространство. Дизайн проекта был спланирован для удовлетворения потребностей современного жилья, обеспечивая 
        как эстетические, так и функциональные преимущества.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "4 396,52 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img120.webp", "/img/img123.webp", "/img/img122.webp"],
      buildings: [],
    },
    {
      id: 10,
      img: "/img/img126.webp",
      catId: 4,
      location: "Türkmenistan, Arkadag",
      title: "Здание прокуратуры",
      desc: `
        Этот проект, построенный в период с ноября 2019 года по июль 2023 года, расположен на участке площадью 9 674,32 м². 
        В рамках проекта было построено одно здание, которое выделяется современным дизайном и функциональностью. 
        Качество использованных материалов и методы, примененные в процессе строительства, были тщательно выбраны 
        для обеспечения долговечности и надежности здания.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. 
        Использование единственного здания направлено на создание комфортной и эстетически приятной рабочей среды. 
        Дизайн проекта был спланирован с учетом современных требований офисов, предлагая как эстетические, так и 
        функциональные преимущества.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Noýabr 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "9 674,32 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img126.webp", "/img/img125.webp", "/img/img124.webp"],
      buildings: [],
    },
    {
      id: 11,
      img: "/img/img128.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "9-этажный жилой дом на 54 квартиры",
      desc: `
        Этот проект, построенный в период с августа 2019 года по июль 2023 года, расположен на участке площадью 24 713,38 м². 
        В рамках проекта было построено два здания, каждое из которых выделяется современным дизайном. Качество использованных 
        материалов и методы строительства были тщательно выбраны для обеспечения долговечности и надежности зданий.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. 
        Здания предназначены для создания комфортной и эстетически приятной жилой среды. Дизайн проекта был спланирован 
        с учетом современных требований проживания, предлагая как эстетические, так и функциональные преимущества.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "24 713,38 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "2" },
      ],
      galeri: ["/img/img127.webp", "/img/img129.webp", "/img/img128.webp"],
      buildings: [],
    },
    {
      id: 12,
      img: "/img/img130.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "7-этажный жилой дом на 28 квартиры",
      desc: `
        Этот проект, построенный в период с августа 2019 года по июль 2023 года, расположен на участке площадью 8 908,95 м². В рамках проекта было построено одно здание, которое выделяется современным дизайном и функциональностью. Качество использованных материалов и методы строительства были тщательно выбраны для обеспечения долговечности и надежности здания.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. Использование единственного здания направлено на создание комфортной и эстетически приятной жилой среды. Дизайн проекта был спланирован с учетом современных требований проживания, предлагая как эстетические, так и функциональные преимущества.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Awgust 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "8 908,95 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img130.webp", "/img/img131.webp"],
      buildings: [],
    },
    {
      id: 13,
      img: "/img/img132.webp",
      catId: 1,
      location: "Türkmenistan, Arkadag",
      title: "5-этажный жилой дом на 30 квартиры",
      desc: `
        Этот проект, построенный в период с ноября 2019 года по июль 2023 года, расположен на участке площадью 22 272,64 м². В рамках проекта было построено три здания, каждое из которых отличается современным дизайном и функциональностью. Качество использованных материалов и методы строительства были тщательно выбраны для обеспечения долговечности и надежности зданий.
        <br><br>
        Обширная территория предоставляет широкие возможности для озеленения и создания социальных пространств. Использование трёх зданий направлено на создание комфортных и эстетически приятных жилых помещений для жителей. Дизайн проекта был спланирован с учетом современных требований к жизни, предлагая как эстетические, так и функциональные преимущества.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Noýabr 2019 - Iýul 2023" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "22 272,64 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "3" },
      ],
      galeri: ["/img/img132.webp", "/img/img133.webp"],
      buildings: [],
    },
    {
      id: 14,
      img: "/img/img134.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title:
        "Дворец государственных чиновников имени шейха Зайеда бин Султана Аль Нахайяна",
      desc: `
      Этот проект, построенный в период с июня 2022 года по декабрь 2022 года, расположен на участке площадью 17 002,81 м². В рамках проекта было построено одно здание, спроектированное в соответствии с современными архитектурными принципами, отличающееся как эстетическими, так и функциональными особенностями. Материалы, использованные во время строительства, были отобраны в соответствии с высокими стандартами качества, что гарантирует долговечность и надежность здания.
      <br><br>
      Обширная территория предоставляет широкие возможности для озеленения и создания различных социальных пространств. Использование одного здания было спроектировано таким образом, чтобы организовать жилые помещения комфортно, безопасно и современно. Общая структура проекта была тщательно продумана с учетом современных требований к жизни, предлагая значительные преимущества как с точки зрения эстетики, так и функциональности.
      `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Iýun 2022 - Dekabr 2022" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "17 002,81 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: [
        "/img/img134.webp",
        "/img/img135.webp",
        "/img/img136.webp",
        "/img/img137.webp",
        "/img/img138.webp",
      ],
      buildings: [],
    },
    {
      id: 16,
      img: "/img/img144.webp",
      catId: 3,
      location: "Türkmenistan, Daşoguz",
      title: "Онкологическая больница в городе Дашогуз",
      desc: `
      Завершенный в период с февраля 2019 года по май 2022 года, этот проект расположен на участке площадью 21 637,93 м². В рамках проекта было построено одно здание, которое тщательно спроектировано с использованием современных строительных технологий. Материалы были тщательно отобраны, чтобы обеспечить долговечность и надежность здания.
      <br><br>
      Этот просторный участок предоставляет различные возможности для создания зеленых зон и общественных удобств. Использование одного здания было спланировано таким образом, чтобы обеспечить комфортные и функциональные жилые помещения для жителей. Общая структура проекта сочетает эстетику и функциональность, адаптированную к потребностям современной жизни.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Fewral 2019 - Maý 2022" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "21 637,93 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: [
        "/img/img144.webp",
        "/img/img145.webp",
        "/img/img146.webp",
        "/img/img147.webp",
        "/img/img148.webp",
        "/img/img149.webp",
      ],
      buildings: [],
    },
    {
      id: 17,
      img: "/img/img150.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Современная зона отдыха для детей",
      desc: `
      Завершенный в период с августа 2021 года по июнь 2022 года, этот проект расположен на участке площадью 524,89 м². В рамках проекта было построено одно здание, которое тщательно спроектировано с использованием современных технологий дизайна и строительства. Качество используемых материалов было выбрано для обеспечения высоких стандартов как с точки зрения эстетики, так и функциональности.
      <br><br>
      Обширная территория была спроектирована как современная зона отдыха для детей, предлагающая различные игровые площадки и подходящие пространства для социальных активностей. Одно здание в этом проекте предназначено для создания безопасной и приятной обстановки, обеспечивая комфортное пространство как для детей, так и для их семей.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Awgust 2021 - Iýun 2022" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "524,89 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img150.webp", "/img/img151.webp", "/img/img152.webp"],
      buildings: [],
    },
    {
      id: 18,
      img: "/img/img154.webp",
      catId: 2,
      location: "Türkmenistan, Daşoguz",
      title: "Средняя школа в городе Дашогуз",
      desc: `
      Завершенный в период с февраля 2022 года по сентябрь 2022 года, этот проект расположен на участке площадью 6 949,03 м². В рамках проекта было построено одно здание, которое спроектировано в соответствии с современными строительными стандартами. Качество используемых материалов обеспечивает как долговечность, так и высокие эстетические стандарты.
      <br><br>
      Этот проект был спроектирован как средняя школа в городе Дашогуз. Просторный участок был организован так, чтобы предоставить подходящие образовательные и социальные пространства для учеников и преподавателей. Одно здание было спланировано с учетом всех необходимых оснащений и возможностей для образовательных мероприятий, что улучшает как качество образования, так и комфорт пользователей.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Fewral 2022 - Sentýabr 2022" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "6 949,03 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img154.webp"],
      buildings: [],
    },
    {
      id: 19,
      videos: "/video/sport-desgalar.m3u8",
      img: "/img/img155.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title:
        "Спортивные сооружения, жилое здание общего назначения и сопутствующие объекты",
      desc: `
      Завершенный в период с апреля 2018 года по сентябрь 2020 года, этот проект расположен на участке площадью 57 153,12 м². Проект включает в себя четыре здания, спроектированных как спортивные сооружения, жилые здания общего назначения и сопутствующие объекты. Каждое здание было спроектировано и построено в соответствии с современными строительными стандартами.
      <br><br>
      Обширная территория проекта предоставляет подходящие пространства как для спортивных мероприятий, так и для комфортного проживания. Здания спроектированы таким образом, чтобы удовлетворить потребности пользователей, предлагая интегрированную структуру со спортивными залами, общественными пространствами и жилыми единицами. Этот проект вносит значительный вклад в общественную жизнь и спортивные мероприятия.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Aprel 2018 - Sentýabr 2020" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "57 153,12 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "4" },
      ],
      galeri: [
        "/img/img155.webp",
        "/img/img156.webp",
        "/img/img157.webp",
        "/img/img158.webp",
      ],
      buildings: [],
    },
    {
      id: 20,
      img: "/img/img159.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-этажный современный жилой дом на 72 квартиры",
      desc: `
      Завершенный в период с марта 2018 года по ноябрь 2020 года, этот проект расположен на участке площадью 25 336,42 м². Проект включает одно здание, спроектированное и построенное в соответствии с современными стандартами жилых зданий. Использованные материалы и строительные технологии были тщательно выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Обширная территория была организована для предоставления комфортного и эстетически приятного жилого пространства. 12-этажный современный жилой дом на 72 квартиры соответствует высоким стандартам как по функциональности, так и по эстетике. Здание предлагает жителям просторные и удобные жилые площади, обеспечивая высокий уровень качества жизни.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Mart 2018 - Noýabr 2020" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "25 336,42 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img159.webp", "/img/img160.webp"],
      buildings: [],
    },
    {
      id: 21,
      img: "/img/img161.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-этажный современный жилой дом на 72 квартиры",
      desc: `
      Завершенный в период с марта 2018 года по ноябрь 2020 года, этот проект расположен на участке площадью 25 894,37 м². Проект включает одно здание, спроектированное и построенное в соответствии с современными стандартами жилых зданий. Использованные материалы и строительные методы были выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Обширная территория была организована для предоставления комфортного и эстетически приятного жилого пространства. 12-этажный современный жилой дом на 72 квартиры соответствует высоким стандартам как по функциональности, так и по эстетике. Здание предлагает жителям просторные и удобные жилые площади, обеспечивая высокий уровень качества жизни.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Mart 2018 - Noýabr 2020" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "25 894,37 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img161.webp", "/img/img162.webp"],
      buildings: [],
    },
    {
      id: 22,
      img: "/img/img163.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Средняя школа в селе Бабарап, район Гекдепе",
      desc: `
      Завершенный в период с ноября 2017 года по сентябрь 2021 года, этот проект расположен на участке площадью 10 096,28 м². Проект включает одно здание, спроектированное и построенное в соответствии с современными образовательными стандартами. Использованные материалы и строительные методы были тщательно выбраны для обеспечения долговечности и высокого качества.
      <br><br>
      Обширная территория была организована для создания подходящей среды для образовательных мероприятий. Здание соответствует высоким стандартам как по функциональности, так и по эстетике, предоставляя учащимся просторное и комфортное учебное пространство. Проект направлен на повышение качества образования и предоставление учащимся современных условий для обучения.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Noýabr 2017 - Sentýabr 2021" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "10 096,28 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img163.webp", "/img/img164.webp", "/img/img165.webp"],
      buildings: [],
    },
    {
      id: 23,
      img: "/img/img167.webp",
      catId: 4,
      location: "Türkmenistan, Aşgabat",
      title: "Частная компания “Ajaýyp-gurluşyk”",
      desc: `
      Завершенный в период с января 2017 года по февраль 2018 года, этот проект расположен на участке площадью 5 112,46 м². Проект включает одно здание, спроектированное и построенное в соответствии с современными стандартами. Использованные материалы и строительные методы были выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с целью проекта. Здание соответствует высоким стандартам как по функциональности, так и по эстетике, предоставляя пользователям просторное и комфортное жилое пространство. Проект выделяется своим сочетанием качественного строительства и эстетического дизайна, обеспечивая современный и комфортный опыт.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Ýanwar 2017 - Fewral 2018" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "5 112,46 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: [
        "/img/img167.webp",
        "/img/img168.webp",
        "/img/img169.webp",
        "/img/img170.webp",
        "/img/img171.webp",
        "/img/img172.webp",
      ],
      buildings: [],
    },
    {
      id: 24,
      img: "/img/img173.webp",
      catId: 3,
      location: "Türkmenistan, Ahal",
      title: "Международный карантинный центр",
      desc: `
      Завершенный в период с июня 2015 года по октябрь 2016 года, этот проект расположен на участке площадью 4 150 м². Проект включает одно здание, спроектированное и построенное в соответствии с современными стандартами. Использованные материалы и строительные методы были выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с потребностями проекта. Здание соответствует высоким стандартам как по функциональности, так и по эстетике, предоставляя пользователям просторное и комфортное пространство. Проект сочетает эффективное строительство с эстетическим дизайном, создавая заметную особенность.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Iýun 2015 - Oktýabr 2016" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "4 150 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img173.webp", "/img/img175.webp", "/img/img176.webp"],
      buildings: [],
    },
    {
      id: 25,
      img: "/img/img177.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "3-этажные жилые здания с 6 квартирами",
      desc: `
      Завершенный в период с апреля 2015 года по декабрь 2016 года, этот проект расположен на участке площадью 5 290 м². В рамках проекта было построено два здания, спроектированных и построенных в соответствии с современными строительными стандартами. Использованные материалы и методы строительства были выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с проектом, а здания соответствуют высоким стандартам как по функциональности, так и по эстетике. Проект предоставляет пользователям просторное и комфортное жилое пространство, отличающееся современным дизайном и эффективными строительными техниками. В общем, проект выделяется высоким качеством и эстетическими особенностями.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Aprel 2015 - Dekabr 2016" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "5 290 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "2" },
      ],
      galeri: ["/img/img177.webp", "/img/img177.webp"],
      buildings: [],
    },
    {
      id: 26,
      img: "/img/img178.webp",
      catId: 1,
      location: "Türkmenistan, Aşgabat",
      title: "12-этажный современный жилой дом с 66 квартирами",
      desc: `
      Завершенный в период с декабря 2014 года по октябрь 2016 года, этот проект расположен на участке площадью 22 516,11 м². В рамках проекта было построено одно здание, спроектированное и построенное в соответствии с современными строительными стандартами. Использованные материалы и методы строительства были тщательно выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с потребностями проекта. Здание соответствует высоким стандартам как по функциональности, так и по эстетике, предоставляя пользователям просторное и комфортное жилое пространство. Проект выделяется современным дизайном и эффективными строительными технологиями.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Dekabr 2014 - Oktýabr 2016" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "22 516,11 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img178.webp", "/img/img179.webp"],
      buildings: [],
    },
    {
      id: 27,
      img: "/img/img180.webp",
      catId: 2,
      location: "Türkmenistan, Aşgabat",
      title: "Детский сад в районе Руабат",
      desc: `
      Завершенный в период с мая 2014 года по август 2015 года, этот проект расположен на участке площадью 4 125,5 м². В рамках проекта было построено одно здание, спроектированное и построенное в соответствии с современными строительными стандартами. Использованные материалы и методы строительства были выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с потребностями проекта, а здание соответствует высоким стандартам как по функциональности, так и по эстетике. Проект предоставляет пользователям просторное и комфортное жилое пространство, с акцентом на современный дизайн и эффективные строительные технологии.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Maý 2014 - Awgust 2015" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "4 125,5 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img180.webp", "/img/img181.webp"],
      buildings: [],
    },
    {
      id: 28,
      img: "/img/img182.webp",
      catId: 2,
      location: "Türkmenistan, Ahal",
      title: "Культурный центр в городе Каka",
      desc: `
      Завершенный в период с февраля 2013 года по декабрь 2014 года, этот проект расположен на участке площадью 8 857,12 м². В рамках проекта было построено одно здание, спроектированное и построенное в соответствии с современными строительными стандартами. Использованные материалы и методы строительства были тщательно выбраны для обеспечения высокого качества и долговечности.
      <br><br>
      Размер участка был организован в соответствии с потребностями проекта, и здание соответствует высоким стандартам как по функциональности, так и по эстетике. Проект предоставляет пользователям просторное и комфортное жилое пространство и выделяется своим современным дизайном.
          `,
      detay: [
        { id: 1, title: "Год постройки", desc: "Fewral 2013 - Dekabr 2014" },
        {
          id: 2,
          title: "Площадь земельного участка",
          desc: "8 857,12 m<sup>2</sup>",
        },
        { id: 3, title: "Список зданий", desc: "1" },
      ],
      galeri: ["/img/img183.webp", "/img/img184.webp", "/img/img185.webp"],
      buildings: [],
    },
  ],
};