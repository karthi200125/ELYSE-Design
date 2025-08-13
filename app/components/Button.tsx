import Image from "next/image";

interface CustomImageProps {
    className?: string;
    img_cls?: string;
    src: any;
    alt?: string;
}

const CustomImage = ({ className, img_cls, src, alt }: CustomImageProps) => {
    return (
        <div className={`${className} relative overflow-hidden`}>
            <Image
                src={src || ''}
                alt={alt || "Image"}
                fill
                className={`${img_cls} absolute top-0 left-0 w-full h-full object-cover`}
            />
        </div>
    );
};

export default CustomImage;
