import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuote } from "../actions";
import "../style/my.css";

export default function MyQuote() {
  const [quote, setQuote] = useState("");

  const dispatch = useDispatch();

  const { myQuote } = useSelector((state) => state);

  const onChangeHandler = (e) => {
    setQuote(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addQuote(quote));
    setQuote("");
  };

  return (
    <section id="myQuote">
      <hr className="myQuote-hr" />
      <h2>My Quotes</h2>
      <form onSubmit={submit}>
        <input type="text" value={quote} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      {myQuote.map((el, i) => {
        return <p key={i}>{el}</p>;
      })}
    </section>
  );
}
