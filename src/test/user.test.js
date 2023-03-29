const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../schemas/userSchema");

beforeEach(async () => {
  const connectDB = require("../config/database");
  await connectDB();
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("Users Create Endpoints", () => {
  const userData = {
    username: "doctor891",
    phoneNumber: "12938231",
    password: "password",
    gender: "female",
  };
  test("Should create a new user", async () => {
    const mockCreateUser = jest.fn(() => userData);
    jest.spyOn(User, "create").mockImplementation(() => mockCreateUser());

    const res = await request(app).post("/v1/users").send(userData);
    expect(res.status).toEqual(200);
    // expect(res.body).toHaveProperty("post");
  });
  test("Should get list of users", async () => {
    const res = await request(app).get("/v1/users");
    expect(res.status).toEqual(200);
    // expect(res.body.object.length).toBeGreaterThan(0);
  });

  test("Should login user", async () => {
    const res = await request(app).post("/v1/users/login").send({
      username: "ali",
      password: "password",
    });
    expect(res.status).toEqual(200);
    // expect(res.body.object.length).toBeGreaterThan(0);
  });
});
