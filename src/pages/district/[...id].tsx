import { AppDispatch, RootState } from "@/store";
import { getCountry } from "@/store/apps/country";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const District = (props: Props) => {
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();

  // ** Selector
  const loading: boolean = useSelector(
    (state: RootState) => state.country.loading
  );
  const data: any = useSelector((state: RootState) => state.country.data);
  const router: any = useRouter();

  const [cityId, setCityId] = useState<number>(0);
  const [districtId, setDistrictId] = useState<number>(0);

  useEffect(() => {
    if (data.length === 0) dispatch(getCountry());
  }, [dispatch]);

  useEffect(() => {
    setCityId(parseInt(router.query.id[0]));
    setDistrictId(parseInt(router.query.id[1]));
  }, [router]);

  return (
    <>
      <h1>İlçe</h1>
      <span className="border px-1 rounded-full">{data[0]?.city.find((k: any) => k.id === cityId)?.name}</span>
      <span className="border px-1 rounded-full">{data[0]?.city.find((k: any) => k.id === cityId)?.district.find((k: any) => k.id === districtId)?.name}</span>
      <hr />
      <div className="flex flex-wrap mt-3">
        {data[0]?.city
          .find((k: any) => k.id === districtId)
          ?.district?.map((k: any, index: number) => {
            return (
              <div className="border px-1 rounded-full" key={index}>
                <Link href={`/district/${k.id}`}>{k.name}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default District;
