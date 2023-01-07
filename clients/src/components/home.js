import KanyeQuote from "./kanyeQuote";
import MyQuote from "./myQuote";
import "../style/my.css";

export default function Home() {
  return (
    <main id="home">
      <div className="kanye-link">
        <a href="https://kanye.rest">API SITE</a>
      </div>
      <KanyeQuote />
      <MyQuote />
    </main>
  );
}
