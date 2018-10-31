import React from 'react'
import {Table} from 'antd'

class DataDict extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div>
					SearchForm
				</div>
				<div>
					ToolBox
				</div>
				<Table dataSource={dataSource} columns={columns}/>
			</div>
		)
	}
}

export default DataDict
