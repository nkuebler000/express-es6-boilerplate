import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import states from './states';

const apiApp = express();
apiApp.use(logger('dev'));
apiApp.use(bodyParser.json());
apiApp.use(cors());

apiApp.use('/states', states);

export default apiApp;