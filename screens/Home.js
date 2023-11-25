import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Trending from "../components/Trending";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { fetchTrending } from "../api/moviedb";

function HomeScreen() {
  const [trending, settrending] = useState([1, 2, 3, 5]);
  const [loading, setLoading] = useState(false);

  const getTrending = async () => {
    const data = await fetchTrending();
    console.log(data, "trending data");
  };

  useEffect(() => {
    getTrending();
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
            <Trending trending={trending} />
            {/* Upcoming movies */}
            <MovieList title="Upcoming Movies" data={trending} />
            {/* Top Rated */}
            <MovieList title="Top Rated" data={trending} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
