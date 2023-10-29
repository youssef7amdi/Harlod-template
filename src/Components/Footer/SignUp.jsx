import { useState } from "react";

function SignUp() {
  const [subscribe, setSubscribe] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribe("");
  }

  return (
    <div className="sign-up">
      <h4>Sign up</h4>
      <p>Follow our newsletter to stay updated about agency.</p>
      <form className="form-subscribe" onSubmit={handleSubscribe}>
        <input
          type="text"
          className="input-subscribe"
          placeholder="subscribe"
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
        />
        <button type="submit" className="btn-subscribe">
          Go
        </button>
      </form>
    </div>
  );
}

export default SignUp;
