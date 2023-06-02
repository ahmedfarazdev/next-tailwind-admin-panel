//import axios from "axios";
import React, { useRef } from "react";

const ImageUploader = () => {
    //   const ref = useRef(null);

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const input = ref.current;

    //     const formData = new FormData();
    //     for (const file of Array.from(input.files ?? [])) {
    //       formData.append(file.name, file);
    //     }

    //     await axios.post("/api/upload", formData);
    //   };

    return (
        <form >
            <input
                type="file"
                name="files"
                multiple
                className="hidden"
                id="file-upload"
            />
            <label
                htmlFor="file-upload"
                className="px-4 py-2 text-white transition-colors duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring-blue-400"
            >
                Choose Files
            </label>

        </form>
    );
};

export default ImageUploader;
