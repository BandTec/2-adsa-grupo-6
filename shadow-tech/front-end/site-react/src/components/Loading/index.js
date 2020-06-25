import React, {Component} from 'react';

import { LoopCircleLoading } from 'react-loadingg';

export default class Loading extends Component {
    render(){
        return(
            <>
                <div style={{position: 'absolute', width: '100vw', height: '100vh', background: '#00000033'}}/>
                <LoopCircleLoading color="#3341A3"/>
            </>
        );
    }
}