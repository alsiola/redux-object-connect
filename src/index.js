import { connect } from 'react-redux';

const reduxObjectConnect = (mapStateToProps, mapDispatchToProps) => {

    const typeProvided = typeof mapStateToProps;

    if (mapStateToProps === null || typeProvided === "undefined" || typeProvided === "function") {
        return connect(mapStateToProps, mapDispatchToProps);
    }

    if (typeProvided !== "object") {
        throw new Error("mapStateToProps argument must be an object, a function or null.");
    }


    const mapStateToPropsObjectAsFunction = (state, ownProps) => (
        Object.keys(mapStateToProps).reduce((prev, key) => {
            if (mapStateToProps.hasOwnProperty(key)) {
                prev[key] = mapStateToProps[key](state, ownProps);
            }
            return prev;
        }, {})
    );
    
    return connect(mapStateToPropsObjectAsFunction, mapDispatchToProps);
}

export default reduxObjectConnect;