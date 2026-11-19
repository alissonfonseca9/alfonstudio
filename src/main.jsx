import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import formImage from './media/forma.webp';
import velora from './media/velora.webp';
import agenda from './media/agenda.webp';
import forest from './media/forest.webp';
import forestWeb from './media/forest-web-entrada.webp';
import forestWebScore from './media/forest-web-pontos.webp';
import veloraLateral from './media/velora-lateral.webp';
import veloraInterior from './media/velora-interior.webp';
import veloraX7 from './media/velora-x7.webp';
import agendaAdmin from './media/agenda-admin.webp';
import forestScore from './media/forest-score.webp';
import {BrandMark, Wordmark} from './Brand.jsx';
import Profile from './Profile.jsx';
import './style.css';

const cases = [
  {
    name: 'VELORA', type: 'Site conceitual', sector: 'Automotivo',
    image: velora, alt: 'Imagem conceitual do VELORA S9', imageClass: 'automotive',
    gallery: [
      {image: velora, alt: 'VELORA S9 em uma cena conceitual', label: 'S9 em destaque'},
      {image: veloraLateral, alt: 'Perfil lateral do VELORA S9', label: 'Perfil do S9'},
      {image: veloraInterior, alt: 'Painel e cabine do VELORA S9', label: 'Interior do S9'},
      {image: veloraX7, alt: 'Vista dianteira em três quartos do VELORA X7', label: 'Vista do X7'},
    ],
    headline: 'Escolha um modelo e explore cada ângulo.',
    short: 'No site conceitual do VELORA, o visitante alterna entre os modelos fictícios S9 e X7 e amplia as imagens para ver os detalhes de cada carro.',
    detail: 'HTML, CSS e JavaScript',
    text: 'A galeria permite navegar por diferentes ângulos e interiores, com controles por teclado no computador e por gesto no celular. Os veículos foram criados para um estudo e as imagens são geradas por IA.',
    repo: 'https://github.com/alissonfonseca9/veloraautov2',
  },
  {
    name: 'Agenda Clara', type: 'Aplicação web', sector: 'Agendamento',
    image: agenda, alt: 'Captura da página do cliente no Agenda Clara', imageClass: 'interface',
    gallery: [
      {image: agenda, alt: 'Página de agendamento do cliente no Agenda Clara', label: 'Página do cliente'},
      {image: agendaAdmin, alt: 'Painel de agendamentos do Agenda Clara', label: 'Painel administrativo'},
    ],
    headline: 'Da escolha do serviço à reserva.',
    short: 'O cliente consulta os serviços e escolhe um horário livre. Do outro lado, a equipe acompanha as reservas em um painel de atendimento.',
    detail: 'React, Node.js, Express e PostgreSQL',
    text: 'O cliente escolhe um serviço e vê os horários disponíveis para a duração daquele atendimento. Pelo painel, o administrador acompanha as reservas, ajusta horários e cancela compromissos.',
    repo: 'https://github.com/alissonfonseca9/AgendaClara',
  },
  {
    name: 'Forest Shuffle Web', type: 'Calculadora web · Computador', sector: 'Jogos de tabuleiro',
    image: forestWeb, alt: 'Página inicial do Forest Shuffle Score Counter no computador', imageClass: 'interface',
    gallery: [
      {image: forestWeb, alt: 'Tela inicial da calculadora Forest Shuffle na versão web', label: 'Página inicial'},
      {image: forestWebScore, alt: 'Catálogo de cartas, área da floresta e painel de pontuação lado a lado', label: 'Mesa de jogo'},
    ],
    headline: 'A mesa de jogo inteira em uma tela.',
    short: 'Calculadora para acompanhar uma partida física de Forest Shuffle. No computador, o catálogo de cartas, a floresta e a pontuação aparecem lado a lado.',
    detail: 'React, JavaScript, HTML e CSS',
    text: 'O jogador escolhe cartas no catálogo, organiza a floresta e registra as cartas da caverna. A ferramenta detalha a origem dos pontos e permite alternar entre jogadores.',
    demo: 'https://forestshufflecounter.netlify.app/',
    repo: 'https://github.com/alissonfonseca9/joaoalissondev/tree/main/codigo-fonte/forest-react',
  },
  {
    name: 'Forest Shuffle Mobile', type: 'Calculadora web', sector: 'Jogos de tabuleiro',
    image: forest, alt: 'Captura da calculadora Forest Shuffle na versão para celular', imageClass: 'portrait',
    gallery: [
      {image: forest, alt: 'Tela da floresta no Forest Shuffle Mobile', label: 'Floresta no celular'},
      {image: forestScore, alt: 'Tela de contagem de pontos no Forest Shuffle Mobile', label: 'Pontuação'},
    ],
    headline: 'Confira os pontos sem sair da mesa.',
    short: 'Versão para celular da calculadora de Forest Shuffle. A interface por toque permite montar uma floresta, registrar cartas e acompanhar a pontuação dos jogadores.',
    detail: 'React, JavaScript, HTML e CSS',
    text: 'A navegação adapta a ferramenta à tela pequena, com abas para alternar entre a floresta, o catálogo de cartas, a pontuação e os jogadores.',
    repo: 'https://github.com/alissonfonseca9/joaoalissondev/tree/main/codigo-fonte/forest-mobile',
  },
];

const services = [
  ['Site institucional', 'Quando alguém pesquisa seu negócio, encontra serviços, exemplos do seu trabalho, localização e canais de atendimento em um só endereço. É uma boa escolha para quem quer apresentar a empresa por inteiro.'],
  ['Landing page', 'Prefere divulgar um serviço, lançar uma oferta ou direcionar uma campanha? Uma página dedicada responde às dúvidas sobre aquela oferta e destaca uma ação, como pedir orçamento ou agendar.'],
  ['Catálogo digital', 'Se o atendimento começa com perguntas sobre modelos, medidas ou acabamentos, reúna essas respostas em fichas com fotos e detalhes. O cliente pode escolher o que quer consultar e chamar a loja já com o item em mente.'],
];

function Modal({title,close,children,kind}){
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current, trigger=document.activeElement;
    el.showModal();
    document.body.classList.add('modal-open');
    return ()=>{el.close();document.body.classList.remove('modal-open');trigger?.focus();};
  },[]);
  return <dialog ref={ref} className={'modal '+kind} aria-label={title} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===ref.current)close();}}><div className="modal-inner"><div className="modal-top"><span>{title}</span><button className="outline" onClick={close} autoFocus>Fechar ×</button></div>{children}</div></dialog>;
}
const whatsappUrl = 'https://wa.me/5582998025511';

function Contact({close}) {
  return (
    <Modal title="Contato" close={close} kind="contact">
      <h2>Vamos falar<br/> sobre seu site<span>.</span></h2>
      <p>Conte o que você precisa e tire suas dúvidas sobre o projeto pelo WhatsApp.</p>
      <a className="blue" href={whatsappUrl}>Conversar no WhatsApp</a>
    </Modal>
  );
}
function ProjectGallery({item}) {
  const [current, setCurrent] = useState(0);
  const {gallery} = item;
  const slide = gallery[current];

  function move(step) {
    setCurrent(index => (index + step + gallery.length) % gallery.length);
  }

  function handleKey(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return (
    <section className="project-gallery" aria-label={'Imagens de ' + item.name} onKeyDown={handleKey}>
      <div className={'case-picture ' + item.imageClass}>
        <img src={slide.image} alt={slide.alt}/>
      </div>
      <div className="gallery-controls">
        <button type="button" className="outline" onClick={() => move(-1)} aria-label="Imagem anterior">‹</button>
        <p aria-live="polite"><strong>{slide.label}</strong><span>{current + 1} de {gallery.length}</span></p>
        <button type="button" className="outline" onClick={() => move(1)} aria-label="Próxima imagem">›</button>
      </div>
      <div className="gallery-thumbnails" role="group" aria-label="Escolher uma imagem">
        {gallery.map(({image, label}, index) => (
          <button type="button" key={label} onClick={() => setCurrent(index)} aria-label={label} aria-pressed={index === current}>
            <img src={image} alt=""/>
          </button>
        ))}
      </div>
    </section>
  );
}

function CaseStudy({item, close}) {
  const [detail, setDetail] = useState(false);
  return (
    <Modal title={item.name} close={close} kind="case-modal">
      <div className="case-interior">
        <ProjectGallery item={item}/>
        <div className="case-text">
          <small>{item.sector} / {item.type}</small>
          <h2>{item.headline}</h2>
          <p>{item.short}</p>
          <div className="case-actions">
            {item.demo && <a className="blue" href={item.demo} target="_blank" rel="noopener noreferrer">Abrir versão web</a>}
            <a className="outline" href={item.repo} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
            <button className="outline" aria-expanded={detail} onClick={() => setDetail(!detail)}>
              {detail ? 'Recolher detalhes' : 'Tecnologias e detalhes'}
            </button>
          </div>
          {detail && <section className="detail"><h3>{item.detail}</h3><p>{item.text}</p></section>}
        </div>
      </div>
    </Modal>
  );
}
function useTextReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) ||
        matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll('[data-text-reveal]');
    const observer = new IntersectionObserver(entries => {
      for (const {isIntersecting, target} of entries) {
        if (!isIntersecting) continue;
        target.dataset.textReveal = 'visible';
        observer.unobserve(target);
      }
    }, {rootMargin: '0px 0px -24px 0px'});

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, []);
}

function useScrollDepth(hero, portfolio, paused) {
  useEffect(() => {
    const scene = hero.current;
    const cards = [...portfolio.current.querySelectorAll('.work')];
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame;

    function update() {
      frame = undefined;
      if (reducedMotion.matches) return;

      const viewport = document.documentElement.clientHeight;
      const {top, height} = scene.getBoundingClientRect();
      const heroProgress = paused ? null : Math.max(0, Math.min(1, -top / (height * 0.85)));
      const cardDepths = cards.map(card => {
        const cardTop = card.getBoundingClientRect().top;
        return Math.max(0, Math.min(1, (cardTop - viewport * 0.74) / (viewport * 0.26)));
      });

      if (heroProgress !== null) scene.style.setProperty('--hero-depth', heroProgress.toFixed(3));
      cards.forEach((card, index) => card.style.setProperty('--card-depth', cardDepths[index].toFixed(3)));
    }

    function schedule() {
      if (!reducedMotion.matches && frame === undefined) frame = requestAnimationFrame(update);
    }

    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener?.('change', schedule);
    schedule();
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener?.('change', schedule);
    };
  }, [hero, portfolio, paused]);
}

const themeKey = 'alfon-theme';

function readLightTheme() {
  try {
    return localStorage.getItem(themeKey) === 'light';
  } catch {
    return false;
  }
}

function ThemeSwitch({light, changeTheme}) {
  return (
    <div className="theme" role="group" aria-label="Aparência">
      <button aria-pressed={!light} type="button" onClick={() => changeTheme(false)}>Escuro</button>
      <button aria-pressed={light} type="button" onClick={() => changeTheme(true)}>Claro</button>
    </div>
  );
}

function App() {
  const [light, setLight] = useState(readLightTheme);
  const [showProfile, setShowProfile] = useState(() => window.location.hash === '#sobre');
  const previousProfile = useRef(showProfile);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]').content = light ? '#ffffff' : '#060606';
  }, [light]);

  function changeTheme(nextLight) {
    setLight(nextLight);
    try {
      localStorage.setItem(themeKey, nextLight ? 'light' : 'dark');
    } catch {
      // The current theme still works when storage is restricted.
    }
  }

  useEffect(() => {
    const navigate = () => setShowProfile(window.location.hash === '#sobre');
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);

  useLayoutEffect(() => {
    document.title = showProfile
      ? 'Alisson Fonseca — alfon'
      : 'alfon — Design e desenvolvimento web';
    if (previousProfile.current === showProfile) return;
    previousProfile.current = showProfile;

    const anchor = window.location.hash.slice(1);
    const target = document.getElementById(anchor) || document.getElementById('inicio');
    target?.focus({preventScroll: true});
    if (showProfile || !anchor || anchor === 'inicio') {
      window.scrollTo({top: 0, behavior: 'instant'});
    } else {
      target?.scrollIntoView({behavior: 'instant'});
    }
  }, [showProfile]);

  const theme = <ThemeSwitch light={light} changeTheme={changeTheme}/>;
  return (
    <div className="site">
      {showProfile ? (
        <>
          <a className="skip" href="#sobre">Pular para apresentação</a>
          <header className="profile-header content">
            <a className="logo" href="#inicio" aria-label="alfon, início"><BrandMark/></a>
            {theme}
            <a className="outline profile-back" href="#inicio">Voltar ao estúdio</a>
          </header>
          <Profile whatsappUrl={whatsappUrl}/>
        </>
      ) : (
        <Studio theme={theme}/>
      )}
      <footer className="content">
        <a href="#inicio" className="footer-brand" aria-label="alfon, início"><Wordmark/></a>
        <span>Estúdio digital · Maceió, AL</span>
        {showProfile
          ? <a href="#inicio">Voltar ao início</a>
          : <a href="#sobre">Sobre Alisson</a>}
      </footer>
      <WhatsAppFloat/>
    </div>
  );
}

function Studio({theme}){
  useTextReveal();
  const [menu,setMenu]=useState(false),[index,setIndex]=useState(0),[active,setActive]=useState(null),[contactOpen,setContactOpen]=useState(false);
  const item=cases[index], art=useRef(null), menuButton=useRef(null);
  const hero = useRef(null), portfolio = useRef(null);

  function cycle(delta){setIndex(i=>(i+delta+cases.length)%cases.length);}
  useEffect(()=>{
    if(!menu)return;
    function dismiss(e){if(e.key==='Escape'){setMenu(false);menuButton.current?.focus();}}
    function outside(e){if(!e.target.closest('.navigation'))setMenu(false);}
    document.addEventListener('keydown',dismiss);document.addEventListener('pointerdown',outside);
    return ()=>{document.removeEventListener('keydown',dismiss);document.removeEventListener('pointerdown',outside);};
  },[menu]);
  const [motionPaused, setMotionPaused] = useState(false);
  useScrollDepth(hero, portfolio, motionPaused);

  function resetArtTilt() {
    for (const property of ['--x', '--y', '--pitch', '--yaw']) {
      art.current?.style.removeProperty(property);
    }
  }

  function track(event) {
    if (motionPaused || event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    art.current.style.setProperty('--x', x * 22 + 'px');
    art.current.style.setProperty('--y', y * 16 + 'px');
    art.current.style.setProperty('--pitch', y * -10 + 'deg');
    art.current.style.setProperty('--yaw', x * 15 + 'deg');
  }

  return <><a className="skip" href="#projetos">Pular para projetos</a>
    <section className="hero" id="inicio" ref={hero} tabIndex={-1} data-motion-paused={motionPaused} onPointerMove={track} onPointerLeave={resetArtTilt}>
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop-plane">
          <div className="sculpture-tilt" ref={art}><img src={formImage} alt="" fetchPriority="high"/></div>
        </div>
      </div>
      <button className="outline motion-toggle" type="button" aria-pressed={motionPaused} onClick={() => { resetArtTilt(); setMotionPaused(value => !value); }}>
        {motionPaused ? 'Retomar animação' : 'Pausar animação'}
      </button>
      <div className="grid-lines" aria-hidden="true"/>
      <header><a className="logo" href="#inicio" aria-label="alfon, início"><BrandMark/></a>{theme}<div className="navigation"><button className="outline nav-contact" onClick={()=>setContactOpen(true)}>Contato</button><button ref={menuButton} className="menu-toggle" aria-expanded={menu} aria-controls="nav-list" onClick={()=>setMenu(!menu)}>Menu <b aria-hidden="true">{menu?'−':'+'}</b></button>{menu&&<nav id="nav-list" aria-label="Menu principal">{[['Projetos','#projetos'],['Serviços','#servicos'],['Sobre Alisson','#sobre']].map(([t,h])=><a key={h} href={h} onClick={()=>setMenu(false)}>{t}</a>)}<button onClick={()=>{menuButton.current?.focus();setMenu(false);setContactOpen(true);}}>Contato</button></nav>}</div></header>
      <div className="identity"><div className="side-label left">Estratégia<br/>Design<br/>Desenvolvimento</div><div className="signature" data-text-reveal><h1 aria-label="alfon"><Wordmark/></h1><p>DESIGN E DESENVOLVIMENTO WEB</p></div><div className="side-label right">Maceió, AL<br/>Brasil</div></div>
      <div className="hero-base"><div className="pitch" data-text-reveal><p className="micro">ESTÚDIO WEB EM MACEIÓ</p><h2>Um site que ajuda<br/> seu cliente a decidir.</h2><p>Seu cliente chega pelo Google, pelo Instagram ou por indicação. Criamos o site onde ele pode entender o que você oferece, consultar seus produtos e saber como falar com você.</p>
        <div className="actions hero-actions">
          <button className="blue" onClick={()=>setContactOpen(true)}>Conversar sobre o projeto</button>
          <a className="outline hero-profile" href="#sobre">Sobre Alisson</a>
          <a className="outline" href="#projetos">Ver portfólio</a>
        </div>
      </div>
      <aside className="feature" aria-label="Projeto em destaque"><div className="feature-controls"><span>Em destaque</span><div><button onClick={()=>cycle(-1)} aria-label="Projeto anterior">‹</button><span aria-live="polite">{String(index + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}</span><button onClick={()=>cycle(1)} aria-label="Próximo projeto">›</button></div></div><button className={'featured-work ' + item.imageClass} onClick={()=>setActive(item)} aria-label={'Abrir '+item.name}><img src={item.image} alt=""/></button><div className="feature-foot">{item.name}<small>{item.type}</small></div></aside></div>
    </section>
    <main><section className="works content" id="projetos" ref={portfolio} tabIndex={-1}><div className="section-head" data-text-reveal><div><p className="micro">DESENVOLVIMENTO WEB</p><h2>Projetos selecionados<span>.</span></h2></div><p>O VELORA apresenta dois carros conceito. O Agenda Clara organiza reservas. O Forest Shuffle ajuda a conferir a pontuação de uma partida. Abra cada projeto para ver como a interface resolve uma tarefa diferente.</p></div><div className="cards">{cases.map(c=><button key={c.name} className="work" onClick={()=>setActive(c)}><span className={'cover ' + c.imageClass}><img src={c.image} alt={c.alt} loading="lazy"/><i>Ver projeto</i></span><span className="work-caption" data-text-reveal><b>{c.name}</b><small>{c.type}</small></span></button>)}</div></section>
    <section className="services content" id="servicos"><div data-text-reveal><p className="micro">SERVIÇOS DO ESTÚDIO</p><h2>Que tipo de site seu<br/> negócio precisa<span>?</span></h2></div><div className="service-list">{services.map(([s,p],i)=><details key={s} name="services" open={i===0}><summary data-text-reveal>{s}<span aria-hidden="true"/></summary><p data-text-reveal>{p}</p><button className="outline" onClick={()=>setContactOpen(true)}>Conversar sobre o projeto</button></details>)}</div></section>
    <section className="process content" aria-labelledby="process-title">
      <div className="section-head" data-text-reveal>
        <div><p className="micro">COMO FUNCIONA</p><h2 id="process-title">Do briefing ao lançamento<span>.</span></h2></div>
        <p>A gente começa pelo que você quer que seu cliente encontre, entenda ou faça ao abrir o site.</p>
      </div>
      <ol className="process-steps">
        <li data-text-reveal><h3>Entender a necessidade</h3><p>Você conta como vende ou atende hoje, o que quer divulgar e quais materiais já tem.</p></li>
        <li data-text-reveal><h3>Definir a proposta</h3><p>Combinamos as páginas, as funções e o que será entregue. Assim, você pode avaliar o orçamento com o escopo em mãos.</p></li>
        <li data-text-reveal><h3>Revisar e publicar</h3><p>Você confere o site no celular e no computador. Depois da revisão, seguimos para a publicação.</p></li>
      </ol>
      <div className="actions"><button className="blue" onClick={()=>setContactOpen(true)}>Conversar sobre o projeto</button><a className="outline" href="#sobre">Sobre Alisson</a></div>
    </section>
    </main>
    {active&&<CaseStudy item={active} close={()=>setActive(null)}/>}
    {contactOpen&&<Contact close={()=>setContactOpen(false)}/>}
  </>;
}

function WhatsAppFloat() {
  return <a className="whatsapp-float" href={whatsappUrl} aria-label="Conversar com a alfon no WhatsApp">
      <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20.7 11.7a8.8 8.8 0 0 1-13 7.7L3 20.7l1.2-4.6a8.8 8.8 0 1 1 16.5-4.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8.6 7.2c.3 0 .5.2.6.5l.8 1.7c.1.2.1.4-.1.6l-.6.7c.5 1.1 1.8 2.4 3 2.9l.8-1c.2-.2.4-.2.6-.1l1.8.8c.2.1.3.3.3.5 0 1.4-1.2 2.1-2.5 1.8-2.9-.7-5.5-3-6.3-5.9-.3-1.1.5-2.5 1.6-2.5Z" fill="currentColor"/>
      </svg>
  </a>;
}
createRoot(document.getElementById('root')).render(<App/>);
