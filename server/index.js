import {} from 'vue';
import express from 'express';

const data = {
    questions: [{
        questionId: "Q1",
        content: "Question 1"
    }],
    answers: [{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "Answer 1"
    }]
}

const server = new express();

server.get('/', async (_req, res) => {
    res.send('Hello world!');
});

server.get('/data', async (_req, res) => {
    res.json(data);
})

server.listen(7778);

console.info('Server is listening.');