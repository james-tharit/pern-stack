import request from "supertest"
import server from '../../src/server'

describe("GET", () => {

    it("should return string from /", async () => {
        const result = await request(server)
        .get("/")
        .expect('Content-Type', 'text/html; charset=utf-8')
        .then(result => result.text)
        

        expect(result).toBe("ok")
    })

    it("should return status in JSON from /v1", async () => {
        const result = await request(server)
        .get("/v1")
        .expect('Content-Type', /json/)
        .then(result => result.body.status)
        

        expect(result).toBe("ok")
    })
})