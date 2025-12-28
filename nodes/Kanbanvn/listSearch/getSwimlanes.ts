import { ILoadOptionsFunctions, INodeListSearchItems, INodeListSearchResult } from 'n8n-workflow';
import { callKanbanApi } from '../shared/call-kanban-api';

interface BoardItem {
	name: string;
	id: string;
	swimlane: { id: string; name: string }[];
}

export async function getSwimlanes(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const board = this.getNodeParameter('board') as { value: string };
	if (!board.value || board.value.length === 0) {
		return { results: [] };
	}
	const responseData = await callKanbanApi.call(this, 'GET', '/api/boards', {});
	const results: INodeListSearchItems[] = responseData.data
		.find((item: BoardItem) => item.id === board.value)
		.swimlane.filter((item: { id: string; name: string }) =>
			item.name.toLowerCase().includes((filter || '').toLowerCase()),
		)
		.map((item: BoardItem) => ({
			name: item.name,
			value: item.id,
		}));

	return { results };
}
