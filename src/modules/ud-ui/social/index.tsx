import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import Icon from '../icon';
import { IconNames } from '../icon/types';
import isLastItem from 'src/modules/helpers/lastItem';

type SocialProps = {};
type Social = { icon: IconNames; link: string };

const socials: Social[] = [
  { icon: 'twitter', link: 'https://twitter.com/' },
  { icon: 'instagram', link: 'https://instagram.com/' },
  { icon: 'facebook', link: 'https://facebook.com/' },
  { icon: 'vk', link: 'https://vk.com/' },
];

const UDSocial: FunctionComponent<SocialProps> = (props) => {
  return (
    <div className="d-flex align-items-center">
      {socials.map((social, index) => {
        const SocialWrapClassName = cn({ 'mr-8': !isLastItem(socials, index) });
        return (
          <div className={SocialWrapClassName} key={social.link}>
            <a href={social.link}>
              <Icon name={social.icon} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default UDSocial;
