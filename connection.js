const ldap = require('ldapjs');

// LDAP server details
const LDAP_SERVER = 'ldap://10.5.1.80'; // Change to your LDAP server address
const BIND_DN = 'cn=winai,dc=example,dc=com'; // Change to your bind DN
const BIND_PASSWORD = '9swaddeekrub@buu'; // Change to your bind password

function testLdapConnection() {
    const client = ldap.createClient({
        url: LDAP_SERVER
    });

    client.bind(BIND_DN, BIND_PASSWORD, (err) => {
        if (err) {
            console.error('Failed to connect to LDAP server:', err.message);
        } else {
            console.log('Connection to LDAP server successful!');
            client.unbind((unbindErr) => {
                if (unbindErr) {
                    console.error('Failed to unbind from LDAP server:', unbindErr.message);
                } else {
                    console.log('Unbind from LDAP server successful!');
                }
            });
        }
    });
}

testLdapConnection();