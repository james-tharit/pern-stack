import request from "supertest"
import server from '../../src/server'

describe("GET", () => {

    it("should return string from /", async () => {
        const result = await request(server)
        .get("/")
        .expect('Content-Type', /json/)
        .then(result => result.body.status)
        

        expect(result).toBe("OK")
    })
})