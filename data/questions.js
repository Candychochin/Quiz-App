let Questions = [];

const savedQuestions = localStorage.getItem("questions");

if (savedQuestions) {
  Questions = JSON.parse(savedQuestions);
}

if (!savedQuestions || Questions === "[]" || Questions.length === 0) {
  Questions = [
    {
      question: "What is the lowest level of biological organization?",
      answers: [
        {
          text: "cell",
          correct: true,
        },

        {
          text: "tissue",
          correct: false,
        },
        {
          text: "organelle",
          correct: false,
        },
      ],
    },
    {
      question: "DNA is a _____ helix structure.",
      answers: [
        {
          text: "single",
          correct: false,
        },
        {
          text: "double",
          correct: true,
        },
        {
          text: "triple",
          correct: false,
        },
      ],
    },
    {
      question:
        "_____ allows cultivation without soil, ideal for urban farming.",
      answers: [
        {
          text: "Horticulture",
          correct: false,
        },
        {
          text: "Hydroponics",
          correct: true,
        },
        {
          text: "Agriculture",
          correct: false,
        },
      ],
    },
    {
      question:
        "The genetic information is encoded in the nucleotide sequences of _____.",
      answers: [
        {
          text: "RNA",
          correct: false,
        },
        {
          text: "DNA",
          correct: true,
        },
        {
          text: "Gene",
          correct: false,
        },
      ],
    },
    {
      question:
        "Gene expression can also produce some _____ that are not translated into proteins.",
      answers: [
        {
          text: "DNA",
          correct: false,
        },
        {
          text: "RNAs",
          correct: true,
        },
        {
          text: "Nucleotides",
          correct: false,
        },
      ],
    },
    {
      question: "All organisms require _____ for their life.",
      answers: [
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Energy",
          correct: true,
        },
        {
          text: "Water",
          correct: false,
        },
      ],
    },
    {
      question:
        "Maize (Zea mays) is a tropical plant that prefers _____ weather.",
      answers: [
        {
          text: "Cold Dry",
          correct: false,
        },
        {
          text: "Warm Humid",
          correct: true,
        },
        {
          text: "Hot Dry",
          correct: false,
        },
      ],
    },
    {
      question:
        "_____ is the vegetable growing, dealing with the culture of non-woody (herbaceous) plants for foods.",
      answers: [
        {
          text: "Pomology",
          correct: false,
        },
        {
          text: "Olericulture",
          correct: true,
        },
        {
          text: "Arboriculture",
          correct: false,
        },
      ],
    },
    {
      question:
        "_____ is the science and practice of growing aesthetic plants.",
      answers: [
        {
          text: "Olericulture",
          correct: false,
        },
        {
          text: "Ornamental horticulture",
          correct: true,
        },
        {
          text: "Arboriculture",
          correct: false,
        },
      ],
    },
    {
      question: "_____ is a method of growing plants without soil.",
      answers: [
        {
          text: "Olericulture",
          correct: false,
        },
        {
          text: "Hydroponics",
          correct: true,
        },
        {
          text: "Floriculture",
          correct: false,
        },
      ],
    },
  ];
  localStorage.setItem("questions", JSON.stringify(Questions));
}

function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(Questions));
}
