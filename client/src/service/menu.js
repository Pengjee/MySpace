import request from '../request'
import {createTheURL} from "../utils/utils";
import Config from '../config/api';

export default function getMenu(params) {
	return request(createTheURL(Config.API.MENU, 'get'), {
		method : 'GET',
		body : params,
	});
}
