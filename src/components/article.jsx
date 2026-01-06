import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./blogcard";
import { blogPosts } from "@/data/blogPost";

function ArticleSection() {
  return (
    <section className="w-full bg-white md:pt-[80px] md:pb-[120px]">
      <div className="">
        <h2 className="px-[16px] py-[16px] md:px-0 text-headline-3 md:text-headline-3 text-brown-600">
          Latest articles
        </h2>
      </div>
      <div className="flex flex-col gap-[16px] bg-brown-200 px-[16px] py-[16px] md:mx-0 md:flex-row md:items-center md:justify-between md:rounded-[16px] md:px-[24px] md:py-[16px]">
        <div className="hidden md:flex md:flex-wrap md:items-center gap-[8px]">
          <button className="rounded-[8px] md:px-[20px] md:py-[12px] text-body-2 md:text-body-1 text-brown-400 hover:bg-brown-300 hover:text-brown-500 transition">
            Highlight
          </button>
          <button className="rounded-[8px] md:px-[20px] md:py-[12px] text-body-2 md:text-body-1 text-brown-400 hover:bg-brown-300 hover:text-brown-500 transition">
            Cat
          </button>
          <button className="rounded-[8px] md:px-[20px] md:py-[12px] text-body-2 md:text-body-1 text-brown-400 hover:bg-brown-300 hover:text-brown-500 transition">
            Inspiration
          </button>

          <button className="rounded-[8px] md:px-[20px] md:py-[12px] text-body-2 md:text-body-1 text-brown-400 hover:bg-brown-300 hover:text-brown-500 transition">
            General
          </button>
        </div>
        <div className="relative w-full md:max-w-[380px]">
          <Input
            type="email"
            placeholder="Search"
            className="bg-white placeholder:text-brown-400 placeholder:text-body-1"
          />
        </div>
        <div className="md:hidden">
          <p className="text-body-1 text-brown-400">Category</p>
          <Select>
            <SelectTrigger className="w-full md:max-w-[380px] bg-white text-brown-400">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-brown-400">
                <SelectItem value="Highligth">Highligth</SelectItem>
                <SelectItem value="Cat">Cat</SelectItem>
                <SelectItem value="Inspiration">Inspiration</SelectItem>
                <SelectItem value="Ganeral">Ganeral</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[48px] mt-[48px]">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </div>
    </section>
  );
}

export default ArticleSection;
