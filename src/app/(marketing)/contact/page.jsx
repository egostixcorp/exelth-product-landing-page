import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactPageform from "@/components/Layouts/contact-form";
export const metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return (
    <div>
      <ContactPageform />
    </div>
  );
};

export default ContactPage;
