interface SuccessModalMobileProps {
  handleDismiss: () => void;
  email?: string;
}

const SuccessModalMobile: React.FC<SuccessModalMobileProps> = ({
  handleDismiss,
  email,
}) => {
  return (
    <div className="flex sm:hidden flex-col bg-white-0 h-screen p-6">
      <div className="flex-1 flex flex-col justify-center">
        <img src="../public/images/icon-list.svg" alt="check" className="w-8" />
        <h1 className="text-5xl font-bold mt-6 mb-2 text-dark-slate-gray-0">
          Thanks for subscribing!
        </h1>
        <p className="text-large mt-4 text-dark-slate-gray-0 font-semibold">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email || "test@email.com"}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button
        onClick={handleDismiss}
        className="transition-all shadow-sm ease-in-out duration-300 bg-charcoal-gray-0 text-white-0 w-full mt-10 mb-4 p-4 rounded-lg text-sm font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:from-10% hover:to-tomato-0 hover:shadow-2xl hover:shadow-tomato-0"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessModalMobile;
