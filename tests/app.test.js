const request = require("supertest");
const app = require("../server");
describe("Adaptive Learning System API", () => {
test("GET / should return API status", async () => {
const response = await request(app).get("/");
expect(response.statusCode).toBe(200);
expect(response.body.message).toBe("Adaptive Learning System API");
expect(response.body.status).toBe("running");
});
test("GET /health should return health status", async () => {
const response = await request(app).get("/health");
expect(response.statusCode).toBe(200);
expect(response.body.status).toBe("ok");
});
test("GET /api/modules should return learning modules", async () => {
const response = await request(app).get("/api/modules");
expect(response.statusCode).toBe(200);
expect(response.body.total).toBe(3);
expect(Array.isArray(response.body.modules)).toBe(true);
});
});