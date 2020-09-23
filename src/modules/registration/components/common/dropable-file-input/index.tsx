import { pathOr } from 'ramda';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { useTranslation } from 'react-i18next';
import {
  Body, DropLogo, FileInputLabel, InputContainer, PeviewImage, ClearInput
} from './elements';

interface IProps {
  file?: string | null;
  onChange?: (data: string | ArrayBuffer | null) => void;
  isLoading?: boolean; // nullable type for compability only
  onClear?: () => void;
}

export const DropableFileInput: React.FC<IProps> = ({
  file, onChange, isLoading, onClear
}) => {
  const [hover, setHover] = useState(false);

  const hoverOn = useCallback(() => {
    setHover(true);
  }, [setHover]);

  const hoverOff = useCallback(() => {
    setHover(false);
  }, [setHover]);

  const dropFile = (files: File[]) => {
    if (onChange) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        const data = pathOr(null, ['target', 'result'])(event);
        onChange(data);
      };
    }
  };

  const changeFileToNull = () => {
    if (onChange) {
      onChange(null);
    }
  };

  const clearFile = () => {
    if (onClear) {
      onClear();
    } else {
      changeFileToNull();
    }
  };

  const {
    getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject
  } = useDropzone({
    accept: 'image/*',
    onDrop: dropFile,
  });

  const fileNotChosen = !file;

  const { t } = useTranslation();
  const dropFileHere = t('Drop file here');
  const loading = t('Loading...');
  const clickToUpload = t('Click here to upload the document');

  return (
    <InputContainer onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
      {fileNotChosen ? (
        <Body {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <DropLogo />
          <FileInputLabel>{isDragActive ? dropFileHere : isLoading ? loading : clickToUpload}</FileInputLabel>
        </Body>
      ) : (
        <Body>
          {hover ? (
            <ClearInput onClick={clearFile}>Click to clear file</ClearInput>
          ) : (
            <PeviewImage src={file as string | undefined} />
          )}
        </Body>
      )}
    </InputContainer>
  );
};
