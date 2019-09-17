import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import { Profile } from './Profile';
import nba from 'nba';
import { SearchBar } from './SearchBar';
import { DEFAULT_PLAYER_INFO } from '../constants';

export class Main extends React.Component {
    state = {
        isLoading: false,
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerId);
    }

    loadPlayerInfo = (playerId) => {
        //0. get player id from player name
        //1. fire api to get player info
        //2. set state
        this.setState({ isLoading: true });
        nba.stats.playerInfo({
            PlayerID: playerId 
        }).then((info) => {
            console.log("player info log: ", info);
            // commonPlayerInfo: [{…}]
            //playerHeadlineStats: [{…}]
            const playerInfo = Object.assign({}, info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log("final player info:", playerInfo);
            this.setState({
                playerInfo: playerInfo,
                isLoading: false
            });
        }).catch((e) => {
            console.log(e);
            this.setState({ isLoading: false });
        })

    }
    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                {
                    this.state.isLoading ? "is Loading" : (
                        <div className="player">
                            <Profile playerInfo={this.state.playerInfo}/>
                            <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                        </div>
                    )
                }
            </div>
        );
    }
}