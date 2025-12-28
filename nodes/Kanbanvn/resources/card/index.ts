import { INodeProperties } from 'n8n-workflow';
import { boardSelect, swimlaneSelect } from '../../shared/request-info';
import { cardCreateDescription } from './create';

const showOnlyForCards = {
	resource: ['card'],
};

export const cardDescription: INodeProperties[] = [
	{
		...boardSelect,
		displayOptions: {
			show: showOnlyForCards,
		},
	},
	{
		...swimlaneSelect,
		displayOptions: {
			show: showOnlyForCards,
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCards,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get cards',
				description: 'Get cards by board and swimlane',
				routing: {
					request: {
						method: 'POST',
						url: '/api/cards',
						body: {
							swimlaneId: '={{$parameter.swimlane}}',
						},
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new card',
				description: 'Create a new card',
				routing: {
					request: {
						method: 'POST',
						url: '/api/cards/create-card',
						body: {
							swimlaneId: '={{$parameter.swimlane}}',
							listId: '={{$parameter.list}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...cardCreateDescription,
];
