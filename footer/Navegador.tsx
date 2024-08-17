'use client'; //Esto es necesario cuando el componente usa funcionalidades que deben ejecutarse en el cliente.
import { Box, Stack, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Botones from "./iconos/Botones";


const Navegador = () => {
    return (
        <Box
            component="footer"
            position="absolute"
            bottom={16}
            left="40%"
            right={0}
            bgcolor={"#446129"}
            display="flex"
            justifyContent="center"
            sx={{
                borderRadius: "32px", width: "144px",
            }}
            paddingBottom={16}
            paddingTop={16}
            paddingLeft={24}
            paddingRight={24}
        >
            <Stack
                direction="row"


                spacing={2}


            >
                <Botones />

            </Stack>
        </Box>
    );
};

export default Navegador;
