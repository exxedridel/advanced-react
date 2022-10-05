import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {
    state = {
        user: "bobElputo"
    }

    changeUser = (username) => {
        this.setState(prevState => {
            return {
                user: username
            }
        })
    }

    render() {
        return (
            <Provider value={{ user: this.state.user, changeUser: this.changeUser }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }