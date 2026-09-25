import { useState } from "react";
import type { AuthMode, SignupStep, UserProfile } from "./types";

interface AuthProps {
  initialMode: AuthMode;
  onComplete: (profile: Partial<UserProfile>) => void;
  notify: (message: string) => void;
  loggedOutMessage?: string;
}

const INTENT_CHOICES = [
  {
    title: "Friends & side quests",
    desc: "Explore NYC with new people",
  },
  {
    title: "Nightlife & concerts",
    desc: "Go out with a crew",
  },
  {
    title: "Networking",
    desc: "Creative and career events",
  },
  {
    title: "Dating / double dates",
    desc: "Separate opt-in lane",
  },
];

export default function Auth({
  initialMode,
  onComplete,
  notify,
  loggedOutMessage,
}: AuthProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [step, setStep] = useState<SignupStep>(1);
  const [verified, setVerified] = useState(false);

  const [name, setName] = useState("Jiana");
  const [email, setEmail] = useState("jiana@example.com");
  const [intent, setIntent] = useState(INTENT_CHOICES[0].title);
  const [groupSize, setGroupSize] = useState("Small: 2–5 people");

  function handleLogin() {
    onComplete({
      verified: true,
    });
  }

  function handleVerify() {
    setVerified(true);
    notify("One-time prototype ID approval complete.");
  }

  function goToStep(nextStep: SignupStep) {
    if (nextStep === 3 && !verified) {
      notify("Please approve the sample ID before continuing.");
      return;
    }

    setStep(nextStep);
  }

  function finishSignup() {
    onComplete({
      name,
      email,
      verified: true,
      intent,
      groupSize,
    });
  }

  return (
    <section className="auth">
      <div className="auth-side">
        <div className="brand">
          <div className="mark">✦</div>
          involve.me
        </div>

        <h1>Find the people to go with.</h1>

        <p>
          Create an account once, complete a sample one-time 18+ ID check,
          and discover specific NYC plans with groups, costs, and activity
          details.
        </p>

        <div className="promise">
          <div>
            <span className="check">✓</span>
            Plan-first social discovery, not generic swiping.
          </div>

          <div>
            <span className="check">✓</span>
            Optional Host clips, group details, and price clarity.
          </div>

          <div>
            <span className="check">✓</span>
            Temporary crews with mutual commitment.
          </div>
        </div>
      </div>

      <div className="auth-main">
        <div className="auth-card">
          {mode === "login" && (
            <div>
              <h2>
                {loggedOutMessage ? "You have been logged out" : "Welcome back"}
              </h2>

              <p className="subtitle">
                {loggedOutMessage ||
                  "Log in to pick up your saved plans, active Dare, and crew requests."}
              </p>

              <div className="field">
                <label>Email</label>
                <input type="email" defaultValue="jiana@example.com" />
              </div>

              <div className="field">
                <label>Password</label>
                <input type="password" defaultValue="prototype" />
              </div>

              <button className="primary full" onClick={handleLogin}>
                Log in
              </button>

              <p className="auth-switch">
                New to Involve.me?{" "}
                <button
                  className="text-btn"
                  onClick={() => {
                    setMode("signup");
                    setStep(1);
                  }}
                >
                  Create an account
                </button>
              </p>
            </div>
          )}

          {mode === "signup" && (
            <div>
              <div className="progress">
                <span className={step >= 1 ? "active" : ""} />
                <span className={step >= 2 ? "active" : ""} />
                <span className={step >= 3 ? "active" : ""} />
              </div>

              {step === 1 && (
                <div>
                  <h2>Create your account</h2>

                  <p className="subtitle">
                    Your profile helps create safer, more relevant Plan First
                    matches.
                  </p>

                  <div className="field">
                    <label>First name</label>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label>Password</label>
                    <input type="password" defaultValue="prototype" />
                  </div>

                  <button
                    className="primary full"
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </button>

                  <p className="auth-switch">
                    Already have an account?{" "}
                    <button
                      className="text-btn"
                      onClick={() => setMode("login")}
                    >
                      Log in
                    </button>
                  </p>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2>Verify your identity</h2>

                  <p className="subtitle">
                    This is a one-time sample 18+ verification for the
                    prototype. Once approved, you will not be asked for ID
                    again.
                  </p>

                  <div className="idbox">
                    <strong>One-time identity verification</strong>

                    <p>
                      In production, a vetted identity provider should perform
                      this check and the app should minimize retained identity
                      data.
                    </p>

                    <div className="sample">
                      <span>Sample government ID</span>

                      <b style={{ color: verified ? "#17744b" : undefined }}>
                        {verified ? "Approved ✓" : "Ready to verify"}
                      </b>
                    </div>

                    <button
                      className="outline full"
                      style={{ marginTop: 10 }}
                      onClick={handleVerify}
                    >
                      {verified
                        ? "Sample ID approved"
                        : "Verify sample ID"}
                    </button>
                  </div>

                  <div className="auth-actions">
                    <button className="outline" onClick={() => setStep(1)}>
                      Back
                    </button>

                    <button
                      className="primary"
                      onClick={() => goToStep(3)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2>Set your social style</h2>

                  <p className="subtitle">
                    These choices shape your Plan First and Dare Crew matches.
                  </p>

                  <div className="field">
                    <label>What are you looking for?</label>

                    <div className="choice-grid">
                      {INTENT_CHOICES.map((choice) => (
                        <button
                          key={choice.title}
                          className={`choice ${
                            intent === choice.title ? "active" : ""
                          }`}
                          onClick={() => setIntent(choice.title)}
                        >
                          <b>{choice.title}</b>
                          <span>{choice.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>Ideal group size</label>

                    <select
                      value={groupSize}
                      onChange={(event) => setGroupSize(event.target.value)}
                    >
                      <option>Small: 2–5 people</option>
                      <option>Medium: 6–10 people</option>
                      <option>Large: 10+ people</option>
                    </select>
                  </div>

                  <div className="auth-actions">
                    <button className="outline" onClick={() => setStep(2)}>
                      Back
                    </button>

                    <button className="primary" onClick={finishSignup}>
                      Finish & enter app
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}