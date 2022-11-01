interface ConditionalComponentProps {
  condition: boolean;
  children: JSX.Element;
  fallback?: JSX.Element;
}

const ConditionalComponent = ({ condition, fallback, children }: ConditionalComponentProps) => {
  return condition ? children : fallback;
};

export default ConditionalComponent;
