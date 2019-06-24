import axios from "axios";

export const formSubmission = data =>
  new Promise((resolve, reject) => {
    if (!data) reject(console.log("No data received"));

    // Send data to integromat
    axios
      .post(
        "https://hook.integromat.com/an507o4f38q7r2r7pfat6u3qs3o8p3mz",
        data
      )
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(new Error(err)));
  });
