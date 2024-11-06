import { ReactNode, FC } from 'react';
import { StyledTitle } from './Title.styles';

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = (props: TitleProps) => {
  const { children } = props;
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
