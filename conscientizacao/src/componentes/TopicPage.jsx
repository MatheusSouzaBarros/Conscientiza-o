import { Link, useParams } from 'react-router-dom'
import styles from './css/Topic.module.css'

function TopicLayout({ number, label, title, intro, statTitle, statText, statSource, laws, lawLink, lawLabel }) {
  return (
    <main className={`${styles.page} detail-page`}>
      <Link className="back-link" to="/">Voltar aos temas</Link>
      <section className="detail-hero">
        <span className="detail-number">{number} / 04</span>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <div className="detail-grid">
        <section className="stat-panel">
          <p className="eyebrow">Dado em contexto</p>
          <h2>{statTitle}</h2>
          <p>{statText}</p>
          <small>Fonte: {statSource}</small>
        </section>
        <section className="law-panel">
          <p className="eyebrow">Marco legal no Brasil</p>
          <h2>Direitos e proteção</h2>
          <ul>{laws}</ul>
          <a href={lawLink} target="_blank" rel="noreferrer" className="text-link">{lawLabel}</a>
          <p className="legal-note">
            Conteúdo informativo, não substitui orientação jurídica. A legislação
            pode ser atualizada; consulte o texto oficial.
          </p>
        </section>
      </div>
      <section className="help-strip">
        <span>Se precisar de acolhimento, conheça os canais públicos.</span>
        <Link to="/apoio">Canais de apoio</Link>
      </section>
    </main>
  )
}

export default function TopicPage() {
  const { tema } = useParams()

  if (tema === 'misoginia') {
    return <TopicLayout number="01" label="Gênero" title="Misoginia"
      intro="Misoginia é o desprezo, a hostilidade ou o preconceito contra mulheres. Pode aparecer em atitudes cotidianas, assédio, violência doméstica, discriminação no trabalho e violência política. Não é um problema individual: está ligada a desigualdades históricas que podem ser enfrentadas com informação, proteção e responsabilização."
      statTitle="1.492 feminicídios foram registrados no Brasil em 2024."
      statText="O dado consta do Anuário Brasileiro de Segurança Pública 2025 e evidencia a dimensão da violência letal de gênero. Registros oficiais dependem de notificação e podem não refletir todas as ocorrências."
      statSource="Anuário Brasileiro de Segurança Pública 2025"
      laws={<>
        <li><strong>Lei Maria da Penha (Lei nº 11.340/2006):</strong> estabelece mecanismos para prevenir e coibir a violência doméstica e familiar contra a mulher e prevê medidas protetivas.</li>
        <li><strong>Lei do Feminicídio (Lei nº 14.994/2024):</strong> tornou o feminicídio crime autônomo e agravou penas relacionadas à violência contra a mulher.</li>
        <li><strong>Lei nº 14.192/2021:</strong> estabelece normas para prevenir, reprimir e combater a violência política contra a mulher.</li>
      </>}
      lawLink="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm" lawLabel="Consultar Lei Maria da Penha" />
  }

  if (tema === 'transfobia') {
    return <TopicLayout number="02" label="Identidade de gênero" title="Transfobia"
      intro="Transfobia é a discriminação, hostilidade ou violência dirigida a pessoas trans e travestis por sua identidade ou expressão de gênero. Ela pode ocorrer em espaços públicos, na família, na escola, no trabalho ou ao buscar serviços. Respeitar o nome, os pronomes e a autonomia de cada pessoa é parte fundamental da convivência e da garantia de direitos."
      statTitle="A violência contra pessoas trans permanece subnotificada."
      statText="O Brasil não possui uma série nacional plenamente integrada de registros sobre violência contra pessoas trans. Organizações da sociedade civil acompanham os casos, mas seus levantamentos não equivalem a estatísticas oficiais e podem captar apenas parte das ocorrências."
      statSource="ANTRA — dossiês anuais sobre assassinatos e violências contra travestis e transexuais"
      laws={<>
        <li><strong>ADO 26 e MI 4.733 (STF, 2019):</strong> enquanto não houver lei específica, atos de homofobia e transfobia são enquadrados nos tipos da Lei nº 7.716/1989, conforme a decisão do STF.</li>
        <li><strong>Decreto nº 8.727/2016:</strong> dispõe sobre o uso do nome social e o reconhecimento da identidade de gênero na administração pública federal.</li>
        <li><strong>Lei nº 7.716/1989:</strong> define crimes resultantes de discriminação ou preconceito; sua aplicação segue a interpretação do STF.</li>
      </>}
      lawLink="https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=414010" lawLabel="Ler decisão do STF sobre homotransfobia" />
  }

  if (tema === 'homofobia') {
    return <TopicLayout number="03" label="Orientação sexual" title="Homofobia"
      intro="Homofobia é o preconceito ou a discriminação contra pessoas por sua orientação sexual, real ou percebida. Pode se manifestar por agressões, ameaças, exclusão, assédio ou impedimento de acesso a direitos. Acolhimento, respeito e denúncia segura ajudam a interromper ciclos de violência."
      statTitle="O Disque 100 recebe denúncias de violações de direitos humanos."
      statText="O canal gratuito do Ministério dos Direitos Humanos e da Cidadania recebe denúncias relacionadas à população LGBTQIA+ e a outros grupos. Os registros são encaminhados aos órgãos competentes; denunciar é uma opção da pessoa afetada ou de quem testemunhou a violação."
      statSource="Ouvidoria Nacional de Direitos Humanos — Disque 100"
      laws={<>
        <li><strong>ADO 26 e MI 4.733 (STF, 2019):</strong> a homofobia foi enquadrada nos tipos previstos na Lei nº 7.716/1989 até que o Congresso edite legislação específica.</li>
        <li><strong>Lei nº 7.716/1989:</strong> define crimes resultantes de discriminação ou preconceito, aplicada conforme a interpretação do STF.</li>
        <li><strong>Decreto nº 8.727/2016:</strong> garante o uso do nome social na administração pública federal, relevante também para pessoas LGBTQIA+ trans.</li>
      </>}
      lawLink="https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=414010" lawLabel="Ler decisão do STF sobre homotransfobia" />
  }

  if (tema === 'racismo') {
    return <TopicLayout number="04" label="Equidade racial" title="Racismo"
      intro="Racismo é uma forma estrutural e interpessoal de discriminação que produz desigualdades e restringe direitos com base em raça, cor ou etnia. Pode ocorrer em relações individuais e também em práticas institucionais que limitam oportunidades, acesso e tratamento digno. Reconhecer essas manifestações é essencial para combatê-las."
      statTitle="A injúria racial passou a ser tipificada na Lei de Crimes Raciais."
      statText="A Lei nº 14.532/2023 equiparou a injúria racial ao crime de racismo, alterando a Lei nº 7.716/1989. Para dados de ocorrência e vitimização, consulte publicações oficiais e considere que registros policiais não abrangem todos os episódios."
      statSource="Lei nº 14.532/2023 — Portal da Legislação"
      laws={<>
        <li><strong>Lei nº 7.716/1989:</strong> define crimes resultantes de discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional.</li>
        <li><strong>Lei nº 14.532/2023:</strong> tipifica a injúria racial como crime de racismo e altera a Lei nº 7.716/1989.</li>
        <li><strong>Estatuto da Igualdade Racial (Lei nº 12.288/2010):</strong> estabelece diretrizes para garantir à população negra igualdade de oportunidades e combater a discriminação.</li>
      </>}
      lawLink="https://www.planalto.gov.br/ccivil_03/leis/l7716.htm" lawLabel="Consultar Lei de Crimes Raciais" />
  }

  return (
    <main className={`${styles.page} not-found`}>
      <p className="eyebrow">Página não encontrada</p>
      <h1>Esse caminho não existe.</h1>
      <Link className="primary-link" to="/">Voltar ao início</Link>
    </main>
  )
}
