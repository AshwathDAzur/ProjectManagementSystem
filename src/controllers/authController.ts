import { Request, Response, RequestHandler } from "express";
import { prismaClient } from "..";
import {hashSync} from "bcrypt";
import { hash } from "crypto";

export const signup: RequestHandler = async (req, res) => {
  const { email, password, name } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { email }
  });

  if (user) {
    throw Error("User already exists");
  }

  user = await prismaClient.user.create({
    data: { 
      name,
      email,
      password: hashSync(password, 10) // Hashing the password before storing it
    }
  });

  res.json({
    message: "User created successfully",
    user
  });
};
