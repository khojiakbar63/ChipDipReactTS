import Card1 from '../assets/images/soeks.png'
import Card2 from '../assets/images/proskit.png'
import Card3 from '../assets/images/testo.png'
import Card4 from '../assets/images/znatok.png'
import Card5 from '../assets/images/robiton.png'
import Card6 from '../assets/images/linoya.png'
import Card7 from '../assets/images/navigator.png'
import Card8 from '../assets/images/kitay.png'
import Card9 from '../assets/images/mastech.png'
import Card10 from '../assets/images/skz.png'
import Card11 from '../assets/images/diot.png'
import Card12 from '../assets/images/turbojet.png'



import CaruselIMg from "../assets/Img/CaruselImg_1.png";
import CaruselImg2 from "../assets/Img/CaruselImg_2.png";
import CaruselImg3 from "../assets/Img/CaruselImg_3.png";
import CaruselImg4 from "../assets/Img/CaruselImg_4.png";
import CaruselImg5 from "../assets/Img/CaruselImg_5.png";


// Catlog Products
import CatlogP1 from "../assets/images/catlog-p-1.png";
import CatlogP2 from "../assets/images/catlog-p-2.png";
import CatlogP3 from "../assets/images/catlog-p-3.png";
import CatlogP4 from "../assets/images/catlog-p-4.png";






export const CoruselDb = [
  { id: 1, src: CaruselIMg, label: 'Доставка в ЕАЭС' },
  { id: 2, src: CaruselImg2, label: 'Элементы подвески' },
  { id: 3, src: CaruselImg3, label: 'MEAN WELL // XLG' },
  { id: 4, src: CaruselImg4, label: 'Кабельные тестеры Noyafa' },
  { id: 5, src: CaruselImg5, label: 'Электролитические конденсаторы jb' },
];



export const hitsData = {
    title: "Хиты продаж",
    products: [
      {
        id: 1,
        brand: "СОЭКС",
        name: "Эковизор F4, Многофункциональный прибор 4 в 1",
        price: "14 990 р.",
        imageUrl: Card1,
      },
      {
        id: 2,
        brand: "PROSKIT",
        name: "6PK-301H, Кримпер для обжима изолированных клемм 4.0-6.0",
        price: "4 350 р.",
        imageUrl: Card2,
      },
      {
        id: 3,
        brand: "TESTO",
        name: "Testo 750-3, Тестер напряжения (Госреестр РФ)",
        price: "16 500 р.",
        imageUrl: Card3,
      },
      {
        id: 4,
        brand: "ЗНАТОК",
        name: "Конструктор электронный 'Знаток', 180 схем",
        price: "4 180 р.",
        imageUrl: Card4,
      },
      {
        id: 5,
        promoBrand: "PROMO",
        promoName: "Самые популярные товары",
        buttonText: "Перейти к выбору",
        promoText: "Выбор наших покупателей",
      },
    ],
  };
  

  export const bestOffersData = {
    title: "Лучшие предложения",
    products: [
      {
        id: 1,
        brand: "ROBITON",
        name: "Li16340/3.0, Аккумулятор Li-ion, 550мАч, 3.0В (40.0*37мм)",
        price: "660 р.",
        imageUrl: Card5,
      },
      {
        id: 2,
        brand: "LINQYA",
        name: "L-UTP4-5 Outdoor, Витая пара, 4 пары Cat5e",
        price: "64 р.",
        imageUrl: Card6,
      },
      {
        id: 3,
        brand: "NAVIGATOR",
        name: "Элемент питания Navigator 94 762 NBT-NS-6F22-SH1",
        price: "50 р.",
        imageUrl: Card7,
      },
      {
        id: 4,
        brand: "КИТАЙ",
        name: "ZD-81N, Паяльник-пистолет импульсный, 220В, 30-130Вт",
        price: "540 р.",
        imageUrl: Card8,
      },
      {
        id: 5,
        promoBrand: "",
        promoName: "Выгодное предложение",
        buttonText: "Перейти к выбору",
        promoText: "Узнайте о выгодных предложениях и специальных ценах!",
      },
    ],
  };
  

  export const popularData = {
    title: "Набирают популярность",
    products: [
      {
        id: 1,
        brand: "MASTECH",
        name: "MS6592P, Измеритель температуры, пирометр",
        price: "1 350 р.",
        imageUrl: Card9,
      },
      {
        id: 2,
        brand: "СЭКС",
        name: "К78-17Е, 50 мкФ, 450 В (провод +болт), Конденсатор грузовой",
        price: "510 р.",
        imageUrl: Card10,
      },
      {
        id: 3,
        brand: "СИЛОВЫЕ ДИОДЫ",
        name: "TC142-80-12, Симистор силовой 80А 1200В",
        price: "2 780 р.",
        imageUrl: Card11,
      },
      {
        id: 4,
        brand: "TURBOJET",
        name: "B1245, Кисточка для флюса в упаковке по 5 шт",
        price: "400 р.",
        imageUrl: Card12,
      },
      {
        id: 5,
        promoBrand: "PROMO",
        promoName: "Успейте купить первыми",
        buttonText: "Перейти к выбору",
        promoText: "Новинки, которые пользуются повышенным спросом",
      },
    ],
  };
  


  export const Catalog_Products = [
    {
      id: 1,
      image: CatlogP1,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },

    {
      id: 2,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 3,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 4,
      image: CatlogP1,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 5,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 6,
      image: CatlogP3,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 7,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 8,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 9,
      image: CatlogP4,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 10,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 11,
      image: CatlogP1,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 12,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 13,
      image: CatlogP1,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 14,
      image: CatlogP4,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 15,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 16,
      image: CatlogP3,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 17,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 18,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 19,
      image: CatlogP2,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    {
      id: 20,
      image: CatlogP4,
      title: 'FS7M0880YDTU, Контроллер off-line SMPS [TO-3P-5L-Leadsformed]',
      brand: 'ON Semiconductor',
      series: 'fps',
      tip: 'flyback',
      output: 'нет',
      switch: 'Есть',
      max_volt: '800',  
      nom_power: '190',
      max_converter: '66',
      max_duty: '55',
      operating_temp:  '-25…+85',
      corpus: 'to-220f-5, formed'
    },
    
  ]









