interface SuccessModalDesktopProps {
  handleDismiss: () => void;
  email?: string;
}

const SuccessModalDesktop: React.FC<SuccessModalDesktopProps> = ({
  handleDismiss,
  email,
}) => {
  return (
    <div className="hidden sm:flex flex-col bg-white-0 rounded-3xl py-12 px-14 font-roboto w-[420px] text-dark-slate-gray-0">
      <img src="../public/images/icon-list.svg" alt="check" className="w-8" />
      <h1 className="text-5xl font-bold mt-6 mb-2">Thanks for subscribing!</h1>
      <p className="text-sm mt-4">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email || "test@email.com"}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button
        onClick={handleDismiss}
        className="transition-all shadow-sm ease-in-out duration-300 bg-charcoal-gray-0 text-white-0 w-full mt-10 mb-4 p-4 rounded-lg text-sm font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:from-10% hover:to-tomato-0 hover:shadow-2xl hover:shadow-tomato-0"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessModalDesktop;
