import request from '../request'
import {createTheURL} from "../utils/utils";
import Config from '../config/api';

export async function getMenu(params) {
	return request(createTheURL(Config.API.MENU, 'get'), {
		method : 'POST',
		body : params,
	});
}
