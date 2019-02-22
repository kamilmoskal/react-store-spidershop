import { createSelector } from 'reselect';

const getChartList = state => state.chartList;

export const totalPriceChart = createSelector(
  [getChartList],
  (chartList) => {
    let total = 0;
    chartList.forEach(e => total += e.price * e.amount );
    return total
  }
)

