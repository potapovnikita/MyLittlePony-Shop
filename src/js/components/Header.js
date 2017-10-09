import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    render() {
        return (
            <HeadBlock>
                My Little Pony <Span>Shop</Span>
            </HeadBlock>
        )
    }
}

const HeadBlock = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
    top: 0;
    background-color: #242424;
    color: #fff;
    padding: 15px 50px;
    font-size: 20px;
    text-align: left;
    border-top: 3px solid #f06d06;
`

const Span = styled.span`
    color: #989898;
`