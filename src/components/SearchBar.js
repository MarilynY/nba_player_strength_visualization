import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';



  
export class SearchBar extends React.Component {
    state = {
      dataSource: [],
    };
  
    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] : [value, value.repeat(2), value.repeat(3)],
        });
    };
  
    onSelect = (value) => {
        console.log('onSelect', value);
    }
  
    render() {
      const { dataSource, value } = this.state;
      return (
        <div>
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
               <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>

        </div>
      );
    }
  }
