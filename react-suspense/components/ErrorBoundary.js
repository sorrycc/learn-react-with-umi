import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false, error: null
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something error: {this.state.error.message}</h1>
    }

    return this.props.children;
  }
}
