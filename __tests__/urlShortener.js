const app = require("../app");

const request = require("supertest");

let server;
beforeAll(() => {
  server = app.listen(3001); // start the server
});

afterAll((done) => {
  server.close(done); // close the server
});

describe("Test the encode path", () => {
  test("It should respond with a 422 status code when no data is provided", (done) => {
    request(app)
      .post("/encode")
      .then((response) => {
        expect(response.statusCode).toBe(422);
        done();
      });
  });

  test("It should respond with a 201 status code when a valid URL is provided", (done) => {
    request(app)
      .post("/encode")
      .send({ url: "https://www.google.com" })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});

describe("Test the decode path", () => {
  let shortId;

  beforeAll((done) => {
    request(app)
      .post("/encode")
      .send({
        url: "https://www.google.com",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        }
        shortId = res.body.shortUrl.split("/").pop();
        done();
      });
  });

  test("It should respond with a 404 status code", (done) => {
    request(app)
      .get("/decode/123456")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test("It should respond with a 200 status code", (done) => {
    request(app)
      .get(`/decode/${shortId}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
