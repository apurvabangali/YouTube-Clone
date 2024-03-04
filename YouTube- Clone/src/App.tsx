
import { PageHeader } from "./layouts/PageHeader"

import { Sidebar } from "./layouts/Sidebar"
import { SidebarProvider } from "./contexts/SidebarContext"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import YourVideos from "./layouts/YourVideos"
import MainPage from "./layouts/MainPage"



export default function App() {
  
  return (
    <div>
      <BrowserRouter>
       <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar /> 
            <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/your-videos" element={<YourVideos/>}/>  
            </Routes>
          </div>
        </div>
    </SidebarProvider>
    </BrowserRouter>
    </div>
  )
}
