import {LinkBox, LinkOverlay, Text, Image, Box, Skeleton} from "@chakra-ui/react";
import {NavLink} from "@remix-run/react";

function CardThumbnail({thumbnail,title,children,href}){
    return (<Box w="100%" textAlign="center" cursor={"pointer"}>
        <NavLink to={href}>
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
            <LinkOverlay>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </NavLink>
    </Box>)
}
export default CardThumbnail;
