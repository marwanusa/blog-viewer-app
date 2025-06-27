"use client";

import { useParams } from "next/navigation";
import useGetPostById from "@/hooks/useGetPostById";
import Header from "@/components/Header";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

export default function PostDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const { data, isLoading, isError,error } = useGetPostById(id);

  if (isLoading) return <div className="flex justify-center items-center min-h-screen">
    <BeatLoader color="#6941C6" />
  </div>;
  if (isError) return <p className="text-red-500 text-center mt-10">{`Error loading post ${error}`} </p>;

  return (
    <div className="bg-white dark:bg-[#090D1F] min-h-screen lg:px-[80px] transition-all duration-300">
      <Header />
      <div className="flex flex-col gap-5 mt-5 p-[30px]">
        <p className="text-[14px] text-[#6941C6] font-[600]">Sunday, 1 Jan 2023</p>
        <h1 className="text-[36px] font-[700]  text-black dark:text-[#FFFFFF] ">
          {data?.title}
        </h1>

        <Image
          src={`https://picsum.photos/seed/${data?.id}/1200/500`}
          alt={data?.title ?? "Post Image"}
          width={1200}
          height={500}
          className="w-full h-64 object-cover md:h-[300px] lg:h-[426px] rounded-2xl"
        />

        <h1 className="font-[700] text-[18px]  dark:text-[#C0C5D0] text-black">Examples of Grids in Use</h1>
        <p className="text-[16px] font-[400] dark:text-[#C0C5D0] text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet possimus provident fugiat maxime deserunt nesciunt odit debitis rem vel tempore quam, minus quidem doloribus. Eaque est commodi tenetur laboriosam aspernatur minus in dolorem, inventore nostrum. Doloribus, ab. Porro, commodi. Soluta vero, sit doloribus explicabo, excepturi deserunt molestiae voluptatum necessitatibus debitis voluptatibus nesciunt ratione. Nostrum at fugit quia quo nam, beatae pariatur accusantium quasi rem, ratione tempora omnis ut minus eligendi explicabo, maiores cupiditate vero! Voluptate aliquam sed quibusdam similique iusto impedit beatae necessitatibus esse perferendis omnis, nemo est asperiores provident neque debitis quaerat nesciunt perspiciatis laudantium voluptatem veniam aut, adipisci totam! Fugit nulla velit accusamus molestias labore. Dignissimos perferendis veritatis quis ipsam, ullam illum laudantium quas reprehenderit laboriosam amet eum deserunt. Dolor provident, debitis aspernatur nesciunt quisquam hic sequi quaerat explicabo adipisci consequuntur ducimus dolorum dolore neque tempora alias similique veniam! Minima dolorem, provident, velit error ducimus recusandae veritatis ad tempore veniam accusantium earum explicabo deserunt adipisci vero culpa laudantium rerum incidunt! Ex nisi, error harum quam voluptatibus id pariatur officia, voluptates, molestiae voluptate cumque facere eos vitae enim laborum consequuntur ducimus et. Inventore minima quia velit, nostrum, illo culpa enim quod harum eveniet ratione asperiores voluptate aliquid dolor!
        </p>
        <div className="flex justify-center">

          <Image
            src={`https://picsum.photos/seed/${Math.floor(Math.random() * 100) + 1}/1200/500`}
            alt={data?.title ?? "Post Image"}
            width={1200}
            height={500}
            className="w-[60%] h-64 object-cover md:h-[300px] lg:h-[426px] rounded-2xl"
          />
        </div>
        <h1 className="font-[700] text-[18px]  dark:text-[#C0C5D0] text-black">Benefits of the Grid</h1>
        <ul className="text-[16px] font-[400] dark:text-[#C0C5D0] text-black list-disc ml-10">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, consequatur?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero.</li>
        </ul>
        <p className="text-[16px] font-[400] dark:text-[#C0C5D0] text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, illum perspiciatis. Hic repellendus laboriosam deserunt deleniti nam velit? Facilis cumque ab odit cupiditate harum temporibus voluptas perferendis voluptatem! Nobis iure id soluta, earum veniam quod numquam debitis ipsa temporibus recusandae fugiat quibusdam provident consequatur praesentium dolor a doloribus maxime assumenda ab fugit, delectus optio ad reprehenderit! Corporis blanditiis ullam adipisci magnam explicabo? Magni esse eveniet, at dolorum est incidunt ab ipsa animi excepturi quos placeat rerum perspiciatis repellat aliquam quae laborum voluptates adipisci ut officiis aspernatur dolorem dolore architecto quis qui? Consectetur saepe officiis, suscipit eius aliquid vel nesciunt commodi eum ipsa ducimus tempore praesentium, odio minima alias. Doloremque aut obcaecati id nemo soluta numquam ratione dicta recusandae molestiae saepe? Quaerat excepturi fugit quidem provident fugiat deleniti. Minus nulla vel explicabo dolore id porro ab dolorem cumque expedita beatae esse dolorum iusto eaque obcaecati veritatis reprehenderit eum nostrum exercitationem, officia quos sunt voluptate earum! Nam odit tempore eveniet consequuntur nostrum rerum ut accusamus doloribus qui facilis non rem eum id pariatur sed, quisquam accusantium doloremque, aperiam culpa facere ea at, dicta temporibus? Maxime recusandae suscipit consequatur labore ratione illum, in, expedita officiis quam odit praesentium ut id! Hic quia similique facere. Illum pariatur voluptatibus doloremque similique magni quo aliquid facere nihil aspernatur expedita corporis dolorum, velit, molestiae ex, soluta porro animi iste cupiditate quaerat! Quam at obcaecati natus dignissimos dolorem accusamus, nostrum, rerum perferendis provident expedita assumenda ducimus amet eligendi beatae. Reprehenderit quo voluptates saepe esse mollitia animi veritatis ad. Reprehenderit repudiandae soluta cum quod blanditiis aut, delectus eos, voluptatibus nulla pariatur debitis ea illum eaque praesentium excepturi quae laboriosam asperiores inventore molestias expedita quibusdam. Quis, totam repellat! Accusantium inventore, sequi quas nemo neque facere itaque qui repudiandae, voluptatibus, aliquid ipsum animi. Dignissimos necessitatibus dolorum harum nam sunt modi dolorem adipisci quos. Ipsa ullam autem, tenetur accusantium aperiam saepe cupiditate veritatis, molestias natus eaque minus itaque rerum? Porro laudantium debitis nisi. Voluptatem molestias earum quod animi iure odio aut eveniet dolores. Corporis illo impedit repudiandae minus beatae dignissimos magni molestias a delectus nobis eum perferendis veniam commodi labore amet sequi deleniti exercitationem vero asperiores, et quaerat necessitatibus animi ex! Similique cum harum, asperiores animi, atque ullam necessitatibus sunt minima iusto aperiam ipsa reprehenderit velit modi architecto excepturi dolorum adipisci laboriosam ad dolor. Neque qui sint, ut veniam placeat nulla aliquid nam corrupti quidem ea, tempora magni enim voluptatum! Hic, id?
        </p>
        <div className="flex justify-center">

                    <Image
            src={`https://picsum.photos/seed/${Math.floor(Math.random() * 100) + 1}/1200/500`}
            alt={data?.title ?? "Post Image"}
            width={1200}
            height={500}
            className="w-[60%] h-64 object-cover md:h-[300px] lg:h-[426px] rounded-2xl"
          />
        </div>
        <h1 className="font-[700] text-[18px]  dark:text-[#C0C5D0] text-black">Choosing and Setting Up Your Grid</h1>

        <p className="text-[16px] font-[400] dark:text-[#C0C5D0] text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, illum perspiciatis. Hic repellendus laboriosam deserunt deleniti nam velit? Facilis cumque ab odit cupiditate harum temporibus voluptas perferendis voluptatem! Nobis iure id soluta, earum veniam quod numquam debitis ipsa temporibus recusandae fugiat quibusdam provident consequatur praesentium dolor a doloribus maxime assumenda ab fugit, delectus optio ad reprehenderit! Corporis blanditiis ullam adipisci magnam explicabo? Magni esse eveniet, at dolorum est incidunt ab ipsa animi excepturi quos placeat rerum perspiciatis repellat aliquam quae laborum voluptates adipisci ut officiis aspernatur dolorem dolore architecto quis qui? Consectetur saepe officiis, suscipit eius aliquid vel nesciunt commodi eum ipsa ducimus tempore praesentium, odio minima alias. Doloremque aut obcaecati id nemo soluta numquam ratione dicta recusandae molestiae saepe? Quaerat excepturi fugit quidem provident fugiat deleniti. Minus nulla vel explicabo dolore id porro ab dolorem cumque expedita beatae esse dolorum iusto eaque obcaecati veritatis reprehenderit eum nostrum exercitationem, officia quos sunt voluptate earum! Nam odit tempore eveniet consequuntur nostrum rerum ut accusamus doloribus qui facilis non rem eum id pariatur sed, quisquam accusantium doloremque, aperiam culpa facere ea at, dicta temporibus? Maxime recusandae suscipit consequatur labore ratione illum, in, expedita officiis quam odit praesentium ut id! Hic quia similique facere. Illum pariatur voluptatibus doloremque similique magni quo aliquid facere nihil aspernatur expedita corporis dolorum, velit, molestiae ex, soluta porro animi iste cupiditate quaerat! Quam at obcaecati natus dignissimos dolorem accusamus, nostrum, rerum perferendis provident expedita assumenda ducimus amet eligendi beatae. Reprehenderit quo voluptates saepe esse mollitia animi veritatis ad. Reprehenderit repudiandae soluta cum quod blanditiis aut, delectus eos, voluptatibus nulla pariatur debitis ea illum eaque praesentium excepturi quae laboriosam asperiores inventore molestias expedita quibusdam. Quis, totam repellat! Accusantium inventore, sequi quas nemo neque facere itaque qui repudiandae, voluptatibus, aliquid ipsum animi. Dignissimos necessitatibus dolorum harum nam sunt modi dolorem adipisci quos. Ipsa ullam autem, tenetur accusantium aperiam saepe cupiditate veritatis, molestias natus eaque minus itaque rerum? Porro laudantium debitis nisi. Voluptatem molestias earum quod animi iure odio aut eveniet dolores. Corporis illo impedit repudiandae minus beatae dignissimos magni molestias a delectus nobis eum perferendis veniam commodi labore amet sequi deleniti exercitationem vero asperiores, et quaerat necessitatibus animi ex! Similique cum harum, asperiores animi, atque ullam necessitatibus sunt minima iusto aperiam ipsa reprehenderit velit modi architecto excepturi dolorum adipisci laboriosam ad dolor. Neque qui sint, ut veniam placeat nulla aliquid nam corrupti quidem ea, tempora magni enim voluptatum! Hic, id?
        </p>
      </div>

    </div>
  );
}
