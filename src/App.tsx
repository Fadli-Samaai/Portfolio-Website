import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/404";
import { AboutSection } from "./components/AboutSection";
import { SkillSection } from "./components/SkillSection";
import { ProjectSection } from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";
import ErrorBoundary from './components/ErrorBoundary';

function App() {


  return (
    <>
      <ErrorBoundary>
        <BrowserRouter basename="/Portfolio-Website/">
          <Routes>
            <Route index element={<Home />}/>
            <Route index element={<AboutSection />}/>
            <Route index element={<SkillSection />}/>
            <Route index element={<ProjectSection />}/>
            <Route index element={<ContactSection />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
