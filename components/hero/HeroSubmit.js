import React from "react";

export default function HeroSubmit() {
  return (
    <div className="success">
      <h1>Success! 🎉</h1>
      <p>
        Your message has been submitted. Thanks for submitting! 🎉
        <br />A representative will reach out to you to help you get started.
      </p>
      <style jsx>
        {`
          .success {
            text-align: center;
          }

          .success h2 {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
}
