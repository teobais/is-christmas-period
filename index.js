'use strict';

module.exports = function(date) {
    var givenDate = date || new Date();
    var isEndNovember = (givenDate.getMonth() === 10 && givenDate.getDate() >= 28);
    var isDecember = (givenDate.getMonth() === 11);
    var isStartJanuary = (givenDate.getMonth() === 0 && givenDate.getDate() <= 8);

    return (isEndNovember || isDecember || isStartJanuary);
};