export default class HandleMenu {
	constructor(menu){
		this.menuList = menu
	}

	createMenuList() {
		let newMenu = []
		while (this.menuList.length) {
			let curMenu = this.menuList.pop()
			if(curMenu.parentId === '0') {
				newMenu.push(curMenu)
				continue
			}
			let index = this.menuList.findIndex((item)=>{
				return item.id === curMenu.parentId
			})
			if(index >= 0) {
				newMenu[index].child = []
				newMenu[index].child.push(curMenu)
				continue
			}
			this.menuList.push(curMenu)
		}
		return newMenu
	}
}
