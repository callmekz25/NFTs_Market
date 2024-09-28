import ava2 from "../../../Assets/RankingPage/2.webp";
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
import ava20 from "../../../Assets/RankingPage/20.webp";
const RankMonth = [
    {
        rank: 1,
        avatar: ava10,
        name: "Zain Dokidis",
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
        avatar: ava12,
        name: "Ruben Vetrovs",
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
        avatar: ava7,
        name: "Maren Francl",
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
        avatar: ava2,
        name: "Emerson Carder",
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
        avatar: ava20,
        name: "Zain Boocoh",
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
        avatar: ava5,
        name: "Talan Korsgaard",
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
        avatar: ava8,
        name: "Haylie Diaz",
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
        avatar: ava11,
        name: "James Donin",
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
        avatar: ava13,
        name: "Erin Siphron",
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
        avatar: ava15,
        name: "Cristofer Lewin",
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
        avatar: ava4,
        name: "Alena Schleifer",
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
        avatar: ava18,
        name: "Dulce Vetrovs",
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
        avatar: ava16,
        name: "Nolan Siphron",
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
        avatar: ava4,
        name: "Omar Stanton",
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
];
export default RankMonth;
