import { Request, Response, RequestHandler } from "express";
import { prismaClient } from "..";
import {compareSync, hashSync} from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";

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

export const signin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  let user = await prismaClient.user.findFirst({
    where: { email }
  });

  if (!user) {
    throw Error("User does not exist");
  }
  if(!compareSync(password, user.password)) {
    throw Error("Incorrect password"); 
  }
  const token = jwt.sign({
    userId: user.id,
  }, JWT_SECRET);

  res.json({
    message: "User signed in successfully",
    user,
    token
  });
};