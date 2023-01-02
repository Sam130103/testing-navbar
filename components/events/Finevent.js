import React from 'react';

const Finevent = ({ evname, evdep }) => (
  <div className="backevent">
    {/* title */}
    <section className="container-wrapper intro">
      <h3 className="section-title --bottom-decoration">O que é a <br className="text-break" />Imersão DEV?</h3>
      <div className="intro__video-container">
        <img src="/home.jpg" alt="Girl in a jacket" />
      </div>
    </section>
    <div style={{ textAlign: 'center' }}>

      <h1 className="page-logo " alt="some text" width="40%" height="40%" id="efeitologo"
        style={{ fontSize: '50px' ,fontFamily:'Stonefont'}}
      > Techno<span style={{color:'#3C89f6',fontFamily:'Stonefont'}}>Vanza</span>
      </h1>
    </div>
    <br />
    <main className="container-wrapper opening maincla">
      <h1 className="opening__logo" style={{ fontSize: '30px' }}>{evname}</h1>
      <h1 className="opening__title">{evname}<br className="text-break" />{evdep}</h1>
    </main>
    {/* ABout sectionn  date venue timings */}
    <section className="container-wrapper about-event">
      <ul className="about-event__steps">
        <li className="about-event__step">
          <img src="https://lipez800.github.io/icon-evento-gratuito.1616501197.svg" alt="Icone de Dinheiro"
            className="about-event__step-icon"
          />
          <span className="about-event__step-description">Evento Gratuito</span>
        </li>
        <li className="about-event__step">
          <img src="https://lipez800.github.io/icon-evento-data.1616501197.svg" alt=""
            className="about-event__step-icon"
          />
          <span className="about-event__step-description">De 22 de Março <br className="text-break --medium" />a 2 de
            Abril
          </span>
        </li>
        <li className="about-event__step">
          <img src="https://lipez800.github.io/icon-evento-portfolio.1616501197.svg" alt=""
            className="about-event__step-icon"
          />
          <span className="about-event__step-description">Comece o seu portfólio</span>
        </li>
        <li className="about-event__step">
          <img src="https://lipez800.github.io/icon-evento-certificado.1616501197.svg" alt=""
            className="about-event__step-icon"
          />
          <span className="about-event__step-description">Apoio dos professores <br className="text-break --tablet" /> e
            comunidade
          </span>
        </li>
      </ul>
      {/* Steps to event */}
      <div className="background-decoration" />
      <h3 className="section-title --top-decoration">Como <br className="section-title-block" />funciona?</h3>
      <ul className="schedule__list">
        <li className="schedule__item">
          <div className="schedule__item-decoration" />
          <span className="schedule__item-title">Aulas todos os dias</span>
          <div className="code-container">
            <div className="code-container__buttons">
              <span className="code-container__window-button --red" />
              <span className="code-container__window-button --yellow" />
              <span className="code-container__window-button --green" />
            </div>
            <p className="code-container__description">
              Logo no 1º dia você já vai escrever seu primeiro código! <br /> Não é necessário nenhum
              pré-requisito.
            </p>
          </div>
        </li>
        <li className="schedule__item">
          <div className="schedule__item-decoration" />
          <span className="schedule__item-title">Desafios</span>
          <div className="code-container">
            <div className="code-container__buttons">
              <span className="code-container__window-button --red" />
              <span className="code-container__window-button --yellow" />
              <span className="code-container__window-button --green" />
            </div>
            <p className="code-container__description">
              Acreditamos que o <strong>melhor aprendizado é na prática.</strong> Por isso, teremos diversos
              desafios para consolidar seu conhecimento e evoluir em programação mesmo sem ter tido
              experiência prévia.
            </p>
          </div>
        </li>
        <li className="schedule__item">
          <div className="schedule__item-decoration" />
          <span className="schedule__item-title">Didática Alura</span>
          <div className="code-container">
            <div className="code-container__buttons">
              <span className="code-container__window-button --red" />
              <span className="code-container__window-button --yellow" />
              <span className="code-container__window-button --green" />
            </div>
            <p className="code-container__description">
              Todas as aulas estão sendo construídas a partir da didática Alura, com especialistas em
              programação
              e com a qualidade da maior escola de tecnologia online do Brasil.
            </p>
          </div>
        </li>
        <li className="schedule__item">
          <div className="schedule__item-decoration" />
          <span className="schedule__item-title">Comunidade</span>
          <div className="code-container">
            <div className="code-container__buttons">
              <span className="code-container__window-button --red" />
              <span className="code-container__window-button --yellow" />
              <span className="code-container__window-button --green" />
            </div>
            <p className="code-container__description">
              Os nossos instrutores e instrutoras estarão disponíveis para correção de exercícios eresponder dúvidas no Discord exclusivo para a Imersão Dev. Você também vai poder
              conhecer pessoas que estão no mesmo nível que o seu, discutir sobre carreira e trocar
              experiências práticas.
            </p>
          </div>
        </li>
      </ul>

    </section>
    <div />

    {/* for spacecraft gif */}
    <div style={{ textAlign: 'center' }}><img
      src="https://www.imagensanimadas.com/data/media/179/mergulho-imagem-animada-0056.gif" className="page-logo"
      alt="some text"
    />
    </div>

    <section className="container-wrapper technologies-taught">
      <h3 className="section-title --top-decoration">O que você <br className="section-title-block" />vai aprender?</h3>
      <div className="technologies-taught__code-wrapper">
        <div className="technologies-taught__code-container">
          <ol className="technologies-taught__list">
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">01</span>
              <p className="technologies-taught__text">
                Entender <strong className="code-pink">HTML </strong>, <strong className="code-blue">CSS</strong> e
                <strong className="code-green">Javascript</strong> do zero.
              </p>
            </li>
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">02</span>
              <p className="technologies-taught__text">
                <strong className="code-pink">Encarar</strong> desafios personalizados.
              </p>
            </li>
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">03</span>
              <p className="technologies-taught__text">
                Você vai <strong className="code-blue">criar seu portfolio</strong>, desde o 1º dia.
              </p>
            </li>
          </ol>
        </div>
        <div className="technologies-taught__code-container">
          <ol className="technologies-taught__list">
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">04</span>
              <p className="technologies-taught__text">
                Conhecer e Participar da <strong className="code-green">comunidade developer</strong>.
              </p>
            </li>
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">05</span>
              <p className="technologies-taught__text">
                <strong className="code-pink">Assistir </strong> a lives exclusivas
                com especialistas no assunto.
              </p>
            </li>
            <li className="technologies-taught__item">
              <span className="technologies-taught__number">06</span>
              <p className="technologies-taught__text">
                Ao final, obter um <strong className="code-blue">portfólio</strong> que comprova sua
                participação e conhecimento.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section className="container-wrapper instructors">
      <h3 className="section-title --bottom-decoration">Aprenda com quem <br className="text-break --medium" />domina o assunto
      </h3>
      <ul className="instructors__list">
        <li className="instructors__list-item">
          <article className="instructors__card">
            <img src="https://lipez800.github.io/instrutora-rafaella.1616501197.jpeg" alt=""
              className="instructors__photo"
            />
            <h4 className="instructors__name">Rafaella Ballerini</h4>
            <p className="instructors__description">
              Instrutora de Front-end na Alura, criadora de conteúdo e cursa Engenharia de Software e Análise
              de Desenvolvimento de Sistemas.
            </p>
            <div className="instructors__links-wrapper">
              <a href="https://www.linkedin.com/in/rafaella-ballerini-45875016a/">
                <img src="https://lipez800.github.io/logo-linkedin.1616501197.svg" alt=""
                  className="instructors__link"
                />
              </a>
              <a href="https://www.instagram.com/rafaballerini/">
                <img src="https://lipez800.github.io/instagram_icon.1616501197.webp" alt=""
                  className="instructors__link --instagram-logo"
                />
              </a>
            </div>
          </article>
        </li>
        <li className="instructors__list-item">
          <article className="instructors__card">
            <img src="https://lipez800.github.io/instrutor-guilherme.1616501197.jpeg" alt=""
              className="instructors__photo"
            />
            <h4 className="instructors__name">Guilherme Lima</h4>
            <p className="instructors__description">
              Desenvolvedor e Instrutor na Alura, especialista em Javascript, Python, Django e Ruby, bacharel
              em Tecnologia da Informação pela UMC.
            </p>
            <div className="instructors__links-wrapper">
              <a href="https://www.linkedin.com/in/guilherme-lima-developer">
                <img src="https://lipez800.github.io/logo-linkedin.1616501197.svg" alt=""
                  className="instructors__link"
                />
              </a>
              <a href="https://instagram.com/guilhermelimadev">
                <img src="https://lipez800.github.io/instagram_icon.1616501197.webp" alt=""
                  className="instructors__link --instagram-logo"
                />
              </a>
            </div>
          </article>
        </li>
        <li className="instructors__list-item">
          <article className="instructors__card">
            <img src="https://lipez800.github.io/instrutor-paulo.1616501197.jpeg" alt=""
              className="instructors__photo"
            />
            <h4 className="instructors__name">Paulo Silveira</h4>
            <p className="instructors__description">
              Co-fundador e CEO da Alura. É bacharel em Ciência da Computação e Mestre pela USP em Geometria
              computacional.
            </p>
            <div className="instructors__links-wrapper">
              <a href="https://www.linkedin.com/in/paulosilveira/">
                <img src="https://lipez800.github.io/logo-linkedin.1616501197.svg" alt=""
                  className="instructors__link"
                />
              </a>
              <a href="https://www.instagram.com/paulo_hipster/">
                <img src="https://lipez800.github.io/instagram_icon.1616501197.webp" alt=""
                  className="instructors__link --instagram-logo"
                />
              </a>
            </div>
          </article>
        </li>
      </ul>
    </section>

    {/* FAQ */}
    <div className="blue-line" />
    <section className="container-wrapper faq">
      <h3 className="section-title --bottom-decoration">FAQ <br className="faq__text-break" />TExt</h3>
      <div className="faq__question-container">
        <input type="checkbox" className="faq__question-toggle" id="question-1" />
        <svg version="1.1" className="faq__arrow-decoration" fill="white" xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 529.578 529.578">
          <g>
            <g>
              <path
                d="M266.032,529.578c146.691,0,263.546-119.342,263.546-263.546S410.237,0,266.032,0S0,119.342,0,266.032 S119.342,529.578,266.032,529.578z M266.032,24.863c131.773,0,238.683,106.91,238.683,238.683s-106.91,238.683-238.683,238.683 S27.349,395.319,27.349,263.546S134.259,24.863,266.032,24.863z"
              />
              <path
                d="M261.06,348.08c2.486,2.486,4.973,2.486,7.459,2.486s4.973,0,7.459-2.486L407.75,228.738 c4.973-4.973,4.973-12.431,0-17.404c-4.973-4.973-12.431-4.973-17.404,0L266.032,323.217L141.718,211.334 c-4.973-4.973-12.431-4.973-17.404,0c-4.973,4.973-4.973,12.431,0,17.404L261.06,348.08z"
              />
            </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
        <label htmlFor="question-1" className="faq__question">1. Até quando vão as inscrições?</label>
        <p className="faq__answer">
          As inscrições deverão ser feitas pelo site <a href="https://imersao.dev/">https://www.imersao.dev </a>
          até domingo, dia 21 de Março às 23h59.
        </p>
      </div>
      <div className="faq__question-container">
        <input type="checkbox" className="faq__question-toggle" id="question-2" />
        <svg version="1.1" className="faq__arrow-decoration" fill="white" xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 529.578 529.578">
          <g>
            <g>
              <path
                d="M266.032,529.578c146.691,0,263.546-119.342,263.546-263.546S410.237,0,266.032,0S0,119.342,0,266.032 S119.342,529.578,266.032,529.578z M266.032,24.863c131.773,0,238.683,106.91,238.683,238.683s-106.91,238.683-238.683,238.683 S27.349,395.319,27.349,263.546S134.259,24.863,266.032,24.863z"
              />
              <path
                d="M261.06,348.08c2.486,2.486,4.973,2.486,7.459,2.486s4.973,0,7.459-2.486L407.75,228.738 c4.973-4.973,4.973-12.431,0-17.404c-4.973-4.973-12.431-4.973-17.404,0L266.032,323.217L141.718,211.334 c-4.973-4.973-12.431-4.973-17.404,0c-4.973,4.973-4.973,12.431,0,17.404L261.06,348.08z"
              />
            </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
        <label htmlFor="question-2" className="faq__question">2. Já estudo na Alura, posso participar?</label>
        <p className="faq__answer">
          Claro! Tanto quem já estuda com a gente quanto quem ainda não é assinante da Alura pode participar.
        </p>
      </div>
      <div className="faq__question-container">
        <input type="checkbox" className="faq__question-toggle" id="question-3" />
        <svg version="1.1" className="faq__arrow-decoration" fill="white" xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 529.578 529.578">
          <g>
            <g>
              <path
                d="M266.032,529.578c146.691,0,263.546-119.342,263.546-263.546S410.237,0,266.032,0S0,119.342,0,266.032 S119.342,529.578,266.032,529.578z M266.032,24.863c131.773,0,238.683,106.91,238.683,238.683s-106.91,238.683-238.683,238.683 S27.349,395.319,27.349,263.546S134.259,24.863,266.032,24.863z"
              />
              <path
                d="M261.06,348.08c2.486,2.486,4.973,2.486,7.459,2.486s4.973,0,7.459-2.486L407.75,228.738 c4.973-4.973,4.973-12.431,0-17.404c-4.973-4.973-12.431-4.973-17.404,0L266.032,323.217L141.718,211.334 c-4.973-4.973-12.431-4.973-17.404,0c-4.973,4.973-4.973,12.431,0,17.404L261.06,348.08z"
              />
            </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
        <label htmlFor="question-3" className="faq__question">3. Quanto custa para eu participar?</label>
        <p className="faq__answer">
          Nada! A participação é totalmente gratuita.
        </p>
      </div>
      <div className="faq__question-container">
        <input type="checkbox" className="faq__question-toggle" id="question-4" />
        <svg version="1.1" className="faq__arrow-decoration" fill="white" xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 529.578 529.578">
          <g>
            <g>
              <path
                d="M266.032,529.578c146.691,0,263.546-119.342,263.546-263.546S410.237,0,266.032,0S0,119.342,0,266.032 S119.342,529.578,266.032,529.578z M266.032,24.863c131.773,0,238.683,106.91,238.683,238.683s-106.91,238.683-238.683,238.683 S27.349,395.319,27.349,263.546S134.259,24.863,266.032,24.863z"
              />
              <path
                d="M261.06,348.08c2.486,2.486,4.973,2.486,7.459,2.486s4.973,0,7.459-2.486L407.75,228.738 c4.973-4.973,4.973-12.431,0-17.404c-4.973-4.973-12.431-4.973-17.404,0L266.032,323.217L141.718,211.334 c-4.973-4.973-12.431-4.973-17.404,0c-4.973,4.973-4.973,12.431,0,17.404L261.06,348.08z"
              />
            </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
        <label htmlFor="question-4" className="faq__question">4. A inscrição na Imersão DEV me dá acesso aos cursos da
          Alura?
        </label>
        <p className="faq__answer">
          Não. As aulas estão sendo preparadas e serão inéditas. Os conteúdos não estão relacionados à plataforma
          Alura.
        </p>
      </div>
      <div className="faq__question-container">
        <input type="checkbox" className="faq__question-toggle" id="question-5" />
        <svg version="1.1" className="faq__arrow-decoration" fill="white" xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 529.578 529.578">
          <g>
            <g>
              <path
                d="M266.032,529.578c146.691,0,263.546-119.342,263.546-263.546S410.237,0,266.032,0S0,119.342,0,266.032 S119.342,529.578,266.032,529.578z M266.032,24.863c131.773,0,238.683,106.91,238.683,238.683s-106.91,238.683-238.683,238.683 S27.349,395.319,27.349,263.546S134.259,24.863,266.032,24.863z"
              />
              <path
                d="M261.06,348.08c2.486,2.486,4.973,2.486,7.459,2.486s4.973,0,7.459-2.486L407.75,228.738 c4.973-4.973,4.973-12.431,0-17.404c-4.973-4.973-12.431-4.973-17.404,0L266.032,323.217L141.718,211.334 c-4.973-4.973-12.431-4.973-17.404,0c-4.973,4.973-4.973,12.431,0,17.404L261.06,348.08z"
              />
            </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
        <label htmlFor="question-5" className="faq__question">5. Me inscrevi na Imersão Dev 2ª edição, devo me logar pela
          página da plataforma Alura para assistir às aulas?
        </label>
        <p className="faq__answer">
          Não. As aulas serão fora da plataforma Alura. Todos os dias enviaremos um e-mail com o link da aula.
          Nenhum login é necessário.
        </p>
      </div>
    </section>
    <div>

      <body />
    </div>
  </div>
);

export default Finevent;
