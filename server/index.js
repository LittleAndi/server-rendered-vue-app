import express from 'express';

const app = new express();

app.get('/', async (_req, res) => {
    res.send('Hello world!');
});

app.listen(7778);

console.info('Server is listening.');