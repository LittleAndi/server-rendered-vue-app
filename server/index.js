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

const app = new express();

app.get('/', async (_req, res) => {
    res.send('Hello world!');
});

app.get('/data', async (_req, res) => {
    res.json(data);
})

app.listen(7778);

console.info('Server is listening.');