/* EMS Academy v50 loader: keep the published full app pinned, then apply the final selection behavior. */
(async()=>{
  const src='https://raw.githubusercontent.com/fourban/AnthonyEMS/77d0a6ee9147cc94c39cf720b663c75e4ff65636/app.js';
  try{
    const r=await fetch(src,{cache:'no-store'});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const code=await r.text();
    const tag=document.createElement('script');
    tag.textContent=code;
    document.body.appendChild(tag);
    await new Promise(resolve=>setTimeout(resolve,0));

    // v50: nothing is selected on first load or after returning to the chooser.
    activeTestId=null;
    themeSelected=false;
    questions=[];
    answers=[];
    applyTestTheme();
    renderTestChooser();

    const startBtn=$("startBtn");
    if(startBtn){
      startBtn.onclick=()=>{
        if(!themeSelected || !activeTestId){
          alert('Сначала выберите тест.');
          return;
        }
        if(candidate){
          chooseTest(activeTestId);
          showScreen('test');
          startTimer();
          renderQuestion();
        }else{
          $("nameModal").classList.add('show');
        }
      };
    }

    const restartBtn=$("restartBtn");
    if(restartBtn){
      restartBtn.onclick=()=>{
        activeTestId=null;
        themeSelected=false;
        questions=[];
        answers=[];
        applyTestTheme();
        showScreen('home');
        renderTestChooser();
      };
    }

    // v50: author credit.
    if(!document.getElementById('academyAuthor')){
      const footer=document.createElement('div');
      footer.id='academyAuthor';
      footer.textContent='Anthony Raiden / 133604 / DS:fourban';
      footer.style.cssText='position:fixed;left:18px;bottom:14px;z-index:20;font:600 10px/1.4 Inter,system-ui,sans-serif;letter-spacing:.05em;color:rgba(210,205,214,.62);padding:7px 10px;border:1px solid rgba(255,255,255,.06);border-radius:9px;background:rgba(8,8,11,.64);backdrop-filter:blur(10px);pointer-events:none;';
      document.body.appendChild(footer);
    }
  }catch(err){console.error('EMS Academy v50 load error:',err)}
})();