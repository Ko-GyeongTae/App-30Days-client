import React, {useState} from "react";

const useInput = (intialValue) => {
    const [value, setValue] = useState(intialValue);
    const onChangeText = text => {
        if(text.length <= 18){
            setValue(text);
        }
    };
    return { value, onChangeText };
};

export default useInput;