import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';

window.nba = nba;

export class SearchBar extends React.Component {
    state = {
      dataSource: [],
    };
  
    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName}) => fullName
            )
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
