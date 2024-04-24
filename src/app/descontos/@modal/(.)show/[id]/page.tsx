"use client";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import Image from "next/image";
import Button from "@/components/Button";

import styles from "./styles.module.css";

export default function ModalShow() {

    const router = useRouter();

    const onClose = () => {
        router.back();
    }

    const product = {
        image: "/assets/imgs/products/large/image1.png",
        name: "Biscoito integral cereale Cacau 150g",
        description: "O Biscoito Bauducco Cereale Cacau, Aveia e Mel Integrais é uma Fonte de fibras e com cereais integrais.",
        price: {
            type: "de/por",
            title: "Leve 5 Pague 2",
            de: "R$ 5,50",
            por: "R$ 5,00"
        }
    }

    return (
        <>
            <Modal title="Detalhes do desconto" isOpen onClose={onClose}>
                <div className={styles.container}>
                    <div className={styles.product}>
                        <div className={styles.product_image}>
                            <Image
                                width={250}
                                height={250}
                                loading="lazy"
                                src={product.image}
                                alt="product image"
                            />
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.title}>{product.price.title}</div>
                            <div className={styles.product_name}>{product.name}</div>
                            <div className={styles.product_description}>{product.description}</div>
                            <div className={styles.product_price1}>de <span className={styles.line_through}>{product.price.de}</span></div>
                            <div className={styles.product_price2}>por {product.price.por}</div>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Button type="secondary" width="max">Editar</Button>
                        <Button type="primary" width="max">Fechar</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}