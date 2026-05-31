const bcrypt = require("bcrypt");

const db = require("../models/db");
const { login } = require("../controllers/authController");

jest.mock("../models/db", () => ({
    query: jest.fn()
}));

jest.mock("bcrypt", () => ({
    compare: jest.fn()
}));

describe("Auth Controller", () => {

    test("Should return 401 when user does not exist", async () => {

        db.query.mockResolvedValue({
            rows: []
        });

        const req = {
            body: {
                email: "fake@test.com",
                password: "1234"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(401);

        expect(res.json).toHaveBeenCalledWith({
            message: "Invalid username and/or password"
        });
    });

    test("Should return 401 when password is incorrect", async () => {

        db.query.mockResolvedValue({
            rows: [
                {
                    id: 1,
                    email: "hari@test.com",
                    password: "hashedpassword",
                    group_id: 1
                }
            ]
        });

        bcrypt.compare.mockResolvedValue(false);

        const req = {
            body: {
                email: "hari@test.com",
                password: "wrong"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(401);

        expect(res.json).toHaveBeenCalledWith({
            message: "Invalid username and/or password"
        });
    });

});