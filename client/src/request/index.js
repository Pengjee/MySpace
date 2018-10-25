import AxiosMethod from './request.axios'
import FetchMethod from './request.fetch'
import { REQUEST_METHOD } from '../config/config'

export default function request(url,options) {
	const requestList = {
		axiosRequest:AxiosMethod,
		fecthRequest:FetchMethod,
	}
	return requestList[REQUEST_METHOD](url,options);
}
