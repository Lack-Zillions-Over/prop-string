import { config } from 'dotenv';

import { PropString } from '../controllers/index';

config();

const propString = new PropString();

export default propString;
