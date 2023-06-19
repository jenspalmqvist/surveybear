import { connect } from '@surveybear/surveybear-lib';
import app from './app';
import * as Sentry from '@sentry/node';
const port = process.env.PORT || 3333;

Sentry.init({
  dsn: "https://6664a0b5e26f4d98a84887a2f72e3326@o4505385066561536.ingest.sentry.io/4505385091268608",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});



try {
  const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  
  setTimeout(() => {
    try {
      throw Error("Åh nej, nåt är trasigt!");
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);

  connect().then(() => {
    const server = app.listen(port, () => {
      console.log('running in test branch');
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', () => console.log('error'));
  })
} catch (e) {
  console.log('error');
  throw e;
}