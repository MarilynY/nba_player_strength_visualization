import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

// window.nba = nba;
const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
      dataSource: [],
    };
  
    handleSearch = (value) => {
        console.log(nba.searchPlayers(value));
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) => (
                    <Option key={playerId} value={fullName}>
                        <img
                            className="player-option-image"
                            src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                            alt={fullName}
                        />
                        <span className="player-option-label">{fullName}</span>
                    </Option>
                )
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
                optionLabelProp="value"
            >
               <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>

        </div>
      );
    }
  }
