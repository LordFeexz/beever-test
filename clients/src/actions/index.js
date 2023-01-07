import axios from "axios";
const url = `https://api.kanye.rest`;

export const fetchQuote = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "get",
      url,
    });

    dispatch({
      type: "getQoute",
      payload: data.quote,
    });
  } catch (err) {
    console.log(err);
  }
};

export const favQuote = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const { quote, fav } = state;

    if (!fav.includes(quote)) {
      fav.push(quote);
      dispatch({
        type: "getFav",
        payload: fav,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addQuote = (payload) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { myQuote } = state;

    if (
      !myQuote.map((el) => el.toLowerCase()).includes(payload.toLowerCase())
    ) {
      myQuote.push(payload);

      dispatch({
        type: "addQuote",
        payload: myQuote,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
