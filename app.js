/* ============================================================
   CarZ3 — общий скрипт (index.html + catalog.html)
   Без внешних библиотек и без сетевых запросов: все данные ниже.
   Непрерывные анимации — только transform и opacity.
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. АВТОМОБИЛИ
     ------------------------------------------------------------
     Чтобы добавить машину — скопируйте любой блок ниже и поправьте
     поля. Порядок в массиве = порядок на сайте (главная берёт
     первые 6, страница каталога — первые 10).

     imgs('папка', 'префикс-файла', сколько-фото) собирает пути вида
     images/cars/папка/префикс-1.jpg … префикс-N.jpg
     ============================================================ */

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
      images: imgs('VOLKSWAGEN-Teramont-Pro', 'VOLKSWAGEN-Teramont-Pro', 10)
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
      images: imgs('AUDI-A5-2026', 'AUDI-A5-2026', 5)
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
      images: imgs('Toyota-Haylender-2026', 'Toyota-Haylender-2026', 10)
    },
    {
      id: 'volkswagen-tiguan-l-pro-2026',
      brand: 'Volkswagen', model: 'Tiguan L Pro', year: 2026,
      engineVolume: 2.0, horsePower: 220,
      transmission: 'Автомат', drivetrain: 'Полный привод',
      mileage: 0, price: 4690000,
      features: ['R-Line', 'Цена под ключ в Москве', 'Полный привод 4WD'],
      location: 'Китай', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('Volkswagen-Tiguan-L-pro', 'Volkswagen-Tiguan-L-pro', 11)
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
      images: imgs('Toyota-Rav-4', 'Toyota-Rav-4', 8)
    },
    {
      id: 'mazda-cx50-2026',
      brand: 'Mazda', model: 'CX-50', year: 2026,
      engineVolume: 2.0, horsePower: 155,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 0, price: 3370000,
      features: ['Цена под ключ', 'Передний привод 2WD', 'Автомат'],
      location: 'Китай', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('Mazda-CX-50', 'Mazda-CX-50', 8)
    },
    {
      id: 'hyundai-sonata-2023',
      brand: 'Hyundai', model: 'Sonata', year: 2023,
      engineVolume: 2.0, horsePower: 159,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 43000, price: 3090000,
      features: ['Цена под ключ', 'Светодиодные фары', 'Климат-контроль', 'Камера заднего вида'],
      location: 'Корея', status: 'Под заказ', manager: 'Michail2004',
      images: imgs('Hyundai-Sonata', 'Hyundai-Sonata', 6)
    },
    {
      id: 'kia-k5-korea-2023',
      brand: 'Kia', model: 'K5', year: 2023,
      engineVolume: 2.0, horsePower: 160,
      transmission: 'Автомат', drivetrain: 'Передний привод',
      mileage: 23800, price: 2750000,
      features: ['Цена под ключ', 'Бесключевой доступ', 'Светодиодные фары', 'Круиз-контроль'],
      location: 'Корея', status: 'Под заказ', manager: 'alexcash2025',
      images: imgs('KIA-K5', 'KIA-K5', 6)
    }
  ];

  /* ============================================================
     2. ОТЗЫВЫ (карусель на главной)
     ------------------------------------------------------------
     Пока массив пуст — секция «Нам доверяют» на сайте НЕ показывается
     (пустая карусель из одинаковых заглушек выглядит хуже, чем её
     отсутствие). Как только добавите хотя бы один отзыв — секция
     появится сама, вместе с каруселью, точками и стрелками.

     photo — путь к фото клиента с его автомобилем. Можно не указывать:
     тогда вместо фото будет аккуратный контурный аватар.

     Раскомментируйте и заполните:

     { photo: 'images/clients/01.jpg', name: 'Алексей', city: 'Москва',
       car: 'Toyota RAV-4', text: 'Текст отзыва клиента.' },
     ============================================================ */

  var REVIEWS = [
  ];

  /* ============================================================
     3. ПРОЧИЕ МЕДИА
     ============================================================ */

  // Фото трёх светлых автомобилей в тёмном помещении. Пример: 'images/hero.jpg'
  var HERO_PHOTO = 'hero.jpg';

  // Фото клиентов — понадобятся на будущей странице обзоров.
  var CLIENT_PHOTOS = [];

  var BOT_URL = 'https://t.me/CarZ3_Catalog_bot';
  var HOME_LIMIT = 6;      // карточек на главной
  var CATALOG_LIMIT = 10;  // максимум на странице каталога

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------- Утилиты ---------- */

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

  function mileageText(car) {
    if (typeof car.mileage !== 'number') return car.mileage ? String(car.mileage) : '';
    return car.mileage === 0 ? 'новый' : num(car.mileage) + ' км';
  }

  // Ссылка менеджеру с уже подставленным текстом о машине.
  function managerLink(car) {
    var name = String(car.manager || '').replace(/[^A-Za-z0-9_]/g, '');
    if (!name) return BOT_URL;
    var text = 'Здравствуйте! Интересует ' + carTitle(car) + ' ' + car.year + ' — ' + formatPrice(car);
    return 'https://t.me/' + name + '?text=' + encodeURIComponent(text);
  }

  function scrollLock(on) {
    document.body.classList.toggle('is-scroll-locked', on);
  }

  // Свайп пальцем: срабатывает только на явном горизонтальном жесте.
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

  /* ---------- Появление блоков при скролле ---------- */

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
        entry.target.style.transitionDelay = Math.min(shown, 5) * 70 + 'ms';
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
        shown++;
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    list.forEach(function (el) { observer.observe(el); });
  }

  function revealPageBlocks() {
    setupReveal(document.querySelectorAll('[data-reveal]'));
  }

  /* ---------- Эффекты по касанию (телефоны и планшеты) ---------- */

  function setupTouchEffects() {
    // На устройствах с мышью работает обычный :hover, здесь ничего не делаем.
    if (!isTouch) return;

    var SELECTOR = '.origin-card, .trust-card, .review, .car-card, .step, .destination, .stat';
    var HOLD = 1600;

    document.addEventListener('touchstart', function (e) {
      var el = e.target.closest ? e.target.closest(SELECTOR) : null;
      if (!el) return;
      el.classList.add('is-touched');
      if (el._touchTimer) clearTimeout(el._touchTimer);
      // Эффект плавно уходит сам — так же плавно, как появился.
      el._touchTimer = setTimeout(function () {
        el.classList.remove('is-touched');
      }, HOLD);
    }, { passive: true });
  }

  /* ---------- Фон первого экрана ---------- */

  function setupHeroPhoto() {
    if (!HERO_PHOTO) return;
    var bg = document.querySelector('.hero__bg');
    if (!bg) return;
    bg.style.backgroundImage = 'url("' + HERO_PHOTO + '")';
    bg.classList.add('is-on');
  }

  /* ---------- Заполнение таймлайна ---------- */

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

  /* ---------- Полноэкранное мобильное меню ---------- */

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
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });

    onMediaChange(window.matchMedia('(min-width: 1024px)'), function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- Кастомный курсор (только мышь + десктоп) ---------- */

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
      var interactive = !!e.target.closest('a, button');
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

    // Внутри iframe (карта) наши события мыши не доходят: это отдельный документ.
    // Поэтому над картой прячем золотой курсор и возвращаем системный —
    // иначе золотой замирает у края, а на карте видно вторую стрелку.
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

  /* ---------- Лайтбокс (общий: карточки машин, позже — страница обзоров) ---------- */

  function createLightbox() {
    var box = null, boxImg = null, caption = null, zoomHint = null;
    var items = [], current = 0, lastFocus = null;

    // Зум
    var scale = 1, minScale = 1, maxScale = 4;
    var originX = 0, originY = 0;
    var panX = 0, panY = 0;
    var isPanning = false, panStartX = 0, panStartY = 0, panStartPanX = 0, panStartPanY = 0;
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

      // Клик по фону закрывает
      box.addEventListener('click', function (e) {
        if (e.target === box) close();
      });

      // Колесо мыши — зум
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

      // Двойной клик — зум x2 / сброс
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

      // Перетаскивание мышью при зуме
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

      // Тач: пинч + двойное нажатие
      box.addEventListener('touchstart', function (e) {
        if (e.touches.length === 2) {
          e.preventDefault();
          pinchStartDist = Math.hypot(
            e.touches[1].clientX - e.touches[0].clientX,
            e.touches[1].clientY - e.touches[0].clientY
          );
          pinchStartScale = scale;
        } else if (e.touches.length === 1 && scale <= 1) {
          // Двойное нажатие
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

      // Свайп для смены фото (только если не зумировано)
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

  /* ---------- Карточка машины ---------- */

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
      ? '<img src="' + esc(cover) + '" alt="' + title + ' ' + esc(car.year) + '" loading="lazy" decoding="async" width="640" height="400" onerror="this.remove()">'
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

  /* ---------- Окно с подробностями о машине ---------- */

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
        '<img class="modal__img" src="" alt="">' +
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
        '<p class="modal__hint">Нажмите на фото, чтобы открыть его на весь экран</p>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);

      els.dialog = modal.querySelector('.modal__dialog');
      els.img = modal.querySelector('.modal__img');
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
      els.prev.addEventListener('click', function () { setPhoto(photoIndex - 1); });
      els.next.addEventListener('click', function () { setPhoto(photoIndex + 1); });
      els.img.addEventListener('click', function () {
        if (!car) return;
        lightbox.open(car.images.map(function (src) {
          return { src: src, alt: carTitle(car) + ' ' + car.year };
        }), photoIndex);
      });
      // Клик по затемнённому фону закрывает окно.
      modal.addEventListener('click', function (e) {
        if (e.target === modal) close();
      });
      addSwipe(modal.querySelector('.modal__gallery'),
        function () { setPhoto(photoIndex + 1); },
        function () { setPhoto(photoIndex - 1); });
    }

    function setPhoto(i) {
      if (!car || !car.images.length) return;
      photoIndex = (i + car.images.length) % car.images.length;
      els.img.src = car.images[photoIndex];
      els.img.alt = carTitle(car) + ' ' + car.year + ' — фото ' + (photoIndex + 1);
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
      setPhoto(0);

      // Предзагрузка всех фото в фоне — чтобы свайп был мгновенным
      if (car.images && car.images.length > 1) {
        for (var pi = 1; pi < car.images.length; pi++) {
          var preImg = new Image();
          preImg.src = car.images[pi];
        }
      }
    }

    function onKey(e) {
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

  /* ---------- Главная: «Сейчас доступны» ---------- */

  function initHomeCars() {
    var grid = document.getElementById('homeGrid');
    if (!grid) return;

    grid.innerHTML = CARS.slice(0, HOME_LIMIT).map(carCardHtml).join('');
    setupReveal(grid.querySelectorAll('.car-card'));
    bindCarCards(grid);
  }

  /* ---------- Каталог: подборка + фильтры ---------- */

  function initCatalogPage() {
    var grid = document.getElementById('catalogGrid');
    if (!grid) return;

    var filtersBox = document.getElementById('catalogFilters');
    var countBox = document.getElementById('catalogCount');
    var noteCount = document.getElementById('catalogNoteCount');

    // Витрина, а не полный каталог: показываем ограниченную подборку.
    var shown = CARS.slice(0, CATALOG_LIMIT);
    var active = 'all';

    if (noteCount) noteCount.textContent = shown.length;

    function draw() {
      var list = active === 'all'
        ? shown
        : shown.filter(function (car) { return (car.location || 'Без страны') === active; });

      grid.innerHTML = list.map(carCardHtml).join('');
      if (countBox) {
        countBox.textContent = list.length
          ? 'Показано автомобилей: ' + list.length
          : 'В этом направлении сейчас нет автомобилей';
      }
      setupReveal(grid.querySelectorAll('.car-card'));
    }

    function buildFilters() {
      if (!filtersBox) return;

      // Группы считаем по той же подборке, что и показываем,
      // иначе счётчик у фильтра не совпадёт с реальным результатом.
      var groups = {};
      shown.forEach(function (car) {
        var key = car.location || 'Без страны';
        groups[key] = (groups[key] || 0) + 1;
      });

      var keys = Object.keys(groups).sort(function (a, b) { return groups[b] - groups[a]; });
      if (keys.length < 2) { filtersBox.innerHTML = ''; return; }

      filtersBox.innerHTML =
        '<button class="filter is-active" type="button" data-filter="all">Все' +
        '<span class="filter__count">' + shown.length + '</span></button>' +
        keys.map(function (key) {
          return '<button class="filter" type="button" data-filter="' + esc(key) + '">' + esc(key) +
            '<span class="filter__count">' + groups[key] + '</span></button>';
        }).join('');

      filtersBox.addEventListener('click', function (e) {
        var button = e.target.closest('.filter');
        if (!button) return;
        active = button.getAttribute('data-filter');
        filtersBox.querySelectorAll('.filter').forEach(function (el) {
          el.classList.toggle('is-active', el === button);
        });
        draw();
      });
    }

    buildFilters();
    draw();
    bindCarCards(grid);
  }

  /* ---------- Карусель отзывов ---------- */

  function reviewCardHtml(review) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="m12 3.5 2.7 5.5 6 .9-4.35 4.2 1.03 6-5.38-2.83L6.62 20.1l1.03-6L3.3 9.9l6-.9z"/></svg>';
    }

    var media = review.photo
      ? '<div class="review__media"><img src="' + esc(review.photo) + '" alt="' +
      esc(review.name ? review.name + ' — клиент CarZ3' : 'Клиент CarZ3 со своим автомобилем') +
      '" loading="lazy" decoding="async" width="640" height="400" onerror="this.remove()"></div>'
      : '';

    var avatar = review.photo ? '' :
      '<div class="review__avatar" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="8.5" r="3.75"/><path d="M4.5 20c0-3.6 3.4-5.75 7.5-5.75s7.5 2.15 7.5 5.75"/>' +
      '</svg>' +
      '</div>';

    var sub = [review.city, review.car].filter(Boolean).join(' · ');

    return '' +
      '<div class="carousel__slide">' +
      '<article class="review">' +
      media +
      '<svg class="review__quote" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M9 6C6.2 7.4 4.5 10 4.5 13.2V18h6v-5.4H7.8c0-2 .6-3.4 2.4-4.4z"/>' +
      '<path d="M19 6c-2.8 1.4-4.5 4-4.5 7.2V18h6v-5.4h-2.7c0-2 .6-3.4 2.4-4.4z"/>' +
      '</svg>' +
      '<div class="review__stars" aria-hidden="true">' + stars + '</div>' +
      '<p class="review__text">' + esc(review.text) + '</p>' +
      '<div class="review__person">' + avatar +
      '<div class="review__meta">' +
      '<div class="review__name">' + esc(review.name) + '</div>' +
      (sub ? '<div class="review__city">' + esc(sub) + '</div>' : '') +
      '</div>' +
      '</div>' +
      '</article>' +
      '</div>';
  }

  function setupReviewsCarousel() {
    var root = document.getElementById('reviewsCarousel');
    if (!root) return;

    var list = REVIEWS.filter(function (r) { return r && (r.text || r.photo); });

    // Отзывов пока нет — убираем секцию целиком и ссылки на неё в меню,
    // чтобы не остался пустой блок и якорь в никуда.
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

    function calcPerView() {
      var w = window.innerWidth;
      return w >= 1024 ? 3 : (w >= 620 ? 2 : 1);
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

    // Пауза, пока человек рассматривает: мышью на десктопе, пальцем на телефоне.
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('touchstart', stop, { passive: true });
    root.addEventListener('touchend', function () { setTimeout(start, 3000); }, { passive: true });

    addSwipe(root, function () { go(index + 1); }, function () { go(index - 1); });

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 150);
    });

    layout();
    start();
  }

  /* ---------- Запуск ---------- */

  function init() {
    setupMenu();
    setupCursor();
    setupTouchEffects();
    setupHeroPhoto();
    setupTimeline();
    setupProcessPanel();
    setupReviewsCarousel();
    initHomeCars();
    initCatalogPage();
    revealPageBlocks();

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Липкая панель активного шага ---------- */

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
        var photo = CLIENT_PHOTOS[0];
        if (isLast && photo && photo.src) {
          mediaEl.innerHTML = '<img src="' + esc(photo.src) + '" alt="' +
            esc(photo.alt || 'Клиент CarZ3 получает автомобиль') +
            '" loading="lazy" decoding="async" width="640" height="400">';
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
