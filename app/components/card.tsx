import {LinkBox, LinkOverlay, Text, Image, Box} from "@chakra-ui/react";

function CardThumbnail({thumbnail,title,children}){
    return (<Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
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
        </LinkBox>
    </Box>)
}
export default CardThumbnail;
