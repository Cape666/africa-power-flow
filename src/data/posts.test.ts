import { describe, expect, test } from "vitest";
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
      if (post.slug !== "choosing-the-right-industrial-electric-motor") {
        expect(getPost(post.slug)).toBeUndefined();
      }
      expect(post.body?.length).toBeGreaterThan(0);
    }
    expect(archivedPosts.find((post) => post.slug === "choosing-the-right-industrial-electric-motor")?.body)
      .toContain("Replacing an industrial electric motor is rarely as simple as matching the kilowatt rating.");
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
    expect(post?.title.toLowerCase()).toContain("industrial electric motor");
    expect(post?.sections?.some((section) =>
      section.heading.toLowerCase().includes("choosing the right industrial electric motor"),
    )).toBe(true);
  });
});