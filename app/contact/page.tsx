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
    <main className="relative">
      <ContactForm />
      <Countries />
    </main>
  );
}
