const { request, response } = require("express");

const teamCoreAPI = require("../api/config");

/*
{
  "date": "12/1/2022",
  "data": [
    {
      "question_id": "1",
      "question": "Cuál es uno de los fundadores de apple?",
      "answers": [
        {
          "answer_id": "1.a",
          "answer": "Steve Jobs"
        },
        {
          "answer_id": "1.b",
          "answer": "Bill gates"
        },
        {
          "answer_id": "1.c",
          "answer": "Michael jordan"
        }
      ]
    },
  ]
}
*/

const getQuestions = async (_, res = response) => {
  try {
    const response = await teamCoreAPI.get("/questions");
    if (response.data) {
      const responseMapped = {
        titulo: "Desconocido",
        dia: response.data.date,
        info: response.data.data.map((item) => ({
          pregunta_id: item.question_id,
          pregunta: item.question
        })),
        api_version: 1
      };
      res.json(responseMapped);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getQuestions
};
