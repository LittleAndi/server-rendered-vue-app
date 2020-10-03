import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import { readFileSync } from 'fs';
import express from "express";

const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Question 1",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "Answer 1",
    },
  ],
};

const template = readFileSync('public/index.template.html', 'utf-8');
const renderer = createRenderer({ template: template });
const server = new express();

server.get("/data", async (_req, res) => {
  res.json(data);
});

server.get('*', async (_req, res) => {
  const app = new Vue({
    data: {
      url: _req.url,
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  });

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
});


server.listen(7778);

console.info("Server is listening.");
