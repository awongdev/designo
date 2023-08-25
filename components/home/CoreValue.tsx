import RoundImg from "@/components/shared/RoundImg";

type Props = {
  value: "passionate" | "resourceful" | "friendly";
  direction: "top" | "bottom" | "right" | "left";
};

const values = {
  passionate: {
    title: "Passionate",
    content:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  resourceful: {
    title: "Resourceful",
    content:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  friendly: {
    title: "Friendly",
    content:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
};

const CoreValue = ({ value, direction }: Props) => {
  const currentValue = values[value];
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:justify-start lg:text-center">
      <RoundImg category={value} gradientDirection={direction} />
      <div className="flex flex-col gap-8 md:gap-4 lg:gap-8">
        <h2 className="text-xl font-medium uppercase tracking-[5px]">
          {currentValue.title}
        </h2>
        <p className="max-w-md leading-6 md:max-w-md">{currentValue.content}</p>
      </div>
    </div>
  );
};

export default CoreValue;
