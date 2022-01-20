import classNames from 'classnames';
import React, { ChangeEvent, cloneElement, createRef, FC, useState } from 'react';

import Button from 'components/base/Button';

import { InputProps } from './types.d';

import './index.scss';

const Input: FC<InputProps> = ({
  accept,
  className,
  clearable,
  disabled,
  error,
  id,
  innerRef,
  leftAddon,
  name,
  onBlur,
  onChange,
  onClick,
  readOnly,
  rightAddon,
  placeholder,
  type,
  value,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const fileInputRef = createRef<HTMLInputElement>();
  const isFile = type === 'file';
  const isRadio = type === 'radio';
  const isCheckbox = type === 'checkbox';

  const clickClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file: File | null = e?.target?.files?.length ? (e.target.files[0] as File) : null;

    if (onChange) {
      onChange(file);
    }
  };

  const clickInput = () => {
    if (!disabled && fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={classNames(
        'custom-input',
        {
          disabled,
          error: !!error,
          focused,
          hovered,
          filled: !!value,
          prefixed: !!leftAddon,
          checkbox: isCheckbox,
          radio: isRadio,
        },
        className,
      )}
      ref={innerRef}
    >
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
      <div>
        <div>
          {leftAddon &&
            cloneElement(leftAddon, {
              className: classNames('input-prefix', { disabled }, leftAddon.props.className),
            })}
          {isFile && (
            <input
              accept={accept}
              className="hidden-input"
              disabled={disabled}
              name={name}
              onChange={changeFile}
              ref={fileInputRef}
              type="file"
            />
          )}
          <input
            {...rest}
            autoComplete="new-password"
            disabled={disabled}
            id={id}
            name={name}
            onBlur={(e) => {
              if (!disabled) {
                setFocused(false);

                if (onBlur) {
                  onBlur(e);
                }
              }
            }}
            onChange={(e) =>
              onChange && !isFile && onChange(e.target[isCheckbox ? 'checked' : 'value'])
            }
            onClick={isFile ? clickInput : onClick}
            onFocus={(e) => {
              setFocused(true);
              if (rest.onFocus) {
                rest.onFocus(e);
              }
              if (e.target.autocomplete) {
                e.target.autocomplete = 'new-password';
              }
            }}
            onMouseEnter={(e) => {
              setHovered(true);
              if (rest.onMouseEnter) {
                rest.onMouseEnter(e);
              }
            }}
            onMouseLeave={(e) => {
              setHovered(false);
              if (rest.onMouseLeave) {
                rest.onMouseLeave(e);
              }
            }}
            readOnly={readOnly || isFile}
            value={value}
            type={isFile ? 'text' : type}
          />
          {(isCheckbox || isRadio) && <span className="checkmark" />}
          {clearable && !isCheckbox && !isRadio && !!value && (
            <Button
              className="clear-button"
              color="transparent"
              onClick={clickClear}
              tabIndex={-1}
            />
          )}
          {rightAddon &&
            cloneElement(rightAddon, {
              className: classNames('input-suffix', { disabled }, rightAddon.props.className),
            })}
        </div>
      </div>
      <span className={classNames({ hidden: !error })}>{error}</span>
    </div>
  );
};

export default Input;
