import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		alias: {
			$lib: './src/lib'
		}		
	}
};

export default config;


/*
adapter: azure({
			customStaticWebAppConfig: {
				"auth": {
					"identityProviders": {
					  "azureActiveDirectory": {
						"registration": {
						  "openIdIssuer": "https://login.microsoftonline.com/9f9dd56c-1ee0-4a26-bf64-e6039151b4f8/v2.0",
						  "clientIdSettingName": "AZURE_CLIENT_ID",
						  "clientSecretSettingName": "AZURE_CLIENT_SECRET"
						}
					  }
					}
				  },
				  "routes": [
					{
					  "route": "/login",
					  "rewrite": "/.auth/login/aad",
					  "allowedRoles": ["anonymous", "authenticated"]
					},
					{
					  "route": "/.auth/login/github",
					  "statusCode": 404
					},
					{
					  "route": "/.auth/login/twitter",
					  "statusCode": 404
					},
					{
					  "route": "/logout",
					  "redirect": "/.auth/logout",
					  "allowedRoles": ["anonymous", "authenticated"]
					}
				  ],
				  "responseOverrides": {
					"401": {
					  "redirect": "/login",
					  "statusCode": 302
					}
				  },
				  "globalHeaders": {
					"content-security-policy": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'"
				  },
				  "mimeTypes": {
					".json": "text/json"
				  }
			}
		}),

		*/