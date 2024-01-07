import Link from "next/link";
import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    Flex,
    Box,
    Spacer,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {

        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
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
            {/* Conditional rendering of Login and Sign Up Buttons */}
            <Box>
                {!isLoggedIn && (
                    <>
                        <Button onClick={handleLogin} mr="1">
                            Login
                        </Button>
                        <Button colorScheme="purple" onClick={handleLogin}>
                            Sign Up
                        </Button>
                    </>
                )}
            </Box>
        </Flex>
    );
};

export default Navbar;
