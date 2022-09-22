import {
    Box,
    chakra,
    Image,
    Container,
    Heading,
    useColorModeValue,
    List,
    ListItem,
    Link,
    Button
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {MetaFunction} from "@remix-run/node";
import {useNavigate} from "@remix-run/react"
import {IoLogoGithub, IoLogoInstagram, IoLogoTwitter} from "react-icons/io5";
import {variants} from "~/utils/variants-motion";
import {motion} from "framer-motion";
import Paragraph from "~/components/paragrapth";

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export default function Index() {
    const navigate = useNavigate();
    const onProducts = () => {
        navigate('/product');
    }

    const onBlogs = () => {
        navigate('/blogs');
    }
    return (<motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{duration: 0.4, type: 'easeInOut'}}
            style={{position: 'relative'}}
        >
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    css={{backdropFilter: 'blur(10px)'}}
                >
                    Hello, I&apos;m an indie app developer based in Vietnam!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nguyễn Bá Trần Văn
                        </Heading>
                        <p>StageIT iCondo ( Front end developer )</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <ProfileImage
                                src="/images/profile.png"
                                alt="Profile image"
                                borderRadius="full"
                                objectFit={"cover"}
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box marginY={4}>
                    <Heading variant={"title-under-line"}>
                        Work
                    </Heading>
                    <Paragraph>
                        I am a project person on websites for product or outsource companies. My existing background is
                        mainly on javascript language and strong support libraries for it like Reactjs, Nextjs, Remix
                        and some frameworks like angular.
                    </Paragraph>
                </Box>
                <Box marginY={4}>
                    <Heading variant={"title-under-line"}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in Binh Thuan, Vietnam.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Study at university of natural sciences, Ho Chi Minh city, Vietnam
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Got my first programming job at INet Solutions
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Working at StageIt company
                    </BioSection>
                </Box>
                <Box marginY={4}>
                    <Heading variant={"title-under-line"}>
                        Contact Social
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/nguyenbatranvan" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub/>}
                                >
                                    @nguyenbatranvan
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/VnBKinh1" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoTwitter/>}
                                >
                                    @VnBKinh1
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://instagram.com/nguyenbatran" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoInstagram/>}
                                >
                                    @nguyenbatran
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </motion.div>
    );
}

export const meta: MetaFunction = () => ({
    title: "Portfolio of nguyen ba tran van",
    description: "This page is detail work of nguyen ba tran van from 2014 to now",
    "og:description": "This page is detail work of nguyen ba tran van from 2014 to now",
    "og:image": '/images/profile.png',
});
