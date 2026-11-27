import {z} from 'zod';
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(6)});
export const registerSchema=loginSchema.extend({name:z.string().min(3),phone:z.string().regex(/^01[0125]\d{8}$/,'Enter an Egyptian mobile number'),rePassword:z.string()}).refine(v=>v.password===v.rePassword,{path:['rePassword'],message:'Passwords must match'});
export const shippingSchema=z.object({details:z.string().min(5),phone:z.string().regex(/^01[0125]\d{8}$/),city:z.string().min(2)});
export const mutationSchema=z.object({id:z.string().regex(/^[a-f0-9]{24}$/i),operation:z.enum(['add','wish','remove','unwish','quantity']),count:z.number().int().min(1).max(99).optional()});
