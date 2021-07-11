import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone'
import Head from "next/head";
import AppLayout2 from "../components/AppLayout2";

import { ADD_FILE_REQUEST } from '../reducers/file';


const h1_style = {
    textAlign: "center",
    fontWeight: 900,
}

const dropzone_style = {
    background: "white",
    borderRadius: "5px",
    border: "2px dashed rgb(0, 135, 247)",
    borderImage: "none",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100px",
    height:"auto"
}


function file_attach() {
    // const [filesToUpload, setFilesToUpload] = useState([])
    const dispatch = useDispatch();

    const onDrop = useCallback(acceptedFiles => {
        console.log("acceptedFileds : ", acceptedFiles);
        // setFilesToUpload(acceptedFiles)
        dispatch({
            type: ADD_FILE_REQUEST,
            data: acceptedFiles
        });
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, noClick:true })
    const { filesToUpload,addFileLoading, addFileDone } = useSelector((state) => state.file);


    return (
        <>
            <Head>
                <title>파일 첨부 prototype </title>
            </Head>
            <AppLayout2>
                <h1 style={h1_style}>File Attach Demo</h1>
                <div {...getRootProps()} style={dropzone_style}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the filesToUpload here ...</p> :
                            <p>Drag 'n' drop some filesToUpload here, or click to select filesToUpload</p>
                    }

                    {filesToUpload && filesToUpload.map((file)=> {
                        return (
                            <div>{file.name}</div>
                        )
                    })}
                </div>
            </AppLayout2>

        </>
    )
}

export default file_attach;
