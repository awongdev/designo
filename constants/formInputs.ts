type InputsT = {
  label: "name" | "email" | "phone" | "message";
  type: string;
  labelText: string;
}[];

export const formInputs: InputsT = [
  {
    label: "name",
    type: "text",
    labelText: "Name",
  },
  {
    label: "email",
    type: "email",
    labelText: "Email Address",
  },
  {
    label: "phone",
    type: "tel",
    labelText: "Phone",
  },
];
