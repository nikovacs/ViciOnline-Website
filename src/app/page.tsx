import About from "./components/About";
import Primary from "./components/Primary";
import './page.css';

export default function Home() {
  return (
    <main>
      <div className="home-main">
        <Primary />
        <About />
      </div>
    </main>
  );
}
