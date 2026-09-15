/* EMS Academy: restore v45 application and apply only the approved HAD rename. */
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
    if(window.tests && tests.charter){
      tests.charter.title='Переаттестация';
      tests.charter.short='Переаттестация HAD';
      tests.charter.description='Проверка сотрудников HAD по внутренним требованиям EMS и действующему порядку работы.';
    }
    const hadCard=document.querySelector('.test-choice[data-test="charter"]');
    if(hadCard){
      hadCard.classList.add('had-choice');
      const title=hadCard.querySelector('h3'); if(title) title.textContent='Переаттестация';
      const desc=hadCard.querySelector('p'); if(desc) desc.textContent='Проверка сотрудников HAD по внутренним требованиям EMS и действующему порядку работы.';
      const meta=hadCard.querySelector('.choice-meta'); if(meta) meta.innerHTML='<span>12 вопросов</span><span>15:00</span><span>80%</span>';
    }
    const style=document.createElement('style');
    style.textContent=`.test-choice.had-choice{border-color:rgba(239,68,68,.22);background:linear-gradient(145deg,rgba(239,68,68,.10),rgba(255,255,255,.025));}.test-choice.had-choice .choice-code{color:#ef4444}.test-choice.had-choice .choice-status{color:#fca5a5}.test-choice.had-choice .choice-arrow{color:#ff7b7b}.test-choice.had-choice:hover{border-color:rgba(239,68,68,.45);background:rgba(239,68,68,.12)}.test-choice.had-choice.selected{border-color:#ef4444;background:rgba(239,68,68,.14);box-shadow:0 0 28px rgba(239,68,68,.12)}`;
    document.head.appendChild(style);
    if(typeof renderTestChooser==='function') renderTestChooser();
  }catch(err){console.error('EMS Academy load error:',err)}
})();
