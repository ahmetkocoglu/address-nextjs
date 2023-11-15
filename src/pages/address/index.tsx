import React, { ChangeEvent, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input";

enum addressType {
  JOB = "iş",
  HOME = "ev",
}

type FormValues = {
  addressType?: addressType;
  addressLine: string;
  street?: string;
  post_code?: string;
  location?: string;
  userId?: number;
  countryId?: number;
  cityId?: number;
  districtId?: number;
  townId?: number;
};

const addressFormSchema = yup.object().shape({
  addressLine: yup.string().required("Lütfen adress satırını giriniz"),
});

const defaultValues: FormValues = {
  addressType: addressType.HOME,
  addressLine: "",
  street: "",
  post_code: "",
  location: "",
  userId: 0,
  countryId: 0,
  cityId: 0,
  districtId: 0,
  townId: 0,
};

const Address = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(addressFormSchema),
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = ({addressLine}: FormValues) => {
    console.log(addressLine);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-center text-8xl text-transparent 
        bg-clip-text bg-gradient-to-b from-[#051F91] from-25% to-[#6DDB17]"
        >
          Adres Girişi
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-4 py-28 gap-y-2">
            <div className="w-full md:w-1/2 px-1">
              <select className="w-full">
                <option selected>Adres Tipi Seçiniz</option>
                <option>iş</option>
                <option>ev</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-1">
              <Input
                type="text"
                placeholder="Adres satırı"
                className="mt-1"
                rounded="rounded-2xl"
                {...register("addressLine", { required: true })}
              />
            </div>
            <div className="w-full md:w-1/2 px-1">
              <input type="text" className="w-full" placeholder="Sokak" />
            </div>
            <div className="w-full md:w-1/2 px-1">
              <input type="text" className="w-full" placeholder="Posta Kodu" />
            </div>
            <div className="w-full md:w-1/2 px-1">
              <input type="text" className="w-full" placeholder="Konum" />
            </div>
            <div className="w-full md:w-1/2 px-1">
              <select className="w-full">
                <option>Kişi Seçiniz</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-1">
              {" "}
              <select className="w-full">
                <option>Ülke Seçiniz</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-1">
              <select className="w-full">
                <option>Şehir Seçiniz</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-1">
              <select className="w-full">
                <option>İlçe Seçiniz</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-1">
              <select className="w-full">
                <option>Mahalle Seçiniz</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Gönder</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;
