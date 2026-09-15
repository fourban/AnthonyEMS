/* EMS Academy v47: restore clean v45 app, add separate DI Ustav exam, rename HAD to re-certification. */
(async()=>{
  const src='https://raw.githubusercontent.com/fourban/AnthonyEMS/baa83252d90350173fd0f32ae467dbe9c1bdd858/app.js';
  try{
    const r=await fetch(src,{cache:'no-store'});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const code=await r.text();
    const tag=document.createElement('script');
    tag.textContent=code;
    document.body.appendChild(tag);
    await new Promise(resolve=>setTimeout(resolve,0));

    tests.diUstav={id:'diUstav',code:'DI',accent:'green',title:'Экзамен по Уставу EMS',short:'Экзамен по Уставу EMS',description:'Проверка знаний Устава EMS: обязанности, рабочие ситуации, дисциплина и основные запреты.',questions:[
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
    ]};

    tests.charter.title='Переаттестация';
    tests.charter.short='Переаттестация HAD';
    tests.charter.description='Проверка сотрудников HAD по внутренним требованиям EMS и действующему порядку работы.';

    const hadCard=document.querySelector('.test-choice[data-test="charter"]');
    if(hadCard){
      hadCard.classList.add('had-choice');
      const title=hadCard.querySelector('h3'); if(title) title.textContent='Переаттестация';
      const desc=hadCard.querySelector('p'); if(desc) desc.textContent='Проверка сотрудников HAD по внутренним требованиям EMS и действующему порядку работы.';
      const meta=hadCard.querySelector('.choice-meta'); if(meta) meta.innerHTML='<span>12 вопросов</span><span>15:00</span><span>80%</span>';
    }

    const choices=document.querySelector('.test-choices');
    if(choices && !choices.querySelector('[data-test="diUstav"]')){
      const card=document.createElement('article');
      card.className='test-choice di-choice';
      card.dataset.test='diUstav';
      card.innerHTML='<div class="choice-top"><span class="choice-code">DI</span><span class="choice-status">ДОСТУПЕН</span></div><h3>Экзамен по Уставу EMS</h3><p>Проверка знаний Устава EMS: обязанности, рабочие ситуации, дисциплина и основные запреты.</p><div class="choice-meta"><span>26 вопросов</span><span>15:00</span><span>80%</span></div><div class="choice-arrow">Выбрать тест <b>→</b></div>';
      const charter=choices.querySelector('[data-test="charter"]');
      if(charter) choices.insertBefore(card,charter); else choices.appendChild(card);
      card.addEventListener('click',()=>{chooseTest('diUstav');renderTestChooser()});
    }

    function replaceExamButton(id){
      const old=$(id);
      if(!old) return;
      const fresh=old.cloneNode(true);
      old.replaceWith(fresh);
      fresh.addEventListener('click',e=>{e.stopPropagation();chooseTest('diUstav');$('nameModal').classList.add('show')});
    }
    replaceExamButton('startCharterBtn');
    replaceExamButton('startCharterBtn2');

    const originalFinishTest=finishTest;
    finishTest=function(){
      originalFinishTest();
      if(activeTestId==='diUstav') $('resultStatus').style.color='#4ade80';
    };

    const style=document.createElement('style');
    style.textContent='.test-choice.had-choice{border-color:rgba(239,68,68,.22);background:linear-gradient(145deg,rgba(239,68,68,.10),rgba(255,255,255,.025))}.test-choice.had-choice:before{background:#ef4444}.test-choice.had-choice:hover{border-color:rgba(239,68,68,.45);background:linear-gradient(145deg,rgba(239,68,68,.14),rgba(255,255,255,.025))}.test-choice.had-choice.selected{border-color:#ef4444;box-shadow:0 0 28px rgba(239,68,68,.12),inset 0 0 40px rgba(239,68,68,.025)}.test-choice.had-choice .choice-code{color:#ef4444}.test-choice.had-choice .choice-arrow b{color:#ef4444}';
    document.head.appendChild(style);

    if(typeof renderTestChooser==='function') renderTestChooser();
  }catch(err){console.error('EMS Academy v47 load error:',err)}
})();
