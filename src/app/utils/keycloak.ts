import Keycloak from 'keycloak-js'


const credential = {
    url: 'http://localhost:8080/auth/',
    realm: 'myrealm',
    clientId: 'myclient',
}

// const credential = {
//     url: 'https://account.gsk.tsun.moe/auth',
//     realm: 'gsktrial',
//     clientId: 'trial-dashboard',
// }

const keycloak = Keycloak({
    url: credential.url,
    realm: credential.realm,
    clientId: credential.clientId,
});


export default keycloak;