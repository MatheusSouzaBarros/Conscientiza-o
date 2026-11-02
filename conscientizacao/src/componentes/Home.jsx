import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './css/Home.module.css'

const heroSlides = [
  { image: '/images/misoginia.jpg', label: '' },
  { image: '/images/transfobia.jpg', label: '' },
  { image: '/images/homofobia.jpg', label: '' },
  { image: '/images/racismo.jpg', label: '' },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className={styles.home}>
      <section className="hero-wrap">
        <div className="hero-copy">
          <h1>Uma sociedade mais justa começa com <em>escuta.</em></h1>
          <p className="hero-lede">
            Entender as diferentes formas de discriminação é um passo essencial
            para enfrentá-las. Aqui você encontra informação, direitos e caminhos
            de apoio.
          </p>
          <a className="primary-link" href="#temas">Conheça os temas</a>
        </div>
        <div
          className="hero-image-slot"
          role="img"
          aria-label={`Imagem sobre ${heroSlides[activeSlide].label}`}
          style={{ backgroundImage: `url("${heroSlides[activeSlide].image}")` }}
        >
          <div className="slide-dots" aria-label="Imagens por tema">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                className={index === activeSlide ? 'active' : ''}
                type="button"
                aria-label={`Mostrar imagem: ${slide.label}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="topics section" id="temas">
        <div className="section-heading">
          <div>
            <h2>Quatro temas. Uma causa comum.</h2>
          </div>
          <p>Explore cada tema para conhecer o contexto, dados disponíveis e a legislação brasileira.</p>
        </div>

        <div className="topic-grid">
          <Link className="topic-card card-women" to="/tema/misoginia">
            <h3>Misoginia</h3><p>Violência e discriminação contra mulheres, em suas diversas formas.</p>
          </Link>
          <Link className="topic-card card-trans" to="/tema/transfobia">
            <h3>Transfobia</h3><p>Preconceito e violência contra pessoas trans e travestis.</p>
          </Link>
          <Link className="topic-card card-gay" to="/tema/homofobia">
            <h3>Homofobia</h3><p>Discriminação por orientação sexual e expressão de afeto.</p>
          </Link>
          <Link className="topic-card card-race" to="/tema/racismo">
            <h3>Racismo</h3><p>Desigualdades e violências baseadas em raça e cor.</p>
          </Link>
        </div>
      </section>

      <section className="callout">
        <div>
          <h2>Precisa de orientação ou quer denunciar?</h2>
        </div>
        <Link className="light-link" to="/apoio">Ver canais de apoio</Link>
      </section>
    </main>
  )
}
