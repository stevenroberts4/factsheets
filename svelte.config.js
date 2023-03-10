import azure from 'svelte-adapter-azure-swa';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
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
				/*
				"navigationFallback": {
				  "rewrite": "index.html"
				},
				*/
				"routes": [
					{
						"route": "/api/__render",
						"allowedRoles": ["anonymous", "authenticated"]
					},
				  {
					"route": "/login",
					"rewrite": "/.auth/login/aad",
					"allowedRoles": ["anonymous", "authenticated"]
				  },
				  {
					"route": "/.auth/login/aad/callback",
					"allowedRoles": [
					  "anonymous", "authenticated"
					]
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
				  },
				  {
					"route": "/*",
					"allowedRoles": ["authenticated"]
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
		alias: {
			$lib: './src/lib'
		}		
	}
};

export default config;
