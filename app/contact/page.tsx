import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Countries from "@/components/shared/Countries";

export const metadata: Metadata = {
  title: "Designo | Contact Us",
  description:
    "Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.",
};

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <h1 className="sr-only">Contact Us</h1>
      <ContactForm />
      <Countries />
      <div
        aria-hidden="true"
        className="background-leaf before:bottom-[-10rem] before:right-[-10.313rem]"
      ></div>
    </main>
  );
}
