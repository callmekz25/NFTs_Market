import ava6 from "../../../Assets/RankingPage/6.webp";
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
const RankAllTime = [
    {
        rank: 12,
        avatar: ava12,
        name: "Jocelyn Workman",
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
        name: "Desiree Septimus",
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
        name: "Ahmad Francl",
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
        name: "Maria Bergson",
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
        name: "Ahmad Geidt",
        avatar: ava16,
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
        name: "Skylar Mango",
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
        avatar: ava8,
        name: "Omar Lipshutz",
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
        avatar: ava10,
        name: "Terry Donin",
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
        avatar: ava6,
        name: "Erin Botosh",
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
        avatar: ava14,
        name: "Chayenne Rhiel",
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
        avatar: ava9,
        name: "Jaxson Vaccaro",
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
        avatar: ava17,
        name: "Jordyn Diaz",
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
export default RankAllTime;
