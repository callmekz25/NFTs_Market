import ListRankToday from "../ListRanking/RankToday";
import { Link } from "react-router-dom";
// Nhận các props truyền vào từ RankingPage và xử lí render
const TopToDay = ({
    sortedArtists,
    sortedChange,
    sortedNft,
    sortedVolume,
    isSortedArtist,
    isSortedChange,
    isSortedNft,
    isSortedVolume,
}) => {
    let artists;
    if (isSortedArtist) {
        artists = sortedArtists;
    } else if (isSortedChange) {
        artists = sortedChange;
    } else if (isSortedNft) {
        artists = sortedNft;
    } else if (isSortedVolume) {
        artists = sortedVolume;
    } else {
        artists = ListRankToday;
    }
    return (
        <div className="">
            {artists.map((artist, index) => {
                return (
                    <Link to={`/artist-today/${artist.name}`}>
                        <div
                            class="flex justify-between items-center px-5 py-3 mt-[20px] rounded-[20px] bg-[#3B3B3B]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            key={index}
                        >
                            <div className="flex items-center gap-[20px] lg:w-[430px] md:w-[410px]">
                                <p class="font-normal text-[16px] text-[#858584] leading-[140%]">
                                    {index + 1}
                                </p>
                                <div class="flex items-center ">
                                    <img
                                        src={artist.avatar}
                                        alt={artist.name}
                                        class="size-[24px] lg:size-[60px] object-cover rounded-full"
                                    />
                                    <p class="ml-4 lg:text-[22px] font-semibold lg:leading-[140%] capitalize ">
                                        {artist.name}
                                    </p>
                                </div>
                            </div>
                            <p class="text-[#00AC4F] text-[16px] font-normal leading-[140%] w-24 lg:block md:block hidden">
                                {artist.change}
                            </p>
                            <p class="text-[16px] font-normal leading-[140%] w-24 lg:block md:hidden hidden">
                                {artist.nftSold}
                            </p>
                            <p class="text-[16px] font-normal leading-[140%] w-24">
                                {artist.volume}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default TopToDay;
