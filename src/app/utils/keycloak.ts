import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
    url: 'http://localhost:8080/auth/',
    realm: 'myrealm',
    clientId: 'myclient',
});


export default keycloak;