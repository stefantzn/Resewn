import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SubSuggestionForm from './pages/SubSuggestionForm'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from "./pages/HomePage";
import LayoutBar from "./components/LayoutBar";
import Cart from "./pages/Cart";
import Shop from "./components/Shop.js"

export const App = () => {
    return (
        <div>
            <Router>
                <LayoutBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/suggest" element={<SubSuggestionForm />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
