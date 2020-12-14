import * as React from 'react';
import { PageSection, Title, Card, CardTitle, Grid, GridItem, CardBody, Flex, FlexItem, Stack, StackItem } from '@patternfly/react-core';
import { useKeycloak } from '@react-keycloak/web';
import { useHistory, Link } from 'react-router-dom';
import { ChartDonut } from '@patternfly/react-charts';
import { data } from '@app/dummy';


const Dashboard: React.FunctionComponent = () => {

  const [state, setState] = React.useState<any>({
    credential: "",
    dataFilter: [],
  })
  const { keycloak } = useKeycloak()
  const history = useHistory()
  const dataGateway = Object.keys(data.gateways)
  const dataMiddleware = Object.keys(data.middlewares)

  const handleGatewayButton = (val) => {
    setState((prevState) => ({
      ...prevState,
      credential: val,
      dataFilter: data.routes.filter((items) => items.source === val),
    }))

    history.push({
      pathname: `/detail/${val}`,
      state: {
        credential: val,
        dataFilter: data.routes.filter((items) => items.source === val)
      }
    })
  }

  const renderGateway = dataGateway.map((items) => {
    return (
      <>
        <Card>
          <CardBody>{items}</CardBody>
          <button onClick={() => handleGatewayButton(items)}>Click</button>
        </Card>
        <br />
      </>
    )
  })

  const renderMiddleware = dataMiddleware.map((items) => {
    return (
      <>
        <Card>
          <CardBody>{items}</CardBody>
        </Card>
        <br />
      </>
    )
  })

  return (
    <PageSection>
      <Flex direction={{ default: 'row' }}>
        <Title headingLevel="h1" size="lg">Dashboard</Title>
        {
          !!keycloak?.authenticated && (
            <button type="button" onClick={() => keycloak.logout()}>Logout</button>
          )
        }
      </Flex>

      <br />
      <Stack hasGutter>
        <StackItem>
          <Flex spaceItems={{ modifier: 'spaceItemsXl' }} justifyContent={{ default: 'justifyContentSpaceEvenly' }}>
            <FlexItem>
              <Card>
                <CardTitle>CPU</CardTitle>
                <CardBody>
                  <div className="h2 font-weight-bold mb-0">12 Cores</div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> Out of 20 Cores
                   </span>
                    <span className="text-nowrap"> (Normal) </span>
                  </p>
                </CardBody>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card>
                <CardTitle>Memory</CardTitle>
                <CardBody>
                  <div className="h2 font-weight-bold mb-0">1 Gb</div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> Out of 5 Gb
                   </span>
                  </p>
                </CardBody>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card>
                <CardTitle>Storage</CardTitle>
                <CardBody>
                  <div className="h2 font-weight-bold mb-0">450 Terrabytes</div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> Out Of 500 Tb
                  </span>
                    <span className="text-nowrap">(Warning !)</span>
                  </p>
                </CardBody>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card>
                <CardTitle>Network</CardTitle>
                <CardBody>
                  <div className="h2 font-weight-bold mb-0">100 mbps</div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> Unlimited
                   </span>
                    <span className="text-nowrap">(Normal)</span>
                  </p>
                </CardBody>
              </Card>
            </FlexItem>
          </Flex>
        </StackItem>
        <PageSection>
          <StackItem isFilled>
            <Flex spaceItems={{ modifier: 'spaceItemsXl' }} direction={{ default: 'row' }} justifyContent={{ default: 'justifyContentCenter' }}>
              <FlexItem >
                <p>Gateway</p>
                <div>{renderGateway}</div>
              </FlexItem>
              <FlexItem>
                <p>Core</p>
                <Card>
                  <CardBody>
                    <div>
                      <>
                        <ChartDonut
                          ariaDesc="Average Cores"
                          ariaTitle="Cores Chart"
                          constrainToVisibleArea={true}
                          data={[{ x: 'Core 1', y: 35 }, { x: 'Core 2', y: 55 }, { x: 'Core 3', y: 10 }]}
                          labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                          // subTitle="Pets"
                          title="Cores"
                        />
                      </>
                    </div>
                  </CardBody>
                </Card>
              </FlexItem>
              <FlexItem>
                <p>Middleware</p>
                <div>{renderMiddleware}</div>
              </FlexItem>
            </Flex>
          </StackItem>
        </PageSection>
      </Stack>

    </PageSection >
  )
}

export { Dashboard };
