const ldap = require('ldapjs');

// LDAP server details
const LDAP_SERVER = 'ldap://your_ldap_server'; // Change to your LDAP server address
const BIND_DN = 'cn=your_user,dc=example,dc=com'; // Change to your bind DN
const BIND_PASSWORD = 'your_password'; // Change to your bind password

function testLdapConnection() {
    const client = ldap.createClient({
        url: LDAP_SERVER
    });

    client.bind(BIND_DN, BIND_PASSWORD, (err) => {
        if (err) {
            console.error('Failed to connect to LDAP server:', err.message);
        } else {
            console.log('Connection to LDAP server successful!');
            client.unbind();
        }
    });
}

testLdapConnection();
