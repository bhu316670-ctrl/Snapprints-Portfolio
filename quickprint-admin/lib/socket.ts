import { io } from "socket.io-client"
const API_BASE = process.env.NEXT_PUBLIC_API_URL 
export const socket = io(API_BASE)