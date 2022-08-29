import React from "react"

export default class ComponentWillUnmount extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
        // Disconnect any subscriptions for example components using websockets
    }
    
    render() {
        return (
            <h1>Window width: {this.state.windowWidth}px</h1>
        )
    }
}