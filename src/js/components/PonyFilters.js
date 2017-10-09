import React, { Component } from 'react'
import styled from 'styled-components'

import defaultOptions from '../libs/defaultOptions'
import emptyFilter from '../libs/emptyFilter'
import FilterType from './FilterType'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.filterValues,
            isOldPony: false,
            isNewPony: false,
        }
    }

    /**
     * Закрываем всплывающее окно фильтров
     */
    closeFilter() {
        let { props: { showFilter } } = this
        showFilter(false)
    }

    /**
     * Получение чекбоксов для списка видов пони
     * @param kinds
     */
    getKinds(kinds) {
        return kinds.map((item, index) => {
            const checked = this.state.kind.find(elem => item === elem)
            return <div key={index}>
                <input type="checkbox"
                       ref={item}
                       checked={!!checked}
                       onChange={() => ::this.changeKind(item)}/>
                {item}
            </div>
        })
    }

    /**
     * Получение чекбоксов для списка цветов
     * @param colors
     */
    getColors(colors) {
        return colors.map((item, index) => {
            return <div key={index}>
                <input type="checkbox"
                       ref={item}
                       checked={item === this.state.color}
                       onChange={() => ::this.changeColor(item)}/>
                {item}
            </div>
        })
    }

    /**
     * Применяем фильтр
     */
    applyFilter() {
        const { props: { setFilter } } = this
        setFilter(this.state)
    }

    /**
     * Сбрасываем фильтр
     */
    resetFilter() {
        const { props: { resetFilter } } = this
        this.setState({
            ...emptyFilter,
            isOldPony: false,
            isNewPony: false,
        })
        resetFilter()
        this.closeFilter()
    }

    /**
     * Обработчики чекбокса "Новинка да/нет"
     */
    newPonyHandler() {
        this.setState({
            isNewPony: !this.state.isNewPony,
            isOldPony: false,
        })
        setTimeout(() => {
            this.setState({ isNew: this.state.isNewPony ? true : null })
        })
    }

    oldPonyHandler() {
        this.setState({
            isOldPony: !this.state.isOldPony,
            isNewPony: false,
        })
        setTimeout(() => {
            this.setState({ isNew: !this.state.isOldPony ? null : false })
        })
    }

    /**
     * фильтрация по цене
     * @param name
     */
    changePrice(name) {
        let { value } = this.refs[name]
        const { price } = this.state
        this.setState({
            price: {
                ...price,
                [name]: value,
            }
        })
    }

    /**
     * фильтрация по цвету
     * @param name
     */
    changeColor(name) {
        const { checked } = this.refs[name]
        this.setState({ color:  checked ? name : '' })
    }

    /**
     * фильтрация по виду пони
     * @param name
     */
    changeKind(name) {
        const { checked } = this.refs[name]
        const { kind } = this.state
        if (!checked) {
            this.setState({ kind: kind.filter(elem => elem !== name) })
            return
        }

        this.setState({ kind: kind.concat(name) })
    }

    render() {
        const { filterPopup } = this.props
        const { isNewPony, isOldPony, price } = this.state
        const { colors, ponyKinds } = defaultOptions

        return (
            <div>
                <FilterContainer filterPopup={filterPopup}>
                    <FilterHeader>Настройте фильтры
                        <FilterClose className="fa fa-times fa-lg" onClick={::this.closeFilter}/>
                    </FilterHeader>
                    <FilterBody>
                        <FilterType name="Выберите вид">
                            { ::this.getKinds(ponyKinds) }
                        </FilterType>
                        <FilterType name="Выберите цвет">
                            { ::this.getColors(colors) }
                        </FilterType>
                        <FilterType name="Выберите диапазон цен">
                            <FilterPriceContainer>
                                <div>
                                    <SpanPrice>от</SpanPrice>
                                    <input style={{width: "50px", margin: "3px 5px 0 0"}}
                                        type="text"
                                        ref="start"
                                        value={price.start}
                                        maxLength={4}
                                        onChange={() => ::this.changePrice('start')}
                                    />
                                </div>
                                <div>
                                    <SpanPrice>до</SpanPrice>
                                    <input style={{width: "50px", margin: "3px 5px 0 0"}}
                                        type="text"
                                        ref="end"
                                        value={price.end}
                                        maxLength={4}
                                        onChange={() => ::this.changePrice('end')}
                                    />
                                </div>
                            </FilterPriceContainer>
                        </FilterType>
                        <FilterType name="Новинка">
                            <div>
                                <input
                                    type="checkbox"
                                    checked={isNewPony}
                                    onChange={() => this.newPonyHandler()}
                                />
                                <span>Да</span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={isOldPony}
                                    onChange={() => this.oldPonyHandler()}
                                />
                                <span>Нет</span>
                            </div>
                        </FilterType>
                        <FilterButtonContainer>
                            <FilterButton onClick={::this.applyFilter}>Применить фильтры</FilterButton>
                            <FilterButton onClick={::this.resetFilter}>Сбросить фильтры</FilterButton>
                        </FilterButtonContainer>
                    </FilterBody>
                </FilterContainer>
            </div>
        )
    }
}

const FilterHeader = styled.div`
    text-align: center;
    padding: 15px 50px;
    color: white;
    position: relative;
    font-weight: bold;
    font-size: 20px;
`

const FilterContainer = styled.div`
    width: 30%;
    min-width: 170px;
    background-image: linear-gradient(to top right, red, #f06d06);
    position: fixed;
    top: 57px;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    transform: ${props => props.filterPopup ? 'translateX(0px)' : 'translateX(100%)'};
`
const FilterClose = styled.div`
    position: absolute;
    left: 16px;
    top: 16px;
    &:hover {
        cursor: pointer;
        color: #000;
    }
`

const FilterBody = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 10px 20px;
`

const FilterPriceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SpanPrice = styled.span`
    display: inline-block;
    width: 23px;
`

const FilterButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
`

const FilterButton = styled.button`
    border: 1px solid black;
    background-color: black;
    color: white;
    padding: 5px;
    margin: 5px 5px 0 0;
    width: 134px;
    font-size: 12px;
    &:hover {
        background-color: #f06d06;
        border-color: #f06d06;
        color: white;
        cursor: pointer;
    }
`


