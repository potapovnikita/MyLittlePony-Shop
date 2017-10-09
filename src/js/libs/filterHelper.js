export default class Filter {
    /**
     * Получение отфильтрованного списка товааров
     */
    getFilteredValues(list, filters) {
        return list
            .filter(item => filters.price.end ? filters.price.end >= item.price : true)
            .filter(item => filters.price.start ? filters.price.start <= item.price : true)
            .filter(item => filters.color ? filters.color === item.color : true)
            .filter(item => filters.kind.length ? filters.kind.some(elem => elem === item.kind) : true)
            .filter(item => filters.isNew === true || false ? filters.isNew === item.isNew : true)
    }
}

