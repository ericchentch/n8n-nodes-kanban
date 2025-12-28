import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { cardDescription } from './resources/card';
import { getBoards } from './listSearch/getBoards';
import { getSwimlanes } from './listSearch/getSwimlanes';
import { getLists } from './listSearch/getLists';

export class Kanbanvn implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Kanban.vn',
		name: 'kanbanvn',
		icon: { light: 'file:../../icons/logo.svg', dark: 'file:../../icons/logo.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume data from the Kanban.vn API',
		defaults: {
			name: 'Kanban.vn',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'kanbanvnApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '= {{$credentials?.yourKanbanvnUrl}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Card',
						value: 'card',
					},
				],
				default: 'card',
			},
			...cardDescription,
		],
	};

	methods = {
		listSearch: {
			getBoards,
			getSwimlanes,
			getLists,
		},
	};
}
