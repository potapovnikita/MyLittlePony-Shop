import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showFilter } from '../../store/actionsCreators/filterPopup'
import { setFilter, resetFilter } from '../../store/actionsCreators/filter'

import PoniesList from '../../components/PoniesList'
import PonyFilters from '../../components/PonyFilters'
import Header from '../../components/Header'

@connect(
    ({ poniesList, filterPopup, filter }) => ({ poniesList, filterPopup, filter }),
    (dispatch) => bindActionCreators({ showFilter, setFilter, resetFilter }, dispatch)
)

export default class extends Component {

    render() {
        const { poniesList, filterPopup, showFilter, setFilter, resetFilter, filter }  = this.props
        return (
            <div>
                <Header />
                <PoniesList poniesList={poniesList}
                           showFilter={showFilter}
                           filterValues={filter}
                />
                <PonyFilters filterPopup={filterPopup}
                             showFilter={showFilter}
                             setFilter={setFilter}
                             resetFilter={resetFilter}
                             filterValues={filter}
                />
            </div>
        )
    }
}