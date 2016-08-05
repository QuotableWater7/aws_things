import express from 'express';

import { fetchFiles } from './server/services/file_fetcher';

const app = express();

app.use('/', express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/aws_files', (req, res) => {
  const { Bucket, Prefix } = req.query;

  fetchFiles({ Bucket, Prefix }).then((data) => {
    res.json(data);
  });
});

app.post('/archive', (req, res) => {
  res.json({ success: true });
});

app.listen(process.env.PORT || 8000);
