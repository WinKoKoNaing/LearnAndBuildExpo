import PlayGroud from "components/PlayGroud";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <Link href="/parallax-image">Parallax Image</Link>
      <PlayGroud />
    </SafeAreaView>
  );
}
