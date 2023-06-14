import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Home from "./routes/Home";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
