import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import MainContent from '@/components/layout/MainContent'

/**
 * Main page component - YouTube homepage layout
 */
export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      
      {/* Header - Fixed at top */}
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar - Left navigation */}
        {/* <Sidebar /> */}
        
        <MainContent />
        
      </div>
    </div>
  )
}