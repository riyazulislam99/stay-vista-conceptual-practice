import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Rooms = () => {
  const axiosCommon = useAxiosCommon();

  const { data, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/rooms");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      {data && data.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {data.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
