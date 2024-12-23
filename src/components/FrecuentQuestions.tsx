import React from 'react'
const faqs = [
    {
      question: "What warranty do you offer on your products?",
      answer: "We offer a comprehensive 2-year warranty on all our products covering manufacturing defects."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for all our equipment with certified technicians."
    },
    {
      question: "What are your delivery timeframes?",
      answer: "Standard delivery takes 3-5 business days within the country."
    }
  ];
export const FrecuentQuestions = () => {
  return (
    <section id="faqs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
