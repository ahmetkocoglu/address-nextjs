import { RootState } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const data: any = useSelector((state: RootState) => state.country.data);
  const router: any = useRouter();

  const [cityId, setCityId] = useState<number>(0);

  useEffect(() => {
    setCityId(parseInt(router.query.id));
  }, [router]);

  return (
    <>
    <h1>Şehir</h1>
      {cityId}
      {data[0].city.find((k: any) => k.id === cityId)?.name}
      <hr />
      <div className="flex flex-wrap mt-3">
        {data[0].city
          .find((k: any) => k.id === cityId)
          ?.district?.map((k: any, index: number) => {
            return (
                <div className="border px-1 rounded-full" key={index}>
                  <Link href={`/district/${cityId}/${k.id}`}>{k.name}</Link>
                </div>
            );
          })}
      </div>
    </>
  );
};

export default Index;
