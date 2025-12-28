import { INodeProperties } from 'n8n-workflow';

export const boardSelect: INodeProperties = {
	displayName: 'Board',
	name: 'board',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	modes: [
		{
			displayName: 'Board',
			name: 'list',
			type: 'list',
			placeholder: 'Select a board',
			typeOptions: {
				searchListMethod: 'getBoards',
				searchable: true,
			},
		},
	],
};

export const swimlaneSelect: INodeProperties = {
	displayName: 'Swimlane',
	name: 'swimlane',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	modes: [
		{
			displayName: 'Swimlane',
			name: 'list',
			type: 'list',
			placeholder: 'Select a swimlane',
			typeOptions: {
				searchListMethod: 'getSwimlanes',
				searchable: true,
			},
		},
	],
};

export const listSelect: INodeProperties = {
	displayName: 'List',
	name: 'list',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	modes: [
		{
			displayName: 'List',
			name: 'list',
			type: 'list',
			placeholder: 'Select a list',
			typeOptions: {
				searchListMethod: 'getLists',
				searchable: true,
			},
		},
	],
};
