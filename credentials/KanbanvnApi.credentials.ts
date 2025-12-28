import type {
	IAuthenticate,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KanbanvnApi implements ICredentialType {
	name = 'kanbanvnApi';

	displayName = 'Kanban.vn API';

	icon: Icon = { light: 'file:../icons/logo.svg', dark: 'file:../icons/logo.dark.svg' };

	documentationUrl =
		'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token';

	properties: INodeProperties[] = [
		{
			displayName: 'Your Kanban.vn url',
			name: 'yourKanbanvnUrl',
			type: 'string',
			default: 'https://example.kanban.vn',
			placeholder: 'https://example.kanban.vn',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '= {{$credentials?.yourKanbanvnUrl}}',
			url: '/api/n8n/test',
			method: 'GET',
			headers: {
				token: '= {{$credentials?.accessToken}}',
			},
		},
	};

	authenticate?: IAuthenticate | undefined = {
		type: 'generic',
		properties: {
			headers: {
				token: '= {{$credentials?.accessToken}}',
			},
		},
	};
}
