import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

//import Post from './entities/Post';

export default () => {
  const logger = morgan('tiny');

  const app = new Express();

  app.set('view engine', 'pug');

  app.use(bodyParser.urlencoded({ extended: false }));

  /* let posts = [
          new Post('hello', 'how are you?'),
          new Post('nodejs', 'story about nodejs')
  ];
  */
  app.get('/', (req, res) => {
    const data = { title: "Hello PUG", message: "Hello again!" };
    res.render('index', data);
  });

  return app;
};
