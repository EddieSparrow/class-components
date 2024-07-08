import { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  resetError = () => {
    this.setState({
      errorMessage: null,
    });
  };
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return (
        <>
          <p>{this.state.errorMessage}</p>
          <button onClick={this.resetError}>Fix it</button>
        </>
      );
    }
    return this.props.children;
  }
}
