import { makeServer } from './server';

import { toBoolean } from '@/utils/checkEnv';

function mock() {
  const isMock = toBoolean(process.env.REACT_APP_IS_MOCK);

  if (isMock) {
    makeServer();
  }
}

export default mock;
