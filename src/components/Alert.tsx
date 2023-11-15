import Alert from 'react-bootstrap/Alert';

interface AlertProps {
  children: string;
  variant: string;
}

const AlertComponent = ({ children, variant }: AlertProps) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default AlertComponent;
