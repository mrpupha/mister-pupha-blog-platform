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

function ArticleSection() {
  return (
    <section className="w-full bg-white md:px-[120px] md:pt-[80px] md:pb-[120px]">
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
              <SelectValue
                placeholder="Select category"
                className="!placeholder:text-brown-400"
              />
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
    </section>
  );
}

export default ArticleSection;
