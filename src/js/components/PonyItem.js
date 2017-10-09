import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props

        return <Li>
            <ItemHead>{item.name}
                <ItemNew isNew={item.isNew}>Новинка</ItemNew>
            </ItemHead>
            <ItemDescription>Цвет: {item.color}</ItemDescription>
            <ItemDescription>Вид: {item.kind}</ItemDescription>
            <ItemPrice>{item.price} ₽</ItemPrice>
        </Li>
    }

}

const ItemHead = styled.h3`
    margin: 0 0 10px;
`

const ItemNew = styled.div`
    display: ${props => props.isNew ? 'inline-block' : 'none'};
    position: relative;
    bottom: 2px;
    left: 10px;
    background-color: red;
    color: white;
    padding: 2px 5px;
    font-size: 12px;
    text-align: center;
`

const ItemDescription = styled.div`
    max-height: 100px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

const ItemPrice = styled.h3`
    position: absolute;
    margin: 0;
    top: 30px;
    right: 50px;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
    padding: 20px 50px;
    list-style-type: none;

    &:nth-child(odd) {
        background: white;
    }
`