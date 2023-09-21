import React from "react";
import FAQCompo from "./FAQCompo";
import { faqData } from "../data";

const FAQ = () => {
  return (
    <div className="">
      <div className="md:text-left text-center">
        <div className="capitalize text-3xl font-bold">
          frequently ask <br />
          <span className="text-purple">question</span>
        </div>
        <div className="text-sm md:mr-5 mt-3">
          We got answers to the questions that you might want to ask about {""}
          <span className="font-bold">getlinked Hackathon 1.0</span>
        </div>
      </div>
      <div className="md:text-left text-center">
        {faqData.map((faq, index) => (
          <FAQCompo key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
