(function () {
  'use strict';
  function imgs(folder, prefix, count, ext) {
    var out = [];
    for (var i = 1; i <= count; i++) {
      out.push('images/cars/' + folder + '/' + prefix + '-' + i + '.' + (ext || 'jpg'));
    }
    return out;
  }
  var CARS = [
    {
      id: 'bmw-x3-2026',
      brand: 'BMW', model: 'X3', year: 2026,
      engineVolume: 2.0, horsePower: 258,
      transmission: 'Автомат', drivetrain: 'Полный привод',
      mileage: 4000, price: 7530000,
      features: ['M-пакет'],
      location: 'Корея', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('bmw-x3', 'bmw-x3', 8)
    },
    {
      id: 'volkswagen-teramont-pro-2026',
      brand: 'Volkswagen', model: 'Teramont Pro', year: 2026,
      engineVolume: 2.0, horsePower: 272,
      transmission: 'Автомат', drivetrain: 'Полный привод',
      mileage: 0, price: 5866000,
      features: ['Discovery', 'Цена под ключ', 'Полный привод 4WD'],
      location: 'Китай', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('volkswagen-teramont-pro', 'volkswagen-teramont-pro', 10)
    },
    {
      id: 'audi-a5-2026',
      brand: 'Audi', model: 'A5', year: 2026,
      engineVolume: 2.0, horsePower: 204,
      transmission: 'Робот', drivetrain: 'Полный привод',
      mileage: 0, price: 5660000, priceIsFrom: true,
      features: [
        '2 комплектации',
        'Предмаксимальная — 5 660 000 ₽: полный привод, робот, зелёный на чёрном',
        'Максимальная — 5 900 000 ₽: проекция на лобовое стекло + всё из предмакс.',
        'Цена под ключ с таможенными сборами, доставкой и утилем',
        'Без скрытых платежей'
      ],
      location: 'Китай', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('audi-a5-2026', 'audi-a5-2026', 5)
    },
    {
      id: 'toyota-haylender-2026',
      brand: 'Toyota', model: 'Highlander', year: 2026,
      engineVolume: 2.0, horsePower: 248,
      transmission: 'Автомат', drivetrain: 'Полный привод',
      mileage: 0, price: 5320000,
      features: [
        '7 мест · Макс. комплектация', 'Полный привод 4WD', 'Камера 360°',
        'Климат-контроль', 'Кожаный салон', 'Панорамная крыша',
        'Бесключевой доступ', 'Электропривод сидений', 'Адаптивный круиз-контроль'
      ],
      location: 'Китай', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('toyota-haylender-2026', 'toyota-haylender-2026', 10)
    },
    {
      id: 'volkswagen-tiguan-l-pro-2026',
      brand: 'Volkswagen', model: 'Tiguan L Pro', year: 2026,
      engineVolume: 2.0, horsePower: 220,
      transmission: 'Автомат', drivetrain: 'Полный привод',
      mileage: 0, price: 4690000,
      features: ['R-Line', 'Цена под ключ в Москве', 'Полный привод 4WD'],
      location: 'Китай', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('volkswagen-tiguan-l-pro', 'volkswagen-tiguan-l-pro', 11)
    },
    {
      id: 'toyota-rav4-2026',
      brand: 'Toyota', model: 'RAV-4', year: 2026,
      engineVolume: 2.0, horsePower: 171,
      transmission: 'Вариатор (CVT)', drivetrain: 'Полный привод',
      mileage: 0, price: 3990000,
      features: [
        'Adventure Plus', 'Полный привод 4WD', 'Камера 360°', 'Климат-контроль',
        'Кожаный салон', 'Светодиодные фары', 'Бесключевой доступ', 'Адаптивный круиз-контроль'
      ],
      location: 'Китай', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('toyota-rav-4', 'toyota-rav-4', 8)
    },
    {
      id: 'mazda-cx50-2026',
      brand: 'Mazda', model: 'CX-50', year: 2026,
      engineVolume: 2.0, horsePower: 155,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 0, price: 3370000,
      features: ['Цена под ключ', 'Передний привод 2WD', 'Автомат'],
      location: 'Китай', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('mazda-cx-50', 'mazda-cx-50', 8)
    },
    {
      id: 'hyundai-sonata-2023',
      brand: 'Hyundai', model: 'Sonata', year: 2023,
      engineVolume: 2.0, horsePower: 159,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 43000, price: 3090000,
      features: ['Цена под ключ', 'Светодиодные фары', 'Климат-контроль', 'Камера заднего вида'],
      location: 'Корея', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('hyundai-sonata', 'hyundai-sonata', 6)
    },
    {
      id: 'kia-k5-korea-2023',
      brand: 'Kia', model: 'K5', year: 2023,
      engineVolume: 2.0, horsePower: 160,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 23800, price: 2750000,
      features: ['Цена под ключ', 'Бесключевой доступ', 'Светодиодные фары', 'Круиз-контроль'],
      location: 'Корея', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('kia-k5', 'kia-k5', 6)
    }
  ];
  var REVIEWS = [
    {
      photo: 'images/clients/tiguan-family.webp',
      video: 'video/tiguan-family.mp4', dur: '1:29',
      name: 'Семья клиентов', city: '', car: 'Volkswagen Tiguan L Pro',
      text: 'Сомневались долго — рассказывают, как решились и почему остались довольны.'
    },
    {
      photo: 'images/clients/kia-k3.jpg',
      video: 'video/kia-k3.mp4', dur: '0:59',
      name: 'Александр', city: '', car: 'Kia K3',
      text: 'Полгода искал компанию и несколько раз менял решение по машине.'
    },
    {
      photo: 'images/clients/audi-a3.jpg',
      video: 'video/audi-a3.mp4', dur: '0:49',
      name: 'Денис', city: 'Москва', car: 'Audi A3',
      text: 'О подборе, документах и о том, почему вернётся за следующим авто.'
    },
    {
      photo: 'images/clients/hyundai-avante.webp',
      video: 'video/hyundai-avante.mp4', dur: '0:42',
      name: 'Сергей', city: '', car: 'Hyundai Avante',
      text: 'Рассказывает про сроки и сопровождение на каждом этапе сделки.'
    },
    {
      photo: 'images/clients/mazda-cx5.jpg',
      video: 'video/mazda-cx5.mp4', dur: '0:40',
      name: 'Владимир', city: '', car: 'Mazda CX-5',
      text: 'Об ожидании автомобиля и о том, как держали в курсе по дороге.'
    },
    {
      photo: 'images/clients/toyota-rav4.webp',
      video: 'video/toyota-rav4.mp4', dur: '0:28',
      name: 'Сергей', city: '', car: 'Toyota RAV-4',
      text: 'Коротко о сроках, цене и работе менеджеров.'
    },
    {
      photo: 'images/clients/fiat-spider.webp',
      video: 'video/fiat-spider.mp4', dur: '0:15',
      name: 'Кирилл', city: '', car: 'Fiat Spider',
      text: 'Первые эмоции сразу после получения ключей.'
    }
  ];
  var YANDEX_REVIEWS = [
    { name: 'Вячеслав К.', car: 'Kia Seltos', date: '4 июня',
      text: 'Обратился в CarZ3 по рекомендации друга. Мне подобрали именно то, что хотел, — компактный кроссовер с полным приводом КИА СЕЛТОС. Работают с договором, никаких скрытых платежей и накруток, всё чётко и понятно. Всегда на связи и ответят на любой интересующий вопрос. РЕКОМЕНДУЮ.' },
    { name: 'Оксана К.', car: 'Mazda CX-5', date: '2 августа',
      text: 'Ребята помогли осуществить мечту. Озвучила свой запрос — в течение двух дней подобрали машину, и уже через месяц она у меня. От меня минимум движений, ребята всё делают сами, максимум спокойствия. Спасибо за машину, она прекрасна!' },
    { name: 'Eugene L.', car: 'Volkswagen Tayron', date: '20 октября 2025',
      text: 'Планировал из Кореи, но не нашлось варианта в мой бюджет. Предложили из Китая — объяснили отличия, недостатки и преимущества. Машина приехала в срок, цена строго как в договоре. Состояние полностью соответствует заявленному.' },
    { name: 'Денис Скоба', car: '', date: '26 июня',
      text: 'Мне посоветовали автомобиль классом выше, при этом оставить в том же бюджете. Была озвучена сумма под ключ — и она не изменилась ни на рубль. Результатом сотрудничества остался очень доволен. Однозначно рекомендую.' },
    { name: 'Владимир А.', car: 'Nissan X-Trail', date: '3 июня',
      text: 'Заказал X-Trail из Китая, быстро заключили договор. Александр всегда был на связи, ежедневно узнавал статус по авто. Как авто доехал до Москвы, растаможили буквально за 2 дня. Я приехал и забрал новый авто уже на номерах.' },
    { name: 'Нина Б.', car: '', date: '10 июля',
      text: 'Долго искали надёжную компанию с отличной репутацией. Обратились в CarZ3 и не прогадали. Всё подробно рассказали, на этапе подбора учитывали все наши пожелания. Михаил и Александр всё сделали на высшем уровне!' },
    { name: 'Алёна', car: 'BMW X4', date: '17 сентября 2025',
      text: 'Заказывала БМВ Х4, как и обещали — привезли в срок, постоянно были со мной на связи, всё подробно объясняли и отвечали на все мои дурацкие вопросы. Очень рекомендую всем!' },
    { name: 'Артём З.', car: '', date: '3 июня',
      text: 'CarZ3 оперативно привезли мне машину из Китая и профессионально решили все вопросы с документами и доп. опциями. Отличный сервис — удивили качеством и вниманием. Спасибо, рекомендую!' },
    { name: 'Валерий Косарев', car: 'Kia Carnival', date: '1 октября 2025',
      text: 'Заказал Kia Carnival из Кореи — автомобиль пришёл в срок, реальность превзошла ожидания. Остался очень доволен, советую.' },
    { name: 'Денис', car: 'Skoda Kodiaq', date: '22 сентября 2025',
      text: 'Лучшие цены, что я видел. На каждом этапе видеоответ о машине. Привезли Kodiaq за полтора месяца, как и договаривались, день в день. Рекомендую.' }
  ];
  var CLIENT_PHOTOS = [
    { src: 'images/clients/tayron-1.webp',        alt: 'Выдача Volkswagen Tayron клиенту CarZ3' },
    { src: 'images/clients/coolray-1.jpg',       alt: 'Выдача Geely Coolray клиентке CarZ3' },
    { src: 'images/clients/tiguan-family.webp',   alt: 'Выдача Volkswagen Tiguan L Pro семье клиента CarZ3' },
    { src: 'images/clients/audi-q3-sunset.webp',  alt: 'Выдача Audi Q3 клиентке CarZ3 на закате' },
    { src: 'images/clients/kia-seltos-1.jpg',    alt: 'Выдача Kia Seltos клиенту Вячеславу' },
    { src: 'images/clients/skoda-superb.webp',    alt: 'Выдача Skoda Superb клиенту CarZ3' },
    { src: 'images/clients/audi-a3.jpg',         alt: 'Выдача Audi A3 клиенту Денису из Москвы' },
    { src: 'images/clients/mazda-cx5-oksana.jpg',alt: 'Выдача Mazda CX-5 клиентке Оксане' },
    { src: 'images/clients/jetour-x70s.jpg',     alt: 'Выдача Jetour X70S клиенту CarZ3' },
    { src: 'images/clients/audi-q3-family.jpg',  alt: 'Выдача Audi Q3 семье клиента CarZ3' },
    { src: 'images/clients/mercedes-a.jpg',      alt: 'Выдача Mercedes-Benz A-class клиенту CarZ3' },
    { src: 'images/clients/honda-vezel.jpg',     alt: 'Выдача Honda Vezel клиентке CarZ3' },
    { src: 'images/clients/nissan-xtrail.jpg',   alt: 'Выдача Nissan X-Trail клиенту CarZ3' },
    { src: 'images/clients/nissan-qashqai.jpg',  alt: 'Передача ключей от Nissan Qashqai клиентке CarZ3' },
    { src: 'images/clients/geely-vision.jpg',    alt: 'Выдача Geely Vision X6 Pro клиенту CarZ3' },
    { src: 'images/clients/tiguan-white.jpg',    alt: 'Выдача Volkswagen Tiguan L Pro клиенту CarZ3' },
    { src: 'images/clients/tayron-2.jpg',        alt: 'Клиент CarZ3 с ключами от Volkswagen Tayron' },
    { src: 'images/clients/coolray-2.jpg',       alt: 'Geely Coolray с подарочным бантом' },
    { src: 'images/clients/kia-seltos-2.jpg',    alt: 'Kia Seltos, переданный клиенту CarZ3' },
    { src: 'images/clients/mazda-cx5-num.jpg',   alt: 'Mazda CX-5 на номерах РФ после выдачи' },
    { src: 'images/clients/audi-q3-solo.jpg',    alt: 'Audi Q3 с подарочным бантом на площадке CarZ3' },
    { src: 'images/clients/tiguan-blue.jpg',     alt: 'Volkswagen Tiguan L Pro голубого цвета с бантом' },
    { src: 'images/clients/skoda-close.jpg',     alt: 'Skoda Superb крупным планом с подарочным бантом' },
    { src: 'images/clients/hyundai-avante.webp',  alt: 'Hyundai Avante с подарочным бантом' },
    { src: 'images/clients/bmw-white.jpg',        alt: 'Выдача белого BMW клиенту CarZ3', style: 'object-position: 50% 15%;' },
    { src: 'images/clients/geely-monjaro.jpg',    alt: 'Выдача Geely Monjaro клиенту CarZ3' },
    { src: 'images/clients/nissan-black.jpg',     alt: 'Выдача чёрного Nissan клиенту CarZ3' },
    { src: 'images/clients/audi-grey.jpg',        alt: 'Выдача серого Audi клиенту CarZ3' },
    { src: 'images/clients/kia-carnival.jpg',     alt: 'Выдача Kia Carnival клиенту CarZ3' },
    { src: 'images/clients/bmw-grey-lady.jpg',    alt: 'Выдача BMW клиентке CarZ3' },
    { src: 'images/clients/skoda-white.jpg',      alt: 'Выдача белой Skoda клиенту CarZ3' },
    { src: 'images/clients/bmw-black.jpg',        alt: 'Выдача чёрного BMW клиенту CarZ3' },
    { src: 'images/clients/coolray-new.jpg',      alt: 'Выдача Geely Coolray нового поколения' },
    { src: 'images/clients/kia-seltos-blonde.jpg',alt: 'Выдача белого Kia Seltos клиентке CarZ3' },
    { src: 'images/clients/jetour-t2.jpg',        alt: 'Выдача Jetour T2 клиенту CarZ3' },
    { src: 'images/clients/mercedes-gle.jpg',     alt: 'Выдача Mercedes-Benz GLE клиенту CarZ3' },
    { src: 'images/clients/tiguan-rline.jpg',     alt: 'Выдача Volkswagen Tiguan R-Line клиенту CarZ3' },
    { src: 'images/clients/skoda-superb-winter.jpg', alt: 'Выдача Skoda Superb зимой' },
    { src: 'images/clients/samsung-qm6.jpg',      alt: 'Выдача Samsung QM6 клиенту CarZ3' },
    { src: 'images/clients/mazda-cx5-cherry.jpg', alt: 'Выдача вишнёвой Mazda CX-5 клиентке CarZ3' },
    { src: 'images/clients/bmw-x1.jpg',           alt: 'Выдача BMW X1 клиенту CarZ3' },
    { src: 'images/clients/hyundai-sonata.jpg',   alt: 'Выдача Hyundai Sonata клиенту CarZ3' },
    { src: 'images/clients/kia-sportage.jpg',     alt: 'Выдача Kia Sportage клиентке CarZ3' },
    { src: 'images/clients/kia-sorento.jpg',      alt: 'Выдача Kia Sorento клиенту CarZ3' },
    { src: 'images/clients/jetta-vs5.jpg',        alt: 'Выдача Jetta VS5 клиенту CarZ3' },
    { src: 'images/clients/honda-hrv.jpg',        alt: 'Выдача Honda HR-V клиентам CarZ3' },
    { src: 'images/clients/coolray-grey.jpg',     alt: 'Выдача Geely Coolray клиенту CarZ3' },
    { src: 'images/clients/bmw-5.jpg',            alt: 'Выдача BMW 5 серии клиенту CarZ3' }
  ];
  var PROCESS_LAST_PHOTO = {
    src: 'images/clients/mercedes-a.jpg',
    alt: 'Клиент CarZ3 получает автомобиль с полным пакетом документов',
    style: 'object-position: 50% 80%;'
  };
  var VIDEOS = [
    { file: 'video/tiguan-family.mp4',   poster: 'video/posters/tiguan-family.jpg',   dur: '1:29', title: 'Семья о покупке Tiguan L Pro',   note: 'Сомневались долго — теперь счастливы' },
    { file: 'video/kia-k3.mp4',          poster: 'video/posters/kia-k3.jpg',          dur: '0:59', title: 'Александр — Kia K3',              note: 'Полгода искал компанию' },
    { file: 'video/audi-a3.mp4',         poster: 'video/posters/audi-a3.jpg',         dur: '0:49', title: 'Денис из Москвы — Audi A3',       note: 'Следующее авто тоже здесь' },
    { file: 'video/hyundai-avante.mp4',  poster: 'video/posters/hyundai-avante.jpg',  dur: '0:42', title: 'Сергей — Hyundai Avante',         note: 'Прозрачно и спокойно' },
    { file: 'video/mazda-cx5.mp4',       poster: 'video/posters/mazda-cx5.jpg',       dur: '0:40', title: 'Владимир — Mazda CX-5',           note: 'Уже рекомендую друзьям' },
    { file: 'video/toyota-rav4.mp4',     poster: 'video/posters/toyota-rav4.jpg',     dur: '0:28', title: 'Сергей — Toyota RAV-4',           note: 'Быстро и в срок' },
    { file: 'video/fiat-spider.mp4',     poster: 'video/posters/fiat-spider.jpg',     dur: '0:15', title: 'Кирилл — Fiat Spider',            note: 'Полный восторг' }
  ];
  var CLIPS = [
    { file: 'video/clip-tula.mp4',       poster: 'video/posters/clip-tula.jpg',       dur: '0:17', title: 'Отправка клиенту в Тулу' },
    { file: 'video/clip-jetour.mp4',     poster: 'video/posters/clip-jetour.jpg',     dur: '0:11', title: 'Jetour X70S уезжает к владельцу' },
    { file: 'video/clip-audi-a3.mp4',    poster: 'video/posters/clip-audi-a3.jpg',    dur: '0:10', title: 'Первые эмоции за рулём Audi A3' },
    { file: 'video/clip-tiguan.mp4',     poster: 'video/posters/clip-tiguan.jpg',     dur: '0:09', title: 'Знакомство с Tiguan L Pro' },
    { file: 'video/clip-skoda.mp4',      poster: 'video/posters/clip-skoda.jpg',      dur: '0:08', title: 'Skoda Superb в день выдачи' },
    { file: 'video/clip-mercedes.mp4',   poster: 'video/posters/clip-mercedes.jpg',   dur: '0:04', title: 'Mercedes A-class уезжает' }
  ];
  var FAQ = [
    {
      q: 'Сколько занимает доставка?',
      a: 'От 7 дней. Точный срок зависит от направления и маршрута — назовём его до подписания договора и зафиксируем в нём.'
    },
    {
      q: 'Что входит в итоговую цену?',
      a: 'Стоимость автомобиля, логистика, таможенные платежи, утилизационный сбор и оформление документов. Цена фиксируется до начала сделки и не меняется по дороге.'
    },
    {
      q: 'Можно ли увидеть автомобиль до покупки?',
      a: 'Да. Наш специалист на месте осматривает машину и присылает реальные фотографии и отчёт о состоянии в течение суток после запроса.'
    },
    {
      q: 'Нужно ли платить всю сумму сразу?',
      a: 'Нет. Возможен вариант, когда мы выкупаем автомобиль за свой счёт — условия обсуждаются индивидуально.'
    },
    {
      q: 'Какие документы я получу?',
      a: 'Полный пакет для постановки на учёт, включая СБКТС и ЭПТС. Автомобиль передаётся оформленным и готовым к эксплуатации.'
    },
    {
      q: 'Можно ли привезти конкретную машину, которой нет в каталоге?',
      a: 'Да, это основной формат работы. Расскажите, что ищете, — подберём варианты под модель, комплектацию и бюджет.'
    },
    {
      q: 'В каких городах вы работаете?',
      a: 'Расчёт под ключ указываем до Москвы, но доставляем в любой город России. Мы уже отправляли автомобили клиентам в другие регионы.'
    },
    {
      q: 'Как оформляется сделка?',
      a: 'По официальному договору: в нём фиксируются комплектация, итоговая стоимость и сроки поставки.'
    }
  ];
  var HERO_PHOTO = 'hero.webp';
  var FLAG_MODE = 'images';
  var DEFAULT_COUNTRY = 'RU';
  var COUNTRIES_RAW = [
    'AU:Австралия:61',
    'AT:Австрия:43',
    'AZ:Азербайджан:994',
    'AL:Албания:355',
    'DZ:Алжир:213',
    'AO:Ангола:244',
    'AD:Андорра:376',
    'AG:Антигуа и Барбуда:1268',
    'AR:Аргентина:54',
    'AM:Армения:374',
    'AF:Афганистан:93',
    'BS:Багамы:1242',
    'BD:Бангладеш:880',
    'BB:Барбадос:1246',
    'BH:Бахрейн:973',
    'BY:Беларусь:375',
    'BZ:Белиз:501',
    'BE:Бельгия:32',
    'BJ:Бенин:229',
    'BG:Болгария:359',
    'BO:Боливия:591',
    'BA:Босния и Герцеговина:387',
    'BW:Ботсвана:267',
    'BR:Бразилия:55',
    'BN:Бруней:673',
    'BF:Буркина-Фасо:226',
    'BI:Бурунди:257',
    'BT:Бутан:975',
    'VU:Вануату:678',
    'VA:Ватикан:39',
    'GB:Великобритания:44',
    'HU:Венгрия:36',
    'VE:Венесуэла:58',
    'TL:Восточный Тимор:670',
    'VN:Вьетнам:84',
    'GA:Габон:241',
    'HT:Гаити:509',
    'GY:Гайана:592',
    'GM:Гамбия:220',
    'GH:Гана:233',
    'GP:Гваделупа:590',
    'GT:Гватемала:502',
    'GN:Гвинея:224',
    'GW:Гвинея-Бисау:245',
    'DE:Германия:49',
    'HN:Гондурас:504',
    'HK:Гонконг:852',
    'GD:Гренада:1473',
    'GR:Греция:30',
    'GE:Грузия:995',
    'DK:Дания:45',
    'CD:Демократическая Республика Конго:243',
    'DJ:Джибути:253',
    'DM:Доминика:1767',
    'DO:Доминиканская Республика:1809',
    'EG:Египет:20',
    'ZM:Замбия:260',
    'ZW:Зимбабве:263',
    'IL:Израиль:972',
    'IN:Индия:91',
    'ID:Индонезия:62',
    'JO:Иордания:962',
    'IQ:Ирак:964',
    'IR:Иран:98',
    'IE:Ирландия:353',
    'IS:Исландия:354',
    'ES:Испания:34',
    'IT:Италия:39',
    'YE:Йемен:967',
    'CV:Кабо-Верде:238',
    'KZ:Казахстан:7',
    'KY:Каймановы острова:1345',
    'KH:Камбоджа:855',
    'CM:Камерун:237',
    'CA:Канада:1',
    'QA:Катар:974',
    'KE:Кения:254',
    'CY:Кипр:357',
    'KG:Киргизия:996',
    'KI:Кирибати:686',
    'CN:Китай:86',
    'KP:КНДР:850',
    'CO:Колумбия:57',
    'KM:Коморы:269',
    'CG:Конго:242',
    'XK:Косово:383',
    'CR:Коста-Рика:506',
    'CI:Кот-д’Ивуар:225',
    'CU:Куба:53',
    'KW:Кувейт:965',
    'LA:Лаос:856',
    'LV:Латвия:371',
    'LS:Лесото:266',
    'LR:Либерия:231',
    'LB:Ливан:961',
    'LY:Ливия:218',
    'LT:Литва:370',
    'LI:Лихтенштейн:423',
    'LU:Люксембург:352',
    'MU:Маврикий:230',
    'MR:Мавритания:222',
    'MG:Мадагаскар:261',
    'MO:Макао:853',
    'MW:Малави:265',
    'MY:Малайзия:60',
    'ML:Мали:223',
    'MV:Мальдивы:960',
    'MT:Мальта:356',
    'MA:Марокко:212',
    'MH:Маршалловы Острова:692',
    'MX:Мексика:52',
    'FM:Микронезия:691',
    'MZ:Мозамбик:258',
    'MD:Молдова:373',
    'MC:Монако:377',
    'MN:Монголия:976',
    'MM:Мьянма:95',
    'NA:Намибия:264',
    'NR:Науру:674',
    'NP:Непал:977',
    'NE:Нигер:227',
    'NG:Нигерия:234',
    'BQ:Нидерландские Карибы:599',
    'NL:Нидерланды:31',
    'NI:Никарагуа:505',
    'NU:Ниуэ:683',
    'NZ:Новая Зеландия:64',
    'NC:Новая Каледония:687',
    'NO:Норвегия:47',
    'AE:ОАЭ:971',
    'OM:Оман:968',
    'CK:Острова Кука:682',
    'PK:Пакистан:92',
    'PW:Палау:680',
    'PS:Палестина:970',
    'PA:Панама:507',
    'PG:Папуа — Новая Гвинея:675',
    'PY:Парагвай:595',
    'PE:Перу:51',
    'PL:Польша:48',
    'PT:Португалия:351',
    'KR:Республика Корея:82',
    'RU:Россия:7',
    'RW:Руанда:250',
    'RO:Румыния:40',
    'SV:Сальвадор:503',
    'WS:Самоа:685',
    'SM:Сан-Марино:378',
    'ST:Сан-Томе и Принсипи:239',
    'SA:Саудовская Аравия:966',
    'MK:Северная Македония:389',
    'SC:Сейшелы:248',
    'SN:Сенегал:221',
    'VC:Сент-Винсент и Гренадины:1784',
    'KN:Сент-Китс и Невис:1869',
    'LC:Сент-Люсия:1758',
    'RS:Сербия:381',
    'SG:Сингапур:65',
    'SY:Сирия:963',
    'SK:Словакия:421',
    'SI:Словения:386',
    'SB:Соломоновы Острова:677',
    'SO:Сомали:252',
    'SD:Судан:249',
    'SR:Суринам:597',
    'US:США:1',
    'SL:Сьерра-Леоне:232',
    'TJ:Таджикистан:992',
    'TH:Таиланд:66',
    'TW:Тайвань:886',
    'TZ:Танзания:255',
    'TG:Того:228',
    'TO:Тонга:676',
    'TT:Тринидад и Тобаго:1868',
    'TV:Тувалу:688',
    'TN:Тунис:216',
    'TM:Туркмения:993',
    'TR:Турция:90',
    'UG:Уганда:256',
    'UZ:Узбекистан:998',
    'UA:Украина:380',
    'UY:Уругвай:598',
    'FJ:Фиджи:679',
    'PH:Филиппины:63',
    'FI:Финляндия:358',
    'FR:Франция:33',
    'HR:Хорватия:385',
    'CF:ЦАР:236',
    'TD:Чад:235',
    'ME:Черногория:382',
    'CZ:Чехия:420',
    'CL:Чили:56',
    'CH:Швейцария:41',
    'SE:Швеция:46',
    'LK:Шри-Ланка:94',
    'EC:Эквадор:593',
    'GQ:Экваториальная Гвинея:240',
    'ER:Эритрея:291',
    'SZ:Эсватини:268',
    'EE:Эстония:372',
    'ET:Эфиопия:251',
    'ZA:ЮАР:27',
    'SS:Южный Судан:211',
    'JM:Ямайка:1876',
    'JP:Япония:81',
  ];
  var COUNTRIES = COUNTRIES_RAW.map(function (row) {
    var p = row.split(':');
    return { iso: p[0], name: p[1], dial: p[2] };
  });
  function flagEmoji(iso) {
    return iso.toUpperCase().replace(/./g, function (ch) {
      return String.fromCodePoint(127397 + ch.charCodeAt(0));
    });
  }
  function flagHtml(iso) {
    if (FLAG_MODE === 'images') {
      return '<img class="flag-img" src="https://flagcdn.com/w40/' + iso.toLowerCase() +
        '.png" alt="" width="20" height="15" loading="lazy" decoding="async">';
    }
    return '<span class="flag-emoji">' + flagEmoji(iso) + '</span>';
  }
  var BOT_URL = 'https://t.me/CarZ3_Catalog_bot';
  var FORM_ENDPOINT = '';
  var HOME_LIMIT = 6;      // карточек на главной
  var CATALOG_LIMIT = 10;  // максимум на странице каталога
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;
  function esc(value) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function onMediaChange(mq, handler) {
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  }
  function num(value) {
    return new Intl.NumberFormat('ru-RU').format(value);
  }
  function formatPrice(car) {
    if (typeof car.price !== 'number' || !isFinite(car.price)) return 'Цена по запросу';
    return num(car.price) + ' \u20BD';
  }
  function carTitle(car) {
    return [car.brand, car.model].filter(Boolean).join(' ').trim() || 'Автомобиль';
  }
  function carCategory(car) {
    var place = car.location || 'Другое';
    var state = (typeof car.mileage === 'number' && car.mileage === 0) ? 'новые' : 'б/у';
    return place + ' ' + state;
  }
  function mileageText(car) {
    if (typeof car.mileage !== 'number') return car.mileage ? String(car.mileage) : '';
    return car.mileage === 0 ? 'новый' : num(car.mileage) + ' км';
  }
  function managerLink(car) {
    var name = String(car.manager || '').replace(/[^A-Za-z0-9_]/g, '');
    if (!name) return BOT_URL;
    var text = 'Здравствуйте! Интересует ' + carTitle(car) + ' ' + car.year + ' — ' + formatPrice(car);
    return 'https://t.me/' + name + '?text=' + encodeURIComponent(text);
  }
  function trapFocus(e, box) {
    if (e.key !== 'Tab' || !box) return;
    var nodes = box.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var items = Array.prototype.filter.call(nodes, function (el) {
      return el.offsetParent !== null && !el.hidden;
    });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  function scrollLock(on) {
    document.body.classList.toggle('is-scroll-locked', on);
  }
  function addSwipe(el, onNext, onPrev) {
    var x0 = null, y0 = null;
    el.addEventListener('touchstart', function (e) {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        if (dx < 0) onNext(); else onPrev();
      }
      x0 = y0 = null;
    }, { passive: true });
  }
  function setupReveal(nodes) {
    var list = Array.prototype.slice.call(nodes || []);
    if (!list.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      list.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
      return;
    }
    list.forEach(function (el) { el.classList.add('reveal'); });
    var observer = new IntersectionObserver(function (entries) {
      var shown = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = Math.min(shown, 5) * 70;
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('is-visible');
        observer.unobserve(el);
        shown++;
        setTimeout(function () {
          el.style.transitionDelay = '';
          el.style.willChange = 'auto';
        }, delay + 560);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    list.forEach(function (el) { observer.observe(el); });
  }
  function revealPageBlocks() {
    setupReveal(document.querySelectorAll('[data-reveal]'));
  }
  function setupTouchEffects() {
    if (!isTouch) return;
    var SELECTOR = '.origin-card, .trust-card, .review, .car-card, .step, .destination, .stat,' +
      ' .plus, .service, .price-part, .vcard, .ya-card, .legal-block';
    var HOLD = 1600;
    document.addEventListener('touchstart', function (e) {
      var el = e.target.closest ? e.target.closest(SELECTOR) : null;
      if (!el) return;
      el.classList.add('is-touched');
      if (el._touchTimer) clearTimeout(el._touchTimer);
      el._touchTimer = setTimeout(function () {
        el.classList.remove('is-touched');
      }, HOLD);
    }, { passive: true });
  }
  function setupHeroPhoto() {
    if (!HERO_PHOTO || HERO_PHOTO === 'hero.webp') return;
    var bg = document.querySelector('.hero__bg');
    if (!bg) return;
    bg.style.backgroundImage = 'url("' + HERO_PHOTO + '")';
  }
  function setupTimeline() {
    var timeline = document.querySelector('.timeline');
    if (!timeline) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      timeline.classList.add('is-filled');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          timeline.classList.add('is-filled');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(timeline);
  }
  function setupMenu() {
    var burger = document.querySelector('[data-burger]');
    var menu = document.querySelector('[data-menu]');
    if (!burger || !menu) return;
    var items = menu.querySelectorAll('.menu__nav a');
    items.forEach(function (item, i) {
      item.style.transitionDelay = (i * 60) + 'ms';
    });
    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      burger.classList.toggle('is-active', open);
      scrollLock(open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    }
    burger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link) {
        setOpen(false);
        var href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            setTimeout(function() {
              target.scrollIntoView({ behavior: 'smooth' });
              history.pushState(null, null, href);
            }, 150);
          }
        }
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
    onMediaChange(window.matchMedia('(min-width: 1024px)'), function (e) {
      if (e.matches) setOpen(false);
    });
  }
  function setupCursor() {
    var query = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
    var dot = null, ring = null, raf = null;
    var mouseX = 0, mouseY = 0;
    var dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    var scale = 1, targetScale = 1;
    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.classList.add('is-on');
      ring.classList.add('is-on');
    }
    function onOver(e) {
      if (!e.target || !e.target.closest) return;
      var interactive = !!e.target.closest('a, button, .cvp-container, [data-video], [data-gallery]');
      targetScale = interactive ? 1.55 : 1;
      ring.classList.toggle('is-hover', interactive);
    }
    function onLeave() {
      dot.classList.remove('is-on');
      ring.classList.remove('is-on');
    }
    function tick() {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      scale += (targetScale - scale) * 0.18;
      dot.style.transform = 'translate3d(' + dotX + 'px,' + dotY + 'px,0)';
      ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0) scale(' + scale + ')';
      raf = requestAnimationFrame(tick);
    }
    function enable() {
      if (dot) return;
      dot = document.createElement('div');
      dot.className = 'cursor-dot';
      ring = document.createElement('div');
      ring.className = 'cursor-ring';
      dot.setAttribute('aria-hidden', 'true');
      ring.setAttribute('aria-hidden', 'true');
      document.body.appendChild(dot);
      document.body.appendChild(ring);
      document.documentElement.classList.add('custom-cursor-active');
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseover', onOver);
      document.addEventListener('mouseleave', onLeave);
      bindFrames();
      raf = requestAnimationFrame(tick);
    }
    function setActive(on) {
      document.documentElement.classList.toggle('custom-cursor-active', on);
      if (dot) dot.classList.toggle('is-off', !on);
      if (ring) ring.classList.toggle('is-off', !on);
    }
    function bindFrames() {
      document.querySelectorAll('.map-frame, iframe').forEach(function (frame) {
        if (frame._cursorBound) return;
        frame._cursorBound = true;
        frame.addEventListener('mouseenter', function () { setActive(false); });
        frame.addEventListener('mouseleave', function () { setActive(true); });
      });
    }
    function disable() {
      if (!dot) return;
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      dot.remove();
      ring.remove();
      dot = ring = null;
    }
    if (reduceMotion) return;
    if (query.matches) enable();
    onMediaChange(query, function (e) {
      if (e.matches) enable(); else disable();
    });
  }
  function createLightbox() {
    var box = null, boxImg = null, caption = null, zoomHint = null;
    var items = [], current = 0, lastFocus = null;
    var scale = 1, minScale = 1, maxScale = 4;
    var originX = 0, originY = 0;
    var panX = 0, panY = 0;
    var isPanning = false, panStartX = 0, panStartY = 0;
    var lastTap = 0;
    var pinchStartDist = 0, pinchStartScale = 1;
    function applyTransform() {
      boxImg.style.transform = 'scale(' + scale + ') translate(' + panX / scale + 'px, ' + panY / scale + 'px)';
      boxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    }
    function resetZoom() {
      scale = 1; panX = 0; panY = 0;
      boxImg.style.transition = 'transform .25s ease';
      applyTransform();
      setTimeout(function () { boxImg.style.transition = ''; }, 260);
    }
    function clampPan() {
      var maxPx = (boxImg.offsetWidth * (scale - 1)) / 2;
      var maxPy = (boxImg.offsetHeight * (scale - 1)) / 2;
      panX = Math.max(-maxPx, Math.min(maxPx, panX));
      panY = Math.max(-maxPy, Math.min(maxPy, panY));
    }
    function build() {
      box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-label', 'Просмотр фотографии');
      box.innerHTML = '' +
        '<button class="lightbox__close" type="button" aria-label="Закрыть">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Предыдущее фото">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>' +
        '</button>' +
        '<figure class="lightbox__figure">' +
        '<img class="lightbox__img" src="" alt="" draggable="false">' +
        '<figcaption class="lightbox__caption"></figcaption>' +
        '</figure>' +
        '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Следующее фото">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>' +
        '</button>' +
        '<span class="lightbox__zoom-hint">Колесо мыши или двойной клик — зум</span>';
      document.body.appendChild(box);
      boxImg = box.querySelector('.lightbox__img');
      caption = box.querySelector('.lightbox__caption');
      zoomHint = box.querySelector('.lightbox__zoom-hint');
      box.querySelector('.lightbox__close').addEventListener('click', close);
      box.querySelector('.lightbox__nav--prev').addEventListener('click', function () { if (scale > 1) { resetZoom(); setTimeout(function () { go(-1); }, 260); } else { go(-1); } });
      box.querySelector('.lightbox__nav--next').addEventListener('click', function () { if (scale > 1) { resetZoom(); setTimeout(function () { go(1); }, 260); } else { go(1); } });
      box.addEventListener('click', function (e) {
        if (e.target === box) close();
      });
      box.addEventListener('wheel', function (e) {
        e.preventDefault();
        var delta = e.deltaY < 0 ? 1.15 : 0.88;
        var rect = boxImg.getBoundingClientRect();
        originX = e.clientX - rect.left - rect.width / 2;
        originY = e.clientY - rect.top - rect.height / 2;
        var newScale = Math.max(minScale, Math.min(maxScale, scale * delta));
        if (newScale !== scale) {
          panX += originX * (1 - newScale / scale);
          panY += originY * (1 - newScale / scale);
          scale = newScale;
          if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
          clampPan();
          applyTransform();
        }
      }, { passive: false });
      boxImg.addEventListener('dblclick', function (e) {
        if (scale > 1) {
          resetZoom();
        } else {
          var rect = boxImg.getBoundingClientRect();
          panX = -(e.clientX - rect.left - rect.width / 2);
          panY = -(e.clientY - rect.top - rect.height / 2);
          scale = 2.5;
          clampPan();
          boxImg.style.transition = 'transform .3s ease';
          applyTransform();
          setTimeout(function () { boxImg.style.transition = ''; }, 320);
        }
      });
      boxImg.addEventListener('mousedown', function (e) {
        if (scale <= 1) return;
        e.preventDefault();
        isPanning = true;
        panStartX = e.clientX - panX;
        panStartY = e.clientY - panY;
        boxImg.style.cursor = 'grabbing';
      });
      window.addEventListener('mousemove', function (e) {
        if (!isPanning) return;
        panX = e.clientX - panStartX;
        panY = e.clientY - panStartY;
        clampPan();
        applyTransform();
      });
      window.addEventListener('mouseup', function () {
        if (!isPanning) return;
        isPanning = false;
        boxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      });
      box.addEventListener('touchstart', function (e) {
        if (e.touches.length === 2) {
          e.preventDefault();
          pinchStartDist = Math.hypot(
            e.touches[1].clientX - e.touches[0].clientX,
            e.touches[1].clientY - e.touches[0].clientY
          );
          pinchStartScale = scale;
        } else if (e.touches.length === 1 && scale <= 1) {
          var now = Date.now();
          if (now - lastTap < 300) {
            e.preventDefault();
            scale = 2.5;
            panX = 0; panY = 0;
            boxImg.style.transition = 'transform .3s ease';
            applyTransform();
            setTimeout(function () { boxImg.style.transition = ''; }, 320);
          }
          lastTap = now;
        } else if (e.touches.length === 1 && scale > 1) {
          isPanning = true;
          panStartX = e.touches[0].clientX - panX;
          panStartY = e.touches[0].clientY - panY;
        }
      }, { passive: false });
      box.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) {
          e.preventDefault();
          var dist = Math.hypot(
            e.touches[1].clientX - e.touches[0].clientX,
            e.touches[1].clientY - e.touches[0].clientY
          );
          scale = Math.max(minScale, Math.min(maxScale, pinchStartScale * dist / pinchStartDist));
          if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
          clampPan();
          applyTransform();
        } else if (e.touches.length === 1 && isPanning) {
          e.preventDefault();
          panX = e.touches[0].clientX - panStartX;
          panY = e.touches[0].clientY - panStartY;
          clampPan();
          applyTransform();
        }
      }, { passive: false });
      box.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) isPanning = false;
      });
      addSwipe(box, function () { if (scale <= 1) go(1); }, function () { if (scale <= 1) go(-1); });
    }
    function show(i) {
      if (!items.length) return;
      current = (i + items.length) % items.length;
      var item = items[current];
      resetZoom();
      boxImg.src = item.src;
      boxImg.alt = item.alt || '';
      var text = items.length > 1
        ? (item.alt || '') + '  ·  ' + (current + 1) + ' / ' + items.length
        : (item.alt || '');
      caption.textContent = text.trim();
      caption.hidden = !text.trim();
      box.querySelectorAll('.lightbox__nav').forEach(function (b) { b.hidden = items.length < 2; });
    }
    function go(step) { show(current + step); }
    function onKey(e) {
      trapFocus(e, box);
      if (e.key === 'Escape') { if (scale > 1) resetZoom(); else close(); }
      else if (e.key === 'ArrowLeft' && scale <= 1) go(-1);
      else if (e.key === 'ArrowRight' && scale <= 1) go(1);
      else if (e.key === '+' || e.key === '=') {
        scale = Math.min(maxScale, scale * 1.3); clampPan(); applyTransform();
      } else if (e.key === '-') {
        scale = Math.max(minScale, scale / 1.3);
        if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
        clampPan(); applyTransform();
      }
    }
    function open(list, index) {
      if (!list || !list.length) return;
      if (!box) build();
      items = list;
      lastFocus = document.activeElement;
      show(index || 0);
      box.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      box.querySelector('.lightbox__close').focus();
    }
    function close() {
      if (!box) return;
      resetZoom();
      box.classList.remove('is-open');
      document.removeEventListener('keydown', onKey);
      if (!document.querySelector('.modal.is-open, .menu.is-open')) scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    return { open: open, close: close };
  }
  var lightbox = createLightbox();
  function cardSpecs(car) {
    var out = [];
    var m = mileageText(car);
    if (m) out.push(m);
    if (car.engineVolume) out.push(car.engineVolume.toFixed(1) + ' л');
    if (car.transmission) out.push(car.transmission);
    return out;
  }
  function carCardHtml(car) {
    var title = esc(carTitle(car));
    var cover = (car.images && car.images[0]) || '';
    var media = cover
      ? '<img src="' + esc(cover) + '" alt="' + title + ' ' + esc(car.year) + '" loading="lazy" decoding="async" width="640" height="400">'
      : '';
    var meta = [car.year, car.location].filter(Boolean).map(esc).join(' · ');
    var specs = cardSpecs(car);
    var specsHtml = specs.length
      ? '<div class="car-card__specs">' + specs.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>'
      : '';
    var price = car.priceIsFrom ? '<small>от</small>' + formatPrice(car) : formatPrice(car);
    return '' +
      '<article class="car-card" data-car-id="' + esc(car.id) + '">' +
      '<div class="car-card__media">' + media +
      (car.status ? '<span class="car-card__status">' + esc(car.status) + '</span>' : '') +
      '</div>' +
      '<div class="car-card__body">' +
      '<h3 class="car-card__title">' + title + '</h3>' +
      (meta ? '<p class="car-card__meta">' + meta + '</p>' : '') +
      specsHtml +
      '<p class="car-card__price">' + price + '</p>' +
      '<button class="btn btn--outline btn--sm" type="button" data-open-car="' + esc(car.id) + '">Подробнее</button>' +
      '</div>' +
      '</article>';
  }
  function createCarModal() {
    var modal = null, els = {}, car = null, photoIndex = 0;
    var lastFocus = null;
    function build() {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = '' +
        '<div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' +
        '<button class="modal__close" type="button" aria-label="Закрыть">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="modal__gallery">' +
        '<div class="modal__photos"></div>' +
        '<button class="modal__nav modal__nav--prev" type="button" aria-label="Предыдущее фото">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>' +
        '</button>' +
        '<button class="modal__nav modal__nav--next" type="button" aria-label="Следующее фото">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>' +
        '</button>' +
        '<span class="modal__counter"></span>' +
        '</div>' +
        '<div class="modal__body">' +
        '<p class="modal__status"></p>' +
        '<h3 class="modal__title" id="modalTitle"></h3>' +
        '<dl class="modal__specs"></dl>' +
        '<div class="modal__features"></div>' +
        '<p class="modal__price"></p>' +
        '<a class="btn btn--gold btn--full modal__cta" href="#" target="_blank" rel="noopener noreferrer">Написать менеджеру</a>' +
        '<p class="modal__hint">Нажмите на фото, чтобы открыть его на весь экран и увеличить</p>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);
      els.dialog = modal.querySelector('.modal__dialog');
      els.photos = modal.querySelector('.modal__photos');
      els.counter = modal.querySelector('.modal__counter');
      els.status = modal.querySelector('.modal__status');
      els.title = modal.querySelector('.modal__title');
      els.specs = modal.querySelector('.modal__specs');
      els.features = modal.querySelector('.modal__features');
      els.price = modal.querySelector('.modal__price');
      els.cta = modal.querySelector('.modal__cta');
      els.prev = modal.querySelector('.modal__nav--prev');
      els.next = modal.querySelector('.modal__nav--next');
      modal.querySelector('.modal__close').addEventListener('click', close);
      els.prev.addEventListener('click', function (e) { e.stopPropagation(); setPhoto(photoIndex - 1); });
      els.next.addEventListener('click', function (e) { e.stopPropagation(); setPhoto(photoIndex + 1); });
      els.photos.addEventListener('click', function (e) {
        if (!car || !e.target.classList.contains('modal__img')) return;
        lightbox.open(car.images.map(function (src, idx) {
          return { src: src, alt: carTitle(car) + ' ' + car.year + ' — фото ' + (idx + 1) };
        }), photoIndex);
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) close();
      });
      addSwipe(modal.querySelector('.modal__gallery'),
        function () { setPhoto(photoIndex + 1); },
        function () { setPhoto(photoIndex - 1); });
    }
    function setPhoto(i) {
      if (!car || !car.images.length) return;
      var imgs = els.photos.querySelectorAll('.modal__img');
      if (imgs.length) imgs[photoIndex].classList.remove('is-active');
      photoIndex = (i + car.images.length) % car.images.length;
      if (imgs.length) imgs[photoIndex].classList.add('is-active');
      els.counter.textContent = (photoIndex + 1) + ' / ' + car.images.length;
      var many = car.images.length > 1;
      els.prev.hidden = !many;
      els.next.hidden = !many;
      els.counter.hidden = !many;
    }
    function specRow(label, value) {
      if (!value) return '';
      return '<div class="modal__spec"><dt>' + esc(label) + '</dt><dd>' + esc(value) + '</dd></div>';
    }
    function fill(data) {
      car = data;
      photoIndex = 0;
      els.status.textContent = [car.status, car.location].filter(Boolean).join(' · ');
      els.title.textContent = carTitle(car) + ', ' + car.year;
      var engine = [];
      if (car.engineVolume) engine.push(car.engineVolume.toFixed(1) + ' л');
      if (car.horsePower) engine.push(car.horsePower + ' л.с.');
      els.specs.innerHTML =
        specRow('Двигатель', engine.join(' · ')) +
        specRow('Коробка', car.transmission) +
        specRow('Привод', car.drivetrain) +
        specRow('Пробег', mileageText(car)) +
        specRow('Год', car.year) +
        specRow('Поставка из', car.location);
      var features = car.features || [];
      els.features.innerHTML = features.length
        ? features.map(function (f) { return '<span class="tag">' + esc(f) + '</span>'; }).join('')
        : '';
      els.features.hidden = !features.length;
      els.price.innerHTML = car.priceIsFrom
        ? '<small>от</small>' + formatPrice(car)
        : formatPrice(car);
      els.cta.href = managerLink(car);
      els.photos.innerHTML = car.images.map(function (src, idx) {
        return '<img class="modal__img' + (idx === 0 ? ' is-active' : '') + '" src="' + esc(src) + '" alt="' + esc(carTitle(car) + ' ' + car.year + ' — фото ' + (idx + 1)) + '" draggable="false">';
      }).join('');
      setPhoto(0);
    }
    function onKey(e) {
      trapFocus(e, modal);
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') setPhoto(photoIndex - 1);
      else if (e.key === 'ArrowRight') setPhoto(photoIndex + 1);
    }
    function open(data) {
      if (!modal) build();
      fill(data);
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      els.dialog.scrollTop = 0;
      modal.querySelector('.modal__close').focus();
    }
    function close() {
      if (!modal) return;
      modal.classList.remove('is-open');
      document.removeEventListener('keydown', onKey);
      scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    return { open: open, close: close };
  }
  var carModal = createCarModal();
  function bindCarCards(root) {
    root.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-open-car]');
      var card = trigger || e.target.closest('[data-car-id]');
      if (!card) return;
      var id = (trigger || card).getAttribute('data-open-car') || card.getAttribute('data-car-id');
      var car = CARS.find(function (c) { return c.id === id; });
      if (car) carModal.open(car);
    });
  }
  function initHomeCars() {
    var grid = document.getElementById('homeGrid');
    if (!grid) return;
    grid.innerHTML = CARS.slice(0, HOME_LIMIT).map(carCardHtml).join('');
    setupReveal(grid.querySelectorAll('.car-card'));
    bindCarCards(grid);
  }
  function initCatalogPage() {
    var grid = document.getElementById('catalogGrid');
    if (!grid) return;
    var filtersBox = document.getElementById('catalogFilters');
    var countBox = document.getElementById('catalogCount');
    var noteCount = document.getElementById('catalogNoteCount');
    var shown = CARS.slice(0, CATALOG_LIMIT);
    var activeCountry = 'all';
    var activeCondition = 'all';
    if (noteCount) noteCount.textContent = shown.length;
    function draw() {
      var list = shown.filter(function (car) {
        var c = car.location || 'Другое';
        var isNew = (typeof car.mileage === 'number' && car.mileage === 0);
        var s = isNew ? 'new' : 'used';
        
        var matchCountry = (activeCountry === 'all') || (c === activeCountry);
        var matchCondition = (activeCondition === 'all') || (s === activeCondition);
        return matchCountry && matchCondition;
      });
      grid.innerHTML = list.map(carCardHtml).join('');
      if (countBox) {
        countBox.textContent = list.length
          ? 'Показано автомобилей: ' + list.length
          : 'В этой категории сейчас нет автомобилей';
      }
      setupReveal(grid.querySelectorAll('.car-card'));
    }
    function buildFilters() {
      if (!filtersBox) return;
      
      var countries = {};
      shown.forEach(function (car) {
        var c = car.location || 'Другое';
        if (c.toLowerCase() === 'бишкек') return; // Бишкек не пиши
        countries[c] = true;
      });
      
      var countryKeys = Object.keys(countries).sort(function(a, b) {
         if (a === 'Китай' && b !== 'Китай') return -1;
         if (b === 'Китай' && a !== 'Китай') return 1;
         if (a === 'Корея' && b !== 'Корея') return -1;
         if (b === 'Корея' && a !== 'Корея') return 1;
         return a.localeCompare(b, 'ru');
      });
      
      var countryHtml = '<div class="filter-row">' +
        '<button class="filter is-active" type="button" data-filter-type="country" data-filter="all">Все страны</button>' +
        countryKeys.map(function (c) {
          return '<button class="filter" type="button" data-filter-type="country" data-filter="' + esc(c) + '">' + esc(c) + '</button>';
        }).join('') +
        '</div>';

      var conditionHtml = '<div class="filter-row">' +
        '<button class="filter is-active" type="button" data-filter-type="condition" data-filter="all">Любое состояние</button>' +
        '<button class="filter" type="button" data-filter-type="condition" data-filter="new">Новые авто</button>' +
        '<button class="filter" type="button" data-filter-type="condition" data-filter="used">С пробегом</button>' +
        '</div>';

      filtersBox.innerHTML = countryHtml + conditionHtml;

      filtersBox.addEventListener('click', function (e) {
        var button = e.target.closest('.filter');
        if (!button) return;
        
        var type = button.getAttribute('data-filter-type');
        var val = button.getAttribute('data-filter');
        
        if (type === 'country') activeCountry = val;
        if (type === 'condition') activeCondition = val;
        
        var row = button.closest('.filter-row');
        row.querySelectorAll('.filter').forEach(function (el) {
          el.classList.toggle('is-active', el === button);
        });
        
        draw();
      });
    }
    buildFilters();
    draw();
    bindCarCards(grid);
  }
  function reviewCardHtml(review) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="m12 3.5 2.7 5.5 6 .9-4.35 4.2 1.03 6-5.38-2.83L6.62 20.1l1.03-6L3.3 9.9l6-.9z"/></svg>';
    }
    var playBadge = review.video
      ? '<span class="review__play" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>' +
          '<em>' + esc(review.dur || '') + '</em>' +
        '</span>'
      : '';
    var mediaInner = review.photo
      ? '<img src="' + esc(review.photo) + '" alt="' +
        esc(review.name ? review.name + ' — клиент CarZ3, ' + (review.car || '') : 'Клиент CarZ3 со своим автомобилем') +
        '" loading="lazy" decoding="async" width="640" height="400">' + playBadge
      : '';
    var media = '';
    if (review.photo && review.video) {
      media = '<button class="review__media review__media--play" type="button" data-review-video="' +
        esc(review.video) + '" aria-label="Смотреть видео-отзыв: ' + esc(review.name) + '">' + mediaInner + '</button>';
    } else if (review.photo) {
      media = '<div class="review__media">' + mediaInner + '</div>';
    }
    var avatar = review.photo ? '' :
      '<div class="review__avatar" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="8.5" r="3.75"/><path d="M4.5 20c0-3.6 3.4-5.75 7.5-5.75s7.5 2.15 7.5 5.75"/>' +
      '</svg>' +
      '</div>';
    var sub = [review.city, review.car].filter(Boolean).join(' · ');
    var meta = [review.date, review.source].filter(Boolean).join(' · ');
    return '' +
      '<div class="carousel__slide">' +
      '<article class="review">' +
      media +
      '<svg class="review__quote" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M9 6C6.2 7.4 4.5 10 4.5 13.2V18h6v-5.4H7.8c0-2 .6-3.4 2.4-4.4z"/>' +
      '<path d="M19 6c-2.8 1.4-4.5 4-4.5 7.2V18h6v-5.4h-2.7c0-2 .6-3.4 2.4-4.4z"/>' +
      '</svg>' +
      '<div class="review__stars" aria-hidden="true">' + stars + '</div>' +
      '<span class="sr-only">Оценка: 5 из 5</span>' +
      '<p class="review__text">' + esc(review.text) + '</p>' +
      '<div class="review__person">' + avatar +
      '<div class="review__meta">' +
      '<div class="review__name">' + esc(review.name) + '</div>' +
      (sub ? '<div class="review__city">' + esc(sub) + '</div>' : '') +
      (meta ? '<div class="review__src">' + esc(meta) + '</div>' : '') +
      '</div>' +
      '</div>' +
      '</article>' +
      '</div>';
  }
  function setupReviewsCarousel() {
    var root = document.getElementById('reviewsCarousel');
    if (!root) return;
    var list = REVIEWS.filter(function (r) { return r && (r.text || r.photo); });
    if (!list.length) {
      var section = root.closest('section');
      if (section) section.remove();
      document.querySelectorAll('a[href="#reviews"], a[href="index.html#reviews"]').forEach(function (link) {
        link.remove();
      });
      return;
    }
    var track = root.querySelector('.carousel__track');
    var dotsBox = root.querySelector('.carousel__dots');
    var prevBtn = root.querySelector('.carousel__arrow--prev');
    var nextBtn = root.querySelector('.carousel__arrow--next');
    track.innerHTML = list.map(reviewCardHtml).join('');
    var slides = track.querySelectorAll('.carousel__slide');
    var index = 0, perView = 1, maxIndex = 0, timer = null;
    var DELAY = 6500;
    var cachedWidth = 0;
    function calcPerView() {
      var w = cachedWidth || window.innerWidth;
      return w >= 900 ? 3 : (w >= 560 ? 2 : 1);
    }
    function layout() {
      perView = calcPerView();
      maxIndex = Math.max(0, list.length - perView);
      if (index > maxIndex) index = maxIndex;
      slides.forEach(function (s) { s.style.width = (100 / perView) + '%'; });
      renderDots();
      apply();
    }
    function apply() {
      track.style.transform = 'translateX(' + (-index * (100 / perView)) + '%)';
      dotsBox.querySelectorAll('.carousel__dot').forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
        d.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === maxIndex;
    }
    function renderDots() {
      var html = '';
      for (var i = 0; i <= maxIndex; i++) {
        html += '<button class="carousel__dot" type="button" data-go="' + i + '" aria-label="Отзыв ' + (i + 1) + '"></button>';
      }
      dotsBox.innerHTML = html;
    }
    function go(i) {
      index = i < 0 ? maxIndex : (i > maxIndex ? 0 : i);
      apply();
    }
    function start() {
      if (reduceMotion || list.length <= perView) return;
      stop();
      timer = setInterval(function () { go(index + 1); }, DELAY);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    dotsBox.addEventListener('click', function (e) {
      var dot = e.target.closest('[data-go]');
      if (!dot) return;
      go(parseInt(dot.getAttribute('data-go'), 10) || 0);
      start();
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { go(index - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(index + 1); start(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('touchstart', stop, { passive: true });
    root.addEventListener('touchend', function () { setTimeout(start, 3000); }, { passive: true });
    addSwipe(root, function () { go(index + 1); }, function () { go(index - 1); });
    if ('ResizeObserver' in window) {
      new ResizeObserver(function (entries) {
        if (entries && entries[0]) cachedWidth = entries[0].contentRect.width;
        layout();
      }).observe(root);
    } else {
      var resizeTimer = null;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layout, 150);
      });
    }
    layout();
    start();
  }
  function sendLead(payload) {
    if (!FORM_ENDPOINT) {
      if (window.console && console.info) {
        console.info('CarZ3: заявка не отправлена — не задан FORM_ENDPOINT в app.js', payload);
      }
      return Promise.resolve({ demo: true });
    }
    return fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return { demo: false };
    });
  }
  var ICON_ERROR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5"/><path d="M12 16.3v.2"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.3 12.2 2.6 2.6 4.8-5.2"/></svg>';
  function toast(message, kind) {
    var box = document.getElementById('toasts');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toasts';
      box.className = 'toasts';
      box.setAttribute('role', 'status');
      box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    var el = document.createElement('div');
    el.className = 'toast toast--' + (kind === 'ok' ? 'ok' : 'error');
    el.innerHTML = '<span class="toast__icon">' + (kind === 'ok' ? ICON_OK : ICON_ERROR) +
      '</span><span class="toast__text">' + esc(message) + '</span>';
    box.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('is-visible'); });
    setTimeout(function () {
      el.classList.remove('is-visible');
      setTimeout(function () { el.remove(); }, 400);
    }, 3500);
  }
  function setupCountryPicker(form) {
    var toggle = form.querySelector('[data-country-toggle]');
    var panel = form.querySelector('[data-country-panel]');
    if (!toggle || !panel) return null;
    var search = panel.querySelector('.country-panel__search input');
    var listBox = panel.querySelector('.country-panel__list');
    var flagBox = toggle.querySelector('.phone-code__flag');
    var dialBox = toggle.querySelector('.phone-code__dial');
    var current = COUNTRIES.filter(function (c) { return c.iso === DEFAULT_COUNTRY; })[0] || COUNTRIES[0];
    function rowHtml(c) {
      return '<button class="country-row" type="button" data-iso="' + c.iso + '">' +
        '<span class="country-row__flag">' + flagHtml(c.iso) + '</span>' +
        '<span class="country-row__name">' + esc(c.name) + '</span>' +
        '<span class="country-row__dial">+' + esc(c.dial) + '</span>' +
        '</button>';
    }
    function render(filter) {
      var q = (filter || '').trim().toLowerCase();
      var list = !q ? COUNTRIES : COUNTRIES.filter(function (c) {
        return c.name.toLowerCase().indexOf(q) === 0 ||
          c.name.toLowerCase().indexOf(' ' + q) > -1 ||
          c.dial.indexOf(q.replace(/^\+/, '')) === 0 ||
          c.iso.toLowerCase() === q;
      });
      listBox.innerHTML = list.length
        ? list.map(rowHtml).join('')
        : '<p class="country-panel__empty">Ничего не найдено</p>';
    }
    function paint() {
      flagBox.innerHTML = flagHtml(current.iso);
      dialBox.textContent = '+' + current.dial;
      toggle.setAttribute('aria-label', 'Код страны: ' + current.name + ', +' + current.dial);
    }
    function open() {
      render('');
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () {
        panel.classList.add('is-open');
        if (search && !isTouch) search.focus();
      });
    }
    function close() {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (search) search.value = '';
      setTimeout(function () { panel.hidden = true; }, 220);
    }
    function isOpen() { return !panel.hidden; }
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) close(); else open();
    });
    listBox.addEventListener('click', function (e) {
      var row = e.target.closest('[data-iso]');
      if (!row) return;
      var iso = row.getAttribute('data-iso');
      var found = COUNTRIES.filter(function (c) { return c.iso === iso; })[0];
      if (found) { current = found; paint(); }
      close();
      var phone = form.elements['phone'];
      if (phone) phone.focus();
    });
    if (search) {
      search.addEventListener('input', function () { render(search.value); });
      search.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(); toggle.focus(); }
      });
    }
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      if (!panel.contains(e.target) && e.target !== toggle) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
    });
    paint();
    return {
      dial: function () { return current.dial; },
      name: function () { return current.name; }
    };
  }
  function setupCustomSelect(form) {
    var group = form.querySelector('[data-custom-select]');
    if (!group) return;
    var toggle = group.querySelector('[data-select-toggle]');
    var panel = group.querySelector('[data-select-panel]');
    var valSpan = group.querySelector('[data-select-value]');
    var input = group.querySelector('input[name="kind"]');
    var rows = group.querySelectorAll('.select-row');
    if (!toggle || !panel) return;
    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () {
        panel.classList.add('is-open');
      });
    }
    function close() {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      setTimeout(function () { panel.hidden = true; }, 220);
    }
    function isOpen() { return !panel.hidden; }
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) close(); else open();
    });
    panel.addEventListener('click', function (e) {
      var row = e.target.closest('.select-row');
      if (!row) return;
      var val = row.getAttribute('data-value');
      if (input) input.value = val;
      if (valSpan) valSpan.textContent = val;
      rows.forEach(function (r) {
        var isSel = (r === row);
        r.classList.toggle('is-selected', isSel);
        r.setAttribute('aria-selected', isSel ? 'true' : 'false');
      });
      close();
    });
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      if (!group.contains(e.target) && e.target !== toggle) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
    });
    form.addEventListener('reset', function () {
      setTimeout(function () {
        var defaultVal = 'Из наличия';
        if (input) input.value = defaultVal;
        if (valSpan) valSpan.textContent = defaultVal;
        rows.forEach(function (r) {
          var isSel = r.getAttribute('data-value') === defaultVal;
          r.classList.toggle('is-selected', isSel);
          r.setAttribute('aria-selected', isSel ? 'true' : 'false');
        });
      }, 10);
    });
  }
  function setupRequestForm() {
    var form = document.getElementById('requestForm');
    if (!form) return;
    var picker = setupCountryPicker(form);
    setupCustomSelect(form);
    var submit = form.querySelector('[type="submit"]');
    var submitLabel = submit ? submit.textContent : '';
    var busy = false;
    function digitsOf(value) {
      return String(value || '').replace(/\D/g, '');
    }
    function fail(message, fieldName) {
      toast(message, 'error');
      var field = form.elements[fieldName];
      if (field && field.focus) field.focus();
      return false;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (busy) return;
      var name = (form.elements['name'].value || '').trim();
      var phone = (form.elements['phone'].value || '').trim();
      var email = (form.elements['email'].value || '').trim();
      var kind = (form.elements['kind'].value || '').trim();
      var comment = (form.elements['comment'].value || '').trim();
      if (!name) return fail('Укажите, как к вам обращаться', 'name');
      var dial = picker ? picker.dial() : '';
      var totalDigits = digitsOf(dial) + digitsOf(phone);
      if (!digitsOf(phone)) return fail('Укажите номер телефона', 'phone');
      if (totalDigits.length < 10) return fail('Похоже, номер введён не полностью', 'phone');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return fail('Проверьте адрес электронной почты', 'email');
      }
      if (!form.elements['consent'].checked) {
        return fail('Нужно согласие на обработку персональных данных', 'consent');
      }
      var payload = {
        name: name,
        phone: '+' + digitsOf(dial) + ' ' + phone,
        country: picker ? picker.name() : '',
        email: email,
        kind: kind,
        comment: comment
      };
      busy = true;
      if (submit) {
        submit.textContent = 'Отправляем…';
        submit.disabled = true;
      }
      sendLead(payload).then(function () {
        if (submit) submit.textContent = 'Заявка отправлена';
        toast('Спасибо, ' + name + '! Свяжемся с вами в ближайшее время', 'ok');
        setTimeout(function () {
          form.reset();
          if (submit) {
            submit.textContent = submitLabel;
            submit.disabled = false;
          }
          busy = false;
        }, 4500);
      }).catch(function () {
        busy = false;
        if (submit) {
          submit.textContent = submitLabel;
          submit.disabled = false;
        }
        toast('Не удалось отправить. Позвоните нам или напишите в WhatsApp', 'error');
      });
    });
  }
  function setupCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      nums.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
      return;
    }
    function run(el) {
      var raw = el.getAttribute('data-count');
      var target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      var prefix = /^\D+/.test(raw) ? raw.match(/^\D+/)[0] : '';
      var suffix = /\D+$/.test(raw) ? raw.match(/\D+$/)[0] : '';
      var start = null;
      var DUR = 1400;
      function tick(now) {
        if (start === null) start = now;
        var p = Math.min((now - start) / DUR, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased).toLocaleString('ru-RU') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { observer.observe(el); });
  }
  function setupGallery() {
    var grid = document.getElementById('galleryGrid');
    if (!grid) return;
    var photos = CLIENT_PHOTOS.filter(function (p) { return p && p.src; });
    var section = grid.closest('section');
    if (!photos.length) {
      if (section) section.remove();
      return;
    }
    var onReviewsPage = !!document.getElementById('videoGrid');
    var BATCH = 12;
    var loaded = 0;
    function tileHtml(photo, i) {
      var styleStr = photo.style ? ' style="' + esc(photo.style) + '"' : '';
      return '<button class="gallery__item" type="button" data-gallery="' + i + '">' +
        '<img src="' + esc(photo.src) + '" alt="' + esc(photo.alt) + '" loading="lazy" decoding="async" ' +
        'width="600" height="450"' + styleStr + '>' +
        '<span class="gallery__zoom" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
          '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/><path d="M11 8.5v5M8.5 11h5"/></svg>' +
        '</span>' +
      '</button>';
    }
    function addBatch(n) {
      var next = photos.slice(loaded, loaded + n);
      if (!next.length) return;
      var html = next.map(function (p, k) { return tileHtml(p, loaded + k); }).join('');
      grid.insertAdjacentHTML('beforeend', html);
      var fresh = Array.prototype.slice.call(grid.querySelectorAll('.gallery__item')).slice(loaded);
      setupReveal(fresh);
      loaded += next.length;
    }
    addBatch(onReviewsPage ? photos.length : BATCH);
    grid.addEventListener('click', function (e) {
      var item = e.target.closest('[data-gallery]');
      if (!item) return;
      var i = parseInt(item.getAttribute('data-gallery'), 10) || 0;
      lightbox.open(photos.map(function (p) { return { src: p.src, alt: p.alt }; }), i);
    });
    grid.addEventListener('error', function (e) {
      if (e.target && e.target.tagName === 'IMG') {
        var tile = e.target.closest('.gallery__item');
        if (tile) tile.remove();
      }
    }, true);
    var more = document.getElementById('galleryMore');
    if (!more) return;
    if (!onReviewsPage) {
      if (photos.length <= loaded) more.remove();
      else more.textContent = 'Смотреть все фото';
      return;
    }
    if (photos.length <= loaded) { more.remove(); return; }
    more.textContent = 'Показать ещё';
    more.removeAttribute('href');
    more.addEventListener('click', function (e) {
      e.preventDefault();
      addBatch(BATCH);
      if (loaded >= photos.length) more.remove();
    });
  }
  function createVideoPlayer() {
    var box = null, frame = null, lastFocus = null;
    function build() {
      box = document.createElement('div');
      box.className = 'vbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-label', 'Видео-отзыв');
      box.innerHTML =
        '<button class="vbox__close" type="button" aria-label="Закрыть">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="vbox__frame"></div>';
      document.body.appendChild(box);
      frame = box.querySelector('.vbox__frame');
      box.querySelector('.vbox__close').addEventListener('click', close);
      box.addEventListener('click', function (e) {
        if (e.target === box || e.target === frame) close();
      });
    }
    function open(src) {
      if (!src) return;
      if (!box) build();
      document.querySelectorAll('.cursor-dot, .cursor-ring').forEach(function (el) {
        el.classList.remove('is-off');
      });
      lastFocus = document.activeElement;
      var html = '<div class="cvp-container">' +
        '<video src="' + esc(src) + '" autoplay playsinline preload="auto"></video>' +
        '<div class="cvp-loader" aria-live="polite"><span></span>Загружаем видео…</div>' +
        '<div class="cvp-controls">' +
          '<button class="cvp-btn cvp-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>' +
          '<div class="cvp-progress-wrap"><div class="cvp-progress-bar"></div></div>' +
          '<div class="cvp-vol-wrap">' +
            '<button class="cvp-btn cvp-mute"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg></button>' +
            '<input type="range" class="cvp-vol-slider" min="0" max="1" step="0.05" value="1">' +
          '</div>' +
          '<button class="cvp-btn cvp-fullscreen"><svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg></button>' +
        '</div>' +
      '</div>';
      frame.innerHTML = html;
      var vid = frame.querySelector('video');
      if (vid) {
        vid.volume = 1.0;
        vid.muted = false;
        var loader = frame.querySelector('.cvp-loader');
        function hideLoader() { if (loader) loader.classList.add('is-hidden'); }
        function showLoader() { if (loader) loader.classList.remove('is-hidden'); }
        vid.addEventListener('canplay', hideLoader);
        vid.addEventListener('playing', hideLoader);
        vid.addEventListener('waiting', showLoader);
        vid.addEventListener('error', function () {
          if (loader) loader.textContent = 'Не удалось загрузить видео';
        });
        var playBtn = frame.querySelector('.cvp-play');
        var progWrap = frame.querySelector('.cvp-progress-wrap');
        var progBar = frame.querySelector('.cvp-progress-bar');
        var muteBtn = frame.querySelector('.cvp-mute');
        var volSlider = frame.querySelector('.cvp-vol-slider');
        var fsBtn = frame.querySelector('.cvp-fullscreen');
        var container = frame.querySelector('.cvp-container');
        playBtn.addEventListener('click', function() {
          if (vid.paused) vid.play();
          else vid.pause();
        });
        vid.addEventListener('play', function() {
          playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        });
        vid.addEventListener('pause', function() {
          playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        });
        vid.addEventListener('timeupdate', function() {
          var pct = (vid.currentTime / vid.duration) * 100 || 0;
          progBar.style.width = pct + '%';
        });
        progWrap.addEventListener('click', function(e) {
          var rect = progWrap.getBoundingClientRect();
          var pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          vid.currentTime = pos * vid.duration;
        });
        volSlider.addEventListener('input', function(e) {
          vid.volume = e.target.value;
          vid.muted = (vid.volume == 0);
        });
        muteBtn.addEventListener('click', function() {
          vid.muted = !vid.muted;
          if (vid.muted) volSlider.value = 0;
          else {
            if (vid.volume == 0) vid.volume = 1;
            volSlider.value = vid.volume;
          }
        });
        fsBtn.addEventListener('click', function() {
          if (!document.fullscreenElement) {
             var dot = document.querySelector('.cursor-dot');
             var ring = document.querySelector('.cursor-ring');
             if (dot) container.appendChild(dot);
             if (ring) container.appendChild(ring);
             container.requestFullscreen().catch(function(){});
          } else {
             document.exitFullscreen();
          }
        });
        document.addEventListener('fullscreenchange', function() {
          if (!document.fullscreenElement) {
             var dot = document.querySelector('.cursor-dot');
             var ring = document.querySelector('.cursor-ring');
             if (dot) document.body.appendChild(dot);
             if (ring) document.body.appendChild(ring);
          }
        });
      }
      box.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      box.querySelector('.vbox__close').focus();
    }
    function close() {
      if (!box) return;
      box.classList.remove('is-open');
      frame.innerHTML = '';
      document.removeEventListener('keydown', onKey);
      if (!document.querySelector('.modal.is-open, .lightbox.is-open, .menu.is-open')) scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) {
      trapFocus(e, box);
      if (e.key === 'Escape') close();
    }
    return { open: open, close: close };
  }
  var videoPlayer = createVideoPlayer();
  function bindReviewVideos() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-review-video]');
      if (!btn) return;
      videoPlayer.open(btn.getAttribute('data-review-video'));
    });
  }
  function setupFaq() {
    var box = document.getElementById('faqList');
    if (!box) return;
    if (!FAQ.length) {
      var section = box.closest('section');
      if (section) section.remove();
      return;
    }
    box.innerHTML = FAQ.map(function (item, i) {
      return '<div class="faq__item">' +
        '<button class="faq__q" type="button" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
          '<span>' + esc(item.q) + '</span>' +
          '<svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
          '<path d="M12 5v14M5 12h14"/></svg>' +
        '</button>' +
        '<div class="faq__a" id="faq-a-' + i + '"><p>' + esc(item.a) + '</p></div>' +
      '</div>';
    }).join('');
    setupReveal(box.querySelectorAll('.faq__item'));
    box.addEventListener('click', function (e) {
      var q = e.target.closest('.faq__q');
      if (!q) return;
      var item = q.parentNode;
      var open = item.classList.contains('is-open');
      box.querySelectorAll('.faq__item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        el.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  }
  function setupDock() {
    var dock = document.querySelector('[data-dock]');
    if (!dock) return;
    var hero = document.querySelector('.hero');
    if (!hero || !('IntersectionObserver' in window)) {
      dock.classList.add('is-on');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        dock.classList.toggle('is-on', !entry.isIntersecting);
      });
    }, { threshold: 0, rootMargin: '-120px 0px 0px 0px' });
    observer.observe(hero);
  }
  var QUIZ_STEPS = [
    { key: 'state', q: 'Какой автомобиль ищете?',   opts: ['Новый', 'С пробегом', 'Ещё не решил'] },
    { key: 'from',  q: 'Откуда везём?',              opts: ['Корея', 'Китай', 'ОАЭ', 'ЕС', 'США', 'Грузия', 'Не важно'] },
    { key: 'budget',q: 'Какой бюджет?',              opts: ['До 2 млн', '2–3 млн', '3–5 млн', 'От 5 млн'] },
    { key: 'body',  q: 'Тип кузова?',                opts: ['Седан', 'Кроссовер', 'Внедорожник', 'Другой'] }
  ];
  function setupQuiz() {
    var root = document.getElementById('quiz');
    if (!root) return;
    var stage = root.querySelector('.quiz__stage');
    var bar = root.querySelector('.quiz__bar span');
    var counter = root.querySelector('.quiz__counter');
    var backBtn = root.querySelector('.quiz__back');
    var answers = {};
    var step = 0;
    var TOTAL = QUIZ_STEPS.length + 1; // + шаг с контактами
    function progress() {
      var pct = Math.round((step / TOTAL) * 100);
      if (bar) bar.style.transform = 'scaleX(' + (pct / 100) + ')';
      if (counter) counter.textContent = 'Шаг ' + Math.min(step + 1, TOTAL) + ' из ' + TOTAL;
      if (backBtn) backBtn.hidden = step === 0;
    }
    function renderStep() {
      var data = QUIZ_STEPS[step];
      var dense = data.opts.length > 4 ? ' quiz__opts--compact' : '';
      stage.innerHTML =
        '<h3 class="quiz__q">' + esc(data.q) + '</h3>' +
        '<div class="quiz__opts' + dense + '">' +
          data.opts.map(function (o) {
            var active = answers[data.key] === o ? ' is-picked' : '';
            return '<button class="quiz__opt' + active + '" type="button" data-pick="' + esc(o) + '">' +
              esc(o) + '</button>';
          }).join('') +
        '</div>';
      stage.classList.remove('is-out');
      progress();
    }
    function renderContacts() {
      var picked = QUIZ_STEPS
        .map(function (s) { return answers[s.key]; })
        .filter(Boolean)
        .join(' · ');
      stage.innerHTML =
        '<h3 class="quiz__q">Куда прислать варианты?</h3>' +
        (picked ? '<p class="quiz__picked">' + esc(picked) + '</p>' : '') +
        '<div class="quiz__fields">' +
          '<div class="field">' +
            '<label class="form-label" for="quizName">Имя</label>' +
            '<input class="field__input" type="text" id="quizName" placeholder="Как к вам обращаться">' +
          '</div>' +
          '<div class="field">' +
            '<label class="form-label" for="quizPhone">Телефон</label>' +
            '<input class="field__input" type="tel" id="quizPhone" placeholder="+7 000 000-00-00">' +
          '</div>' +
        '</div>' +
        '<button class="btn btn--gold btn--full" type="button" data-quiz-send>Получить подборку</button>' +
        '<p class="form-note">Пришлём 3–5 вариантов с расчётом под ключ</p>';
      stage.classList.remove('is-out');
      progress();
    }
    function renderDone(name) {
      stage.innerHTML =
        '<div class="quiz__done">' +
          '<span class="quiz__check" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<circle cx="12" cy="12" r="9"/><path d="m8.3 12.2 2.6 2.6 4.8-5.2"/></svg>' +
          '</span>' +
          '<h3 class="quiz__q">Спасибо' + (name ? ', ' + esc(name) : '') + '!</h3>' +
          '<p class="quiz__picked">Подберём варианты и вернёмся с расчётом в течение рабочего дня.</p>' +
        '</div>';
      if (bar) bar.style.transform = 'scaleX(1)';
      if (counter) counter.textContent = 'Готово';
      if (backBtn) backBtn.hidden = true;
    }
    function go(next) {
      if (reduceMotion) { step = next; draw(); return; }
      stage.classList.add('is-out');
      setTimeout(function () { step = next; draw(); }, 180);
    }
    function draw() {
      if (step < QUIZ_STEPS.length) renderStep();
      else renderContacts();
    }
    stage.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-pick]');
      if (opt) {
        answers[QUIZ_STEPS[step].key] = opt.getAttribute('data-pick');
        go(step + 1);
        return;
      }
      var send = e.target.closest('[data-quiz-send]');
      if (send) {
        var name = (document.getElementById('quizName') || {}).value || '';
        var phone = (document.getElementById('quizPhone') || {}).value || '';
        name = name.trim();
        phone = phone.trim();
        if (!name) { toast('Укажите, как к вам обращаться', 'error'); return; }
        if (phone.replace(/\D/g, '').length < 10) { toast('Проверьте номер телефона', 'error'); return; }
        var payload = {
          name: name, phone: phone,
          state: answers.state || '', from: answers.from || '',
          budget: answers.budget || '', body: answers.body || ''
        };
        send.disabled = true;
        send.textContent = 'Отправляем…';
        sendLead(payload).then(function () {
          toast('Спасибо, ' + name + '! Свяжемся с вами в ближайшее время', 'ok');
          renderDone(name);
        }).catch(function () {
          send.disabled = false;
          send.textContent = 'Получить подборку';
          toast('Не удалось отправить. Позвоните нам или напишите в WhatsApp', 'error');
        });
      }
    });
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        if (step > 0) go(step - 1);
      });
    }
    draw();
  }
  function videoCardHtml(v) {
    var poster = v.poster
      ? '<img src="' + esc(v.poster) + '" alt="' + esc(v.title) + '" decoding="async" ' +
        'width="640" height="400">'
      : '';
    return '<button class="vcard" type="button" data-video="' + esc(v.file) + '">' +
      '<span class="vcard__media">' + poster +
        '<span class="vcard__play" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>' +
        '</span>' +
        (v.dur ? '<span class="vcard__dur">' + esc(v.dur) + '</span>' : '') +
      '</span>' +
      '<span class="vcard__body">' +
        '<span class="vcard__title">' + esc(v.title) + '</span>' +
        (v.note ? '<span class="vcard__note">' + esc(v.note) + '</span>' : '') +
      '</span>' +
    '</button>';
  }
  function fillVideoGrid(id, list) {
    var grid = document.getElementById(id);
    if (!grid) return;
    var items = (list || []).filter(function (v) { return v && v.file; });
    if (!items.length) {
      var section = grid.closest('section');
      if (section) section.remove();
      return;
    }
    grid.innerHTML = items.map(videoCardHtml).join('');
    setupReveal(grid.querySelectorAll('.vcard'));
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('[data-video]');
      if (!card) return;
      videoPlayer.open(card.getAttribute('data-video'));
    });
  }
  function setupVideoPages() {
    fillVideoGrid('videoGrid', VIDEOS);
    fillVideoGrid('clipGrid', CLIPS);
  }
  function setupYandexReviews() {
    var box = document.getElementById('yaReviews');
    if (!box) return;
    var list = (YANDEX_REVIEWS || []).filter(function (r) { return r && r.text; });
    if (!list.length) {
      var section = box.closest('section');
      if (section) section.remove();
      return;
    }
    box.innerHTML = list.map(function (r) {
      var sub = [r.car, r.date].filter(Boolean).join(' · ');
      return '<article class="ya-card">' +
        '<div class="ya-card__stars" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3.5 2.7 5.5 6 .9-4.35 4.2 1.03 6-5.38-2.83L6.62 20.1l1.03-6L3.3 9.9l6-.9z"/></svg>'.repeat(5) +
        '</div>' +
        '<span class="sr-only">Оценка: 5 из 5</span>' +
        '<p class="ya-card__text">' + esc(r.text) + '</p>' +
        '<div class="ya-card__foot">' +
          '<span class="ya-card__name">' + esc(r.name) + '</span>' +
          (sub ? '<span class="ya-card__sub">' + esc(sub) + '</span>' : '') +
        '</div>' +
      '</article>';
    }).join('');
    setupReveal(box.querySelectorAll('.ya-card'));
  }
  function safe(name, fn) {
    try {
      if (typeof fn === 'function') {
        fn();
      }
    } catch (e) {
      console.error('Ошибка в [' + name + ']:', e);
    }
  }
  function init() {
    safe('меню', setupMenu);
    safe('курсор', setupCursor);
    safe('эффекты касания', setupTouchEffects);
    safe('фон первого экрана', setupHeroPhoto);
    safe('таймлайн', setupTimeline);
    safe('панель шагов', setupProcessPanel);
    safe('карусель отзывов', setupReviewsCarousel);
    safe('отзывы с Яндекса', setupYandexReviews);
    safe('счётчики цифр', setupCounters);
    safe('квиз подбора', setupQuiz);
    safe('галерея выдач', setupGallery);
    safe('видео-обзоры', setupVideoPages);
    safe('частые вопросы', setupFaq);
    safe('щит карты', setupMapShield);
    safe('панель связи', setupDock);
    safe('видео в отзывах', bindReviewVideos);
    safe('Форма заявки', setupRequestForm);
    safe('Карточки на главной', initHomeCars);
    safe('Каталог', initCatalogPage);
    safe('Лайтбокс О компании', setupLightbox);
    safe('появление блоков', revealPageBlocks);
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }
  function setupMapShield() {
    var shields = document.querySelectorAll('[data-map-shield]');
    if (!shields.length) return;
    Array.prototype.forEach.call(shields, function (shield) {
      var frame = shield.closest('.map-frame');
      shield.addEventListener('click', function () {
        shield.classList.add('is-off');
        if (frame) frame.classList.add('is-live');
      });
      window.addEventListener('scroll', function () {
        if (!frame || !frame.classList.contains('is-live')) return;
        var r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) {
          shield.classList.remove('is-off');
          frame.classList.remove('is-live');
        }
      }, { passive: true });
    });
  }
  function setupProcessPanel() {
    var panel = document.getElementById('processPanel');
    var steps = document.querySelectorAll('.step');
    if (!panel || !steps.length || !('IntersectionObserver' in window)) return;
    var inner = panel.querySelector('.panel__inner');
    var numEl = panel.querySelector('.panel__num');
    var iconEl = panel.querySelector('.panel__icon');
    var titleEl = panel.querySelector('.panel__title');
    var descEl = panel.querySelector('.panel__desc');
    var mediaEl = panel.querySelector('.panel__media');
    if (!inner) return;
    var activeIndex = -1;
    var token = 0;
    function fill(i) {
      var step = steps[i];
      if (!step) return;
      var icon = step.querySelector('.step__icon');
      var title = step.querySelector('.step__title');
      var desc = step.querySelector('.step__desc');
      var marker = step.querySelector('.step__marker');
      if (numEl && marker) numEl.textContent = marker.textContent.trim();
      if (iconEl && icon) iconEl.innerHTML = icon.outerHTML;
      if (titleEl && title) titleEl.textContent = title.textContent;
      if (descEl && desc) descEl.textContent = desc.textContent;
      if (mediaEl) {
        var isLast = i === steps.length - 1;
        if (isLast) {
          var styleAttr = PROCESS_LAST_PHOTO.style ? ' style="' + esc(PROCESS_LAST_PHOTO.style) + '"' : '';
          mediaEl.innerHTML = '<img src="' + esc(PROCESS_LAST_PHOTO.src) + '" alt="' +
            esc(PROCESS_LAST_PHOTO.alt) + '" loading="lazy" decoding="async" ' +
            'width="640" height="400" class="panel__photo"' + styleAttr + '>';
          mediaEl.hidden = false;
        } else {
          mediaEl.innerHTML = '';
          mediaEl.hidden = true;
        }
      }
      steps.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
    }
    function setActive(i) {
      if (i === activeIndex) return;
      activeIndex = i;
      if (reduceMotion) { fill(i); return; }
      var mine = ++token;
      inner.classList.add('is-fading');
      setTimeout(function () {
        if (mine !== token) return;
        fill(i);
        inner.classList.remove('is-fading');
      }, 180);
    }
    fill(0);
    steps.forEach(function (s, n) { if (n === 0) s.classList.add('is-active'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var i = Array.prototype.indexOf.call(steps, entry.target);
        if (i >= 0) setActive(i);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    steps.forEach(function (s) { observer.observe(s); });
  }
  function setupLightbox() {
    var images = Array.prototype.slice.call(
      document.querySelectorAll('.about-grid img, .about__collage img')
    );
    if (!images.length) return;
    var items = images.map(function (img) {
      return { src: img.src, alt: img.alt || '' };
    });
    images.forEach(function (img, i) {
      img.addEventListener('click', function () {
        lightbox.open(items, i);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();