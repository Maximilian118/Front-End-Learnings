import React, {Component} from 'react';

// This is an error boundary Component. These are used to 'catch' errors if there is one
// and replace the default browser error with one that might be more helpful or in regards
// to a database, simply allow it to return some sort of error.

// NOTE: ErrorBoundary's should NOT be used in abundance. Only use ErrorBoundary's if a
// piece of code might return an error or you're troubleshooting.

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errMessage: ''
  }

  componentDidCatch = (err, info) => {
    this.setState({hasError: true, errMessage: err});
  }

  render() {
    if (this.state.hasError) {
      return <h4>{this.state.errMessage}</h4>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;