import { useState } from 'react'
import Header from './components/Header'
import LinkDirectory from './components/LinkDirectory'
import { TAGS, WEBSITE_LINKS } from './data/mockData'

function App() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        tags={TAGS} 
        activeTag={activeTag} 
        setActiveTag={setActiveTag} 
      />
      <main className="container mx-auto px-4">
        <LinkDirectory 
          websites={WEBSITE_LINKS} 
          activeTag={activeTag} 
        />
      </main>
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>BuyLow - Find the best deals across the web</p>
          <p className="mt-1">© {new Date().getFullYear()} BuyLow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
