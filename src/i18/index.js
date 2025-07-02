import { createI18n } from "vue-i18n";

const messages = {
  TM: {
    links: {
      home: "Baş sahypa",
      about: "Biz barada",
      works: "Biziň işlerimiz",
      services: "Hyzmatlarymyz",
      contact: "Habarlaşmak",
      hepsi: "Hemmesi",
      guvenlik: "Iş saglygy we howpsuzlyk",
      cevre: "Daşky gurşaw",
      cesitlilikVeEsitlilik: "Dürlülik we deňlik",
      raporlar: "Hasabat",
      partnerler: "Hyzmatdaşlyklarymyz we hyzmatdaşlarymyz",
      kariyer: "Hünär",
      bashvurmak: "Hasaba durmak",
      paylash: "Paylaş"
    },
    titles: {
      anaBashlik: "Ajaýyp Gurluşyk: Tejribe we müşderi kanagatlandyrmasy",
      faaliyetAlanlarimiz: "Iş ugurlarymyz",
      sirketFaaliyeti: "Biziň Kompaniýamyzyň iş ugurlary",
      bizimRakamlarimiz: "Biziň Görkezijilerimiz",
      mukemmellik: "Ajaýyplygymyzyň taryhy",
      about: "Biz barada",
      tejrubemiz: "Tejribämiz",
      degerlerimiz: "Gymmatlyklarymyz",
      altyapiUstyapi: "Infrastruktura - Üsti gurluş",
      endustriel: "Senagat",
      saglik: "Saglyk",
      konutInsat: "Jaý gurluşygy",
      ishletmeHizmetleri: "Iş hyzmatlary",
      yonetim: "Dolandyryş merkezleri",
      hikayemiz: "Taryhymyz",
      grupDegerleri: "Ajaýyp Gurluşyk toparynyň gymmatlyklary",
      guvenirlik: "Ygtybarlylyk",
      hesapVerebilirlik: "Jogapkärçilik",
      aramak: "Näme gözlemek isleýärsiňiz?",
      ilishkiler:
        "Hyzmatdaşlarymyz, üpjün edijilerimiz we müşderilerimiz bilen uzak möhletli gatnaşyklar gurmagy maksat edinýäris.",
      uretimimiz: "Biziň Önümlerimiz",
      ortaklarimiz: "Hyzmatdaşlarymyz",
      telefon: "Telefon belgisi",
      ofis: "Ofis salgysy",
      projeBinalar: "Taslama binalary",
      benzerHaberler: "Meňzeş habarlar",
      katilmak: "Ajaýyp Gurluşyk toparyna goşulmak bu:",
      pozisyon: "Boş iş orunlary",
      belge: "Ylalaşyk"
    },
    subtitles: {
      hakkinda: "Hakynda",
      detay: "Maglumaty",
      galeri: "Suratlar",
      yenilikci: "Täzelikçi",
      rekabetci: "Bäsdeşlik",
      dayanikli: "Çydamly",
      faaliyet: "Ajaýyp Gurluşyk, Türkmenistanda işleýär.",
      ara: "Gözle...",
      proje: "Taslama",
      emniyet: "Howpsuzlyk",
      onceki: "Öňki",
      sonraki: "Indiki",
      ortaklarimiz:
        "Her bir müşderiniň uzak möhletli hyzmatdaşlygydygyna ynanýarys.",
      isminiz: "Adyňyz",
      eposta: "E-poçta adresi",
      mesaj: "Habar",
      gonder: "Ugrat",
    },
    descriptions: {
      sirketFaaliyeti_1:
        "Döwrebap we innowasiýa ýaşaýyş jaý taslamalaryny ösdürmek bilen, ýaşaýyş ýerleriňizi has amatly we estetiki edýäris. Her jikme-jiklikde hil we howpsuzlygy ileri tutup, maşgalalaryň asuda ýaşap biljek jaýlaryny gurýarys.",
      sirketFaaliyeti_2:
        "Işewür dünýäsiniň zerurlyklaryny kanagatlandyrýan işleýän we abraýly söwda binalaryny gurýarys. Ofis binalaryndan başlap söwda merkezlerine çenli işiňize goşant goşjak köp sanly taslamany hödürleýäris.",
      sirketFaaliyeti_3:
        "Her taslamada, müşderileriň kanagatlylygyny we hilini iň ýokary derejede saklamak bilen arzuwlaryňyzy amala aşyrýarys. Gurluşyk pudagynda toplan tejribämiz we hünärmen işgärlerimiz bilen, size iň oňat çözgütleri hödürlemek üçin geldik.",
      mukemmellik_desc:
        "Döredileli bäri, işimizi gowy ýerine ýetirmek, hemişe özümizi kämilleşdirmek we wadalarymyzy ýerine ýetirmek bilen gurluşyk pudagyny oňyn görnüşde özgertmek üçin bar güýjümiz bilen işleýäris. Işgärlerimiziň dürlüligi bilen 64 dürli ýurtdan 30 000-den gowrak adamdan güýjümizi çekip, iş dürlüligimizi goldaýarys.",
      tejrubemi_desc:
        "Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Müşderilerimize her taslama üns bilen çemeleşip, ýokary hilli hyzmat bermegi maksat edinýäris. Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Her taslama seresaplylyk bilen ýüz tutup, müşderilerimize ýokary hilli hyzmat bermek.",
      yenilikci_desc:
        "Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Her taslama seresaplylyk bilen çemeleşip, müşderilerimize ýokary hilli üpjün edýäris.",
      rekabetci_desc:
        "Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Her taslama üns bilen çemeleşip, müşderilerimize.",
      dayanikli_desc:
        "Biziň kompaniýamyz kämillige we tejribä ygrarlylygy bilen tanalýar. Her taslama seresaplylyk bilen çemeleşip, müşderilerimize ýokary hilli üpjün edýäris.",
      emniyet_desc:
        "4 ýyldyzly “Gold” iCIRT kompaniýasy hökmünde howpsuzlyk her kimiň jogapkärçiligidir we elmydama beýlekilerden ileri tutular. Howpsuzlyk biziň edýän her bir işimiziň özenidir.",
      guvenirlik_desc:
        "4 ýyldyzly “Gold” iCIRT kompaniýasy hökmünde howpsuzlyk her kimiň jogapkärçiligidir we elmydama beýlekilerden ileri tutular. Howpsuzlyk biziň edýän her bir işimiziň özenidir.",
      hesapVerebilirlik_desc:
        "Gurýan binalarymyz, alyp barýan işlerimiz we edýän netijelerimiz üçin jogapkärdiris. Binalarymyz uzak wagtlap şol ýerde we müşderilerimize we jaýlarymyzy eýelänlere hormat goýýarys.",
      ilishkiler_desc:
        "Her taslamada, müşderileriň kanagatlylygyny we hilini iň ýokary derejede saklamak bilen arzuwlaryňyzy amala aşyrýarys. Gurluşyk pudagynda.",
      uretimimiz_desc:
        "Dürli gurluşyk taslamalaryňyz üçin hekden kerpiçden, betondan semente çenli önümlerimiziň köp görnüşi bilen hyzmat edýäris. Yourhli zerurlyklaryňyza laýyk çözgütler hödürlemek we taslamalaryňyza goşant goşjak ýokary hilli önümlerimizi tapmak üçin biziň bilen habarlaşyň.",
      kariyer_desc:
        "Ajaýyp Gurlu göz hökmünde biz gurluşyk taslamasyny başlangyç etapdan başlap iş döwrüne çenli meýilleşdirmäge, ösdürmäge we ýerine ýetirmäge ukyply in engineeringenerçilik firmasydyrys.",
    },
    statistics: {
      tecrube: "Tejribe",
      calisanlar: "Işgärleriň sany",
      cesitlilik: "Işgärleriň dürlüligi",
      milletden: "Milletden",
      kiralanabilir: "Eýe edilip bilinjek meýdan",
      sozleshme: "Iň uly şertnamanyň mukdary",
      calishma: "2023-nji ýylda jemi iş",
    },
    production: {
      titles: {
        kalite: "Alkim",
        kirec: "Mebel önümleri'",
      },
      subtitles: {
        boyut: "Ölçeg",
        basinc: "gysyjy güýç",
        agirlik: "Agram",
        su: "Suwuň siňdirilmegi",
      },
      descriptions: {
        kalite_desc:
          "Keramiki plitkalar üçin berkidiji gury gurluşyk garyndysy",
        kirec_desc:
          "Ýokary hilli öý we ofis mebelleri",
      },
    },
    services: {
      security: {
        title: "Iş Sağlygy we Howpsuzlygyny (İSG) mejburiyet däl-de, vicdany jogapkärçilik hökmünde görýäris",
        desc1: `Howpsuz iş gurşawynyň ygtybarly, güýçli we durnukly bir guramanyň esasy bolmagyna we işgärlerine, gatnaşyjylaryna we aragatnaşykda bolan her bir adama öňünden ýüze çykyp biljek zyýany öňüni almagyň mümkindigine ynanýarys. Dünýäniň dürli ýerlerinde hyzmat edýän her bir işgärimiziň işini howpsuzlyk bilen tamamlamagy we öýlerine saglykly ýagdaýda dönmegi üpjün etmek iň möhüm jogapkärçiligimizdir.
        <br><br>
        İSG dolandyryşy kompaniýanyň esasy gymmatlyklary we ýerine ýetiriş ölçegleriniň arasynda ýerleşýär, dolandyryş 
        goşunynyň derejesinde görkezilýär.
        <br><br>
        Rönesansyň her bir işgäriniň howpsuzlykly bir gurşawda iş başlama ýa-da işini togtatma hukugy bardyr.
        <br><br>
        <b class="phone:text-xl text-lg">İSG çägindäki esasy ýörelgelerimiz we gymmatlyklarymyz;</b>
        <br><br>`,
        desc2: `<li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Iş howpsuzlygy boýunça mysal görkezýän we eýeleýän dolandyryjylar</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Davamly ösüşi we öňüni alyş risk dolandyryşyny esas alan dolandyryş görnüşi</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Bilinçli we okuwly işgärler</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Subkontraktorlary ulgama goşmak we ýerine ýetirilişini yzarlamak</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Baglanyşyk we ýerine ýetirilişini yzarlamak</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Iyi amallary höweslendirmek we sylaglamak</li>`,
        desc3: `<b class="text-xl">İSG Okuwy</b>
        <br><br>
        İSG babatynda işläp düzdügimiz amallar we dowamly okuw programmalary bilen ähli işgärlerimiziň İSG medeniýetini ösdürýäris.
        <br><br>
        Oryantasiýa okuwyndan başlap, kanuny okuwlar, davranış merkezli okuwlar we iş ýörelgelerine mahsus tehniki okuw programmalar bilen yzygiderli ihtiyaç we talaplara görä meýilleşdirilip dowam etdirilýär.
        <br><br><br>
        <span class="italic">
             “2018-2021 TRIFR we LTIFR görkezijilerimizi Amerikan İş Güýç Statistics Bürosy (BLS) gurluşyk pudagynyň gymmatlaryny deňeşdireniňde, TRIFR görkezijimiz ortaça 3.1 esse we LTIFR görkezijimiz bolsa takmynan 6.4 esse has gowy ýerine ýetirdi.”
        </span>`,
        desc4: `<b class="phone:text-2xl text-xl">Proýekt Dolandyryşy we Gurluşyk meýilnamasy</b>
        <br><br>
        Şirketimiz, döwrebap okuw zerurlyklaryna laýyklykda tasarlanan we gurulýan prestijli bir okuw ýerini üstünlikli tamamlady. Bu proýekt, öňdebaryjy tehnologiýa bilen üpjün edilen, daşky gurşawy goraýan we dowamly gurluşy bilen üns çekýär.`
      },
      environment: {
        title: 'Durnukly Geljek Üçin Daşky Gurşawa Dostlukly Gurluşyk Çözgütleri: Senagat Kompaniýamyzyň Tebigata we Jemgyýete Jogapkärçiligi',
        desc1: `Senagat kompaniýamyz, daşky gurşawa hormat goýmak arkaly öz işlerini alyp barýan öňdebaryjydyr. Gurluşyk proseslerimizde, daşky gurşawa zyýan bermeýän materiallary ulanmak arkaly uglerod yzlaryny azaltmaga çalyşýarys. Energiýanyň tygşytly ulanylmagyny üpjün etmekde takyk işlemäge, durnukly geljek üçin täzelenip bilýän energiýa çeşmelerine maýa goýmakda goşant goşýarys. Taslamalarymyzda, tebigy çeşmeleri goramaga ileri tutýarys we daşky gurşaw dolandyryşy ýörelgelerini takyklyk bilen ýerine ýetirýäris. 
      <br><br>
      Daşky gurşawa bolan wepalylygymyz diňe bir gurluşyk proseslerinde däl, eýsem iş alyp barýan usulymyzda hem öz beýanyny tapýar. Galyndy dolandyryş ulgamymyz, minimal galyndy ýörelgesine esaslanýar we gaýtadan işleýiş proseslerine ähmiýet berýäris. Işçilerimiziň daşky gurşaw habardarlygyny ýokarlandyrmak maksady bilen yzygiderli okuwlary gurýarys we ähli hyzmatdaşlarymyzy daşky gurşawa dostlukly amallara höweslendirýäris. Kompaniýamyzyň ähli proseslerinde daşky gurşawy durnuklylyk esasy gymmatlyk hökmünde kabul edilýär.`,
        desc2: `Senagat taslamalarymyzda, daşky gurşawa täsirleri iň aza düşürmek üçin öňdebaryjy tehnologiýalary ulanýarys. Daşky gurşawa zyýan bermeýän taslama ýörelgelerine esaslanan taslamalarymyz, daşky gurşawa zyýan bermeýän çözgütleri hödürleýär. Mundan başga-da, ýaşyl meýdanlary gorap, tebigat bilen sazlaşykly ýaşaýyş ýerlerini gurýarys. Bu çemeleşmämiz diňe bir şu günüň däl, eýsem geljek nesilleriň hem sagdyn we durnukly daşky gurşawda ýaşamagyny maksat edinýär. 
      <br><br>
      Jogapkärçilik duýgusy bilen hereket edýän kompaniýa hökmünde, daşky gurşaw öndürijiligimizi yzygiderli gözegçilikde saklaýarys we gowulandyrýarys. Her taslamada daşky gurşawa täsirleri göz öňünde tutýarys we bu täsirleri iň aza düşürmek üçin zerur ädimleri ädýäris. Kompaniýamyzyň daşky gurşawa dostlukly taslamalara bolan ygrarlylygy, jemgyýete we tebigata bolan jogapkärçiligimiziň görkezijisidir. Gelejege has arassa, sagdyn we durnukly dünýä goýmak maksady bilen işimizi dowam etdirýäris.`
      },
      variation: {
        title: 'Iş Ýerinde Çeşitlilik we Deňlik: Her Kişi Üçin Adalatly we Hemmetaraplaýyn Geljek',
        desc1: `Kompaniýamyz, dürli-dürli bolmak we deňlik ýörelgelerini iş ediş medeniýetimiziň merkezine
        ýerleşdirdi. Biziň ähli işgärlerimiziň deň mümkinçiliklere eýe bolýan, hormat we düşünişmek
        höküm sürýän iş gurşawyny döredýäris. Dürli medeniýetler, tejribeler we garaýyşlaryň baýlygyna
        ynanýarys we bu dürli-dürlüligi iş amallarymyza goşýarys. Her bir adamyň özüni gymmatly duýýan
        gurşaw döretmek, biziň iň esasy ileri tutulýan ugurlarymyzdandyr.
        <br><br>
        Çeşitliligiň innowasiýa we döredijiligi ösdürýändigine ynanýarys we bu ugurda dürli geçmişli
        şahslary toparymyza goşýarys. Deňlik ýörelgesi diňe işe kabul etmek amallarymyzda däl, eýsem
        wezipe bellemek, aýlyk we iş şertlerinde hem öz beýanyny tapýar. Işgärlerimiziň mümkinçiliklerini
        iň gowy görnüşde görkezmekleri üçin zerur ähli çeşmeleri üpjün edýäris. Her adamyň sesiniň eşidilip,
        açyk aragatnaşyk kanallaryna eýe bolan iş gurşawyny döredýäris.
        <br><br>`,
        desc2: `Içki okuwlarymyzda, dürli-dürlülik we deňlik meselesine aýratyn ähmiýet berýäris we bu
        gymmatlyklaryň ähli işgärlerimiz tarapyndan kabul edilmegini üpjün edýäris. Liderlik toparymyzda
        jyns, etnik gelip çykyş we beýleki dürli-dürlülik elementleriniň deňagramly paýlanyşyny üpjün
        etmek üçin çalyşýarys. Iş ýerinde hiç hili diskriminasiýa ýüze çykarmaga çydam etmeýäris we
        hemmeleriň deň hukuga eýe bolandygyny kepillendirýäris. Dürli-dürlülik, iş güýjümiziň hilini
        we kompaniýamyzyň bäsdeşlik ukybyny artdyrýan esasy elementlerden biridir.
        <br><br>
        Jemgyýetde jyns deňligi boýunça öňdebaryjy roly öz üstümize alýarys we aýallaryň we beýleki
        mümkinçiligi çäklendirilen toparlaryň iş durmuşynda has köp wekilçilik edilmegi üçin işler
        alyp barýarys. Bu nukdaýnazardan, iş ýerinde jyns deňligini üpjün etmek we dürli-dürlüligi
        ýokarlandyrmak üçin strategiki meýilnamalary işläp düzýäris. Işdeşlerimiziň dürli-dürlüliklerine
        hormat goýýarys we bu dürli-dürlülikleriň iş netijelerine oňyn täsirini höweslendirýäris.
        Her adamyň özüni howpsuz we hormat goýulýan bir şahsyýet hökmünde duýýan iş gurşawyny döretmek,
        biziň üstünliklerimiziň açarydyr.`,
        desc3: `
        Kompaniýamyz, jemgyýetçilik jogapkärçiligi bilen diňe bir iş ýerinde däl, eýsem jemgyýetde-de
        dürli-dürlülik we deňlik ýörelgelerini ornaşdyrmagy maksat edinýär. Işgärlerimiziň, dürli-dürlüligi
        we deňligi goldaýan taslamalara gatnaşmagyny höweslendirýäris. Iş ýerinde adalatly dolandyryş
        ýörelgesini kabul etmek bilen, hemmeleriň hukuklaryny goraýarys. Geljege, has deň, adalatly we
        dürli-dürli bir iş dünýäsi goýmak maksady bilen işimizi dowam etdirýäris.`
      },
      partners: {
        title: 'Güýçli hyzmatdaşlyklar we strategik hyzmatdaşlyklar bilen durnukly üstünliklere tarap ädimler',
        desc1: `Kompaniýamyz, güýçli hyzmatdaşlyklar we strategik hyzmatdaşlyklar bilen üstünliklerini durnukly
        edýär. Hyzmatdaşlarymyz bilen gurýan berk gatnaşyklar, umumy maksatlara ýetmekde bizi elmydama öňe
        alyp barýar. Innowasiýa we hil boýunça hyzmatdaşlyklar, pudagymyzdaky bäsdeşlik ukybymyzy ýokarlandyrýar. Uzyn möhletli hyzmatdaşlyklar, özara ynam we hyzmatdaşlyk düşünjesi bilen gurulýar.
        <br><br>
        Biz iş hyzmatdaşlarymyz bilen bilelikde innowasion taslamalary ösdürýäris we pudagyň iň gowy
        tejribelerini durmuşa geçirýäris. Her bir hyzmatdaşymyz, kompaniýamyzyň gymmatlyk zynjyryna möhüm goşant goşýar. Hyzmatdaşlarymyz bilen açyk aragatnaşyk we täsirli utgaşdyrma arkaly üstünlikli taslamalara gol goýýarys. Global we ýerli hyzmatdaşlar bilen gurýan hyzmatdaşlyklarymyz, bize dürli bazarlary we mümkinçilikleri açýar.
        <br><br>`,
        desc2: `Hyzmatdaşlyklar, özara bilim we tejribe paýlaşmagyny höweslendirýän güýçli bir tor döretýär. Bile işleşýän kompaniýalar bilen, durnukly ösüş maksatlaryna bilelikde ýetmegi maksat edinýäris. Hyzmatdaşlarymyz bilen bilelikde alyp barýan taslamalarymyz, pudagymyzdaky öňdebaryjy ornumyzy pugtalandyrýar. Hyzmatdaşlyklar, diňe söwda gazanjyny gazanmakdan başga-da, jemgyýete we daşky gurşawa hem gymmatlyk goşýar.`,
        desc3: `Ynamdar we uzak möhletli hyzmatdaşlyklar gurmak, strategik meýilnamamyzyň merkezinde durýar. Her bir hyzmatdaşymyz kompaniýamyzyň üstünliklerine göni goşant goşup, iş proseslerimizi has täsirli edýär. Hyzmatdaşlyk düşünjämiz açyk aragatnaşyga we özara peýda düşünjesine esaslanýar. Hyzmatdaşlarymyz bilen gurýan berk baglarymyz, krizis döwründe hem çeýeligi we durnuklylygy üpjün edýär.
        <br><br>
        Kompaniýamyz, hyzmatdaşlarymyzyň üstünliklerini öz üstünliklerimiz hökmünde görýär we bu düşünje bilen hereket edýär. Hyzmatdaşlyklarymyz, täze tehnologiýalara we bazarlara elýeterliligimizi çaltlandyrýar. Hyzmatdaşlarymyz bilen bilelikde, müşderi kanagatlanmasyny iň ýokary derejä ýetirmek üçin yzygiderli täzelikleri ösdürýäris. Iş dünýäsinde dowamly we täsirli netijeler gazanmak üçin, ynamdar we strategik hyzmatdaşlar bilen işleşmegi dowam etdirýäris.`
      }
    }
  },
  EN: {
    links: {
      home: "Home page",
      about: "About us",
      works: "Our Works",
      services: "Services",
      contact: "Contact",
      hepsi: "All",
      guvenlik: "Occupational health and Safety",
      cevre: "Environment",
      cesitlilikVeEsitlilik: "Diversity and Equality",
      raporlar: "Reports",
      partnerler: "Our Collaborations and Partners",
      kariyer: "Career",
      bashvurmak: "To apply",
      paylash: "Share"
    },
    titles: {
      anaBashlik: "Ajaýyp Gurluşyk: Expertise and Customer Satisfaction",
      faaliyetAlanlarimiz: "Our Fields of Activity",
      sirketFaaliyeti: "Our Company's fields of activity",
      bizimRakamlarimiz: "Our statistics",
      mukemmellik: "History of Our Excellence",
      about: "About us",
      tejrubemiz: "Our experience",
      degerlerimiz: "Our values",
      altyapiUstyapi: "Infrastructure - Superstructure",
      endustriel: "Industrial",
      saglik: "Health",
      konutInsat: "Residential Construction",
      ishletmeHizmetleri: "Business services",
      yonetim: "Administrative centers",
      hikayemiz: "Our story",
      grupDegerleri: "Ajaýyp Gurluşyk Construction Group Values",
      guvenirlik: "Reliability",
      hesapVerebilirlik: "Accountability",
      aramak: "What do you want to search for?",
      ilishkiler:
        "We are committed to building long-term relationships with our partners, suppliers and customers.",
      uretimimiz: "Our Productions",
      ortaklarimiz: "Our Partners",
      telefon: "Phone number",
      ofis: "Office address",
      projeBinalar: "Project Buildings",
      benzerHaberler: "Similar News",
      katilmak: "Joining Ajaýyp Gurluşyk's team is this:",
      pozisyon: "Vacancies",
      belge: "Agreement"
    },
    subtitles: {
      hakkinda: "About",
      detay: "Detail",
      galeri: "Gallery",
      yenilikci: "Innovator",
      rekabetci: "Competitive",
      dayanikli: "Resistant",
      faaliyet: "Ajaýyp Gurluşyk operates in Turkmenistan.",
      ara: "Search...",
      proje: "Project",
      emniyet: "Safety",
      onceki: "Prev",
      sonraki: "Next",
      ortaklarimiz:
        "We believe that every customer is a long-term partnership.",
      isminiz: "Your name",
      eposta: "Email address",
      mesaj: "Message",
      gonder: "Send",
    },
    descriptions: {
      sirketFaaliyeti_1:
        "By developing modern and innovative housing projects, we make your living spaces more comfortable and aesthetic. By prioritizing quality and safety in every detail, we build houses where families can live in peace.",
      sirketFaaliyeti_2:
        "We build functional and prestigious commercial buildings that meet the needs of the business world. We offer a wide range of projects that will add value to your business, from office buildings to shopping malls.",
      sirketFaaliyeti_3:
        "In every project, we make your dreams come true by keeping customer satisfaction and quality at the highest level. With our extensive experience in the construction industry and our expert staff, we are here to offer the best solutions for you.",
      mukemmellik_desc:
        "Since our establishment, we have been working with all our strength to transform the construction industry in a positive way by doing our job well, constantly improving ourselves and keeping our promises. We support our business diversity with our employee diversity, drawing our strength from more than 30,000 people from 64 different nations.",
      tejrubemi_desc:
        "Our company is known for its commitment to excellence and expertise. We aim to provide high quality service to our customers by approaching each project with care. Our company is known for its commitment to excellence and expertise. Our company is known for its commitment to excellence and expertise. To provide high quality service to our customers by approaching each project with care.",
      yenilikci_desc:
        "Our company is known for its commitment to excellence and expertise. By approaching each project with care, we provide our customers with high quality.",
      rekabetci_desc:
        "Our company is known for its commitment to excellence and expertise. To our customers by approaching each project with care.",
      dayanikli_desc:
        "Our company is known for its commitment to excellence and expertise. By approaching each project with care, we provide our customers with high quality.",
      emniyet_desc:
        "As a 4-star Gold rated iCIRT company, safety is everyone's responsibility and will always be considered a priority over others. Security is clearly at the heart of everything we do.",
      guvenirlik_desc:
        "As a 4-star Gold rated iCIRT company, safety is everyone's responsibility and will always be considered a priority over others. Security is clearly at the heart of everything we do.",
      hesapVerebilirlik_desc:
        "We are responsible for the buildings we build, the actions we operate and the results we take. Our buildings are there for the long term and we respect our customers and occupiers of our buildings.",
      ilishkiler_desc:
        "In every project, we make your dreams come true by keeping customer satisfaction and quality at the highest level. In the construction industry.",
      uretimimiz_desc:
        "We are at your service with our wide range of products, from lime to brick, from concrete to cement, for your various construction projects. Contact us to provide solutions suitable for all your needs and discover our quality products that will add value to your projects.",
      kariyer_desc:
        "As Ajayyp Gurluşyk, we are a construction-focused engineering firm with the capacity to plan, develop and execute a construction project from its early stages to its operational phase.",
    },
    statistics: {
      tecrube: "Experience",
      calisanlar: "Number of employees",
      cesitlilik: "Employee Diversity",
      milletden: "From the nation",
      kiralanabilir: "Owned Leasable Area",
      sozleshme: "Largest Contract Amount",
      calishma: "Total Work in 2023",
    },
    production: {
      titles: {
        kalite: "Alkim",
        kirec: "High quality Furniture",
      },
      subtitles: {
        boyut: "Size",
        basinc: "Compressive Strength",
        agirlik: "Weight",
        su: "Water Absorption",
      },
      descriptions: {
        kalite_desc:
          "Strong dry construction mixture for ceramic tiles",
        kirec_desc:
          "High-quality home and office furniture",
      },
    },
    services: {
      security: {
        title: "We see Occupational Health and Safety (OHS) not as an obligation but as a moral responsibility",
        desc1: `We believe that a safe working environment is a cornerstone of a reliable, strong, and resilient organization and that all potential harm to employees, stakeholders, and everyone involved can be prevented. Ensuring that each of our employees, working at various locations around the world, completes their work safely and returns home in good health is our primary responsibility.
        <br><br>
        OHS management is part of the company's core values and performance criteria and is represented at the Board level.
        <br><br>
        Every Renaissance employee has the right to refuse to start work in an unsafe environment and to stop work.
        <br><br>
        <b class="phone:text-xl text-lg">Our fundamental principles and values within OHS;</b>
        <br><br>`,
        desc2: `<li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Managers who set an example and take ownership in workplace safety</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">A management approach focused on continuous improvement and preventive risk management</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Aware and trained employees</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Incorporating subcontractors into the system and monitoring performance</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Compliance and performance monitoring</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Promoting and rewarding good practices</li>`,
        desc3: `<b class="text-xl">OHS Training</b>
        <br><br>
        Through the practices and continuous training programs we have developed in OHS, we enhance the OHS culture for all our employees.
        <br><br>
        The training program, starting with orientation training, continues regularly with legal training, behavior-based training, and job-specific technical training programs, based on needs and requirements.
        <br><br><br>
        <span class="italic">
             “Comparing our 2018-2021 TRIFR and LTIFR rates with the construction sector values from the American Bureau of Labor Statistics (BLS), our TRIFR rate showed an average performance improvement of 3.1 times, and our LTIFR rate showed approximately 6.4 times better performance.”
        </span>`,
        desc4: `<b class="phone:text-2xl text-xl">Project Management and Construction Planning</b>
        <br><br>
        Our company has successfully completed a prestigious educational institution designed and built to meet modern educational needs. This project stands out with its advanced technology, environmentally friendly, and sustainable structure.`
      },
      environment: {
        title: 'Eco-Friendly Construction Solutions for a Sustainable Future: Our Industrial Company\'s Responsibility to Nature and Society',
        desc1: `Our industrial company is a leader in maintaining the highest level of environmental sensitivity in its operations. In our construction processes, we minimize our carbon footprint by using eco-friendly materials. We work diligently on energy efficiency and contribute to a sustainable future by investing in renewable energy sources. In our projects, we prioritize the conservation of natural resources and meticulously apply environmental management principles.
      <br><br>
      Our commitment to the environment is reflected not only in our construction processes but also in the way we conduct business. Our waste management systems operate on a minimal waste principle, and we place great emphasis on recycling processes. We regularly organize training sessions to increase the environmental awareness of our employees and encourage all our stakeholders to adopt eco-friendly practices. Environmental sustainability is accepted as a core value in all of our company's processes.`,
        desc2: `In our industrial projects, we use advanced technologies to minimize environmental impacts. Our projects, based on eco-friendly design principles, offer solutions that do not harm the environment. Additionally, we protect green areas and build living spaces that harmonize with nature. This approach aims not only for today but also for future generations to live in a healthy and sustainable environment.
      <br><br>
      As a company acting with a sense of responsibility, we continuously monitor and improve our environmental performance. In every project, we consider the environmental impacts and take the necessary steps to minimize these impacts. Our company's commitment to eco-friendly projects is a testament to our responsibility to society and nature. We continue to work towards leaving a cleaner, healthier, and more sustainable world for the future.`
      },
      variation: {
        title: 'Diversity and Equality in the Workplace: A Fair and Inclusive Future for All',
        desc1: `Our company has placed the principles of diversity and equality at the core of our work culture.
        We create a work environment where all our employees have equal opportunities, and respect and
        understanding prevail. We believe in the richness that comes from different cultures, experiences,
        and perspectives, and we integrate this diversity into our business processes. Creating an environment
        where every individual feels valued is one of our top priorities.
        <br><br>
        We know that diversity fuels innovation and creativity, and we include individuals from diverse
        backgrounds in our team accordingly. The principle of equality is evident not only in our hiring
        processes but also in promotions, salaries, and working conditions. We provide all the necessary
        resources for our employees to realize their full potential. We create a work environment with open
        communication channels where everyone's voice can be heard.
        <br><br>`,
        desc2: `In our internal trainings, we give special importance to the topics of diversity and equality,
        ensuring that these values are embraced by all our employees. We strive to maintain a balanced
        distribution of gender, ethnicity, and other diversity factors in our leadership team. We do not tolerate
        any form of discrimination in the workplace, and we commit to ensuring that everyone has equal rights.
        Diversity is one of the key elements that enhance the quality of our workforce and the competitive strength
        of our company.
        <br><br>
        We take a leading role in gender equality, working to increase the representation of women and other
        disadvantaged groups in the workforce. In this context, we develop strategic plans to ensure gender balance
        and increase diversity in the workplace. We respect the differences of our colleagues and encourage the positive
        reflection of these differences on business outcomes. Creating a work environment where everyone feels safe
        and respected as an individual is the key to our success.`,
        desc3: `
        Our company, with a sense of social responsibility, aims to promote the principles of diversity and equality
        not only in the workplace but also in the community. We encourage our employees to participate in projects
        that support diversity and equality. By adopting a fair management approach in the workplace, we protect the
        rights of all. We continue our efforts with the goal of leaving a more equal, fair, and diverse business world
        for the future.`
      },
      partners: {
        title: 'Steps Towards Sustainable Success with Strong Collaborations and Strategic Partnerships',
        desc1: `Our company ensures its success through strong collaborations and strategic partnerships. The solid relationships we build with our partners always put us one step ahead in achieving common goals. Innovation and quality-focused collaborations enhance our competitive edge in the industry. Long-term partnerships are built on mutual trust and a spirit of cooperation.
        <br><br>
        Together with our business partners, we develop innovative projects and implement best practices in the industry. Each of our partners makes significant contributions to our company's value chain. Through transparent communication and effective coordination with our partners, we achieve successful projects. The collaborations we establish with global and local partners offer us access to different markets and opportunities.
        <br><br>`,
        desc2: `Our partnerships create a strong network that encourages mutual sharing of knowledge and experience. We aim to achieve sustainable growth goals together with the companies we collaborate with. The projects we carry out with our partners strengthen our leading position in the industry. Our partnerships not only generate commercial benefits but also add value to society and the environment.`,
        desc3: `Establishing reliable and long-lasting collaborations is at the core of our strategic planning. Each of our partners contributes directly to our company's success, making our business processes more efficient. Our approach to collaboration is based on open communication and mutual benefit. The strong bonds we form with our partners provide flexibility and resilience, even during times of crisis.
        <br><br>
        Our company views the successes of our partners as our own and operates with this mindset. Our collaborations accelerate our access to new technologies and markets. Together with our partners, we continuously develop innovations to maximize customer satisfaction. We continue to work with reliable and strategic partners to achieve lasting and impactful results in the business world.`
      }
    }
  },
  RU: {
    links: {
      home: "Главная страница",
      about: "О нас",
      works: "Наши работы",
      services: "Услуги",
      contact: "Контакты",
      hepsi: "Все",
      guvenlik: "Охрана труда и безопасность",
      cevre: "Окружающая среда",
      cesitlilikVeEsitlilik: "Разнообразие и равенство",
      raporlar: "Отчеты",
      partnerler: "Наши партнеры и сотрудничество",
      kariyer: "Карьера",
      bashvurmak: "Применять",
      paylash: "Делиться"
    },
    titles: {
      anaBashlik: "Ajaýyp Gurluşyk: Экспертиза и удовлетворение клиентов",
      faaliyetAlanlarimiz: "Наши области деятельности",
      sirketFaaliyeti: "Области деятельности нашей компании",
      bizimRakamlarimiz: "Наши статистические данные",
      mukemmellik: "История нашего совершенства",
      about: "О нас",
      tejrubemiz: "Наш опыт",
      degerlerimiz: "Наши ценности",
      altyapiUstyapi: "Инфраструктура - Надстройка",
      endustriel: "Промышленность",
      saglik: "Здоровье",
      konutInsat: "Жилищное строительство",
      ishletmeHizmetleri: "Бизнес-услуги",
      yonetim: "Административные центры",
      hikayemiz: "Наша история",
      grupDegerleri: "Ценности строительной группы Ajaýyp Gurluşyk",
      guvenirlik: "Надежность",
      hesapVerebilirlik: "Подотчетность",
      aramak: "Что вы хотите найти?",
      ilishkiler:
        "Мы стремимся к долгосрочным отношениям с нашими партнерами, поставщиками и клиентами.",
      uretimimiz: "Наши производства",
      ortaklarimiz: "Наши партнеры",
      telefon: "Номер телефона",
      ofis: "Адрес офиса",
      projeBinalar: "Проектные здания",
      benzerHaberler: "Похожие новости",
      katilmak: "Присоединение к команде Аджайыпа Гурлушика это:",
      pozisyon: "Вакансии",
      belge: "Соглашение"
    },
    subtitles: {
      hakkinda: "О",
      detay: "Деталь",
      galeri: "Галерея",
      yenilikci: "Инноватор",
      rekabetci: "Конкурентоспособный",
      dayanikli: "Прочный",
      faaliyet: "Ajaýyp Gurluşyk действует в Туркменистане.",
      ara: "Поиск...",
      proje: "Проект",
      emniyet: "Безопасность",
      onceki: "Пред.",
      sonraki: "След.",
      ortaklarimiz:
        "Мы считаем, что каждый клиент - это долгосрочное партнерство.",
      isminiz: "Ваше имя",
      eposta: "Адрес электронной почты",
      mesaj: "Сообщение",
      gonder: "Отправить",
    },
    descriptions: {
      sirketFaaliyeti_1:
        "Разрабатывая современные и инновационные жилищные проекты, мы делаем ваши жилые помещения более комфортными и эстетичными. Придерживаясь качества и безопасности в каждой детали, мы строим дома, в которых семьи могут жить спокойно.",
      sirketFaaliyeti_2:
        "Мы строим функциональные и престижные коммерческие здания, которые удовлетворяют потребности делового мира. Мы предлагаем широкий спектр проектов, которые добавят ценность вашему бизнесу, от офисных зданий до торговых центров.",
      sirketFaaliyeti_3:
        "В каждом проекте мы воплощаем ваши мечты в реальность, поддерживая высокий уровень удовлетворенности клиентов и качества. С нашим обширным опытом в строительной отрасли и нашей экспертной командой, мы здесь, чтобы предложить вам лучшие решения.",
      mukemmellik_desc:
        "С момента нашего основания мы работаем изо всех сил, чтобы положительно преобразовать строительную отрасль, хорошо выполняя свою работу, постоянно совершенствуясь и выполняя свои обещания. Мы поддерживаем наше бизнес-разнообразие разнообразием сотрудников, черпая свою силу из более чем 30 000 человек из 64 различных наций.",
      tejrubemi_desc:
        "Наша компания известна своим стремлением к совершенству и экспертизе. Мы стремимся предоставлять нашим клиентам услуги высокого качества, подходя к каждому проекту с вниманием. Наша компания известна своим стремлением к совершенству и экспертизе. Наша компания известна своим стремлением к совершенству и экспертизе. Предоставлять услуги высокого качества нашим клиентам, подходя к каждому проекту с вниманием.",
      yenilikci_desc:
        "Наша компания известна своим стремлением к совершенству и экспертизе. Подходя к каждому проекту с вниманием, мы предоставляем нашим клиентам услуги высокого качества.",
      rekabetci_desc:
        "Наша компания известна своим стремлением к совершенству и экспертизе. Нашим клиентам, подходя к каждому проекту с вниманием.",
      dayanikli_desc:
        "Наша компания известна своим стремлением к совершенству и экспертизе. Подходя к каждому проекту с вниманием, мы предоставляем нашим клиентам услуги высокого качества.",
      emniyet_desc:
        "Будучи компанией с 4-звездочным золотым рейтингом iCIRT, безопасность является ответственностью каждого и всегда будет приоритетом перед другими. Безопасность явно находится в центре всего, что мы делаем.",
      guvenirlik_desc:
        "Будучи компанией с 4-звездочным золотым рейтингом iCIRT, безопасность является ответственностью каждого и всегда будет приоритетом перед другими. Безопасность явно находится в центре всего, что мы делаем.",
      hesapVerebilirlik_desc:
        "Мы несем ответственность за здания, которые мы строим, за действия, которые мы выполняем, и за результаты, которые мы получаем. Наши здания рассчитаны на долгосрочную перспективу, и мы уважаем наших клиентов и пользователей наших зданий.",
      ilishkiler_desc:
        "В каждом проекте мы воплощаем ваши мечты в реальность, поддерживая высокий уровень удовлетворенности клиентов и качества. В строительной отрасли.",
      uretimimiz_desc:
        "Мы к вашим услугам с нашим широким ассортиментом продукции, от извести до кирпича, от бетона до цемента, для ваших различных строительных проектов. Свяжитесь с нами, чтобы предоставить решения для всех ваших нужд и открыть для себя наши качественные продукты, которые добавят ценность вашим проектам.",
      kariyer_desc:
        "Как Ajayyp Gurluşyk, мы являемся строительной инжиниринговой фирмой, способной планировать, разрабатывать и реализовывать строительный проект от его начальных этапов до этапа эксплуатации.",
    },
    statistics: {
      tecrube: "Опыт",
      calisanlar: "Количество сотрудников",
      cesitlilik: "Разнообразие сотрудников",
      milletden: "Из нации",
      kiralanabilir: "Общая площадь, доступная для аренды",
      sozleshme: "Наибольшая сумма контракта",
      calishma: "Общий объем работы в 2023 году",
    },
    production: {
      titles: {
        kalite: "Алким",
        kirec: "Мебельные изделия",
      },
      subtitles: {
        boyut: "Размер",
        basinc: "Прочность на сжатие",
        agirlik: "Вес",
        su: "Водопоглощение",
      },
      descriptions: {
        kalite_desc:
          "Прочный сухой строительный раствор для керамической плитки",
        kirec_desc:
          "Высококачественная мебель для дома и офиса",
      },
    },
    services: {
      security: {
        title: "Мы рассматриваем охрану труда и безопасность (ОТиБ) не как обязательство, а как моральную ответственность",
        desc1: `Мы уверены, что безопасная рабочая среда является основой надежной, сильной и устойчивой организации, и что любой потенциальный вред для сотрудников, заинтересованных сторон и всех вовлеченных может быть предотвращен. Обеспечить, чтобы каждый наш сотрудник, работающий в различных точках мира, выполнял свою работу безопасно и возвращался домой в хорошем состоянии, является нашей главной ответственностью.
        <br><br>
        Управление ОТиБ является частью основных ценностей и критериев эффективности компании и представлено на уровне Совета директоров.
        <br><br>
        Каждый сотрудник компании Renaissance имеет право отказаться от работы в небезопасной среде и остановить работу.
        <br><br>
        <b class="phone:text-xl text-lg">Наши основные принципы и ценности в области ОТиБ;</b>
        <br><br>`,
        desc2: `<li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Менеджеры, которые служат примером и берут на себя ответственность за безопасность на рабочем месте</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Подход к управлению, ориентированный на постоянное улучшение и профилактическое управление рисками</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Осведомленные и обученные сотрудники</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Включение субподрядчиков в систему и мониторинг их производительности</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Контроль за соблюдением норм и производительностью</li>
    <li class="font-inter mb-4 font-normal phone:text-lg text-base text-m_black_2">Стимулирование и награждение за лучшие практики</li>`,
        desc3: `<b class="text-xl">Обучение по ОТиБ</b>
        <br><br>
        Через разработанные нами практики и постоянные учебные программы мы развиваем культуру ОТиБ у всех наших сотрудников.
        <br><br>
        Программа обучения, начинающаяся с ориентационного обучения, регулярно продолжается с юридических курсов, курсов по поведению и специализированных технических курсов в зависимости от потребностей и требований.
        <br><br><br>
        <span class="italic">
             “Сравнивая наши показатели TRIFR и LTIFR за 2018-2021 годы с данными строительного сектора от Бюро трудовой статистики США (BLS), наши показатели TRIFR продемонстрировали в среднем в 3.1 раза лучшее выполнение, а LTIFR – примерно в 6.4 раза лучшее выполнение.”
        </span>`,
        desc4: `<b class="phone:text-2xl text-xl">Управление проектами и планирование строительства</b>
        <br><br>
        Наша компания успешно завершила строительство престижного учебного заведения, спроектированного и построенного в соответствии с современными образовательными требованиями. Этот проект выделяется своей передовой технологией, экологически чистой и устойчивой конструкцией.`
      },
      environment: {
        title: 'Экологически чистые строительные решения для устойчивого будущего: Ответственность нашей промышленной компании перед природой и обществом',
        desc1: `Наша промышленная компания является лидером в поддержании наивысшего уровня экологической осведомленности в своей деятельности. В наших строительных процессах мы минимизируем наш углеродный след, используя экологически чистые материалы. Мы тщательно работаем над повышением энергоэффективности и вносим вклад в устойчивое будущее, инвестируя в возобновляемые источники энергии. В наших проектах мы придаем первостепенное значение сохранению природных ресурсов и тщательно применяем принципы управления окружающей средой.
      <br><br>
      Наша приверженность охране окружающей среды проявляется не только в строительных процессах, но и в наших бизнес-процессах. Наши системы управления отходами работают по принципу минимальных отходов, и мы уделяем большое внимание процессам переработки. Мы регулярно организуем обучающие сессии для повышения экологической осведомленности наших сотрудников и поощряем всех наших партнеров к внедрению экологически чистых практик. Экологическая устойчивость признана основной ценностью во всех процессах нашей компании.`,
        desc2: `В наших промышленных проектах мы используем передовые технологии для минимизации воздействия на окружающую среду. Наши проекты, основанные на принципах экологически чистого проектирования, предлагают решения, которые не наносят вреда окружающей среде. Кроме того, мы сохраняем зеленые зоны и создаем жилые пространства, гармонирующие с природой. Этот подход направлен не только на сегодняшний день, но и на обеспечение здоровой и устойчивой окружающей среды для будущих поколений.
      <br><br>
      Будучи компанией, действующей с чувством ответственности, мы постоянно контролируем и улучшаем наши экологические показатели. В каждом проекте мы учитываем экологические последствия и принимаем необходимые меры для их минимизации. Приверженность нашей компании экологически чистым проектам является свидетельством нашей ответственности перед обществом и природой. Мы продолжаем работать над тем, чтобы оставить для будущих поколений более чистый, здоровый и устойчивый мир.`
      },
      variation: {
        title: 'Разнообразие и равенство на рабочем месте: справедливое и инклюзивное будущее для всех',
        desc1: `Наша компания ставит принципы разнообразия и равенства в центр своей корпоративной культуры. Мы создаем рабочую среду, где все сотрудники имеют равные возможности и царит уважение и понимание. Мы верим в ценность различных культур, опыта и точек зрения, и интегрируем это разнообразие в наши рабочие процессы. Создание атмосферы, где каждый чувствует себя ценным, является для нас приоритетом.
        <br><br>
        Мы знаем, что разнообразие питает инновации и креативность, и поэтому привлекаем в команду людей с разным жизненным опытом. Принцип равенства проявляется не только в процессах найма, но и в продвижении по службе, зарплате и условиях работы. Мы предоставляем все необходимые ресурсы, чтобы наши сотрудники могли максимально раскрыть свой потенциал. Мы создаем рабочую среду с открытыми каналами коммуникации, где каждый может быть услышан.
        <br><br>`,
        desc2: `В наших внутренних обучающих программах мы уделяем особое внимание вопросам разнообразия и равенства, обеспечивая, чтобы эти ценности были усвоены всеми нашими сотрудниками. Мы стремимся к сбалансированному распределению гендерных, этнических и других аспектов разнообразия среди руководства. Мы не терпим дискриминации на рабочем месте и гарантируем равные права для всех. Разнообразие является одним из ключевых факторов, повышающих качество нашего персонала и конкурентоспособность компании.
        <br><br>
        Мы играем ведущую роль в вопросах гендерного равенства, работаем над тем, чтобы женщины и другие уязвимые группы были лучше представлены в профессиональной сфере. В этом контексте мы разрабатываем стратегические планы для обеспечения гендерного баланса и увеличения разнообразия на рабочем месте. Мы уважаем различия наших коллег и поощряем их положительное влияние на результаты работы. Создание безопасной и уважительной рабочей среды является ключом к нашему успеху.`,
        desc3: `
        Наша компания с чувством социальной ответственности стремится продвигать принципы разнообразия и равенства не только на рабочем месте, но и в обществе. Мы поощряем участие наших сотрудников в проектах, поддерживающих разнообразие и равенство. Придерживаясь справедливого подхода к управлению, мы заботимся о правах каждого. Мы продолжаем работать над тем, чтобы оставить будущее более равноправным, справедливым и разнообразным деловым миром.`
      },
      partners: {
        title: 'Шаги к устойчивому успеху с сильными сотрудничествами и стратегическими партнёрствами',
        desc1: `Наша компания обеспечивает свой успех за счёт сильных сотрудничеств и стратегических партнёрств. Надёжные отношения, которые мы строим с нашими партнёрами, всегда ставят нас на шаг вперёд в достижении общих целей. Инновационные и ориентированные на качество сотрудничества повышают нашу конкурентоспособность в отрасли. Долгосрочные партнёрства строятся на взаимном доверии и сотрудничестве.
        <br><br>
        Вместе с нашими деловыми партнёрами мы разрабатываем инновационные проекты и внедряем лучшие практики в отрасли. Каждый из наших партнёров вносит значительный вклад в цепочку ценностей нашей компании. Благодаря прозрачной коммуникации и эффективной координации с нашими партнёрами мы добиваемся успешных проектов. Сотрудничество с глобальными и местными партнёрами открывает нам доступ к различным рынкам и возможностям.
        <br><br>`,
        desc2: `Наши партнёрства создают мощную сеть, которая поощряет взаимный обмен знаниями и опытом. Мы стремимся к достижению целей устойчивого роста вместе с компаниями, с которыми сотрудничаем. Проекты, которые мы реализуем с нашими партнёрами, укрепляют наше лидирующее положение в отрасли. Наши партнёрства не только приносят коммерческую выгоду, но и добавляют ценности обществу и окружающей среде.`,
        desc3: `Надёжные и долгосрочные сотрудничества являются основой нашей стратегической планировки. Каждый из наших партнёров вносит прямой вклад в успех нашей компании, делая наши бизнес-процессы более эффективными. Наш подход к сотрудничеству основан на открытом общении и взаимной выгоде. Прочные связи, которые мы формируем с нашими партнёрами, обеспечивают гибкость и устойчивость даже в периоды кризиса.
        <br><br>
        Наша компания рассматривает успехи наших партнёров как свои собственные и действует исходя из этого принципа. Наши сотрудничества ускоряют доступ к новым технологиям и рынкам. Вместе с нашими партнёрами мы постоянно разрабатываем инновации, чтобы максимально повысить удовлетворённость клиентов. Мы продолжаем сотрудничать с надёжными и стратегическими партнёрами для достижения долгосрочных и значительных результатов в бизнесе.`
      }
    }    
  },
};

export const i18n = createI18n({
  locale: "TM",
  fallbackLocale: "TM",
  messages,
});