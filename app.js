const tests={
psid:{id:'psid',code:'PSID',accent:'purple',title:'Тест на квалификацию мед. справок и вакцинации',short:'Квалификация отдела PSID',description:'Проверь знания по медицинским справкам, вакцинации и внутренним регламентам подразделения.',questions:[
{q:'Причины для отказа в выдаче справки о психологическом здоровье',type:'multi',a:['Употребление наркотических веществ','На листочках видит что-то радикальное (кровь, убийство, оружие)','Злоупотребление алкоголем во время работы','Не занимается спортом','Спит меньше 7 часов','Наличие мыслей о суициде','Причин для выдачи нет'],c:[0,1,2,5]},
{q:'Название лекарственных препаратов для выдачи',type:'multi',a:['Активированный уголь','Азитромицин','Кодеиновые таблетки','Нурофен','Эпинефрин','Аспирин'],c:[0,1]},
{q:'Кто имеет преимущество при выдаче мед. справок',type:'single',a:['Отдел РМ','Отдел DI','Отдел НАЗ','Отдел PSID','Руководящий и старший состав','Преимуществ нет'],c:3},
{q:'Причины для отказа в выдаче справки о физическом здоровье',type:'single',a:['Человек не снял обувь','Человек не видит буквы','Человек неправильно лег на кушетку','Причин для невыдачи нет'],c:3},
{q:'Срок действия справки для гос. сотрудников',type:'single',a:['14 дней','Выдается один раз навсегда','30 дней','7 дней','21 день'],c:0},
{q:'Укажите верную стоимость вакцинации для каждой категории пациентов',type:'selects',fields:[{label:'Гос. служащий',options:['5000','2000','Бесплатно','2500'],correct:'Бесплатно'},{label:'Гражданский',options:['5000','2000','Бесплатно','2500'],correct:'5000'}]},
{q:'Общая стоимость мед. справок',type:'single',a:['6000 (физ-2500 / псих-3500)','10000 (физ-5000 / псих-5000)','7500 (физ-2500 / псих-5000)','5000 (физ-2500 / псих-2500)'],c:2},
{q:'Через сколько дней функционально можно обновить мед. справки?',type:'single',a:['7 дней','3 дня','5 дней','4 дня'],c:0},
{q:'Нормы взятия препаратов со склада',type:'selects',fields:[{label:'Азитромицин',options:['24','15','12','48'],correct:'24'},{label:'Активированный уголь',options:['24','15','12','48'],correct:'24'}]},
{q:'Где находятся кабинеты выдачи мед. справок в ELSH?',type:'image',a:[{src:'assets/corridor_vaccination_right.png',label:'Кабинеты справа'},{src:'assets/corridor_certificates_left.png',label:'Кабинеты слева'}],c:1},
{q:'Где находятся кабинеты вакцинации в ELSH?',type:'image',a:[{src:'assets/corridor_vaccination_right.png',label:'Кабинеты справа'},{src:'assets/corridor_certificates_left.png',label:'Кабинеты слева'}],c:0},
{q:'Продолжительность дневной смены в EMS',type:'single',a:['Будние 09:00-22:00 / Выходные 11:00-22:00','Будние 10:00-22:00 / Выходные 11:00-22:00','Будние 11:00-21:00 / Выходные 12:00-21:00','Будние 10:00-22:00 / Выходные 12:00-22:00'],c:2}]},
di:{id:'di',code:'DI',accent:'green',title:'Тест по вводной лекции',short:'Квалификация отдела DI',description:'Проверь базовые знания, правила интернатуры, препараты и квалификации EMS.',questions:[
{q:'Где выдают таблетки интерны (2 ранг)?',type:'single',a:['В коридоре.','Со всеми врачами вместе.','У регистрационной стойки','В холле пригородных больниц.'],c:3},
{q:'Сколько даётся времени на прохождение интернатуры?',type:'single',a:['120 часов.','72 часа.','96 часов.','48 часов.'],c:0},
{q:'Какие преимущества на втором ранге?',type:'multi',a:['Доступ к складу.','Доступ к кодеиновым таблеткам.','Выезды на АСМП.','Выдача вакцин.','Выдача мед.справок'],c:[0,1]},
{q:'На каком ранге у вас появляется возможность запросить дефибриллятор',type:'single',a:['2','4','3','1'],c:2},
{q:'Составьте соответствие мед.препаратов с болезнями.',type:'selects',fields:[{label:'Азитромицин',options:['Панкреатит','Отравление','ГРИПП','Гастрит','Менингит'],correct:'ГРИПП'},{label:'Активированный уголь',options:['Панкреатит','Отравление','ГРИПП','Гастрит','Менингит'],correct:'Отравление'}]},
{q:'Какие квалификации есть в ЕМС?',type:'multi',a:['Психолог.','Хирург.','Спасательно-поисковых работ (SAR).','Выдача медицинских карт и вакцинация населения.','SES.','Ветеринар.','Стоматолог.','Уролог.','Пожарный.'],c:[0,1,2,3,4,5]},
{q:'Разрешено ли использовать эпинефрин без дефибриллятора ?',type:'single',a:['Да.','Нет.','Да если не выдал старший состав.'],c:1}]},
di_ustav:{id:'di_ustav',code:'DI',accent:'green',title:'Экзамен по Уставу EMS',short:'Экзамен по Уставу EMS',description:'Проверь знание Устава EMS: обязанности, рабочие ситуации, дисциплина и основные правила работы.',questions:[
{q:'Ситуация: На месте вызова идет перестрелка, каковы ваши действия?',type:'single',a:['Уехать с места перестрелки.','Переждать перестрелку и потом оказать ПМП.','Оказать ПМП.'],c:0},
{q:'Разрешено ли сотруднику иметь несколько дополнительных квалификаций?',type:'single',a:['Да.','Нет.','Только с разрешения старшего состава.'],c:0},
{q:'Какую норму нужно отработать за рабочий день?',type:'single',a:['1 час.','4 часа.','2 часа.','3 часа.','5 часов.'],c:1},
{q:'Ситуация: Вы приехали на вызов, там лежат пострадавшие и стоит человек с оружием и молчит, какие ваши дальнейшие действия?',type:'single',a:['Если нет угрозы - окажу ПМП.','Оба варианта правильны.','Уеду и сообщу в рацию об угрозе жизни.'],c:0},
{q:'Какое максимальное количество препаратов можно брать/иметь при себе?',type:'multi',a:['Активированный уголь: 2','Азитромицин: 2','Кодеиновые таблетки: 5','Эпинефрин: 3'],c:[0,1,2,3]},
{q:'Где разрешено хранить мед. препараты?',type:'multi',a:['Инвентарь.','Рюкзак.','Багажник личного транспорта.','Склад в доме.'],c:[0,1]},
{q:'В течение какого времени сотрудник получивший выговор должен его отработать?',type:'single',a:['Можно не отрабатывать, если договорился.','48 часов.','24 часа.','12 часов.'],c:1},
{q:'Сколько дается времени, чтобы начать смену после появления в штате?',type:'single',a:['20 минут.','15 минут.','10 минут.','30 минут.'],c:2},
{q:'Кому вы обязаны предоставить удостоверение по первому требованию?',type:'single',a:['Только гос. сотрудникам.','Никому.','Всем гражданам.'],c:1},
{q:'Ситуация: Вы приехали на вызов, там лежит три человека гос. служащий, обычный гражданин и человек из крайм. организации, кому вы окажете ПМП в первую очередь?',type:'single',a:['Человеку из крайм.организации.','Обычному гражданину.','Гос. служащему.'],c:2},
{q:'Ситуация: На вызове пациент оскорбляет вас и отказывается от лечения, что вы сделаете?',type:'single',a:['Отойду на безопасное расстояние и уеду / откажу в медицинской помощи (согласно регламенту поведения с неадекватными пациентами).'],c:0},
{q:'Разрешено ли сотруднику носить неуставную обувь или аксессуары?',type:'single',a:['Да, если никто не видит.','Нет, форма должна строго соответствовать уставу.'],c:1},
{q:'Что запрещено делать во время рабочего дня (в форме)?',type:'single',a:['Работать.','Заниматься личными делами в форме вне больницы / нарушать дресс-код.'],c:1},
{q:'Какова субординация в EMS?',type:'single',a:['Сотрудник обязан подчиняться старшему составу и руководству.'],c:0},
{q:'Разрешено ли использовать рабочий транспорт в личных целях?',type:'single',a:['Да.','Нет.'],c:1},
{q:'С какого ранга разрешено проводить реанимацию?',type:'single',a:['Согласно квалификации и уставу (Интерн / С определенного ранга).'],c:0},
{q:'Куда подается отчет о проделанной работе за день (повышение/норма)?',type:'single',a:['В специальный канал спец. связи (Discord).'],c:0},
{q:'Разрешено ли брать взятки сотрудникам EMS?',type:'single',a:['Да.','Строго запрещено.'],c:1},
{q:'Что обязан сделать сотрудник перед началом оказания медицинской помощи?',type:'single',a:['Представиться и спросить разрешение/уведомить о начале процедур.'],c:0},
{q:'Можно ли использовать личный транспорт для вызовов (без специального разрешения/лицензии отдела)?',type:'single',a:['Нет, только служебный транспорт (АСМП).'],c:0},
{q:'Разрешено ли находиться в казино/развлекательных заведениях в рабочее время в форме?',type:'single',a:['Да.','Нет, строго запрещено.'],c:1},
{q:'Как часто можно брать отпуск в штате?',type:'single',a:['Раз в 30 дней - максимум на 7 дней.','Раз в 14 дней - максимум на 4 дня.','Что такое отпуск?','Раз в 5 дней - максимум на 1 день.','Раз в 7 дней - максимум на 2 дня.'],c:0},
{q:'Когда сотруднику EMS можно покидать рабочую смену?',type:'single',a:['По собственному желанию.','Отработана смена, обед или конец рабочей смены.','Когда отработает смену.','Когда начался обед.'],c:1},
{q:'Кому сотрудники EMS должны оказывать медицинскую помощь без очереди?',type:'single',a:['Гос. структурам.','Всем гражданам.','Крайм. организациям.'],c:0},
{q:'Разрешено ли сотруднику иметь при себе оружие?',type:'single',a:['Да.','Нет.'],c:1},
{q:'Разрешено ли выезжать на вызов, на АСМП втроём и более сотрудников?',type:'single',a:['Да.','Только для обучения интернов.','Нет.'],c:1}
]},
di_pmp:{id:'di_pmp',code:'DI',accent:'green',title:'Тест по ПМП',short:'Тест по ПМП',description:'Проверка знаний по выездам на оказание первой медицинской помощи и действиям сотрудника EMS на вызове.',questions:[
{q:'Вы приезжаете на вызов, но там идет перестрелка. Как вы поступите?',type:'single',a:['Достану оружие и буду участвовать','Пойду поднимать человека','Уеду и возьму другой вызов'],c:2},
{q:'Вы приехали на вызов, и перед вами лежат 2 человека. Один из них является гос.сотрудником с боди-камерой и жетоном, другой гражданский. Кого вы первого будете поднимать?',type:'single',a:['Гражданское лицо','Гос.сотрудника с боди-камерой и жетоном','В свободном порядке'],c:1},
{q:'Допускается ли использование служебного транспорта во время дежурства на АСМП для перевозки посторонних лиц?',type:'single',a:['Да, если человеку нужно оказать помощь в ELSH','Да','Нет'],c:0},
{q:'По приезде на вызов ПМП, вы видите пострадавшего, рядом с ним танцует гражданин без оружия. Ваши действия?',type:'single',a:['Уеду и возьму другой вызов','Окажу реанимацию пострадавшему','Присоединюсь и будем танцевать вместе'],c:1},
{q:'Можно ли выезжать на дежурство ПМП на своей личной красной машине?',type:'single',a:['Нет, только на фракционных машинах или на личной SAMS машине','Да, она ведь красная','Только с разрешения старшего состава'],c:0},
{q:'Разрешено ли после угрозы жизни оружием отъехать на безопасное расстояние, выждать время и затем вернуться, чтобы реанимировать пострадавшего?',type:'single',a:['Можно, если они не увидят','Можно, спустя определенное время','Нельзя'],c:2},
{q:'Можно ли оказывать ПМП без использования дефибриллятора?',type:'single',a:['Нет','Да'],c:0},
{q:'Разрешено ли выдавать таблетки и проводить вакцинацию на месте оказания ПМП?',type:'single',a:['Если нужно выполнить БП','Да','Нет','Только в экстренном случае'],c:2},
{q:'Вам пришел вызов из острова Кайо-Перико. Ваши действия?',type:'single',a:['Поплыву на лодке чтоб никто меня не увидел','Возьму вертолет и полечу на вызов','Остров Кайо-Перико - объект особой важности, отклоню вызов'],c:2},
{q:'Вы приехали поднимать человека, но вдруг на вас наставили оружие и сказали уезжать. Ваши действия?',type:'single',a:['Буду дальше оказывать ПМП','Возьму оружие и начну стрелять по человеку','Уеду и возьму другой вызов'],c:2}
]},
di_rp:{id:'di_rp',code:'DI',accent:'green',title:'Тест по РП',short:'Тест по РП',description:'Проверка знаний основных RP-терминов и правил использования команд /me, /do и /try.',questions:[
{q:'Как отыгрывается /me?',type:'single',a:['С большой буквы, без знаков препинания на конце.','С маленькой буквы, со знаком препинания на конце.','С большой буквы, со знаком препинания на конце.','С маленькой буквы, без знаков препинания на конце.'],c:3},
{q:'Выберите верный вариант отыгровки.',type:'single',a:['/do Владимир от удара Аарона упал на землю и потерял сознание.','/do Брови Джонатана нахмурились.','/do Присев на стул, откинулась на спинку, при этом закрыла глаза.'],c:1},
{q:'Что такое OOC информация?',type:'single',a:['Информация связанная с игровым миром.','Информация в обоих случаях.','Информация не связанная с игровым миром.'],c:2},
{q:'Что такое IC информация?',type:'single',a:['Информация связанная с игровым миром.','Информация не связанная с игровым миром.','Информация в обоих случаях.'],c:0},
{q:'Что такое ДМ?',type:'single',a:['Убийство/нанесение урона без причины.','Нанесение увечий машиной.','Нанесение урона своему товарищу.'],c:0},
{q:'Для чего предназначена отыгровка /try?',type:'single',a:['Команда предназначена исключительно для отыгровки тех действий, возможность которых сопровождается определенной вероятностью, например, подбрасывание костей, монетки и так далее.','Команда предназначена для обозначения прямой речи персонажа во время выполнения им какого-либо действия.','Команда предназначена для описания выполняемого вашим персонажем действия от 3-го лица, которое нельзя отобразить иными способами в силу отсутствия возможности этого в игре.'],c:0},
{q:'Для чего предназначена отыгровка /do?',type:'single',a:['Команда предназначена для обозначения прямой речи персонажа во время выполнения им какого-либо действия.','Команда предназначена для описания действий персонажа от третьего лица, а также для описания состояния объектов вокруг него.','Команда предназначена исключительно для отыгровки тех действий, возможность которых сопровождается определенной вероятностью, например, подбрасывание костей, монетки и так далее.'],c:1},
{q:'Выберите верный вариант отыгровки.',type:'single',a:['/me правой рукой снял рацию с поясного держателя и поднес ее ко рту','/me умер','/me моет пол [1/3..2/3]'],c:0},
{q:'Выберите верный вариант отыгровки.',type:'single',a:['/try собравшись с мыслями, ударил бутылкой об голову так, чтобы она разбилась','/try ударив человека по щеке, привел его в чувства','/try посмотрев на алкотестер, увидел, что водитель пьян'],c:1},
{q:'Для чего предназначена отыгровка /me?',type:'single',a:['Команда предназначена исключительно для отыгровки тех действий, возможность которых сопровождается определенной вероятностью, например, подбрасывание костей, монетки и так далее.','Команда предназначена для описания действия персонажа от первого лица. Она пишется с маленькой буквы и без точки в конце.','Команда предназначена для обозначения прямой речи персонажа во время выполнения им какого-либо действия.'],c:1},
{q:'Что такое РК?',type:'single',a:['РП убийство.','Не знаю.','Возвращение на место смерти с целью мести.'],c:2}
]},
charter:{id:'charter',code:'HAD',accent:'red',title:'Переаттестация',short:'Переаттестация HAD',description:'Проверка сотрудников HAD по внутренним требованиям EMS и действующему порядку работы.',questions:[
{q:'При оказании экстренной медицинской помощи Вы прибыли на место происшествия, где находятся несколько пострадавших с различными травмами. Один из пострадавших является сотрудником государственной структуры и находится в служебной форме. Кому необходимо оказать помощь в первую очередь?',type:'single',a:['Сотруднику государственной структуры','Приоритетов в оказании первой медицинской помощи нет','Ближайшему к вам пострадавшему','Пострадавшему, находящемуся в наиболее тяжёлом состоянии'],c:0},
{q:'Какие временные рамки имеются у сотрудников на перерыв для отдыха и питания?',type:'single',a:['Не менее 30 минут и не более 1 часа','Не более 2 часов при условии, что до начала перерыва сотрудник находился на рабочем месте не менее 2 часов','Не менее 2 часов и не более 3 часов при условии, что сотрудник находился до этого на рабочем месте не менее 2 часов','Не менее 1 часа и не более 2 часов без дополнительных условий'],c:1},
{q:'Подъезжая к месту оказания первой медицинской помощи, вы обнаружили на земле огнестрельное оружие, и рядом с местом оказания первой медицинской помощи вы видите вооружённых лиц, которые ведут перестрелку. Как вы поступите?',type:'single',a:['Покину данное место ввиду того, что там происходит перестрелка и оказать помощь я не смогу','Подойду вплотную к месту и начну оказывать первую медицинскую помощь пострадавшим','Подниму огнестрельное оружие и начну стрелять в вооружённых лиц, так как у меня имеется действующая лицензия на оружие'],c:0},
{q:'Сколько квалификаций имеется в EMS?',type:'single',a:['3 квалификации','4 квалификации','5 квалификаций','6 квалификаций'],c:3},
{q:'В течение какого времени сотрудник обязан пройти назначенную ему переаттестацию?',type:'single',a:['24 часа','48 часов','72 часа'],c:2},
{q:'Какие нормы взятия медикаментов и индивидуальных предметов установлены для сотрудника EMS?',type:'single',a:[
'Кодеиновые таблетки — 72 шт.; Эпинефрин — 25 шт.; Активированный уголь — 24 шт.; Азитромицин — 24 шт.; ИРП — 3 шт. раз в 2 часа',
'Кодеиновые таблетки — 48 шт.; Эпинефрин — 10 шт.; Активированный уголь — 24 шт.; Азитромицин — 24 шт.; ИРП — 3 шт. раз в 1 час',
'Кодеиновые таблетки — 72 шт.; Эпинефрин — 35 шт.; Активированный уголь — 14 шт.; Азитромицин — 14 шт.; ИРП — 1 шт. раз в 2 часа',
'Кодеиновые таблетки — 60 шт.; Эпинефрин — 15 шт.; Активированный уголь — 20 шт.; Азитромицин — 20 шт.; ИРП — 2 шт. раз в 3 часа'],c:0},
{q:'Какой рабочий график установлен в EMS?',type:'single',a:[
'Дневная смена: Пн–Пт 11:00–21:00, Сб–Вс 12:00–21:00. Ночная смена: Вс–Чт 21:00–11:00, Пт–Сб 21:00–12:00.',
'Дневная смена: Пн–Пт 09:00–21:00, Сб–Вс 10:00–22:00. Ночная смена: Вс–Чт 21:00–09:00, Пт–Сб 22:00–10:00.',
'Дневная смена: Пн–Пт 11:00–22:00, Сб–Вс 12:00–22:00. Ночная смена: Вс–Чт 22:00–11:00, Пт–Сб 22:00–12:00.',
'Дневная смена: Пн–Пт 10:00–21:00, Сб–Вс 11:00–21:00. Ночная смена: Вс–Чт 21:00–10:00, Пт–Сб 21:00–11:00.'],c:0},
{q:'Какова минимальная дневная смена для сотрудников EMS?',type:'single',a:['2 часа','5 часов','4 часа','Норма рабочего времени отсутствует'],c:2},
{q:'Разрешён ли выезд на личном транспортном средстве для оказания первой медицинской помощи?',type:'single',a:['Разрешено','Разрешено, если личное транспортное средство красного цвета','Запрещено'],c:2},
{q:'При повышении на какой порядковый ранг сотрудник обязан получить квалификацию «Выдача медицинских карт и вакцинация населения»?',type:'single',a:['3-й ранг','4-й ранг','5-й ранг','6-й ранг'],c:1},
{q:'Обязан ли сотрудник находиться в специальной связи EMS?',type:'single',a:['Нет, не обязан','Да, обязан'],c:1},
{q:'В течение какого времени сотрудник по прибытии в штат во время дневной рабочей смены обязан заступить на смену и составить отчёт о начале смены?',type:'single',a:['В течение 30 минут','В течение 15 минут','В течение 10 минут'],c:2}
]}}

let activeTestId=null;
let themeSelected=false;
let questions=tests.psid.questions;

let current=0,answers=questions.map(q=>q.type==="multi"?[]:q.type==="selects"?{}:null),seconds=900,timerId=null,candidate="",staticId="";
const $=id=>document.getElementById(id);
function showScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
 const navScreen = id==="binders" ? "binders" : (["info","internship","qualificationMenu","qualificationGuide","lecture","duty","pmp","codeine","screens","getid","bodycam"].includes(id) ? "info" : id);
 document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.screen===navScreen));
 if(["info","internship","qualificationMenu","qualificationGuide","lecture","duty","pmp","codeine","screens","getid","bodycam","binders"].includes(id)) applyInfoTheme();
 else if(id==="home"||id==="test"||id==="result") applyTestTheme();
 window.scrollTo(0,0)
}
function renderQuestion(){
 const x=questions[current];
 const active=tests[activeTestId];
 applyTestTheme();
 $("testEyebrow").textContent=`QUALIFICATION TEST • ${active.code}`;
 $("progressStandard").textContent=`${active.code} STANDARD`;
 $("questionTitle").textContent=`Вопрос ${current+1}`;$("questionNumber").textContent=String(current+1).padStart(2,"0");$("questionText").textContent=x.q;
 $("progressText").firstChild.textContent=`${current+1} / ${questions.length}`;$("progressBar").style.width=`${((current+1)/questions.length)*100}%`;
 const val=answers[current];
 if(x.type==="image"){
   $("answers").className="answers image-answers";
   $("answers").innerHTML=x.a.map((v,i)=>`<button class="answer image-answer ${val===i?"selected":""}" data-i="${i}"><span class="image-label">${v.label}</span><img src="${v.src}" alt="${v.label}"></button>`).join("");
 }else if(x.type==="multi"){
   $("answers").className="answers";
   $("answers").innerHTML=x.a.map((v,i)=>`<button class="answer ${val.includes(i)?"selected":""}" data-i="${i}"><span class="check-box">${val.includes(i)?"✓":""}</span>${v}</button>`).join("");
 }else if(x.type==="selects"){
   $("answers").className="answers select-answers";
   $("answers").innerHTML=x.fields.map((f,i)=>`<label class="select-row"><span>${f.label}</span><select data-field="${i}"><option value="">Выберите значение</option>${f.options.map(o=>`<option ${val[i]===o?"selected":""}>${o}</option>`).join("")}</select></label>`).join("");
   document.querySelectorAll(".select-row select").forEach(s=>s.onchange=()=>{answers[current][s.dataset.field]=s.value;renderQuestion()});
 }else{
   $("answers").className="answers";
   $("answers").innerHTML=x.a.map((v,i)=>`<button class="answer ${val===i?"selected":""}" data-i="${i}">${String.fromCharCode(65+i)}. ${v}</button>`).join("");
 }
 document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(x.type==="multi"){const arr=answers[current];answers[current]=arr.includes(i)?arr.filter(n=>n!==i):[...arr,i].sort((a,b)=>a-b)}else answers[current]=i;renderQuestion()});
 $("prevBtn").disabled=current===0;$("prevBtn").style.opacity=current===0?".45":"1";$("nextBtn").textContent=current===questions.length-1?"Завершить тест →":"Следующий →";
}
function answered(x,v){if(x.type==="multi")return v.length>0;if(x.type==="selects")return x.fields.every((_,i)=>v[i]);return v!==null}
function isCorrect(x,v){if(x.type==="multi")return Array.isArray(v)&&v.length===x.c.length&&v.every((n,i)=>n===x.c[i]);if(x.type==="selects")return x.fields.every((f,i)=>v[i]===f.correct);return v===x.c}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function startTimer(){clearInterval(timerId);seconds=900;$("timer").textContent=formatTime(seconds);timerId=setInterval(()=>{seconds--;$("timer").textContent=formatTime(seconds);if(seconds<=0){clearInterval(timerId);finishTest()}},1000)}
function finishTest(){
 clearInterval(timerId);
 const active=tests[activeTestId];
 let correct=questions.reduce((n,x,i)=>n+(isCorrect(x,answers[i])?1:0),0);
 let pct=Math.round(correct/questions.length*100);
 $("score").textContent=pct+"%";
 $("resultStatus").textContent=pct>=80?"PASSED":"FAIL";
 $("resultStatus").style.color=pct>=80?(activeTestId==="di"?"#4ade80":activeTestId==="charter"?"#ef4444":"#c084fc"):"#ff719f";
 $("resultEyebrow").textContent=`TEST COMPLETE • ${active.code}`;
 $("resultTitle").textContent=pct>=80?"Квалификация пройдена":"Квалификация не пройдена";
 $("resultText").textContent=pct>=80?"Отличный результат. Данные тестирования можно передать руководству подразделения. Не закрывайте страницу до тех пор, пока экзаменатор не скажет, что можно завершить проверку.":"Результата пока недостаточно для квалификации. Повтори попытку и закрепи теорию. Не закрывайте страницу до тех пор, пока экзаменатор не скажет, что можно завершить проверку.";
 $("resultName").textContent=candidate||"—";
 $("resultStaticId").textContent=staticId||"—";
 $("resultCorrect").textContent=`${correct} / ${questions.length}`;
 renderCandidateAnswers();
 showScreen("result");
}
function renderCandidateAnswers(){
 const box=$("candidateAnswers");
 box.innerHTML=questions.map((x,i)=>{
   const v=answers[i];
   let content="";
   if(x.type==="multi"){
     const selected=(v||[]).map(n=>x.a[n]).filter(Boolean);
     content=selected.length ? selected.map(t=>`<div class="candidate-choice"><span>✓</span>${escapeHtml(t)}</div>`).join("") : `<div class="candidate-empty">Ответ не выбран</div>`;
   }else if(x.type==="selects"){
     content=x.fields.map((f,fi)=>`<div class="candidate-choice"><span>${escapeHtml(f.label)}</span><strong>${escapeHtml(v[fi]||"Не выбрано")}</strong></div>`).join("");
   }else if(x.type==="image"){
     const chosen=x.a[v];
     content=chosen ? `<div class="candidate-image-choice"><span>${escapeHtml(chosen.label)}</span><img src="${chosen.src}" alt="Выбранный вариант"></div>` : `<div class="candidate-empty">Изображение не выбрано</div>`;
   }else{
     content=v!==null && x.a[v] ? `<div class="candidate-choice"><span>✓</span>${escapeHtml(x.a[v])}</div>` : `<div class="candidate-empty">Ответ не выбран</div>`;
   }
   return `<article class="candidate-question"><div class="candidate-question-head"><span class="candidate-q-number">${String(i+1).padStart(2,"0")}</span><h3>${escapeHtml(x.q)}</h3></div><div class="candidate-selected"><div class="candidate-selected-label">Выбор кандидата</div>${content}</div></article>`;
 }).join("");
}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));}
function resetAnswers(){answers=questions.map(q=>q.type==="multi"?[]:q.type==="selects"?{}:null)}
function applyInfoTheme(){document.body.classList.remove("psid-mode","di-mode");$("heroEyebrow").textContent="EMS • QUALIFICATION CENTER";$("heroDescription").textContent="Система квалификационного тестирования EMS.";$("panelLogo").textContent="EMS";$("panelCircle").textContent="EMS";$("candidateAvatar").textContent="EMS";}
function applyTestTheme(){const active=themeSelected?tests[activeTestId]:null;document.body.classList.toggle("psid-mode",themeSelected && active.accent==="purple");document.body.classList.toggle("di-mode",themeSelected && active.accent==="green");document.body.classList.toggle("had-mode",themeSelected && active.accent==="red");$("heroEyebrow").textContent=active?active.code+" • QUALIFICATION CENTER":"EMS • QUALIFICATION CENTER";$("heroDescription").textContent=active?active.description:"Система квалификационного тестирования EMS.";$("panelLogo").textContent=active?active.code:"EMS";$("panelCircle").textContent=active?active.code:"READY";$("candidateAvatar").textContent=active?active.code:"EMS";}
function chooseTest(id){activeTestId=id;themeSelected=true;questions=tests[id].questions;current=0;resetAnswers();applyTestTheme();renderTestChooser()}
function renderTestChooser(){document.querySelectorAll(".test-choice").forEach(card=>card.classList.toggle("selected",themeSelected && card.dataset.test===activeTestId));}
function begin(){
 const name=$("nameInput").value.trim();
 const id=$("staticIdInput").value.trim();
 if(!name){alert("Укажите игровое имя и фамилию.");$("nameInput").focus();return}
 if(!id){alert("Укажите Static ID.");$("staticIdInput").focus();return}
 candidate=name;staticId=id;
 $("candidateLabel").textContent=candidate;
 $("staticIdLabel").textContent=`ID: ${staticId}`;
 $("nameModal").classList.remove("show");
 current=0;resetAnswers();
 chooseTest(activeTestId);
 showScreen("test");
 startTimer();
 renderQuestion();
}
$("confirmName").onclick=begin;$("nameInput").addEventListener("keydown",e=>{if(e.key==="Enter")begin()});$("staticIdInput").addEventListener("keydown",e=>{if(e.key==="Enter")begin()});
function startSelectedTest(){if(!themeSelected || !activeTestId){alert("Сначала выберите тест.");return}if(candidate){chooseTest(activeTestId);showScreen("test");startTimer();renderQuestion()}else $("nameModal").classList.add("show")}
$("prevBtn").onclick=()=>{if(current>0){current--;renderQuestion()}};
$("nextBtn").onclick=()=>{if(!answered(questions[current],answers[current])){alert(questions[current].type==="multi"?"Выбери хотя бы один вариант ответа.":"Заполни ответ перед продолжением.");return}if(current<questions.length-1){current++;renderQuestion()}else finishTest()};
$("restartBtn").onclick=()=>{themeSelected=false;activeTestId=null;applyTestTheme();showScreen("home");renderTestChooser()};

function selectBinderProgram(program){
 const names={a5i:"A5iBinder",binderbot:"BinderBot"};
 document.querySelectorAll("[data-binder-panel]").forEach(panel=>{panel.hidden=panel.dataset.binderPanel!==program});
 document.querySelectorAll(".binder-program-card").forEach(card=>card.classList.toggle("active",card.dataset.binderProgram===program));
 const title=$("binderProfilesTitle");
 if(title) title.textContent=program && names[program]?`Профили EMS ${names[program]}`:"Профили EMS";
 const section=document.querySelector(".binder-profiles-section");
 if(section) section.scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll(".binder-select-program").forEach(btn=>btn.addEventListener("click",e=>{
 e.stopPropagation();
 selectBinderProgram(btn.dataset.binderTarget);
}));
document.querySelectorAll(".binder-program-card").forEach(card=>card.addEventListener("click",e=>{
 if(e.target.closest(".binder-download-main, .binder-guide-link")) return;
 selectBinderProgram(card.dataset.binderProgram);
}));
document.querySelectorAll(".nav-item").forEach(n=>n.onclick=()=>{if(n.dataset.screen==="test"){if(candidate){renderQuestion();showScreen("test")}else $("nameModal").classList.add("show")}else showScreen(n.dataset.screen)});


document.querySelectorAll(".test-choice").forEach(card=>card.onclick=()=>{chooseTest(card.dataset.test);renderTestChooser()});
document.querySelectorAll(".choice-start").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();const card=btn.closest(".test-choice");if(!card)return;chooseTest(card.dataset.test);startSelectedTest()}));

themeSelected=false;activeTestId=null;applyTestTheme();
renderTestChooser();
$("startIntroBtn")?.addEventListener("click",()=>{chooseTest("di");$("nameModal").classList.add("show")});

$("openInternshipBtn")?.addEventListener("click",e=>{e.preventDefault();showScreen("internship")});
$("openQualificationsBtn")?.addEventListener("click",e=>{e.preventDefault();showScreen("qualificationMenu")});
$("openCharterBtn")?.addEventListener("click",()=>window.open("https://forum.majestic-rp.ru/threads/ustav-emergency-medical-service.3617851/","_blank","noopener,noreferrer"));
$("startCharterBtn")?.addEventListener("click",()=>{chooseTest("di_ustav");$("nameModal").classList.add("show")});
$("startCharterBtn2")?.addEventListener("click",(e)=>{e.stopPropagation();chooseTest("di_ustav");$("nameModal").classList.add("show")});
document.querySelectorAll(".internship-guide-card[data-open]").forEach(card=>card.addEventListener("click",()=>showScreen(card.dataset.open)));
document.querySelectorAll(".backToInternship").forEach(b=>b.onclick=()=>showScreen("internship"));
$("backFromInternship")?.addEventListener("click",()=>showScreen("info"));
$("backFromQualifications")?.addEventListener("click",()=>showScreen("qualificationMenu"));
$("backFromQualificationMenu")?.addEventListener("click",()=>showScreen("info"));
document.querySelectorAll(".qualification-guide-grid .internship-guide-card[data-open]").forEach(card=>card.addEventListener("click",()=>showScreen(card.dataset.open)));
$("backToInfo")?.addEventListener("click",()=>showScreen("internship"));

$("backToInfoDuty")?.addEventListener("click",()=>showScreen("internship"));


// v71 — закрытие окна регистрации кандидата
$("closeNameModal")?.addEventListener("click",()=>$("nameModal").classList.remove("show"));
$("nameModal")?.addEventListener("click",e=>{if(e.target===$("nameModal"))$("nameModal").classList.remove("show")});
document.addEventListener("keydown",e=>{if(e.key==="Escape" && $("nameModal")?.classList.contains("show"))$("nameModal").classList.remove("show")});
