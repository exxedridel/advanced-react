import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {context => (
                    <p>Welcome, {context.user}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
