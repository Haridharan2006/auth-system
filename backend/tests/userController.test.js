const bcrypt = require("bcrypt");
const db = require("../models/db");
const { createUser } = require("../controllers/userController");

jest.mock("../models/db", () => ({
    query: jest.fn()
}));

jest.mock("bcrypt", () => ({
    hash: jest.fn()
}));

describe("User Controller", () => {

    test("Should create a user successfully", async () => {

        bcrypt.hash.mockResolvedValue("hashedpassword");

        db.query.mockResolvedValue({
            rows: [
                {
                    id: 1,
                    email: "hari@test.com",
                    group_id: 1
                }
            ]
        });

        const req = {
            body: {
                email: "hari@test.com",
                password: "1234",
                group_id: 1
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        await createUser(req, res);

        expect(bcrypt.hash).toHaveBeenCalledWith("1234", 10);

        expect(db.query).toHaveBeenCalled();

        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            email: "hari@test.com",
            group_id: 1
        });

    });

});