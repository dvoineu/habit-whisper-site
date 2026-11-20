(function () {
  var SUPPORTED = ['en', 'ru', 'es-MX', 'pt-BR', 'de', 'fr-FR'];

  var COPY = {
    en: {
      title: 'What’s New in 1.1 · HabitWhisper',
      desc: 'HabitWhisper 1.1 guide and changelog: 66-day Consolidation Index, Consolidation Map, honest weekly streaks, permanent archive cleanup, 4 new languages, and interactive in-app tour.',
      storeCountry: 'us',
      skip: 'Skip to main content',
      navLabel: 'Navigation',
      footerLabel: 'Footer',
      jumpLabel: 'Release sections',
      themeAria: 'Toggle theme',
      langLabel: 'Choose language',
      navHome: 'Home',
      navWhatsNew: 'What’s New 1.1',
      navScience: 'Science',
      navMac: 'Mac',
      navSupport: 'Support',
      navPrivacy: 'Privacy policy',
      navTerms: 'Terms of use',
      heroEyebrow: 'Release 1.1 · Guide & Changelog',
      heroTitle: 'What’s new in HabitWhisper 1.1',
      heroLead: 'Your habits now grow along a realistic 66-day automaticity curve instead of fragile streaks — alongside a system-wide Consolidation Map, honest weekly streaks, manual archive cleanup, and four new languages.',
      badges: ['66-day Consolidation Index', 'Consolidation Map', 'Weekly streaks', 'Archive cleanup', '6 languages'],
      appStoreSmall: 'Available on the',
      appStoreLabel: 'App Store',
      heroScienceCta: 'Try the 66-day curve simulator',
      jump1: '1. Consolidation Index',
      jump2: '2. Consolidation Map',
      jump3: '3. Weekly Streaks',
      jump4: '4. Archive Cleanup',
      jump5: '5. 6 Languages & Tour',
      jump6: 'Summary',
      lblImproved: 'What improved',
      lblHowTo: 'How to use it',
      heroAlt: 'HabitWhisper 1.1 Progress screen showing the Consolidation Map and 66-day automaticity scores',

      s1Tag: 'Free · Every habit',
      s1Title: '66-Day Consolidation Index',
      s1Lead: 'One missed day no longer erases weeks of real progress. Every habit now calculates its automaticity score (0–100%) from your existing check-in history.',
      s1Improved: [
        ['Realistic asymptotic curve:', ' habits strengthen fastest in the first weeks and stabilize near autopilot around ~66 repetitions.'],
        ['Gentle misses:', ' a single missed day trims about 3.5% instead of dropping your score to zero.'],
        ['Partial effort counts:', ' counter and timer habits credit partial progress proportionally toward consolidation.'],
        ['Four clear phases:', ' Start, Building, Stabilizing, and Autopilot (85%+), plus an estimate of remaining repetitions.'],
      ],
      s1Steps: [
        ['Open any habit from ', 'Today', ' or the ', 'Habits Catalog', '.'],
        ['Review the ', 'Automaticity', ' card right below your summary metrics — it is already computed from your past check-ins.'],
        ['Tap ', 'Why 66 days', ' inside the card to expand the explanation of the curve and phases.'],
      ],
      s1Cap1: 'Consolidation card inside habit details with phase chip and steps to autopilot.',
      s1Cap2: 'Tap “Why 66 days” to read how the curve handles single misses.',
      s1Alt1: 'Habit detail screen showing the 66-day Automaticity card at 68% in the Stabilizing phase',
      s1Alt2: 'Expanded Why 66 days explanation inside the Automaticity card',

      s2Tag: 'Progress → Overview',
      s2Tier: 'Free preview · Full map in Pro',
      s2Title: 'Consolidation Map & Autopilot Forecast',
      s2Lead: 'See how resilient your entire routine is in one glance — average index, how many habits have reached autopilot, and which habit is closest next.',
      s2Improved: [
        ['System-wide summary:', ' tracks your average Consolidation Index and total habits on autopilot.'],
        ['Autopilot forecast:', ' highlights which habit is closest to reaching 85% and roughly how many steps remain.'],
        ['Phase breakdown & quick jump:', ' view counts across Start, Building, Stabilizing, and Autopilot, and tap any habit row to open its details and calendar.'],
      ],
      s2Steps: [
        ['Open the ', 'Progress', ' tab and stay on ', 'Overview', '.'],
        ['Scroll to ', 'Consolidation Map', ' to see your overall score and habit breakdown.'],
        ['Tap any habit row to jump directly into its detail screen and monthly calendar.'],
      ],
      s2Note: ['Free vs. Pro:', ' Every individual habit’s 66-day Consolidation card is free, and Free includes a summary preview of the Consolidation Map. HabitWhisper Pro unlocks the full interactive map, phase breakdown, and autopilot forecast.'],
      s2Cap1: 'Consolidation Map in Progress → Overview, calculated automatically from your history.',
      s2Alt1: 'Progress Overview screen displaying the Consolidation Map across all active habits',

      s3Tag: 'Free · Flexible schedules',
      s3Title: 'Honest Weekly Streaks (“N times per week”)',
      s3Lead: 'Habits like strength training 3×/week aren’t meant to be done every day. HabitWhisper now measures them by completed weeks instead of breaking a daily chain on rest days.',
      s3Improved: [
        ['True weekly streak counter:', ' tracks consecutive completed weeks and your all-time best weekly streak.'],
        ['Current-week visibility:', ' shows live progress (for example, This week: 1 of 3) directly inside the Consolidation card.'],
        ['Respects your week start:', ' honors your Monday/Sunday setting from Settings → Week starts on.'],
      ],
      s3Steps: [
        ['Create or edit a habit and choose the ', 'Times per week', ' schedule (for example, 3 times a week).'],
        ['Complete it on whichever days fit your week — rest days won’t penalize you.'],
        ['Open the habit card anytime to see your ', 'Weekly streak', ', personal best, and current-week count.'],
      ],
      s3Cap1: 'Flexible “3 times a week” habit with weekly streak and current-week progress.',
      s3Alt1: 'Flexible habit detail screen showing Weekly streak: 2 wk (best 4) and This week: 1 of 3',

      s4Tag: 'Free · Data control',
      s4Title: 'Manual Permanent Archive Cleanup',
      s4Lead: 'Keep meaningful finished habits in your archive forever — and permanently remove test entries or outdated experiments whenever you want a clean slate.',
      s4Improved: [
        ['Multi-select deletion:', ' pick one or several archived habits at once and review the exact list before confirming.'],
        ['Clean recalculation:', ' permanently deletes selected habits and their check-in logs, recalculates linked goal progress, and syncs deletion across your iCloud devices.'],
        ['Safe by default:', ' deletion is only possible from the Archive tab with an explicit confirmation step — no accidental swipes.'],
      ],
      s4Steps: [
        ['Open ', 'Habits Catalog', ' and switch the top filter to ', 'Archive', '.'],
        ['Tap ', 'Select', ' in the top bar and mark the archived habits you want to remove.'],
        ['Tap ', 'Review Deletion', ' to inspect the selected items and what will be recalculated.'],
        ['Confirm with ', 'Delete Habits Permanently', ' (this action cannot be undone).'],
      ],
      s4Note: ['Archiving still protects your history:', ' simply archiving an active habit keeps all its past check-ins and statistics untouched forever unless you explicitly delete it here.'],
      s4Cap1: 'Step 1: Select archived entries to remove in Habits Catalog → Archive.',
      s4Cap2: 'Step 2: Review the exact list before confirming permanent deletion.',
      s4Alt1: 'Habits Archive screen in multi-select mode with two archived habits checked for deletion',
      s4Alt2: 'Confirmation sheet listing selected habits before permanent deletion',

      s5Tag: 'Free · 6 languages + In-App Tour',
      s5Title: 'Four New Languages & Interactive In-App Tour',
      s5Lead: 'HabitWhisper 1.1 adds full native localization for four more languages across iPhone, widgets, Live Activities, Apple Watch, and Mac — plus a quick interactive tour right after updating.',
      s5Improved: [
        ['Full 6-language coverage:', ' every screen, widget, notification, Live Activity, Watch companion, and Mac companion is translated with proper pluralization and date formatting.'],
        ['Interactive What’s New tour:', ' existing users see a brief 3-step highlight sheet once after updating, including a safe miss simulator that never changes your data.'],
        ['Gentle contextual tips:', ' native iOS tips quietly point out the Consolidation Map and Archive Select button the first time you visit those screens.'],
      ],
      s5Steps: [
        ['Switch language anytime in ', 'Settings → Language', ' — independently from your iPhone’s system language.'],
        ['Want to revisit the 1.1 walkthrough later? Open ', 'Settings → About → What’s new in 1.1', '.'],
        ['Dismiss any contextual tip with a single tap, or try the action it points to and it clears automatically.'],
      ],
      s5Cap1: 'Native interface in your selected language across iPhone, widgets, and Watch.',
      s5Cap2: 'Interactive What’s New 1.1 sheet with a safe live miss simulator.',
      s5Alt1: 'HabitWhisper Today screen localized in English',
      s5Alt2: 'In-app What’s New in 1.1 screen featuring the interactive 66-day miss simulator',

      sumEyebrow1: 'Release 1.1 Checklist',
      sumTitle1: 'Everything included in HabitWhisper 1.1',
      sumList1: [
        ['', '66-day Consolidation Index on every habit detail screen (Free).'],
        ['', 'Consolidation Map & autopilot forecast in Progress → Overview (Free preview, full map in Pro).'],
        ['', 'Honest weekly streaks and current-week counts for flexible “N times per week” habits.'],
        ['', 'Multi-select permanent deletion of archived habits with confirmation and iCloud sync.'],
        ['', 'Four new languages: Spanish (Mexico), Portuguese (Brazil), German, and French (6 total).'],
        ['', 'Interactive 3-step What’s New tour (replayable in Settings) and native TipKit contextual tips.'],
      ],
      sumEyebrow2: 'What didn’t change',
      sumTitle2: 'Still calm, private, and yours',
      sumList2: [
        ['Zero accounts, zero ads, zero trackers:', ' all habit consolidation math runs locally on your iPhone.'],
        ['Private iCloud sync:', ' your history stays in your personal Apple iCloud container.'],
        ['Zero migration hassle:', ' your existing check-in history from 1.0 feeds the 66-day curve automatically on first launch.'],
        ['No intrusive pop-ups:', ' the 1.1 tour appears once for returning users and yields automatically if you open the app from a widget or shortcut.'],
      ],
      ctaTitle: 'Ready for a calmer rhythm?',
      ctaBody: 'Update HabitWhisper on the App Store for iPhone and iPhone Duo.',
      ctaSupport: 'Questions or feedback?',
    },

    ru: {
      title: 'Что нового в 1.1 · HabitWhisper',
      desc: 'Руководство и список изменений HabitWhisper 1.1: индекс укоренения 66 дней, Карта укоренения, честные недельные серии, ручная очистка архива, 4 новых языка и интерактивный мини-тур.',
      storeCountry: 'ru',
      skip: 'Перейти к основному содержимому',
      navLabel: 'Навигация',
      footerLabel: 'Ссылки',
      jumpLabel: 'Разделы обновления',
      themeAria: 'Сменить тему',
      langLabel: 'Выбрать язык',
      navHome: 'Главная',
      navWhatsNew: 'Новое в 1.1',
      navScience: 'Наука',
      navMac: 'Mac',
      navSupport: 'Поддержка',
      navPrivacy: 'Конфиденциальность',
      navTerms: 'Условия использования',
      heroEyebrow: 'Обновление 1.1 · Гид и список изменений',
      heroTitle: 'Что нового в HabitWhisper 1.1',
      heroLead: 'Привычки теперь опираются на реалистичную кривую укоренения 66 дней вместо хрупких серий — вместе с Картой укоренения, честными недельными сериями, ручной очисткой архива и четырьмя новыми языками.',
      badges: ['Индекс укоренения 66 дней', 'Карта укоренения', 'Недельные серии', 'Очистка архива', '6 языков'],
      appStoreSmall: 'Доступно в',
      appStoreLabel: 'App Store',
      heroScienceCta: 'Попробовать симулятор 66 дней',
      jump1: '1. Индекс укоренения',
      jump2: '2. Карта укоренения',
      jump3: '3. Недельные серии',
      jump4: '4. Очистка архива',
      jump5: '5. 6 языков и мини-тур',
      jump6: 'Итоги 1.1',
      lblImproved: 'Что улучшилось',
      lblHowTo: 'Как пользоваться',
      heroAlt: 'Экран «Прогресс» в HabitWhisper 1.1 с Картой укоренения и индексом автоматизма 66 дней',

      s1Tag: 'Бесплатно · Для каждой привычки',
      s1Title: 'Индекс укоренения 66 дней',
      s1Lead: 'Один пропущенный день больше не перечёркивает недели усилий. Каждая привычка теперь показывает шкалу автоматизма (0–100%), рассчитанную на базе вашей существующей истории отметок.',
      s1Improved: [
        ['Реалистичная асимптотическая кривая:', ' привычка быстрее всего крепнет в первые недели и выходит на автопилот примерно к 66 повторениям.'],
        ['Бережное отношение к пропускам:', ' одиночный пропуск снижает индекс примерно на 3,5%, а не сбрасывает прогресс в ноль.'],
        ['Зачёт частичного шага:', ' для счётчиков и таймеров частичное выполнение дня пропорционально укрепляет индекс.'],
        ['Четыре понятные фазы:', ' Старт, Формирование, Стабилизация и Автопилот (85%+), плюс прогноз шагов до автопилота.'],
      ],
      s1Steps: [
        ['Откройте любую привычку на экране ', 'Сегодня', ' или в ', 'Каталоге привычек', '.'],
        ['Посмотрите карточку ', 'Укоренение', ' сразу под основными метриками — она уже посчитана из прошлых отметок.'],
        ['Нажмите ', 'Почему 66 дней', ' внутри карточки, чтобы раскрыть пояснение кривой и фаз.'],
      ],
      s1Cap1: 'Карточка укоренения в деталях привычки: фаза, процент и шаги до автопилота.',
      s1Cap2: 'Нажмите «Почему 66 дней», чтобы увидеть, как модель обрабатывает одиночный пропуск.',
      s1Alt1: 'Экран деталей привычки с карточкой «Укоренение» 68% в фазе «Стабилизация»',
      s1Alt2: 'Раскрытое пояснение «Почему 66 дней» внутри карточки укоренения',

      s2Tag: 'Прогресс → Обзор',
      s2Tier: 'Превью бесплатно · Полная карта в Pro',
      s2Title: 'Карта укоренения и прогноз автопилота',
      s2Lead: 'Оцените устойчивость всей вашей системы привычек одним взглядом: средний индекс, сколько привычек уже на автопилоте и какая привычка выйдет на него следующей.',
      s2Improved: [
        ['Общая картина системы:', ' средний индекс укоренения по активным привычкам и счётчик привычек на автопилоте.'],
        ['Прогноз ближайшего автопилота:', ' подсказывает, какая привычка ближе всего к 85% и сколько шагов до него осталось.'],
        ['Разбивка по фазам и быстрый переход:', ' видно распределение по всем 4 фазам, а нажатие на любую строку открывает карточку и календарь привычки.'],
      ],
      s2Steps: [
        ['Перейдите во вкладку ', 'Прогресс', ' и откройте раздел ', 'Обзор', '.'],
        ['Прокрутите до блока ', 'Карта укоренения', ', чтобы увидеть средний индекс и список привычек.'],
        ['Нажмите на любую привычку в карте, чтобы сразу перейти к её календарю и истории.'],
      ],
      s2Note: ['Бесплатно и Pro:', ' карточка укоренения 66 дней внутри каждой привычки бесплатна для всех, а в обзоре доступен бесплатный предпросмотр. HabitWhisper Pro открывает полную интерактивную Карту укоренения, разбивку по фазам и прогноз автопилота.'],
      s2Cap1: 'Карта укоренения в «Прогресс → Обзор» автоматически строится из вашей истории.',
      s2Alt1: 'Экран «Прогресс → Обзор» с Картой укоренения по всем активным привычкам',

      s3Tag: 'Бесплатно · Гибкий график',
      s3Title: 'Честные недельные серии («N раз в неделю»)',
      s3Lead: 'Привычки вроде силовых тренировок 3 раза в неделю не нужно делать каждый день. Теперь HabitWhisper считает их по выполненным неделям и не штрафует за дни отдыха.',
      s3Improved: [
        ['Честная недельная серия:', ' показывает количество закрытых недель подряд и личный рекорд в неделях.'],
        ['Прогресс текущей недели:', ' прямо в карточке укоренения отображается счётчик недели (например, «На этой неделе: 1 из 3»).'],
        ['Учитывает начало недели:', ' автоматически подстраивается под понедельник или воскресенье из «Настройки → Неделя начинается».'],
      ],
      s3Steps: [
        ['Создайте или отредактируйте привычку и выберите график ', 'N раз в неделю', ' (например, 3 раза в неделю).'],
        ['Выполняйте её в любые удобные дни недели — дни отдыха не прерывают серию.'],
        ['Откройте карточку привычки, чтобы увидеть ', 'Недельную серию', ', рекорд и прогресс за текущую неделю.'],
      ],
      s3Cap1: 'Гибкая привычка «3 раза в неделю» с недельной серией и текущим прогрессом.',
      s3Alt1: 'Карточка гибкой привычки с недельной серией и счётчиком за текущую неделю',

      s4Tag: 'Бесплатно · Контроль данных',
      s4Title: 'Ручная очистка архива с окончательным удалением',
      s4Lead: 'Завершённые важные привычки по-прежнему бережно хранятся в архиве, а старые тесты или черновики теперь можно выбрать и удалить навсегда.',
      s4Improved: [
        ['Выбор нескольких записей:', ' отметьте одну или несколько архивных привычек и проверьте точный список перед удалением.'],
        ['Чистый пересчёт и iCloud:', ' выбранные привычки и их история отметок удаляются навсегда, связанные цели пересчитываются, а удаление синхронизируется по iCloud.'],
        ['Защита от случайного удаления:', ' очистка доступна только в разделе «Архив» и всегда проходит через отдельный экран подтверждения.'],
      ],
      s4Steps: [
        ['Откройте ', 'Каталог привычек', ' и переключите фильтр сверху на ', 'Архив', '.'],
        ['Нажмите ', 'Выбрать', ' в верхней панели и отметьте привычки, которые хотите удалить.'],
        ['Нажмите ', 'Проверить перед удалением', ', чтобы сверить список и последствия пересчёта.'],
        ['Подтвердите кнопкой ', 'Удалить привычки навсегда', ' (действие необратимо).'],
      ],
      s4Note: ['Обычное архивирование остаётся безопасным:', ' перенос активной привычки в архив по-прежнему сохраняет всю её историю и статистику навсегда, пока вы сами не удалите её вручную.'],
      s4Cap1: 'Шаг 1: выберите архивные записи в «Каталог привычек → Архив».',
      s4Cap2: 'Шаг 2: проверьте точный список перед окончательным удалением.',
      s4Alt1: 'Экран архива привычек в режиме выбора с двумя отмеченными записями',
      s4Alt2: 'Экран подтверждения окончательного удаления выбранных привычек',

      s5Tag: 'Бесплатно · 6 языков + Мини-тур',
      s5Title: 'Четыре новых языка и интерактивный мини-тур',
      s5Lead: 'В HabitWhisper 1.1 появилась полная локализация ещё на четырёх языках на iPhone, виджетах, Live Activity, Apple Watch и Mac — а также короткий интерактивный мини-тур сразу после обновления.',
      s5Improved: [
        ['Полная поддержка 6 языков:', ' переведены все экраны, виджеты, уведомления, Live Activity, Apple Watch и компаньон для Mac с правильными склонениями и датами.'],
        ['Интерактивный экран «Что нового в 1.1»:', ' после обновления приложение один раз покажет 3-шаговый мини-тур с безопасным симулятором пропуска (он не меняет ваши данные).'],
        ['Деликатные нативные подсказки:', ' системные подсказки iOS аккуратно подсветят «Карту укоренения» и кнопку «Выбрать» в архиве при первом визите.'],
      ],
      s5Steps: [
        ['Переключайте язык интерфейса в ', 'Настройки → Язык', ' — независимо от системного языка вашего iPhone.'],
        ['Захотите открыть мини-тур 1.1 повторно? Зайдите в ', 'Настройки → О приложении → Что нового в 1.1', '.'],
        ['Любую контекстную подсказку можно закрыть в одно касание, либо просто попробовать функцию — она исчезнет сама.'],
      ],
      s5Cap1: 'Родной интерфейс на выбранном языке на iPhone, в виджетах и на Apple Watch.',
      s5Cap2: 'Интерактивный экран «Что нового в 1.1» с безопасным симулятором пропуска.',
      s5Alt1: 'Экран «Сегодня» HabitWhisper на русском языке',
      s5Alt2: 'Встроенный экран «Что нового в 1.1» с интерактивным симулятором кривой 66 дней',

      sumEyebrow1: 'Чек-лист релиза 1.1',
      sumTitle1: 'Всё, что вошло в HabitWhisper 1.1',
      sumList1: [
        ['', 'Индекс укоренения 66 дней в карточке каждой привычки (бесплатно).'],
        ['', 'Карта укоренения и прогноз автопилота в «Прогресс → Обзор» (превью бесплатно, полная карта в Pro).'],
        ['', 'Честные недельные серии и счётчик текущей недели для гибких привычек «N раз в неделю».'],
        ['', 'Ручная очистка архива с выбором нескольких привычек, подтверждением и синхронизацией iCloud.'],
        ['', 'Четыре новых языка: испанский (Мексика), португальский (Бразилия), немецкий и французский (всего 6).'],
        ['', 'Интерактивный 3-шаговый мини-тур «Что нового» (с повтором в Настройках) и нативные подсказки TipKit.'],
      ],
      sumEyebrow2: 'Что осталось неизменным',
      sumTitle2: 'Спокойно, приватно и только у вас',
      sumList2: [
        ['Ноль аккаунтов, рекламы и трекеров:', ' вся математика укоренения работает локально на iPhone.'],
        ['Личный iCloud:', ' ваша история хранится только на устройстве и в вашем личном контейнере iCloud.'],
        ['Без ручных миграций:', ' история отметок из версии 1.0 автоматически рассчитывает индекс 66 дней при первом открытии.'],
        ['Без навязчивых окон:', ' мини-тур показывается один раз обновившимся пользователям и сам уступает дорогу, если вы открыли приложение из виджета или быстрого действия.'],
      ],
      ctaTitle: 'Готовы к более спокойному ритму?',
      ctaBody: 'Обновите HabitWhisper в App Store для iPhone и iPhone Duo.',
      ctaSupport: 'Вопросы или обратная связь?',
    },

    'es-MX': {
      title: 'Novedades en 1.1 · HabitWhisper',
      desc: 'Guía y cambios de HabitWhisper 1.1: Índice de consolidación de 66 días, Mapa de consolidación, rachas semanales reales, limpieza del archivo, 4 idiomas nuevos y recorrido interactivo.',
      storeCountry: 'mx',
      skip: 'Ir al contenido principal',
      navLabel: 'Navegación',
      footerLabel: 'Enlaces',
      jumpLabel: 'Secciones de la versión',
      themeAria: 'Cambiar tema',
      langLabel: 'Elegir idioma',
      navHome: 'Inicio',
      navWhatsNew: 'Novedades 1.1',
      navScience: 'Ciencia',
      navMac: 'Mac',
      navSupport: 'Soporte',
      navPrivacy: 'Privacidad',
      navTerms: 'Términos de uso',
      heroEyebrow: 'Versión 1.1 · Guía y novedades',
      heroTitle: 'Novedades en HabitWhisper 1.1',
      heroLead: 'Tus hábitos ahora crecen sobre una curva realista de 66 días en lugar de rachas frágiles — junto con el Mapa de consolidación, rachas semanales reales, limpieza del archivo y cuatro idiomas nuevos.',
      badges: ['Índice de 66 días', 'Mapa de consolidación', 'Rachas semanales', 'Limpieza del archivo', '6 idiomas'],
      appStoreSmall: 'Disponible en el',
      appStoreLabel: 'App Store',
      heroScienceCta: 'Probar el simulador de 66 días',
      jump1: '1. Índice de 66 días',
      jump2: '2. Mapa de consolidación',
      jump3: '3. Rachas semanales',
      jump4: '4. Limpieza del archivo',
      jump5: '5. 6 idiomas y recorrido',
      jump6: 'Resumen',
      lblImproved: 'Qué mejoró',
      lblHowTo: 'Cómo usarlo',
      heroAlt: 'Pantalla Progreso de HabitWhisper 1.1 con el Mapa de consolidación e índices de 66 días',

      s1Tag: 'Gratis · En cada hábito',
      s1Title: 'Índice de consolidación de 66 días',
      s1Lead: 'Omitir un día ya no borra semanas de esfuerzo real. Cada hábito ahora calcula su nivel de automatismo (0–100%) con base en tu historial de registros.',
      s1Improved: [
        ['Curva asintótica realista:', ' los hábitos se fortalecen más rápido las primeras semanas y se estabilizan rumbo al piloto automático cerca de las 66 repeticiones.'],
        ['Tropiezos sin castigo:', ' un solo día omitido reduce el índice cerca de un 3.5% en lugar de reiniciarlo a cero.'],
        ['El esfuerzo parcial cuenta:', ' en hábitos de contador o temporizador, el avance parcial suma de forma proporcional.'],
        ['Cuatro fases claras:', ' Inicio, Construcción, Estabilización y Piloto automático (85%+), con pasos estimados restantes.'],
      ],
      s1Steps: [
        ['Abre cualquier hábito desde ', 'Hoy', ' o el ', 'Catálogo de hábitos', '.'],
        ['Revisa la tarjeta de ', 'Consolidación', ' justo debajo de tus métricas — ya está calculada con tus registros anteriores.'],
        ['Toca ', 'Por qué 66 días', ' dentro de la tarjeta para leer cómo funciona la curva y cada fase.'],
      ],
      s1Cap1: 'Tarjeta de consolidación en los detalles del hábito con fase y pasos al piloto automático.',
      s1Cap2: 'Toca “Por qué 66 días” para ver cómo responde la curva ante un día omitido.',
      s1Alt1: 'Pantalla de detalle de hábito con la tarjeta de consolidación en fase de estabilización',
      s1Alt2: 'Explicación desplegada de la curva de 66 días dentro de la tarjeta del hábito',

      s2Tag: 'Progreso → Resumen',
      s2Tier: 'Vista previa gratis · Mapa completo en Pro',
      s2Title: 'Mapa de consolidación y pronóstico',
      s2Lead: 'Ve la solidez de toda tu rutina de un vistazo: índice promedio, cuántos hábitos ya están en piloto automático y cuál es el siguiente en llegar.',
      s2Improved: [
        ['Resumen de todo el sistema:', ' muestra tu índice promedio y el total de hábitos consolidados.'],
        ['Pronóstico de piloto automático:', ' señala qué hábito está más cerca del 85% y cuántos pasos aproximados le faltan.'],
        ['Desglose por fases y acceso directo:', ' revisa las 4 fases de un vistazo y toca cualquier hábito para ir a su detalle y calendario.'],
      ],
      s2Steps: [
        ['Abre la pestaña ', 'Progreso', ' y permanece en ', 'Resumen', '.'],
        ['Desplázate hasta ', 'Mapa de consolidación', ' para ver tu panorama general.'],
        ['Toca cualquier fila para abrir directamente los detalles y el calendario de ese hábito.'],
      ],
      s2Note: ['Gratis y Pro:', ' la tarjeta de 66 días en cada hábito es gratis y el plan gratuito incluye una vista previa del mapa. HabitWhisper Pro desbloquea el mapa interactivo completo, las fases y el pronóstico.'],
      s2Cap1: 'Mapa de consolidación en Progreso → Resumen, calculado automáticamente.',
      s2Alt1: 'Pantalla Progreso → Resumen en español mostrando el Mapa de consolidación',

      s3Tag: 'Gratis · Horarios flexibles',
      s3Title: 'Rachas semanales reales (“N veces por semana”)',
      s3Lead: 'Hábitos como entrenar 3 veces por semana no están pensados para hacerse todos los días. Ahora HabitWhisper los mide por semanas cumplidas sin castigar los días de descanso.',
      s3Improved: [
        ['Racha semanal real:', ' cuenta semanas completas consecutivas y tu mejor marca histórica semanal.'],
        ['Progreso de la semana actual:', ' muestra tu avance en vivo (por ejemplo, Esta semana: 1 de 3) dentro de la tarjeta.'],
        ['Respeta tu inicio de semana:', ' sigue tu preferencia de lunes o domingo en Ajustes.'],
      ],
      s3Steps: [
        ['Crea o edita un hábito y elige la frecuencia ', 'Veces por semana', ' (por ejemplo, 3 veces por semana).'],
        ['Complétalo los días que mejor se ajusten a tu agenda — descansar no rompe tu racha.'],
        ['Abre el hábito cuando quieras para consultar tu ', 'Racha semanal', ', tu récord y el conteo de esta semana.'],
      ],
      s3Cap1: 'Hábito flexible con racha semanal real y avance de la semana en curso.',
      s3Alt1: 'Detalle de un hábito flexible mostrando racha semanal y avance actual',

      s4Tag: 'Gratis · Control de datos',
      s4Title: 'Limpieza manual y definitiva del archivo',
      s4Lead: 'Conserva para siempre en tu archivo los hábitos importantes que terminaste y elimina de forma permanente pruebas o experimentos viejos cuando quieras ordenar tus datos.',
      s4Improved: [
        ['Selección múltiple:', ' marca uno o varios hábitos archivados y revisa la lista exacta antes de confirmar.'],
        ['Recálculo limpio y sincronizado:', ' elimina permanentemente los hábitos elegidos y su historial, recalcula el progreso de metas vinculadas y lo sincroniza vía iCloud.'],
        ['Seguro por defecto:', ' solo es posible borrar desde el Archivo y siempre requiere un paso explícito de confirmación.'],
      ],
      s4Steps: [
        ['Abre el ', 'Catálogo de hábitos', ' y cambia el filtro superior a ', 'Archivo', '.'],
        ['Toca ', 'Seleccionar', ' en la barra superior y marca los hábitos archivados que deseas quitar.'],
        ['Toca ', 'Revisar eliminación', ' para verificar la lista seleccionada.'],
        ['Confirma con ', 'Eliminar hábitos permanentemente', ' (esta acción no se puede deshacer).'],
      ],
      s4Note: ['Archivar sigue protegiendo tu historial:', ' archivar un hábito activo conserva todas sus marcas y estadísticas intactas para siempre, salvo que decidas eliminarlo aquí.'],
      s4Cap1: 'Paso 1: selecciona las entradas archivadas en Catálogo de hábitos → Archivo.',
      s4Cap2: 'Paso 2: revisa la lista exacta antes de confirmar la eliminación definitiva.',
      s4Alt1: 'Archivo de hábitos en modo selección múltiple para limpiar registros',
      s4Alt2: 'Hoja de confirmación antes de eliminar hábitos permanentemente',

      s5Tag: 'Gratis · 6 idiomas + Recorrido',
      s5Title: 'Cuatro idiomas nuevos y recorrido interactivo',
      s5Lead: 'HabitWhisper 1.1 incorpora localización completa en cuatro idiomas adicionales para iPhone, widgets, Actividades en vivo, Apple Watch y Mac — más un breve recorrido interactivo al actualizar.',
      s5Improved: [
        ['Cobertura completa en 6 idiomas:', ' cada pantalla, widget, notificación, Actividad en vivo, Apple Watch y app de Mac se adapta con plurales y fechas naturales.'],
        ['Recorrido interactivo de Novedades:', ' tras actualizar verás una guía breve de 3 pasos con un simulador seguro de omisión que no altera tus hábitos reales.'],
        ['Consejos contextuales discretos:', ' consejos nativos de iOS señalan suavemente el Mapa de consolidación y la selección del archivo la primera vez que los visitas.'],
      ],
      s5Steps: [
        ['Cambia el idioma cuando quieras en ', 'Ajustes → Idioma', ' sin modificar el idioma del sistema de tu iPhone.'],
        ['¿Quieres volver a ver el recorrido 1.1? Abre ', 'Ajustes → Acerca de → Novedades en 1.1', '.'],
        ['Cierra cualquier consejo contextual con un toque o prueba la función y desaparecerá solo.'],
      ],
      s5Cap1: 'Interfaz nativa en español en iPhone, widgets y Apple Watch.',
      s5Cap2: 'Pantalla interactiva Novedades 1.1 con simulador seguro de 66 días.',
      s5Alt1: 'Pantalla Hoy de HabitWhisper en español de México',
      s5Alt2: 'Recorrido interactivo de Novedades 1.1 dentro de la app',

      sumEyebrow1: 'Lista de cambios 1.1',
      sumTitle1: 'Todo lo que incluye HabitWhisper 1.1',
      sumList1: [
        ['', 'Índice de consolidación de 66 días en cada hábito (gratis).'],
        ['', 'Mapa de consolidación y pronóstico en Progreso → Resumen (vista previa gratis, mapa completo en Pro).'],
        ['', 'Rachas semanales reales y avance semanal en hábitos flexibles “N veces por semana”.'],
        ['', 'Eliminación definitiva de hábitos archivados con selección múltiple, confirmación y sincronización iCloud.'],
        ['', 'Cuatro idiomas nuevos: español (México), portugués (Brasil), alemán y francés (6 en total).'],
        ['', 'Recorrido interactivo de 3 pasos (disponible en Ajustes) y consejos nativos de TipKit.'],
      ],
      sumEyebrow2: 'Lo que no cambió',
      sumTitle2: 'Igual de tranquilo, privado y tuyo',
      sumList2: [
        ['Sin cuentas, sin anuncios, sin rastreadores:', ' todo el cálculo de consolidación se ejecuta localmente en tu iPhone.'],
        ['Sincronización privada en iCloud:', ' tu historial permanece en tu cuenta personal de iCloud.'],
        ['Sin migraciones manuales:', ' tu historial de la versión 1.0 alimenta la curva de 66 días automáticamente.'],
        ['Sin interrupciones invasivas:', ' el recorrido 1.1 aparece una sola vez y cede el paso si abres la app desde un widget o acceso rápido.'],
      ],
      ctaTitle: '¿Listo para un ritmo más tranquilo?',
      ctaBody: 'Actualiza HabitWhisper en el App Store para iPhone y iPhone Duo.',
      ctaSupport: '¿Preguntas o comentarios?',
    },

    'pt-BR': {
      title: 'Novidades da 1.1 · HabitWhisper',
      desc: 'Guia e novidades do HabitWhisper 1.1: Índice de consolidação de 66 dias, Mapa de consolidação, sequências semanais reais, limpeza do arquivo, 4 novos idiomas e tour interativo.',
      storeCountry: 'br',
      skip: 'Pular para o conteúdo principal',
      navLabel: 'Navegação',
      footerLabel: 'Links',
      jumpLabel: 'Seções da atualização',
      themeAria: 'Alternar tema',
      langLabel: 'Escolher idioma',
      navHome: 'Início',
      navWhatsNew: 'Novidades 1.1',
      navScience: 'Ciência',
      navMac: 'Mac',
      navSupport: 'Suporte',
      navPrivacy: 'Privacidade',
      navTerms: 'Termos de uso',
      heroEyebrow: 'Versão 1.1 · Guia e novidades',
      heroTitle: 'Novidades no HabitWhisper 1.1',
      heroLead: 'Seus hábitos agora evoluem em uma curva realista de 66 dias em vez de sequências frágeis — junto com o Mapa de consolidação, sequências semanais reais, limpeza do arquivo e quatro novos idiomas.',
      badges: ['Índice de 66 dias', 'Mapa de consolidação', 'Sequências semanais', 'Limpeza do arquivo', '6 idiomas'],
      appStoreSmall: 'Disponível na',
      appStoreLabel: 'App Store',
      heroScienceCta: 'Testar simulador de 66 dias',
      jump1: '1. Índice de 66 dias',
      jump2: '2. Mapa de consolidação',
      jump3: '3. Sequências semanais',
      jump4: '4. Limpeza do arquivo',
      jump5: '5. 6 idiomas e tour',
      jump6: 'Resumo',
      lblImproved: 'O que melhorou',
      lblHowTo: 'Como usar',
      heroAlt: 'Tela Progresso do HabitWhisper 1.1 exibindo o Mapa de consolidação e o índice de 66 dias',

      s1Tag: 'Grátis · Em cada hábito',
      s1Title: 'Índice de consolidação de 66 dias',
      s1Lead: 'Pular um dia não apaga mais semanas de esforço real. Cada hábito agora calcula seu nível de automatismo (0–100%) diretamente do seu histórico existente.',
      s1Improved: [
        ['Curva assintótica realista:', ' o hábito ganha força mais rápido nas primeiras semanas e estabiliza rumo ao piloto automático por volta de 66 repetições.'],
        ['Falhas sem culpa:', ' uma falha isolada reduz cerca de 3,5% em vez de zerar todo o seu progresso.'],
        ['Esforço parcial conta:', ' hábitos com contador ou temporizador somam o progresso parcial proporcionalmente.'],
        ['Quatro fases claras:', ' Início, Construção, Estabilização e Piloto automático (85%+), com estimativa de passos restantes.'],
      ],
      s1Steps: [
        ['Abra qualquer hábito em ', 'Hoje', ' ou no ', 'Catálogo de hábitos', '.'],
        ['Veja o cartão de ', 'Consolidação', ' logo abaixo das métricas — ele já vem calculado a partir do seu histórico.'],
        ['Toque em ', 'Por que 66 dias', ' dentro do cartão para ler a explicação completa da curva e das fases.'],
      ],
      s1Cap1: 'Cartão de consolidação nos detalhes do hábito com fase e passos até o piloto automático.',
      s1Cap2: 'Toque em “Por que 66 dias” para ver como a curva lida com um dia perdido.',
      s1Alt1: 'Tela de detalhes do hábito exibindo o cartão de consolidação na fase Estabilização',
      s1Alt2: 'Explicação expandida da curva de 66 dias dentro do cartão do hábito',

      s2Tag: 'Progresso → Visão geral',
      s2Tier: 'Prévia grátis · Mapa completo no Pro',
      s2Title: 'Mapa de consolidação e previsão',
      s2Lead: 'Veja a solidez de toda a sua rotina de relance: índice médio, quantos hábitos já estão no piloto automático e qual é o próximo a chegar lá.',
      s2Improved: [
        ['Resumo completo do sistema:', ' acompanha seu índice médio de consolidação e o total de hábitos no piloto automático.'],
        ['Previsão de piloto automático:', ' destaca o hábito mais próximo dos 85% e quantos passos aproximados faltam.'],
        ['Fases e acesso rápido:', ' confira as 4 fases rapidamente e toque em qualquer hábito para abrir seus detalhes e calendário.'],
      ],
      s2Steps: [
        ['Abra a aba ', 'Progresso', ' e fique em ', 'Visão geral', '.'],
        ['Role até ', 'Mapa de consolidação', ' para ver a média geral e cada hábito.'],
        ['Toque em qualquer linha para abrir imediatamente o calendário e os detalhes do hábito.'],
      ],
      s2Note: ['Grátis vs. Pro:', ' o cartão individual de 66 dias é grátis em todos os hábitos, e o plano gratuito traz uma prévia resumida do mapa. O HabitWhisper Pro libera o mapa interativo completo, fases e previsão.'],
      s2Cap1: 'Mapa de consolidação em Progresso → Visão geral, calculado automaticamente.',
      s2Alt1: 'Tela Progresso → Visão geral em português do Brasil com o Mapa de consolidação',

      s3Tag: 'Grátis · Horários flexíveis',
      s3Title: 'Sequências semanais reais (“N vezes por semana”)',
      s3Lead: 'Hábitos como treino de força 3×/semana não são feitos todos os dias. Agora o HabitWhisper acompanha semanas concluídas sem quebrar sua sequência nos dias de descanso.',
      s3Improved: [
        ['Contador semanal real:', ' registra semanas completas seguidas e seu recorde pessoal semanal.'],
        ['Progresso da semana atual:', ' exibe o avanço em tempo real (por exemplo, Nesta semana: 1 de 3) no cartão do hábito.'],
        ['Respeita o início da semana:', ' segue sua preferência de segunda ou domingo em Ajustes.'],
      ],
      s3Steps: [
        ['Crie ou edite um hábito e escolha a frequência ', 'Vezes por semana', ' (ex.: 3 vezes por semana).'],
        ['Conclua nos dias que fizerem sentido para você — dias de descanso não zeram a sequência.'],
        ['Abra o hábito quando quiser para ver sua ', 'Sequência semanal', ', recorde e contagem desta semana.'],
      ],
      s3Cap1: 'Hábito flexível com sequência semanal real e contagem da semana atual.',
      s3Alt1: 'Tela de detalhes de hábito flexível exibindo sequência semanal e progresso da semana',

      s4Tag: 'Grátis · Controle de dados',
      s4Title: 'Limpeza manual e permanente do arquivo',
      s4Lead: 'Mantenha hábitos importantes concluídos no arquivo para sempre — e remova permanentemente entradas de teste ou experimentos antigos quando quiser limpar a casa.',
      s4Improved: [
        ['Exclusão com seleção múltipla:', ' selecione um ou mais hábitos arquivados e confira a lista exata antes de confirmar.'],
        ['Recálculo limpo e iCloud:', ' apaga definitivamente os hábitos selecionados e seu histórico, recalcula metas vinculadas e sincroniza pelo iCloud.'],
        ['Seguro por padrão:', ' a exclusão só existe na aba Arquivo e sempre exige uma tela dedicada de confirmação.'],
      ],
      s4Steps: [
        ['Abra o ', 'Catálogo de hábitos', ' e mude o filtro superior para ', 'Arquivo', '.'],
        ['Toque em ', 'Selecionar', ' na barra superior e marque os hábitos arquivados que deseja remover.'],
        ['Toque em ', 'Revisar exclusão', ' para conferir os itens selecionados.'],
        ['Confirme em ', 'Excluir hábitos permanentemente', ' (esta ação não pode ser desfeita).'],
      ],
      s4Note: ['Arquivar continua preservando seu histórico:', ' apenas arquivar um hábito ativo mantém todos os registros e estatísticas intactos para sempre, a menos que você o exclua aqui.'],
      s4Cap1: 'Passo 1: selecione registros arquivados em Catálogo de hábitos → Arquivo.',
      s4Cap2: 'Passo 2: revise a lista exata antes de confirmar a exclusão permanente.',
      s4Alt1: 'Tela de Arquivo de hábitos no modo de seleção múltipla',
      s4Alt2: 'Tela de confirmação antes de excluir hábitos arquivados permanentemente',

      s5Tag: 'Grátis · 6 idiomas + Tour no app',
      s5Title: 'Quatro novos idiomas e tour interativo no app',
      s5Lead: 'O HabitWhisper 1.1 traz tradução nativa completa para mais quatro idiomas no iPhone, widgets, Atividades ao Vivo, Apple Watch e Mac — além de um tour interativo logo após atualizar.',
      s5Improved: [
        ['Cobertura total em 6 idiomas:', ' todas as telas, widgets, notificações, Atividades ao Vivo, Apple Watch e app do Mac com pluralização e datas corretas.'],
        ['Tour interativo “Novidades na 1.1”:', ' quem atualiza vê uma apresentação rápida de 3 passos com um simulador seguro de falha que não altera seus dados.'],
        ['Dicas contextuais discretas:', ' dicas nativas do iOS apresentam o Mapa de consolidação e a limpeza do arquivo na primeira visita.'],
      ],
      s5Steps: [
        ['Troque o idioma quando quiser em ', 'Ajustes → Idioma', ' — sem alterar o idioma do sistema do iPhone.'],
        ['Quer rever o tour da 1.1 depois? Acesse ', 'Ajustes → Sobre → Novidades na 1.1', '.'],
        ['Dispense qualquer dica com um toque ou use o recurso indicado para ela sumir automaticamente.'],
      ],
      s5Cap1: 'Interface nativa em português no iPhone, widgets e Apple Watch.',
      s5Cap2: 'Tela interativa “Novidades na 1.1” com simulador seguro de 66 dias.',
      s5Alt1: 'Tela Hoje do HabitWhisper em português do Brasil',
      s5Alt2: 'Tour interativo de Novidades da versão 1.1 no app',

      sumEyebrow1: 'Checklist da versão 1.1',
      sumTitle1: 'Tudo o que entrou no HabitWhisper 1.1',
      sumList1: [
        ['', 'Índice de consolidação de 66 dias na tela de cada hábito (grátis).'],
        ['', 'Mapa de consolidação e previsão em Progresso → Visão geral (prévia grátis, mapa completo no Pro).'],
        ['', 'Sequências semanais reais e contagem semanal para hábitos flexíveis “N vezes por semana”.'],
        ['', 'Exclusão permanente de hábitos arquivados com seleção múltipla, confirmação e sincronização iCloud.'],
        ['', 'Quatro novos idiomas: espanhol (México), português (Brasil), alemão e francês (6 ao todo).'],
        ['', 'Tour interativo de 3 passos (disponível em Ajustes) e dicas nativas com TipKit.'],
      ],
      sumEyebrow2: 'O que não mudou',
      sumTitle2: 'Continua calmo, privado e seu',
      sumList2: [
        ['Sem conta, sem anúncios, sem rastreadores:', ' todo o cálculo de consolidação roda localmente no seu iPhone.'],
        ['Sincronização privada no iCloud:', ' seu histórico permanece na sua conta pessoal do iCloud.'],
        ['Sem migrações manuais:', ' seus registros da versão 1.0 alimentam a curva de 66 dias automaticamente.'],
        ['Sem pop-ups invasivos:', ' o tour 1.1 aparece uma única vez e dá passagem se você abrir o app por widget ou atalho.'],
      ],
      ctaTitle: 'Pronto para um ritmo mais calmo?',
      ctaBody: 'Atualize o HabitWhisper na App Store para iPhone e iPhone Duo.',
      ctaSupport: 'Dúvidas ou sugestões?',
    },

    de: {
      title: 'Neu in 1.1 · HabitWhisper',
      desc: 'Anleitung und Änderungen in HabitWhisper 1.1: 66-Tage-Festigungsindex, Festigungskarte, ehrliche Wochenserien, manuelle Archiv-Bereinigung, 4 neue Sprachen und interaktive Tour.',
      storeCountry: 'de',
      skip: 'Zum Hauptinhalt springen',
      navLabel: 'Navigation',
      footerLabel: 'Links',
      jumpLabel: 'Abschnitte des Updates',
      themeAria: 'Darstellung wechseln',
      langLabel: 'Sprache wählen',
      navHome: 'Start',
      navWhatsNew: 'Neu in 1.1',
      navScience: 'Wissenschaft',
      navMac: 'Mac',
      navSupport: 'Support',
      navPrivacy: 'Datenschutz',
      navTerms: 'Nutzungsbedingungen',
      heroEyebrow: 'Version 1.1 · Anleitung & Neuerungen',
      heroTitle: 'Neu in HabitWhisper 1.1',
      heroLead: 'Deine Gewohnheiten wachsen jetzt entlang einer realistischen 66-Tage-Kurve statt zerbrechlicher Serien — inklusive Festigungskarte, ehrlicher Wochenserien, manueller Archiv-Bereinigung und vier neuer Sprachen.',
      badges: ['66-Tage-Festigungsindex', 'Festigungskarte', 'Wochenserien', 'Archiv aufräumen', '6 Sprachen'],
      appStoreSmall: 'Laden im',
      appStoreLabel: 'App Store',
      heroScienceCta: '66-Tage-Simulator testen',
      jump1: '1. Festigungsindex',
      jump2: '2. Festigungskarte',
      jump3: '3. Wochenserien',
      jump4: '4. Archiv aufräumen',
      jump5: '5. 6 Sprachen & Tour',
      jump6: 'Überblick',
      lblImproved: 'Was verbessert wurde',
      lblHowTo: 'So nutzt du es',
      heroAlt: 'Fortschritt-Ansicht von HabitWhisper 1.1 mit Festigungskarte und 66-Tage-Werten',

      s1Tag: 'Kostenlos · Jede Gewohnheit',
      s1Title: '66-Tage-Festigungsindex',
      s1Lead: 'Ein einzelner Aussetzer löscht keine Wochen echter Arbeit mehr. Jede Gewohnheit berechnet ihren Automatisierungsgrad (0–100%) direkt aus deinem bisherigen Verlauf.',
      s1Improved: [
        ['Realistische asymptotische Kurve:', ' Gewohnheiten festigen sich in den ersten Wochen am schnellsten und stabilisieren sich um ~66 Wiederholungen Richtung Autopilot.'],
        ['Sanfte Aussetzer:', ' ein einzelner verpasster Tag verringert den Wert nur um ca. 3,5 % statt ihn auf null zurückzusetzen.'],
        ['Teilerfolge zählen mit:', ' bei Zählern und Timern stärkt auch anteiliger Fortschritt den Index proportional.'],
        ['Vier klare Phasen:', ' Start, Aufbau, Stabilisierung und Autopilot (85 %+) samt Schätzung der verbleibenden Schritte.'],
      ],
      s1Steps: [
        ['Öffne eine beliebige Gewohnheit unter ', 'Heute', ' oder im ', 'Gewohnheiten-Katalog', '.'],
        ['Sieh dir die Karte ', 'Festigung', ' direkt unter deinen Kennzahlen an — sie ist bereits aus deinen bisherigen Einträgen berechnet.'],
        ['Tippe in der Karte auf ', 'Warum 66 Tage', ', um die Erklärung zur Kurve und den Phasen auszuklappen.'],
      ],
      s1Cap1: 'Festigungskarte in den Gewohnheitsdetails mit Phase und Schritten bis zum Autopilot.',
      s1Cap2: 'Tippe auf „Warum 66 Tage“, um zu lesen, wie einzelne Aussetzer berücksichtigt werden.',
      s1Alt1: 'Detailansicht einer Gewohnheit mit 66-Tage-Festigungskarte in der Phase Stabilisierung',
      s1Alt2: 'Ausgeklappte Erklärung zur 66-Tage-Kurve in der Festigungskarte',

      s2Tag: 'Fortschritt → Übersicht',
      s2Tier: 'Vorschau kostenlos · Volle Karte in Pro',
      s2Title: 'Festigungskarte & Autopilot-Prognose',
      s2Lead: 'Erkenne auf einen Blick, wie stabil dein gesamtes System ist — Durchschnittsindex, Gewohnheiten im Autopilot und welche Gewohnheit als Nächstes das Ziel erreicht.',
      s2Improved: [
        ['Gesamtüberblick:', ' zeigt deinen durchschnittlichen Festigungsindex und wie viele Gewohnheiten bereits im Autopilot laufen.'],
        ['Autopilot-Prognose:', ' hebt hervor, welche Gewohnheit den 85 % am nächsten ist und wie viele Schritte ungefähr fehlen.'],
        ['Phasen & Direktsprung:', ' sieh alle 4 Phasen auf einen Blick und tippe auf jede Zeile, um Details und Kalender zu öffnen.'],
      ],
      s2Steps: [
        ['Öffne den Tab ', 'Fortschritt', ' und bleibe in der ', 'Übersicht', '.'],
        ['Scrolle zur ', 'Festigungskarte', ', um Gesamtwert und Aufschlüsselung zu sehen.'],
        ['Tippe auf eine Gewohnheit, um direkt zu ihren Details und ihrem Monatskalender zu springen.'],
      ],
      s2Note: ['Kostenlos vs. Pro:', ' Die individuelle 66-Tage-Karte jeder Gewohnheit ist kostenlos, ebenso eine kompakte Vorschau in der Übersicht. HabitWhisper Pro schaltet die komplette interaktive Festigungskarte, Phasen-Übersicht und Prognose frei.'],
      s2Cap1: 'Festigungskarte unter Fortschritt → Übersicht, automatisch aus deinem Verlauf berechnet.',
      s2Alt1: 'Fortschritt-Übersicht auf Deutsch mit der neuen Festigungskarte',

      s3Tag: 'Kostenlos · Flexible Zeitpläne',
      s3Title: 'Ehrliche Wochenserien („N-mal pro Woche“)',
      s3Lead: 'Gewohnheiten wie 3× Krafttraining pro Woche sind nicht für jeden Tag gedacht. HabitWhisper zählt sie jetzt in erfüllten Wochen, ohne dich an Ruhetagen zu bestrafen.',
      s3Improved: [
        ['Echte Wochenserie:', ' zählt aufeinanderfolgende erfüllte Wochen sowie deinen persönlichen Wochenrekord.'],
        ['Fortschritt dieser Woche:', ' zeigt den aktuellen Stand (z. B. Diese Woche: 1 von 3) direkt in der Karte.'],
        ['Respektiert deinen Wochenstart:', ' richtet sich nach Montag oder Sonntag aus Einstellungen → Woche beginnt am.'],
      ],
      s3Steps: [
        ['Erstelle oder bearbeite eine Gewohnheit mit dem Rhythmus ', 'Mal pro Woche', ' (z. B. 3-mal pro Woche).'],
        ['Erledige sie an beliebigen Tagen der Woche — Ruhetage unterbrechen nichts.'],
        ['Öffne jederzeit die Detailansicht für ', 'Wochenserie', ', Bestwert und den Stand dieser Woche.'],
      ],
      s3Cap1: 'Flexible Gewohnheit mit ehrlicher Wochenserie und aktuellem Wochenfortschritt.',
      s3Alt1: 'Detailansicht einer flexiblen Gewohnheit mit Wochenserie und Fortschritt dieser Woche',

      s4Tag: 'Kostenlos · Datenkontrolle',
      s4Title: 'Manuelle dauerhafte Archiv-Bereinigung',
      s4Lead: 'Behalte abgeschlossene wichtige Gewohnheiten dauerhaft im Archiv — und entferne alte Test-Einträge oder Experimente endgültig, wenn du Ordnung schaffen willst.',
      s4Improved: [
        ['Mehrfachauswahl:', ' markiere eine oder mehrere archivierte Gewohnheiten und prüfe die genaue Liste vor dem Löschen.'],
        ['Saubere Neuberechnung:', ' löscht gewählte Einträge samt Verlauf endgültig, berechnet verknüpfte Ziele neu und synchronisiert über iCloud.'],
        ['Sicher standardmäßig:', ' Löschen ist nur im Archiv möglich und erfordert immer eine ausdrückliche Bestätigung.'],
      ],
      s4Steps: [
        ['Öffne den ', 'Gewohnheiten-Katalog', ' und wechsle oben zum Filter ', 'Archiv', '.'],
        ['Tippe oben auf ', 'Auswählen', ' und markiere die archivierten Gewohnheiten, die weg sollen.'],
        ['Tippe auf ', 'Löschen prüfen', ', um die Auswahl und die Folgen zu kontrollieren.'],
        ['Bestätige mit ', 'Gewohnheiten endgültig löschen', ' (nicht rückgängig machbar).'],
      ],
      s4Note: ['Archivieren schützt deinen Verlauf weiterhin:', ' normales Archivieren bewahrt alle Einträge und Statistiken dauerhaft, solange du sie hier nicht ausdrücklich löschst.'],
      s4Cap1: 'Schritt 1: Archivierte Einträge unter Gewohnheiten-Katalog → Archiv auswählen.',
      s4Cap2: 'Schritt 2: Genaue Liste vor dem endgültigen Löschen prüfen.',
      s4Alt1: 'Archiv-Ansicht im Mehrfachauswahl-Modus zum Entfernen alter Einträge',
      s4Alt2: 'Bestätigungsansicht vor dem endgültigen Löschen ausgewählter Gewohnheiten',

      s5Tag: 'Kostenlos · 6 Sprachen + App-Tour',
      s5Title: 'Vier neue Sprachen & interaktive App-Tour',
      s5Lead: 'HabitWhisper 1.1 ergänzt vollständige Übersetzungen in vier weiteren Sprachen für iPhone, Widgets, Live-Aktivitäten, Apple Watch und Mac — plus eine kurze interaktive Tour nach dem Update.',
      s5Improved: [
        ['Volle 6-Sprachen-Abdeckung:', ' alle Ansichten, Widgets, Mitteilungen, Live-Aktivitäten, Apple Watch und Mac-Begleiter mit korrekter Pluralbildung und Datumsformaten.'],
        ['Interaktive „Neu in 1.1“-Tour:', ' bestehende Nutzer sehen nach dem Update einmalig eine 3-stufige Übersicht mit sicherem Aussetzer-Simulator ohne Änderung echter Daten.'],
        ['Zurückhaltende Kontext-Tipps:', ' native iOS-Tipps weisen beim ersten Besuch kurz auf die Festigungskarte und die Archiv-Auswahl hin.'],
      ],
      s5Steps: [
        ['Wechsle die Sprache jederzeit unter ', 'Einstellungen → Sprache', ' — unabhängig von der iPhone-Systemsprache.'],
        ['Du möchtest die 1.1-Tour später erneut öffnen? Gehe zu ', 'Einstellungen → Über die App → Neu in 1.1', '.'],
        ['Schließe jeden Hinweis mit einem Tipp oder probiere die Funktion aus — dann verschwindet er automatisch.'],
      ],
      s5Cap1: 'Native Oberfläche auf Deutsch auf iPhone, Widgets und Apple Watch.',
      s5Cap2: 'Interaktive Ansicht „Neu in 1.1“ mit sicherem Live-Simulator.',
      s5Alt1: 'Heute-Ansicht von HabitWhisper auf Deutsch',
      s5Alt2: 'Interaktive Neu-in-1.1-Tour mit 66-Tage-Simulator in der App',

      sumEyebrow1: 'Release-1.1-Checkliste',
      sumTitle1: 'Alles in HabitWhisper 1.1',
      sumList1: [
        ['', '66-Tage-Festigungsindex in jeder Gewohnheit (kostenlos).'],
        ['', 'Festigungskarte & Autopilot-Prognose unter Fortschritt → Übersicht (Vorschau kostenlos, volle Karte in Pro).'],
        ['', 'Ehrliche Wochenserien und Wochenstand für flexible „N-mal pro Woche“-Gewohnheiten.'],
        ['', 'Dauerhafte Archiv-Bereinigung mit Mehrfachauswahl, Bestätigung und iCloud-Sync.'],
        ['', 'Vier neue Sprachen: Spanisch (Mexiko), Portugiesisch (Brasilien), Deutsch und Französisch (insgesamt 6).'],
        ['', 'Interaktive 3-Schritte-Tour (wiederholbar in den Einstellungen) und native TipKit-Hinweise.'],
      ],
      sumEyebrow2: 'Was unverändert bleibt',
      sumTitle2: 'Weiterhin ruhig, privat und bei dir',
      sumList2: [
        ['Kein Konto, keine Werbung, keine Tracker:', ' die gesamte Festigungsmathematik läuft lokal auf deinem iPhone.'],
        ['Privater iCloud-Sync:', ' dein Verlauf bleibt in deinem persönlichen Apple-iCloud-Speicher.'],
        ['Kein Migrationsaufwand:', ' deine bisherigen Einträge aus 1.0 speisen die 66-Tage-Kurve sofort automatisch.'],
        ['Keine aufdringlichen Pop-ups:', ' die 1.1-Tour erscheint einmalig und tritt zurück, wenn du die App per Widget oder Kurzbefehl öffnest.'],
      ],
      ctaTitle: 'Bereit für einen ruhigeren Rhythmus?',
      ctaBody: 'Aktualisiere HabitWhisper im App Store für iPhone und iPhone Duo.',
      ctaSupport: 'Fragen oder Feedback?',
    },

    'fr-FR': {
      title: 'Nouveautés 1.1 · HabitWhisper',
      desc: 'Guide et nouveautés de HabitWhisper 1.1 : indice de consolidation sur 66 jours, Carte de consolidation, séries hebdomadaires réelles, nettoyage d’archive, 4 nouvelles langues et visite guidée.',
      storeCountry: 'fr',
      skip: 'Aller au contenu principal',
      navLabel: 'Navigation',
      footerLabel: 'Liens',
      jumpLabel: 'Sections de la mise à jour',
      themeAria: 'Changer de thème',
      langLabel: 'Choisir la langue',
      navHome: 'Accueil',
      navWhatsNew: 'Nouveautés 1.1',
      navScience: 'Science',
      navMac: 'Mac',
      navSupport: 'Assistance',
      navPrivacy: 'Confidentialité',
      navTerms: 'Conditions d’utilisation',
      heroEyebrow: 'Version 1.1 · Guide & nouveautés',
      heroTitle: 'Nouveautés de HabitWhisper 1.1',
      heroLead: 'Vos habitudes progressent désormais selon une courbe réaliste de 66 jours plutôt que des séries fragiles — avec la Carte de consolidation, les séries hebdomadaires réelles, le nettoyage manuel de l’archive et quatre nouvelles langues.',
      badges: ['Indice 66 jours', 'Carte de consolidation', 'Séries hebdomadaires', 'Nettoyage d’archive', '6 langues'],
      appStoreSmall: 'Disponible dans l’',
      appStoreLabel: 'App Store',
      heroScienceCta: 'Essayer le simulateur 66 jours',
      jump1: '1. Indice 66 jours',
      jump2: '2. Carte de consolidation',
      jump3: '3. Séries hebdomadaires',
      jump4: '4. Nettoyage d’archive',
      jump5: '5. 6 langues & visite',
      jump6: 'Résumé',
      lblImproved: 'Ce qui a été amélioré',
      lblHowTo: 'Comment l’utiliser',
      heroAlt: 'Écran Progression de HabitWhisper 1.1 présentant la Carte de consolidation sur 66 jours',

      s1Tag: 'Gratuit · Chaque habitude',
      s1Title: 'Indice de consolidation sur 66 jours',
      s1Lead: 'Un jour manqué n’efface plus des semaines d’effort réel. Chaque habitude calcule désormais son niveau d’automatisme (0–100 %) à partir de votre historique existant.',
      s1Improved: [
        ['Courbe asymptotique réaliste :', ' une habitude se renforce vite les premières semaines puis tend vers le pilote automatique autour de ~66 répétitions.'],
        ['Oublis sans culpabilité :', ' un jour manqué réduit l’indice d’environ 3,5 % au lieu de tout remettre à zéro.'],
        ['Les efforts partiels comptent :', ' pour les compteurs et minuteurs, une avancée partielle contribue proportionnellement.'],
        ['Quatre phases lisibles :', ' Démarrage, Construction, Stabilisation et Pilote auto (85 %+), avec le nombre d’étapes restantes estimé.'],
      ],
      s1Steps: [
        ['Ouvrez n’importe quelle habitude depuis ', 'Aujourd’hui', ' ou le ', 'Catalogue d’habitudes', '.'],
        ['Consultez la carte ', 'Consolidation', ' juste sous vos indicateurs — elle est déjà calculée depuis vos validations passées.'],
        ['Touchez ', 'Pourquoi 66 jours', ' dans la carte pour afficher l’explication de la courbe et des phases.'],
      ],
      s1Cap1: 'Carte de consolidation dans les détails d’une habitude avec phase et étapes vers le pilote auto.',
      s1Cap2: 'Touchez « Pourquoi 66 jours » pour voir comment la courbe absorbe un oubli isolé.',
      s1Alt1: 'Écran de détail d’une habitude affichant l’indice de consolidation en phase Stabilisation',
      s1Alt2: 'Explication détaillée de la courbe des 66 jours dans la carte de consolidation',

      s2Tag: 'Progression → Aperçu',
      s2Tier: 'Aperçu gratuit · Carte complète avec Pro',
      s2Title: 'Carte de consolidation et prévision',
      s2Lead: 'Évaluez la solidité de toute votre routine en un coup d’œil : indice moyen, nombre d’habitudes en pilote automatique et prochaine habitude sur le point d’y arriver.',
      s2Improved: [
        ['Vue d’ensemble complète :', ' suit votre indice moyen de consolidation et le nombre d’habitudes en pilote automatique.'],
        ['Prévision pilote auto :', ' met en avant l’habitude la plus proche des 85 % et le nombre d’étapes restantes estimé.'],
        ['Phases et accès direct :', ' visualisez les 4 phases et touchez n’importe quelle ligne pour ouvrir sa fiche et son calendrier.'],
      ],
      s2Steps: [
        ['Ouvrez l’onglet ', 'Progression', ' et restez sur ', 'Aperçu', '.'],
        ['Faites défiler jusqu’à ', 'Carte de consolidation', ' pour voir votre score global et vos habitudes.'],
        ['Touchez une habitude pour accéder directement à ses détails et à son calendrier mensuel.'],
      ],
      s2Note: ['Gratuit et Pro :', ' la carte de consolidation de chaque habitude est gratuite, ainsi qu’un aperçu résumé dans Progression. HabitWhisper Pro débloque la carte interactive complète, le détail par phases et la prévision.'],
      s2Cap1: 'Carte de consolidation dans Progression → Aperçu, calculée automatiquement.',
      s2Alt1: 'Écran Progression → Aperçu en français affichant la Carte de consolidation',

      s3Tag: 'Gratuit · Rythmes flexibles',
      s3Title: 'Séries hebdomadaires honnêtes (« N fois par semaine »)',
      s3Lead: 'Les habitudes comme le sport 3×/semaine ne sont pas faites pour être cochées tous les jours. HabitWhisper les suit désormais par semaines réussies sans pénaliser les jours de repos.',
      s3Improved: [
        ['Vraie série hebdomadaire :', ' compte les semaines complètes consécutives ainsi que votre record hebdomadaire.'],
        ['Suivi de la semaine en cours :', ' affiche votre avancement (par ex. Cette semaine : 1 sur 3) directement dans la carte.'],
        ['Respecte le début de semaine :', ' suit votre réglage lundi ou dimanche dans Réglages.'],
      ],
      s3Steps: [
        ['Créez ou modifiez une habitude avec la fréquence ', 'Fois par semaine', ' (par ex. 3 fois par semaine).'],
        ['Validez-la les jours qui vous conviennent — les jours de repos ne cassent pas la série.'],
        ['Ouvrez la fiche de l’habitude pour consulter votre ', 'Série hebdomadaire', ', votre record et la semaine en cours.'],
      ],
      s3Cap1: 'Habitude flexible avec série hebdomadaire réelle et avancement de la semaine.',
      s3Alt1: 'Fiche d’une habitude flexible affichant la série hebdomadaire et le progrès actuel',

      s4Tag: 'Gratuit · Contrôle des données',
      s4Title: 'Nettoyage manuel et définitif de l’archive',
      s4Lead: 'Conservez à vie vos anciennes habitudes importantes dans l’archive — et supprimez définitivement les essais ou brouillons obsolètes quand vous souhaitez faire le tri.',
      s4Improved: [
        ['Sélection multiple :', ' cochez une ou plusieurs habitudes archivées et vérifiez la liste précise avant confirmation.'],
        ['Recalcul propre et iCloud :', ' efface définitivement les habitudes choisies et leur historique, recalcule les objectifs liés et synchronise via iCloud.'],
        ['Sûr par défaut :', ' la suppression n’est possible que depuis l’Archive, avec un écran de confirmation explicite.'],
      ],
      s4Steps: [
        ['Ouvrez le ', 'Catalogue d’habitudes', ' puis basculez sur le filtre ', 'Archive', '.'],
        ['Touchez ', 'Sélectionner', ' en haut et cochez les habitudes archivées à supprimer.'],
        ['Touchez ', 'Vérifier la suppression', ' pour contrôler la liste et les effets du recalcul.'],
        ['Confirmez avec ', 'Supprimer définitivement', ' (action irréversible).'],
      ],
      s4Note: ['Archiver protège toujours votre historique :', ' archiver une habitude active garde toutes ses validations et statistiques intactes indéfiniment, tant que vous ne la supprimez pas ici.'],
      s4Cap1: 'Étape 1 : sélectionnez les éléments à retirer dans Catalogue d’habitudes → Archive.',
      s4Cap2: 'Étape 2 : vérifiez la liste exacte avant de confirmer la suppression définitive.',
      s4Alt1: 'Écran Archive des habitudes en mode sélection multiple',
      s4Alt2: 'Feuille de confirmation avant suppression définitive des habitudes',

      s5Tag: 'Gratuit · 6 langues + Visite guidée',
      s5Title: 'Quatre nouvelles langues et visite interactive',
      s5Lead: 'HabitWhisper 1.1 ajoute une localisation complète dans quatre nouvelles langues sur iPhone, widgets, Activités en direct, Apple Watch et Mac — ainsi qu’une courte visite interactive après la mise à jour.',
      s5Improved: [
        ['6 langues prises en charge :', ' tous les écrans, widgets, notifications, Activités en direct, Apple Watch et compagnon Mac avec pluriels et dates adaptés.'],
        ['Visite interactive « Nouveautés 1.1 » :', ' après la mise à jour, un aperçu en 3 étapes s’affiche une fois avec un simulateur d’oubli sans impact sur vos données.'],
        ['Astuces contextuelles discrètes :', ' des conseils natifs iOS signalent calmement la Carte de consolidation et le tri de l’archive lors de votre première visite.'],
      ],
      s5Steps: [
        ['Changez la langue à tout moment dans ', 'Réglages → Langue', ' — sans toucher à la langue système de l’iPhone.'],
        ['Envie de revoir la visite 1.1 plus tard ? Ouvrez ', 'Réglages → À propos → Nouveautés 1.1', '.'],
        ['Fermez une astuce d’un geste ou essayez la fonction indiquée pour qu’elle disparaisse d’elle-même.'],
      ],
      s5Cap1: 'Interface native en français sur iPhone, widgets et Apple Watch.',
      s5Cap2: 'Écran interactif Nouveautés 1.1 avec simulateur d’oubli sur 66 jours.',
      s5Alt1: 'Écran Aujourd’hui de HabitWhisper en français',
      s5Alt2: 'Visite interactive des Nouveautés 1.1 intégrée à l’application',

      sumEyebrow1: 'Récapitulatif 1.1',
      sumTitle1: 'Tout ce qu’apporte HabitWhisper 1.1',
      sumList1: [
        ['', 'Indice de consolidation sur 66 jours sur chaque habitude (gratuit).'],
        ['', 'Carte de consolidation et prévision dans Progression → Aperçu (aperçu gratuit, carte complète en Pro).'],
        ['', 'Séries hebdomadaires réelles et suivi de la semaine pour les habitudes « N fois par semaine ».'],
        ['', 'Suppression définitive d’habitudes archivées avec sélection multiple, confirmation et synchronisation iCloud.'],
        ['', 'Quatre nouvelles langues : espagnol (Mexique), portugais (Brésil), allemand et français (6 au total).'],
        ['', 'Visite guidée interactive en 3 étapes (rejouable dans Réglages) et conseils natifs TipKit.'],
      ],
      sumEyebrow2: 'Ce qui ne change pas',
      sumTitle2: 'Toujours calme, privé et à vous',
      sumList2: [
        ['Sans compte, sans publicité, sans traceur :', ' tous les calculs de consolidation tournent localement sur votre iPhone.'],
        ['Synchronisation iCloud privée :', ' votre historique reste dans votre conteneur iCloud personnel.'],
        ['Aucune migration manuelle :', ' votre historique 1.0 alimente automatiquement la courbe des 66 jours au premier lancement.'],
        ['Aucune fenêtre intrusive :', ' la visite 1.1 s’affiche une seule fois et s’efface si vous ouvrez l’app via un widget ou un raccourci.'],
      ],
      ctaTitle: 'Prêt pour un rythme plus serein ?',
      ctaBody: 'Mettez à jour HabitWhisper dans l’App Store pour iPhone et iPhone Duo.',
      ctaSupport: 'Questions ou retours ?',
    },
  };

  function normalizeLang(raw) {
    if (!raw) return 'en';
    var s = String(raw).trim().toLowerCase();
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i].toLowerCase() === s) return SUPPORTED[i];
    }
    if (s.indexOf('ru') === 0 || s.indexOf('be') === 0) return 'ru';
    if (s.indexOf('es') === 0) return 'es-MX';
    if (s.indexOf('pt') === 0) return 'pt-BR';
    if (s.indexOf('de') === 0) return 'de';
    if (s.indexOf('fr') === 0) return 'fr-FR';
    return 'en';
  }

  function renderLeadList(id, items) {
    var list = document.getElementById(id);
    if (!list) return;
    list.textContent = '';
    items.forEach(function (pair) {
      var li = document.createElement('li');
      if (pair[0]) {
        var strong = document.createElement('strong');
        strong.textContent = pair[0];
        li.appendChild(strong);
      }
      li.appendChild(document.createTextNode(pair[1]));
      list.appendChild(li);
    });
  }

  function renderSteps(id, steps) {
    var list = document.getElementById(id);
    if (!list) return;
    list.textContent = '';
    steps.forEach(function (segments) {
      var li = document.createElement('li');
      segments.forEach(function (seg, idx) {
        if (idx % 2 === 1) {
          var strong = document.createElement('strong');
          strong.textContent = seg;
          li.appendChild(strong);
        } else if (seg) {
          li.appendChild(document.createTextNode(seg));
        }
      });
      list.appendChild(li);
    });
  }

  function renderNote(selector, pair) {
    var el = document.querySelector(selector);
    if (!el || !pair) return;
    el.textContent = '';
    var strong = document.createElement('strong');
    strong.textContent = pair[0];
    el.appendChild(strong);
    el.appendChild(document.createTextNode(pair[1]));
  }

  function applyLanguage(lang, syncUrl) {
    var locale = normalizeLang(lang);
    var dict = COPY[locale] || COPY.en;
    var root = document.documentElement;
    root.dataset.lang = locale;
    root.lang = locale;

    document.title = dict.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.desc);

    var nav = document.getElementById('wn-nav');
    if (nav) nav.setAttribute('aria-label', dict.navLabel);
    var footerNav = document.getElementById('wn-footer-nav');
    if (footerNav) footerNav.setAttribute('aria-label', dict.footerLabel);
    var jumpNav = document.getElementById('wn-jump');
    if (jumpNav) jumpNav.setAttribute('aria-label', dict.jumpLabel);
    var themeBtn = document.getElementById('wn-theme-btn');
    if (themeBtn) themeBtn.setAttribute('aria-label', dict.themeAria);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (typeof dict[key] === 'string') {
        el.textContent = dict[key];
      }
    });

    var badges = document.getElementById('wn-badges');
    if (badges) {
      badges.textContent = '';
      dict.badges.forEach(function (label) {
        var li = document.createElement('li');
        li.textContent = label;
        badges.appendChild(li);
      });
    }

    renderLeadList('s1-improved', dict.s1Improved);
    renderSteps('s1-steps', dict.s1Steps);
    renderLeadList('s2-improved', dict.s2Improved);
    renderSteps('s2-steps', dict.s2Steps);
    renderNote('[data-i18n="s2Note"]', dict.s2Note);
    renderLeadList('s3-improved', dict.s3Improved);
    renderSteps('s3-steps', dict.s3Steps);
    renderLeadList('s4-improved', dict.s4Improved);
    renderSteps('s4-steps', dict.s4Steps);
    renderNote('[data-i18n="s4Note"]', dict.s4Note);
    renderLeadList('s5-improved', dict.s5Improved);
    renderSteps('s5-steps', dict.s5Steps);
    renderLeadList('sum-list1', dict.sumList1);
    renderLeadList('sum-list2', dict.sumList2);

    var storeHref = 'https://apps.apple.com/' + dict.storeCountry + '/app/id6808374814';
    ['wn-appstore-top', 'wn-appstore-bottom'].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.setAttribute('href', storeHref);
    });

    // Native localized 6-language full-screen shots (progress + today)
    var heroImg = document.getElementById('wn-hero-img');
    if (heroImg) {
      heroImg.setAttribute('src', '../assets/screens/' + locale + '/progress.webp');
      heroImg.setAttribute('alt', dict.heroAlt);
    }
    document.querySelectorAll('img[data-wn-locale-shot]').forEach(function (img) {
      var shot = img.getAttribute('data-wn-locale-shot');
      img.setAttribute('src', '../assets/screens/' + locale + '/' + shot + '.webp');
      if (shot === 'progress') img.setAttribute('alt', dict.s2Alt1);
      if (shot === 'today') img.setAttribute('alt', dict.s5Alt1);
    });

    // Detail & archive feature shots: RU for Russian, EN for Latin-script locales
    var detailLocale = locale === 'ru' ? 'ru' : 'en';
    var altMap = {
      'consolidation-detail': dict.s1Alt1,
      'consolidation-why': dict.s1Alt2,
      'weekly-streak': dict.s3Alt1,
      'archive-select': dict.s4Alt1,
      'archive-confirm': dict.s4Alt2,
      'whats-new-tour': dict.s5Alt2,
    };
    document.querySelectorAll('img[data-wn-shot]').forEach(function (img) {
      var key = img.getAttribute('data-wn-shot');
      img.setAttribute('src', '../assets/whats-new/' + key + '-' + detailLocale + '.webp');
      if (altMap[key]) img.setAttribute('alt', altMap[key]);
    });

    var select = document.getElementById('wn-lang-select');
    if (select && select.value !== locale) {
      select.value = locale;
    }

    try {
      localStorage.setItem('hw-whats-new-lang', locale);
      localStorage.setItem('hw-lang', locale === 'ru' ? 'ru' : 'en');
    } catch (e) {}

    if (syncUrl && history.replaceState) {
      try {
        var url = new URL(location.href);
        url.searchParams.set('lang', locale);
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      } catch (e) {}
    }
  }

  var select = document.getElementById('wn-lang-select');
  var initial = normalizeLang(document.documentElement.dataset.lang || 'en');
  if (select) {
    select.value = initial;
    select.addEventListener('change', function () {
      applyLanguage(select.value, true);
    });
  }
  applyLanguage(initial, false);
})();
