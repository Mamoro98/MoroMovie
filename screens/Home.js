import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Trending from "../components/Trending";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { fetchToprated, fetchTrending, fetchUpcoming } from "../api/moviedb";

function HomeScreen() {
  const [trending, settrending] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [topRated, settopRated] = useState([]);

  const [loading, setLoading] = useState(false);

  const getTrending = async () => {
    setLoading(true);
    const data = await fetchTrending();
    if (data && data.results) {
      settrending(data.results);
    }
    setLoading(false);
  };

  const getUpcoming = async () => {
    setLoading(true);
    const data = await fetchUpcoming();
    if (data && data.results) {
      setupcoming(data.results);
    }
    setLoading(false);
  };

  const getTopRated = async () => {
    setLoading(true);
    const data = await fetchToprated();
    if (data && data.results) {
      settopRated(data.results);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTrending();
    getUpcoming();
    getTopRated();
  }, []);

  return (
    <ScrollView>
      <View
        className="flex-1 bg-neutral-800  "
        style={{ paddingTop: StatusBar.length }}
      >
        <Header />
        {/* Movies trending */}
        {loading ? (
          <Loading />
        ) : (
          <View>
            {trending && <Trending trending={trending} />}
            {/* Upcoming movies */}
            {upcoming && <MovieList title="Upcoming Movies" data={upcoming} />}
            {/* Top Rated */}
            {topRated && <MovieList title="Top Rated" data={topRated} />}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
