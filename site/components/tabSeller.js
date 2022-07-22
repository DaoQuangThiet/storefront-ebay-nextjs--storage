import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Box,
  Button,
  Heading,
  Center,
  Flex,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
// import Search_Collection from './searchcollection'

const TabSeller = (props) => {
  const { collections, products } = props
  const router = useRouter()
  const handleSubmit = (value) => {
    //console.log(value);
    router.replace(`?s1=${value}`)
  }
  return (
    <Box pt="6">
      <Center>
        <Heading
          as="h3"
          size="lg"
          color="brand.title"
          fontFamily="Merriweather"
          _before={{
            w: '15px',
            h: '1px',
            ml: '-6',
            mt: '5',
            content: `""`,
            position: 'absolute',
            backgroundColor: '#40c6ff',
          }}
          _after={{
            mt: '5',
            ml: '2',
            w: '15px',
            h: '1px',
            content: `""`,
            position: 'absolute',
            backgroundColor: '#40c6ff',
          }}
        >
          BEST SELLER
        </Heading>
      </Center>
      <Box w="1200px" m="12px auto">
        <Center>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              <Tab
                onClick={() => handleSubmit('')}
                border="1px solid #ccc"
                bg="#fff"
                mr="5"
              >
                All Product
              </Tab>
              {collections.length > 0 &&
                collections.map((item) => (
                  <Tab
                    key={item}
                    onClick={() => handleSubmit(item.slug)}
                    border="1px solid #ccc"
                    bg="#fff"
                    mr="5"
                    color="#666"
                    _hover={{ bg: 'brand.primary', color: ' white' }}
                  >
                    {item.name}
                  </Tab>
                ))}
            </TabList>
            {/* {products.length > 0 &&
              products.map((item) => (
                <TabPanels key={item}>
                  <TabPanel>
                    <Box
                      align="center"
                      m="10px"
                      p="10px"
                      border="1px solid #efefef"
                    >
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          <Image
                            w="100%"
                            src={item.productAsset.preview}
                            alt=""
                          />
                        </a>
                      </Link>
                      <Box>
                        {item.productName && (
                          <Heading
                            color="#323232"
                            fontSize="18px"
                            fontWeight="100"
                            pt="4"
                          >
                            <Link href={`/product/${item.slug}`}>
                              <a>{item.productName}</a>
                            </Link>
                          </Heading>
                        )}
                        <Text
                          mt={2}
                          fontSize="xl"
                          align="center"
                          color="brand.primary"
                        >
                          ${item.price.value / 100}
                        </Text>
                      </Box>
                    </Box>
                  </TabPanel>
                </TabPanels>
              ))} */}
          </Tabs>
        </Center>
      </Box>
    </Box>
  )
}
export default TabSeller
