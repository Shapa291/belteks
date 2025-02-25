export interface CityData {
  city: string;
  data: {
    name: string;
    adress: string;
    phoneNumber: {
      dir: string;
      sales: string;
    };
    email: string;
    mapLinks: {
      cityLink: string;
      textileCompanyLink?: string | undefined;
      fabricStoreLink?: string | undefined;
      wholesaleStoreLink?: string | undefined;
      wholesaleCompanyLink?: string | undefined;
      beddingStoreLink?: string | undefined;
      addressLink?: string | undefined;
      iframeSrc: string;
    };
  };
}

export const articlesData = [
  {
    date: "16.08.2024",
    header:
      "Информация о формировании реестра акционеров ОАО «Оптово-логистический центр «БелТекс»",
    text: "Информация о формировании реестра акционеров ОАО «Оптово-логистический центр «БелТекс» Открытое акционерное общество «ОАО «ОЛЦ «БелТекс» 220005, г. Минск, ул. Платонова, 32 комната 15 Наблюдательный совет протокол от 15.08.2024 №6 принял решение о формировании реестра владельцев акций по состоянию на 19 августа 2024 года для составления списка лиц, имеющих право на участие во внеочередном общем собрании акционеров которое состоится 05 сентября 2024 года.",
  },

  {
    date: "16.08.2024",
    header: "Уведомление о внеочередном собрании акционеров",
    text: "Открытое акционерное общество «Оптово-логистический центр «БелТекс» информирует о созыве внеочередного общего собрания акционеров ОАО «ОЛЦ «БелТекс» которое состоится «05» сентября 2024г. в 14.00 по адресу: г. Минск, ул. Платонова,32, со следующей повесткой дня: 1. Об избрании членов наблюдательного совета и ревизионной комиссии (докладчик – директор Общества Платонова В.И.).2. Утверждение размера вознаграждений членов наблюдательного совета и ревизионной комиссии (докладчик – главный бухгалтер Андрианова Н.А.) Органом, созывающим внеочередное общее собрание акционеров, согласно п.7.1. главы 7 Устава является наблюдательный совет ОАО «ОЛЦ «БелТекс». Внеочередное общее собрание акционеров созывается в соответствии с ч.4 ст.36 Закона Республики Беларусь от 09.12.1992 №2020- XII «О хозяйственных обществах» и решением наблюдательного совета ОАО «ОЛЦ «БелТекс» от 15.08.2024 (протокол от 15.08.2024 № 6).Ознакомится с информацией, подлежащей предоставлению при подготовке к проведению годового общего собрания акционеров, можно путем ознакомления с документами с понедельника по пятницу по адресу: г. Минск, ул. Платонова,32 с 8.45 до 15.30 с момента получения настоящего уведомления до 05.09.2024. Регистрация акционеров внеочередного общего собрания будет проводиться 05.09.2024 с 12.00 до 13.45 по месту проведения внеочередного общего собрания акционеров на основании документа, удостоверяющего личность (паспорт) а в случае представителей – также документа, подтверждающего полномочия. Наблюдательный совет ОАО «ОЛЦ «БелТекс»",
  },
];

export const peopleContacts = [
  {
    job: "Директор",
    name: "Платонова Варвара Ивановна",
    phoneNumber: "+375 (17) 353-67-28",
    email: "dir@belteks.by",
  },
  {
    job: "Заместитель директора",
    name: "Крайко Тамара  Владимировна",
    phoneNumber: "+375 (17) 270-23-94",
    email: "zam.dir@belteks.by",
  },
  {
    job: "Приемная директора",
    name: "Белая Юлия Геннадьевна",
    phoneNumber: "+375 (17) 270-25-53",
    email: "info@belteks.by",
  },
  {
    job: "Главный бухгалтер",
    name: "Андрианова Наталья Анатольевна",
    phoneNumber: "+375 (17) 392-01-11",
    email: "buh@belteks.by",
  },
  {
    job: "Начальник торгового отдела",
    name: "Лихачева Марина Николаевна",
    phoneNumber: "+375 (17) 270-20-44",
    email: "markert@belteks.by",
  },
  {
    job: "Главный инженер",
    name: "Холодняк Александр Юрьевич",
    phoneNumber: "+375 (17) 270-32-01",
    email: "sbyt@belteks.by",
  },
  {
    job: "Отдел кадров",
    name: "Шкадаревич Ирина Ивановна",
    phoneNumber: "+375 (17) 343-99-93",
    email: "jurist@belteks.by",
  },
  {
    job: "Юридический отдел",
    name: "Телеш Екатерина Анатольевна",
    phoneNumber: "+375 (17) 343-99-93",
    email: "jurist@belteks.by",
  },
  {
    job: "Технический отдел",
    name: "",
    phoneNumber: "+375 (17) 270-32-72",
    email: "dev@belteks.by",
  },
];

export const ShopsData = [
  "МИНСК И МИНСКАЯ ОБЛАСТЬ",
  "БРЕСТСКАЯ ОБЛАСТЬ",
  "ВИТЕБСКАЯ ОБЛАСТЬ",
  "ГОМЕЛЬСКАЯ ОБЛАСТЬ",
  "ГРОДНЕНСКАЯ ОБЛАСТЬ",
  "МОГИЛЕВСКАЯ ОБЛАСТЬ",
];

export const ProductsData = [
  { img: "/imgs/ProductsIMG/1.png", name: "ПОСТЕЛЬНОЕ БЕЛЬЕ" },
  { img: "/imgs/ProductsIMG/4.png", name: "ТКАНИ" },
  { img: "/imgs/ProductsIMG/5.png", name: "ОДЕЯЛА, ПЛЕДЫ, ПОДУШКИ" },
  { img: "/imgs/ProductsIMG/2.png", name: "МАХРОВЫЕ ИЗДЕЛИЯ" },
  { img: "/imgs/ProductsIMG/3.png", name: "СОПУТСТВУЮЩИЕ ТОВАРЫ" },
];

export const contactData = [
  {
    name: "ОАО  «ОЛЦ БелТекс»",
    addres: "220005, г. Минск, ул. Платонова 32",
    number: "+375 (17) 270-25-53",
    email: "info@belteks.by",
  },
  {
    name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №2",
    addres: "210516, г. Витебск, ул. Лазо 117",
    number: "+375 (212) 23-42-30",
    email: "vitebsk@belteks.by",
  },
  {
    name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №3",
    addres: "246007, г. Гомель, ул. Шилова 12",
    number: "+375 (232) 34-60-16",
    email: "gomel@belteks.by",
  },
  {
    name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №4",
    addres: "212008, г. Могилев, пер. Мечникова 4-й 15/1Б",
    number: "+375 (222) 73-53-45",
    email: "mogilev@belteks.by",
  },
  {
    name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №5",
    addres: "224701, г. Брест, ул. Фомина, 15а",
    number: "+375 (16) 223-73-85",
    email: "brest@belteks.by",
  },
  {
    name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №6",
    addres: "230005, г. Гродно, ул.Дзержинского, 94а",
    number: "+375 (152) 55-42-04",
    email: "grodno@belteks.by",
  },
];

export const AdvantagesData = [
  { icon: "/imgs/AdvantagesIMG/cup.png", text: "Опыт и профессионализм" },
  { icon: "/imgs/AdvantagesIMG/coins.png", text: "Цены от производителя" },
  {
    icon: "/imgs/AdvantagesIMG/quality.png",
    text: "Качество и безопастность",
  },
  {
    icon: "/imgs/AdvantagesIMG/person.png",
    text: "Индивидуальный подход к каждому покупателю",
  },
  { icon: "/imgs/AdvantagesIMG/satisfaction.png", text: "Гарантии" },
  {
    icon: "/imgs/AdvantagesIMG/fabric.png",
    text: "Широкий выбор ассортимента",
  },
];

export const AboutBlockData = [
  { year: ">85", text: "Лет на рынке" },
  { year: ">1500", text: "Постоянных клиентов" },
  { year: "6", text: "Представительств в каждом регионе" },
  { year: "90%", text: "Текстиля — из экологически чистого сырья" },
];

export const AboutBlockData1 = [
  { year: ">85", text: "Лет на рынке" },
  { year: ">1500", text: "Постоянных клиентов" },
  { year: "6", text: "Представительств в каждом регионе" },
  { year: "1200 ", text: "различных артикулов в каталоге продукции" },
];

export const CitiesData: CityData[] = [
  {
    city: "Минск",
    data: {
      name: "ОАО «ОЛЦ БелТекс»",
      adress: "220005, г. Минск, ул. Платонова 32",
      phoneNumber: {
        dir: "+375 (17) 270-25-53",
        sales: "+375 (25) 500-29-45",
      },
      email: "info@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/org/belteks/1305735844/?utm_medium=mapframe&utm_source=maps",
        textileCompanyLink:
          "https://yandex.by/maps/157/minsk/category/textile_company/184108045/?utm_medium=mapframe&utm_source=maps",
        fabricStoreLink:
          "https://yandex.by/maps/157/minsk/category/drapery_shop/184108039/?utm_medium=mapframe&utm_source=maps",
        iframeSrc:
          "https://yandex.by/map-widget/v1/?from=mapframe&ll=27.598886%2C53.911492&mode=search&oid=1305735844&ol=biz&pt=27.561831%2C53.902284&source=mapframe&utm_source=mapframe&z=16.25",
      },
    },
  },
  {
    city: "Брест",
    data: {
      name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №5",
      adress: "224701, г. Брест, ул. Фомина, 15а",
      phoneNumber: {
        dir: "+375 (16) 223-73-85",
        sales: "",
      },
      email: "brest@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/org/belteks/1193749630/?utm_medium=mapframe&utm_source=maps",
        wholesaleStoreLink:
          "https://yandex.by/maps/153/brest/category/wholesale_store/184108067/?utm_medium=mapframe&utm_source=maps",
        iframeSrc:
          "https://yandex.by/map-widget/v1/?from=mapframe&ll=23.801584%2C52.081634&mode=search&oid=1193749630&ol=biz&pt=27.561831%2C53.902284&sctx=ZAAAAAgBEAAaKAoSCWd%2FoNy2%2Fz5AESSAm8WLO0pAEhIJWfs726M3jD8RexSuR%2BF6dD8iBgABAgMEBSgKOABAr60GSAFqAnVhnQHNzMw9oAEAqAEAvQEow1J7wgEF4o%2Bx122CAhnQkdGA0LXRgdGCINCR0LXQu9Ci0LXQutGBigIAkgIDMTUzmgIMZGVza3RvcC1tYXBz&sll=23.801584%2C52.081634&source=mapframe&sspn=0.397349%2C0.145470&text=%D0%91%D1%80%D0%B5%D1%81%D1%82%20%D0%91%D0%B5%D0%BB%D0%A2%D0%B5%D0%BA%D1%81&utm_source=mapframe&z=11.46",
      },
    },
  },
  {
    city: "Витебск",
    data: {
      name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №2",
      adress: "210516, г. Витебск, ул. Лазо 117",
      phoneNumber: {
        dir: "+375 (212) 23-42-30",
        sales: "",
      },
      email: "vitebsk@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/org/optovo_logisticheskiy_tsentr_belteks/194569085276/?utm_medium=mapframe&utm_source=maps",
        wholesaleCompanyLink:
          "https://yandex.by/maps/154/vitebsk/category/wholesale_company/184108065/?utm_medium=mapframe&utm_source=maps",
        fabricStoreLink:
          "https://yandex.by/maps/154/vitebsk/category/drapery_shop/184108039/?utm_medium=mapframe&utm_source=maps",
        iframeSrc:
          "https://yandex.by/map-widget/v1/?from=mapframe&ll=30.263198%2C55.201010&mode=search&oid=194569085276&ol=biz&pt=27.561831%2C53.902284&sctx=ZAAAAAgBEAAaKAoSCWd%2FoNy2%2Fz5AESSAm8WLO0pAEhIJWfs726M3jD8RexSuR%2BF6dD8iBgABAgMEBSgKOABAwJ0GSAFqAnVhnQHNzMw9oAEAqAEAvQEFdKVUwgEF4o%2Bx122CAhnQkdGA0LXRgdGCINCR0LXQu9Ci0LXQutGBigIAkgIDMTUzmgIMZGVza3RvcC1tYXBz&sll=30.263198%2C55.201010&source=mapframe&sspn=0.093979%2C0.031940&text=%D0%91%D1%80%D0%B5%D1%81%D1%82%20%D0%91%D0%B5%D0%BB%D0%A2%D0%B5%D0%BA%D1%81&utm_source=mapframe&z=13.54",
      },
    },
  },
  {
    city: "Гомель",
    data: {
      name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №3»",
      adress: "246007, г. Гомель, ул. Шилова 12",
      phoneNumber: {
        dir: "+375 (232) 34-60-16",
        sales: "",
      },
      email: "gomel@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/org/belteks/58370618697/?utm_medium=mapframe&utm_source=maps",
        textileCompanyLink:
          "https://yandex.by/maps/155/gomel/category/textile_company/184108045/?utm_medium=mapframe&utm_source=maps",
        wholesaleCompanyLink:
          "https://yandex.by/maps/155/gomel/category/wholesale_company/184108065/?utm_medium=mapframe&utm_source=maps",
        iframeSrc:
          "https://yandex.by/map-widget/v1/org/belteks/58370618697/?ll=30.995374%2C52.463519&z=17",
      },
    },
  },
  {
    city: "Гродно",
    data: {
      name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №6",
      adress: "230005, г. Гродно, ул.Дзержинского, 94а",
      phoneNumber: {
        dir: "+375 (152) 55-42-04",
        sales: "",
      },
      email: "grodno@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/10274/grodno/?utm_medium=mapframe&utm_source=maps",
        addressLink:
          "https://yandex.by/maps/10274/grodno/house/ZkoYfgRoTUMAQFtpfXtxd3pgZA==/?ll=23.838626%2C53.706553&utm_medium=mapframe&utm_source=maps&z=18.19",
        iframeSrc:
          "https://yandex.by/map-widget/v1/?ll=23.838626%2C53.706553&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY1NTU4NhJL0JHQtdC70LDRgNGD0YHRjCwg0JPRgNC-0LTQvdCwLCDQstGD0LvRltGG0LAg0JTQt9GP0YDQttGL0L3RgdC60LDQs9CwLCA5NNCQIgoNL7W-QRWW01ZC&z=18.19",
      },
    },
  },
  {
    city: "Могилев",
    data: {
      name: "ОАО «ОЛЦ БелТекс» оптово-розничный склад №4",
      adress: "212008, г. Могилев, пер. Мечникова 4-й 15/1Б",
      phoneNumber: {
        dir: "+375 (222) 73-53-45",
        sales: "",
      },
      email: "mogilev@belteks.by",
      mapLinks: {
        cityLink:
          "https://yandex.by/maps/org/belteks/1001988094/?utm_medium=mapframe&utm_source=maps",
        textileCompanyLink:
          "https://yandex.by/maps/158/mogilev/category/textile_company/184108045/?utm_medium=mapframe&utm_source=maps",
        beddingStoreLink:
          "https://yandex.by/maps/158/mogilev/category/bedding_shop/184108043/?utm_medium=mapframe&utm_source=maps",
        iframeSrc:
          "https://yandex.by/map-widget/v1/org/belteks/1001988094/?ll=30.362006%2C53.918525&z=15",
      },
    },
  },
];

export const PartnersData = [
  {
    img: "/imgs/Partners/pole_kvetak.png",
    describtion:
      "РУПТП «ОРШАНСКИЙ ЛЬНОКОМБИНАТ»- Льняные и полульняные ткани: для столового и постельного белья, сорочечно-блузочные  и костюмно-платьевые, бортовые, портьерные, декоративные, мебельные, ткань для живописи, мешочные и упаковочные, продукция домашнего текстиля: скатерти, салфетки, полотенца, наборы полотенец, комплекты столового и постельного белья. На предприятии внедрена система менеджмента качества по ИСО 9001-2000. Предприятие является лауреатом Премии Правительства Республики Беларусь в области качества.",
    ref: "https://linenmill.by/",
  },

  {
    img: "/imgs/Partners/BPHO.png",
    describtion:
      "ОАО «БПХО» — крупнейший производитель текстиля в Республике Беларусь. Высокий уровень качества подтвержден сертификатом соответствия требованиям международных стандартов ИСО 9000-2000. Предприятие является победителем конкурса «Лучшие товары Республики Беларусь» в 2005 г.",
    ref: "https://bpho.by/",
  },

  {
    img: "/imgs/Partners/rechitca.png",
    describtion:
      "ОАО «Речицкий текстиль» — ведущий белорусский производитель домашнего текстиля. Ассортимент включает махровые и вафельные полотенца, халаты, покрывала, пледы, мебельные и декоративные ткани, столовое и постельное белье. Основанное в 1927 году, предприятие выросло из артели в крупного производителя, востребованного в Беларуси и за её пределами. Продукция соответствует высоким стандартам качества и востребована в гостиничном и ресторанном бизнесе, санаториях и торговых сетях.",
    ref: "https://textil.by/",
  },
];

export const footerData = {
  email: "commerce@belteks.by",
  numbers: {
    sales: "+375 (44) 7036925",
    dir: "+375 (17) 2702553",
  },
  timeOfWork: {
    fullDay: "С 8:45 до 17:30 по будням",
    shortDay: "С 8:45 до 16:15 по пятницам",
    dayOff: "Сб, вс выходные",
  },
};
