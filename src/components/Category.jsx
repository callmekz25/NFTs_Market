import ListCategory from "./ListCategory";


function Category() {
    return (
        <div className="lg:py-[80px] py-[40px]">
            <h1
                className="lg:text-[38px] text-[28px] font-semibold lg:leading-[120%] capitalize"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                Browse Categories
            </h1>
            <div className="lg:pt-[60px] pt-[40px] grid lg:grid-cols-4 lg:gap-[30px] md:gap-[30px] gap-[20px] md:grid-cols-4  grid-cols-2">
                {ListCategory.map((category, index) => {
                    return (
                        <div
                            className="rounded-[20px] bg-[#3B3B3B]  hover:cursor-pointer"
                            data-aos="flip-left"
                            data-aos-duration="1500"
                            key={index}
                        >
                            <img
                                src={category.thumnail}
                                alt=""
                                className="w-full object-cover"
                            />

                            <div className="lg:px-[30px] py-[20px] md:px-[15px] px-[20px]">
                                <span className="lg:text-[22px] font-semibold leading-[140%] capitalize md:text-[16px] w-full  ">
                                    {category.title}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Category;
