import styles from './css/Support.module.css'

export default function SupportPage() {
  return (
    <main className={`${styles.page} detail-page support-page`}>
      <section className="detail-hero">
        <h1>Você pode pedir ajuda.</h1>
        <p>
          Se houver perigo imediato, ligue 190. Para denúncias e orientação,
          estes canais públicos podem acolher e encaminhar sua demanda. Você
          também pode pedir ajuda para alguém de confiança.
        </p>
      </section>

      <div className="support-grid">
        <article className="support-card support-purple">
          <span>01 / </span><h2>Ligue 180</h2>
          <p>Central de Atendimento à Mulher. Oferece orientação, informações sobre direitos e recebe denúncias de violência contra mulheres.</p>
          <a href="https://www.gov.br/mulheres/pt-br/ligue180" target="_blank" rel="noreferrer">Acessar informações oficiais</a>
        </article>
        <article className="support-card support-green">
          <span>02 / </span><h2>Disque 100</h2>
          <p>Disque Direitos Humanos. Recebe denúncias de violações de direitos humanos, incluindo casos contra pessoas LGBTQIA+, população negra, crianças, idosos e pessoas com deficiência.</p>
          <a href="https://www.gov.br/mdh/pt-br/ondh" target="_blank" rel="noreferrer">Acessar Ouvidoria Nacional</a>
        </article>
        <article className="support-card support-orange">
          <span>03 / </span><h2>190</h2>
          <p>Polícia Militar. Ligue em situações de emergência ou quando houver risco imediato à integridade física.</p>
          <p className="support-no-link">Serviço de emergência · Brasil</p>
        </article>
        <article className="support-card support-blue">
          <span>04 / </span><h2>Serviços locais e ONGs</h2>
          <p>Busque Defensoria Pública, Centros de Referência, serviços municipais de direitos humanos e organizações reconhecidas de sua região. Verifique endereço, atendimento e canais oficiais antes de compartilhar dados pessoais.</p>
          <a href="https://www.gov.br/pt-br/servicos/buscar-servicos-de-direitos-humanos" target="_blank" rel="noreferrer">Buscar serviços de direitos humanos</a>
        </article>
      </div>

    </main>
  )
}
