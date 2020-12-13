import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { useKeycloak } from '@react-keycloak/web';

const Dashboard: React.FunctionComponent = () => {

  const { keycloak } = useKeycloak()

  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
      {
        !!keycloak?.authenticated && (
          <button type="button" onClick={() => keycloak.logout()}>Logout</button>
        )
      }
    </PageSection>
  )
}

export { Dashboard };
