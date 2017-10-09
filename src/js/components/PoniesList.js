import React, { Component } from 'react'
import styled from 'styled-components'
import PonyItem from './PonyItem'
import FilterButton from './FilterButton'
import FilterHelper from '../libs/filterHelper'

const Filter = new FilterHelper()

const DEFAULT_LIMIT = 20
let filteredLength = 0

export default class extends Component {
    constructor(props) {
        super(props)
        this.state= {
            limit: true,
            defaultLimit: DEFAULT_LIMIT,
            filteredLength: filteredLength,
        }
    }

    /**
     * Показываем больше таваров на странице
     */
    showMorePonies() {
        this.setState({ defaultLimit: this.state.defaultLimit + 20})
    }

    /**
     * Возвращаемся к исходному значению количества товаров на странице
     */
    hideMorePonies() {
        this.setState({ defaultLimit: DEFAULT_LIMIT})
    }

    /**
     * Получение длину отфильтрованного списка товаров
     * @param length
     */
    getFilteredLength(length) {
        filteredLength = length
    }

    /**
     * Получение списка товаров
     * @returns {XML}
     */
    getItems() {
        const { poniesList, filterValues } = this.props
        const filteredPoniesList = Filter.getFilteredValues(poniesList, filterValues)

        if (filteredPoniesList) {
            this.getFilteredLength(filteredPoniesList.length)
        }

        return filteredPoniesList.length
            ? filteredPoniesList.map((item, index) => {
                if (this.state.limit) {
                    if (index < this.state.defaultLimit) {
                        return <PonyItem
                            key={item.id}
                            item={item}/>
                    }
                } else {
                    return <PonyItem
                        key={item.id}
                        item={item}/>
                }
            })
            : <EmptyList>
                Ничего не найдено, попробуйте уточнить условия поиска.
            </EmptyList>
    }

    render() {
        const { showFilter, poniesList }  = this.props
        const { defaultLimit }  = this.state

        return (<div>
                <Wrapper>
                    <Container>
                        { ::this.getItems() }
                    </Container>
                    <FilterButton showFilter={showFilter}/>
                </Wrapper>
                <ShowMoreBtnContainer>
                    <ShowMoreBtn defaultLimit={defaultLimit} onClick={::this.showMorePonies}>
                        Показать еще
                    </ShowMoreBtn>
                    <HideMoreBtn defaultLimit={defaultLimit} onClick={::this.hideMorePonies}>
                        Скрыть
                    </HideMoreBtn>
                </ShowMoreBtnContainer>
        </div>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    margin-top: 57px;
    border-bottom: 1px solid lightgrey;
`

const Container = styled.ul`
    width: 70%;
    padding: 0;
    margin: 0;
`

const EmptyList = styled.div`
    height: 100px;
    padding-top: 20px;
    color: #f06d06;
    font-size: 20px;
    text-align: center;
`

const ShowMoreBtnContainer = styled.div`
    display: flex;
    background: #FFF;
`

const ShowMoreBtn = styled.button`
    display: ${props => filteredLength <= props.defaultLimit ? 'none' : 'block'};
    height: 40px;
    width: 100px;
    margin: 30px 0 30px 10px;
    background: #000;
    color: #FFF;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        background: #f06d06;
        color: #FFF;
        border: 1px solid #e4e4e4;
    }
`

const HideMoreBtn = ShowMoreBtn.extend`
    display: ${props => props.defaultLimit > DEFAULT_LIMIT ? 'block' : 'none'};
`