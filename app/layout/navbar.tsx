import {HamburgerIcon} from "@chakra-ui/icons";
import {
    Box,
    Container,
    Flex,
    Heading, IconButton,
    Link, Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {NavLink} from "@remix-run/react";
import {IoLogoGithub} from "react-icons/io5";
import Logo from "~/components/logo";
import ThemeToggleButton from "~/components/theme-toggle-button";

const LinkItem = ({path, children, ...props}) => {
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (<Box p={2}><NavLink
        to={path}

        style={({isActive}) => {
            return isActive ? {
                padding:'0.5rem',
                color:isActive?'#202023' : inactiveColor,
                backgroundColor:isActive?'#88ccca' : undefined
            } : { padding:'0.5rem',}
        }

        }>
        <Box display={"inline-flex"}  alignItems="center"
             style={{ gap: 4 }}
             pl={2}>
            {children}

        </Box>
    </NavLink></Box>)
}
export default function Navbar() {
    return <Box position={"fixed"} bg={useColorModeValue('#ffffff40', '#20202380')}
                zIndex={2}
                top={0}
                w={"100%"}
                as={"nav"}
                css={{backdropFilter: 'blur(10px)'}}>
        <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo/>
                </Heading>
            </Flex>
            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}>
                <LinkItem path={"/blogs"}>
                    Blogs
                </LinkItem>
                {/*<LinkItem path={"/product"}>*/}
                {/*    Product*/}
                {/*</LinkItem>*/}
                <Link
                    target="_blank"
                    href="https://github.com/nguyenbatranvan/remix-app"
                    display="flex"
                    alignItems="center"
                    style={{ gap: 4 }}
                    pl={2}
                >
                    <IoLogoGithub />
                    Source
                </Link>
            </Stack>
            <Box flex={1} align="right">
                <ThemeToggleButton/>
                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <NavLink to="/" >
                                <MenuItem as={Link}>About</MenuItem>
                            </NavLink>
                            <NavLink to="/blogs" >
                                <MenuItem as={Link}>Blogs</MenuItem>
                            </NavLink>
                            {/*<NavLink to="/product" >*/}
                            {/*    <MenuItem as={Link}>Product</MenuItem>*/}
                            {/*</NavLink>*/}
                            <MenuItem
                                as={Link}
                                href="https://github.com/nguyenbatranvan/remix-app"
                            >
                                View Source
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Container>
    </Box>
}
