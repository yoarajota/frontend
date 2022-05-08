import { Box, Button, Center, Heading, Link, List, ListItem, Select, Text, Input } from "@chakra-ui/react";
import { useState, } from "react";
import axios from "axios";

export default function Form() {


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tensao, setTensao] = useState('');
    const [marca, setMarca] = useState('');


    async function store() {
        let store = { nome, descricao, tensao, marca };


        const config = {
            method: 'post',
            url: 'http://localhost:8000/api/store',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(store)
        };

        await axios(config)
            .then(function () { window.location.href = '/' })
    }

    return (
        <Box h={'100%'}>
            <Center display='block'>
                <Heading p={"25px"} textAlign={'center'}>
                    Cadastro
                </Heading>
                <Box margin={'125px auto'} w='40%'>
                    <Box>
                        <Input
                            size='lg'
                            _focus={'box-shadow: none'}
                            placeholder='Nome'
                            m={'15px'}
                            value={nome}
                            onChange={(e) => { { setNome(e.target.value) } }}
                        ></Input>
                        <Input
                            size='lg'
                            _focus={'box-shadow: none'}
                            placeholder='Descrição'
                            m={'15px'}
                            value={descricao}
                            onChange={(e) => { { setDescricao(e.target.value) } }}
                        ></Input>
                        <Input
                            size='lg'
                            _focus={'box-shadow: none'}
                            placeholder='Tensão'
                            type={'number'}
                            m={'15px'}
                            value={tensao}
                            onChange={(e) => { { setTensao(e.target.value) } }}
                        ></Input>
                        <Select
                            size='lg'
                            bg={'brand.black'}
                            variant='outline'
                            m={'15px'}
                            value={marca}
                            onChange={(e) => { { setMarca(e.target.value) } }}>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='-//-'>Marca</option>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='Electrolux'>Electrolux</option>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='Brastemp'>Brastemp</option>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='Fischer'>Fischer</option>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='Samsung'>Samsung</option>
                            <option style={{ backgroundColor: '#1b1b1c' }} value='LG'>LG</option>
                        </Select>
                    </Box>
                    <Button onClick={store} w={'100%'} m={'15px'} bg={'brand.black'} border={'1px solid rgba(255,255,255, 0)'} _hover={{ border: '1px solid rgba(255, 255, 255, 1)' }} transition={'0.5s'}>
                        Adicionar
                    </Button>
                </Box>
            </Center>
        </Box>
    )
}