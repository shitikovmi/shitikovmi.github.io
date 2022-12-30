import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    homeIntroduction: {
                        title: 'We build future',
                        text: `We believe we can change the <br/> perception and functioning of a place`,
                        btn: 'Explore'
                    },
                    header: {
                        projects: "Projects",
                        team: "Our team",
                        info: 'Useful information',
                        contacts: 'Contacts',
                        street: 'Batumi, Zhiyuli Shartava, 10'
                    },
                    footer: {
                        yt: 'Check our Youtube channel',
                        fb: 'Follow us on Facebook',
                        inst: 'Follow us on Instagram',
                        wa: 'Message us on WhatsApp',
                        tg: 'Message us on Telegram',
                        ql: 'Quick links',
                        home: 'Home',
                        ll: 'Legal links',
                        t: 'Terms',
                        c: 'Conditions',
                        p: 'Policy'
                    },
                    homeProjects: {
                        gid: 'Premium class apartments in an ecologically clean district of Batumi',
                        gidd: 'December 2022',
                        bgrd: 'Townhouses and apartments',
                        bgrdd: 'December 2024',
                        lgd: 'Premium apartments near the cleanest beach in Georgia',
                        subtitle: 'We offer you the best',
                        title: 'Our projects'
                    },
                    homeProjectsItem: {
                        salesOpen: 'Sales open',
                        salesClosed: 'Sales closed'
                    },
                    homeAdvantages: {
                        subtitle: 'Advantages',
                        title: 'With our knowledge we guarantee success',
                        item01: 'From townhouses to premium apartments',
                        item02: 'The best locations in Batumi and the suburbs',
                        item03: 'Ecological districts and European construction quality'
                    },
                    homeAbout: {
                        subtitle: 'About us',
                        title: 'Who are we?',
                        text: 'We are highly qualified specialists, behind whom participation in the construction of many well-known objects in Batumi, as well as private investors. All of us united into a single team more than 10 years ago to create truly unique projects that the city is proud of.',
                        lm: 'Learn more'
                    },
                    homeExp: {
                        title: 'We have 10 years experience in Construction',
                        subtitle: 'And we are here to provide you with the best',
                        btn: 'Have a question?'
                    },
                    homeInfo: {
                        subtitle: 'What’s new?',
                        title: 'Useful information',
                        textTitle: '10 reasons to invest in Georgia: in real estate',
                        text: 'Foreign investments in Georgia in 2022 increased by almost 80%. Investors from Europe, USA, Turkey, Great Britain, and China are investing in the energy, financial, transport, and of course, real estate in Georgia.',
                        lm: 'Learn more'
                    },
                    homeForm: {
                        subtitle: 'How can we help you?',
                        title: 'Drop us a message',
                        text: 'Leave us a message and we’ll conctact you!',
                        name: 'First name',
                        phone: 'Phone',
                        email: 'Email',
                        message: 'Message',
                        btn: 'Contact us',
                        sending: 'Sending...'
                    },
                    form: {
                        name: 'First name',
                        phone: 'Phone',
                        email: 'Mail',
                        message: 'Message',
                        btn: 'Contact us',
                        sending: 'Sending...'
                    },
                    teamAbout: {
                        title: 'Our team',
                        subtitle: 'Committed quality management',
                        text: `
                        The Batumi Investment team are highly qualified specialists, behind whom participation in the construction of many well-known objects in Batumi, as well as private investors. All of us united into a single team more than 10 years ago to create truly unique projects that the city is proud of. <br/><br/>
                        We don't know anyone in Batumi who would also carefully consider the infrastructure of facilities and constantly improved projects.<br/><br/>
                        There is not a single long-term plan behind us.<br/><br/>
                        We use European materials in construction, without increasing the cost square meter.<br/><br/>
                        Our main priorities are the quality of work and openness to our clients.<br/><br/>`
                    },
                    contactsLink: {
                        subtitle: 'Are you ready?',
                        title: 'Let’s build <br/> your perfect place',
                        btn: 'Contacts us',
                    },
                    teamEmp: {
                        title: 'Key people',
                        jbn: 'Jano Bochorishvili',
                        jbp: 'CEO and Founder',
                        ekn: 'Edvard Khimshiashvili',
                        ekp: 'Founder',
                        dnn: 'Dea Nikabadze',
                        dnp: 'Sales manager',
                        nkn: 'Niko Kakabadze',
                        nkp: 'Sales manager',
                        mgn: 'Maria Gabelia',
                        mgp: 'SMM manager',
                        vkn: 'Vakhtang Kakaladze',
                        vkp: 'Engineer',
                    },
                    contacts: {
                        title: 'Contacts',
                        subtitle: 'We are ready to help you will all your questions.',
                    },
                    articleHeader: {
                        title: 'Useful information'
                    },
                    articleRelated: {
                        subtitle: 'Related Articles'
                    },
                    youtube: {
                        title: 'Our Projects',
                        subtitle: 'We are happy to share with your our working process',
                        text: 'Check our projects on YouTube'
                    },
                    projects: {
                        bgrdd: 'Декабрь 2024',
                        gidd: 'Декабрь 2022',
                        po: 'installment plan, mortgage',
                        a: 'Address:',
                        p: "Phone:",
                        terrace: 'Terrace',
                        potext: 'Payment options:',
                        co: 'Completed on:',
                        dp: 'Down payment:',
                        pd: 'Project details',
                        progress: 'Progress:',
                        playground: 'Playground',
                        lva01: 'SPA center, swimming pool, sauna',
                        lva02: 'Gym',
                        lva03: 'Underground and surface parking',
                        lva04: 'Garden with planted lemons',
                        lva05: '24-hour apartment service',
                        lva06: 'Living all year long without additional agreements',
                        lva07: 'The house is fully gasified',
                        lva08: 'Rehau 70 shop windows',
                        lva09: 'Ventilated foundation, moisture-resistant and fire-resistant facade',
                        lva10: 'High seismic resistance',
                        abi: 'Built-in infrastructure',
                        as: 'Services',
                        ac: 'Characteristics',
                        gi01: 'Heated swimming pool',
                        gi02: 'Personal barbecue areas on the terraces in each house',
                        gi03: 'Maintenance of the general territory',
                        gi04: 'An opportunity to rent out your townhouse with a management company',
                        gipit: 'Select your dream house',
                        floor: 'Floor',
                        download: 'Download',
                        lvpit: 'Select your dream villa',
                        type: 'Type',
                        bgrpit: 'Select your dream apartment',
                        bgrpia: 'Apartaments',
                        bgrpic: 'Cottage',
                        sold: 'Sold out',
                        reserved: 'Reserved',
                        lgit: 'Choose your dream apartment'
                    },
                    awards: {
                        title: 'Our Awards',
                        lgt: 'Lemon Garden Residence & SPA',
                        lgd: 'Best investment project',
                        bt: 'Royal Residence Botanico',
                        bd: 'The best investment and residential complex'
                    },
                }
            },
            ru: {
                translation: {
                    homeIntroduction: {
                        title: `Доходная недвижимость в Батуми`,
                        text: `Апартаменты, виллы, таунхаусы премиум-класса`,
                        btn: 'Получить выгодное предложение'
                    },
                    header: {
                        projects: "Проекты",
                        team: "Команда",
                        info: "Полезная информация",
                        contacts: 'Контакты',
                        street: 'проспект Жиули Шартава, 10, Батуми'
                    },
                    footer: {
                        yt: 'Youtube',
                        fb: 'Facebook',
                        inst: 'Instagram',
                        wa: 'WhatsApp',
                        tg: 'Telegram',
                        ql: 'Навигация',
                        home: 'Главная',
                        ll: 'Приватность',
                        t: 'Условия',
                        c: 'Правила',
                        p: 'Политика'
                    },
                    homeProjects: {
                        gid: '14 таунхаусов у самого чистого пляжа Грузии',
                        gidd: 'Декабрь 2022',
                        bgrd: 'Таунхаусы с собственным участком, апартаменты в малоэтажном комплексе',
                        bgrdd: 'Декабрь 2024',
                        lgd: 'Апартаменты премиум-класса в самом перспективном районе Батуми ',
                        subtitle: 'Мы предлагаем вам лучшее',
                        title: 'Наши проекты'
                    },
                    homeProjectsItem: {
                        salesOpen: 'В продаже',
                        salesClosed: 'Продано'
                    },
                    homeAdvantages: {
                        subtitle: 'Наши преимущества ',
                        title: 'Более 10 лет мы совершенствуемся, но неизменным остаётся:',
                        item01: 'Европейские стандарты строительства',
                        item02: 'Работа управляющей компании, обеспечивающей доход',
                        item03: 'Экологически чистые локации'
                    },
                    homeAbout: {
                        subtitle: 'О нас',
                        title: 'Кто мы?',
                        text: 'Мы высококвалифицированные специалисты, за плечами которых участие в строительстве многих известных объектов в Батуми, а также частные инвесторы. Все мы объединились в единую команду более 10 лет назад для создания действительно уникальных проектов, которыми гордится город.',
                        lm: 'Узнать больше'
                    },
                    homeExp: {
                        title: 'У нас 10 лет опыта в Строительстве',
                        subtitle: 'И мы здесь, чтобы предоставить вам лучшее',
                        btn: 'Свяжитесь с нами'
                    },
                    homeInfo: {
                        subtitle: 'Какие новости?',
                        title: 'Полезная информация',
                        text: 'Иностранные инвестиции в Грузию в 2022 году выросли почти на 80%. Инвесторы из Европы, США, Турции, Великобритании и Китая вкладывают средства в энергетику, финансы, транспорт и, конечно же, в недвижимость Грузии.',
                        textTitle: '10 причин инвестировать в недвижимость в Грузии',
                        lm: 'Узнать больше'
                    },
                    homeForm: {
                        subtitle: 'Как мы можем вам помочь?',
                        title: 'Напишите нам',
                        text: 'Оставьте сообщение и мы с Вами свяжемся',
                    },
                    form: {
                        name: 'Имя',
                        phone: 'Телефон',
                        email: 'Почта',
                        message: 'Сообщение',
                        btn: 'Отправить',
                        sending: 'Отправка...'
                    },
                    teamAbout: {
                        title: 'Наша команда',
                        subtitle: 'Целенаправленный контроль качества',
                        text: 'Команда Batumi Investment - это высококвалифицированные специалисты, за плечами которых' +
                            ' участие в строительстве многих известных объектов в Батуми, а также частные инвесторы. Все мы' +
                            ' объединились в единую команду уже более 10 лет назад, чтобы создавать действительно уникальные' +
                            ' проекты, которыми гордится город.<br/><br/>Мы не знаем никого в Батуми, кто бы также тщательно продумывал инфраструктуру объектов и' +
                            ' постоянно совершенствовал проекты.<br/><br/>За нашими плечами нет ни одного долгостроя.<br/><br/>Мы используем европейские материалы в строительстве, не завышая при этом стоимость за' +
                            ' квадратный метр.<br/><br/>Наши главные приоритеты - это качество работы и открытость перед нашими клиентами.'
                    },
                    contactsLink: {
                        subtitle: 'Остались вопросы по проекту?',
                        title: 'Ответим быстро',
                        btn: 'Свяжитесь с нами',
                    },
                    teamEmp: {
                        title: 'Ключевые сотрудники',
                        jbn: 'Джано Бочоришвили',
                        jbp: 'Генеральный директор и основатель',
                        ekn: 'Эдвард Химшиашвили',
                        ekp: 'Основатель',
                        dnn: 'Медея Никабидзе',
                        dnp: 'Менеджер по продажам',
                        nkn: 'Нико Какабадзе',
                        nkp: 'Менеджер по продажам',
                        mgn: 'Мария Габелия',
                        mgp: 'SMM-менеджер',
                        vkn: 'Вахтанг Какаладзе',
                        vkp: 'Инженер',
                    },
                    contacts: {
                        title: 'Контакты',
                        subtitle: 'Мы готовы ответить на все ваши вопросы.',
                    },
                    articleHeader: {
                        title: 'Полезная информация'
                    },
                    articleRelated: {
                      subtitle: 'Похожие статьи'
                    },
                    youtube: {
                        title: 'Наши проекты',
                        subtitle: 'Мы рады, что можем делиться с вами рабочим процессом',
                        text: 'YouTube-канал'
                    },
                    projects: {
                        bgrdd: 'Декабрь 2024',
                        gidd: 'Декабрь 2022',
                        po: 'рассрочка, ипотека',
                        terrace: 'Терраса',
                        a: 'Адрес:',
                        p: "Телефон:",
                        potext: 'Варианты оплаты:',
                        co: 'Дата сдачи:',
                        dp: 'Первоначальный взнос:',
                        pd: 'Информация о проекте',
                        progress: 'Прогресс:',
                        lva01: 'СПА-центр, бассейн, сауна',
                        lva02: 'Фитнес-площадка',
                        lva03: 'Крытый паркинг ',
                        lva04: 'Сад с лимонами',
                        lva05: 'Круглосуточное обслуживание квартир',
                        lva06: 'Проживание круглый год без дополнительных соглашений',
                        lva07: 'Дом полностью газифицирован',
                        lva08: 'Окна Rehau 70',
                        lva09: 'Вентилируемый фундамент, влагостойкий и огнестойкий фасад',
                        lva10: 'Высокая сейсмостойкость',
                        playground: 'Детская площадка',
                        abi: 'Инфраструктура',
                        as: 'Услуги',
                        ac: 'Характеристики',
                        gi01: 'Бассейн с подогревом',
                        gi02: 'Персональные зоны барбекю на террасах в каждом доме',
                        gi03: 'Уход за общей территорией',
                        gi04: 'Возможность сдать свой таунхаус с управляющей компанией',
                        gipit: 'Выберите дом своей мечты',
                        floor: 'Этаж',
                        download: 'Скачать',
                        lvpit: 'Выберите виллу своей мечты',
                        type: 'Тип',
                        bgrpit: 'Выберите апартаменты своей мечты',
                        bgrpia: 'Апартаменты',
                        bgrpic: 'Коттедж',
                        sold: 'Продано',
                        reserved: 'Зарезервировано',
                        lgit: 'Выберите квартиру своей мечты',
}
                },
                awards: {
                  title: 'Наши награды',
                    lgt: 'Lemon Garden Residence & SPA',
                    lgb: 'Лучший инвестиционный проект',
                    bt: 'Royal Residence Botanico',
                    bd: 'Лучший инвестиционный и жилой комплекс'
                },
            }
        }
    });

export default i18n;