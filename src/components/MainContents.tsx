import { CONTENTS_LIST } from "../constant/contents";

export default function MainContents() {
  return (
    <div className="mt-[96px] px-[20px] md:px-[48px] pb-[80px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {CONTENTS_LIST.map(({ id, title, sub, image }) => (
          <div key={id}>
            <a className="">
              <img className="mb-[20px] hover:rotate-[-2deg]" src={image} />
            </a>
            <p className="text-[18px] font-semibold">{title}</p>
            <p className="text-gray-400">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
