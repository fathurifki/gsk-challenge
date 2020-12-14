import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardBody, PageSection, Grid, GridItem, Flex } from '@patternfly/react-core'

const DestinationPage = () => {
    return (
        <PageSection>
            <Grid>
                <GridItem span={12}>
                    <Card>
                        <CardBody>
                            <Flex direction={{ default: 'column' }}>
                                <p>Garuda Solusi Kreatif (GSK)</p>
                                <p>Innovate, Implement, Integrate</p>
                                <span>Contact Us: </span>
                                <span>Garuda Solusi Kreatif Mahkota Mas, Ruko, Blk. H No.36, RT.002/RW.006, Cikokol, Kec. Tangerang, Kota Tangerang, Banten 15117</span>
                            </Flex>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </PageSection>
    )
}

export default DestinationPage