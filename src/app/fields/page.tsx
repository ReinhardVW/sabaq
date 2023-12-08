"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@nextui-org/react";
import NavigationBar from "@/components/NavBar";

export default function App() {
    const nextDay = new Date();

    return (
        <>
            <NavigationBar />
            <div className="w-full flex flex-col items-center">
                <Table className="w-10/12" aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>ARTICULO</TableColumn>
                        <TableColumn>FECHA DE INGRESO</TableColumn>
                        <TableColumn>ESTADO</TableColumn>
                        <TableColumn>NOTAS</TableColumn>
                        <TableColumn>FOTO</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Gorra</TableCell>
                            <TableCell>06/12/2023 23:00:03</TableCell>
                            <TableCell>Bueno</TableCell>
                            <TableCell></TableCell>
                            <TableCell><Image src="./gorra.jpg" width={100} height={1} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
