const { ExpectedConditions } = require("protractor");
const request = require("superagent");

describe("Test post call in api", () => {
  it("API Call demo-2", async () => {
    request
      .post("https://gorest.co.in/public-api/users")
      .send({
        name: "Dhanis",
        gender: "Male",
        email: "tana.dhine.com",
        status: "Active",
      })
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .set(
        "Authorization",
        "Bearer 95f505b3a6fdbb11b05418b55931a42a497f58afb0970de6823e1f8e0fb4ae5e"
      )
      .end((err, res) => {
        expect(res.status).toEqual(200);
      });
  });
});
