import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import Container from "@/components/Global/Container";
const LegalDocLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center selection:bg-green-950 selection:text-green-300">
      <Header />
      <Container className={"my-2 "}>
        {children}
      </Container>

      <Footer />
    </div>
  );
};

export default LegalDocLayout;
