import type {
	IHookFunctions,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IDataObject,
	IHttpRequestOptions,
} from 'n8n-workflow';

export async function callKanbanApi(
	this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	qs: IDataObject = {},
	body: IDataObject | undefined = undefined,
) {
	const credential = await this.getCredentials('kanbanvnApi');

	const options: IHttpRequestOptions = {
		method: method,
		qs,
		body,
		url: `${credential.yourKanbanvnUrl}${resource}`,
		json: true,
	};

	const credentialType = 'kanbanvnApi';

	return this.helpers.httpRequestWithAuthentication.call(this, credentialType, options);
}
