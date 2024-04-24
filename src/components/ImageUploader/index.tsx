"use client";
import React, { useState } from 'react';
import Image from "next/image";
import styles from "./styles.module.css";

const ImageUploader: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleImage(file);
    };

    const handleImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            handleImage(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div
            className={styles.image_uploader}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {image ? (
                <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
            ) : (
                <div className={styles.upload_placeholder}>
                    <Image
                        className={styles.icon}
                        width={73}
                        height={51}
                        loading="lazy"
                        src="/assets/imgs/icons/svg/upload.svg"
                        alt="Upload Icon" />
                    <p className={styles.title}>Arraste e solte a imagem aqui ou <label className={styles.label} htmlFor="fileInput">clique aqui</label> para fazer o upload!</p>
                    <p className={styles.subtitle}>Largura X altura recomendada 1000 x 1000px. Tamanho máximo 800KB.</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        id="fileInput"
                    />
                    
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
