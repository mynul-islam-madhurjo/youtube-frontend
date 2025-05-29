import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import MainContent from '@/components/layout/MainContent'


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* <Sidebar /> */}
        {/* <MainContent /> */}
      </div>
    </div>
  )
}