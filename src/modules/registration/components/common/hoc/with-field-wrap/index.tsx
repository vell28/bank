import React, { useState, useEffect } from 'react';

export interface IFieldWrapper {
  isTouch: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
}

export default function (Component: React.FC<any>) {
  return (props: any) => {
    const [isTouch, setIsTouch] = useState<boolean>(false);

    const { meta } = props;
    const { submitFailed } = meta;

    useEffect(() => {
      if (submitFailed !== isTouch) {
        setIsTouch(submitFailed);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitFailed]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event;
      const { input } = props;

      if (!isTouch) {
        setIsTouch(true);
      }

      // eslint-disable-next-line no-param-reassign
      event.target.value = value.replace(/^\s+/g, '').replace(/\s*\s/g, ' ');

      if (input && input.onChange) {
        return input.onChange(event);
      }
      return event;
    };

    const handleFocus = () => {
      if (isTouch) {
        setIsTouch(false);
      }
    };

    const handleBlur = () => {
      if (!isTouch) {
        setIsTouch(true);
      }
    };

    return (
      <Component
        {...props}
        isTouch={isTouch}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
    );
  };
}
