import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import { Profile } from './Profile';
import nba from 'nba';
import { SearchBar } from './SearchBar';

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerName: 'Stephen Curry',
            playerId: 201939
        }
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }

    loadPlayerInfo = (playerName) => {
        //Given player name
        //0. get player id from player name
        //1. fire api to get player info
        //2. set state
        const { playerId } = nba.findPlayer(playerName);
        nba.stats.playerInfo({
            PlayerID: playerId 
        }).then((info) => {
            console.log("player info log: ", info);
            // commonPlayerInfo: [{…}]
            //playerHeadlineStats: [{…}]
            const playerInfo = Object.assign({}, info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log("final player info:", playerInfo);
            this.setState({
                playerInfo: playerInfo
            });
        }).catch((e) => {
            console.log(e);
        })

    }
    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}