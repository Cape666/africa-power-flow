import assert from "node:assert/strict";
import { categories, getPost, posts, publishedPosts } from "./posts";

assert.deepEqual(
  publishedPosts.map((post) => post.slug),
  ["choosing-the-right-industrial-electric-motor"],
);
assert.deepEqual(categories, ["Electrical Engineering"]);

const archivedPosts = posts.filter((post) => !post.published);
assert.equal(posts.length, 8);
assert.equal(archivedPosts.length, 7);
for (const post of archivedPosts) {
  if (post.slug !== "choosing-the-right-industrial-electric-motor") {
    assert.equal(getPost(post.slug), undefined);
  } else {
    assert.notEqual(getPost(post.slug), post);
    assert.equal(getPost(post.slug)?.published, true);
  }
  assert.ok(post.body && post.body.length > 0);
}
assert.ok(
  archivedPosts
    .find((post) => post.slug === "choosing-the-right-industrial-electric-motor")
    ?.body?.includes("Replacing an industrial electric motor is rarely as simple as matching the kilowatt rating."),
);

const post = getPost("choosing-the-right-industrial-electric-motor");
assert.equal(post?.seoTitle, "How to Choose the Right Industrial Electric Motor");
assert.equal(
  post?.excerpt,
  "Learn how to choose the right industrial electric motor by comparing power, speed, torque, efficiency and operating conditions.",
);
assert.deepEqual(post?.keywords, [
  "choosing the right industrial electric motor",
  "industrial motor selection",
  "electric motor specifications",
  "industrial electric motor suppliers",
]);
assert.ok(post?.title.toLowerCase().includes("industrial electric motor"));
assert.ok(
  post?.sections?.some((section) =>
    section.heading.toLowerCase().includes("choosing the right industrial electric motor"),
  ),
);

console.log("Blog article publishing checks passed.");