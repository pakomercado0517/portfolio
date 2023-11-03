import { Card } from "flowbite-react";

export default function AboutCard({ item }) {
  return (
    <article>
      <Card className={`${item.color ? item.color : "max-w-sm"} `}>
        <div className="space-y-2">
          <div className={`flex items-center`}>
            <span className="text-2xl dark:text-white mr-3">
              {item.description ? item.icon : ""}
            </span>
            <h3 className="dark:text-white text-xl font-semibold">
              {item.title}
            </h3>
          </div>
          <p className="leading-8 whitespace-break-spaces break-words text-gray-lite  dark:text-[#A6A6A6]">
            {item.description ? item.description : item.icon}
          </p>
        </div>
      </Card>
    </article>
  );
}
