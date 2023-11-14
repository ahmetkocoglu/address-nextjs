import { AppDispatch, RootState } from "@/store";
import { getCountry } from "@/store/apps/country";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();

   // ** Selector
   const loading: boolean = useSelector(
    (state: RootState) => state.country.loading
  );
  const data: any[] = useSelector((state: RootState) => state.country.data);
  const router: any = useRouter();

  const [cityId, setCityId] = useState<number>(0);

  useEffect(() => {
    if (data.length === 0) dispatch(getCountry());
  }, [data.length, dispatch]);

  useEffect(() => {
    setCityId(parseInt(router.query.id));
  }, [router]);

  return (
    <>
    <h1>Şehir</h1>
      {cityId}
      {data.length > 0 && data[0].city.find((k: any) => k.id === cityId)?.name}
      <hr />
      <div className="flex flex-wrap mt-3">
        {data.length > 0 && data[0].city
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
