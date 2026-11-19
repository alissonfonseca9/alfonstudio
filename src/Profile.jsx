import React from 'react';
import portrait from './media/alisson-perfil.webp';
import './profile.css';

const skills = [
  {
    name: 'Interfaces web',
    description: 'Desenvolvo páginas responsivas e aplicações web com atenção à navegação e à hierarquia do conteúdo.',
    tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    name: 'APIs e dados',
    description: 'Em projetos práticos, construo APIs, modelo dados e implemento autenticação e permissões.',
    tools: ['Node.js', 'Express', 'Prisma', 'SQL', 'MySQL'],
  },
  {
    name: 'Qualidade de software',
    description: 'Testo fluxos e endpoints, documento falhas com evidências e uso Git para acompanhar as mudanças.',
    tools: ['Postman', 'Testes exploratórios', 'Testes de API', 'Git', 'GitHub'],
  },
];

const timeline = [
  {
    period: 'Desde 2022',
    title: 'Técnico de Suporte Pleno',
    place: 'Sulwork',
    description: 'Atuação em suporte de TI, com diagnóstico de problemas e atendimento a usuários.',
  },
  {
    period: '2021–2022',
    title: 'Help Desk',
    place: 'Almaviva do Brasil',
    description: 'Experiência em atendimento técnico e resolução de chamados.',
  },
  {
    period: '2019–2021',
    title: 'Análise e Desenvolvimento de Sistemas',
    place: 'Faculdade Pitágoras',
    description: 'Tecnólogo concluído. Também tenho experiência com manutenção de computadores desde 2017.',
  },
];

export default function Profile({whatsappUrl}) {
  return (
    <main id="sobre" className="profile content" tabIndex={-1} aria-labelledby="profile-title">
      <section className="profile-intro" aria-labelledby="profile-title">
        <div className="profile-opening">
          <p className="micro">DESENVOLVIMENTO WEB · MACEIÓ, AL</p>
          <h1 id="profile-title">Alisson<br className="profile-name-break"/> Fonseca<span>.</span></h1>
          <p className="profile-lead">Sou tecnólogo em Análise e Desenvolvimento de Sistemas e desenvolvedor web. Criei a alfon para ajudar negócios a apresentar seus serviços e facilitar o contato com clientes.</p>
          <p className="profile-copy">Minha experiência em suporte de TI me ensinou a ouvir quem usa um sistema, investigar falhas e explicar soluções com clareza. Levo esse olhar para o desenvolvimento e os testes dos meus projetos.</p>
          <div className="actions">
            <a className="blue" href="#projetos">Ver portfólio</a>
            <a className="outline" href="https://github.com/alissonfonseca9">GitHub</a>
            <a className="outline" href="https://www.linkedin.com/in/joaoalissondasilvafonseca/">LinkedIn</a>
          </div>
        </div>
        <figure className="profile-photo">
          <img src={portrait} width="768" height="1358" alt="Retrato de Alisson Fonseca" fetchPriority="high"/>
        </figure>
      </section>

      <section className="profile-section" aria-labelledby="skills-title">
        <h2 id="skills-title">Habilidades<span>.</span></h2>
        <div className="profile-skills">
          {skills.map(skill => (
            <article className="profile-skill" key={skill.name}>
              <h3>{skill.name}</h3>
              <p className="profile-copy">{skill.description}</p>
              <ul aria-label={`Ferramentas e práticas de ${skill.name.toLowerCase()}`}>
                {skill.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section profile-history" aria-labelledby="history-title">
        <h2 id="history-title">Trajetória<span>.</span></h2>
        <ol className="profile-timeline">
          {timeline.map(entry => (
            <li key={entry.title}>
              <p className="micro">{entry.period}</p>
              <div>
                <h3>{entry.title}</h3>
                <p className="profile-place">{entry.place}</p>
                <p className="profile-copy">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="profile-section profile-history" aria-labelledby="practice-title">
        <h2 id="practice-title">Na prática<span>.</span></h2>
        <div className="profile-practice">
          <article>
            <h3>Sistema de Chamados de TI</h3>
            <p className="profile-copy">Aplicação full stack para registrar chamados, com API, banco de dados, autenticação, permissões por perfil e testes de endpoints.</p>
          </article>
          <article>
            <h3>Estudo de caso de QA · Instituto JogaJunto</h3>
            <p className="profile-copy">Testes exploratórios do portal, com registro de falhas, evidências e logs para documentar os resultados.</p>
          </article>
        </div>
      </section>

      <section className="profile-section profile-contact" aria-labelledby="profile-contact-title">
        <h2 id="profile-contact-title">Vamos conversar<span>?</span></h2>
        <a className="blue" href={whatsappUrl}>Falar com Alisson no WhatsApp</a>
      </section>
    </main>
  );
}
