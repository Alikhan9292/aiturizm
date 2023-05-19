const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { Configuration, OpenAIApi } = require('openai');


dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.get('/generate-image', async (req, res) => {
  console.log("first")
  try {
    const prompt = 'fight club';
    const response = await openai.createImage({
      prompt,
      n:1,
      size: "512x512"
    });
    const imageURL = response.data.data[0].url;

    console.log(imageURL)

    res.send(imageURL);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

app.listen(5000, () => {
  console.log('Сервер запущен на порту 5000');
});

