/* Finite motion and mobile navigation. No polling and no extra dependencies. */
(function () {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 950px)');
  const running = new Set(), previousProgress = new Map();
  let observer = null, activeVisual = null, visualOrigin = null, restoreFocus = null;
  const $ = selector => document.querySelector(selector);
  const allowed = () => !motionPreference.matches && !document.hidden;
  function animate(element, frames, options = {}) {
    if (!allowed() || !element?.animate) return;
    const animation = element.animate(frames, { duration: 450, easing: 'cubic-bezier(.2,.8,.2,1)', ...options });
    running.add(animation);
    animation.finished.then(() => running.delete(animation)).catch(() => running.delete(animation));
    return animation;
  }
  const backdrop = document.createElement('button');
  backdrop.type = 'button'; backdrop.className = 'e8-menu-backdrop'; backdrop.hidden = true;
  backdrop.setAttribute('aria-label', 'Zamknij menu'); backdrop.tabIndex = -1;
  document.body.append(backdrop);
  const bottom = document.createElement('nav');
  bottom.hidden = true;
  bottom.className = 'e8-mobile-nav'; bottom.setAttribute('aria-label', 'Szybka nawigacja');
  bottom.innerHTML = [['overview','Start','home'],['courses','Kursy','brain'],['diagnostic','Plan','target'],['review','Powtórki','refresh']].map(([route,label,icon]) => `<button type="button" data-mobile-route="${route}"><svg aria-hidden="true"><use href="#i-${icon}"/></svg><span>${label}</span></button>`).join('');
  document.body.append(bottom);
  const visualDialog = document.createElement('dialog');
  visualDialog.className = 'e8-visual-dialog'; visualDialog.setAttribute('aria-label', 'Powiększona wizualizacja');
  document.body.append(visualDialog);
  function setMenu(open, returnFocus = true) {
    const sidebar=$('#sidebar'),button=$('#menuButton'),main=$('#appMain');
    if (!sidebar || !button) return;
    sidebar.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    backdrop.hidden=!open; document.body.classList.toggle('e8-menu-open', open);
    if(main)main.inert=open; bottom.inert=open;
    if(open){restoreFocus=document.activeElement; sidebar.querySelector('button, a')?.focus({preventScroll:true});}
    else if(returnFocus) (restoreFocus?.isConnected?restoreFocus:button)?.focus({preventScroll:true});
  }
  function closeVisual() {
    if(!activeVisual)return;
    const panel=activeVisual,button=panel.querySelector('[data-visual-expand]');
    panel.classList.remove('is-expanded');
    button?.setAttribute('aria-pressed','false'); if(button)button.textContent='⛶ Powiększ';
    if(visualOrigin?.isConnected)visualOrigin.replaceWith(panel);else panel.remove();
    activeVisual=null;visualOrigin=null;document.body.classList.remove('e8-visual-open');
    if(visualDialog.open)visualDialog.close();button?.focus({preventScroll:true});
  }
  function toggleVisual(panel, button) {
    if(activeVisual===panel){closeVisual();return;}
    closeVisual();setMenu(false,false);
    visualOrigin=document.createComment('expanded visual origin'); panel.before(visualOrigin);
    activeVisual=panel; panel.classList.add('is-expanded');button.setAttribute('aria-pressed','true');button.textContent='× Zamknij';
    visualDialog.append(panel);document.body.classList.add('e8-visual-open');visualDialog.showModal();button.focus({preventScroll:true});
  }
  visualDialog.addEventListener('cancel', event=>{event.preventDefault();closeVisual();});
  visualDialog.addEventListener('close',closeVisual);
  visualDialog.addEventListener('click',event=>{if(event.target!==visualDialog)return;const box=visualDialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeVisual();});
  backdrop.addEventListener('click',()=>setMenu(false));
  bottom.addEventListener('click',event=>{const button=event.target.closest('[data-mobile-route]');if(button)window.E8Experience.navigate?.(button.dataset.mobileRoute);});
  document.addEventListener('keydown',event=>{
    if(!$('#sidebar')?.classList.contains('open'))return;
    if(event.key==='Escape'){event.preventDefault();setMenu(false);return;}
    if(event.key!=='Tab')return;
    const controls=[...$('#sidebar').querySelectorAll('button:not(:disabled),a[href]')].filter(el=>el.getClientRects().length);
    if(!controls.length)return;
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  },true);
  compact.addEventListener('change',()=>{setMenu(false,false);syncNavigation();});
  function syncNavigation() {
    const root=$('#appMain'),route=window.E8Experience.currentRoute||'overview';
    const focused=['learn','session','exam','openwork','selfwork'].includes(route)||Boolean(root?.querySelector('.diagnostic-question'));
    bottom.hidden=focused||route==='welcome'||!compact.matches;
    document.body.classList.toggle('e8-has-mobile-nav',!bottom.hidden);
    for(const button of bottom.querySelectorAll('button')){
      const selected=button.dataset.mobileRoute===route||(button.dataset.mobileRoute==='courses'&&['course','xpath','knowledge','xtheory'].includes(route));
      button.setAttribute('aria-current',selected?'page':'false');
    }
  }
  function sceneMotion(svg) {
    if(!allowed())return;
    let drawn=0;
    for(const shape of svg.querySelectorAll('path,line,polyline,polygon,circle,ellipse')){
      if(drawn>=10)break;
      if(shape.closest('defs,.task-grid,.task-axes,.graph-grid,.plot-grid'))continue;
      const style=getComputedStyle(shape);
      if(style.stroke==='none'||style.strokeWidth==='0px'||style.animationName!=='none'||/grid|axis|brace|arrow/.test(shape.getAttribute('class')||''))continue;
      let length;try{length=shape.getTotalLength();}catch{continue;}
      if(!Number.isFinite(length)||length<8)continue;
      animate(shape,[{strokeDasharray:`${length} ${length}`,strokeDashoffset:String(length),opacity:.25},{strokeDasharray:`${length} ${length}`,strokeDashoffset:'0',opacity:1}],{duration:1200,delay:drawn*75});drawn++;
    }
    const highlights=[...svg.querySelectorAll('.premium-grid-cell.on,.premium-fraction-part.filled,.task-bar,.visual-point')].slice(0,20);
    highlights.forEach((el,index)=>animate(el,[{opacity:.2},{opacity:1}],{duration:450,delay:index*40}));
  }
  function burst(target) {
    if(!allowed()||!target)return;
    const box=target.getBoundingClientRect(),burst=document.createElement('div');
    burst.className='e8-success-burst';burst.setAttribute('aria-hidden','true');burst.style.left=`${box.left+box.width/2}px`;burst.style.top=`${Math.max(20,Math.min(innerHeight-30,box.top+Math.min(box.height/2,45)))}px`;
    for(let i=0;i<10;i++){const dot=document.createElement('i');dot.style.setProperty('--x',`${Math.cos(i*Math.PI/5)*70}px`);dot.style.setProperty('--y',`${Math.sin(i*Math.PI/5)*45-20}px`);dot.style.setProperty('--turn',`${i*37}deg`);dot.style.setProperty('--burst-color',['#7756df','#25a786','#f08a54'][i%3]);burst.append(dot);}
    document.body.append(burst);setTimeout(()=>burst.remove(),800);
  }
  function refresh(root, route) {
    closeVisual();setMenu(false,false);for(const animation of running)if(!animation.effect?.target?.isConnected)animation.cancel();window.E8Experience.currentRoute=route;syncNavigation();
    observer?.disconnect();observer=null;
    if(!root||!allowed())return;
    const preserve=root.classList.contains('no-page-motion');
    if(!preserve){
      animate(root.querySelector('.page'),[{opacity:.3,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:360});
      [...root.querySelectorAll('.course-card,.path-choice,.task-card,.kb-course,.skill-map-card,.weekly-win')].slice(0,10).forEach((el,index)=>animate(el,[{opacity:.2,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:460,delay:Math.min(index*40,240)}));
    }
    [...root.querySelectorAll('.progress-fill,.weekly-progress-track i')].forEach((el,index)=>{
      const value=parseFloat(el.style.width)||0,key=`${route}:${index}`,old=previousProgress.get(key)??0;previousProgress.set(key,value);
      if(value>0&&old!==value)animate(el,[{transform:`scaleX(${Math.min(old/value,1)})`,transformOrigin:'left'},{transform:'scaleX(1)',transformOrigin:'left'}],{duration:700});
    });
    const feedback=root.querySelector('.feedback.correct,.feedback.deferred-feedback,.feedback.wrong,.open-work-feedback.correct,.open-work-feedback.wrong');
    if(preserve&&feedback)animate(feedback,[{opacity:.3,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:320});
    const svgs=[...root.querySelectorAll('svg.visual-scene,svg.premium-scene,svg.graph-svg,svg.polished-figure')].slice(0,24);
    if(!preserve&&'IntersectionObserver' in window){
      observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting&&entry.target.isConnected){sceneMotion(entry.target);observer?.unobserve(entry.target);}},{threshold:.2});
      svgs.forEach(svg=>observer.observe(svg));
    }
  }
  document.addEventListener('pointerdown',event=>{
    const button=event.target.closest('button');if(!button||button.disabled||!allowed())return;
    animate(button,[{transform:'scale(1)'},{transform:'scale(.97)'},{transform:'scale(1)'}],{duration:230});
  },{passive:true});
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-answer],[data-daily-answer],[data-open-answer],#nextStep,#submitSelfWork,#dailyNext');if(!button||!allowed())return;
    // Read the result after existing synchronous handlers have updated the UI.
    requestAnimationFrame(()=>{const correct=button.classList.contains('correct')||Boolean($('#appMain .feedback.correct,.open-work-feedback.correct'));if(correct){animate($('#appMain .feedback.correct,.open-work-feedback.correct'),[{transform:'scale(.985)'},{transform:'scale(1)'}],{duration:340});burst(button.isConnected?button:$('#appMain .feedback.correct'));}});
  });
  motionPreference.addEventListener('change',()=>{if(motionPreference.matches){observer?.disconnect();for(const animation of running)animation.cancel();running.clear();}});
  document.addEventListener('visibilitychange',()=>{for(const animation of running)document.hidden?animation.pause():animation.play();});
  window.E8Experience={refresh,setMenu,toggleVisual,closeVisual,syncNavigation,motion:animate,replay:root=>root?.querySelectorAll('svg').forEach(sceneMotion)};
})();
