import React, { Component } from 'react'

 class FishShow extends Component {
    render() {
        return (
            <>
                <h3>Fish Details</h3>
                {this.props.fish &&
                <> 
                <p>{this.props.fish.name}</p>

                <p>{this.props.fish.age}</p>

                <p>{this.props.fish.enjoys}</p>
                
                </>
    }
            </>
        )
    }
}

export default FishShow