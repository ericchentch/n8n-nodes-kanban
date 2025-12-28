import type { INodeProperties } from 'n8n-workflow';
import { listSelect } from '../../shared/request-info';

const showOnlyForCardCreate = {
	operation: ['create'],
	resource: ['card'],
};

export const cardCreateDescription: INodeProperties[] = [
	{
		...listSelect,
		displayOptions: {
			show: showOnlyForCardCreate,
		},
	},
	{
		displayName: 'Title',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCardCreate,
		},
		description: 'The title of the card',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
