import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import { Radio, Switch } from 'antd';

const RadioGroup = Radio.Group;
export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true
    }

    handleCountSliderChange = (count) => {
        this.setState({ 
            minCount: count
        });
    }

    handleChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        });
    }

    handleToolTipChange = (displayTooltip) => {
        this.setState({
            displayTooltip: displayTooltip
        });
    }

    render() {
        return (
            <div className="date-view">
                <ShotChart 
                    playerId={this.props.playerId} 
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}
                />
                <div className="filters">
                    <CountSlider handleCountSliderChange={this.handleCountSliderChange}/>
                    <RadioGroup onChange={this.handleChartTypeChange} value={this.state.chartType}>
                        <Radio value="hexbin">Hexbin</Radio>
                        <Radio value="scatter">Scatter</Radio>
                    </RadioGroup>
                    <Switch 
                        checkedChildren="on" 
                        unCheckedChildren="off" 
                        defaultChecked 
                        onChange={this.handleToolTipChange}
                    />
                </div>
            </div>
        );
    }
}