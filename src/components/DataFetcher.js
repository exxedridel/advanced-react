import React, {Component} from "react"

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null,
        error: null
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data, loading: false, error: null}))
            .catch(error => {
               console.log(error)
            })
    }
    
    render() {
        const {data, loading, error} = this.state
        return (
            this.props.children({data, loading, error})
        )
    }
}

export default DataFetcher