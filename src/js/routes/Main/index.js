import React, { Component } from 'react'
import PostListContainer from '../../containers/PostListContainer'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <PostListContainer />
        </div>
    }
}