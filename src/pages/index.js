import { Box, Button, Center, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";



export default function Index() {

  const [cadastros, setCadastros] = useState([])

  useEffect(async () => {
    let result = await fetch(`http://localhost:8000/api/index`);
    result = await result.json();
    setCadastros(result)
  }, [])


  const del = (id) => {
    console.log(id)
    axios.post(`http://localhost:8000/api/delete/${id}`, { _method: 'DELETE' }).then(res => {

      document.location.reload()
    });
  }

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
            <Text> Listagem </Text>
          </Box>
          <Box>
            <Link href="/form" _active={'borderBox'}>
              <MdAdd size={20} />
            </Link>
          </Box>
        </Box>
        <Box marginTop={'125px'}>
          {cadastros.map(cadastro => (
            <Box marginTop={'15px'} display={'flex'} w={'100%'} justifyContent={"space-around"} alignItems={'center'}>
              <Box w={'30%'}>
                <Link href={`${cadastro.id}`}> {cadastro.nome} </Link>
              </Box>
              <Link onClick={(e) => { del(cadastro.id) }}>
                <AiFillDelete />
              </Link>
            </Box>))}
        </Box>
      </Box>
    </Center>
  )
}