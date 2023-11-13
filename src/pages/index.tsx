import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { getCountry } from "@/store/apps/country";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      {loading ? (
        <h1>Yükleniyor</h1>
      ) : (
        <>
          <h1>Hello, Next.js!</h1>
          <div>{data.length > 0 && data[0].city.map((k: any) => {
            return <><div>{k.name}</div></>
          })}</div>
        </>
      )}
    </>
  );
}
