import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import keycloak from './utils/keycloak';

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <ReactKeycloakProvider authClient={keycloak} onEvent={eventLogger} onTokens={tokenLogger}>
        <AppRoutes />
      </ReactKeycloakProvider>
    </AppLayout>
  </Router>
);

export { App };
