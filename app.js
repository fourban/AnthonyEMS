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
charter:{id:'charter',code:'HAD',accent:'red',title:'Экзамен по Уставу EMS',short:'Устав Emergency Medical Service',description:'Проверь знание действующего Устава EMS: обязанности, рабочий график, квалификации и основные запреты.',questions:[
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

let activeTestId='psid';
let themeSelected=false;
let questions=tests.psid.questions;

let current=0,answers=questions.map(q=>q.type==="multi"?[]:q.type==="selects"?{}:null),seconds=900,timerId=null,candidate="",staticId="";
const $=id=>document.getElementById(id);
function showScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
 document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.screen===((id!=="home"&&id!=="test"&&id!=="result")?"info":id)));
 if(["info","internship","qualificationMenu","qualificationGuide","lecture","duty","pmp","codeine","screens","getid","bodycam"].includes(id)) applyInfoTheme();
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
function applyTestTheme(){const active=themeSelected?tests[activeTestId]:null;document.body.classList.toggle("psid-mode",themeSelected && active.accent==="purple");document.body.classList.toggle("di-mode",themeSelected && active.accent==="green");document.body.classList.toggle("had-mode",themeSelected && active.accent==="red");$("heroEyebrow").textContent=active?active.code+" • QUALIFICATION CENTER":"EMS • QUALIFICATION CENTER";$("heroDescription").textContent=active?active.description:"Система квалификационного тестирования EMS.";$("panelLogo").textContent=active?active.code:"EMS";$("panelCircle").textContent=active?active.code:"EMS";$("candidateAvatar").textContent=active?active.code:"EMS";}
function chooseTest(id){activeTestId=id;themeSelected=true;questions=tests[id].questions;current=0;resetAnswers();applyTestTheme();renderTestChooser()}
function renderTestChooser(){document.querySelectorAll(".test-choice").forEach(card=>card.classList.toggle("selected",card.dataset.test===activeTestId));const active=tests[activeTestId];document.querySelector(".start-bottom").innerHTML=themeSelected?`Начать «${active.title}» <span>→</span>`:`Начать тестирование <span>→</span>`;}
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
$("startBtn").onclick=()=>{if(candidate){chooseTest(activeTestId);showScreen("test");startTimer();renderQuestion()}else $("nameModal").classList.add("show")};
$("prevBtn").onclick=()=>{if(current>0){current--;renderQuestion()}};
$("nextBtn").onclick=()=>{if(!answered(questions[current],answers[current])){alert(questions[current].type==="multi"?"Выбери хотя бы один вариант ответа.":"Заполни ответ перед продолжением.");return}if(current<questions.length-1){current++;renderQuestion()}else finishTest()};
$("restartBtn").onclick=()=>{themeSelected=false;applyTestTheme();showScreen("home");renderTestChooser()};
document.querySelectorAll(".nav-item").forEach(n=>n.onclick=()=>{if(n.dataset.screen==="test"){if(candidate){renderQuestion();showScreen("test")}else $("nameModal").classList.add("show")}else showScreen(n.dataset.screen)});


document.querySelectorAll(".test-choice").forEach(card=>card.onclick=()=>{chooseTest(card.dataset.test);renderTestChooser()});
applyTestTheme();
renderTestChooser();
$("startIntroBtn")?.addEventListener("click",()=>{chooseTest("di");$("nameModal").classList.add("show")});

$("openInternshipBtn").onclick=()=>showScreen("internship");
$("openQualificationsBtn")?.addEventListener("click",()=>showScreen("qualificationMenu"));
$("openCharterBtn")?.addEventListener("click",()=>window.open("https://forum.majestic-rp.ru/threads/ustav-emergency-medical-service.3617851/","_blank","noopener,noreferrer"));
$("startCharterBtn")?.addEventListener("click",()=>{chooseTest("charter");$("nameModal").classList.add("show")});
$("startCharterBtn2")?.addEventListener("click",(e)=>{e.stopPropagation();chooseTest("charter");$("nameModal").classList.add("show")});
document.querySelectorAll(".internship-guide-card[data-open]").forEach(card=>card.addEventListener("click",()=>showScreen(card.dataset.open)));
document.querySelectorAll(".backToInternship").forEach(b=>b.onclick=()=>showScreen("internship"));
$("backFromInternship")?.addEventListener("click",()=>showScreen("info"));
$("backFromQualifications")?.addEventListener("click",()=>showScreen("qualificationMenu"));
$("backFromQualificationMenu")?.addEventListener("click",()=>showScreen("info"));
document.querySelectorAll(".qualification-guide-grid .internship-guide-card[data-open]").forEach(card=>card.addEventListener("click",()=>showScreen(card.dataset.open)));
$("backToInfo")?.addEventListener("click",()=>showScreen("internship"));

$("backToInfoDuty")?.addEventListener("click",()=>showScreen("internship"));
