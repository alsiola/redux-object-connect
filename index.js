'use strict';

var reactRedux = require('react-redux');

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var reduxObjectConnect = function reduxObjectConnect(mapStateToProps, mapDispatchToProps) {

    var typeProvided = typeof mapStateToProps === "undefined" ? "undefined" : _typeof(mapStateToProps);

    if (mapStateToProps === null || typeProvided === "undefined" || typeProvided === "function") {
        return reactRedux.connect(mapStateToProps, mapDispatchToProps);
    }

    if (typeProvided !== "object") {
        throw new Error("mapStateToProps argument must be an object, a function or null.");
    }

    var mapStateToPropsObjectAsFunction = function mapStateToPropsObjectAsFunction(state, ownProps) {
        return Object.keys(mapStateToProps).reduce(function (prev, key) {
            if (mapStateToProps.hasOwnProperty(key)) {
                prev[key] = mapStateToProps[key](state, ownProps);
            }
            return prev;
        }, {});
    };

    return reactRedux.connect(mapStateToPropsObjectAsFunction, mapDispatchToProps);
};

module.exports = reduxObjectConnect;
