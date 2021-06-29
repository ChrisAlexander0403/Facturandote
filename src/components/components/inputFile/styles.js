import styled from 'styled-components';
import {RiFileUploadLine} from 'react-icons/ri';
import {FiTrash2} from 'react-icons/fi';

export const UploadIcon = styled(RiFileUploadLine)`
  font-size: 22px;
  margin-right: 5px;
  border-right: 2px solid;
  width: 20%;
`;

export const RemoveIcon = styled(FiTrash2)`
  &:hover{
    color: red;
    cursor: pointer;
  }
`;

export const FileUploadContainer = styled.section`
    position: relative;
    margin: 25px 0 15px;
    border: 2px dotted #444;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #181818;
    &:hover{
      border-color: #ffef00;
    }
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  top: -30px;
  font-size: 16px;
  color: #fff;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
  color: #ffef00;
`;

export const UploadFileBtn = styled.button`
  margin: 20px 0 0;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 1px solid #ffef00;
  cursor: pointer;
  font-size: 14px;
  padding: 15px 5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffef00;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 110%;
    background: #ffef00;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }

  &:hover {
    color: #000;
    background: transparent;
    &:after {
      width: 110%;
    }
  }

  &:focus {
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
  span {
    margin-left: 10px;
  }
`;

export const FilePreviewContainer = styled.article`
  margin-bottom: 15px;

  span {
    font-size: 14px;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  flex-direction: column;
`;

export const FileMetaData = styled.div`
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.4);

  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const RemoveFileIcon = styled.i`
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const PreviewContainer = styled.section`
  width: 100%;
  height: 120px;
  box-sizing: border-box;

  &:hover {
    background: rgba(0,0,0,.55);

    ${FileMetaData} {
      display: flex;
    }
  }

  & > div:first-of-type {
    height: 100%;
    position: relative;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MaxSize = styled.p`
  color: #ffef00;
  font-size: 10px;
  margin: 10px 0 0;
`;