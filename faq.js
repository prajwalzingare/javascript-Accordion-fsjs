const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

// const faqs = [];

// function showFaq() {}

function createEachFaq() {
  faqData.forEach((faq) => {
    createFaq(faq.question, faq.answer);
  });
}
createEachFaq();

function createFaq(question, answer) {
  const faq = document.createElement("div");
  faq.classList.add("faq");
  accordianBody.appendChild(faq);

  const faq_header = document.createElement("div");
  faq_header.classList.add("faq_header");
  faq.appendChild(faq_header);

  const h = document.createElement("h3");
  h.innerText = question;
  faq_header.appendChild(h);

  const button = document.createElement("button");
  button.innerText = "+";
  button.classList.add("show_btn");
  faq_header.appendChild(button);

  const para = document.createElement("p");
  para.innerText = answer;
  para.classList.add("hidden");
  faq.append(para);

  console.log(para);
}

// function btnStatusUpdate() {}

const listOfFaq = document.querySelectorAll(".show_btn");
listOfFaq.forEach((f) => {
  f.addEventListener("click", () => {
    const answer = f.parentElement.parentElement.lastChild;
    //if we add remove then it will not toggle it will stay as it is
    // answer.classList.remove("hidden");
    answer.classList.toggle("hidden");
  });
});
