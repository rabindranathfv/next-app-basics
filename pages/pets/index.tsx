import Image from "next/image";

const Pets = () => {
  return (
    <div>
      {["1", "2", "3"].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpg`}
              alt={`pets animal ${path}.jpg`}
              width={"200px"}
              height={"300px"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Pets;
