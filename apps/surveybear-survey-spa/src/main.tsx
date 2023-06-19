import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserRouter } from 'react-router-dom';


import App from './app/app';

Sentry.init({
    dsn: "https://51490af55ac9422390b47f7a80455e04@o4505385066561536.ingest.sentry.io/4505385198878720",
    integrations: [
      new Sentry.BrowserTracing({
        // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });

  
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
);
