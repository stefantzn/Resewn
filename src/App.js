import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SubSuggestionForm from './pages/SubSuggestionForm'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from "./pages/HomePage";
import LayoutBar from "./components/LayoutBar";

export const App = () => {
    return (
        <div>
            <Router>
                <LayoutBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/suggest" element={<SubSuggestionForm />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
