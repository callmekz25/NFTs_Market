import ava1 from "../../../Assets/RankingPage/1.webp";
import ava2 from "../../../Assets/RankingPage/2.webp";
import ava3 from "../../../Assets/RankingPage/3.webp";
import ava4 from "../../../Assets/RankingPage/4.webp";
import ava5 from "../../../Assets/RankingPage/5.webp";
import ava6 from "../../../Assets/RankingPage/6.webp";
import ava7 from "../../../Assets/RankingPage/7.webp";
import ava8 from "../../../Assets/RankingPage/8.webp";
import ava9 from "../../../Assets/RankingPage/9.webp";
import ava10 from "../../../Assets/RankingPage/10.webp";
import ava11 from "../../../Assets/RankingPage/11.webp";
import ava12 from "../../../Assets/RankingPage/12.webp";
import ava13 from "../../../Assets/RankingPage/13.webp";
import ava14 from "../../../Assets/RankingPage/14.webp";
import ava15 from "../../../Assets/RankingPage/15.webp";
import ava16 from "../../../Assets/RankingPage/16.webp";
import ava17 from "../../../Assets/RankingPage/17.webp";
import ava18 from "../../../Assets/RankingPage/18.webp";
import ava19 from "../../../Assets/RankingPage/19.webp";
import ava20 from "../../../Assets/RankingPage/20.webp";
const ListArtists = [
    {
        rank: 1,
        avatar: ava1,
        name: "Jaydon Ekstrom",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 2,
        avatar: ava2,
        name: "Ruben Carder",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 3,
        avatar: ava3,
        name: "Alfredo Septimus",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 4,
        avatar: ava4,
        name: "Davis Francl",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 5,
        avatar: ava5,
        name: "Livia Rosser",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 6,
        avatar: ava6,
        name: "Kianna Donin",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 7,
        avatar: ava7,
        name: "Phillip Lipshutz",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 8,
        avatar: ava8,
        name: "Maria Rosser",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 9,
        avatar: ava9,
        name: "Kianna Stanton",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 10,
        avatar: ava10,
        name: "Angel Lubin",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 11,
        avatar: ava11,
        name: "Allison Torff",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 12,
        avatar: ava12,
        name: "Davis Workman",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 13,
        avatar: ava13,
        name: "Lindsey Lipshutz",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 14,
        avatar: ava14,
        name: "Randy Carder",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 15,
        avatar: ava15,
        name: "Lydia Culhane",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 16,
        avatar: ava16,
        name: "Rayna Bator",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 17,
        avatar: ava17,
        name: "Jocelyn Westervelt",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 18,
        avatar: ava18,
        name: "Marilyn Torff",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 19,
        avatar: ava19,
        name: "Skylar Levin",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
    {
        rank: 20,
        avatar: ava20,
        name: "Terry Dorwart",
        change: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
            Math.random() * 100
        )}%`,
        nftSold: `${Math.floor(Math.random() * 1000)}`,
        volume: `${Math.floor(Math.random() * 20)}.${Math.floor(
            Math.random() * 99
        )} ETH`,
    },
];
export default ListArtists;
