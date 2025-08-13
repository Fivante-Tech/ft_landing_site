"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // ---- Mounted from your original inline scripts ----
    try {
      // DEBUG FIX: ensure #y exists before writing, prevents TypeError
          var yel = document.getElementById('y'); if (yel) { yel.textContent = new Date().getFullYear(); }
          (function(){
            const KEY='lang';
            const show=(lang)=>{
              document.querySelectorAll('[data-lang]').forEach(el=>{
                const on = el.getAttribute('data-lang')===lang;
                el.hidden = !on;
                if(on) el.style.removeProperty('display');
              });
              localStorage.setItem(KEY, lang);
              const hero = document.getElementById('hero');
              if (hero) hero.scrollIntoView({behavior:'smooth', block:'start'});
            };
            const s=localStorage.getItem(KEY)||'zh';
            show(s);
            document.getElementById('lang-zh')?.addEventListener('click',()=>show('zh'));
            document.getElementById('lang-en')?.addEventListener('click',()=>show('en'));
          })();
          (function(){const lb=document.createElement('div');lb.className='lightbox';lb.setAttribute('aria-hidden','true');lb.innerHTML='<img alt="menu enlarged" />';document.body.appendChild(lb);const img=lb.querySelector('img');document.querySelectorAll('.menu-img, .seasonal-carousel img, .hero-bento img, .loc-visual').forEach(el=>{el.style.cursor='zoom-in';el.addEventListener('click',()=>{img.src=el.src;lb.setAttribute('aria-hidden','false');});});lb.addEventListener('click',()=>{lb.setAttribute('aria-hidden','true');img.src='';});})();
          // Lightbox support for Hero cover background
          (function(){
            const lb=document.querySelector('.lightbox');
            const img=lb && lb.querySelector('img');
            const el=document.querySelector('.hero-stage');
            if(!lb || !img || !el) return;
            el.style.cursor='zoom-in';
            el.addEventListener('click',()=>{
              const v=getComputedStyle(el).getPropertyValue('--hero');
              const m=v && v.match(/url\((?:['\"])??(.*?)(?:['\"])??\)/);
              if(m){ img.src=m[1]; lb.setAttribute('aria-hidden','false'); }
            });
          })();

          (function(){
            const scroller = document.getElementById('seasonal-scroller');
            const prev = document.getElementById('seasonal-prev');
            const next = document.getElementById('seasonal-next');
            const progress = document.getElementById('seasonal-progress');
            const dotsWrap = document.getElementById('seasonal-dots');
            if(!scroller) return;
            const slides = Array.from(scroller.querySelectorAll('.slide'));
            slides.forEach((_,i)=>{ const d=document.createElement('button'); d.className='dot'; d.setAttribute('aria-label','第'+(i+1)+'张'); d.addEventListener('click', ()=>go(i)); dotsWrap.appendChild(d);});
            let idx = 0; let timer=null; const DURATION=5000;
            function update(){ dotsWrap.querySelectorAll('.dot').forEach((d,i)=> d.setAttribute('aria-current', i===idx?'true':'false')); }
            function go(i){ idx = (i+slides.length)%slides.length; const step = scroller.clientWidth * 1; scroller.scrollTo({left: idx*step, behavior:'smooth'}); restart(); update(); }
            function restart(){ progress.style.transition='none'; progress.style.width='0%'; requestAnimationFrame(()=>{requestAnimationFrame(()=>{ progress.style.transition = `width ${DURATION}ms linear`; progress.style.width='100%'; })}); clearInterval(timer); timer = setInterval(()=>{ go(idx+1); }, DURATION); }
            prev?.addEventListener('click', ()=> go(idx-1));
            next?.addEventListener('click', ()=> go(idx+1));
            scroller.addEventListener('pointerdown', ()=>{ clearInterval(timer); });
            scroller.addEventListener('pointerup', ()=>{ restart(); });
            window.addEventListener('resize', ()=>{ go(idx); });
            update(); restart();
          })();

          // Instagram latest 3 (static placeholders)
          (function(){
            const grid = document.getElementById('ig-grid');
            if(!grid) return;
            // already rendered via HTML; keep for safety if JS reloads the grid elsewhere
          })();

          // --- Self-tests (console) ---
          (function(){
            function assert(cond, name){ console[cond? 'log':'error']('[test]', name, cond? 'OK':'FAIL'); }
            assert(!!document.getElementById('y'), 'year span exists');
            assert(document.querySelectorAll('.lang').length===2, 'language buttons x2');
            assert(document.querySelectorAll('#locations [data-lang]').length>=4, 'bilingual location fields');
            assert(document.querySelectorAll('#seasonal-scroller .slide').length===5, 'seasonal has 5 slides');
          })();
    } catch (e) {
      console.error("[init scripts] error:", e);
    }
  }, []);

  return (
    <>
      <header>
  <div className="container nav" role="navigation" aria-label="主导航">
    <div className="brand"><div className="brandname">Fufootea 茶满满</div>
    </div>
    <nav className="nav" aria-label="页面链接">
      <ul>
        <li><a href="#hero"><span data-lang="zh">品牌故事</span><span data-lang="en" hidden>Story</span></a></li>
        <li><a href="#menu"><span data-lang="zh">菜单</span><span data-lang="en" hidden>Menu</span></a></li>
        <li><a href="#locations"><span data-lang="zh">门店</span><span data-lang="en" hidden>Locations</span></a></li>
        <li><a href="#contact"><span data-lang="zh">联系</span><span data-lang="en" hidden>Contact</span></a></li>
      </ul>
    </nav>
    <div className="nav-cta lang-switch">
      <button id="lang-zh" className="lang" aria-label="切换中文" title="中文">中</button>
      <button id="lang-en" className="lang" aria-label="Switch to English" title="EN">EN</button>
    </div>
  </div>
</header>
      <main id="main">
  <section id="hero" className="hero container" aria-label="首屏宣传">
    <div className="grid">
      <div>
        <div className="badge" aria-label="穆斯林友好">#MuslimFriendly</div>
        <div className="badge" aria-label="本地品牌">#localbrand</div>
        <h1 className="display"><span data-lang="zh">好茶·不将就·</span><span data-lang="en" hidden>Be Real to Fruits & Tea</span></h1>
        <p className="sub muted"><span data-lang="en">FufooTea is a proudly Malaysian local brand, dedicated to serving the finest handcrafted tea — brewed with honesty, heart, and real ingredients. We believe in keeping it real: real fruits, real tea, and real passion in every cup. 🍵✨ From our very first blend, we’ve stayed true to our roots — creating refreshing, feel-good drinks that celebrate the simplicity of natural flavors and the joy of sharing good tea with good people. Welcome to FufooTea. Stay real, sip happy. 💛</span><span data-lang="zh" hidden>FufooTea 源自马来西亚的本地品牌，专注于奉上用心手作的好茶——以诚意、温度与真材实料酿煮而成。我们坚持真实：每一杯都是真水果、真茶叶，也是真热爱。自第一杯调配起，我们始终不忘初心——以自然而单纯的风味，做让人身心舒畅的好喝饮品，与爱茶的你分享美好。欢迎来到 FufooTea，保持真实，畅快喝茶。💛</span></p>
      </div>
      <div className="hero-stage" aria-label="品牌视觉背景" style={ ["--hero"]:"url('assets/Cover.jpg')" }></div>
      </div>
    </div>
  </section>

  <section className="container" aria-labelledby="sig">
    <div className="sec-head">
      <h2 id="sig"><span data-lang="zh">招牌单品</span><span data-lang="en" hidden>Signatures</span></h2>
      <a className="btn" href="#menu"><span data-lang="zh">全部饮品 →</span><span data-lang="en" hidden>All Drinks →</span></a>
    </div>
    <div className="grid grid-3">
      <article className="card drink" aria-label="Pekan Nanas"><img className="drink-visual" src="assets/2.jpg" alt="Pekan Nanas 主图" /><div className="meta"><h3><span data-lang="zh">北干那那 · 凤梨</span><span data-lang="en" hidden>Pekan Nanas · Pineapple</span></h3><div className="price">MYR 11.99</div></div></article>
      <article className="card drink" aria-label="Prosperity Persimmon Peanut"><img className="drink-visual" src="assets/3.jpg" alt="Prosperity Persimmon Peanut 主图" /><div className="meta"><h3><span data-lang="zh">好柿花生</span><span data-lang="en" hidden>Prosperity · Persimmon Peanut</span></h3><div className="price">MYR 11.99</div></div></article>
      <article className="card drink" aria-label="Nasi Lemak Bungkus"><img className="drink-visual" src="assets/1.jpg" alt="Nasi Lemak Bungkus 主图" /><div className="meta"><h3><span data-lang="zh">椰浆饭 · 套袋款</span><span data-lang="en" hidden>Nasi Lemak · Bungkus</span></h3><div className="price">MYR 11.99</div></div></article>
    </div>
  </section>

  <section className="container" aria-labelledby="usps">
    <h2 id="usps"><span data-lang="zh">为什么选我们</span><span data-lang="en" hidden>Why Us</span></h2>
    <div className="usps">
      <div className="usp"><div aria-hidden="true">🥭</div><div><strong><span data-lang="zh">真果 · 真茶 · 真奶</span><span data-lang="en" hidden>Real Fruits · Real Tea · Real Milk</span></strong><div className="muted"><span data-lang="zh">拒绝人工香精，用料满满</span><span data-lang="en" hidden>No artificial flavors, only honest ingredients.</span></div></div></div>
      <div className="usp"><div aria-hidden="true">🍍</div><div><strong><span data-lang="zh">产地当季</span><span data-lang="en" hidden>Seasonal & Sourced</span></strong><div className="muted"><span data-lang="zh">Pekan Nanas 凤梨、西瓜等季节风味</span><span data-lang="en" hidden>Pekan Nanas pineapples, watermelon and other seasonal flavors.</span></div></div></div>
      <div className="usp"><div aria-hidden="true">⚖️</div><div><strong><span data-lang="zh">糖冰可定制</span><span data-lang="en" hidden>Custom Sugar & Ice</span></strong><div className="muted"><span data-lang="zh">0–100% 糖度与冰量，随心口味</span><span data-lang="en" hidden>0–100% sugar and ice — your call.</span></div></div></div>
    </div>
  </section>

  <section className="container seasonal-carousel" aria-labelledby="seasonal-title">
    <div className="sec-head">
      <h2 id="seasonal-title"><span data-lang="zh">当季限定</span><span data-lang="en" hidden>Seasonal Limited</span></h2>
    </div>
    <div className="progress-wrap" aria-hidden="true"><div id="seasonal-progress" className="progress"></div></div>
    <div className="carousel" id="seasonal-scroller" aria-label="季节限定主图轮播">
      <figure className="slide card"><img src="assets/season1.webp" alt="Camellia Oolong Milk Tea 海报" /><figcaption className="cap">Camellia Oolong · 山茶花海</figcaption></figure>
      <figure className="slide card"><img src="assets/season2.webp" alt="Da Hong Pao Milk Tea 海报" /><figcaption className="cap">Da Hong Pao · 一袭红袍</figcaption></figure>
      <figure className="slide card"><img src="assets/season3.webp" alt="Autumn Black Milk Tea 海报" /><figcaption className="cap">Autumn Black · 如烟知秋</figcaption></figure>
      <figure className="slide card"><img src="assets/season4.webp" alt="White Peach Oolong Milk Tea 海报" /><figcaption className="cap">White Peach Oolong · 陌上白桃</figcaption></figure>
      <figure className="slide card"><img src="assets/season5.webp" alt="Jasmine Green Milk Tea 海报" /><figcaption className="cap">Jasmine Green · 悠悠茉绿</figcaption></figure>
    </div>
    <div className="carousel-controls">
      <div className="dots" id="seasonal-dots" aria-label="轮播定位点"></div>
      <button className="btn" id="seasonal-prev" aria-label="上一张">‹</button>
      <button className="btn" id="seasonal-next" aria-label="下一张">›</button>
    </div>
  </section>

  <section id="menu" className="container" aria-labelledby="menu-title">
    <div className="sec-head"><h2 id="menu-title"><span data-lang="zh">菜单</span><span data-lang="en" hidden>Menu</span></h2><div className="muted"><span data-lang="zh">可点击放大查看，依据当季更新</span><span data-lang="en" hidden>Tap to zoom. Seasonal updates.</span></div></div>
    <div className="menu-gallery"><figure className="card"><img className="menu-img" src="assets/menu1.webp" alt="Fufootea 五月菜单（果蔬茶、鲜奶茶、纯茶、草本茶与糖冰标准）" /></figure><figure className="card"><img className="menu-img" src="assets/menu2.webp" alt="Fufootea 现烤泡芙与原茶生鲜果蛋糕价目" /></figure></div>
  </section>

  <section id="locations" className="container" aria-labelledby="loc-title">
    <div className="sec-head"><h2 id="loc-title"><span data-lang="zh">门店与时间</span><span data-lang="en" hidden>Locations &amp; Hours</span></h2></div>
    <div className="loc-grid">
      <article className="card loc" aria-label="Mount Austin 总店">
        <img className="loc-visual" src="assets/austin.webp" alt="Fufootea Mount Austin 门店" loading="lazy" />
        <div className="meta"><h3>Mount Austin · 总店</h3>
          <div className="muted">
            <span data-lang="zh">地址：11, Jln Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor<br>营业时间：每日 12:00–24:00（12pm–12am）</span>
            <span data-lang="en" hidden>Address: 11, Jalan Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor<br>Hours: Daily 12:00–24:00 (12pm–12am)</span>
          </div>
          <div className="loc-actions"><a className="btn" href="https://maps.app.goo.gl/TwqN4NqPGLLrpr8q9?g_st=ipc" target="_blank" rel="noopener"><span data-lang="zh">一键导航</span><span data-lang="en" hidden>One‑tap directions</span></a></div>
        </div>
      </article>
      <article className="card loc" aria-label="Paradigm Mall JB 分店">
        <img className="loc-visual" src="assets/paradigm.webp" alt="Fufootea Paradigm Mall JB 门店" loading="lazy" />
        <div className="meta"><h3>Paradigm Mall JB · L3（Lot 12E–H）</h3>
          <div className="muted">
            <span data-lang="zh">地址：Paradigm Mall Johor Bahru，Level 3 · Lot 12E–H（近溜冰场）<br>营业时间：每日 10:00–22:00（10am–10pm）</span>
            <span data-lang="en" hidden>Address: Paradigm Mall Johor Bahru, Level 3 · Lot 12E–H (near ice rink)<br>Hours: Daily 10:00–22:00 (10am–10pm)</span>
          </div>
          <div className="loc-actions"><a className="btn" href="https://maps.app.goo.gl/jRpvqj6F4kZiAxpy7?g_st=ipc" target="_blank" rel="noopener"><span data-lang="zh">一键导航</span><span data-lang="en" hidden>One‑tap directions</span></a></div>
        </div>
      </article>
    </div>
  </section>

  <section className="container" aria-labelledby="rev-title"><h2 id="rev-title"><span data-lang="zh">大家怎么说</span><span data-lang="en" hidden>What People Say</span></h2><div className="quotes"><blockquote>“真材实料，水果香气很干净。”</blockquote><blockquote>“内装极简有质感，出片好看。”</blockquote><blockquote>“榴莲泡芙爆浆，太上头了。”</blockquote></div></section>


    <section id="instagram" className="container" aria-labelledby="ig-title">
    <div className="sec-head">
      <h2 id="ig-title"><span data-lang="zh">社交媒体</span><span data-lang="en" hidden>Social Media</span></h2>

    </div>
    <div className="ig-grid" id="ig-grid" aria-live="polite">
      <a className="ig-card" href="https://www.xiaohongshu.com/discovery/item/67724328000000001300cc8a?source=webshare&xhsshare=pc_web&xsec_token=ABTLYT3aVuy8Oi2x3U7821Mp1rALTvuIKGBZeu3FqmlqY=&xsec_source=pc_share" target="_blank" rel="noopener" aria-label="小红书 · 被JB奶茶店耽误的泡芙"><span className="ig-badge">小红书</span><img src="assets/xhs1.png" alt="小红书 帖子 1" /></a>
      <a className="ig-card" href="https://www.instagram.com/reel/DNFPywJzzBZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener" aria-label="Instagram Reels"><span className="ig-badge">Instagram</span><img src="assets/Ins1.png" alt="Instagram Reels" /></a>
      <a className="ig-card" href="https://www.xiaohongshu.com/discovery/item/687a090c00000000120306fb?source=webshare&xhsshare=pc_web&xsec_token=ABxmSeK7CxGEF_r8WNVLUDg80FsuKSretTHJfmsdmTnMY=&xsec_source=pc_share" target="_blank" rel="noopener" aria-label="小红书 · JB周末亲子出游好去处"><span className="ig-badge">小红书</span><img src="assets/xhs2.png" alt="小红书 帖子 2" /></a>
    </div>
  </section>

  <!-- Contact moved below Social Media -->
  <section id="contact" className="container" aria-labelledby="contact-title"><div className="sec-head"><h2 id="contact-title"><span data-lang="zh">订阅与联系</span><span data-lang="en" hidden>Subscribe & Contact</span></h2><div className="muted">获取当季限定与新品试饮</div></div><form className="newsletter" name="subscribe"><input type="hidden" name="form-name" value="subscribe" /><input aria-label="邮箱" type="email" name="email" placeholder="Coming soon" disabled /><button className="btn" type="button" disabled>Subscribe</button><a className="btn" href="https://wa.me/60136041491" target="_blank" rel="noopener" aria-label="WhatsApp 联系我们">WhatsApp</a></form></section>




</main>

    </>
  );
}
