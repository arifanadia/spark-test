import React from "react";

const AddressForm = () => {
  return (
    <form className="space-y-2">
      <h5 className="text-3xl font-semibold text-white">Uw adres</h5>
      <p className="text-white/85">
        Via uw adres kunnen we openbare en vrij verkrijgbare informatie, bijv.
        kadaster-gegevens en satelliet beelden, gebruiken om een optimaal beeld
        te vormen van uw dak.
      </p>
      <input
        type="text"
        placeholder="Singel 63 1012VD Amsterdam"
        className="bg-white w-full rounded-md py-2 px-12 placeholder:text-gray-500"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-btn_color px-8 py-2 text-xl font-serif text-white rounded-3xl mt-10 "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
