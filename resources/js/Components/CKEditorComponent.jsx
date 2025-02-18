import React, { useState } from "react";
import { Controller } from "react-hook-form";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const CKEditorComponent = ({ control, name }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <CKEditor
                    
                    editor={ClassicEditor}
                    data={value && value}
                    onChange={(event, editor) => {
                        onChange(editor.getData());
                    }}
                />
            )}
        />
    );
};

export default CKEditorComponent;
