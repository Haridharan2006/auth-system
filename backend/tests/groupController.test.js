const db = require("../models/db");
const { createGroup } = require("../controllers/groupController");

jest.mock("../models/db", () => ({
    query: jest.fn()
}));

describe("Group Controller", () => {

    test("Should create a group successfully", async () => {

        db.query.mockResolvedValue({
            rows: [
                {
                    id: 1,
                    name: "admin"
                }
            ]
        });

        const req = {
            body: {
                name: "admin"
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        await createGroup(req, res);

        expect(db.query).toHaveBeenCalled();

        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            name: "admin"
        });

    });

});