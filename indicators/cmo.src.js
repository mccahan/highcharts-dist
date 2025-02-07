/**
 * @license Highstock JS v11.1.0 (2023-08-20)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2021 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/indicators/cmo', ['highcharts', 'highcharts/modules/stock'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    'use strict';
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);

            if (typeof CustomEvent === 'function') {
                window.dispatchEvent(new CustomEvent(
                    'HighchartsModuleLoaded',
                    { detail: { path: path, module: obj[path] } }
                ));
            }
        }
    }
    _registerModule(_modules, 'Stock/Indicators/CMO/CMOIndicator.js', [_modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (SeriesRegistry, U) {
        /* *
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { sma: SMAIndicator } = SeriesRegistry.seriesTypes;
        const { isNumber, merge } = U;
        /* *
         *
         *  Class
         *
         * */
        /**
         * The CMO series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.cmo
         *
         * @augments Highcharts.Series
         */
        class CMOIndicator extends SMAIndicator {
            constructor() {
                /* *
                 *
                 *  Static Properties
                 *
                 * */
                super(...arguments);
                /* *
                 *
                 *  Properties
                 *
                 * */
                this.data = void 0;
                this.options = void 0;
                this.points = void 0;
            }
            /* *
             *
             *  Functions
             *
             * */
            getValues(series, params) {
                const period = params.period, xVal = series.xData, yVal = series.yData, yValLen = yVal ? yVal.length : 0, CMO = [], xData = [], yData = [];
                let i, index = params.index, values;
                if (xVal.length < period) {
                    return;
                }
                if (isNumber(yVal[0])) {
                    values = yVal;
                }
                else {
                    // In case of the situation, where the series type has data length
                    // shorter then 4 (HLC, range), this ensures that we are not trying
                    // to reach the index out of bounds
                    index = Math.min(index, yVal[0].length - 1);
                    values = yVal.map((value) => value[index]);
                }
                let firstAddedSum = 0, sumOfHigherValues = 0, sumOfLowerValues = 0, y;
                // Calculate first point, check if the first value
                // was added to sum of higher/lower values, and what was the value.
                for (let j = period; j > 0; j--) {
                    if (values[j] > values[j - 1]) {
                        sumOfHigherValues += values[j] - values[j - 1];
                    }
                    else if (values[j] < values[j - 1]) {
                        sumOfLowerValues += values[j - 1] - values[j];
                    }
                }
                // You might devide by 0 if all values are equal,
                // so return 0 in this case.
                y =
                    sumOfHigherValues + sumOfLowerValues > 0 ?
                        (100 * (sumOfHigherValues - sumOfLowerValues)) /
                            (sumOfHigherValues + sumOfLowerValues) :
                        0;
                xData.push(xVal[period]);
                yData.push(y);
                CMO.push([xVal[period], y]);
                for (i = period + 1; i < yValLen; i++) {
                    firstAddedSum = Math.abs(values[i - period - 1] - values[i - period]);
                    if (values[i] > values[i - 1]) {
                        sumOfHigherValues += values[i] - values[i - 1];
                    }
                    else if (values[i] < values[i - 1]) {
                        sumOfLowerValues += values[i - 1] - values[i];
                    }
                    // Check, to which sum was the first value added to,
                    // and substract this value from given sum.
                    if (values[i - period] > values[i - period - 1]) {
                        sumOfHigherValues -= firstAddedSum;
                    }
                    else {
                        sumOfLowerValues -= firstAddedSum;
                    }
                    // Same as above.
                    y =
                        sumOfHigherValues + sumOfLowerValues > 0 ?
                            (100 * (sumOfHigherValues - sumOfLowerValues)) /
                                (sumOfHigherValues + sumOfLowerValues) :
                            0;
                    xData.push(xVal[i]);
                    yData.push(y);
                    CMO.push([xVal[i], y]);
                }
                return {
                    values: CMO,
                    xData: xData,
                    yData: yData
                };
            }
        }
        /**
         * Chande Momentum Oscilator (CMO) technical indicator. This series
         * requires the `linkedTo` option to be set and should be loaded after
         * the `stock/indicators/indicators.js` file.
         *
         * @sample stock/indicators/cmo
         *         CMO indicator
         *
         * @extends      plotOptions.sma
         * @since 9.1.0
         * @product      highstock
         * @requires     stock/indicators/indicators
         * @requires     stock/indicators/cmo
         * @optionparent plotOptions.cmo
         */
        CMOIndicator.defaultOptions = merge(SMAIndicator.defaultOptions, {
            params: {
                period: 20,
                index: 3
            }
        });
        SeriesRegistry.registerSeriesType('cmo', CMOIndicator);
        /* *
         *
         *  Default Export
         *
         * */
        /* *
         *
         *  API Options
         *
         * */
        /**
         * A `CMO` series. If the [type](#series.cmo.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.cmo
         * @since 9.1.0
         * @product   highstock
         * @excluding dataParser, dataURL
         * @requires  stock/indicators/indicators
         * @requires  stock/indicators/cmo
         * @apioption series.cmo
         */
        (''); // to include the above in the js output

        return CMOIndicator;
    });
    _registerModule(_modules, 'masters/indicators/cmo.src.js', [], function () {


    });
}));