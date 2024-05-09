import { Route, Routes } from "react-router-dom";
import Navbar from "./global_components/navbar";
import Home from "./pages/home";
import Article from "./pages/article";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery.tsx";
import ArticleFull from "./pages/articleFull";
import Contributor from "./pages/contributor";

function App() {
	localStorage.setItem("theme-no", 0);
	return (
		<div>
			<Navbar bg="bg-transparent" shadow="" round="" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/article" element={<Article />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/contributor" element={<Contributor />} />
				<Route path="/articlefull" element={<ArticleFull />} />
			</Routes>
		</div>
	);
}

export default App;
/*
<Routes>
				<Route exact path="/" element={<Navbar bg="bg-transparent" shadow="" round=""/>} />
				<Route exact path="/article" element={<Navbar bg="from-white/5 via-white/10 via-65% to-white/30" shadow="shadow-2xl shadow-black" round="rounded-b-2xl"/>} />
			</Routes>

{!path && <Navbar bg="bg-transparent" shadow="" round=""/>}
			{path && <Navbar bg="from-white/5 via-white/10 via-65% to-white/30" shadow="shadow-2xl shadow-black" round="rounded-b-2xl"/>}

*/