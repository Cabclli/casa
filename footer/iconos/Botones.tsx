'use client'; //Esto es necesario cuando el componente usa funcionalidades que deben ejecutarse en el cliente.

import React from 'react';
import Button from "@mui/material/Button/Button";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Botones = () => {
    const router = useRouter();//permite acceder a la información de la ruta actual y manipular la navegación en una aplicación Next.js

    const handleShareClick = () => {
        // Obtén la URL actual
        const currentUrl = window.location.href;

        // Copia la URL al portapapeles
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Enlace copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el enlace: ', err);
        });
    };
    return <>
        <Link href={"/about"} passHref >
            <Button variant="contained" color="primary" sx={{ height: "24px", width: "24px" }}>
                <ImportContactsIcon />
            </Button>

        </Link>
        <Link href={""}>
            <Button variant="contained" color="primary" sx={{ height: "24px", width: "24px" }}>

            </Button>
        </Link>
        <Link href={""}>
            <Button variant="contained" color="primary" sx={{ height: "24px", width: "24px" }}>
                <AccountBoxIcon />
            </Button>
        </Link>
        <Link href={""}>
            <Button variant="contained" color="primary" sx={{ height: "24px", width: "24px" }}>
                <LocationOnIcon />
            </Button>
        </Link>

        <Button
            variant="contained"
            color="primary"
            sx={{ height: "24px", width: "24px" }}
            onClick={handleShareClick}
        >
            <ShareIcon />
        </Button>

    </>
}

export default Botones;     