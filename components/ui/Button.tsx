type Props = {
  children: React.ReactNode;
  color: "white" | "peach";
};

const Button = ({ children, color }: Props) => {
  const colors = {
    white:
      "bg-clr-white text-clr-dark-gray hover:bg-clr-light-peach hover:text-clr-white",
    peach: "bg-clr-peach text-clr-white hover:bg-clr-light-peach",
  };
  return (
    <div
      className={`rounded-lg px-6 py-4 text-[0.938rem] font-medium uppercase tracking-[1px] transition-colors duration-200 ${colors[color]}`}
    >
      {children}
    </div>
  );
};

export default Button;
