import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import isLastItem from 'src/modules/helpers/lastItem';

type List = string[];

type ListsProps = {
  lists: List[];
};

const UDLists: FunctionComponent<ListsProps> = (props) => {
  const { lists } = props;

  return (
    <>
      {lists.map((column, index) => {
        const ulWrapClassName = cn({ 'mr-20': !isLastItem(lists, index) });
        return (
          <div className={ulWrapClassName} key={index.toString()}>
            <ul>
              {column.map((item, index) => {
                const liClassName = cn({ 'mb-5': !isLastItem(column, index) });
                return (
                  <S.Li className={liClassName} key={`${item}_${index}`}>
                    <a href="https://rdbx.ru/">{item}</a>
                  </S.Li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default UDLists;
