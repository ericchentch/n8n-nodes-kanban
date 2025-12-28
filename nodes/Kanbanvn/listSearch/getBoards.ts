import { ILoadOptionsFunctions, INodeListSearchItems, INodeListSearchResult } from 'n8n-workflow';
import { callKanbanApi } from '../shared/call-kanban-api';

interface BoardItem {
	name: string;
	id: string;
}

export async function getBoards(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const responseData = await callKanbanApi.call(this, 'GET', '/api/boards', {});
	const results: INodeListSearchItems[] = responseData.data
		.filter((item: BoardItem) => item.name.toLowerCase().includes((filter || '').toLowerCase()))
		.map((item: BoardItem) => ({
			name: item.name,
			value: item.id,
		}));

	return { results };
}
