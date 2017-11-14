import Express from 'express';
import bodyParser from 'body-parser';

//import Post from './entities/Post';

export default () => {
  const app = new Express();

  app.set('view engine', 'pug');

  app.use(bodyParser.urlencoded({ extended: false }));

  /* let posts = [
          new Post('hello', 'how are you?'),
          new Post('nodejs', 'story about nodejs')
  ];
  */
  app.get('/', (req, res) => {
          res.send('index');
  });

  return app;
};
