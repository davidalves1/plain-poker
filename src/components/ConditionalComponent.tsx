interface ConditionalComponentProps {
  condition: boolean;
  children?: JSX.Element;
}

const ConditionalComponent = ({ condition, children }: ConditionalComponentProps) => {
  return condition && children;
};

export default ConditionalComponent;
