import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favQuote, fetchQuote } from "../actions";
import "../style/my.css";

export default function KanyeQuote() {
  const { quote, fav } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const generate = () => {
    dispatch(fetchQuote());
  };

  const favQuoteHandler = () => {
    dispatch(favQuote());
  };

  return (
    <section id="kanyeQuote">
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        className="kanye-img"
      />
      <h1 className="kanye-quote">{quote ? quote : "Kanye-West Quote"}</h1>

      <button onClick={generate} className="quote">
        Get Quote
      </button>
      <button onClick={favQuoteHandler} className="quote">
        Add Favorite
      </button>
      {fav.map((el, i) => {
        return <p key={i}>{el}</p>;
      })}
    </section>
  );
}
