import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Table} from 'antd'
import dictAction from "../../redux/action/dict"


class DataDict extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
			columns: []
		}
	}

	render() {
		const { dataSource, columns } = this.state
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

function mapStateToProps(state) {
	return {
		dictList : state.dictList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(dictAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDict)

