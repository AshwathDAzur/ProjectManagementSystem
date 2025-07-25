import express, {Express}  from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/errors";

const app:Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Root router for handling routes
app.use('/api',rootRouter);

export const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});