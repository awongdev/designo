type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <div className="rounded-lg bg-clr-white px-6 py-4 text-[0.938rem] font-medium uppercase tracking-[1px] text-clr-black transition-colors duration-200 hover:bg-clr-light-peach hover:text-clr-white">
      {children}
    </div>
  );
};

export default Button;
