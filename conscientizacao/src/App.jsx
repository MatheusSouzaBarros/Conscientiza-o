import { Route, Routes } from 'react-router-dom'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import TopicPage from './componentes/TopicPage.jsx'
import SupportPage from './componentes/SupportPage.jsx'
import styles from './componentes/css/App.module.css'

export default function App() {
  return (
    <div className={`${styles.app} app-shell`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tema/:tema" element={<TopicPage />} />
        <Route path="/apoio" element={<SupportPage />} />
        <Route path="*" element={<TopicPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
