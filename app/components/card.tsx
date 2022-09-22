import {LinkBox, LinkOverlay, Text, Image, Box, Skeleton} from "@chakra-ui/react";

function CardThumbnail({thumbnail,title,children}){
    return (<Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={"https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8="}
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
