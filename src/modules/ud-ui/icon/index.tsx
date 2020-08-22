import React, { FunctionComponent } from 'react';
import { IconNames } from './types';

type IconProps = {
  name: IconNames;
  className?: string;
};

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, ...otherProps } = props;
  const src = require(`./icons/${name}.svg`);

  return <img src={src} {...otherProps} alt={name} />;
};

export default Icon;
