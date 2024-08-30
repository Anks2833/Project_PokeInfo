import { useState } from "react";
import { useForm } from 'react-hook-form';

const Image_preview = () => {

    const [imagePreview, setImagePreview] = useState("");

    const { register, handleSubmit, reset } = useForm();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            setImagePreview("");
        }
    };

    return (
        <div>
            <label htmlFor="Image" className="text-white">Pokemon-Image (Upload a PNG/JPG image): </label>
            <input
                className="w-[25vw] rounded-lg bg-zinc-800 text-white"
                id="Image"
                onChange={handleImageChange}
                type="file"
                accept="image/png, image/jpeg"  // Limit to PNG and JPEG for testing
            />
            <div>
                {imagePreview ? (
                    <img src={imagePreview} alt="Pokemon Preview" style={{ maxWidth: "300px", maxHeight: "300px" }} />
                ) : (
                    <p>No image selected</p>
                )}
            </div>
        </div>
    )
}

export default Image_preview