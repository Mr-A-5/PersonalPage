import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
    /**
     * Rendered in place of the subtree once it has thrown. Decorative
     * boundaries leave this off to drop the subtree silently.
     */
    fallback?: ReactNode;
};

type State = { failed: boolean };

/**
 * Keeps one broken subtree from taking down the whole page. React unmounts the
 * entire tree on an uncaught error, so without a boundary a single failing
 * component leaves a blank screen.
 *
 * Only catches errors thrown while rendering, in lifecycles, and in effects.
 * Event handlers, promises, timeouts and requestAnimationFrame callbacks run
 * outside React's call stack and still need their own try/catch.
 */
export default class ErrorBoundary extends Component<Props, State> {
    state: State = { failed: false };

    static getDerivedStateFromError(): State {
        return { failed: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Caught by ErrorBoundary:', error, info.componentStack);
    }

    render() {
        if (this.state.failed) return this.props.fallback ?? null;
        return this.props.children;
    }
}
