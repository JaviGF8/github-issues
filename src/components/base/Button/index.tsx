import classNames from 'classnames';
import React, { FC, cloneElement, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { ButtonProps } from './types.d';

import './index.scss';

const Button: FC<ButtonProps> = ({
  id,
  className,
  children,
  color = 'primary',
  disabled,
  external,
  leftAddon,
  onClick,
  onMouseOver,
  rightAddon,
  style,
  tabIndex,
  text,
  testid,
  to,
  type = 'button',
}) => {
  const checkOnClick = () => {
    if (!disabled && onClick) {
      return onClick();
    }

    return () => false;
  };

  const clickButton = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      return onClick();
    }

    (event.target as HTMLButtonElement).blur();

    return () => false;
  };

  if (to && external) {
    return (
      <a
        id={id}
        className={classNames('custom-button', color, className, { disabled })}
        onClick={checkOnClick}
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        data-testid={testid}
        rel="noreferrer"
        style={style}
        tabIndex={tabIndex}
        target="_blank"
        href={to}
      >
        {leftAddon &&
          cloneElement(leftAddon, {
            className: classNames('button-prefix', leftAddon.props.className),
          })}
        <div>{text}</div>
        {children}
        {rightAddon &&
          cloneElement(rightAddon, {
            className: classNames('button-suffix', rightAddon.props.className),
          })}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        id={id}
        className={classNames('custom-button', color, className, { disabled })}
        onClick={checkOnClick}
        onFocus={onMouseOver}
        onMouseOver={onMouseOver}
        data-testid={testid}
        style={style}
        tabIndex={tabIndex}
        to={to}
      >
        {leftAddon &&
          cloneElement(leftAddon, {
            className: classNames('button-prefix', leftAddon.props.className),
          })}
        <div>{text}</div>
        {children}
        {rightAddon &&
          cloneElement(rightAddon, {
            className: classNames('button-suffix', rightAddon.props.className),
          })}
      </Link>
    );
  }
  return (
    <button
      id={id}
      className={classNames('custom-button', color, className, { disabled })}
      disabled={disabled}
      onClick={clickButton}
      onFocus={onMouseOver}
      onMouseOver={onMouseOver}
      data-testid={testid}
      style={style}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {leftAddon &&
        cloneElement(leftAddon, {
          className: classNames('button-prefix', leftAddon.props.className),
        })}
      {text && <div className="button-text">{text}</div>}
      {children}
      {rightAddon &&
        cloneElement(rightAddon, {
          className: classNames('button-suffix', rightAddon.props.className),
        })}
    </button>
  );
};

export default Button;
