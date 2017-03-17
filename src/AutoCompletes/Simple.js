import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const initState = {
    dataSource: []
};

class Simple extends Component {
  	constructor(props) {
        super(props);
        this.state=initState;
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
  	}

    handleUpdateInput(value) {
      this.setState({
        dataSource: [
          value,
          value + value,
          value + value + value,
        ],
      });
    };

    render() {
		return (
            <div>
                <AutoComplete
                  hintText="Type anything"
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
                <AutoComplete
                  hintText="Type anything"
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                  floatingLabelText="Full width"
                  fullWidth={true}
                />
            </div>
          )
    }
}
export default Simple;
