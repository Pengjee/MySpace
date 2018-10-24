import remoteLinkAddress from './ip.js';
export function createTheURL(modelAPI, interfaceType) {
	const temp = modelAPI.split('');
	if (temp[temp.length - 1] !== '/') {
		temp.push('/');
	}
	const baseURL = remoteLinkAddress();
	const IP = baseURL + temp.join('') + interfaceType;
	// if (isUrl(IP)) {
	//   return IP;
	// } else {
	//   Toast.fail('非合法的IP地址，请检查传入的地址');
	// }
	return IP;
}
