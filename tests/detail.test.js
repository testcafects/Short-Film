import { Selector } from "testcafe";

fixture`Short Flim Detail Page Test`.page`http://localhost:3000/detail/1`;

const detailPage = Selector("div").withAttribute("data-test", "detail-page");

test("Detail Page Loaded", async (t) => {
  await t.expect(detailPage.exists()).ok();
  await t
    .expect(detailPage.child("[data-test='detail-template']").exists())
    .ok();
});

test("Video Preview", async (t) => {
  await t.expect(detailPage.child("video").exists()).ok();
});

test("Suggestion list is available", async (t) => {
  await t
    .expect(detailPage.child("[data-test]='suggestion-list'").exists())
    .ok();
});

test("Post a Comment", async (t) => {
  const comment = detailPage.child("[data-test]='post-comment'");
  await t
    .expect(comment.exists())
    .typeText(comment.child(["input[type=text]"]), "Nice Video")
    .click(comment.child(["button"]).withText("Comment"));
});
