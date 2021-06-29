import React, {useState, useRef} from 'react';
import { 
    FileUploadContainer, 
    FormField, 
    DragDropText, 
    UploadFileBtn, 
    FilePreviewContainer, 
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveIcon, 
    UploadIcon,
    InputLabel,
    MaxSize
} from './styles';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 2097152;
const BYTES_PER_KILO_BYTE = 1024;

const convertBytesToKB = (bytes) => Math.round(bytes / BYTES_PER_KILO_BYTE);

const File = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    const fileInput = useRef(null);
    const [files, setFiles] = useState({});

const handleUploadBtnClick = () => {
    fileInput.current.click();
}

const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if(newFiles.length){
        let updatedFiles = addNewFiles(newFiles);
        setFiles(updatedFiles);
        callUpdateFilesCb(updatedFiles);
    }
}

const addNewFiles = (newFiles) => {
    for(let file of newFiles){
        if(file.size <= maxFileSizeInBytes){
            if(!otherProps.multiple){
                return { file };
            }
            files[file.name] = file;
        }
    }
    return { ...files };
}

const convertNestedObjectToArray = (nestedObj) => Object.keys(nestedObj).map((key) => nestedObj[key]);

const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
};

const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
};

    return(
        <>
            <FileUploadContainer>
                <InputLabel>{label}</InputLabel>
                <DragDropText>Arrastre sus archivos aquí ó</DragDropText>
                <UploadFileBtn type={'button'} onClick={handleUploadBtnClick}>
                    <UploadIcon/>
                    <span>Cargar {otherProps.multiple ? "archivos" : "archivo"}</span>
                </UploadFileBtn >
                <MaxSize>2MB Máximo</MaxSize>
                <FormField type={'file'} ref={fileInput} onChange={handleNewFileUpload} title={''} value={''} {...otherProps}/>
            </FileUploadContainer>

            <FilePreviewContainer>
                <PreviewList>
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        return(
                            <PreviewContainer  key={fileName}>
                                <div>
                                    {isImageFile && (
                                        <ImagePreview
                                            src={URL.createObjectURL(file)}
                                            alt={`Vista previa ${index}`}
                                        />
                                    )}
                                    <FileMetaData isImageFile={isImageFile}>
                                        <span>{file.name}</span>
                                        <aside>
                                            <span>{convertBytesToKB(file.size)} kb</span>
                                            <RemoveIcon onClick={() => removeFile(fileName)}/>
                                        </aside>
                                    </FileMetaData>
                                </div>
                            </PreviewContainer >
                        );
                    })}
                </PreviewList>
            </FilePreviewContainer>
        </>
    );
}

export default File;