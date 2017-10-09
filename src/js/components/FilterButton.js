import React, { Component } from 'react'
import styled from 'styled-components'


export default class extends Component {
    constructor(props) {
        super(props)
    }

    openFilter() {
        const { props: { showFilter } } = this
        showFilter(true)
    }

    render() {
        return (
            <ButtonContainer>
                <Button onClick={::this.openFilter}>
                    Настроить фильтры
                </Button>
            </ButtonContainer>
        )
    }
}

const ButtonContainer = styled.div`
    width: 30%;
    min-width: 170px;
    text-align: center;
    border-left: 1px solid lightgrey;
`

const Button = styled.button`
    position: sticky;
    top: 80px;
    min-width: 100px;
    width: 80%;
    border: 1px solid black;
    padding: 15px 20px;
    font-size: 17px;
    margin-top: 22px;
    background-color: black;
    color: white;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    &:hover {
        background-color: #f06d06;
        border-color: #f06d06;
        color: white;
        cursor: pointer;
    }
`