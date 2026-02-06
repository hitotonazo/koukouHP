(function(){
  const base = (window.R2_BASE || "").replace(/\/+$/,"");
  if(!base) return;

  // <img data-r2="images/xxx.png">
  document.querySelectorAll("[data-r2]").forEach(el=>{
    const p = (el.getAttribute("data-r2")||"").replace(/^\/+/,"");
    if(!p) return;
    if(el.tagName.toLowerCase()==="img"){
      el.src = base + "/" + p;
    }else{
      el.style.backgroundImage = `url('${base}/${p}')`;
    }
  });

  // <a data-r2-href="pdfs/xxx.pdf">
  document.querySelectorAll("[data-r2-href]").forEach(a=>{
    const p = (a.getAttribute("data-r2-href")||"").replace(/^\/+/,"");
    if(!p) return;
    a.href = base + "/" + p;
  });
})();