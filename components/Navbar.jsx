import Link from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    Flex,
    Box,
    Spacer,
    MenuItem,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

// Navbar
const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        {/* Logo */}
        <Box fontSize="3xl" color="purple.600" fontWeight="bold">
            <Link href="/" paddingLeft="2">
                Property-Pulse
            </Link>
        </Box>
        <Spacer />
        <Box>
            {/* Menu */}
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<FcMenu />}
                    variant="outlined"
                    color="red.400"
                />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;
