# redux-object-connect

This is a library that wraps the connect function from [react-redux](https://github.com/reactjs/react-redux) to enable passing an object in place of a mapStateToProps function.

Installation
-----------

````
npm install --save redux-object-connect
````

Usage
-----
The original connect function requires mapStateToProps to be a function with a single argument (state), for example,

````
import { selector } from './wherever/your/selector/is';
import { connect } from 'react-redux';

const YourComponent = ....

const mapStateToProps = state = ({
    selector1: selector1(state),
    selector2: selector2(state),
    anotherSelector: selector3(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
````

redux-object-connect will take an object containing selectors and produce the appropriate function.  For example, the equivalent to the above example would be:

````
import { selector } from './wherever/your/selector/is';
import connect from 'redux-object-connect';

const YourComponent = ....

const mapStateToProps = {
    selector1,
    selector2,
    anotherSelector: selector3
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
````
