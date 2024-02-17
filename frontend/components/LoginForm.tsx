"use client";

import { LoginSchema } from "@/types/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase/config";
import { useRouter } from "next/navigation";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function googleLogin() {
    try {
      const googleSignin = await signInWithPopup(auth, provider);
      console.log(googleLogin);
      googleSignin && router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      let response = await signInWithEmailAndPassword(
        auth,
        values?.email,
        values?.password
      );
      response && router.push("/");
      console.log(response);
    } catch (error) {
      console.log("Error creating user: ", error);
    }
  }
  const footer = "Don't have an account";
  return (
    <div className="w-full mt-20 flex justify-center items-center h-full">
      <Card className="w-[400px] shadow-md">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-center">Aspira</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="******" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full p-2 ">
                Login
              </Button>
            </form>
          </Form>
          <div className="flex justify-center items-center m-2">
            <Button onClick={googleLogin}>Google</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="w-full font-normal"
            size="sm"
            asChild
          >
            <Link href="/auth/sign-up">{footer}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
