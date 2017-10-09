import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, children } = this.props

        return (
            <div>
                <FilterTypeTitle>{name}:</FilterTypeTitle>
                <FilterTypeOptions>{children}</FilterTypeOptions>
            </div>
        )
    }
}

const FilterTypeTitle = styled.div`
    color: black;
    font-weight: bold;
`

const FilterTypeOptions = styled.div`
    padding: 10px;
`


