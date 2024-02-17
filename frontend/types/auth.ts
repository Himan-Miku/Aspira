import * as z from 'zod';

export const LoginSchema=z.object({
    email:z.string().email({message:"Enter valid Email"}),
    password:z.string().min(8,{message:'password must be greater than 8 charaters'}).max(20)
})

export const RegistrationSchema=z.object({
    firstName:z.string().min(2,{message:'Enter first name greater than 2'}).max(20),
    lastName:z.string().min(2,{message:'Enter first name greater than 2'}).max(20),
    email:z.string().email({message:"Enter valid Email"}),
    password:z.string().min(8,{message:'password must be greater than 8 charaters'}).max(20)
})