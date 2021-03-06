/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var overrideAll = require('../../plot_api/edit_types').overrideAll;
var Plots = require('../../plots/plots');
var plot = require('./plot');
var fxAttrs = require('../../components/fx/layout_attributes');

exports.name = 'sankey';

exports.attr = 'type';

exports.baseLayoutAttrOverrides = overrideAll({
    hoverlabel: fxAttrs.hoverlabel
}, 'plot', 'nested');

exports.plot = function(gd) {
    var calcData = Plots.getSubplotCalcData(gd.calcdata, 'sankey', 'sankey');
    if(calcData.length) plot(gd, calcData);
};

exports.clean = function(newFullData, newFullLayout, oldFullData, oldFullLayout) {
    var hadPlot = (oldFullLayout._has && oldFullLayout._has('sankey'));
    var hasPlot = (newFullLayout._has && newFullLayout._has('sankey'));

    if(hadPlot && !hasPlot) {
        oldFullLayout._paperdiv.selectAll('.sankey').remove();
    }
};
