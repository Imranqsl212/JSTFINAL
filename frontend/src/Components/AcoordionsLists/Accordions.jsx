import React from "react";
import Accordion from "../Accordeons/Accordion";

const Accordions = () => {
  const faqs = [
    {
      title: "How can I book a tour?",
      content:
        "You can book a tour by visiting our website and selecting your desired tour package. Follow the booking instructions, choose your preferred date, and make a payment. Alternatively, you can contact our customer support for assistance with booking.",
    },
    {
      title: "What is the cancellation policy?",
      content:
        "Our cancellation policy varies depending on the tour package. We recommend checking the specific cancellation terms mentioned on the tour page. In general, cancellations made within 48 hours of the tour may not be eligible for a refund.",
    },
    {
      title: "Are meals included in the tour?",
      content:
        "The inclusion of meals depends on the tour package you choose. Some tours include meals, while others do not. Please check the tour details for information on inclusions and exclusions.",
    },
    {
      title: "What should I pack for the tour?",
      content:
        "The packing list can vary based on the destination and type of tour. However, we recommend bringing essentials like comfortable clothing, appropriate footwear, sunscreen, a hat, and any specific items mentioned in the tour description. Don't forget your camera!",
    },
    {
      title: "Is travel insurance required?",
      content:
        "We highly recommend purchasing travel insurance for your trip. Travel insurance can provide coverage for unforeseen events, including trip cancellations, medical emergencies, and lost luggage. It's a valuable safeguard for your journey.",
    },
    {
      title: "How do I contact customer support?",
      content:
        "You can reach our customer support team by calling our toll-free number, sending an email to support@example.com, or using the live chat feature on our website. Our team is available 24/7 to assist you with any questions or concerns.",
    },
  ];
  return (
    <section>
      <h1 style={{ textAlign: "center", fontSize: "35px", fontWeight: "600" }}>
        Часто Задаваемые Вопросы
      </h1>
      <br />
      {faqs.map((item, index) => {
        return (
          <>
            <Accordion key={index} content={item.content} title={item.title} />{" "}
            <br />
          </>
        );
      })}
    </section>
  );
};

export default Accordions;
