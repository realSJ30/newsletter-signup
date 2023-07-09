import { useCallback, useState } from "react";
import FormDesktop from "./components/FormDesktop";
import FormMobile from "./components/FormMobile";
import SuccessModalDesktop from "./components/SuccessModalDesktop";
import SuccessModalMobile from "./components/SuccessModalMobile";

function App() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      setIsError(true);
    } else {
      setIsError(false);
      setSuccess(true);
      console.log("Success");
    }
  };

  const handleDismiss = useCallback(() => {
    setSuccess(false);
    setEmail("");
  }, []);

  return (
    <div className="flex h-screen bg-dark-slate-gray-0 items-center justify-center">
      {!success ? (
        <>
          <FormDesktop
            isError={isError}
            handleSubmit={handleSubmit}
            setIsError={setIsError}
            setEmail={setEmail}
            email={email}
          />
          <FormMobile
            isError={isError}
            handleSubmit={handleSubmit}
            setIsError={setIsError}
            setEmail={setEmail}
            email={email}
          />
        </>
      ) : (
        <>
        <SuccessModalDesktop email={email} handleDismiss={handleDismiss} />
        <SuccessModalMobile email={email} handleDismiss={handleDismiss} />
        </>
      )}
    </div>
  );
}

export default App;
