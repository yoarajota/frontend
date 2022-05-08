import { Box, Button, Center, Heading, Link, List, ListItem, Select, Text, Input, TableContainer, Table, TableCaption, Thead, Tr, Td, Th, Tbody } from "@chakra-ui/react";
import { useEffect, useState, } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";



export default function Form() {

    const router = useRouter();

    const [cadastro, setCadastro] = useState([{}])

    useEffect(async () => {
        let id = window.location.pathname.split('/')[1];
        await axios.get(`http://localhost:8000/api/${id}`).then(res => { setCadastro(res.data) }).catch(err => { alert('Erro!') });
    }, [])

    return (
        <Center>
            <Box w={'60%'}>
                <Box w={'100%'} textAlign={'center'}>
                    <Heading p={"25px"}>
                        Cadastro
                    </Heading>
                </Box>
                <Box display={"flex"} justifyContent={"space-around"} alignContent={"center"} alignItems={"center"}>
                    <Box>
                        <Link href="/" _active={'borderBox'}>
                            <IoIosArrowBack size={20} />
                        </Link>
                    </Box>
                    <Box>
                        <Text> {cadastro?.nome} </Text>
                    </Box>
                </Box>
                <Box justifyContent={'center'} textAlign={'center'} m={'125px'}>
                    <TableContainer m={'0 auto'} w={'90%'}>
                        <Table variant='simple'>
                            <TableCaption color={'brand.white'}>{cadastro?.id}</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th fontFamily={'Poppins'} letterSpacing={'1.2px'} textAlign={'center'} color={'brand.white'}>Nome</Th>
                                    <Th fontFamily={'Poppins'} letterSpacing={'1.2px'} textAlign={'center'} color={'brand.white'}>Descrição</Th>
                                    <Th fontFamily={'Poppins'} letterSpacing={'1.2px'} textAlign={'center'} color={'brand.white'}>Tensao</Th>
                                    <Th fontFamily={'Poppins'} letterSpacing={'1.2px'} textAlign={'center'} color={'brand.white'}>Marca</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign={'center'}>{cadastro?.nome}</Td>
                                    <Td textAlign={'center'}>{cadastro?.descricao}</Td>
                                    <Td textAlign={'center'}>{cadastro?.tensao}</Td>
                                    <Td textAlign={'center'}>{cadastro?.marca}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Center>
    )
}