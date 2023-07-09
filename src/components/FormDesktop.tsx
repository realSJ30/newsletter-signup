interface FormDesktopProps {
  isError: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const FormDesktop: React.FC<FormDesktopProps> = ({
  isError,
  handleSubmit,
  setIsError,
  setEmail,
  email,
}) => {
  return (
    <div className="hidden sm:flex gap-6 justify-between rounded-3xl bg-white-0 p-6 w-[780px]">
      {/* right side */}
      <div className="flex flex-col py-16 px-4 items-start text-dark-slate-gray-0">
        <h1 className="font-roboto font-bold text-[44px] md:text-[52px]">
          Stay updated!
        </h1>
        <h4 className="text-sm mt-4 font-semibold">
          Join 60,000+ product managers receiving monthly updates on:
        </h4>

        <div className="flex items-center gap-3 mt-6">
          <img src="../public/images/icon-list.svg" alt="check" />
          <h4 className="text-sm font-semibold">
            Product discovery and building what matters
          </h4>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <img src="../public/images/icon-list.svg" alt="check" />
          <h4 className="text-sm font-semibold">
            Measuring to ensure updates are a success
          </h4>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <img src="../public/images/icon-list.svg" alt="check" />
          <h4 className="text-sm font-semibold">And much more!</h4>
        </div>
        <div className="flex justify-between items-center w-full">
          <label htmlFor="email" className="mt-8 mb-2 text-xs font-bold">
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
            className="transition-all shadow-sm ease-in-out duration-300 bg-charcoal-gray-0 text-white-0 w-full mt-4 p-4 rounded-lg text-sm font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:from-10% hover:to-tomato-0 hover:shadow-2xl hover:shadow-tomato-0"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      {/* left side */}
      <div className="flex flex-col">
        <img
          className="h-full object-cover rounded-xl"
          src="../public/images/illustration-sign-up-desktop.svg"
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default FormDesktop;
