import { describe, expect, test } from "bun:test";
import { categories, getPost, posts, publishedPosts } from "./posts";

describe("blog publishing", () => {
  test("only the requested motor article is publicly listed", () => {
    expect(publishedPosts.map((post) => post.slug)).toEqual([
      "choosing-the-right-industrial-electric-motor",
    ]);
    expect(categories).toEqual(["Electrical Engineering"]);
  });

  test("older articles remain preserved but cannot be opened publicly", () => {
    const archivedPosts = posts.filter((post) => !post.published);

    expect(posts).toHaveLength(8);
    expect(archivedPosts).toHaveLength(7);
    for (const post of archivedPosts) {
      expect(getPost(post.slug)).toBeUndefined();
      expect(post.body?.length).toBeGreaterThan(0);
    }
  });

  test("the published article retains the requested SEO details", () => {
    const post = getPost("choosing-the-right-industrial-electric-motor");

    expect(post?.seoTitle).toBe("How to Choose the Right Industrial Electric Motor");
    expect(post?.excerpt).toBe(
      "Learn how to choose the right industrial electric motor by comparing power, speed, torque, efficiency and operating conditions.",
    );
    expect(post?.keywords).toEqual([
      "choosing the right industrial electric motor",
      "industrial motor selection",
      "electric motor specifications",
      "industrial electric motor suppliers",
    ]);
  });
});