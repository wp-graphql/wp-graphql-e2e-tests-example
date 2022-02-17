import { loginUser, visitAdminPage } from '@wordpress/e2e-test-utils'

describe( 'example test', () => {

    it( 'works', () => {
        expect( true ).toBeTruthy()
    })

    it ( 'verifies the plugin is active', async () => {

        // login as admin
        await loginUser();

        // visit the plugins page
        await visitAdminPage( 'plugins.php' );

        // assert that our plugin is active by checking the HTML

    });

})
