const userCreated = await User.create({ username, email, phone, password });

// res.status(201).json({ message: "User registered successfully" });
res.status(201).json({
  msg: "Registration Successful",
  token: await userCreated.generateToken(),
  userId: userCreated._id.toString(),
});