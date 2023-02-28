import azure from 'svelte-adapter-azure-swa';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: azure({
			customStaticWebAppConfig: {
				auth: {
					identityProviders: {
					  azureActiveDirectory: {
						registration: {
						  openIdIssuer: "https://login.microsoftonline.com/9f9dd56c-1ee0-4a26-bf64-e6039151b4f8/v2.0",
						  clientIdSettingName: "AZURE_CLIENT_ID",
						  clientSecretSettingName: "AZURE_CLIENT_SECRET"
						}
					  }
					}
				},
			}
		}),
		alias: {
			$lib: './src/lib'
		}		
	}
};

export default config;
