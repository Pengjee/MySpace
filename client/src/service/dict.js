import request from '../request'
import {createTheURL} from "../utils/utils";
import Config from '../config/api';

export async function listpageDict(params) {
	return request(createTheURL(Config.API.DICT, 'listpage'), {
		method : 'POST',
		body : params,
	});
}

export async function getDict(params) {
	return request(createTheURL(Config.API.DICT, 'get'), {
		method : 'POST',
		body : params,
	});
}

export async function addDict(params) {
	return request(createTheURL(Config.API.DICT, 'add'), {
		method : 'POST',
		body : params,
	});
}

export async function updateDict(params) {
	return request(createTheURL(Config.API.DICT, 'edit'), {
		method : 'POST',
		body : params,
	});
}

export async function delDict(params) {
	return request(createTheURL(Config.API.DICT, 'del'), {
		method : 'POST',
		body : params,
	});
}
