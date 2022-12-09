import Image from "next/image";
import Img1 from "../../public/images/1.jpg";

const Pets = () => {
  return (
    <div>
      <div>
        <Image
          src={Img1}
          placeholder="blur"
          //   special option for more optimization
          //   blurDataURL=""
          loading="lazy"
          alt="pet"
          width={"280px"}
          height={"420px"}
        />
      </div>

      {["1", "2", "3"].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/images/${path}.jpg`}
              alt={`pets animal ${path}.jpg`}
              width={"280px"}
              height={"420px"}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Pets;
