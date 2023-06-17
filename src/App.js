import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import MovieList from "./routes/MovieList";
import DetailPage from "./routes/DetailPage";

function App() {
    return (
        <RecoilRoot>
            <Router basename={process.env.PUBLIC_URL}>
                <GlobalStyle />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<DetailPage />} />
                    <Route path="/page/:detail/:num" element={<MovieList />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
