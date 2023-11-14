import { AppDispatch, RootState } from "@/store";
import { getCountry } from "@/store/apps/country";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const City = () => {
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();

  // ** Selector
  const loading: boolean = useSelector(
    (state: RootState) => state.country.loading
  );
  const data: any = useSelector((state: RootState) => state.country.data);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <>
    <h1>Şehirler</h1>
      {loading ? (
        <h1>Yükleniyor</h1>
      ) : (
        <>
          <div className="flex flex-wrap">
            {data.length > 0 &&
              data[0].city.map((k: any, index: number) => {
                return (
                    <div className="w-1/3" key={index}>
                      <Link
                        href={`/city/${k.id}`}
                        className="border px-1 rounded-full"
                      >
                        {k.name}
                      </Link>
                    </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default City;
