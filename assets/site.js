(function(){
  const drawer = document.getElementById('drawer');
  if(!drawer) return;
  const openBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('drawerClose');
  function open(){ drawer.style.display='block'; }
  function close(){ drawer.style.display='none'; }
  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', (e)=>{ if(e.target === drawer) close(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
})();
