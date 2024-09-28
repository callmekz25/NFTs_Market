import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artist from "./components/ArtistPage/Artist";
import Home from "./components/HomePage/Home";
import CreateAccount from "./components/Account/CreateAccount";
import NFTPage from "./components/NftPage/NftPage";
import MarketPlace from "./components/Marketplace/Marketplace";
import NFTPageCollection from "./components/NftPage/NftPageCollection";
import ArtistPageCollection from "./components/ArtistPage/ArtistPageCollection";
import NFTPageBanner from "./components/NftPage/NftPageBanner";
import RankingPage from "./components/RankingPage/RankingPage";
import ArtistPageRankingsToDay from "./components/ArtistPage/ArtistPageRankingToDay";
import ArtistPageRankingsWeek from "./components/ArtistPage/ArtistPageRankingsWeek";
import ArtistPageRankingsMonth from "./components/ArtistPage/ArtistPageRankingsMonth";
import ArtistPageRankingsAllTime from "./components/ArtistPage/ArtistPageRankingsAllTime";
import useAOS from "./components/useAos/useAOS";
import NFTPageRanksToDay from "./components/NftPage/NftPageRanksToDay";
import NFTPageRanksWeek from "./components/NftPage/NftPageRankingsWeek";
import NFTPageRanksMonth from "./components/NftPage/NftPageRankingsMonth";
import NFTPageRanksAllTime from "./components/NftPage/NftPageRankingsAllTime";
import LogIn from "./components/Account/LogIn";
function App() {
    useAOS();
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/log-in"
                    element={<LogIn />}
                />
                <Route
                    path="/market-place"
                    element={<MarketPlace />}
                />
                <Route
                    path="/connect-wallet"
                    element={<Home />}
                />
                <Route
                    path="/signup"
                    element={<CreateAccount />}
                />
                {/* Để react hiểu URL /artist/: là 1 name gì đó */}
                {/* Page Artist dành cho khi click vào card Top Artist */}
                <Route
                    path="/artist/:artistName"
                    element={<Artist />}
                />
                {/* Page Artist dành cho khi click vào button go to artist page của nft page collection */}
                <Route
                    path="/artist-collection/:artistNameCollection"
                    element={<ArtistPageCollection />}
                />
                {/* Page Artist khi click vào những artists trong page Rankings của Top To Day */}
                <Route
                    path="/artist-today/:artistNameRankingsToDay"
                    element={<ArtistPageRankingsToDay />}
                />
                {/* Page Artist khi click vào những artists trong page Rankings của Top Week*/}
                <Route
                    path="/artist-week/:artistNameRankingsWeek"
                    element={<ArtistPageRankingsWeek />}
                />
                {/* Page Artist khi click vào những artists trong page Rankings của Top Month*/}
                <Route
                    path="/artist-month/:artistNameRankingsMonth"
                    element={<ArtistPageRankingsMonth />}
                />
                {/* Page Artist khi click vào những artists trong page Rankings của Top All Time*/}
                <Route
                    path="/artist-all-time/:artistNameRankingsAllTime"
                    element={<ArtistPageRankingsAllTime />}
                />
                <Route
                    path="/nft"
                    element={<NFTPage />}
                />
                {/* Page NFT dành cho khi click vào card created Top Artist */}
                <Route
                    path="/artist/:artistName/nft/:artistNameThis"
                    element={<NFTPage />}
                />
                {/* Page NFT dành cho khi click vào card created khi trong artist collection sẽ chuyển trang tới artist page */}
                <Route
                    path="/artist-collection/:artistNameCollection/nft/:artistNameThat"
                    element={<NFTPageCollection />}
                />
                {/* Page NFT dành cho khi click vào card của aritst page trong list artists top today trong page ranking */}
                <Route
                    path="/artist-today/:artistNameRankingsToDay/nft/:artistNameRankingsToDay"
                    element={<NFTPageRanksToDay />}
                />
                {/* Page NFT dành cho khi click vào card của aritst page trong list artists top week trong page ranking */}
                <Route
                    path="/artist-week/:artistNameRankingsWeek/nft/:artistNameRankingsWeek"
                    element={<NFTPageRanksWeek />}
                />
                {/* Page NFT dành cho khi click vào card của aritst page trong list artists top month trong page ranking */}
                <Route
                    path="/artist-month/:artistNameRankingsMonth/nft/:artistNameRankingsMonth"
                    element={<NFTPageRanksMonth />}
                />
                {/* Page NFT dành cho khi click vào card của aritst page trong list artists top all time trong page ranking */}
                <Route
                    path="/artist-all-time/:artistNameRankingsAllTime/nft/:artistNameRankingsAllTime"
                    element={<NFTPageRanksAllTime />}
                />

                {/* Page NFT dành cho khi click vào card Top Trending Collection */}
                <Route
                    path="/nft/:artistNameThat"
                    element={<NFTPageCollection />}
                />
                {/* Page NFT dành cho khi click vào button See NFT ở Banner  */}
                <Route
                    path="/nft/:artistNameThat"
                    element={<NFTPageBanner />}
                />
                {/* Ranking Page */}
                <Route
                    path="/rankings"
                    element={<RankingPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
