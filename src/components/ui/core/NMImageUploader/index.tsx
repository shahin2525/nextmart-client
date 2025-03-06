import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import { Label } from "../../label";
import Image from "next/image";
type TImageUploader = {
  ImageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<File[] | []>>;
};
const NMImageUploader = ({ ImageFiles, setImageFiles }: TImageUploader) => {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
    }
    event.target.value = "";
  };
  return (
    <div>
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="image-uploader"
      />
      <Label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        Image Upload
      </Label>
      <div>
        {imagePreview.map((img, idx) => (
          <Image
            src={img}
            key={idx}
            width={400}
            height={400}
            alt="preview img"
          />
        ))}
      </div>
    </div>
  );
};

export default NMImageUploader;
