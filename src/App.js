import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SubSuggestionForm from './pages/SubSuggestionForm'
import NotFoundPage from './pages/NotFoundPage'
import LandingPage from "./pages/LandingPage";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/suggest" element={<SubSuggestionForm />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
