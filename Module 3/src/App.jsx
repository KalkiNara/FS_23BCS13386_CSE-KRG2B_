import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
