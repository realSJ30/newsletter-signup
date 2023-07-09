interface FormMobileProps {
  isError: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const FormMobile: React.FC<FormMobileProps> = ({
  isError,
  handleSubmit,
  setIsError,
  setEmail,
  email,
}) => {
  return (
    <div className="sm:hidden flex flex-col bg-white-0 w-full h-screen">
      <img
        className="h-[35%] w-full object-cover object-center rounded-b-3xl"
        src="../public/images/illustration-sign-up-mobile.svg"
        alt="illustration"
      />
      <div className="flex flex-col p-6 text-dark-slate-gray-0">
        <h1 className="font-roboto font-bold mt-4 text-[44px] md:text-[52px]">
          Stay updated!
        </h1>
        <h4 className="text-lg mt-4 font-semibold text-dark-slate-gray-0">
          Join 60,000+ product managers receiving monthly updates on:
        </h4>
        <div className="flex items-start gap-4 mt-6">
          <img
            src="../public/images/icon-list.svg"
            alt="check"
            className="mt-1"
          />
          <h4 className="text-lg font-semibold">
            Product discovery and building what matters
          </h4>
        </div>
        <div className="flex items-start gap-4 mt-6">
          <img
            src="../public/images/icon-list.svg"
            alt="check"
            className="mt-1"
          />
          <h4 className="text-lg font-semibold">
            Measuring to ensure updates are a success
          </h4>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <img src="../public/images/icon-list.svg" alt="check" />
          <h4 className="text-lg font-semibold">And much more!</h4>
        </div>
        <div className="flex justify-between items-center w-full">
          <label htmlFor="email" className="mt-8 mb-2 text-sm font-bold">
            Email address
          </label>
          {isError && (
            <span className="mt-8 mb-2 text-xs font-bold text-tomato-0">
              Valid email required
            </span>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setIsError(false);
              setEmail(e.target.value);
            }}
            name="email"
            className={!isError ? "input-primary" : "input-error"}
            placeholder="email@company.com"
          />
          <button
            type="submit"
            className="transition-all shadow-sm mb-8 ease-in-out duration-300 bg-charcoal-gray-0 text-white-0 w-full mt-6 p-4 rounded-lg text-base font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:from-10% hover:to-tomato-0 hover:shadow-2xl hover:shadow-tomato-0"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormMobile;
