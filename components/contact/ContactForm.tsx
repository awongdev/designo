"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { formInputs } from "@/constants/formInputs";
import ErrorIcon from "@/public/assets/contact/desktop/icon-error.svg";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const userSchema = object({
  name: string().required("Can't be empty"),
  email: string().required("Can't be empty").email("Email is not valid"),
  phone: string()
    .required("Can't be empty")
    .matches(phoneRegExp, "Phone number is not valid"),
  message: string().required("Can't be empty"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="flex justify-center">
      <div className="relative mb-[7.5rem] w-full max-w-1110 overflow-hidden bg-clr-peach sm:mx-6 sm:rounded-2xl md:mx-10 lg:mb-40">
        <div className="relative z-10 flex flex-col gap-12 px-6 py-[4.5rem] sm:px-[3.75rem] lg:flex-row lg:items-center lg:justify-between lg:px-24 lg:py-14">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
            <h1 className="header-title mb-6 text-clr-white sm:mb-8">
              Contact Us
            </h1>
            <p className="header-text max-w-xl text-clr-white lg:max-w-md">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form onSubmit={onSubmit} noValidate className="w-full lg:max-w-sm">
            {formInputs.map((input) => (
              <div
                key={input.label}
                className="group relative text-clr-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-auto before:z-[-1] before:h-[1px] before:w-full before:bg-clr-white"
              >
                <label
                  htmlFor={input.label}
                  className={`absolute bottom-3 left-3 cursor-text text-clr-white/70 transition-all duration-200 group-focus-within:font-medium group-focus-within:text-clr-white ${
                    dirtyFields[input.label] && "-translate-y-7 text-sm"
                  }`}
                >
                  {input.labelText}
                </label>
                <input
                  id={input.label}
                  type={input.type}
                  {...register(input.label)}
                  className="mt-4 w-full border-b-[3px] border-transparent bg-transparent px-3 pb-3 pt-4 text-15px outline-0 transition-colors duration-200 focus:border-clr-white"
                />
                {errors[input.label] && (
                  <p className="absolute right-0 top-2 mr-3 flex gap-2 text-sm">
                    <ErrorIcon />
                    {errors[input.label]?.message}
                  </p>
                )}
              </div>
            ))}
            <div className="group relative text-clr-white before:absolute before:bottom-[7px] before:left-0 before:right-0 before:top-auto before:z-[-1] before:h-[1px] before:w-full before:bg-clr-white">
              <label
                htmlFor="textarea"
                className={`absolute left-3 top-8 cursor-text text-clr-white/70 transition-all duration-200 group-focus-within:font-medium group-focus-within:text-clr-white ${
                  dirtyFields.message && "-translate-y-6 text-sm"
                }`}
              >
                Your Message
              </label>
              <textarea
                id="textarea"
                {...register("message")}
                className="mt-8 max-h-[15.438rem] min-h-[7.875rem] w-full border-b-[3px] border-transparent bg-transparent px-3 text-15px outline-0 transition-colors duration-200 focus:border-clr-white"
              />
              {errors.message && (
                <p className="absolute right-0 top-2 flex gap-2 pr-3 text-sm">
                  <ErrorIcon />
                  {errors.message.message}
                </p>
              )}
            </div>
            <button className="float-right mt-6 w-full max-w-[9.5rem]">
              <Button color="white">Submit</Button>
            </button>
          </form>
        </div>
        <picture>
          <source
            srcSet="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
            media="(min-width: 40rem)"
          />
          <Image
            priority
            src="/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
            alt=""
            width={584}
            height={292}
            className="absolute bottom-0 left-2/4 top-0 h-[18.25rem] w-[36.5rem] -translate-x-2/4 object-cover sm:left-[-122px] sm:top-[-83px] sm:h-[640px] sm:w-[640px] sm:translate-x-0 sm:object-right lg:bottom-0 lg:left-0 lg:top-auto"
          />
        </picture>
      </div>
    </section>
  );
};

export default ContactForm;
