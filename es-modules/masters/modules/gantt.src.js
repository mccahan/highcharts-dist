/**
 * @license Highcharts Gantt JS v11.1.0 (2023-08-20)
 * @module highcharts/modules/gantt
 * @requires highcharts
 *
 * Gantt series
 *
 * (c) 2016-2021 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Navigator from '../../Stock/Navigator/Navigator.js';
import Scrollbar from '../../Stock/Scrollbar/Scrollbar.js';
import RangeSelector from '../../Stock/RangeSelector/RangeSelector.js';
import XRangeSeries from '../../Series/XRange/XRangeSeries.js';
import '../../Series/Gantt/GanttSeries.js';
import GanttChart from '../../Core/Chart/GanttChart.js';
import ArrowSymbols from '../../Extensions/ArrowSymbols.js';
import CurrentDateIndication from '../../Extensions/CurrentDateIndication.js';
const G = Highcharts;
// Classes
G.GanttChart = GanttChart;
G.ganttChart = GanttChart.ganttChart;
G.Navigator = Navigator;
G.RangeSelector = RangeSelector;
G.Scrollbar = Scrollbar;
// Compositions
ArrowSymbols.compose(G.SVGRenderer);
CurrentDateIndication.compose(G.Axis, G.PlotLineOrBand);
Navigator.compose(G.Axis, G.Chart, G.Series);
RangeSelector.compose(G.Axis, G.Chart);
Scrollbar.compose(G.Axis);
XRangeSeries.compose(G.Axis);
