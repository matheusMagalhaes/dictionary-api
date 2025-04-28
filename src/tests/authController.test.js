const { register } = require("../controllers/authController");
const pool = require("../database/dictionary_db");
const jwt = require("jsonwebtoken");

jest.mock("../database/dictionary_db");
jest.mock("jsonwebtoken");

describe("register new user", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("should create a new user and return token", async () => {
    //arrange
    const mockUser = { id: 1, name: "matheus" };

    pool.query.mockResolvedValueOnce({ rows: [mockUser] });

    jwt.sign.mockReturnValueOnce("mock.jwt.token");

    const req = { body: { name: "matheus" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    //act
    await register(req, res);

    expect(pool.query).toHaveBeenCalledWith(
      "INSERT INTO USERS (name) values($1) RETURNING *",
      ["matheus"]
    );

    expect(jwt.sign).toHaveBeenCalledWith(
      { id: 1, name: "matheus" },
      process.env.SECRET_KEY
    );

    //assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        token: "mock.jwt.token",
      })
    );
  });

  test("Should reject duplicate users", async () => {

    //arrange
    const req = { body: { name: "matheus" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    pool.query.mockRejectedValueOnce({ code: "23505" });


    //act
    await register(req, res);

    //assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "User already exists" });
  });
});
