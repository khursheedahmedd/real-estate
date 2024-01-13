// pages/login.js
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <Box maxW="md" mx="auto" mt="10">
            <VStack spacing="4" p="6" borderWidth="1px" borderRadius="md" boxShadow="md">
                <form onSubmit={handleSubmit}>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="purple" mt="4" w="full">
                        Login
                    </Button>
                </form>
            </VStack>
        </Box>
    );
};

export default Login;
