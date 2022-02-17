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

        // Select the plugin based on slug and active class
        const activePlugin = await page.$x('//tr[contains(@class, "active") and contains(@data-slug, "wpgraphql-end-2-end-tests-example")]');

        // assert that our plugin is active by checking the HTML
        expect( activePlugin?.length ).toBe( 1 );

    });

})
